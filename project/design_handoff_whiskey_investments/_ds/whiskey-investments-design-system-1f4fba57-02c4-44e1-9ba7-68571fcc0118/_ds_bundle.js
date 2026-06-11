/* @ds-bundle: {"format":3,"namespace":"WhiskeyInvestmentsDesignSystem_1f4fba","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"LogoMark","sourcePath":"components/core/LogoMark.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"ecfffd71cc66","components/core/Badge.jsx":"c8a5f461a00f","components/core/Button.jsx":"69facea0b4d8","components/core/Card.jsx":"e0238b873872","components/core/IconButton.jsx":"4fd56610b54e","components/core/Logo.jsx":"b82b3e09d8a4","components/core/LogoMark.jsx":"7824988b6bfc","components/core/Tag.jsx":"2188cc8219aa","components/feedback/ProgressBar.jsx":"5e710419a7b4","components/feedback/Toast.jsx":"d98c95210f67","components/forms/Checkbox.jsx":"69eb310de638","components/forms/Input.jsx":"eb54b84a32d9","components/forms/Select.jsx":"73c7494af121","components/forms/Switch.jsx":"5e2d38b34b2b","ui_kits/app/AppShell.jsx":"a2faa8e0f8b3","ui_kits/app/Dashboard.jsx":"09ec25d7f981","ui_kits/app/Login.jsx":"7f4b21b8947c","ui_kits/app/Marketplace.jsx":"f95364489d61"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WhiskeyInvestmentsDesignSystem_1f4fba = window.WhiskeyInvestmentsDesignSystem_1f4fba || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * User / entity avatar. Image src, or initials fallback on a brand-tinted
 * circle. Sizes sm | md | lg | xl. Optional ring + online status dot.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  tone = "teal",
  ring = false,
  status,
  style,
  className,
  ...rest
}) {
  const sizes = {
    sm: 28,
    md: 40,
    lg: 56,
    xl: 80
  };
  const px = sizes[size] || sizes.md;
  const tones = {
    teal: {
      bg: "var(--teal-200)",
      fg: "var(--teal-700)"
    },
    indigo: {
      bg: "var(--indigo-200)",
      fg: "var(--indigo-600)"
    },
    coral: {
      bg: "var(--coral-200)",
      fg: "var(--coral-600)"
    },
    navy: {
      bg: "var(--navy-800)",
      fg: "#fff"
    }
  };
  const t = tones[tone] || tones.teal;
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      position: "relative",
      display: "inline-flex",
      width: px,
      height: px,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontWeight: 600,
      fontSize: px * 0.4,
      boxShadow: ring ? "0 0 0 3px var(--white), 0 0 0 5px var(--teal-300)" : "none"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: px * 0.28,
      height: px * 0.28,
      borderRadius: "50%",
      background: status === "online" ? "var(--teal-500)" : "var(--navy-400)",
      border: "2px solid var(--white)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category badge. Tones map to the semantic status colours.
 * Optional dot. Use for portfolio status, labels, counts.
 */
