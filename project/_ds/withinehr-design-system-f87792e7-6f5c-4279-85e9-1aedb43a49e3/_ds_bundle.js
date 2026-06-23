/* @ds-bundle: {"format":3,"namespace":"WithinEHRDesignSystem_f87792","components":[{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Avatar","sourcePath":"components/feedback/Avatar.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Counter","sourcePath":"components/feedback/Counter.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"SidebarItem","sourcePath":"components/navigation/SidebarItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Icon.jsx":"7fcf1b003359","components/feedback/Avatar.jsx":"79e46fb1025f","components/feedback/Badge.jsx":"94e3b3d212e7","components/feedback/Counter.jsx":"1eb0ee231c00","components/feedback/Dialog.jsx":"d604a738ae04","components/feedback/Tag.jsx":"f6b050d85fc5","components/feedback/Toast.jsx":"a4ef67047abb","components/forms/Button.jsx":"469210a4ef36","components/forms/Checkbox.jsx":"d715b518f8dd","components/forms/IconButton.jsx":"a4b6c2b64a25","components/forms/Input.jsx":"4f9dcc997d15","components/forms/Select.jsx":"f076474b678a","components/forms/Switch.jsx":"b9e830998b9a","components/layout/Card.jsx":"07bbc6b0967c","components/navigation/SidebarItem.jsx":"8e38ead8c530","components/navigation/Tabs.jsx":"8821628eeff7","ui_kits/withinehr-app/Logo.jsx":"4a950fd2fbec","ui_kits/withinehr-app/Messaging.jsx":"247f997b9be2","ui_kits/withinehr-app/Patients.jsx":"4053cc0b1d89","ui_kits/withinehr-app/Requests.jsx":"96d899babe0e","ui_kits/withinehr-app/Schedule.jsx":"4b58e1323c52","ui_kits/withinehr-app/Sidebar.jsx":"7e4d7ad656cd","ui_kits/withinehr-app/TopBar.jsx":"10c0e6e961cb","ui_kits/withinehr-app/app.jsx":"d2be75475203"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WithinEHRDesignSystem_f87792 = window.WithinEHRDesignSystem_f87792 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
const {
  useRef,
  useEffect
} = React;
/**
 * Icon — renders a Lucide line icon at the WithinEHR default of 16px.
 * Requires the Lucide UMD script to be present on the page
 * (<script src="https://unpkg.com/lucide@latest"></script>).
 * Icons inherit `color` (currentColor), matching the brand's
 * monochrome, thin-stroke iconography.
 */
