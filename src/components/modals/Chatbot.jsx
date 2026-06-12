import { useState, useEffect, useRef } from 'react';
import Icon from '../primitives/Icon.jsx';
import { CHAT_CONTEXT2 } from '../../data/index.js';
import { useLang, LANG_OPTIONS } from '../../i18n/index.jsx';

export default function Chatbot() {
  const { code, t } = useLang();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  // The greeting is rendered virtually so it follows the selected language
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);
  const greeting = { role: 'assistant', content: t.chat.greeting };

  useEffect(() => {
    const h = () => setOpen(true);
    document.addEventListener('wi-open-chat', h);
    return () => document.removeEventListener('wi-open-chat', h);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, busy]);

  const send = async (override) => {
    const text = (typeof override === 'string' ? override : input).trim();
    if (!text || busy) return;
    const next = [...messages, { role: 'user', content: text }];
    const convoWithGreeting = [greeting, ...next];
    setMessages(next);
    setInput('');
    setBusy(true);
    try {
      const apiKey = import.meta.env.VITE_CLAUDE_API_KEY;
      if (!apiKey) {
        setMessages((m) => [
          ...m,
          { role: 'assistant', content: t.chat.notConfigured },
        ]);
        setBusy(false);
        return;
      }

      const langLabel = (LANG_OPTIONS.find((l) => l.code === code) || LANG_OPTIONS[0]).label;
      const langNote = code === 'en' ? '' : `\n\nIMPORTANT: The user is browsing the site in ${langLabel}. Reply in ${langLabel}.`;
      const apiMessages = [
        {
          role: 'user',
          content: CHAT_CONTEXT2 + langNote + '\n\nConversation so far:\n' + convoWithGreeting.map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n') + '\n\nReply as the assistant to the last user message. Do not prefix with "Assistant:".',
        },
      ];

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 512,
          messages: apiMessages,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.content?.[0]?.text?.trim() || '';
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content: reply || t.chat.emptyReply,
        },
      ]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content: t.chat.connectionError,
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  const suggestions = t.chat.suggestions;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t.chat.openAria}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 80,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'var(--coral-500)',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          boxShadow: 'var(--shadow-action)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform .2s var(--ease-emphasis)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Icon name={open ? 'x' : 'message-circle'} size={26} />
      </button>

      {open ? (
        <div
          style={{
            position: 'fixed',
            right: 24,
            bottom: 96,
            zIndex: 80,
            width: 'min(380px, calc(100vw - 32px))',
            height: 'min(560px, calc(100vh - 140px))',
            background: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid var(--line)',
            animation: 'wi-chat-in .26s var(--ease-emphasis)',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'var(--navy-800)',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: 11,
            }}
          >
            <span
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: 'rgba(98,212,197,0.18)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name="sparkles" size={19} color="var(--mint)" />
            </span>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 15,
                  color: '#fff',
                }}
              >
                {t.chat.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11.5,
                  color: 'var(--mint)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: 'var(--mint)',
                  }}
                />
                {t.chat.online}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              background: 'var(--teal-100)',
            }}
          >
            {[greeting, ...messages].map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '86%',
                }}
              >
                <div
                  style={{
                    padding: '11px 14px',
                    borderRadius: 14,
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    lineHeight: 1.5,
                    whiteSpace: 'pre-wrap',
                    background:
                      m.role === 'user' ? 'var(--teal-500)' : 'var(--white)',
                    color: m.role === 'user' ? '#fff' : 'var(--text-body)',
                    borderBottomRightRadius: m.role === 'user' ? 4 : 14,
                    borderBottomLeftRadius: m.role === 'user' ? 14 : 4,
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {busy ? (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '12px 16px',
                  borderRadius: 14,
                  background: 'var(--white)',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                <span className="wi-typing">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>
            ) : null}

            {messages.length === 0 ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  marginTop: 4,
                }}
              >
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setInput(''); send(s); }}
                    style={{
                      textAlign: 'left',
                      padding: '10px 13px',
                      borderRadius: 12,
                      border: '1px solid var(--teal-300)',
                      background: 'rgba(255,255,255,.7)',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: 'var(--teal-700)',
                      fontWeight: 500,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Input */}
          <div
            style={{
              padding: '12px',
              borderTop: '1px solid var(--line)',
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
              placeholder={t.chat.placeholder}
              style={{
                flex: 1,
                border: '1px solid var(--line)',
                borderRadius: 999,
                padding: '11px 16px',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                outline: 'none',
                color: 'var(--text-body)',
              }}
            />
            <button
              onClick={() => send()}
              disabled={busy || !input.trim()}
              aria-label={t.chat.send}
              style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                border: 'none',
                cursor: busy || !input.trim() ? 'default' : 'pointer',
                background:
                  busy || !input.trim() ? 'var(--navy-300)' : 'var(--coral-500)',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '0 0 auto',
              }}
            >
              <Icon name="send" size={18} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