function Badge({
  children,
  tone = "brand",
  dot = false,
  style,
  className,
  ...rest
}) {
  const tones = {
    brand: {
      bg: "var(--teal-200)",
      fg: "var(--teal-700)",
      dotc: "var(--teal-600)"
    },
    accent: {
      bg: "var(--indigo-200)",
      fg: "var(--indigo-600)",
      dotc: "var(--indigo-500)"
    },
    action: {
      bg: "var(--coral-200)",
      fg: "var(--coral-600)",
      dotc: "var(--coral-500)"
    },
    success: {
      bg: "var(--success-bg)",
      fg: "var(--success)",
      dotc: "var(--success)"
    },
    warning: {
      bg: "var(--warning-bg)",
      fg: "#c0481f",
      dotc: "var(--warning)"
    },
    danger: {
      bg: "var(--danger-bg)",
      fg: "var(--danger)",
      dotc: "var(--danger)"
    },
    neutral: {
      bg: "var(--surface-tint)",
      fg: "var(--navy-700)",
      dotc: "var(--navy-500)"
    }
  };
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontWeight: 600,
      fontSize: 12.5,
      letterSpacing: "0.01em",
      lineHeight: 1.2,
      color: t.fg,
      background: t.bg,
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dotc
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action button for Whiskey Investments.
 * Variants: primary (teal), action (coral), secondary (mint tint), ghost,
 * outline, dark (navy). Sizes sm | md | lg. Optional full width + icons.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  className,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: "8px 16px",
      radius: "var(--radius-sm)",
      gap: 6,
      height: 36
    },
    md: {
      fontSize: 16,
      padding: "11px 22px",
      radius: "var(--radius-md)",
      gap: 8,
      height: 46
    },
    lg: {
      fontSize: 17,
      padding: "15px 30px",
      radius: "var(--radius-md)",
      gap: 10,
      height: 56
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "#fff",
      boxShadow: "var(--shadow-brand)"
    },
    action: {
      background: "var(--action)",
      color: "#fff",
      boxShadow: "var(--shadow-action)"
    },
    secondary: {
      background: "var(--teal-200)",
      color: "var(--teal-700)",
      boxShadow: "none"
    },
    dark: {
      background: "var(--navy-800)",
      color: "#fff",
      boxShadow: "var(--shadow-md)"
    },
    outline: {
      background: "transparent",
      color: "var(--brand-deep)",
      boxShadow: "inset 0 0 0 1.5px var(--teal-500)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      boxShadow: "none"
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      width: block ? "100%" : "auto",
      minHeight: s.height,
      padding: s.padding,
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      border: "none",
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. White, soft radius, cool teal-tinted shadow, minimal
 * border. Variants: default, raised (bigger shadow), flat (border only),
 * brand (teal fill), dark (navy fill). Optional hover-lift via `interactive`.
 */
function Card({
  children,
  variant = "default",
  interactive = false,
  padding = "var(--space-5)",
  style,
  className,
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-sm)",
      border: "1px solid var(--border)"
    },
    raised: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-md)",
      border: "none"
    },
    flat: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: "none",
      border: "1px solid var(--border)"
    },
    brand: {
      background: "var(--brand)",
      color: "#fff",
      boxShadow: "var(--shadow-brand)",
      border: "none"
    },
    dark: {
      background: "var(--navy-800)",
      color: "#fff",
      boxShadow: "var(--shadow-md)",
      border: "none"
    },
    sunken: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      boxShadow: "none",
      border: "1px solid var(--teal-200)"
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      transition: "transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = v.boxShadow;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square icon-only button. Pass a Lucide icon name; renders a 2px outline icon.
 * Variants mirror Button: primary, action, secondary, ghost, outline, dark.
 */