function Icon({
  name = "circle",
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
  style = {},
  className
}) {
  const ref = useRef(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    if (!window.lucide || !window.lucide.createIcons) {
      host.innerHTML = "";
      return;
    }
    host.innerHTML = `<i data-lucide="${name}"></i>`;
    try {
      window.lucide.createIcons({
        nameAttr: "data-lucide",
        attrs: {
          "stroke-width": strokeWidth
        }
      });
    } catch (e) {
      window.lucide.createIcons();
    }
    const svg = host.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.style.display = "block";
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    className: className,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      flex: "none",
      lineHeight: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Avatar.jsx
try { (() => {
/**
 * Avatar — patient / staff identity. Renders a photo when `src` is set,
 * otherwise tinted initials. Rounded-square by default (radius 3, per
 * the product), with an optional presence dot.
 */
function Avatar({
  src,
  name = "",
  size = 32,
  shape = "rounded",
  status,
  style = {}
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  const radius = shape === "circle" ? "50%" : "var(--radius-xs)";
  const statusColors = {
    online: "var(--green-600)",
    busy: "var(--red-700)",
    away: "var(--orange-600)",
    offline: "var(--grey-400)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      flex: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: radius,
      overflow: "hidden",
      background: src ? "var(--grey-200)" : "var(--teal-100)",
      color: "var(--teal-700)",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: Math.max(10, Math.round(size * 0.4)),
      letterSpacing: "-0.3px"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?"), status ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -1,
      bottom: -1,
      width: Math.max(8, size * 0.28),
      height: Math.max(8, size * 0.28),
      borderRadius: "50%",
      background: statusColors[status] || statusColors.offline,
      border: "2px solid var(--surface-card)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Badge — status pill with a soft tinted surface and matching text.
 * Use for record states: confirmed, pending, overdue, etc.
 */
function Badge({
  children,
  tone = "neutral",
  icon,
  dot = false,
  style = {}
}) {
  const tones = {
    neutral: {
      bg: "var(--surface-sunken)",
      fg: "var(--text-secondary)",
      dot: "var(--grey-500)"
    },
    primary: {
      bg: "var(--teal-50)",
      fg: "var(--teal-700)",
      dot: "var(--teal-600)"
    },
    success: {
      bg: "var(--surface-success)",
      fg: "var(--text-success)",
      dot: "var(--green-600)"
    },
    warning: {
      bg: "var(--surface-warning)",
      fg: "var(--text-warning)",
      dot: "var(--orange-600)"
    },
    danger: {
      bg: "var(--surface-danger)",
      fg: "var(--text-danger)",
      dot: "var(--red-700)"
    },
    info: {
      bg: "var(--cyan-100)",
      fg: "var(--cyan-900)",
      dot: "var(--cyan-700)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: 22,
      padding: "0 9px",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "-0.2px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dot,
      flex: "none"
    }
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Counter.jsx
try { (() => {
/**
 * Counter — small red notification count, as used on the sidebar
 * (Messaging / Requests) and the Notifications button.
 */
function Counter({
  count = 0,
  max = 99,
  tone = "danger",
  style = {}
}) {
  const tones = {
    danger: "var(--red-700)",
    primary: "var(--teal-600)",
    neutral: "var(--grey-700)"
  };
  const display = count > max ? `${max}+` : `${count}`;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 16,
      height: 16,
      padding: "0 5px",
      background: tones[tone] || tones.danger,
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      boxSizing: "border-box",
      ...style
    }
  }, display);
}
Object.assign(__ds_scope, { Counter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Counter.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — centered modal on a dimmed overlay. White card, 10px radius,
 * close affordance, centered title, and a footer slot for actions.
 * Render conditionally (when `open`) — it does not manage its own state.
 */
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 400,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(14,14,14,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 1000,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "relative",
      width,
      maxWidth: "100%",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-pop)",
      padding: 24,
      boxSizing: "border-box",
      ...style
    }
  }, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      display: "inline-flex",
      padding: 4,
      border: "none",
      background: "transparent",
      color: "var(--icon-muted)",
      cursor: "pointer",
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 8px",
      textAlign: "center",
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: "-1px",
      color: "var(--text-heading)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.45,
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: 20
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/**
 * Tag — neutral label chip with an optional remove affordance.
 * Use for filters, categories and care-team labels.
 */
function Tag({
  children,
  tone = "neutral",
  onRemove,
  icon,
  style = {}
}) {
  const tones = {
    neutral: {
      bg: "var(--surface-card)",
      fg: "var(--text-secondary)",
      border: "var(--border-default)"
    },
    primary: {
      bg: "var(--teal-50)",
      fg: "var(--teal-700)",
      border: "var(--teal-200)"
    },
    soft: {
      bg: "var(--cyan-100)",
      fg: "var(--cyan-900)",
      border: "var(--cyan-300)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: onRemove ? "0 6px 0 10px" : "0 10px",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "-0.2px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      padding: 0,
      border: "none",
      background: "transparent",
      color: "var(--icon-muted)",
      cursor: "pointer",
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Toast — transient confirmation / alert. White card with a tinted
 * leading icon and a soft pop shadow.
 */
function Toast({
  title,
  message,
  tone = "success",
  onClose,
  style = {}
}) {
  const tones = {
    success: {
      icon: "check-circle",
      color: "var(--green-600)"
    },
    danger: {
      icon: "alert-circle",
      color: "var(--red-700)"
    },
    warning: {
      icon: "alert-triangle",
      color: "var(--orange-600)"
    },
    info: {
      icon: "info",
      color: "var(--teal-600)"
    }
  };
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      width: 320,
      padding: 14,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-pop)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    color: t.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "-0.3px",
      color: "var(--text-heading)"
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 2,
      letterSpacing: "-0.2px"
    }
  }, message) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      display: "inline-flex",
      padding: 2,
      border: "none",
      background: "transparent",
      color: "var(--icon-muted)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — the WithinEHR action control.
 * Filled teal primary, teal outline secondary, quiet ghost, and red
 * destructive variants. Bold Nunito label, 5px radius, soft hover/press.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const sizes = {
    sm: {
      h: 32,
      px: 12,
      font: 12,
      gap: 6,
      icon: 14
    },
    md: {
      h: 40,
      px: 16,
      font: 14,
      gap: 8,
      icon: 16
    },
    lg: {
      h: 48,
      px: 24,
      font: 16,
      gap: 8,
      icon: 18
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: "var(--teal-600)",
      bgHover: "var(--teal-700)",
      bgActive: "var(--teal-800)",
      fg: "var(--text-on-primary)",
      border: "transparent"
    },
    danger: {
      bg: "var(--red-700)",
      bgHover: "var(--red-800)",
      bgActive: "var(--red-900)",
      fg: "#fff",
      border: "transparent"
    },
    secondary: {
      bg: "var(--surface-card)",
      bgHover: "var(--teal-50)",
      bgActive: "var(--teal-100)",
      fg: "var(--teal-600)",
      border: "var(--teal-600)"
    },
    ghost: {
      bg: "transparent",
      bgHover: "var(--surface-hover)",
      bgActive: "var(--surface-selected)",
      fg: "var(--teal-600)",
      border: "transparent"
    },
    "danger-ghost": {
      bg: "transparent",
      bgHover: "var(--red-50)",
      bgActive: "var(--red-100)",
      fg: "var(--red-700)",
      border: "transparent"
    }
  };
  const p = palettes[variant] || palettes.primary;
  const bg = disabled ? variant === "secondary" || variant === "ghost" || variant === "danger-ghost" ? "transparent" : "var(--surface-disabled)" : active ? p.bgActive : hover ? p.bgHover : p.bg;
  const fg = disabled ? "var(--text-disabled)" : p.fg;
  const borderColor = disabled ? variant === "secondary" ? "var(--border-default)" : "transparent" : p.border;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: s.font,
      letterSpacing: "-0.4px",
      lineHeight: 1,
      color: fg,
      background: bg,
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      transform: active && !disabled ? "translateY(0.5px)" : "none",
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children != null ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — 18px square, teal fill with a white check when selected.
 * Pass `label` for an inline label, or use standalone.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: disabled ? "var(--text-disabled)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: `1.5px solid ${checked ? "var(--teal-600)" : "var(--border-strong)"}`,
      background: checked ? "var(--teal-600)" : "var(--surface-card)",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "#fff",
    strokeWidth: 3
  }) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * IconButton — square, icon-only control. Mirrors Button's variants
 * but sized for a single 16px glyph (toolbars, table rows, top bar).
 */
function IconButton({
  icon = "more-horizontal",
  variant = "ghost",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel = "action",
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const sizes = {
    sm: {
      box: 28,
      icon: 14
    },
    md: {
      box: 36,
      icon: 16
    },
    lg: {
      box: 44,
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: "var(--teal-600)",
      bgHover: "var(--teal-700)",
      fg: "#fff",
      border: "transparent"
    },
    secondary: {
      bg: "var(--surface-card)",
      bgHover: "var(--teal-50)",
      fg: "var(--teal-600)",
      border: "var(--border-default)"
    },
    ghost: {
      bg: "transparent",
      bgHover: "var(--surface-hover)",
      fg: "var(--icon-default)",
      border: "transparent"
    },
    danger: {
      bg: "transparent",
      bgHover: "var(--red-50)",
      fg: "var(--red-700)",
      border: "transparent"
    }
  };
  const p = palettes[variant] || palettes.ghost;
  const bg = disabled ? "transparent" : active ? p.bgHover : hover ? p.bgHover : p.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      background: bg,
      color: disabled ? "var(--text-disabled)" : p.fg,
      border: `1px solid ${p.border}`,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Input — single-line text field. White surface, hairline border that
 * turns teal on focus, optional leading icon, label, hint and error.
 */
function Input({
  label,
  hint,
  error,
  success,
  iconLeft,
  iconRight,
  size = "md",
  placeholder = "",
  value,
  defaultValue,
  onChange,
  disabled = false,
  type = "text",
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: {
      h: 32,
      font: 12,
      px: 10,
      icon: 14
    },
    md: {
      h: 36,
      font: 13,
      px: 12,
      icon: 16
    },
    lg: {
      h: 44,
      font: 14,
      px: 14,
      icon: 18
    }
  };
  const s = sizes[size] || sizes.md;
  let borderColor = "var(--border-default)";
  if (error) borderColor = "var(--border-error)";else if (success) borderColor = "var(--border-success)";else if (focus) borderColor = "var(--border-focus)";
  const ring = error ? "var(--ring-danger)" : "var(--ring-focus)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "-0.3px",
      color: "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus && !disabled ? ring : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      boxSizing: "border-box"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon,
    color: "var(--icon-muted)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      letterSpacing: "-0.3px",
      color: "var(--text-body)",
      padding: 0
    }
  }, rest)), iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon,
    color: "var(--icon-muted)"
  }) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 10,
      color: "var(--text-danger)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 10
  }), " ", error) : success ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 10,
      color: "var(--text-success)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 10
  }), " ", success) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Select — styled wrapper around a native <select>. Matches Input's
 * surface and focus treatment, with a trailing chevron.
 */
