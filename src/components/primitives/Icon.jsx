import {
  Factory, BadgeCheck, Warehouse, HandCoins, Percent, RefreshCcw,
  ArrowRight, ArrowDown, Download, Globe, ChevronDown, Languages,
  Check, Menu, X, AlertTriangle, CheckCircle, Tag, MousePointerClick,
  Hourglass, Package, Shield, Calculator, Wallet, ScanFace, FileText,
  BellRing, Handshake, ShieldCheck, Droplets, CalendarRange, Award,
  Fingerprint, Scale, Boxes, Send, Landmark, MessageCircle, Sparkles,
  TrendingUp, EyeOff, PhoneOff, FileQuestion, Star, Play, ExternalLink,
  Lock, Plus, Minus, Receipt, Upload, FileCheck, MailCheck, Mail,
  Phone, AlertCircle,
} from 'lucide-react';

const ICON_MAP = {
  'factory': Factory,
  'badge-check': BadgeCheck,
  'warehouse': Warehouse,
  'hand-coins': HandCoins,
  'percent': Percent,
  'refresh-ccw': RefreshCcw,
  'arrow-right': ArrowRight,
  'arrow-down': ArrowDown,
  'download': Download,
  'globe': Globe,
  'chevron-down': ChevronDown,
  'languages': Languages,
  'check': Check,
  'menu': Menu,
  'x': X,
  'alert-triangle': AlertTriangle,
  'check-circle': CheckCircle,
  'tag': Tag,
  'mouse-pointer-click': MousePointerClick,
  'hourglass': Hourglass,
  'package': Package,
  'shield': Shield,
  'calculator': Calculator,
  'wallet': Wallet,
  'scan-face': ScanFace,
  'file-text': FileText,
  'bell-ring': BellRing,
  'handshake': Handshake,
  'shield-check': ShieldCheck,
  'droplets': Droplets,
  'calendar-range': CalendarRange,
  'award': Award,
  'fingerprint': Fingerprint,
  'scale': Scale,
  'boxes': Boxes,
  'send': Send,
  'landmark': Landmark,
  'message-circle': MessageCircle,
  'sparkles': Sparkles,
  'trending-up': TrendingUp,
  'eye-off': EyeOff,
  'phone-off': PhoneOff,
  'file-question': FileQuestion,
  'star': Star,
  'play': Play,
  'external-link': ExternalLink,
  'lock': Lock,
  'plus': Plus,
  'minus': Minus,
  'receipt': Receipt,
  'upload': Upload,
  'file-check': FileCheck,
  'mail-check': MailCheck,
  'mail': Mail,
  'phone': Phone,
  'alert-circle': AlertCircle,
};

export default function Icon({ name, size = 22, strokeWidth = 2, color, fill = false, style, className }) {
  const LucideIcon = ICON_MAP[name];
  if (!LucideIcon) return null;
  return (
    <span
      className={'wi-ico ' + (fill ? 'wi-ico-fill ' : '') + (className || '')}
      style={{ display: 'inline-flex', width: size, height: size, color, flex: '0 0 auto', ...style }}
      aria-hidden="true"
    >
      <LucideIcon
        size={size}
        strokeWidth={strokeWidth}
        fill={fill ? 'currentColor' : 'none'}
        style={{ display: 'block' }}
      />
    </span>
  );
}