function IconButton({
  icon = "plus",
  variant = "secondary",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  style,
  className,
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 44,
    lg: 54
  };
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };
  const box = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "#fff"
    },
    action: {
      background: "var(--action)",
      color: "#fff"
    },
    secondary: {
      background: "var(--teal-200)",
      color: "var(--teal-700)"
    },
    dark: {
      background: "var(--navy-800)",
      color: "#fff"
    },
    outline: {
      background: "transparent",
      color: "var(--brand-deep)",
      boxShadow: "inset 0 0 0 1.5px var(--teal-500)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)"
    }
  };
  const v = variants[variant] || variants.secondary;
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className,
    "aria-label": ariaLabel || icon,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: box,
      height: box,
      border: "none",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-base)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.94)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: iconSizes[size],
      height: iconSizes[size]
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/LogoMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Whiskey Investments — faceted cask mark.
// Extracted verbatim from the brand board (Figma node 0:370).
const FACETS = [{
  x: 55.799,
  y: 60.868,
  fill: "rgb(40,61,79)",
  d: "M 11.475 32.38 L 43.975 0 L 0 0 L 0 30.164 L 2.479 32.38 L 11.475 32.38 Z"
}, {
  x: 67.678,
  y: 4.342,
  fill: "rgb(38,148,151)",
  d: "M 0 13.841 L 22.587 13.841 C 19.435 6.986 16.344 2.2 14.814 0 L 0 13.841 Z"
}, {
  x: 9.122,
  y: 0,
  fill: "rgb(98,212,197)",
  d: "M 73.37 4.342 C 73.002 3.816 72.726 3.435 72.559 3.211 C 72.445 3.057 72.278 2.95 72.09 2.911 C 41.613 -3.366 11.999 2.356 8.612 3.052 C 8.407 3.094 8.227 3.219 8.112 3.394 C 4.895 8.362 2.216 13.299 0 18.181 L 58.556 18.181 L 73.37 4.34 L 73.37 4.342 Z"
}, {
  x: 38.35,
  y: 103.549,
  fill: "rgb(98,77,239)",
  d: "M 28.267 0.003 L 18.63 0.003 L 0 18.518 C 21.776 19.678 40.166 16.339 42.822 15.825 C 43.034 15.783 43.216 15.658 43.333 15.478 L 28.267 0 L 28.267 0.003 Z"
}, {
  x: 66.614,
  y: 103.549,
  fill: "rgb(136,123,243)",
  d: "M 15.067 15.478 C 18.437 10.236 21.247 5.07 23.57 0 L 0 0 L 15.067 15.478 Z"
}, {
  x: 9.077,
  y: 103.552,
  fill: "rgb(53,81,105)",
  d: "M 47.903 0 L 0 0 C 3.701 8.771 7.314 14.381 8.154 15.637 C 8.268 15.809 8.448 15.929 8.652 15.971 C 15.606 17.384 22.6 18.161 29.273 18.515 L 47.903 0 Z"
}, {
  x: 55.604,
  y: 28.488,
  fill: "rgb(38,148,151)",
  d: "M 0.196 32.38 L 44.17 32.38 C 44.17 19.962 41.795 8.975 38.759 0 L 0 0 L 0.196 32.38 Z"
}, {
  x: 26.631,
  y: 28.488,
  fill: "rgb(98,212,197)",
  d: "M 0.021 29.695 L 0 32.38 L 29.169 32.38 L 28.973 0 L 0.021 29.695 Z"
}, {
  x: 26.651,
  y: 28.488,
  fill: "rgb(255,255,255)",
  d: "M 28.952 0 L 2.007 0 L 0.735 14.947 C 0.318 19.847 0.073 24.771 0 29.695 L 28.95 0 L 28.952 0 Z"
}, {
  x: 67.274,
  y: 60.868,
  fill: "rgb(98,77,239)",
  d: "M 0 32.38 L 27.034 32.38 C 30.975 20.864 32.5 9.971 32.5 0 L 0 32.38 Z"
}, {
  x: 55.799,
  y: 91.032,
  fill: "rgb(98,212,197)",
  d: "M 0 0 L 0 2.216 L 2.479 2.216 L 0 0 Z"
}, {
  x: 26.631,
  y: 60.868,
  fill: "rgb(38,148,151)",
  d: "M 29.169 30.164 L 29.169 0 L 0 0 C 0 0.962 0.003 1.924 0.013 2.886 L 29.169 30.167 L 29.169 30.164 Z"
}, {
  x: 26.644,
  y: 63.754,
  fill: "rgb(98,212,197)",
  d: "M 0 0 C 0.063 5.393 0.334 10.784 0.811 16.146 L 1.997 29.494 L 29.158 29.494 L 29.158 27.281 L 0.003 0 L 0 0 Z"
}, {
  x: 0,
  y: 28.488,
  fill: "rgb(255,255,255)",
  d: "M 19.061 32.38 C 19.071 26.559 19.324 20.739 19.817 14.947 L 21.089 0 L 5.084 0 C 1.32 11.365 -0.08 22.29 0.003 32.38 L 19.061 32.38 Z"
}, {
  x: 0.003,
  y: 60.868,
  fill: "rgb(51,182,177)",
  d: "M 0 0 C 0.102 12.257 2.388 23.285 5.273 32.38 L 21.067 32.38 L 19.881 19.031 C 19.321 12.71 19.044 6.355 19.057 0 L 0 0 Z"
}, {
  x: 61.946,
  y: 93.248,
  fill: "rgb(136,123,243)",
  d: "M 0 5.331 L 5.325 0 L 32.359 0 C 32.359 0 30.102 6.425 28.238 10.304 L 4.669 10.304 L 0 5.331 Z"
}, {
  x: 56.98,
  y: 98.579,
  fill: "rgb(98,77,239)",
  d: "M 9.637 4.974 L 0 4.974 L 4.966 0 L 9.637 4.974 Z"
}];