function Select({
  label,
  hint,
  error,
  size = "md",
  value,
  defaultValue,
  onChange,
  disabled = false,
  placeholder,
  options = [],
  children,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: {
      h: 32,
      font: 12,
      px: 10
    },
    md: {
      h: 36,
      font: 13,
      px: 12
    },
    lg: {
      h: 44,
      font: 14,
      px: 14
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = error ? "var(--border-error)" : focus ? "var(--border-focus)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "-0.3px",
      color: "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: s.h,
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus && !disabled ? "var(--ring-focus)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: `0 ${s.px + 22}px 0 ${s.px}px`,
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      letterSpacing: "-0.3px",
      color: value || defaultValue ? "var(--text-body)" : "var(--text-placeholder)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === "string" ? o : o.value,
    value: typeof o === "string" ? o : o.value
  }, typeof o === "string" ? o : o.label)), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: s.px,
      pointerEvents: "none",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--icon-muted)"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 10,
      color: "var(--text-danger)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 10
  }), " ", error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Switch — pill toggle. Teal track when on, grey when off, with a
 * sliding white knob. Use for instant on/off settings.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  label,
  id,
  style = {}
}) {
  const sizes = {
    sm: {
      w: 32,
      h: 18,
      knob: 14
    },
    md: {
      w: 40,
      h: 22,
      knob: 18
    }
  };
  const s = sizes[size] || sizes.md;
  const pad = (s.h - s.knob) / 2;
  const control = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    id: id,
    disabled: disabled,
    onClick: e => {
      if (!disabled && onChange) onChange(!checked, e);
    },
    style: {
      position: "relative",
      width: s.w,
      height: s.h,
      flex: "none",
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-pill)",
      background: disabled ? "var(--surface-disabled)" : checked ? "var(--teal-600)" : "var(--grey-300)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: pad,
      left: checked ? s.w - s.knob - pad : pad,
      width: s.knob,
      height: s.knob,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
      transition: "left var(--duration-base) var(--ease-out)"
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the product's content container. White surface, 12px radius,
 * soft shadow. Optional header (title + subtitle + actions slot).
 */
function Card({
  title,
  subtitle,
  actions,
  children,
  padding = 16,
  interactive = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      overflow: "hidden",
      transition: interactive ? "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)" : "none",
      cursor: interactive ? "pointer" : "default",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), title || actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      padding: `${padding}px ${padding}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: "-0.5px",
      color: "var(--text-heading)"
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      letterSpacing: "-0.3px"
    }
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flex: "none"
    }
  }, actions) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarItem.jsx
try { (() => {
const {
  useState
} = React;
/**
 * SidebarItem — a navigation row for the app shell. Icon + label, with
 * an active (filled teal) state and optional notification counter.
 */
function SidebarItem({
  icon,
  label,
  active = false,
  count,
  onClick,
  style = {}
}) {
  const [hover, setHover] = useState(false);
  const bg = active ? "var(--teal-600)" : hover ? "var(--surface-hover)" : "transparent";
  const fg = active ? "#fff" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      height: 40,
      padding: "0 8px",
      border: "none",
      borderRadius: "var(--radius-sm)",
      background: bg,
      color: fg,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: active ? 700 : 500,
      letterSpacing: "-0.4px",
      cursor: "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      boxSizing: "border-box",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: active ? "#fff" : "var(--icon-sidebar)"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, label), count != null ? /*#__PURE__*/React.createElement(__ds_scope.Counter, {
    count: count
  }) : null);
}
Object.assign(__ds_scope, { SidebarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — underline tab bar. Active tab is teal with a teal underline.
 * Controlled via `value` / `onChange`.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, tabs.map(t => {
    const id = typeof t === "string" ? t : t.value;
    const label = typeof t === "string" ? t : t.label;
    const count = typeof t === "string" ? undefined : t.count;
    const isActive = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      onClick: e => onChange && onChange(id, e),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "10px 12px",
        border: "none",
        background: "transparent",
        borderBottom: `2px solid ${isActive ? "var(--teal-600)" : "transparent"}`,
        marginBottom: -1,
        color: isActive ? "var(--teal-600)" : "var(--text-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: isActive ? 700 : 600,
        letterSpacing: "-0.3px",
        cursor: "pointer",
        transition: "color var(--duration-fast) var(--ease-standard)"
      }
    }, label, count != null ? /*#__PURE__*/React.createElement(__ds_scope.Counter, {
      count: count,
      tone: isActive ? "primary" : "neutral"
    }) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/withinehr-app/Logo.jsx
try { (() => {
// Logo.jsx — the withinEHR mark + wordmark lockup.
(function () {
  const MARK_PATH = "M 5.586 11.573 C 6.373 11.463 8.379 9.9 9.025 9.236 L 9.94 8.197 C 10.692 7.187 12.643 4.078 11.064 2.817 C 10.25 2.167 8.925 2.322 8.13 2.894 C 6.518 4.051 5.72 5.904 5.489 7.966 C 5.414 8.646 5.325 11.111 5.586 11.573 L 5.586 11.573 Z M 14.42 11.426 C 15.668 11.426 15.502 12.756 16.095 13.547 C 17.555 15.495 21.866 15.711 23.102 12.513 C 24.366 9.244 21.279 6.877 21.316 6.792 C 21.221 6.62 21.167 6.423 21.167 6.213 C 21.167 5.553 21.702 5.017 22.363 5.017 C 23.618 5.017 25.027 7.465 25.321 8.324 C 25.628 9.218 25.754 9.968 25.756 11.02 C 25.76 13.378 24.491 15.545 22.573 16.557 C 20.622 17.587 18.424 17.646 16.36 16.688 C 16.158 16.594 15.832 16.382 15.669 16.347 C 15.567 16.5 15.475 16.998 15.384 17.225 C 14.15 20.301 10.682 21.112 7.949 19.823 C 6.247 19.019 5.039 17.479 4.268 15.787 C 4.115 15.452 3.987 14.962 3.834 14.683 C 3.621 14.675 2.287 14.911 1.635 14.923 C 1.146 14.932 0.901 14.971 0.546 14.748 C -0.334 14.195 -0.132 12.79 1.017 12.575 C 1.562 12.473 2.773 12.577 3.23 12.345 C 3.343 12.109 3.126 11.477 3.101 11.156 C 2.767 7.006 3.744 2.955 6.783 0.957 C 8.106 0.088 9.825 -0.388 11.617 0.401 C 12.869 0.952 14.037 2.237 14.042 4.116 C 14.049 6.489 12.393 9.068 11.317 10.256 C 10.089 11.612 9.192 12.304 7.622 13.239 L 6.158 13.972 C 6.203 14.657 7.113 16.029 7.424 16.406 C 8.702 17.951 10.852 18.671 12.448 17.382 C 14.675 15.583 11.937 11.426 14.42 11.426 L 14.42 11.426 Z";
  function LogoMark({
    size = 40,
    color = "var(--teal-600)"
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size * (20.412 / 25.756),
      viewBox: "0 0 25.756 20.412",
      fill: "none",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: MARK_PATH,
      fill: color,
      fillRule: "evenodd"
    }));
  }
  function Logo({
    wordmark = true,
    markSize = 42
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(LogoMark, {
      size: markSize
    }), wordmark ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: markSize * 0.42,
        letterSpacing: "-1px",
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--teal-600)"
      }
    }, "within"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--teal-500)"
      }
    }, "EHR")) : null);
  }
  window.Logo = Logo;
  window.LogoMark = LogoMark;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/withinehr-app/Logo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/withinehr-app/Messaging.jsx
try { (() => {
// Messaging.jsx — secure patient messaging (conversation list + thread).
(function () {
  const {
    Card,
    Avatar,
    Badge,
    Button,
    IconButton,
    Input,
    Icon
  } = window.WithinEHRDesignSystem_f87792;
  const CONVOS = [{
    id: 1,
    name: "Maria Alvarez",
    last: "Thank you, see you Tuesday!",
    time: "9:24 AM",
    unread: 0,
    tele: false,
    thread: [{
      me: false,
      text: "Hi Dr. Wells, I wanted to confirm my follow-up appointment.",
      t: "9:02 AM"
    }, {
      me: true,
      text: "Hi Maria — yes, you're set for Tuesday at 9:30 AM. Anything you'd like to cover?",
      t: "9:18 AM"
    }, {
      me: false,
      text: "Thank you, see you Tuesday!",
      t: "9:24 AM"
    }]
  }, {
    id: 2,
    name: "James Okoro",
    last: "Uploaded my home BP readings.",
    time: "Yesterday",
    unread: 2,
    tele: true,
    thread: [{
      me: false,
      text: "Uploaded my home BP readings.",
      t: "4:41 PM"
    }, {
      me: false,
      text: "Let me know if the dosage looks okay.",
      t: "4:42 PM"
    }]
  }, {
    id: 3,
    name: "Lin Wei",
    last: "Got it, thanks!",
    time: "Mon",
    unread: 0,
    tele: false,
    thread: [{
      me: false,
      text: "Got it, thanks!",
      t: "Mon 2:10 PM"
    }]
  }];
  function Messaging() {
    const [activeId, setActiveId] = React.useState(1);
    const [threads, setThreads] = React.useState(() => Object.fromEntries(CONVOS.map(c => [c.id, c.thread])));
    const [draft, setDraft] = React.useState("");
    const active = CONVOS.find(c => c.id === activeId);
    const endRef = React.useRef(null);
    function send(e) {
      e.preventDefault();
      const text = draft.trim();
      if (!text) return;
      setThreads(prev => ({
        ...prev,
        [activeId]: [...prev[activeId], {
          me: true,
          text,
          t: "Now"
        }]
      }));
      setDraft("");
    }
    return /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      style: {
        height: "calc(100vh - 162px)",
        minHeight: 480
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 280,
        flex: "none",
        borderRight: "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 12,
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: "Search messages"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto"
      }
    }, CONVOS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      type: "button",
      onClick: () => setActiveId(c.id),
      style: {
        display: "flex",
        gap: 10,
        width: "100%",
        padding: 12,
        border: "none",
        cursor: "pointer",
        borderBottom: "1px solid var(--border-subtle)",
        textAlign: "left",
        background: c.id === activeId ? "var(--teal-50)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: c.name,
      size: 38,
      status: c.tele ? "busy" : "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "var(--text-heading)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, c.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--text-subtle)",
        flex: "none"
      }
    }, c.time)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 6,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, c.last), c.unread ? /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, c.unread) : null)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 16px",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: active.name,
      size: 36,
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-heading)"
      }
    }, active.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-success)"
      }
    }, "\u25CF Online")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "phone",
      "aria-label": "Call"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "video",
      "aria-label": "Video"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-horizontal",
      "aria-label": "More"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        background: "var(--surface-page)"
      }
    }, threads[activeId].map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        alignSelf: m.me ? "flex-end" : "flex-start",
        maxWidth: "70%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "9px 13px",
        borderRadius: 12,
        background: m.me ? "var(--teal-600)" : "var(--surface-card)",
        color: m.me ? "#fff" : "var(--text-body)",
        border: m.me ? "none" : "1px solid var(--border-subtle)",
        fontSize: 13,
        lineHeight: 1.4,
        boxShadow: "var(--shadow-xs)",
        borderBottomRightRadius: m.me ? 3 : 12,
        borderBottomLeftRadius: m.me ? 12 : 3
      }
    }, m.text), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--text-subtle)",
        marginTop: 3,
        textAlign: m.me ? "right" : "left"
      }
    }, m.t))), /*#__PURE__*/React.createElement("div", {
      ref: endRef
    })), /*#__PURE__*/React.createElement("form", {
      onSubmit: send,
      style: {
        display: "flex",
        gap: 10,
        padding: 12,
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "paperclip",
      "aria-label": "Attach"
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Write a secure message\u2026",
      value: draft,
      onChange: e => setDraft(e.target.value),
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      iconRight: "send",
      type: "submit"
    }, "Send")))));
  }
  window.Messaging = Messaging;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/withinehr-app/Messaging.jsx", error: String((e && e.message) || e) }); }

// ui_kits/withinehr-app/Patients.jsx
try { (() => {
// Patients.jsx — searchable patient roster table.
(function () {
  const {
    Card,
    Button,
    Badge,
    Avatar,
    Tag,
    IconButton,
    Input,
    Icon
  } = window.WithinEHRDesignSystem_f87792;
  const PATIENTS = [{
    name: "Maria Alvarez",
    mrn: "MRN-04821",
    dob: "04/12/1986",
    status: ["success", "Active"],
    visit: "May 2, 2025",
    balance: "$0.00",
    tele: false
  }, {
    name: "James Okoro",
    mrn: "MRN-04822",
    dob: "11/30/1974",
    status: ["info", "Telehealth"],
    visit: "Apr 28, 2025",
    balance: "$45.00",
    tele: true
  }, {
    name: "Lin Wei",
    mrn: "MRN-04823",
    dob: "07/19/1992",
    status: ["warning", "Pending intake"],
    visit: "—",
    balance: "$0.00",
    tele: false
  }, {
    name: "David Park",
    mrn: "MRN-04824",
    dob: "02/05/1968",
    status: ["success", "Active"],
    visit: "May 9, 2025",
    balance: "$120.00",
    tele: false
  }, {
    name: "Sofia Romero",
    mrn: "MRN-04825",
    dob: "09/23/1990",
    status: ["success", "Active"],
    visit: "May 1, 2025",
    balance: "$0.00",
    tele: false
  }, {
    name: "Aisha Khan",
    mrn: "MRN-04826",
    dob: "12/14/1983",
    status: ["danger", "Overdue"],
    visit: "Mar 30, 2025",
    balance: "$310.00",
    tele: true
  }, {
    name: "Tomás Vega",
    mrn: "MRN-04827",
    dob: "06/08/1979",
    status: ["success", "Active"],
    visit: "May 6, 2025",
    balance: "$0.00",
    tele: false
  }];
  const TH = {
    textAlign: "left",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.6px",
    textTransform: "uppercase",
    color: "var(--text-subtle)",
    padding: "0 12px 10px"
  };
  const TD = {
    fontSize: 13,
    color: "var(--text-body)",
    padding: "12px",
    borderTop: "1px solid var(--border-subtle)",
    verticalAlign: "middle"
  };
  function Patients({
    search = ""
  }) {
    const q = search.trim().toLowerCase();
    const rows = PATIENTS.filter(p => !q || p.name.toLowerCase().includes(q) || p.mrn.toLowerCase().includes(q));
    return /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "14px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: "Filter roster",
      style: {
        width: 240
      }
    }), /*#__PURE__*/React.createElement(Tag, {
      tone: "primary",
      icon: "filter"
    }, "Active"), /*#__PURE__*/React.createElement(Tag, {
      onRemove: () => {}
    }, "This month")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: "download"
    }, "Export"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "user-plus"
    }, "Add patient"))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: {
        ...TH,
        paddingLeft: 16
      }
    }, "Patient"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "MRN"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Date of birth"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Status"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Last visit"), /*#__PURE__*/React.createElement("th", {
      style: TH
    }, "Balance"), /*#__PURE__*/React.createElement("th", {
      style: {
        ...TH,
        textAlign: "right",
        paddingRight: 16
      }
    }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(p => /*#__PURE__*/React.createElement("tr", {
      key: p.mrn
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        paddingLeft: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      size: 32,
      status: p.tele ? "busy" : "online"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-heading)"
      }
    }, p.name))), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        fontFamily: "var(--font-data)",
        color: "var(--text-muted)"
      }
    }, p.mrn), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        fontFamily: "var(--font-data)",
        color: "var(--text-muted)"
      }
    }, p.dob), /*#__PURE__*/React.createElement("td", {
      style: TD
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: p.status[0],
      dot: true
    }, p.status[1])), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        color: "var(--text-muted)"
      }
    }, p.visit), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        fontFamily: "var(--font-data)",
        fontWeight: 600,
        color: p.balance === "$0.00" ? "var(--text-subtle)" : "var(--text-danger)"
      }
    }, p.balance), /*#__PURE__*/React.createElement("td", {
      style: {
        ...TD,
        textAlign: "right",
        paddingRight: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "calendar-plus",
      size: "sm",
      "aria-label": "Book"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "message-square",
      size: "sm",
      "aria-label": "Message"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-horizontal",
      size: "sm",
      "aria-label": "More"
    }))))), rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 7,
      style: {
        ...TD,
        textAlign: "center",
        color: "var(--text-subtle)",
        padding: 40
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search-x",
      size: 24
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, "No patients match \u201C", search, "\u201D."))) : null))));
  }
  window.Patients = Patients;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/withinehr-app/Patients.jsx", error: String((e && e.message) || e) }); }

// ui_kits/withinehr-app/Requests.jsx
try { (() => {
// Requests.jsx — inbound appointment requests with approve / decline.
(function () {
  const {
    Card,
    Button,
    Badge,
    Avatar,
    Toast,
    Icon
  } = window.WithinEHRDesignSystem_f87792;
  const INITIAL = [{
    id: 1,
    name: "Nina Patel",
    type: "New consult",
    tele: false,
    when: "Requested Tue, May 14 · 10:00 AM",
    alt: "Alt: Wed AM",
    reason: "New patient — recurring migraines, would like an initial evaluation.",
    ago: "2h ago"
  }, {
    id: 2,
    name: "Marcus Lee",
    type: "Telehealth",
    tele: true,
    when: "Requested Wed, May 15 · 2:30 PM",
    alt: "Alt: Thu PM",
    reason: "Follow-up on blood pressure medication and recent home readings.",
    ago: "5h ago"
  }, {
    id: 3,
    name: "Grace Adeyemi",
    type: "Follow-up",
    tele: false,
    when: "Requested Thu, May 16 · 9:15 AM",
    alt: "Alt: Fri AM",
    reason: "Post-op check, two weeks after minor procedure.",
    ago: "1d ago"
  }];
  function Requests() {
    const [items, setItems] = React.useState(INITIAL);
    const [toast, setToast] = React.useState(null);
    function resolve(item, action) {
      setItems(prev => prev.filter(r => r.id !== item.id));
      setToast({
        tone: action === "approve" ? "success" : "info",
        title: action === "approve" ? "Appointment confirmed" : "Request declined",
        message: action === "approve" ? `${item.name} — ${item.when.replace("Requested ", "")}` : `${item.name} was notified.`
      });
      window.clearTimeout(window.__reqToast);
      window.__reqToast = window.setTimeout(() => setToast(null), 3200);
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "var(--text-heading)"
      }
    }, "Pending requests"), /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, items.length)), items.map(r => /*#__PURE__*/React.createElement(Card, {
      key: r.id,
      padding: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: r.name,
      size: 44
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-heading)"
      }
    }, r.name), /*#__PURE__*/React.createElement(Badge, {
      tone: r.tele ? "primary" : "neutral",
      icon: r.tele ? "video" : undefined
    }, r.type), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--text-subtle)",
        marginLeft: "auto"
      }
    }, r.ago)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        margin: "8px 0",
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 13
    }), " ", r.when), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 13
    }), " ", r.alt)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 14px",
        fontSize: 13,
        lineHeight: 1.45,
        color: "var(--text-body)"
      }
    }, r.reason), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "check",
      onClick: () => resolve(r, "approve")
    }, "Approve"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: "calendar-clock"
    }, "Propose time"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "danger-ghost",
      iconLeft: "x",
      onClick: () => resolve(r, "decline")
    }, "Decline")))))), items.length === 0 ? /*#__PURE__*/React.createElement(Card, {
      padding: 40
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        color: "var(--text-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "inbox",
      size: 28,
      color: "var(--green-600)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontWeight: 700,
        color: "var(--text-heading)"
      }
    }, "All caught up"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        marginTop: 2
      }
    }, "No pending appointment requests."))) : null, toast ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        right: 28,
        bottom: 28,
        zIndex: 1200
      }
    }, /*#__PURE__*/React.createElement(Toast, {
      tone: toast.tone,
      title: toast.title,
      message: toast.message,
      onClose: () => setToast(null)
    })) : null);
  }
  window.Requests = Requests;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/withinehr-app/Requests.jsx", error: String((e && e.message) || e) }); }

// ui_kits/withinehr-app/Schedule.jsx
try { (() => {
// Schedule.jsx — day schedule with KPI strip and an appointment timeline.
(function () {
  const {
    Card,
    Button,
    Badge,
    Avatar,
    Dialog,
    Input,
    Select,
    IconButton,
    Icon
  } = window.WithinEHRDesignSystem_f87792;
  const KPIS = [{
    label: "Visits today",
    value: "14",
    sub: "3 remaining",
    icon: "calendar-check",
    tone: "var(--teal-600)"
  }, {
    label: "Revenue",
    value: "$4,820",
    sub: "+12% vs avg",
    icon: "wallet",
    tone: "var(--green-600)"
  }, {
    label: "Telehealth",
    value: "3",
    sub: "1 live now",
    icon: "video",
    tone: "var(--cyan-700)"
  }, {
    label: "No-shows",
    value: "1",
    sub: "follow up",
    icon: "user-x",
    tone: "var(--orange-600)"
  }];
  const APPTS = [{
    t: "8:30",
    dur: "30m",
    name: "Maria Alvarez",
    type: "Follow-up",
    tone: "primary",
    tele: false,
    top: 0
  }, {
    t: "9:30",
    dur: "45m",
    name: "James Okoro",
    type: "Telehealth",
    tone: "info",
    tele: true,
    top: 96
  }, {
    t: "10:45",
    dur: "30m",
    name: "Lin Wei",
    type: "New consult",
    tone: "neutral",
    tele: false,
    top: 218
  }, {
    t: "11:30",
    dur: "30m",
    name: "David Park",
    type: "Lab review",
    tone: "primary",
    tele: false,
    top: 314
  }, {
    t: "1:15",
    dur: "60m",
    name: "Sofia Romero",
    type: "Annual physical",
    tone: "neutral",
    tele: false,
    top: 470
  }, {
    t: "2:30",
    dur: "30m",
    name: "Aisha Khan",
    type: "Telehealth",
    tone: "info",
    tele: true,
    top: 614
  }];
  const HOURS = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"];
  function ApptBlock({
    a
  }) {
    const bg = a.tone === "info" ? "var(--cyan-100)" : a.tone === "primary" ? "var(--teal-50)" : "var(--surface-card)";
    const bar = a.tone === "info" ? "var(--cyan-700)" : a.tone === "primary" ? "var(--teal-600)" : "var(--grey-400)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 64,
        right: 12,
        top: a.top,
        height: 84,
        display: "flex",
        gap: 10,
        padding: "10px 12px",
        background: bg,
        border: "1px solid var(--border-subtle)",
        borderLeft: `3px solid ${bar}`,
        borderRadius: "var(--radius-sm)",
        boxSizing: "border-box",
        boxShadow: "var(--shadow-xs)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: a.name,
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "var(--text-heading)"
      }
    }, a.name), /*#__PURE__*/React.createElement(Badge, {
      tone: a.tone === "info" ? "primary" : "neutral",
      icon: a.tele ? "video" : undefined
    }, a.type)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-muted)",
        marginTop: 3,
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 12
    }), " ", a.t, " \xB7 ", a.dur))), a.tele ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "video"
    }, "Join") : /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-horizontal",
      "aria-label": "More"
    }));
  }
  function Schedule() {
    const [open, setOpen] = React.useState(false);
    const [view, setView] = React.useState("Day");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16
      }
    }, KPIS.map(k => /*#__PURE__*/React.createElement(Card, {
      key: k.label,
      padding: 14
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
      }
    }, k.label), /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 16,
      color: k.tone
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-data)",
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: "-1px",
        color: "var(--text-heading)",
        marginTop: 6
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-subtle)",
        marginTop: 2
      }
    }, k.sub)))), /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 16px",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      "aria-label": "Previous day"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "-0.5px",
        color: "var(--text-heading)"
      }
    }, "Tuesday, May 14"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-right",
      "aria-label": "Next day"
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "primary"
    }, "Today")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        background: "var(--surface-sunken)",
        borderRadius: "var(--radius-sm)",
        padding: 2
      }
    }, ["Day", "Week", "Month"].map(v => /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => setView(v),
      style: {
        padding: "6px 14px",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "-0.3px",
        background: view === v ? "var(--surface-card)" : "transparent",
        color: view === v ? "var(--teal-600)" : "var(--text-muted)",
        boxShadow: view === v ? "var(--shadow-xs)" : "none"
      }
    }, v))), /*#__PURE__*/React.createElement(Button, {
      size: "md",
      iconLeft: "plus",
      onClick: () => setOpen(true)
    }, "New appointment"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 720,
        padding: "12px 0"
      }
    }, HOURS.map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 12 + i * 96,
        height: 96,
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 12,
        top: -8,
        fontSize: 10,
        color: "var(--text-subtle)",
        background: "var(--surface-card)",
        paddingRight: 6,
        fontFamily: "var(--font-data)"
      }
    }, h))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 12 + 2 * 96 + 40,
        height: 2,
        background: "var(--red-600)",
        zIndex: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 50,
        top: -6,
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--red-600)"
      }
    })), APPTS.map((a, i) => /*#__PURE__*/React.createElement(ApptBlock, {
      key: i,
      a: a
    })))), open ? /*#__PURE__*/React.createElement(Dialog, {
      title: "New appointment",
      onClose: () => setOpen(false),
      width: 420,
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setOpen(false)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => setOpen(false)
      }, "Schedule"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
        textAlign: "left",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Patient",
      iconLeft: "search",
      placeholder: "Search patients"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Appointment type",
      placeholder: "Choose type",
      options: ["New consult", "Follow-up", "Telehealth", "Lab review"]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Date",
      defaultValue: "05/14/2025"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Time",
      defaultValue: "3:00 PM"
    })))) : null);
  }
  window.Schedule = Schedule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/withinehr-app/Schedule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/withinehr-app/Sidebar.jsx
try { (() => {
// Sidebar.jsx — app navigation shell (logo, user, grouped nav, premium card).
(function () {
  const {
    SidebarItem,
    Avatar,
    Button,
    Icon
  } = window.WithinEHRDesignSystem_f87792;
  const SECTIONS = [{
    label: "Clinical",
    items: [{
      id: "schedule",
      icon: "calendar",
      label: "Schedule"
    }, {
      id: "patients",
      icon: "users",
      label: "Patients"
    }, {
      id: "messaging",
      icon: "message-square",
      label: "Messaging",
      count: 2
    }, {
      id: "requests",
      icon: "user-plus",
      label: "Requests",
      count: 2
    }]
  }, {
    label: "Revenue",
    items: [{
      id: "payments",
      icon: "wallet",
      label: "Payments"
    }, {
      id: "insurance",
      icon: "hand-heart",
      label: "Insurance"
    }]
  }, {
    label: "Insight & Activity",
    items: [{
      id: "insights",
      icon: "git-branch",
      label: "Insights"
    }, {
      id: "grow",
      icon: "store",
      label: "Grow"
    }, {
      id: "activity",
      icon: "activity",
      label: "Activity"
    }]
  }, {
    label: "Workspace",
    items: [{
      id: "settings",
      icon: "settings",
      label: "Settings"
    }]
  }];
  function Sidebar({
    active,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 200,
        flex: "none",
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-lg)",
        padding: "20px 14px 14px",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(window.Logo, {
      markSize: 40
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        width: "100%",
        padding: 7,
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-sm)",
        cursor: "pointer",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: "../../assets/avatar-sample.png",
      name: "Peter W",
      size: 26
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "left",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: "var(--text-strong)",
        letterSpacing: "-0.3px"
      }
    }, "Peter W."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--text-muted)"
      }
    }, "Practice Owner")), /*#__PURE__*/React.createElement(Icon, {
      name: "chevrons-up-down",
      size: 15,
      color: "var(--icon-muted)"
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        overflowY: "auto"
      }
    }, SECTIONS.map(sec => /*#__PURE__*/React.createElement("div", {
      key: sec.label,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: "var(--text-subtle)",
        padding: "0 8px 4px"
      }
    }, sec.label), sec.items.map(it => /*#__PURE__*/React.createElement(SidebarItem, {
      key: it.id,
      icon: it.icon,
      label: it.label,
      count: it.count,
      active: active === it.id,
      onClick: () => onNavigate(it.id)
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        background: "var(--cyan-300)",
        border: "1px solid var(--cyan-600)",
        borderRadius: "var(--radius-md)",
        padding: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "gem",
      size: 15,
      color: "var(--teal-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: "var(--teal-600)"
      }
    }, "Unlock Premium")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 12px",
        fontSize: 11,
        lineHeight: 1.35,
        color: "var(--text-body)"
      }
    }, "Get advanced features and exclusive access for a better experience."), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      fullWidth: true,
      iconRight: "chevron-right"
    }, "Select plan")));
  }
  window.Sidebar = Sidebar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/withinehr-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/withinehr-app/TopBar.jsx
try { (() => {
// TopBar.jsx — page header with title, global search and actions.
(function () {
  const {
    Input,
    Button
  } = window.WithinEHRDesignSystem_f87792;
  function TopBar({
    title,
    subtitle,
    search,
    onSearch
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        height: 70,
        flex: "none",
        padding: "0 16px",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg)",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 180
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "-0.5px",
        color: "var(--text-strong)"
      }
    }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-secondary)",
        letterSpacing: "-0.3px"
      }
    }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: "Search patients, appointments, and more",
      value: search,
      onChange: e => onSearch && onSearch(e.target.value),
      style: {
        width: 320,
        maxWidth: "100%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "bell"
    }, "Notifications"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: "gift"
    }, "Refer & Earn $500")));
  }
  window.TopBar = TopBar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/withinehr-app/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/withinehr-app/app.jsx
try { (() => {
// app.jsx — ties the shell + screens into an interactive prototype.
(function () {
  const {
    Card,
    Icon
  } = window.WithinEHRDesignSystem_f87792;
  const META = {
    schedule: {
      title: "Schedule",
      subtitle: "Your day at a glance"
    },
    patients: {
      title: "Patients",
      subtitle: "Manage your roster"
    },
    messaging: {
      title: "Messaging",
      subtitle: "Secure patient messages"
    },
    requests: {
      title: "Appointment Requests",
      subtitle: "View and manage requests"
    },
    payments: {
      title: "Payments",
      subtitle: "Billing & collections"
    },
    insurance: {
      title: "Insurance",
      subtitle: "Claims & eligibility"
    },
    insights: {
      title: "Insights",
      subtitle: "Practice analytics"
    },
    grow: {
      title: "Grow",
      subtitle: "Reach new patients"
    },
    activity: {
      title: "Activity",
      subtitle: "Recent practice activity"
    },
    settings: {
      title: "Settings",
      subtitle: "Practice & account"
    }
  };
  function Placeholder({
    id
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      padding: 48
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        color: "var(--text-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "layout-dashboard",
      size: 28,
      color: "var(--teal-500)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: 700,
        color: "var(--text-heading)"
      }
    }, META[id].title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        marginTop: 4,
        maxWidth: 360,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }, "This surface isn\u2019t part of the reference kit yet. The shell, navigation and shared components carry through \u2014 drop the screen content here.")));
  }
  function App() {
    const [active, setActive] = React.useState("schedule");
    const [search, setSearch] = React.useState("");
    const meta = META[active] || {
      title: "WithinEHR"
    };
    function screen() {
      switch (active) {
        case "schedule":
          return /*#__PURE__*/React.createElement(window.Schedule, null);
        case "patients":
          return /*#__PURE__*/React.createElement(window.Patients, {
            search: search
          });
        case "messaging":
          return /*#__PURE__*/React.createElement(window.Messaging, null);
        case "requests":
          return /*#__PURE__*/React.createElement(window.Requests, null);
        default:
          return /*#__PURE__*/React.createElement(Placeholder, {
            id: active
          });
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 20,
        height: "100vh",
        padding: 20,
        boxSizing: "border-box",
        background: "var(--surface-page)"
      }
    }, /*#__PURE__*/React.createElement(window.Sidebar, {
      active: active,
      onNavigate: id => {
        setActive(id);
        setSearch("");
      }
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement(window.TopBar, {
      title: meta.title,
      subtitle: meta.subtitle,
      search: search,
      onSearch: setSearch
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        paddingRight: 4
      }
    }, screen())));
  }
  window.App = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/withinehr-app/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Counter = __ds_scope.Counter;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SidebarItem = __ds_scope.SidebarItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
