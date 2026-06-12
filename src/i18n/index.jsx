import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from './translations/en.js';

export const LANG_OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'ga', label: 'Gaeilge' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

const loaders = {
  ga: () => import('./translations/ga.js'),
  fr: () => import('./translations/fr.js'),
  de: () => import('./translations/de.js'),
  es: () => import('./translations/es.js'),
  it: () => import('./translations/it.js'),
  zh: () => import('./translations/zh.js'),
  ja: () => import('./translations/ja.js'),
};

const cache = { en };

// Fall back to English for any key a translation is missing
function withFallback(dict, base = en) {
  if (dict === base) return dict;
  const out = Array.isArray(base) ? [] : {};
  for (const key of Object.keys(base)) {
    const b = base[key];
    const d = dict ? dict[key] : undefined;
    if (b && typeof b === 'object') out[key] = withFallback(d, b);
    else out[key] = d == null ? b : d;
  }
  return out;
}

// Replace {placeholders} in a translated string
export function fmt(str, vars) {
  return str.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
}

const LanguageContext = createContext({ code: 'en', t: en, setLang: () => {} });

export function LanguageProvider({ children }) {
  const [state, setState] = useState(() => {
    let code = 'en';
    try {
      const saved = localStorage.getItem('wi-lang');
      if (saved && LANG_OPTIONS.some((l) => l.code === saved)) code = saved;
    } catch {
      /* private browsing */
    }
    return { code, t: cache[code] || en };
  });

  const setLang = useCallback((code) => {
    if (!LANG_OPTIONS.some((l) => l.code === code)) return;
    try {
      localStorage.setItem('wi-lang', code);
    } catch {
      /* private browsing */
    }
    if (cache[code]) {
      setState({ code, t: cache[code] });
      return;
    }
    loaders[code]().then((mod) => {
      cache[code] = withFallback(mod.default);
      setState({ code, t: cache[code] });
    });
  }, []);

  // Restore a saved non-English language on first load
  useEffect(() => {
    if (state.code !== 'en' && !cache[state.code]) setLang(state.code);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.documentElement.lang = state.code;
  }, [state.code]);

  return (
    <LanguageContext.Provider value={{ code: state.code, t: state.t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export function useT() {
  return useContext(LanguageContext).t;
}