/**
 * The brand mark on its own. Full-colour by default; pass tone="navy" or
 * tone="white" to flatten every facet to a single colour for mono contexts.
 */
function LogoMark({
  size = 40,
  tone = "color",
  title = "Whiskey Investments",
  style,
  className,
  ...rest
}) {
  const flat = tone === "navy" ? "var(--navy-800, #283d4f)" : tone === "white" ? "#ffffff" : null;
  const h = size;
  const w = size * 99.774 / 122.31;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: w,
    height: h,
    viewBox: "0 0 99.774 122.31",
    role: "img",
    "aria-label": title,
    style: style
  }, rest), FACETS.map((f, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: f.d,
    fill: flat || f.fill,
    fillRule: "nonzero",
    transform: `translate(${f.x} ${f.y})`
  })));
}
Object.assign(__ds_scope, { LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full Whiskey Investments lockup: faceted mark + wordmark.
 * The wordmark is live Poppins type (lowercase, with the signature coral dot
 * after "whiskey"). Variants: horizontal (default) or stacked; optional tagline.
 */
function Logo({
  variant = "horizontal",
  size = 44,
  tagline = false,
  tone = "color",
  // "color" | "navy" | "white" — applies to the mark
  wordmarkColor,
  // override wordmark colour
  style,
  className,
  ...rest
}) {
  const onDark = tone === "white";
  const wm = wordmarkColor || (onDark ? "#ffffff" : "var(--navy-800, #283d4f)");
  const stacked = variant === "stacked";
  const word = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.02,
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      color: wm
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.46
    }
  }, "whiskey", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral-500, #ff784e)"
    }
  }, ".")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.46,
      marginTop: size * 0.02
    }
  }, "investments"), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: size * 0.17,
      letterSpacing: "-0.01em",
      marginTop: size * 0.1,
      color: onDark ? "rgba(255,255,255,0.85)" : "var(--text-muted, #5e6e7b)"
    }
  }, "the future of whiskey investing"));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "inline-flex",
      flexDirection: stacked ? "column" : "row",
      alignItems: "center",
      gap: stacked ? size * 0.22 : size * 0.32,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.LogoMark, {
    size: stacked ? size * 1.4 : size * 1.55,
    tone: tone
  }), word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter / selection chip. Pill shaped. Toggle `selected` for the active
 * (teal-filled) state; optional removable "x". Used for marketplace filters.
 */
function Tag({
  children,
  selected = false,
  removable = false,
  onRemove,
  style,
  className,
  ...rest
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "7px 14px",
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.2,
      cursor: "pointer",
      userSelect: "none",
      color: selected ? "#fff" : "var(--text-body)",
      background: selected ? "var(--brand)" : "var(--white)",
      border: selected ? "1.5px solid var(--brand)" : "1.5px solid var(--border)",
      borderRadius: "var(--radius-pill)",
      transition: "all var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      width: 14,
      height: 14,
      opacity: 0.7
    }
  }));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horizontal progress / value bar. `value` 0–100. Tone sets the fill colour.
 * Optional label + percentage. Used for portfolio goals, cask maturity, etc.
 */
function ProgressBar({
  value = 0,
  tone = "brand",
  label,
  showValue = false,
  height = 10,
  style,
  className,
  ...rest
}) {
  const fills = {
    brand: "var(--brand)",
    accent: "var(--accent)",
    action: "var(--action)",
    mint: "var(--mint)"
  };
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      width: "100%",
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8,
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontSize: 14
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "var(--text-body)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height,
      background: "var(--teal-200)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: fills[tone] || fills.brand,
      borderRadius: 999,
      transition: "width var(--dur-slow) var(--ease-standard)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inline toast / notification. Tone sets the accent + icon. Card surface with
 * a coloured leading icon chip. Use for confirmations and alerts.
 */
function Toast({
  title,
  message,
  tone = "success",
  onClose,
  style,
  className,
  ...rest
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const tones = {
    success: {
      c: "var(--success)",
      bg: "var(--success-bg)",
      icon: "check"
    },
    info: {
      c: "var(--info)",
      bg: "var(--info-bg)",
      icon: "info"
    },
    warning: {
      c: "var(--warning)",
      bg: "var(--warning-bg)",
      icon: "triangle-alert"
    },
    danger: {
      c: "var(--danger)",
      bg: "var(--danger-bg)",
      icon: "circle-alert"
    }
  };
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      width: "100%",
      maxWidth: 420,
      padding: "16px 18px",
      background: "var(--white)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--border)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 36,
      height: 36,
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: t.bg,
      color: t.c
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon,
    style: {
      width: 20,
      height: 20,
      strokeWidth: 2.4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body, 'Poppins', sans-serif)",
      fontSize: 14,
      color: "var(--text-muted)",
      marginTop: 2,
      lineHeight: 1.45
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    onClick: onClose,
    style: {
      width: 18,
      height: 18,
      color: "var(--text-subtle)",
      cursor: "pointer",
      flex: "none"
    }
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox with brand-teal checked fill and Lucide check. Controlled via
 * `checked` + `onChange`, or uncontrolled with `defaultChecked`.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  className,
  id,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const cbId = id || React.useId();
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 22,
      height: 22,
      flex: "none",
      borderRadius: 7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--brand)" : "var(--white)",
      border: on ? "1.5px solid var(--brand)" : "1.5px solid var(--border-strong)",
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 15,
      height: 15,
      color: "#fff",
      strokeWidth: 3
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body, 'Poppins', sans-serif)",
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, leading Lucide icon, hint, and error state.
 * White field, soft radius, teal focus ring.
 */
function Input({
  label,
  hint,
  error,
  icon,
  size = "md",
  style,
  className,
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || React.useId();
  const heights = {
    md: 46,
    lg: 54
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontWeight: 500,
      fontSize: 14,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: heights[size] || heights.md,
      padding: "0 14px",
      background: "var(--white)",
      borderRadius: "var(--radius-md)",
      border: `1.5px solid ${error ? "var(--danger)" : focused ? "var(--teal-500)" : "var(--border-strong)"}`,
      boxShadow: focused && !error ? "0 0 0 4px var(--ring)" : "none",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18,
      color: "var(--text-subtle)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body, 'Poppins', sans-serif)",
      fontSize: 16,
      color: "var(--text-strong)",
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body, 'Poppins', sans-serif)",
      fontSize: 13,
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Native-backed select with brand styling and a Lucide chevron.
 * Pass options as [{value, label}] or strings.
 */
function Select({
  label,
  options = [],
  hint,
  size = "md",
  style,
  className,
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const selId = id || React.useId();
  const heights = {
    md: 46,
    lg: 54
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-display, 'Poppins', sans-serif)",
      fontWeight: 500,
      fontSize: 14,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: heights[size] || heights.md,
      background: "var(--white)",
      borderRadius: "var(--radius-md)",
      border: `1.5px solid ${focused ? "var(--teal-500)" : "var(--border-strong)"}`,
      boxShadow: focused ? "0 0 0 4px var(--ring)" : "none",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      flex: 1,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "0 40px 0 14px",
      fontFamily: "var(--font-body, 'Poppins', sans-serif)",
      fontSize: 16,
      color: "var(--text-strong)",
      cursor: "pointer"
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      position: "absolute",
      right: 14,
      width: 18,
      height: 18,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body, 'Poppins', sans-serif)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle switch. Teal track when on; smooth knob slide. Controlled or
 * uncontrolled; optional label.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = "md",
  style,
  className,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = {
    sm: {
      w: 38,
      h: 22,
      k: 16
    },
    md: {
      w: 48,
      h: 28,
      k: 22
    }
  }[size] || {
    w: 48,
    h: 28,
    k: 22
  };
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: dims.w,
      height: dims.h,
      flex: "none",
      borderRadius: 999,
      padding: 3,
      display: "flex",
      alignItems: "center",
      background: on ? "var(--brand)" : "var(--navy-300)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: dims.k,
      height: dims.k,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 1px 3px rgba(40,61,79,0.3)",
      transform: on ? `translateX(${dims.w - dims.k - 6}px)` : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-emphasis)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body, 'Poppins', sans-serif)",
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
/* global React */
// Whiskey Investments — App shell: left sidebar nav + top bar.
const {
  Logo,
  Avatar,
  IconButton,
  Badge
} = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};
function AppShell({
  active,
  onNav,
  onSignOut,
  children
}) {
  const nav = [{
    id: "dashboard",
    icon: "layout-dashboard",
    label: "Dashboard"
  }, {
    id: "marketplace",
    icon: "store",
    label: "Marketplace"
  }, {
    id: "portfolio",
    icon: "wine",
    label: "My casks"
  }, {
    id: "activity",
    icon: "arrow-left-right",
    label: "Activity"
  }, {
    id: "wallet",
    icon: "wallet",
    label: "Wallet"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "248px 1fr",
      minHeight: "100%",
      background: "var(--bg-app)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--white)",
      borderRight: "1px solid var(--border)",
      padding: "26px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 6
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, nav.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 14px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-display)",
        fontWeight: on ? 600 : 500,
        fontSize: 15,
        background: on ? "var(--teal-100)" : "transparent",
        color: on ? "var(--teal-700)" : "var(--text-body)",
        transition: "background var(--dur-base)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": n.icon,
      style: {
        width: 19,
        height: 19
      }
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "var(--navy-800)",
      borderRadius: "var(--radius-lg)",
      padding: 18,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15
    }
  }, "Refer a friend"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "rgba(255,255,255,0.72)",
      margin: "6px 0 12px",
      lineHeight: 1.45
    }
  }, "Give \xA325, get \xA325 in cask credit."), /*#__PURE__*/React.createElement("button", {
    onClick: onSignOut,
    style: {
      width: "100%",
      padding: "9px",
      borderRadius: "var(--radius-sm)",
      border: "none",
      background: "var(--mint)",
      color: "var(--navy-800)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 13.5,
      cursor: "pointer"
    }
  }, "Invite & earn"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "18px 32px",
      borderBottom: "1px solid var(--border)",
      background: "color-mix(in srgb, var(--white) 70%, transparent)",
      backdropFilter: "blur(8px)",
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      position: "absolute",
      left: 14,
      top: "50%",
      transform: "translateY(-50%)",
      width: 18,
      height: 18,
      color: "var(--text-subtle)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search casks, distilleries, regions\u2026",
    style: {
      width: "100%",
      height: 44,
      padding: "0 14px 0 42px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--border)",
      background: "var(--white)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      outline: "none",
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingLeft: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Ava Reid",
    tone: "teal",
    size: "md",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--navy-800)"
    }
  }, "Ava Reid"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Premium"))))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "32px",
      overflow: "auto"
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
/* global React */
// Whiskey Investments — Portfolio dashboard.
const {
  Card,
  Badge,
  Button,
  ProgressBar,
  LogoMark
} = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};
function AreaChart({
  color = "var(--teal-500)",
  fill = "var(--teal-200)"
}) {
  // static demo series, normalised to a 600x180 viewbox
  const pts = [12, 18, 15, 24, 22, 30, 28, 38, 35, 44, 52, 49, 60, 66];
  const w = 600,
    h = 180,
    max = 70;
  const step = w / (pts.length - 1);
  const line = pts.map((p, i) => `${i * step},${h - p / max * h}`).join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: 180,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: fill,
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: color,
    strokeWidth: "3",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}
function Dashboard() {
  const ranges = ["1M", "3M", "1Y", "All"];
  const [range, setRange] = React.useState("1Y");
  const holdings = [{
    name: "Macallan 2012",
    region: "Speyside",
    val: "£18,420",
    change: "+14.2%",
    up: true,
    mat: 72
  }, {
    name: "Ardbeg 2009",
    region: "Islay",
    val: "£12,980",
    change: "+8.6%",
    up: true,
    mat: 58
  }, {
    name: "Springbank 2015",
    region: "Campbeltown",
    val: "£9,150",
    change: "-2.1%",
    up: false,
    mat: 41
  }, {
    name: "Clynelish 2011",
    region: "Highland",
    val: "£7,640",
    change: "+5.9%",
    up: true,
    mat: 64
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wi-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Your portfolio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 34,
      color: "var(--navy-800)",
      margin: 0
    }
  }, "Good evening, Ava"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-down-to-line",
      style: {
        width: 17,
        height: 17
      }
    })
  }, "Deposit"), /*#__PURE__*/React.createElement(Button, {
    variant: "action",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus",
      style: {
        width: 17,
        height: 17
      }
    })
  }, "Buy a cask"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.8fr 1fr",
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "26px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "Total value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 40,
      color: "var(--navy-800)",
      letterSpacing: "-0.01em"
    }
  }, "\xA348,190"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "+\xA35,140 (11.9%) this year")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      background: "var(--teal-100)",
      padding: 4,
      borderRadius: "var(--radius-pill)"
    }
  }, ranges.map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRange(r),
    style: {
      padding: "6px 14px",
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 13,
      background: range === r ? "var(--white)" : "transparent",
      color: range === r ? "var(--teal-700)" : "var(--text-muted)",
      boxShadow: range === r ? "var(--shadow-xs)" : "none"
    }
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(AreaChart, null))), /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    padding: "26px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wi-eyebrow",
    style: {
      color: "var(--mint)"
    }
  }, "Cash balance"), /*#__PURE__*/React.createElement(LogoMark, {
    size: 30,
    tone: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 34,
      marginTop: 14
    }
  }, "\xA33,260.00"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "rgba(255,255,255,0.7)",
      marginTop: 4
    }
  }, "Available to invest"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.14)",
      margin: "18px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "rgba(255,255,255,0.7)",
      marginBottom: 10
    }
  }, "Next valuation in 9 days"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true
  }, "Add funds"))), /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 18,
      color: "var(--navy-800)",
      margin: 0
    }
  }, "Your casks"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--brand-deep)",
      textDecoration: "none"
    }
  }, "View all")), holdings.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h.name,
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1.4fr 1fr 1fr",
      alignItems: "center",
      gap: 16,
      padding: "16px 24px",
      borderBottom: i < holdings.length - 1 ? "1px solid var(--border)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: "var(--teal-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--teal-700)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wine",
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--navy-800)"
    }
  }, h.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, h.region))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProgressBar, {
    value: h.mat,
    label: "Maturity"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--navy-800)",
      textAlign: "right"
    }
  }, h.val), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: h.up ? "success" : "danger"
  }, h.change))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Login.jsx
try { (() => {
/* global React */
// Whiskey Investments — Login screen. Split-panel: brand panel + form.
const {
  Logo,
  LogoMark,
  Button,
  Input,
  Checkbox
} = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};
function Login({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      minHeight: "100%",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--navy-800)",
      color: "#fff",
      padding: "48px 52px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 40,
    tone: "white"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wi-eyebrow",
    style: {
      color: "var(--mint)",
      marginBottom: 18
    }
  }, "The future of whiskey investing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.05,
      letterSpacing: "0.01em",
      margin: 0
    }
  }, "Own a piece of", /*#__PURE__*/React.createElement("br", null), "the cask."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.78)",
      maxWidth: 380,
      marginTop: 18
    }
  }, "Buy fractional shares of rare casks, track their value as they age, and sell when the time is right.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    k: "\xA3148M",
    v: "Casks under management"
  }), /*#__PURE__*/React.createElement(Stat, {
    k: "12.6%",
    v: "Avg. annual return"
  }), /*#__PURE__*/React.createElement(Stat, {
    k: "9,400+",
    v: "Investors"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -60,
      bottom: -50,
      opacity: 0.12,
      transform: "rotate(8deg)"
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 360,
    tone: "white"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 30,
      color: "var(--navy-800)",
      margin: 0
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      marginTop: 6,
      marginBottom: 28
    }
  }, "Sign in to manage your portfolio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    placeholder: "you@example.com",
    defaultValue: "ava@reid.co"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    icon: "lock",
    type: "password",
    defaultValue: "whiskey123"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      color: "var(--brand-deep)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg",
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    block: true,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "fingerprint",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Use passkey")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      textAlign: "center",
      marginTop: 24
    }
  }, "New here? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--brand-deep)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, "Create an account")))));
}
function Stat({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "rgba(255,255,255,0.65)",
      marginTop: 2,
      maxWidth: 110,
      lineHeight: 1.35
    }
  }, v));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Marketplace.jsx
try { (() => {
/* global React */
// Whiskey Investments — Marketplace: filter + cask cards.
const {
  Card,
  Badge,
  Button,
  Tag
} = window.WhiskeyInvestmentsDesignSystem_1f4fba || {};
function Sparkline({
  up
}) {
  const pts = up ? [10, 14, 12, 18, 22, 20, 28, 32] : [30, 26, 28, 22, 24, 18, 16, 12];
  const w = 120,
    h = 36,
    max = 36;
  const step = w / (pts.length - 1);
  const line = pts.map((p, i) => `${i * step},${h - p / max * h}`).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: 120,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: up ? "var(--teal-500)" : "var(--coral-500)",
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}
function CaskCard({
  c
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    interactive: true,
    padding: "0",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 96,
      background: c.band,
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      background: "rgba(255,255,255,0.92)"
    }
  }, c.region), c.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "action"
  }, c.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--navy-800)"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, c.year, " \xB7 ", c.vol)), /*#__PURE__*/React.createElement(Sparkline, {
    up: c.up
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, "Share from"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--navy-800)"
    }
  }, c.price)), /*#__PURE__*/React.createElement(Badge, {
    tone: c.up ? "success" : "danger",
    dot: true
  }, c.change)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    style: {
      marginTop: 16
    }
  }, "Invest")));
}
function Marketplace() {
  const filters = ["All", "Speyside", "Islay", "Highland", "Bourbon", "Under £500"];
  const [active, setActive] = React.useState("All");
  const casks = [{
    name: "Macallan",
    year: 2012,
    vol: "500L",
    region: "Speyside",
    price: "£420",
    change: "+14.2%",
    up: true,
    band: "var(--teal-500)",
    tag: "Hot"
  }, {
    name: "Ardbeg",
    year: 2009,
    vol: "250L",
    region: "Islay",
    price: "£680",
    change: "+8.6%",
    up: true,
    band: "var(--navy-800)"
  }, {
    name: "Clynelish",
    year: 2011,
    vol: "200L",
    region: "Highland",
    price: "£310",
    change: "+5.9%",
    up: true,
    band: "var(--indigo-500)"
  }, {
    name: "Springbank",
    year: 2015,
    vol: "500L",
    region: "Campbeltown",
    price: "£540",
    change: "-2.1%",
    up: false,
    band: "var(--coral-500)",
    tag: "New"
  }, {
    name: "GlenAllachie",
    year: 2013,
    vol: "250L",
    region: "Speyside",
    price: "£260",
    change: "+3.4%",
    up: true,
    band: "var(--teal-600)"
  }, {
    name: "Caol Ila",
    year: 2010,
    vol: "200L",
    region: "Islay",
    price: "£395",
    change: "+6.1%",
    up: true,
    band: "var(--mint)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wi-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Marketplace"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 34,
      color: "var(--navy-800)",
      margin: 0
    }
  }, "Casks open for investment"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "sliders-horizontal",
      style: {
        width: 17,
        height: 17
      }
    })
  }, "Filters")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 24
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: active === f,
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    }
  }, casks.map(c => /*#__PURE__*/React.createElement(CaskCard, {
    key: c.name,
    c: c
  }))));
}
window.Marketplace = Marketplace;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Marketplace.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
