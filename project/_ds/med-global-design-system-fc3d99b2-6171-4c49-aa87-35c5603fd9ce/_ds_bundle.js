/* @ds-bundle: {"format":3,"namespace":"MedGlobalDesignSystem_fc3d99","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"FeatureList","sourcePath":"components/marketing/FeatureList.jsx"},{"name":"MembershipCard","sourcePath":"components/marketing/MembershipCard.jsx"},{"name":"TrustBadgeRow","sourcePath":"components/marketing/TrustBadgeRow.jsx"},{"name":"FloatingNav","sourcePath":"components/navigation/FloatingNav.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d5bf182491b1","components/core/Button.jsx":"7f37ce55f67c","components/core/Card.jsx":"be12df23aa5a","components/core/Input.jsx":"4275c46d5dbe","components/marketing/FeatureList.jsx":"2f120577d111","components/marketing/MembershipCard.jsx":"1355849ad16f","components/marketing/TrustBadgeRow.jsx":"6fffe9f81faf","components/navigation/FloatingNav.jsx":"a706a1e4ad2f","deploy/nurses-to-germany/image-slot.js":"9309434cb09c","deploy/nurses-to-germany/ntg-app.jsx":"d3db3923e50f","deploy/nurses-to-germany/ntg-apply.jsx":"c91a43bbcde7","deploy/nurses-to-germany/ntg-chrome.jsx":"e73f52a8551e","deploy/nurses-to-germany/ntg-home.jsx":"8d9a3942b6d3","deploy/nurses-to-germany/ntg-icons.jsx":"250e8d3338dc","deploy/nurses-to-germany/ntg-pages.jsx":"89b4ae8302a6","deploy/nurses-to-germany/ntg-ui.jsx":"d53399a58b05","deploy/nurses-to-germany/tweaks-panel.jsx":"6591467622ed","nurses-to-germany/image-slot.js":"9309434cb09c","nurses-to-germany/ntg-app.jsx":"d3db3923e50f","nurses-to-germany/ntg-apply.jsx":"c91a43bbcde7","nurses-to-germany/ntg-chrome.jsx":"e73f52a8551e","nurses-to-germany/ntg-home.jsx":"d988f4f4a5ad","nurses-to-germany/ntg-icons.jsx":"250e8d3338dc","nurses-to-germany/ntg-pages.jsx":"89b4ae8302a6","nurses-to-germany/ntg-ui.jsx":"d53399a58b05","nurses-to-germany/tweaks-panel.jsx":"6591467622ed","ui_kits/marketing-site/Faq.jsx":"5ad8062c6cfd","ui_kits/marketing-site/Hero.jsx":"0115c383f210","ui_kits/marketing-site/JoinModal.jsx":"160fccca1b52","ui_kits/marketing-site/Membership.jsx":"71a3feff3abe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MedGlobalDesignSystem_fc3d99 = window.MedGlobalDesignSystem_fc3d99 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small label chip. `mono` uses the instrumented mono face for technical
 * metadata; `coral` is reserved for brand emphasis. Default is a neutral
 * mist-outline chip.
 */
function Badge({
  children,
  variant = 'neutral',
  mono = false,
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--color-fog-gray)',
      color: 'var(--color-zinc-gray)',
      border: '1px solid var(--color-mist-gray)'
    },
    dark: {
      background: 'var(--color-carbon-black)',
      color: 'var(--color-paper-white)',
      border: '1px solid var(--color-carbon-black)'
    },
    coral: {
      background: 'var(--color-sunrise-coral)',
      color: 'var(--color-paper-white)',
      border: '1px solid var(--color-sunrise-coral)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: mono ? 400 : 700,
      letterSpacing: mono ? '-0.006em' : '-0.005em',
      textTransform: mono ? 'none' : 'uppercase',
      lineHeight: 1,
      padding: '6px 10px',
      borderRadius: 'var(--radius-pills)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Med Global pill button. Primary is the rationed Sunrise Coral fill;
 * secondary is a carbon outline; ghost is a bare text link.
 * All variants are fully pill-shaped (9999px). No drop shadow.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  withArrow = false,
  as = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '13px',
      padding: '9px 18px'
    },
    md: {
      fontSize: '15px',
      padding: '13px 24px'
    },
    lg: {
      fontSize: '17px',
      padding: '15px 32px'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    letterSpacing: '-0.009em',
    lineHeight: 1,
    borderRadius: 'var(--radius-buttons)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'opacity .15s ease, background .15s ease, color .15s ease',
    opacity: disabled ? 0.4 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--color-sunrise-coral)',
      color: 'var(--color-paper-white)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-carbon-black)',
      borderColor: 'var(--color-mist-gray)'
    },
    dark: {
      background: 'var(--color-carbon-black)',
      color: 'var(--color-paper-white)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-carbon-black)',
      padding: '0',
      borderRadius: '0'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant]
    },
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'ghost') e.currentTarget.style.textDecoration = 'underline';else e.currentTarget.style.opacity = '0.85';
    },
    onMouseLeave: e => {
      if (disabled) return;
      if (variant === 'ghost') e.currentTarget.style.textDecoration = 'none';else e.currentTarget.style.opacity = '1';
    }
  }, rest), children, withArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.05em'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Content card — flat white surface with a mist hairline border and the
 * default 15px radius. Optional subtle 2px shadow (the only shadow in the
 * system). No mid-tone surfaces.
 */
function Card({
  children,
  padded = true,
  shadow = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--color-mist-gray)',
      borderRadius: 'var(--radius-cards)',
      padding: padded ? 'var(--card-padding)' : 0,
      boxShadow: shadow ? 'var(--shadow-subtle)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input — flat field with a mist hairline that darkens to carbon on
 * focus. Optional label and helper copy. No shadow, generous height.
 */
function Input({
  label,
  helper,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 700,
      letterSpacing: '-0.009em',
      color: 'var(--color-carbon-black)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      letterSpacing: '-0.005em',
      color: 'var(--color-carbon-black)',
      background: 'var(--color-paper-white)',
      border: '1px solid var(--color-mist-gray)',
      borderRadius: 'var(--radius-smallcards)',
      padding: '12px 14px',
      outline: 'none',
      transition: 'border-color .15s ease',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--color-carbon-black)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--color-mist-gray)';
    }
  }, rest)), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      letterSpacing: '-0.005em',
      color: 'var(--color-zinc-gray)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureList.jsx
try { (() => {
/**
 * Membership feature list — vertical rows, each led by a solid coral
 * squircle checkmark. 19px carbon body text, 11px row gap. Checks are
 * filled solid coral, never outlined.
 */
function FeatureList({
  items = []
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--element-gap)'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: '24px',
      height: '24px',
      marginTop: '2px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-sunrise-coral)',
      borderRadius: 'var(--radius-icons)',
      color: 'var(--color-paper-white)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-subheading)',
      lineHeight: 'var(--leading-subheading)',
      letterSpacing: 'var(--tracking-subheading)',
      color: 'var(--color-carbon-black)'
    }
  }, item))));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/marketing/MembershipCard.jsx
try { (() => {
/**
 * Membership visual card — the ONE decorative asset in the system. An
 * organic marbled coral wash (layered radial gradients over the coral-glow
 * linear), 15px radius, ~320px wide. Wordmark top-left, price bottom-left,
 * both white. Never reuse this gradient anywhere else.
 */
function MembershipCard({
  brand = 'med global',
  tier = 'membership',
  price = '$17',
  period = '/month',
  width = 320
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: typeof width === 'number' ? `${width}px` : width,
      aspectRatio: '1.586 / 1',
      borderRadius: 'var(--radius-cards)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-subtle)',
      background: `
          radial-gradient(120% 90% at 18% 12%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 38%),
          radial-gradient(90% 80% at 88% 30%, rgba(255,139,100,0.95) 0%, rgba(255,139,100,0) 55%),
          radial-gradient(100% 120% at 70% 95%, rgba(252,95,43,1) 0%, rgba(252,95,43,0) 60%),
          radial-gradient(80% 70% at 30% 80%, rgba(255,170,130,0.8) 0%, rgba(255,170,130,0) 50%),
          var(--gradient-coral-glow)
        `,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-paper-white)',
      fontSize: '17px',
      fontWeight: 700,
      letterSpacing: '-0.012em'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: '13px',
      fontWeight: 400,
      letterSpacing: '-0.009em'
    }
  }, tier)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-paper-white)',
      fontSize: '37px',
      fontWeight: 700,
      letterSpacing: '-0.022em',
      lineHeight: 1
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: '15px',
      letterSpacing: '-0.009em'
    }
  }, period))));
}
Object.assign(__ds_scope, { MembershipCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/MembershipCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustBadgeRow.jsx
try { (() => {
/**
 * Trust badge row — credibility reassurance that sits directly below a
 * primary CTA. Small carbon check glyphs + zinc labels at 11–13px,
 * laid out horizontally. Pair with every primary conversion CTA.
 */
function TrustBadgeRow({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '20px'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-carbon-black)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      letterSpacing: '-0.009em',
      color: 'var(--color-zinc-gray)'
    }
  }, item))));
}
Object.assign(__ds_scope, { TrustBadgeRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustBadgeRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FloatingNav.jsx
try { (() => {
/**
 * Floating pill navigation — a dark Carbon Black capsule that hovers over
 * hero imagery, never sticking to viewport edges. White wordmark left,
 * white/60 links center, a single coral CTA right.
 */
function FloatingNav({
  brand = 'med global',
  links = [],
  cta
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      background: 'var(--surface-nav)',
      borderRadius: 'var(--radius-navbar)',
      padding: '12px 12px 12px 24px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-paper-white)',
      fontSize: '17px',
      fontWeight: 700,
      letterSpacing: '-0.012em'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '15px',
      letterSpacing: '-0.009em',
      textDecoration: 'none',
      transition: 'color .15s ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--color-paper-white)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
    }
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: cta?.href || '#',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--color-sunrise-coral)',
      color: 'var(--color-paper-white)',
      fontSize: '15px',
      fontWeight: 700,
      letterSpacing: '-0.009em',
      lineHeight: 1,
      padding: '12px 20px',
      borderRadius: 'var(--radius-buttons)',
      textDecoration: 'none',
      transition: 'opacity .15s ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = '0.85';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = '1';
    }
  }, cta?.label || 'Get started', /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")));
}
Object.assign(__ds_scope, { FloatingNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FloatingNav.jsx", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/image-slot.js", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/ntg-app.jsx
try { (() => {
// ntg-app.jsx — router shell + Tweaks panel. Mounts the whole site.
(function () {
  const {
    useState,
    useEffect
  } = React;
  const {
    Nav,
    Footer,
    FloatingBits,
    HomePage,
    ApplyPage,
    AboutPage,
    TestimonialsPage,
    FaqPage,
    ContactPage
  } = window;
  const {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakColor
  } = window;
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "heroStyle": "split",
    "accent": "#f5a623"
  } /*EDITMODE-END*/;
  const ACCENTS = {
    '#f5a623': {
      hover: '#d98e12',
      tint: '#fdf1da',
      on: '#2a1a02'
    },
    // gold (default)
    '#27ae60': {
      hover: '#1f9254',
      tint: '#e4f6ec',
      on: '#06210f'
    },
    // green
    '#e8743b': {
      hover: '#cf5d27',
      tint: '#fdeae0',
      on: '#2a1402'
    },
    // warm amber-orange
    '#1d6fd6': {
      hover: '#175bb0',
      tint: '#e2edfb',
      on: '#ffffff'
    } // bright blue
  };
  function pageFromHash() {
    const h = (location.hash || '').replace('#/', '').replace('#', '').trim();
    return ['home', 'about', 'testimonials', 'faq', 'contact', 'apply'].includes(h) ? h : 'home';
  }
  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const [page, setPage] = useState(pageFromHash());
    const navigate = p => {
      setPage(p);
      history.replaceState(null, '', '#/' + p);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    useEffect(() => {
      const onHash = () => setPage(pageFromHash());
      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, []);

    // apply accent theme to :root
    useEffect(() => {
      const a = ACCENTS[t.accent] || ACCENTS['#f5a623'];
      const r = document.documentElement.style;
      r.setProperty('--accent', t.accent);
      r.setProperty('--accent-hover', a.hover);
      r.setProperty('--accent-tint', a.tint);
      r.setProperty('--on-accent', a.on);
    }, [t.accent]);
    let view;
    if (page === 'apply') view = React.createElement(ApplyPage, null);else if (page === 'about') view = React.createElement(AboutPage, {
      navigate
    });else if (page === 'testimonials') view = React.createElement(TestimonialsPage, {
      navigate
    });else if (page === 'faq') view = React.createElement(FaqPage, {
      navigate
    });else if (page === 'contact') view = React.createElement(ContactPage, {
      navigate
    });else view = React.createElement(HomePage, {
      heroStyle: t.heroStyle,
      navigate
    });
    return React.createElement(React.Fragment, null, React.createElement(Nav, {
      page,
      navigate
    }), React.createElement('main', {
      key: page
    }, view), React.createElement(Footer, {
      navigate
    }), React.createElement(FloatingBits, {
      navigate
    }), React.createElement(TweaksPanel, null, React.createElement(TweakSection, {
      label: 'Home hero direction'
    }), React.createElement(TweakRadio, {
      label: 'Layout',
      value: t.heroStyle,
      options: ['split', 'fullbleed', 'editorial'],
      onChange: v => {
        setTweak('heroStyle', v);
        if (page !== 'home') navigate('home');
      }
    }), React.createElement(TweakSection, {
      label: 'Brand accent'
    }), React.createElement(TweakColor, {
      label: 'Accent',
      value: t.accent,
      options: Object.keys(ACCENTS),
      onChange: v => setTweak('accent', v)
    })));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/ntg-app.jsx", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/ntg-apply.jsx
try { (() => {
// ntg-apply.jsx — Application hub: qualifying toggle → Form A (nurse) / Form B (Ausbildung).
(function () {
  const {
    useState
  } = React;
  const Icon = window.Icon;
  const {
    Button,
    SectionHead,
    IconTile
  } = window;

  // ---- field primitives ----
  function Field({
    label,
    req,
    help,
    error,
    children,
    full
  }) {
    return React.createElement('div', {
      className: 'field',
      style: full ? {
        gridColumn: '1 / -1'
      } : null
    }, label && React.createElement('label', {
      className: 'label'
    }, label, req && React.createElement('span', {
      className: 'req'
    }, ' *')), children, error ? React.createElement('span', {
      className: 'err-text'
    }, error) : help && React.createElement('span', {
      className: 'help'
    }, help));
  }
  const T = p => React.createElement('input', {
    className: 'input' + (p.error ? ' err' : ''),
    type: p.type || 'text',
    placeholder: p.placeholder,
    value: p.value || '',
    onChange: e => p.onChange(e.target.value)
  });
  const S = p => React.createElement('select', {
    className: 'select' + (p.error ? ' err' : ''),
    value: p.value || '',
    onChange: e => p.onChange(e.target.value)
  }, React.createElement('option', {
    value: '',
    disabled: true
  }, p.placeholder || 'Select\u2026'), p.options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o)));
  const TA = p => React.createElement('textarea', {
    className: 'textarea' + (p.error ? ' err' : ''),
    placeholder: p.placeholder,
    value: p.value || '',
    onChange: e => p.onChange(e.target.value)
  });
  function FileField({
    label,
    req,
    value,
    onChange,
    optional
  }) {
    const id = 'f-' + label.replace(/\W+/g, '');
    return React.createElement('div', {
      className: 'field'
    }, React.createElement('label', {
      className: 'label'
    }, label, req && React.createElement('span', {
      className: 'req'
    }, ' *'), optional && React.createElement('span', {
      style: {
        color: 'var(--slate-400)',
        fontWeight: 400
      }
    }, ' (optional)')), React.createElement('label', {
      htmlFor: id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        border: '1.5px dashed var(--line-strong)',
        borderRadius: 'var(--r-sm)',
        cursor: 'pointer',
        background: value ? 'var(--green-100)' : 'var(--navy-050)'
      }
    }, React.createElement('span', {
      style: {
        color: value ? 'var(--green-600)' : 'var(--navy-600)'
      }
    }, React.createElement(Icon, {
      name: value ? 'check' : 'upload',
      size: 20
    })), React.createElement('span', {
      style: {
        fontSize: 14,
        color: value ? 'var(--green-600)' : 'var(--slate-600)',
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, value || 'PDF or JPG \u2014 max 5MB'), React.createElement('input', {
      id,
      type: 'file',
      accept: '.pdf,.jpg,.jpeg,.png',
      style: {
        display: 'none'
      },
      onChange: e => onChange(e.target.files[0] ? e.target.files[0].name : '')
    })));
  }
  function Group({
    title,
    children,
    cols = 2
  }) {
    return React.createElement('div', {
      style: {
        marginBottom: 12
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--gold-700,var(--gold-600))',
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 9
      }
    }, React.createElement('span', {
      style: {
        width: 22,
        height: 2,
        background: 'var(--gold-500)',
        borderRadius: 2
      }
    }), title), React.createElement('div', {
      className: 'ntg-form-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: cols === 2 ? '1fr 1fr' : '1fr',
        gap: 18
      }
    }, children));
  }
  function Consent({
    checked,
    onChange,
    error
  }) {
    return React.createElement('label', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: 16,
        borderRadius: 'var(--r-sm)',
        background: 'var(--navy-050)',
        border: '1px solid ' + (error ? '#dc4a4a' : 'var(--line)'),
        cursor: 'pointer'
      }
    }, React.createElement('input', {
      type: 'checkbox',
      checked,
      onChange: e => onChange(e.target.checked),
      style: {
        marginTop: 3,
        width: 18,
        height: 18,
        accentColor: 'var(--navy-700)',
        flex: '0 0 auto'
      }
    }), React.createElement('span', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-700)',
        lineHeight: 1.5
      }
    }, 'I confirm that all information provided is accurate, and I consent to Med Global storing and processing my data for this application. I understand this is not a job guarantee.'));
  }
  const LANG = ['None \u2014 I have not started', 'A1 \u2014 Beginner', 'A2 \u2014 Elementary', 'B1 \u2014 Intermediate', 'B2 \u2014 Upper Intermediate', 'C1+ \u2014 Advanced'];
  const AVAIL = ['Within 6 months', '6\u201312 months', '12\u201318 months', '18+ months / Still planning'];

  // ---- Success screen ----
  function Success({
    title,
    body,
    onReset
  }) {
    return React.createElement('div', {
      className: 'card card-pad',
      style: {
        textAlign: 'center',
        padding: 'clamp(40px,6vw,64px)',
        maxWidth: 620,
        margin: '0 auto'
      }
    }, React.createElement('div', {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--green-100)',
        color: 'var(--green-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px'
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 40,
      stroke: 3
    })), React.createElement('h2', {
      className: 'h2'
    }, title), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 14
      }
    }, body), React.createElement('div', {
      style: {
        marginTop: 28
      }
    }, React.createElement(Button, {
      variant: 'ghost',
      onClick: onReset
    }, 'Submit another application')));
  }

  // ---- Form A: Registered Nurse ----
  function FormA({
    onDone
  }) {
    const [f, setF] = useState({});
    const [errs, setErrs] = useState({});
    const set = k => v => setF(s => ({
      ...s,
      [k]: v
    }));
    const submit = () => {
      const e = {};
      ['fullName', 'dob', 'nationality', 'residence', 'phone', 'email', 'qual', 'specialty', 'gradYear', 'experience', 'license', 'germanLevel', 'availability'].forEach(k => {
        if (!f[k]) e[k] = 'Required';
      });
      if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email';
      if (!f.docCert) e.docCert = 'Required';
      if (!f.docCv) e.docCv = 'Required';
      if (!f.docPassport) e.docPassport = 'Required';
      if (!f.consent) e.consent = 'Please confirm to continue';
      setErrs(e);
      if (Object.keys(e).length === 0) onDone();else {
        const first = document.querySelector('.err, [data-err]');
        if (first) first.scrollIntoView ? null : null;
      }
    };
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 26
      }
    }, React.createElement(Group, {
      title: 'Personal information'
    }, React.createElement(Field, {
      label: 'Full legal name',
      req: true,
      error: errs.fullName
    }, React.createElement(T, {
      value: f.fullName,
      onChange: set('fullName'),
      error: errs.fullName,
      placeholder: 'As on your passport'
    })), React.createElement(Field, {
      label: 'Date of birth',
      req: true,
      error: errs.dob
    }, React.createElement(T, {
      type: 'date',
      value: f.dob,
      onChange: set('dob'),
      error: errs.dob
    })), React.createElement(Field, {
      label: 'Nationality',
      req: true,
      error: errs.nationality
    }, React.createElement(T, {
      value: f.nationality,
      onChange: set('nationality'),
      error: errs.nationality,
      placeholder: 'e.g. Nigerian'
    })), React.createElement(Field, {
      label: 'Country of residence',
      req: true,
      error: errs.residence
    }, React.createElement(T, {
      value: f.residence,
      onChange: set('residence'),
      error: errs.residence,
      placeholder: 'e.g. Nigeria'
    })), React.createElement(Field, {
      label: 'Phone (with country code)',
      req: true,
      error: errs.phone
    }, React.createElement(T, {
      value: f.phone,
      onChange: set('phone'),
      error: errs.phone,
      placeholder: '+234 \u2026'
    })), React.createElement(Field, {
      label: 'Email address',
      req: true,
      error: errs.email
    }, React.createElement(T, {
      type: 'email',
      value: f.email,
      onChange: set('email'),
      error: errs.email,
      placeholder: 'you@example.com'
    }))), React.createElement(Group, {
      title: 'Professional information'
    }, React.createElement(Field, {
      label: 'Qualification type',
      req: true,
      error: errs.qual
    }, React.createElement(S, {
      value: f.qual,
      onChange: set('qual'),
      error: errs.qual,
      options: ['RN', 'BSN', 'MSN', 'Midwife', 'Other']
    })), React.createElement(Field, {
      label: 'Specialty',
      req: true,
      error: errs.specialty
    }, React.createElement(S, {
      value: f.specialty,
      onChange: set('specialty'),
      error: errs.specialty,
      options: ['General / Adult', 'Pediatric', 'ICU / Critical Care', 'Theatre', 'Psychiatric', 'Community', 'Other']
    })), React.createElement(Field, {
      label: 'Year of graduation',
      req: true,
      error: errs.gradYear
    }, React.createElement(T, {
      type: 'number',
      value: f.gradYear,
      onChange: set('gradYear'),
      error: errs.gradYear,
      placeholder: 'e.g. 2019'
    })), React.createElement(Field, {
      label: 'Years of experience',
      req: true,
      error: errs.experience
    }, React.createElement(T, {
      type: 'number',
      value: f.experience,
      onChange: set('experience'),
      error: errs.experience,
      placeholder: 'e.g. 3'
    })), React.createElement(Field, {
      label: 'License number (NMCN or equivalent)',
      req: true,
      error: errs.license
    }, React.createElement(T, {
      value: f.license,
      onChange: set('license'),
      error: errs.license
    })), React.createElement(Field, {
      label: 'Current employer type'
    }, React.createElement(S, {
      value: f.employer,
      onChange: set('employer'),
      options: ['Government hospital', 'Private hospital', 'Clinic', 'NGO', 'Not currently working']
    }))), React.createElement(Group, {
      title: 'Language & readiness'
    }, React.createElement(Field, {
      label: 'Current German level',
      req: true,
      error: errs.germanLevel
    }, React.createElement(S, {
      value: f.germanLevel,
      onChange: set('germanLevel'),
      error: errs.germanLevel,
      options: LANG
    })), React.createElement(Field, {
      label: 'Enrolled in a German course?'
    }, React.createElement(S, {
      value: f.enrolled,
      onChange: set('enrolled'),
      options: ['Yes', 'No']
    })), React.createElement(Field, {
      label: 'When can you relocate?',
      req: true,
      error: errs.availability,
      full: true
    }, React.createElement(S, {
      value: f.availability,
      onChange: set('availability'),
      error: errs.availability,
      options: AVAIL
    }))), React.createElement(Group, {
      title: 'Document uploads'
    }, React.createElement(FileField, {
      label: 'Nursing certificate / diploma',
      req: true,
      value: f.docCert,
      onChange: set('docCert')
    }), React.createElement(FileField, {
      label: 'Professional license',
      req: true,
      value: f.docLicense,
      onChange: set('docLicense')
    }), React.createElement(FileField, {
      label: 'CV / Resume',
      req: true,
      value: f.docCv,
      onChange: set('docCv')
    }), React.createElement(FileField, {
      label: 'Passport (bio data page)',
      req: true,
      value: f.docPassport,
      onChange: set('docPassport')
    }), React.createElement(FileField, {
      label: 'German language certificate',
      optional: true,
      value: f.docGerman,
      onChange: set('docGerman')
    })), React.createElement(Group, {
      title: 'Almost done',
      cols: 1
    }, React.createElement(Field, {
      label: 'How did you hear about us?'
    }, React.createElement(S, {
      value: f.source,
      onChange: set('source'),
      options: ['Facebook / Instagram', 'WhatsApp group', 'Referred by a nurse/friend', 'Google Search', 'YouTube', 'Other']
    })), React.createElement(Field, {
      label: 'Any questions or additional information'
    }, React.createElement(TA, {
      value: f.notes,
      onChange: set('notes'),
      placeholder: 'Optional'
    }))), React.createElement(Consent, {
      checked: f.consent,
      onChange: set('consent'),
      error: errs.consent
    }), errs.consent && React.createElement('span', {
      className: 'err-text'
    }, errs.consent), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      block: true,
      arrow: true,
      onClick: submit
    }, 'Submit My Application'));
  }

  // ---- Form B: Ausbildung ----
  function FormB({
    onDone
  }) {
    const [f, setF] = useState({});
    const [errs, setErrs] = useState({});
    const set = k => v => setF(s => ({
      ...s,
      [k]: v
    }));
    const submit = () => {
      const e = {};
      ['fullName', 'dob', 'nationality', 'phone', 'email', 'education', 'germanLevel', 'role'].forEach(k => {
        if (!f[k]) e[k] = 'Required';
      });
      if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email';
      if (!f.motivation || f.motivation.length < 100) e.motivation = 'Please write at least 100 characters (' + (f.motivation ? f.motivation.length : 0) + '/100)';
      if (!f.docSchool) e.docSchool = 'Required';
      if (!f.docPassport) e.docPassport = 'Required';
      if (!f.consent) e.consent = 'Please confirm to continue';
      setErrs(e);
      if (Object.keys(e).length === 0) onDone();
    };
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 26
      }
    }, React.createElement(Group, {
      title: 'Personal information'
    }, React.createElement(Field, {
      label: 'Full legal name',
      req: true,
      error: errs.fullName
    }, React.createElement(T, {
      value: f.fullName,
      onChange: set('fullName'),
      error: errs.fullName
    })), React.createElement(Field, {
      label: 'Date of birth',
      req: true,
      error: errs.dob
    }, React.createElement(T, {
      type: 'date',
      value: f.dob,
      onChange: set('dob'),
      error: errs.dob
    })), React.createElement(Field, {
      label: 'Nationality',
      req: true,
      error: errs.nationality
    }, React.createElement(T, {
      value: f.nationality,
      onChange: set('nationality'),
      error: errs.nationality
    })), React.createElement(Field, {
      label: 'Phone (with country code)',
      req: true,
      error: errs.phone
    }, React.createElement(T, {
      value: f.phone,
      onChange: set('phone'),
      error: errs.phone,
      placeholder: '+234 \u2026'
    })), React.createElement(Field, {
      label: 'Email address',
      req: true,
      error: errs.email,
      full: true
    }, React.createElement(T, {
      type: 'email',
      value: f.email,
      onChange: set('email'),
      error: errs.email,
      placeholder: 'you@example.com'
    }))), React.createElement(Group, {
      title: 'Background'
    }, React.createElement(Field, {
      label: 'Highest education completed',
      req: true,
      error: errs.education
    }, React.createElement(S, {
      value: f.education,
      onChange: set('education'),
      error: errs.education,
      options: ['Secondary school (WAEC/NECO)', 'OND / HND', 'Bachelor\u2019s degree', 'Other post-secondary']
    })), React.createElement(Field, {
      label: 'Healthcare / caregiving experience?'
    }, React.createElement(S, {
      value: f.care,
      onChange: set('care'),
      options: ['Yes', 'No', 'Some volunteer work']
    }))), React.createElement(Group, {
      title: 'Language assessment'
    }, React.createElement(Field, {
      label: 'Current German level',
      req: true,
      error: errs.germanLevel
    }, React.createElement(S, {
      value: f.germanLevel,
      onChange: set('germanLevel'),
      error: errs.germanLevel,
      options: LANG
    })), React.createElement(Field, {
      label: 'Willing to do 6\u201312 months intensive German?'
    }, React.createElement(S, {
      value: f.willing,
      onChange: set('willing'),
      options: ['Yes', 'No', 'Need more info']
    }))), React.createElement(Group, {
      title: 'Motivation',
      cols: 1
    }, React.createElement(Field, {
      label: 'Why do you want to do the Ausbildung program?',
      req: true,
      error: errs.motivation,
      help: '100\u2013300 words.'
    }, React.createElement(TA, {
      value: f.motivation,
      onChange: set('motivation'),
      error: errs.motivation,
      placeholder: 'Tell us your story\u2026'
    })), React.createElement(Field, {
      label: 'Which role interests you most?',
      req: true,
      error: errs.role
    }, React.createElement(S, {
      value: f.role,
      onChange: set('role'),
      error: errs.role,
      options: ['Nursing', 'Elderly Care', 'Physiotherapy', 'Other']
    }))), React.createElement(Group, {
      title: 'Document uploads'
    }, React.createElement(FileField, {
      label: 'School certificate (WAEC/NECO/degree)',
      req: true,
      value: f.docSchool,
      onChange: set('docSchool')
    }), React.createElement(FileField, {
      label: 'International passport',
      req: true,
      value: f.docPassport,
      onChange: set('docPassport')
    }), React.createElement(FileField, {
      label: 'German certificate',
      optional: true,
      value: f.docGerman,
      onChange: set('docGerman')
    })), React.createElement(Consent, {
      checked: f.consent,
      onChange: set('consent'),
      error: errs.consent
    }), errs.consent && React.createElement('span', {
      className: 'err-text'
    }, errs.consent), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      block: true,
      arrow: true,
      onClick: submit
    }, 'Submit My Interest'));
  }
  function PathCard({
    active,
    onClick,
    icon,
    title,
    sub
  }) {
    return React.createElement('button', {
      onClick,
      style: {
        textAlign: 'left',
        padding: 24,
        borderRadius: 'var(--r-lg)',
        cursor: 'pointer',
        border: '2px solid ' + (active ? 'var(--navy-700)' : 'var(--line)'),
        background: active ? 'var(--navy-050)' : '#fff',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        transition: 'all .15s ease',
        width: '100%'
      }
    }, React.createElement(IconTile, {
      name: icon,
      tone: active ? 'navy' : 'navy',
      size: 52
    }), React.createElement('div', {
      style: {
        flex: 1
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--navy-800)'
      }
    }, title), React.createElement('div', {
      style: {
        fontSize: 14,
        color: 'var(--slate-600)',
        marginTop: 3
      }
    }, sub)), React.createElement('span', {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        border: '2px solid ' + (active ? 'var(--navy-700)' : 'var(--line-strong)'),
        background: active ? 'var(--navy-700)' : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, active && React.createElement(Icon, {
      name: 'check',
      size: 14,
      stroke: 3,
      color: '#fff'
    })));
  }
  function ReferralBlock() {
    const [sent, setSent] = useState(false);
    const [v, setV] = useState({});
    const set = k => e => setV(s => ({
      ...s,
      [k]: e.target.value
    }));
    return React.createElement('div', {
      className: 'card card-pad',
      style: {
        background: 'var(--bg)',
        marginTop: 40
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8
      }
    }, React.createElement(IconTile, {
      name: 'heart',
      tone: 'gold',
      size: 44
    }), React.createElement('h3', {
      className: 'h3'
    }, 'Know a nurse who should apply?')), React.createElement('p', {
      className: 'muted',
      style: {
        marginBottom: 20
      }
    }, 'Refer a colleague and earn a reward when they get placed.'), sent ? React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--green-600)',
        fontWeight: 600
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 20,
      stroke: 3
    }), 'Referral sent \u2014 thank you!') : React.createElement('div', null, React.createElement('div', {
      className: 'ntg-form-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, React.createElement('input', {
      className: 'input',
      placeholder: 'Your name',
      onChange: set('n')
    }), React.createElement('input', {
      className: 'input',
      placeholder: 'Your email',
      onChange: set('e')
    }), React.createElement('input', {
      className: 'input',
      placeholder: 'Nurse\u2019s name',
      onChange: set('nn')
    }), React.createElement('input', {
      className: 'input',
      placeholder: 'Nurse\u2019s WhatsApp number',
      onChange: set('w')
    })), React.createElement(Button, {
      variant: 'navy',
      style: {
        marginTop: 16
      },
      onClick: () => setSent(true)
    }, 'Send Referral')));
  }
  function ApplyPage() {
    const [path, setPath] = useState(null);
    const [doneA, setDoneA] = useState(false);
    const [doneB, setDoneB] = useState(false);
    const reset = () => {
      setDoneA(false);
      setDoneB(false);
      setPath(null);
      window.scrollTo({
        top: 0
      });
    };
    return React.createElement('div', null, React.createElement('section', {
      style: {
        background: 'linear-gradient(180deg,var(--navy-050),var(--surface))',
        paddingTop: 56,
        paddingBottom: 24
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 820,
        textAlign: 'center'
      }
    }, React.createElement('div', {
      className: 'tag',
      style: {
        marginBottom: 18
      }
    }, React.createElement(Icon, {
      name: 'sparkle',
      size: 14
    }), 'Free \u00B7 Confidential \u00B7 No hidden fees'), React.createElement('h1', {
      className: 'h1'
    }, 'Start your application'), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 16
      }
    }, 'It\u2019s free and takes about 10 minutes. Tell us about yourself and we\u2019ll guide you to the right path.'))), React.createElement('section', {
      className: 'section',
      style: {
        paddingTop: 32
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 820
      }
    }, doneA || doneB ? React.createElement(Success, doneA ? {
      title: 'Application received! \uD83C\uDF89',
      body: 'Check your email for next steps. Our team will be in touch within 3\u20135 business days.',
      onReset: reset
    } : {
      title: 'Thank you!',
      body: 'We\u2019ve received your details and will send you our Ausbildung information pack shortly.',
      onReset: reset
    }) : React.createElement(React.Fragment, null, React.createElement('div', {
      style: {
        marginBottom: 30
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 19,
        color: 'var(--navy-800)',
        marginBottom: 16
      }
    }, 'Are you a qualified / trained nurse?'), React.createElement('div', {
      className: 'ntg-path',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, React.createElement(PathCard, {
      active: path === 'nurse',
      onClick: () => setPath('nurse'),
      icon: 'shieldCheck',
      title: 'Yes, I am a registered nurse',
      sub: 'Direct placement path'
    }), React.createElement(PathCard, {
      active: path === 'ausbildung',
      onClick: () => setPath('ausbildung'),
      icon: 'award',
      title: 'No \u2014 interested in training',
      sub: 'Ausbildung path'
    }))), path === 'nurse' && React.createElement('div', {
      className: 'card card-pad',
      style: {
        padding: 'clamp(22px,4vw,38px)'
      }
    }, React.createElement(FormA, {
      onDone: () => {
        setDoneA(true);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    })), path === 'ausbildung' && React.createElement('div', {
      className: 'card card-pad',
      style: {
        padding: 'clamp(22px,4vw,38px)'
      }
    }, React.createElement(FormB, {
      onDone: () => {
        setDoneB(true);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    })), !path && React.createElement('div', {
      style: {
        textAlign: 'center',
        padding: '40px 0',
        color: 'var(--slate-400)'
      }
    }, 'Choose a path above to begin.'), React.createElement(ReferralBlock, null)))));
  }
  window.ApplyPage = ApplyPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/ntg-apply.jsx", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/ntg-chrome.jsx
try { (() => {
// ntg-chrome.jsx — global Nav, Footer, WhatsApp bubble, mobile sticky CTA.
(function () {
  const {
    useState,
    useEffect
  } = React;
  const Icon = window.Icon;
  const {
    Button
  } = window;
  const WA = 'https://wa.me/4915123456789';
  const NAV = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About the Program'
  }, {
    id: 'testimonials',
    label: 'Testimonials'
  }, {
    id: 'faq',
    label: 'FAQ'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  function Logo({
    onDark,
    onClick
  }) {
    return React.createElement('a', {
      href: '#',
      onClick,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, React.createElement('img', {
      src: 'nurses-to-germany/assets/med-global-logo.jpeg',
      alt: 'Med Global',
      style: {
        width: 40,
        height: 40,
        borderRadius: 9,
        objectFit: 'cover'
      }
    }), React.createElement('span', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.05
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 17,
        color: onDark ? '#fff' : 'var(--navy-800)',
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap'
      }
    }, 'Nurses ', React.createElement('span', {
      style: {
        color: 'var(--gold-500)'
      }
    }, 'to'), ' Germany'), React.createElement('span', {
      style: {
        fontSize: 10.5,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: onDark ? 'rgba(255,255,255,0.6)' : 'var(--slate-400)'
      }
    }, 'by Med Global')));
  }
  function Nav({
    page,
    navigate
  }) {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 12);
      window.addEventListener('scroll', onScroll);
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(() => {
      setOpenMenu(false);
    }, [page]);
    const go = id => e => {
      e.preventDefault();
      navigate(id);
    };
    return React.createElement(React.Fragment, null, React.createElement('header', {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.0)',
        backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background .25s ease, border-color .25s ease'
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        height: 'var(--nav-h)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20
      }
    }, React.createElement(Logo, {
      onClick: go('home')
    }), React.createElement('nav', {
      className: 'ntg-desktop-nav',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, NAV.map(n => React.createElement('a', {
      key: n.id,
      href: '#',
      onClick: go(n.id),
      style: {
        fontSize: 15,
        fontWeight: 600,
        fontFamily: 'var(--font-head)',
        padding: '9px 14px',
        borderRadius: 'var(--r-pill)',
        color: page === n.id ? 'var(--navy-800)' : 'var(--slate-600)',
        background: page === n.id ? 'var(--navy-050)' : 'transparent'
      }
    }, n.label))), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement('div', {
      className: 'ntg-desktop-nav'
    }, React.createElement(Button, {
      variant: 'primary',
      onClick: go('apply')
    }, 'Apply Now')), React.createElement('button', {
      className: 'ntg-burger',
      onClick: () => setOpenMenu(!openMenu),
      'aria-label': 'Menu',
      style: {
        display: 'none',
        background: 'none',
        border: '1px solid var(--line)',
        borderRadius: 10,
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--navy-800)'
      }
    }, React.createElement(Icon, {
      name: openMenu ? 'close' : 'menu',
      size: 24
    })))),
    // mobile drawer
    openMenu && React.createElement('div', {
      style: {
        borderTop: '1px solid var(--line)',
        background: '#fff',
        padding: '12px 24px 20px'
      }
    }, NAV.map(n => React.createElement('a', {
      key: n.id,
      href: '#',
      onClick: go(n.id),
      style: {
        display: 'block',
        padding: '13px 8px',
        fontSize: 17,
        fontWeight: 600,
        fontFamily: 'var(--font-head)',
        color: page === n.id ? 'var(--navy-800)' : 'var(--slate-600)',
        borderBottom: '1px solid var(--line)'
      }
    }, n.label)), React.createElement(Button, {
      variant: 'primary',
      block: true,
      style: {
        marginTop: 16
      },
      onClick: go('apply')
    }, 'Apply Now'))));
  }
  function Footer({
    navigate
  }) {
    const go = id => e => {
      e.preventDefault();
      navigate(id);
    };
    const col = (title, links) => React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 14,
        color: '#fff',
        marginBottom: 16,
        letterSpacing: '0.02em'
      }
    }, title), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 11
      }
    }, links.map((l, i) => React.createElement('a', {
      key: i,
      href: '#',
      onClick: l.go ? go(l.go) : e => e.preventDefault(),
      style: {
        fontSize: 14.5,
        color: 'rgba(255,255,255,0.62)'
      }
    }, l.label))));
    return React.createElement('footer', {
      className: 'dark-section',
      style: {
        paddingTop: 64
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      className: 'ntg-footer-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr',
        gap: 40,
        paddingBottom: 48
      }
    }, React.createElement('div', null, React.createElement(Logo, {
      onDark: true,
      onClick: go('home')
    }), React.createElement('p', {
      style: {
        marginTop: 18,
        color: 'rgba(255,255,255,0.7)',
        fontSize: 15,
        maxWidth: 300,
        lineHeight: 1.6
      }
    }, 'Your nursing career. Germany\u2019s future. We relocate qualified African nurses to German hospitals \u2014 with full support from language to landing.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 22
      }
    }, ['globe', 'chat', 'mail', 'play'].map(ic => React.createElement('a', {
      key: ic,
      href: '#',
      onClick: e => e.preventDefault(),
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }
    }, React.createElement(Icon, {
      name: ic,
      size: 18
    }))))), col('Program', [{
      label: 'About the Program',
      go: 'about'
    }, {
      label: 'How it works',
      go: 'about'
    }, {
      label: 'Eligibility',
      go: 'about'
    }, {
      label: 'Testimonials',
      go: 'testimonials'
    }]), col('Support', [{
      label: 'FAQ',
      go: 'faq'
    }, {
      label: 'Contact',
      go: 'contact'
    }, {
      label: 'Apply Now',
      go: 'apply'
    }, {
      label: 'Privacy Policy'
    }, {
      label: 'Terms'
    }]), React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 14,
        color: '#fff',
        marginBottom: 16
      }
    }, 'Join 2,000+ nurses'), React.createElement('p', {
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.62)',
        marginBottom: 14
      }
    }, 'Monthly stories, tips & program updates.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8
      }
    }, React.createElement('input', {
      className: 'input',
      placeholder: 'Your email',
      style: {
        background: 'rgba(255,255,255,0.08)',
        borderColor: 'rgba(255,255,255,0.2)',
        color: '#fff'
      }
    }), React.createElement(Button, {
      variant: 'primary'
    }, React.createElement(Icon, {
      name: 'arrow',
      size: 18
    }))))), React.createElement('div', {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.14)',
        padding: '22px 0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)'
      }
    }, '\u00A9 2026 Med Global Deutschland. All rights reserved.'), React.createElement('span', {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)'
      }
    }, 'Compliant with the German Anerkennungsgesetz.'))));
  }
  function FloatingBits({
    navigate
  }) {
    return React.createElement(React.Fragment, null,
    // WhatsApp bubble
    React.createElement('a', {
      href: WA,
      target: '_blank',
      rel: 'noreferrer',
      'aria-label': 'Chat on WhatsApp',
      style: {
        position: 'fixed',
        right: 22,
        bottom: 22,
        zIndex: 45,
        width: 58,
        height: 58,
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37,211,102,0.45)'
      }
    }, React.createElement(Icon, {
      name: 'chat',
      size: 28
    })),
    // mobile sticky apply
    React.createElement('div', {
      className: 'ntg-mobile-cta',
      style: {
        display: 'none',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 44,
        padding: '12px 16px',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--line)'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      block: true,
      arrow: true,
      onClick: e => {
        e.preventDefault();
        navigate('apply');
      }
    }, 'Apply Now \u2014 It\u2019s Free')));
  }
  Object.assign(window, {
    Nav,
    Footer,
    FloatingBits
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/ntg-chrome.jsx", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/ntg-home.jsx
try { (() => {
// ntg-home.jsx — Home page. Hero has 3 switchable directions (heroStyle).
(function () {
  const Icon = window.Icon;
  const {
    Button,
    SectionHead,
    Reveal,
    CountUp,
    IconTile,
    Chip,
    Accordion
  } = window;
  const TRUST = [{
    t: 'Free to Apply',
    i: 'check'
  }, {
    t: '100+ Nurses Placed',
    i: 'users'
  }, {
    t: 'Legal & Visa Support',
    i: 'shield'
  }, {
    t: 'Start Within 12 Months',
    i: 'clock'
  }];

  // ---- HERO (3 directions) ----
  function HeroSplit({
    navigate
  }) {
    return React.createElement('section', {
      style: {
        paddingTop: 40,
        paddingBottom: 72,
        background: 'linear-gradient(180deg, var(--navy-050), var(--surface))'
      }
    }, React.createElement('div', {
      className: 'container ntg-hero-split',
      style: {
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 56,
        alignItems: 'center'
      }
    }, React.createElement('div', null, React.createElement('div', {
      className: 'tag',
      style: {
        marginBottom: 22
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 14
    }), 'Nigeria \u2192 Germany'), React.createElement('h1', {
      className: 'h-display'
    }, 'Relocate to Germany. Earn more. ', React.createElement('span', {
      style: {
        color: 'var(--gold-600)'
      }
    }, 'Build a life that matters.')), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 22,
        maxWidth: 520
      }
    }, 'We help qualified Nigerian nurses get placed in German hospitals \u2014 with full support from language training to landing.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 32,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Check If You Qualify'), React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      onClick: () => navigate('testimonials')
    }, React.createElement(Icon, {
      name: 'play',
      size: 16
    }), 'Watch a Nurse\u2019s Story')), React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 30
      }
    }, TRUST.map(b => React.createElement(Chip, {
      key: b.t,
      icon: b.i
    }, b.t)))), React.createElement('div', {
      style: {
        position: 'relative'
      }
    }, React.createElement('image-slot', {
      id: 'home-hero',
      shape: 'rounded',
      radius: '24',
      placeholder: 'Drop a hero photo \u2014 nurse in German scrubs',
      style: {
        width: '100%',
        aspectRatio: '4/5',
        boxShadow: 'var(--shadow-lg)'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        left: -22,
        bottom: 34,
        background: '#fff',
        borderRadius: 16,
        boxShadow: 'var(--shadow-md)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 13
      }
    }, React.createElement(IconTile, {
      name: 'euro',
      tone: 'green',
      size: 46
    }), React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 20,
        color: 'var(--navy-800)'
      }
    }, '\u20AC2,800'), React.createElement('div', {
      style: {
        fontSize: 12.5,
        color: 'var(--slate-600)'
      }
    }, 'avg. monthly salary'))))));
  }
  function HeroFullbleed({
    navigate
  }) {
    return React.createElement('section', {
      style: {
        position: 'relative',
        minHeight: 620,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }
    }, React.createElement('image-slot', {
      id: 'home-hero-fb',
      shape: 'rect',
      placeholder: 'Drop a full-bleed hero photo',
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        borderRadius: 0,
        border: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(100deg, rgba(7,32,63,0.92) 0%, rgba(13,43,85,0.78) 45%, rgba(13,43,85,0.30) 100%)'
      }
    }), React.createElement('div', {
      className: 'container',
      style: {
        position: 'relative',
        padding: '80px 24px'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 640
      }
    }, React.createElement('div', {
      className: 'eyebrow on-dark',
      style: {
        marginBottom: 18
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 15
    }), 'Nigeria \u2192 Germany'), React.createElement('h1', {
      className: 'h-display',
      style: {
        color: '#fff'
      }
    }, 'Relocate to Germany. Earn more. ', React.createElement('span', {
      style: {
        color: 'var(--gold-300)'
      }
    }, 'Build a life that matters.')), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 22,
        color: 'rgba(255,255,255,0.85)',
        maxWidth: 540
      }
    }, 'We help qualified Nigerian nurses get placed in German hospitals \u2014 with full support from language training to landing.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 32,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Check If You Qualify'), React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      onDark: true,
      onClick: () => navigate('testimonials')
    }, React.createElement(Icon, {
      name: 'play',
      size: 16
    }), 'Watch a Nurse\u2019s Story')), React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        marginTop: 34
      }
    }, TRUST.map(b => React.createElement('span', {
      key: b.t,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'rgba(255,255,255,0.92)',
        fontWeight: 600,
        fontSize: 14.5
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--gold-300)'
      }
    }, React.createElement(Icon, {
      name: b.i,
      size: 17,
      stroke: 2.4
    })), b.t))))));
  }
  function HeroEditorial({
    navigate
  }) {
    const stats = [['100+', 'Nurses placed'], ['\u20AC2,800', 'Avg. salary'], ['12', 'Partner hospitals']];
    return React.createElement('section', {
      style: {
        paddingTop: 36,
        paddingBottom: 64
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      style: {
        textAlign: 'center',
        maxWidth: 820,
        margin: '0 auto'
      }
    }, React.createElement('div', {
      className: 'tag',
      style: {
        marginBottom: 22
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 14
    }), 'Nigeria \u2192 Germany'), React.createElement('h1', {
      className: 'h-display'
    }, 'Relocate to Germany. Earn more. ', React.createElement('span', {
      style: {
        color: 'var(--gold-600)'
      }
    }, 'Build a life that matters.')), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 22,
        maxWidth: 600,
        margin: '22px auto 0'
      }
    }, 'We help qualified Nigerian nurses get placed in German hospitals \u2014 with full support from language training to landing.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 30,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Check If You Qualify'), React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      onClick: () => navigate('testimonials')
    }, React.createElement(Icon, {
      name: 'play',
      size: 16
    }), 'Watch a Nurse\u2019s Story'))), React.createElement('div', {
      className: 'ntg-hero-edit',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr 1fr',
        gap: 20,
        marginTop: 48,
        alignItems: 'stretch'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center'
      }
    }, stats.slice(0, 2).map(s => React.createElement('div', {
      key: s[0],
      className: 'card card-pad',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 32,
        color: 'var(--navy-800)'
      }
    }, s[0]), React.createElement('div', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-600)',
        marginTop: 4
      }
    }, s[1])))), React.createElement('image-slot', {
      id: 'home-hero-ed',
      shape: 'rounded',
      radius: '24',
      placeholder: 'Drop a hero photo',
      style: {
        width: '100%',
        minHeight: 360,
        boxShadow: 'var(--shadow-md)'
      }
    }), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center'
      }
    }, React.createElement('div', {
      className: 'card card-pad',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 32,
        color: 'var(--navy-800)'
      }
    }, stats[2][0]), React.createElement('div', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-600)',
        marginTop: 4
      }
    }, stats[2][1])), React.createElement('div', {
      className: 'card card-pad',
      style: {
        background: 'var(--navy-800)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center',
        textAlign: 'center'
      }
    }, React.createElement(IconTile, {
      name: 'shieldCheck',
      tone: 'gold',
      size: 44
    }), React.createElement('div', {
      style: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 14
      }
    }, 'Visa & legal support included'))))));
  }
  function Hero({
    heroStyle,
    navigate
  }) {
    if (heroStyle === 'fullbleed') return React.createElement(HeroFullbleed, {
      navigate
    });
    if (heroStyle === 'editorial') return React.createElement(HeroEditorial, {
      navigate
    });
    return React.createElement(HeroSplit, {
      navigate
    });
  }

  // ---- STATS BAR ----
  function StatsBar() {
    const stats = [{
      to: 100,
      suffix: '+',
      label: 'Nurses successfully placed'
    }, {
      prefix: '\u20AC',
      to: 2800,
      label: 'Average monthly salary'
    }, {
      to: 12,
      label: 'Partner hospitals in Germany'
    }, {
      to: 6,
      label: 'Countries we recruit from'
    }];
    return React.createElement('section', {
      className: 'dark-section',
      style: {
        padding: '54px 0'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      className: 'ntg-stats',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 28
      }
    }, stats.map((s, i) => React.createElement('div', {
      key: i,
      style: {
        textAlign: 'center',
        borderLeft: i ? '1px solid rgba(255,255,255,0.14)' : 'none'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 'clamp(30px,4vw,44px)',
        color: 'var(--gold-300)',
        letterSpacing: '-0.02em'
      }
    }, React.createElement(CountUp, {
      to: s.to,
      prefix: s.prefix || '',
      suffix: s.suffix || ''
    })), React.createElement('div', {
      style: {
        color: 'rgba(255,255,255,0.78)',
        fontSize: 14.5,
        marginTop: 6
      }
    }, s.label))))));
  }

  // ---- HOW IT WORKS ----
  function HowItWorks({
    navigate
  }) {
    const steps = [{
      n: 1,
      icon: 'doc',
      t: 'Apply & Get Assessed',
      d: 'Fill our quick form, upload your documents, and we review your eligibility \u2014 free.'
    }, {
      n: 2,
      icon: 'globe',
      t: 'Language & Recognition',
      d: 'We connect you with B2 German training and handle your certificate recognition (Anerkennung).'
    }, {
      n: 3,
      icon: 'plane',
      t: 'Fly & Start Working',
      d: 'Visa processed, flight supported, hospital placement confirmed. Welcome to Germany.'
    }];
    return React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'The Process',
      title: 'Your journey to Germany in 3 steps',
      lead: 'A clear, supported path from your first application to your first shift.'
    }), React.createElement('div', {
      className: 'ntg-steps',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        marginTop: 44,
        position: 'relative'
      }
    }, steps.map((s, i) => React.createElement(Reveal, {
      key: s.n,
      delay: i * 100
    }, React.createElement('div', {
      className: 'card card-pad card-hover',
      style: {
        height: '100%'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement(IconTile, {
      name: s.icon,
      tone: i === 1 ? 'gold' : 'navy',
      size: 54
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 44,
        color: 'var(--line-strong)'
      }
    }, '0' + s.n)), React.createElement('h3', {
      className: 'h3',
      style: {
        marginTop: 20
      }
    }, s.t), React.createElement('p', {
      className: 'muted',
      style: {
        marginTop: 10,
        fontSize: 15.5
      }
    }, s.d))))), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 40
      }
    }, React.createElement(Button, {
      variant: 'navy',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Start Your Application'))));
  }

  // ---- WHY GERMANY ----
  function WhyGermany({
    navigate
  }) {
    const cards = [{
      icon: 'building',
      tone: 'navy',
      t: 'A critical shortage',
      d: 'Germany needs 200,000+ nurses \u2014 demand is structural, not temporary.'
    }, {
      icon: 'euro',
      tone: 'green',
      t: 'Earn \u20AC2,500\u2013\u20AC4,000/mo',
      d: 'That\u2019s roughly \u20A64M\u2013\u20A66.5M every month, with pension from day one.'
    }, {
      icon: 'home',
      tone: 'gold',
      t: 'Relocation support',
      d: 'Accommodation and relocation help for your first months on the ground.'
    }, {
      icon: 'users',
      tone: 'navy',
      t: 'Bring your family',
      d: 'Family reunification visas let your spouse and children join you.'
    }];
    return React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Why Germany',
      title: 'Why thousands of African nurses are choosing Germany'
    }), React.createElement('div', {
      className: 'ntg-why',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 22,
        marginTop: 44
      }
    }, cards.map((c, i) => React.createElement(Reveal, {
      key: c.t,
      delay: i * 80
    }, React.createElement('div', {
      className: 'card card-pad card-hover',
      style: {
        height: '100%'
      }
    }, React.createElement(IconTile, {
      name: c.icon,
      tone: c.tone,
      size: 52
    }), React.createElement('h3', {
      style: {
        fontSize: 18.5,
        marginTop: 18,
        fontFamily: 'var(--font-head)',
        color: 'var(--navy-800)'
      }
    }, c.t), React.createElement('p', {
      className: 'muted',
      style: {
        marginTop: 9,
        fontSize: 14.5
      }
    }, c.d))))), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 36
      }
    }, React.createElement('a', {
      href: '#',
      onClick: e => {
        e.preventDefault();
        navigate('about');
      },
      style: {
        color: 'var(--navy-700)',
        fontWeight: 700,
        fontFamily: 'var(--font-head)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7
      }
    }, 'Learn more about the program', React.createElement(Icon, {
      name: 'arrow',
      size: 18
    })))));
  }

  // ---- TESTIMONIALS PREVIEW ----
  function TestimonialsPreview({
    navigate
  }) {
    const vids = [{
      name: 'Chioma A.',
      from: 'Lagos',
      city: 'Frankfurt'
    }, {
      name: 'Emeka O.',
      from: 'Abuja',
      city: 'Munich'
    }, {
      name: 'Blessing N.',
      from: 'Enugu',
      city: 'Hamburg'
    }];
    return React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Testimonials',
      title: 'Real nurses. Real stories.',
      lead: 'Hear from African nurses who already made the move \u2014 in their own words.'
    }), React.createElement('div', {
      className: 'ntg-vids',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        marginTop: 44
      }
    }, vids.map((v, i) => React.createElement(Reveal, {
      key: v.name,
      delay: i * 90
    }, React.createElement('div', {
      className: 'card card-hover',
      style: {
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'relative'
      }
    }, React.createElement('image-slot', {
      id: 'home-vid-' + i,
      shape: 'rect',
      placeholder: 'Video thumbnail',
      style: {
        width: '100%',
        aspectRatio: '4/3',
        borderRadius: 0,
        border: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 58,
        height: 58,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-md)'
      }
    }, React.createElement(Icon, {
      name: 'play',
      size: 24,
      color: 'var(--navy-800)'
    })))), React.createElement('div', {
      style: {
        padding: '18px 20px'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, v.name + ', ' + v.from), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--slate-600)',
        fontSize: 14,
        marginTop: 4
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 14
    }), 'Now in ' + v.city)))))), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 40
      }
    }, React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('testimonials')
    }, 'Watch More Stories'))));
  }

  // ---- ELIGIBILITY ----
  function Eligibility({
    navigate
  }) {
    const items = ['You are a registered nurse (RN) in Nigeria or another African country', 'You have at least 1 year of post-qualification experience', 'You are willing to learn German (or already have A1\u2013B2 level)', 'You are ready to relocate within 6\u201318 months'];
    return React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container ntg-elig',
      style: {
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, React.createElement('div', null, React.createElement(SectionHead, {
      eyebrow: 'Eligibility',
      title: 'Are you eligible?',
      lead: 'A quick check before you apply. If most of these sound like you, you\u2019re ready.'
    }), React.createElement('div', {
      style: {
        marginTop: 24
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Apply Now \u2014 It\u2019s Free'))), React.createElement('div', {
      className: 'card card-pad',
      style: {
        padding: 30
      }
    }, items.map((it, i) => React.createElement('div', {
      key: i,
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start',
        padding: '14px 0',
        borderTop: i ? '1px solid var(--line)' : 'none'
      }
    }, React.createElement('span', {
      style: {
        flex: '0 0 auto',
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'var(--green-100)',
        color: 'var(--green-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 17,
      stroke: 3
    })), React.createElement('span', {
      style: {
        fontSize: 16,
        color: 'var(--ink)',
        lineHeight: 1.5
      }
    }, it))))));
  }

  // ---- FAQ TEASER ----
  function FaqTeaser({
    navigate
  }) {
    const items = [{
      q: 'Do I need to speak German before applying?',
      a: 'No. You can apply at any German level \u2014 even none. We connect you with training to reach the B2 level hospitals require, and many nurses start from scratch.'
    }, {
      q: 'Who pays for my visa and flights?',
      a: 'Visa and relocation costs are supported and partially covered by the program and your placement hospital. We guide you through every step and document.'
    }, {
      q: 'What happens to my family?',
      a: 'Germany offers family reunification visas \u2014 your spouse and children can join you, typically 6\u201312 months after you arrive and settle.'
    }];
    return React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 860
      }
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'FAQ',
      title: 'Questions, answered'
    }), React.createElement('div', {
      style: {
        marginTop: 36
      }
    }, React.createElement(Accordion, {
      items,
      defaultOpen: 0
    })), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 28
      }
    }, React.createElement('a', {
      href: '#',
      onClick: e => {
        e.preventDefault();
        navigate('faq');
      },
      style: {
        color: 'var(--navy-700)',
        fontWeight: 700,
        fontFamily: 'var(--font-head)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7
      }
    }, 'See all FAQs', React.createElement(Icon, {
      name: 'arrow',
      size: 18
    })))));
  }

  // ---- FINAL CTA ----
  function FinalCta({
    navigate
  }) {
    return React.createElement('section', {
      style: {
        padding: '20px 0 90px'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 28,
        background: 'linear-gradient(120deg, var(--navy-900), var(--navy-700))',
        padding: 'clamp(40px,6vw,72px)',
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        top: -60,
        right: -40,
        width: 240,
        height: 240,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,166,35,0.35), transparent 70%)'
      }
    }), React.createElement('h2', {
      style: {
        position: 'relative',
        color: '#fff',
        fontSize: 'clamp(28px,4vw,42px)',
        maxWidth: 700,
        margin: '0 auto'
      }
    }, 'Your next shift could be in Frankfurt.'), React.createElement('p', {
      style: {
        position: 'relative',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
        marginTop: 16
      }
    }, 'Join hundreds of African nurses who already made the move.'), React.createElement('div', {
      style: {
        position: 'relative',
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Start My Application')))));
  }
  function HomePage({
    heroStyle,
    navigate
  }) {
    return React.createElement(React.Fragment, null, React.createElement(Hero, {
      heroStyle,
      navigate
    }), React.createElement(StatsBar, null), React.createElement(HowItWorks, {
      navigate
    }), React.createElement(WhyGermany, {
      navigate
    }), React.createElement(TestimonialsPreview, {
      navigate
    }), React.createElement(Eligibility, {
      navigate
    }), React.createElement(FaqTeaser, {
      navigate
    }), React.createElement(FinalCta, {
      navigate
    }));
  }
  window.HomePage = HomePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/ntg-home.jsx", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/ntg-icons.jsx
try { (() => {
// ntg-icons.jsx — clinical line-icon set (single stroke, rounded).
// Usage: <Icon name="check" size={20} />
(function () {
  const P = {
    menu: 'M3 6h18M3 12h18M3 18h18',
    close: 'M6 6l12 12M18 6L6 18',
    check: 'M20 6L9 17l-5-5',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    arrowDown: 'M12 5v14M6 13l6 6 6-6',
    chevron: 'M6 9l6 6 6-6',
    play: 'M8 5v14l11-7z',
    mail: 'M3 6.5h18v11H3zM3 7l9 6 9-6',
    phone: 'M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',
    calendar: 'M4 5h16v15H4zM4 9h16M8 3v4M16 3v4',
    shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
    shieldCheck: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',
    heart: 'M12 20s-7-4.5-9.5-9A4.5 4.5 0 0112 5a4.5 4.5 0 019.5 6C19 15.5 12 20 12 20z',
    home: 'M3 11l9-8 9 8M5 10v10h14V10',
    euro: 'M16 8a5 5 0 100 8M5 10h7M5 14h7',
    plane: 'M21 16v-2l-8-5V4a1.5 1.5 0 00-3 0v5l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.5z',
    globe: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18',
    users: 'M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 20c0-3 3-5 7-5s7 2 7 5M17 11a3 3 0 000-6M22 20c0-2.5-2-4-5-4.5',
    upload: 'M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3',
    star: 'M12 3l2.6 5.5 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.5l1.1-6L3.4 9.3l6-.8z',
    pin: 'M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
    search: 'M11 4a7 7 0 105 12l4 4M11 4a7 7 0 015 12',
    clock: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3.5 2',
    doc: 'M6 2h8l4 4v16H6zM14 2v4h4',
    chat: 'M4 5h16v11H8l-4 4z',
    sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
    building: 'M4 21V5l8-3 8 3v16M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h6',
    award: 'M12 3a5 5 0 100 10 5 5 0 000-10zM8.5 12L7 22l5-3 5 3-1.5-10'
  };
  const FILLED = {
    play: true,
    star: true,
    sparkle: true
  };
  function Icon({
    name,
    size = 22,
    stroke = 2,
    color = 'currentColor',
    style
  }) {
    const d = P[name] || P.check;
    const filled = FILLED[name];
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: filled ? color : 'none',
      stroke: filled ? 'none' : color,
      strokeWidth: stroke,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style,
      'aria-hidden': 'true'
    }, React.createElement('path', {
      d
    }));
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/ntg-icons.jsx", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/ntg-pages.jsx
try { (() => {
// ntg-pages.jsx — About, Testimonials, FAQ, Contact.
(function () {
  const {
    useState
  } = React;
  const Icon = window.Icon;
  const {
    Button,
    SectionHead,
    Reveal,
    IconTile,
    Chip,
    Accordion
  } = window;
  function PageHero({
    eyebrow,
    title,
    lead,
    crumb
  }) {
    return React.createElement('section', {
      style: {
        background: 'linear-gradient(180deg,var(--navy-050),var(--surface))',
        paddingTop: 52,
        paddingBottom: 40
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 860
      }
    }, crumb && React.createElement('div', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-400)',
        marginBottom: 18
      }
    }, crumb), React.createElement('div', {
      className: 'eyebrow',
      style: {
        marginBottom: 14
      }
    }, React.createElement(Icon, {
      name: 'sparkle',
      size: 15
    }), eyebrow), React.createElement('h1', {
      className: 'h1'
    }, title), lead && React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 16,
        maxWidth: 640
      }
    }, lead)));
  }

  // ===================== ABOUT =====================
  function AboutPage({
    navigate
  }) {
    const benefits = [['Monthly salary', '\u20AC2,500 \u2013 \u20AC4,000 (entry to experienced)'], ['Accommodation', 'Provided or subsidized for first 3\u20136 months'], ['Health insurance', 'Mandatory state insurance \u2014 fully covered'], ['Pension', 'German state pension from day one'], ['Annual leave', '24\u201330 days paid leave per year'], ['Language training', 'Fully or partially funded before departure'], ['Visa & relocation', 'Supported and partially covered'], ['Family reunification', 'Spouse and children can join after 6\u201312 months']];
    const timeline = [['Month 1\u20132', 'Application submitted & documents verified'], ['Month 2\u20134', 'German language training begins (A1 \u2192 B2)'], ['Month 4\u20136', 'Certificate recognition (Anerkennung)'], ['Month 6\u20138', 'Hospital matching & contract signed'], ['Month 8\u201310', 'Visa application & approval'], ['Month 10\u201312', 'Pre-departure orientation & flight'], ['Month 12+', 'Arrive in Germany, start working']];
    const handle = [['doc', 'Document verification & authentication'], ['globe', 'German language school partnership'], ['shieldCheck', 'Anerkennung (recognition) guidance'], ['plane', 'Pre-departure orientation'], ['building', 'Visa application support'], ['home', 'Accommodation liaison'], ['chat', 'On-arrival support (first 30 days)'], ['users', 'Family reunification guidance']];
    const cities = ['Frankfurt am Main', 'Munich (M\u00FCnchen)', 'Berlin', 'Hamburg', 'Cologne (K\u00F6ln)', 'Stuttgart'];
    const reqNurse = ['Valid nursing certificate', 'NMCN or equivalent license', 'Min. 1 year clinical experience', 'Willingness to reach B2 German', 'Valid international passport', 'No serious criminal record', 'Medical fitness'];
    const reqAus = ['Secondary school leaving certificate', 'German level of at least A2', 'Age 18\u201335 (preferred)', 'Commitment to 3-year training', 'Strong motivation letter'];
    return React.createElement(React.Fragment, null, React.createElement(PageHero, {
      crumb: 'Home \u203A About the Program',
      eyebrow: 'About the Program',
      title: 'Everything you need to know about relocating to Germany as a nurse',
      lead: 'A structural opportunity, an honest timeline, and an organisation that handles the hard parts with you.'
    }),
    // Why Germany needs you
    React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container ntg-2col',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, React.createElement('image-slot', {
      id: 'about-hospital',
      shape: 'rounded',
      radius: '20',
      placeholder: 'Drop a German hospital photo',
      style: {
        width: '100%',
        aspectRatio: '4/3',
        boxShadow: 'var(--shadow-md)'
      }
    }), React.createElement('div', null, React.createElement(SectionHead, {
      eyebrow: 'Why Germany needs you',
      title: 'The door is wide open'
    }), React.createElement('ul', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        marginTop: 18
      }
    }, ['Germany has an ageing population \u2014 demand for nurses is structural, not temporary.', 'The German government actively funds international nurse recruitment.', 'African nurses are highly regarded for their work ethic and clinical training.'].map((t, i) => React.createElement('li', {
      key: i,
      style: {
        display: 'flex',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--green-600)',
        marginTop: 2
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 20,
      stroke: 3
    })), React.createElement('span', {
      style: {
        fontSize: 16,
        color: 'var(--slate-700)'
      }
    }, t)))), React.createElement('div', {
      style: {
        marginTop: 24,
        padding: 22,
        borderRadius: 'var(--r-lg)',
        background: 'var(--navy-800)',
        color: '#fff'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 19,
        lineHeight: 1.4
      }
    }, '\u201CGermany will need 500,000 more healthcare workers by 2030.\u201D'))))),
    // Benefits
    React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Your package',
      title: 'What you will earn & receive'
    }), React.createElement('div', {
      className: 'ntg-benefits',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginTop: 40
      }
    }, benefits.map((b, i) => React.createElement('div', {
      key: i,
      className: 'card',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '18px 22px'
      }
    }, React.createElement('span', {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--gold-500)',
        flex: '0 0 auto'
      }
    }), React.createElement('div', {
      style: {
        flex: '0 0 38%',
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, b[0]), React.createElement('div', {
      style: {
        color: 'var(--slate-600)',
        fontSize: 14.5
      }
    }, b[1])))))),
    // Timeline
    React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 880
      }
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Timeline',
      title: 'The full relocation timeline'
    }), React.createElement('div', {
      style: {
        marginTop: 44,
        position: 'relative'
      }
    }, React.createElement('div', {
      className: 'ntg-tl-line',
      style: {
        position: 'absolute',
        left: 19,
        top: 8,
        bottom: 8,
        width: 2,
        background: 'var(--line)'
      }
    }), timeline.map((t, i) => React.createElement(Reveal, {
      key: i,
      delay: i * 60,
      style: {
        display: 'flex',
        gap: 22,
        paddingBottom: 26,
        position: 'relative'
      }
    }, React.createElement('span', {
      style: {
        flex: '0 0 auto',
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: i === timeline.length - 1 ? 'var(--gold-500)' : 'var(--navy-800)',
        color: i === timeline.length - 1 ? 'var(--on-accent)' : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 14,
        zIndex: 1
      }
    }, i + 1), React.createElement('div', {
      style: {
        paddingTop: 2
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 13.5,
        color: 'var(--gold-600)',
        letterSpacing: '.04em'
      }
    }, t[0]), React.createElement('div', {
      style: {
        fontSize: 16.5,
        color: 'var(--navy-800)',
        fontWeight: 500,
        marginTop: 2
      }
    }, t[1]))))), React.createElement('p', {
      className: 'help',
      style: {
        textAlign: 'center',
        marginTop: 8
      }
    }, 'Timeline varies based on your current German level and document readiness.'))),
    // Requirements two-path
    React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Entry requirements',
      title: 'Two paths into Germany'
    }), React.createElement('div', {
      className: 'ntg-2col',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        marginTop: 40
      }
    }, [['For Qualified Nurses', reqNurse, 'shieldCheck', 'navy'], ['For Ausbildung (Training)', reqAus, 'award', 'gold']].map(col => React.createElement('div', {
      key: col[0],
      className: 'card card-pad'
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 18
      }
    }, React.createElement(IconTile, {
      name: col[2],
      tone: col[3],
      size: 48
    }), React.createElement('h3', {
      className: 'h3'
    }, col[0])), React.createElement('ul', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, col[1].map((r, i) => React.createElement('li', {
      key: i,
      style: {
        display: 'flex',
        gap: 11
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--green-600)',
        marginTop: 1
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 18,
      stroke: 3
    })), React.createElement('span', {
      style: {
        fontSize: 15,
        color: 'var(--slate-700)'
      }
    }, r))))))))),
    // Partner hospitals
    React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Network',
      title: 'Our partner hospitals'
    }), React.createElement('div', {
      className: 'ntg-cities',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 18,
        marginTop: 40
      }
    }, cities.map(c => React.createElement('div', {
      key: c,
      className: 'card card-hover',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '20px 22px'
      }
    }, React.createElement(IconTile, {
      name: 'building',
      tone: 'navy',
      size: 46
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 600,
        fontSize: 16,
        color: 'var(--navy-800)'
      }
    }, c)))), React.createElement('p', {
      className: 'help',
      style: {
        textAlign: 'center',
        marginTop: 18
      }
    }, 'We are growing our network. Hospital names are shared during the matching stage.'))),
    // What we handle
    React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Full support',
      title: 'What we handle for you'
    }), React.createElement('div', {
      className: 'ntg-handle',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 18,
        marginTop: 40
      }
    }, handle.map((h, i) => React.createElement('div', {
      key: i,
      className: 'card card-pad',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, React.createElement(IconTile, {
      name: h[0],
      tone: i % 2 ? 'gold' : 'navy',
      size: 50
    })), React.createElement('div', {
      style: {
        fontSize: 14.5,
        color: 'var(--slate-700)',
        fontWeight: 500
      }
    }, h[1])))))), React.createElement('section', {
      className: 'section',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('h2', {
      className: 'h2'
    }, 'Ready to start?'), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 12
      }
    }, 'Apply now \u2014 it\u2019s completely free.'), React.createElement('div', {
      style: {
        marginTop: 26,
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Apply Now')))));
  }

  // ===================== TESTIMONIALS =====================
  function TestimonialsPage({
    navigate
  }) {
    const cities = ['All', 'Lagos', 'Abuja', 'Enugu', 'Accra', 'Douala', 'Other'];
    const [filter, setFilter] = useState('All');
    const vids = [{
      name: 'Chioma A.',
      from: 'Lagos',
      city: 'Frankfurt',
      q: 'I never thought it could move this fast.'
    }, {
      name: 'Emeka O.',
      from: 'Abuja',
      city: 'Munich',
      q: 'The language support changed everything.'
    }, {
      name: 'Blessing N.',
      from: 'Enugu',
      city: 'Hamburg',
      q: 'My family joined me within a year.'
    }, {
      name: 'Tunde A.',
      from: 'Lagos',
      city: 'Berlin',
      q: 'They handled the paperwork I dreaded.'
    }, {
      name: 'Ama K.',
      from: 'Accra',
      city: 'Cologne',
      q: 'From application to arrival in 11 months.'
    }, {
      name: 'Marie D.',
      from: 'Douala',
      city: 'Stuttgart',
      q: 'Real people, real answers, every step.'
    }];
    const shown = filter === 'All' ? vids : vids.filter(v => v.from === filter || filter === 'Other' && !cities.includes(v.from));
    const quotes = [{
      name: 'Chioma A.',
      role: 'ICU Nurse, Frankfurt',
      text: 'I was anxious about the German exam, but the recognition guidance made it manageable. Today I work in a Frankfurt ICU and send money home every month.'
    }, {
      name: 'Emeka O.',
      role: 'Theatre Nurse, Munich',
      text: 'The hardest part was the language. Med Global got me into a funded B2 course and checked in weekly. Eight months later I had a contract.'
    }];
    return React.createElement(React.Fragment, null, React.createElement(PageHero, {
      eyebrow: 'Testimonials',
      title: 'Hear it from nurses who already made the move',
      lead: 'These are real stories from African nurses now working in Germany.'
    }),
    // featured
    React.createElement('section', {
      style: {
        paddingBottom: 8
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      style: {
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)'
      }
    }, React.createElement('image-slot', {
      id: 'test-feature',
      shape: 'rect',
      placeholder: 'Featured testimonial video',
      style: {
        width: '100%',
        aspectRatio: '16/7',
        borderRadius: 0,
        border: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(0deg, rgba(7,32,63,0.85), rgba(7,32,63,0.1) 60%)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(24px,4vw,44px)'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, React.createElement('div', {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, React.createElement(Icon, {
      name: 'play',
      size: 26,
      color: 'var(--navy-800)'
    })), React.createElement('div', null, React.createElement('div', {
      style: {
        color: '#fff',
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 22
      }
    }, 'Chioma A. \u2014 Lagos \u2192 Frankfurt'), React.createElement('div', {
      style: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 15,
        marginTop: 4
      }
    }, 'ICU Nurse \u00B7 University Hospital Frankfurt'))))))),
    // grid + filter
    React.createElement('section', {
      className: 'section',
      style: {
        paddingTop: 48
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 9,
        marginBottom: 30
      }
    }, cities.map(c => React.createElement('button', {
      key: c,
      onClick: () => setFilter(c),
      style: {
        padding: '8px 16px',
        borderRadius: 'var(--r-pill)',
        fontFamily: 'var(--font-head)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        border: '1px solid ' + (filter === c ? 'var(--navy-700)' : 'var(--line)'),
        background: filter === c ? 'var(--navy-800)' : '#fff',
        color: filter === c ? '#fff' : 'var(--slate-600)'
      }
    }, c))), React.createElement('div', {
      className: 'ntg-vids',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, shown.map((v, i) => React.createElement('div', {
      key: v.name,
      className: 'card card-hover',
      style: {
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'relative'
      }
    }, React.createElement('image-slot', {
      id: 'test-' + i,
      shape: 'rect',
      placeholder: 'Video',
      style: {
        width: '100%',
        aspectRatio: '4/3',
        borderRadius: 0,
        border: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 54,
        height: 54,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'play',
      size: 22,
      color: 'var(--navy-800)'
    })))), React.createElement('div', {
      style: {
        padding: '16px 18px'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, v.name + ', ' + v.from), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--slate-600)',
        fontSize: 13.5,
        margin: '3px 0 8px'
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 13
    }), 'Now in ' + v.city), React.createElement('p', {
      style: {
        fontSize: 14.5,
        color: 'var(--slate-700)',
        fontStyle: 'italic'
      }
    }, '\u201C' + v.q + '\u201D'))))))),
    // written quotes
    React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)',
        paddingTop: 64
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      className: 'ntg-2col',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24
      }
    }, quotes.map(q => React.createElement('div', {
      key: q.name,
      className: 'card card-pad'
    }, React.createElement('div', {
      style: {
        color: 'var(--gold-500)',
        display: 'flex',
        gap: 3,
        marginBottom: 14
      }
    }, [0, 1, 2, 3, 4].map(s => React.createElement(Icon, {
      key: s,
      name: 'star',
      size: 18
    }))), React.createElement('p', {
      style: {
        fontSize: 17,
        color: 'var(--ink)',
        lineHeight: 1.6
      }
    }, '\u201C' + q.text + '\u201D'), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 20
      }
    }, React.createElement('image-slot', {
      id: 'q-' + q.name.replace(/\W/g, ''),
      shape: 'circle',
      placeholder: '',
      style: {
        width: 48,
        height: 48
      }
    }), React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, q.name), React.createElement('div', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-600)'
      }
    }, q.role)))))))), React.createElement('section', {
      className: 'section',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('h2', {
      className: 'h2'
    }, 'Be the next success story.'), React.createElement('div', {
      style: {
        marginTop: 24,
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Apply Now')))));
  }

  // ===================== FAQ =====================
  function FaqPage({
    navigate
  }) {
    const [q, setQ] = useState('');
    const groups = [{
      cat: 'About the Program',
      items: [{
        q: 'What is the Nurses to Germany program?',
        a: 'A relocation program by Med Global Deutschland that places qualified African nurses in German hospitals, with full support from language to landing.'
      }, {
        q: 'Is this program free?',
        a: 'Applying is completely free. Visa, language and relocation costs are supported and partially covered by the program and your placement hospital.'
      }, {
        q: 'Are you a recruitment agency?',
        a: 'We are a relocation partner: we assess, prepare, and match you, then support you through recognition, visa and arrival.'
      }, {
        q: 'How long does the whole process take?',
        a: 'Typically 10\u201312 months, depending on your German level and how quickly documents are ready.'
      }]
    }, {
      cat: 'Eligibility & Requirements',
      items: [{
        q: 'What qualifications do I need?',
        a: 'A valid nursing certificate, a license (NMCN or equivalent), and at least one year of clinical experience for the nurse path.'
      }, {
        q: 'I qualified outside Nigeria \u2014 can I still apply?',
        a: 'Yes. We work with nurses across Africa, including Ghana, Cameroon and beyond.'
      }, {
        q: 'Do I need IELTS or TOEFL?',
        a: 'No. Germany requires German (B2), not English certification.'
      }, {
        q: 'What is the minimum age to apply?',
        a: 'There is no strict cap for the nurse path; the Ausbildung path prefers ages 18\u201335.'
      }]
    }, {
      cat: 'German Language',
      items: [{
        q: 'Do I need to speak German before applying?',
        a: 'No \u2014 you can apply at any level, including none. We connect you with training to reach B2.'
      }, {
        q: 'What level of German is required?',
        a: 'B2 is required to work as a nurse in Germany.'
      }, {
        q: 'Who pays for my German training?',
        a: 'Training is fully or partially funded depending on your path and placement.'
      }, {
        q: 'How long does it take to reach B2?',
        a: 'From zero, roughly 8\u201312 months of consistent, intensive study.'
      }]
    }, {
      cat: 'Certificate Recognition (Anerkennung)',
      items: [{
        q: 'What is Anerkennung?',
        a: 'The official recognition of your nursing qualification in Germany \u2014 required to practice.'
      }, {
        q: 'Will my certificate be recognized?',
        a: 'In most cases yes, sometimes with an adaptation course or exam. We guide the whole process.'
      }, {
        q: 'How long does recognition take?',
        a: 'Typically 2\u20134 months once documents are complete.'
      }]
    }, {
      cat: 'Visa & Immigration',
      items: [{
        q: 'What type of visa will I need?',
        a: 'Usually a recognition visa or skilled-worker visa. We advise based on your situation.'
      }, {
        q: 'Who handles the visa application?',
        a: 'We support and guide you through it, with your placement hospital.'
      }, {
        q: 'Can I bring my spouse and children?',
        a: 'Yes \u2014 via family reunification, typically 6\u201312 months after you arrive.'
      }]
    }, {
      cat: 'Life in Germany',
      items: [{
        q: 'Where in Germany will I be based?',
        a: 'Wherever your matched hospital is \u2014 we have partners in Frankfurt, Munich, Berlin, Hamburg, Cologne and Stuttgart.'
      }, {
        q: 'Is there an African community in Germany?',
        a: 'Yes \u2014 vibrant Nigerian and broader African communities exist in every major city.'
      }]
    }, {
      cat: 'Finances',
      items: [{
        q: 'How much will I earn?',
        a: '\u20AC2,500\u2013\u20AC4,000/month before tax, depending on experience and region.'
      }, {
        q: 'When will I start earning?',
        a: 'From your first month of employment after arrival.'
      }]
    }];
    const ql = q.trim().toLowerCase();
    const filtered = groups.map(g => ({
      ...g,
      items: ql ? g.items.filter(it => (it.q + it.a).toLowerCase().includes(ql)) : g.items
    })).filter(g => g.items.length);
    return React.createElement(React.Fragment, null, React.createElement(PageHero, {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      lead: 'Answers to the questions African nurses ask us most \u2014 visa, language, salary, family.'
    }), React.createElement('section', {
      className: 'section',
      style: {
        paddingTop: 24
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 820
      }
    }, React.createElement('div', {
      style: {
        position: 'relative',
        marginBottom: 36
      }
    }, React.createElement('span', {
      style: {
        position: 'absolute',
        left: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--slate-400)'
      }
    }, React.createElement(Icon, {
      name: 'search',
      size: 20
    })), React.createElement('input', {
      className: 'input',
      placeholder: 'Search FAQs\u2026',
      value: q,
      onChange: e => setQ(e.target.value),
      style: {
        paddingLeft: 46,
        height: 52,
        fontSize: 16
      }
    })), filtered.length === 0 && React.createElement('p', {
      className: 'muted',
      style: {
        textAlign: 'center'
      }
    }, 'No questions match \u201C' + q + '\u201D.'), filtered.map(g => React.createElement('div', {
      key: g.cat,
      style: {
        marginBottom: 32
      }
    }, React.createElement('h3', {
      style: {
        fontSize: 15,
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--gold-600)',
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        marginBottom: 14
      }
    }, g.cat), React.createElement(Accordion, {
      items: g.items
    }))), React.createElement('div', {
      className: 'card card-pad',
      style: {
        textAlign: 'center',
        background: 'var(--bg)',
        marginTop: 20
      }
    }, React.createElement('h3', {
      className: 'h3'
    }, 'Still have questions?'), React.createElement('p', {
      className: 'muted',
      style: {
        marginTop: 8
      }
    }, 'We\u2019re happy to answer personally.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        marginTop: 20,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'navy',
      href: 'https://wa.me/4915123456789'
    }, React.createElement(Icon, {
      name: 'chat',
      size: 18
    }), 'Chat on WhatsApp'), React.createElement(Button, {
      variant: 'ghost',
      onClick: () => navigate('contact')
    }, React.createElement(Icon, {
      name: 'mail',
      size: 18
    }), 'Send Us an Email'))))));
  }

  // ===================== CONTACT =====================
  function ContactPage() {
    const [sent, setSent] = useState(false);
    const cards = [{
      icon: 'chat',
      tone: 'green',
      t: 'WhatsApp',
      s: 'Fastest response \u2014 typically within 2 hours during business hours.',
      b: 'Open WhatsApp Chat',
      href: 'https://wa.me/4915123456789'
    }, {
      icon: 'mail',
      tone: 'navy',
      t: 'Email',
      s: 'hello@medglobal-ng.com \u2014 for formal inquiries or documents.',
      b: 'Send an Email',
      href: 'mailto:hello@medglobal-ng.com'
    }, {
      icon: 'calendar',
      tone: 'gold',
      t: 'Book a Call',
      s: 'Schedule a free 15-minute call with a relocation advisor.',
      b: 'Book a Call',
      href: '#'
    }];
    return React.createElement(React.Fragment, null, React.createElement(PageHero, {
      eyebrow: 'Contact',
      title: 'Let\u2019s talk about your move',
      lead: 'Reach us however is easiest for you \u2014 we usually reply the same day.'
    }), React.createElement('section', {
      style: {
        paddingBottom: 8
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      className: 'ntg-contact',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 22
      }
    }, cards.map(c => React.createElement('div', {
      key: c.t,
      className: 'card card-pad card-hover',
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, React.createElement(IconTile, {
      name: c.icon,
      tone: c.tone,
      size: 54
    }), React.createElement('h3', {
      className: 'h3'
    }, c.t), React.createElement('p', {
      className: 'muted',
      style: {
        fontSize: 14.5,
        flex: 1
      }
    }, c.s), React.createElement(Button, {
      variant: 'ghost',
      href: c.href,
      arrow: true
    }, c.b)))))), React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container ntg-2col',
      style: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: 48
      }
    }, React.createElement('div', {
      className: 'card card-pad',
      style: {
        padding: 'clamp(24px,4vw,38px)'
      }
    }, React.createElement('h3', {
      className: 'h3',
      style: {
        marginBottom: 22
      }
    }, 'Send us a message'), sent ? React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--green-600)',
        fontWeight: 600,
        padding: '20px 0'
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 22,
      stroke: 3
    }), 'Thanks! We\u2019ll be in touch shortly.') : React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, React.createElement('div', {
      className: 'ntg-form-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, React.createElement('input', {
      className: 'input',
      placeholder: 'Name'
    }), React.createElement('input', {
      className: 'input',
      placeholder: 'Email'
    })), React.createElement('input', {
      className: 'input',
      placeholder: 'Phone / WhatsApp number'
    }), React.createElement('select', {
      className: 'select',
      defaultValue: ''
    }, React.createElement('option', {
      value: '',
      disabled: true
    }, 'Subject\u2026'), ['General Inquiry', 'Application Status', 'Partnership', 'Media', 'Other'].map(o => React.createElement('option', {
      key: o
    }, o))), React.createElement('textarea', {
      className: 'textarea',
      placeholder: 'Your message'
    }), React.createElement(Button, {
      variant: 'primary',
      arrow: true,
      onClick: () => setSent(true)
    }, 'Send Message'))), React.createElement('div', null, React.createElement('div', {
      className: 'card card-pad',
      style: {
        marginBottom: 18
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
      }
    }, React.createElement(Icon, {
      name: 'clock',
      size: 20,
      color: 'var(--navy-700)'
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, 'Operating hours')), React.createElement('p', {
      className: 'muted',
      style: {
        fontSize: 15
      }
    }, 'Mon\u2013Fri, 9am\u20136pm WAT')), React.createElement('div', {
      className: 'card card-pad',
      style: {
        marginBottom: 18
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 20,
      color: 'var(--navy-700)'
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, 'Where we are')), React.createElement('p', {
      className: 'muted',
      style: {
        fontSize: 15
      }
    }, 'We operate remotely with team members in Lagos, Abuja, and Germany.')), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10
      }
    }, ['globe', 'chat', 'play', 'mail'].map(ic => React.createElement('a', {
      key: ic,
      href: '#',
      onClick: e => e.preventDefault(),
      style: {
        width: 46,
        height: 46,
        borderRadius: 12,
        border: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--navy-700)'
      }
    }, React.createElement(Icon, {
      name: ic,
      size: 20
    }))))))));
  }
  Object.assign(window, {
    AboutPage,
    TestimonialsPage,
    FaqPage,
    ContactPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/ntg-pages.jsx", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/ntg-ui.jsx
try { (() => {
// ntg-ui.jsx — shared building blocks. Exports to window.
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const Icon = window.Icon;

  // Button — variant: primary | navy | ghost; size: md | lg
  function Button({
    children,
    variant = 'primary',
    size = 'md',
    onDark,
    arrow,
    href,
    onClick,
    type,
    block,
    style
  }) {
    const cls = ['btn', `btn-${variant}`, size === 'lg' ? 'btn-lg' : '', onDark ? 'on-dark' : '', block ? 'btn-block' : ''].join(' ').trim();
    const inner = [children, arrow && React.createElement(Icon, {
      key: 'a',
      name: 'arrow',
      size: size === 'lg' ? 19 : 17
    })];
    if (href) return React.createElement('a', {
      href,
      onClick,
      className: cls,
      style
    }, inner);
    return React.createElement('button', {
      type: type || 'button',
      onClick,
      className: cls,
      style
    }, inner);
  }

  // SectionHead — eyebrow + title + optional lead, centered or left
  function SectionHead({
    eyebrow,
    title,
    lead,
    center,
    onDark,
    max = 680,
    style
  }) {
    return React.createElement('div', {
      style: {
        textAlign: center ? 'center' : 'left',
        maxWidth: center ? max : 760,
        margin: center ? '0 auto' : 0,
        marginBottom: 14,
        ...style
      }
    }, eyebrow && React.createElement('div', {
      className: 'eyebrow' + (onDark ? ' on-dark' : ''),
      style: {
        marginBottom: 14
      }
    }, React.createElement(Icon, {
      name: 'sparkle',
      size: 15
    }), eyebrow), React.createElement('h2', {
      className: 'h2',
      style: onDark ? {
        color: '#fff'
      } : null
    }, title), lead && React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 16,
        ...(onDark ? {
          color: 'rgba(255,255,255,0.8)'
        } : null)
      }
    }, lead));
  }

  // Reveal — fade-up when scrolled into view
  function Reveal({
    children,
    delay = 0,
    style,
    as = 'div'
  }) {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            setVis(true);
            io.disconnect();
          }
        });
      }, {
        threshold: 0.12
      });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    return React.createElement(as, {
      ref,
      className: 'fade-up' + (vis ? ' in' : ''),
      style: {
        transitionDelay: delay + 'ms',
        ...style
      }
    }, children);
  }

  // Count-up number when in view
  function CountUp({
    to,
    prefix = '',
    suffix = '',
    dur = 1400
  }) {
    const ref = useRef(null);
    const [val, setVal] = useState(0);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(es => {
        if (es[0].isIntersecting) {
          io.disconnect();
          const start = performance.now();
          const tick = now => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }, {
        threshold: 0.4
      });
      io.observe(el);
      return () => io.disconnect();
    }, [to]);
    return React.createElement('span', {
      ref
    }, prefix + val.toLocaleString() + suffix);
  }

  // IconTile — rounded squircle with icon
  function IconTile({
    name,
    tone = 'navy',
    size = 52
  }) {
    const tones = {
      navy: {
        bg: 'var(--navy-050)',
        fg: 'var(--navy-700)'
      },
      gold: {
        bg: 'var(--gold-100)',
        fg: 'var(--gold-600)'
      },
      green: {
        bg: 'var(--green-100)',
        fg: 'var(--green-600)'
      }
    };
    const t = tones[tone] || tones.navy;
    return React.createElement('div', {
      style: {
        width: size,
        height: size,
        borderRadius: 14,
        background: t.bg,
        color: t.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, React.createElement(Icon, {
      name,
      size: Math.round(size * 0.46),
      stroke: 2
    }));
  }

  // Chip — trust badge with check
  function Chip({
    children,
    icon = 'check'
  }) {
    return React.createElement('span', {
      className: 'chip'
    }, React.createElement(Icon, {
      name: icon,
      size: 16,
      stroke: 2.4
    }), children);
  }

  // Accordion list
  function Accordion({
    items,
    defaultOpen = -1
  }) {
    const [open, setOpen] = useState(defaultOpen);
    return React.createElement('div', {
      className: 'card',
      style: {
        overflow: 'hidden'
      }
    }, items.map((it, i) => React.createElement('div', {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--line)' : 'none'
      }
    }, React.createElement('button', {
      onClick: () => setOpen(open === i ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 24px',
        background: 'none',
        border: 'none',
        textAlign: 'left'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--navy-800)'
      }
    }, it.q), React.createElement('span', {
      style: {
        transform: open === i ? 'rotate(180deg)' : 'none',
        transition: 'transform .2s ease',
        color: 'var(--slate-400)',
        flex: '0 0 auto'
      }
    }, React.createElement(Icon, {
      name: 'chevron',
      size: 20
    }))), React.createElement('div', {
      style: {
        maxHeight: open === i ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height .3s ease'
      }
    }, React.createElement('p', {
      className: 'muted',
      style: {
        padding: '0 24px 22px',
        fontSize: 15.5,
        lineHeight: 1.6
      }
    }, it.a)))));
  }
  Object.assign(window, {
    Button,
    SectionHead,
    Reveal,
    CountUp,
    IconTile,
    Chip,
    Accordion
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/ntg-ui.jsx", error: String((e && e.message) || e) }); }

// deploy/nurses-to-germany/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/nurses-to-germany/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// nurses-to-germany/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/image-slot.js", error: String((e && e.message) || e) }); }

// nurses-to-germany/ntg-app.jsx
try { (() => {
// ntg-app.jsx — router shell + Tweaks panel. Mounts the whole site.
(function () {
  const {
    useState,
    useEffect
  } = React;
  const {
    Nav,
    Footer,
    FloatingBits,
    HomePage,
    ApplyPage,
    AboutPage,
    TestimonialsPage,
    FaqPage,
    ContactPage
  } = window;
  const {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakColor
  } = window;
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "heroStyle": "split",
    "accent": "#f5a623"
  } /*EDITMODE-END*/;
  const ACCENTS = {
    '#f5a623': {
      hover: '#d98e12',
      tint: '#fdf1da',
      on: '#2a1a02'
    },
    // gold (default)
    '#27ae60': {
      hover: '#1f9254',
      tint: '#e4f6ec',
      on: '#06210f'
    },
    // green
    '#e8743b': {
      hover: '#cf5d27',
      tint: '#fdeae0',
      on: '#2a1402'
    },
    // warm amber-orange
    '#1d6fd6': {
      hover: '#175bb0',
      tint: '#e2edfb',
      on: '#ffffff'
    } // bright blue
  };
  function pageFromHash() {
    const h = (location.hash || '').replace('#/', '').replace('#', '').trim();
    return ['home', 'about', 'testimonials', 'faq', 'contact', 'apply'].includes(h) ? h : 'home';
  }
  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const [page, setPage] = useState(pageFromHash());
    const navigate = p => {
      setPage(p);
      history.replaceState(null, '', '#/' + p);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    useEffect(() => {
      const onHash = () => setPage(pageFromHash());
      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, []);

    // apply accent theme to :root
    useEffect(() => {
      const a = ACCENTS[t.accent] || ACCENTS['#f5a623'];
      const r = document.documentElement.style;
      r.setProperty('--accent', t.accent);
      r.setProperty('--accent-hover', a.hover);
      r.setProperty('--accent-tint', a.tint);
      r.setProperty('--on-accent', a.on);
    }, [t.accent]);
    let view;
    if (page === 'apply') view = React.createElement(ApplyPage, null);else if (page === 'about') view = React.createElement(AboutPage, {
      navigate
    });else if (page === 'testimonials') view = React.createElement(TestimonialsPage, {
      navigate
    });else if (page === 'faq') view = React.createElement(FaqPage, {
      navigate
    });else if (page === 'contact') view = React.createElement(ContactPage, {
      navigate
    });else view = React.createElement(HomePage, {
      heroStyle: t.heroStyle,
      navigate
    });
    return React.createElement(React.Fragment, null, React.createElement(Nav, {
      page,
      navigate
    }), React.createElement('main', {
      key: page
    }, view), React.createElement(Footer, {
      navigate
    }), React.createElement(FloatingBits, {
      navigate
    }), React.createElement(TweaksPanel, null, React.createElement(TweakSection, {
      label: 'Home hero direction'
    }), React.createElement(TweakRadio, {
      label: 'Layout',
      value: t.heroStyle,
      options: ['split', 'fullbleed', 'editorial'],
      onChange: v => {
        setTweak('heroStyle', v);
        if (page !== 'home') navigate('home');
      }
    }), React.createElement(TweakSection, {
      label: 'Brand accent'
    }), React.createElement(TweakColor, {
      label: 'Accent',
      value: t.accent,
      options: Object.keys(ACCENTS),
      onChange: v => setTweak('accent', v)
    })));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/ntg-app.jsx", error: String((e && e.message) || e) }); }

// nurses-to-germany/ntg-apply.jsx
try { (() => {
// ntg-apply.jsx — Application hub: qualifying toggle → Form A (nurse) / Form B (Ausbildung).
(function () {
  const {
    useState
  } = React;
  const Icon = window.Icon;
  const {
    Button,
    SectionHead,
    IconTile
  } = window;

  // ---- field primitives ----
  function Field({
    label,
    req,
    help,
    error,
    children,
    full
  }) {
    return React.createElement('div', {
      className: 'field',
      style: full ? {
        gridColumn: '1 / -1'
      } : null
    }, label && React.createElement('label', {
      className: 'label'
    }, label, req && React.createElement('span', {
      className: 'req'
    }, ' *')), children, error ? React.createElement('span', {
      className: 'err-text'
    }, error) : help && React.createElement('span', {
      className: 'help'
    }, help));
  }
  const T = p => React.createElement('input', {
    className: 'input' + (p.error ? ' err' : ''),
    type: p.type || 'text',
    placeholder: p.placeholder,
    value: p.value || '',
    onChange: e => p.onChange(e.target.value)
  });
  const S = p => React.createElement('select', {
    className: 'select' + (p.error ? ' err' : ''),
    value: p.value || '',
    onChange: e => p.onChange(e.target.value)
  }, React.createElement('option', {
    value: '',
    disabled: true
  }, p.placeholder || 'Select\u2026'), p.options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o)));
  const TA = p => React.createElement('textarea', {
    className: 'textarea' + (p.error ? ' err' : ''),
    placeholder: p.placeholder,
    value: p.value || '',
    onChange: e => p.onChange(e.target.value)
  });
  function FileField({
    label,
    req,
    value,
    onChange,
    optional
  }) {
    const id = 'f-' + label.replace(/\W+/g, '');
    return React.createElement('div', {
      className: 'field'
    }, React.createElement('label', {
      className: 'label'
    }, label, req && React.createElement('span', {
      className: 'req'
    }, ' *'), optional && React.createElement('span', {
      style: {
        color: 'var(--slate-400)',
        fontWeight: 400
      }
    }, ' (optional)')), React.createElement('label', {
      htmlFor: id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        border: '1.5px dashed var(--line-strong)',
        borderRadius: 'var(--r-sm)',
        cursor: 'pointer',
        background: value ? 'var(--green-100)' : 'var(--navy-050)'
      }
    }, React.createElement('span', {
      style: {
        color: value ? 'var(--green-600)' : 'var(--navy-600)'
      }
    }, React.createElement(Icon, {
      name: value ? 'check' : 'upload',
      size: 20
    })), React.createElement('span', {
      style: {
        fontSize: 14,
        color: value ? 'var(--green-600)' : 'var(--slate-600)',
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, value || 'PDF or JPG \u2014 max 5MB'), React.createElement('input', {
      id,
      type: 'file',
      accept: '.pdf,.jpg,.jpeg,.png',
      style: {
        display: 'none'
      },
      onChange: e => onChange(e.target.files[0] ? e.target.files[0].name : '')
    })));
  }
  function Group({
    title,
    children,
    cols = 2
  }) {
    return React.createElement('div', {
      style: {
        marginBottom: 12
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--gold-700,var(--gold-600))',
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 9
      }
    }, React.createElement('span', {
      style: {
        width: 22,
        height: 2,
        background: 'var(--gold-500)',
        borderRadius: 2
      }
    }), title), React.createElement('div', {
      className: 'ntg-form-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: cols === 2 ? '1fr 1fr' : '1fr',
        gap: 18
      }
    }, children));
  }
  function Consent({
    checked,
    onChange,
    error
  }) {
    return React.createElement('label', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: 16,
        borderRadius: 'var(--r-sm)',
        background: 'var(--navy-050)',
        border: '1px solid ' + (error ? '#dc4a4a' : 'var(--line)'),
        cursor: 'pointer'
      }
    }, React.createElement('input', {
      type: 'checkbox',
      checked,
      onChange: e => onChange(e.target.checked),
      style: {
        marginTop: 3,
        width: 18,
        height: 18,
        accentColor: 'var(--navy-700)',
        flex: '0 0 auto'
      }
    }), React.createElement('span', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-700)',
        lineHeight: 1.5
      }
    }, 'I confirm that all information provided is accurate, and I consent to Med Global storing and processing my data for this application. I understand this is not a job guarantee.'));
  }
  const LANG = ['None \u2014 I have not started', 'A1 \u2014 Beginner', 'A2 \u2014 Elementary', 'B1 \u2014 Intermediate', 'B2 \u2014 Upper Intermediate', 'C1+ \u2014 Advanced'];
  const AVAIL = ['Within 6 months', '6\u201312 months', '12\u201318 months', '18+ months / Still planning'];

  // ---- Success screen ----
  function Success({
    title,
    body,
    onReset
  }) {
    return React.createElement('div', {
      className: 'card card-pad',
      style: {
        textAlign: 'center',
        padding: 'clamp(40px,6vw,64px)',
        maxWidth: 620,
        margin: '0 auto'
      }
    }, React.createElement('div', {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--green-100)',
        color: 'var(--green-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px'
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 40,
      stroke: 3
    })), React.createElement('h2', {
      className: 'h2'
    }, title), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 14
      }
    }, body), React.createElement('div', {
      style: {
        marginTop: 28
      }
    }, React.createElement(Button, {
      variant: 'ghost',
      onClick: onReset
    }, 'Submit another application')));
  }

  // ---- Form A: Registered Nurse ----
  function FormA({
    onDone
  }) {
    const [f, setF] = useState({});
    const [errs, setErrs] = useState({});
    const set = k => v => setF(s => ({
      ...s,
      [k]: v
    }));
    const submit = () => {
      const e = {};
      ['fullName', 'dob', 'nationality', 'residence', 'phone', 'email', 'qual', 'specialty', 'gradYear', 'experience', 'license', 'germanLevel', 'availability'].forEach(k => {
        if (!f[k]) e[k] = 'Required';
      });
      if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email';
      if (!f.docCert) e.docCert = 'Required';
      if (!f.docCv) e.docCv = 'Required';
      if (!f.docPassport) e.docPassport = 'Required';
      if (!f.consent) e.consent = 'Please confirm to continue';
      setErrs(e);
      if (Object.keys(e).length === 0) onDone();else {
        const first = document.querySelector('.err, [data-err]');
        if (first) first.scrollIntoView ? null : null;
      }
    };
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 26
      }
    }, React.createElement(Group, {
      title: 'Personal information'
    }, React.createElement(Field, {
      label: 'Full legal name',
      req: true,
      error: errs.fullName
    }, React.createElement(T, {
      value: f.fullName,
      onChange: set('fullName'),
      error: errs.fullName,
      placeholder: 'As on your passport'
    })), React.createElement(Field, {
      label: 'Date of birth',
      req: true,
      error: errs.dob
    }, React.createElement(T, {
      type: 'date',
      value: f.dob,
      onChange: set('dob'),
      error: errs.dob
    })), React.createElement(Field, {
      label: 'Nationality',
      req: true,
      error: errs.nationality
    }, React.createElement(T, {
      value: f.nationality,
      onChange: set('nationality'),
      error: errs.nationality,
      placeholder: 'e.g. Nigerian'
    })), React.createElement(Field, {
      label: 'Country of residence',
      req: true,
      error: errs.residence
    }, React.createElement(T, {
      value: f.residence,
      onChange: set('residence'),
      error: errs.residence,
      placeholder: 'e.g. Nigeria'
    })), React.createElement(Field, {
      label: 'Phone (with country code)',
      req: true,
      error: errs.phone
    }, React.createElement(T, {
      value: f.phone,
      onChange: set('phone'),
      error: errs.phone,
      placeholder: '+234 \u2026'
    })), React.createElement(Field, {
      label: 'Email address',
      req: true,
      error: errs.email
    }, React.createElement(T, {
      type: 'email',
      value: f.email,
      onChange: set('email'),
      error: errs.email,
      placeholder: 'you@example.com'
    }))), React.createElement(Group, {
      title: 'Professional information'
    }, React.createElement(Field, {
      label: 'Qualification type',
      req: true,
      error: errs.qual
    }, React.createElement(S, {
      value: f.qual,
      onChange: set('qual'),
      error: errs.qual,
      options: ['RN', 'BSN', 'MSN', 'Midwife', 'Other']
    })), React.createElement(Field, {
      label: 'Specialty',
      req: true,
      error: errs.specialty
    }, React.createElement(S, {
      value: f.specialty,
      onChange: set('specialty'),
      error: errs.specialty,
      options: ['General / Adult', 'Pediatric', 'ICU / Critical Care', 'Theatre', 'Psychiatric', 'Community', 'Other']
    })), React.createElement(Field, {
      label: 'Year of graduation',
      req: true,
      error: errs.gradYear
    }, React.createElement(T, {
      type: 'number',
      value: f.gradYear,
      onChange: set('gradYear'),
      error: errs.gradYear,
      placeholder: 'e.g. 2019'
    })), React.createElement(Field, {
      label: 'Years of experience',
      req: true,
      error: errs.experience
    }, React.createElement(T, {
      type: 'number',
      value: f.experience,
      onChange: set('experience'),
      error: errs.experience,
      placeholder: 'e.g. 3'
    })), React.createElement(Field, {
      label: 'License number (NMCN or equivalent)',
      req: true,
      error: errs.license
    }, React.createElement(T, {
      value: f.license,
      onChange: set('license'),
      error: errs.license
    })), React.createElement(Field, {
      label: 'Current employer type'
    }, React.createElement(S, {
      value: f.employer,
      onChange: set('employer'),
      options: ['Government hospital', 'Private hospital', 'Clinic', 'NGO', 'Not currently working']
    }))), React.createElement(Group, {
      title: 'Language & readiness'
    }, React.createElement(Field, {
      label: 'Current German level',
      req: true,
      error: errs.germanLevel
    }, React.createElement(S, {
      value: f.germanLevel,
      onChange: set('germanLevel'),
      error: errs.germanLevel,
      options: LANG
    })), React.createElement(Field, {
      label: 'Enrolled in a German course?'
    }, React.createElement(S, {
      value: f.enrolled,
      onChange: set('enrolled'),
      options: ['Yes', 'No']
    })), React.createElement(Field, {
      label: 'When can you relocate?',
      req: true,
      error: errs.availability,
      full: true
    }, React.createElement(S, {
      value: f.availability,
      onChange: set('availability'),
      error: errs.availability,
      options: AVAIL
    }))), React.createElement(Group, {
      title: 'Document uploads'
    }, React.createElement(FileField, {
      label: 'Nursing certificate / diploma',
      req: true,
      value: f.docCert,
      onChange: set('docCert')
    }), React.createElement(FileField, {
      label: 'Professional license',
      req: true,
      value: f.docLicense,
      onChange: set('docLicense')
    }), React.createElement(FileField, {
      label: 'CV / Resume',
      req: true,
      value: f.docCv,
      onChange: set('docCv')
    }), React.createElement(FileField, {
      label: 'Passport (bio data page)',
      req: true,
      value: f.docPassport,
      onChange: set('docPassport')
    }), React.createElement(FileField, {
      label: 'German language certificate',
      optional: true,
      value: f.docGerman,
      onChange: set('docGerman')
    })), React.createElement(Group, {
      title: 'Almost done',
      cols: 1
    }, React.createElement(Field, {
      label: 'How did you hear about us?'
    }, React.createElement(S, {
      value: f.source,
      onChange: set('source'),
      options: ['Facebook / Instagram', 'WhatsApp group', 'Referred by a nurse/friend', 'Google Search', 'YouTube', 'Other']
    })), React.createElement(Field, {
      label: 'Any questions or additional information'
    }, React.createElement(TA, {
      value: f.notes,
      onChange: set('notes'),
      placeholder: 'Optional'
    }))), React.createElement(Consent, {
      checked: f.consent,
      onChange: set('consent'),
      error: errs.consent
    }), errs.consent && React.createElement('span', {
      className: 'err-text'
    }, errs.consent), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      block: true,
      arrow: true,
      onClick: submit
    }, 'Submit My Application'));
  }

  // ---- Form B: Ausbildung ----
  function FormB({
    onDone
  }) {
    const [f, setF] = useState({});
    const [errs, setErrs] = useState({});
    const set = k => v => setF(s => ({
      ...s,
      [k]: v
    }));
    const submit = () => {
      const e = {};
      ['fullName', 'dob', 'nationality', 'phone', 'email', 'education', 'germanLevel', 'role'].forEach(k => {
        if (!f[k]) e[k] = 'Required';
      });
      if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email';
      if (!f.motivation || f.motivation.length < 100) e.motivation = 'Please write at least 100 characters (' + (f.motivation ? f.motivation.length : 0) + '/100)';
      if (!f.docSchool) e.docSchool = 'Required';
      if (!f.docPassport) e.docPassport = 'Required';
      if (!f.consent) e.consent = 'Please confirm to continue';
      setErrs(e);
      if (Object.keys(e).length === 0) onDone();
    };
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 26
      }
    }, React.createElement(Group, {
      title: 'Personal information'
    }, React.createElement(Field, {
      label: 'Full legal name',
      req: true,
      error: errs.fullName
    }, React.createElement(T, {
      value: f.fullName,
      onChange: set('fullName'),
      error: errs.fullName
    })), React.createElement(Field, {
      label: 'Date of birth',
      req: true,
      error: errs.dob
    }, React.createElement(T, {
      type: 'date',
      value: f.dob,
      onChange: set('dob'),
      error: errs.dob
    })), React.createElement(Field, {
      label: 'Nationality',
      req: true,
      error: errs.nationality
    }, React.createElement(T, {
      value: f.nationality,
      onChange: set('nationality'),
      error: errs.nationality
    })), React.createElement(Field, {
      label: 'Phone (with country code)',
      req: true,
      error: errs.phone
    }, React.createElement(T, {
      value: f.phone,
      onChange: set('phone'),
      error: errs.phone,
      placeholder: '+234 \u2026'
    })), React.createElement(Field, {
      label: 'Email address',
      req: true,
      error: errs.email,
      full: true
    }, React.createElement(T, {
      type: 'email',
      value: f.email,
      onChange: set('email'),
      error: errs.email,
      placeholder: 'you@example.com'
    }))), React.createElement(Group, {
      title: 'Background'
    }, React.createElement(Field, {
      label: 'Highest education completed',
      req: true,
      error: errs.education
    }, React.createElement(S, {
      value: f.education,
      onChange: set('education'),
      error: errs.education,
      options: ['Secondary school (WAEC/NECO)', 'OND / HND', 'Bachelor\u2019s degree', 'Other post-secondary']
    })), React.createElement(Field, {
      label: 'Healthcare / caregiving experience?'
    }, React.createElement(S, {
      value: f.care,
      onChange: set('care'),
      options: ['Yes', 'No', 'Some volunteer work']
    }))), React.createElement(Group, {
      title: 'Language assessment'
    }, React.createElement(Field, {
      label: 'Current German level',
      req: true,
      error: errs.germanLevel
    }, React.createElement(S, {
      value: f.germanLevel,
      onChange: set('germanLevel'),
      error: errs.germanLevel,
      options: LANG
    })), React.createElement(Field, {
      label: 'Willing to do 6\u201312 months intensive German?'
    }, React.createElement(S, {
      value: f.willing,
      onChange: set('willing'),
      options: ['Yes', 'No', 'Need more info']
    }))), React.createElement(Group, {
      title: 'Motivation',
      cols: 1
    }, React.createElement(Field, {
      label: 'Why do you want to do the Ausbildung program?',
      req: true,
      error: errs.motivation,
      help: '100\u2013300 words.'
    }, React.createElement(TA, {
      value: f.motivation,
      onChange: set('motivation'),
      error: errs.motivation,
      placeholder: 'Tell us your story\u2026'
    })), React.createElement(Field, {
      label: 'Which role interests you most?',
      req: true,
      error: errs.role
    }, React.createElement(S, {
      value: f.role,
      onChange: set('role'),
      error: errs.role,
      options: ['Nursing', 'Elderly Care', 'Physiotherapy', 'Other']
    }))), React.createElement(Group, {
      title: 'Document uploads'
    }, React.createElement(FileField, {
      label: 'School certificate (WAEC/NECO/degree)',
      req: true,
      value: f.docSchool,
      onChange: set('docSchool')
    }), React.createElement(FileField, {
      label: 'International passport',
      req: true,
      value: f.docPassport,
      onChange: set('docPassport')
    }), React.createElement(FileField, {
      label: 'German certificate',
      optional: true,
      value: f.docGerman,
      onChange: set('docGerman')
    })), React.createElement(Consent, {
      checked: f.consent,
      onChange: set('consent'),
      error: errs.consent
    }), errs.consent && React.createElement('span', {
      className: 'err-text'
    }, errs.consent), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      block: true,
      arrow: true,
      onClick: submit
    }, 'Submit My Interest'));
  }
  function PathCard({
    active,
    onClick,
    icon,
    title,
    sub
  }) {
    return React.createElement('button', {
      onClick,
      style: {
        textAlign: 'left',
        padding: 24,
        borderRadius: 'var(--r-lg)',
        cursor: 'pointer',
        border: '2px solid ' + (active ? 'var(--navy-700)' : 'var(--line)'),
        background: active ? 'var(--navy-050)' : '#fff',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        transition: 'all .15s ease',
        width: '100%'
      }
    }, React.createElement(IconTile, {
      name: icon,
      tone: active ? 'navy' : 'navy',
      size: 52
    }), React.createElement('div', {
      style: {
        flex: 1
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--navy-800)'
      }
    }, title), React.createElement('div', {
      style: {
        fontSize: 14,
        color: 'var(--slate-600)',
        marginTop: 3
      }
    }, sub)), React.createElement('span', {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        border: '2px solid ' + (active ? 'var(--navy-700)' : 'var(--line-strong)'),
        background: active ? 'var(--navy-700)' : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, active && React.createElement(Icon, {
      name: 'check',
      size: 14,
      stroke: 3,
      color: '#fff'
    })));
  }
  function ReferralBlock() {
    const [sent, setSent] = useState(false);
    const [v, setV] = useState({});
    const set = k => e => setV(s => ({
      ...s,
      [k]: e.target.value
    }));
    return React.createElement('div', {
      className: 'card card-pad',
      style: {
        background: 'var(--bg)',
        marginTop: 40
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8
      }
    }, React.createElement(IconTile, {
      name: 'heart',
      tone: 'gold',
      size: 44
    }), React.createElement('h3', {
      className: 'h3'
    }, 'Know a nurse who should apply?')), React.createElement('p', {
      className: 'muted',
      style: {
        marginBottom: 20
      }
    }, 'Refer a colleague and earn a reward when they get placed.'), sent ? React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--green-600)',
        fontWeight: 600
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 20,
      stroke: 3
    }), 'Referral sent \u2014 thank you!') : React.createElement('div', null, React.createElement('div', {
      className: 'ntg-form-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, React.createElement('input', {
      className: 'input',
      placeholder: 'Your name',
      onChange: set('n')
    }), React.createElement('input', {
      className: 'input',
      placeholder: 'Your email',
      onChange: set('e')
    }), React.createElement('input', {
      className: 'input',
      placeholder: 'Nurse\u2019s name',
      onChange: set('nn')
    }), React.createElement('input', {
      className: 'input',
      placeholder: 'Nurse\u2019s WhatsApp number',
      onChange: set('w')
    })), React.createElement(Button, {
      variant: 'navy',
      style: {
        marginTop: 16
      },
      onClick: () => setSent(true)
    }, 'Send Referral')));
  }
  function ApplyPage() {
    const [path, setPath] = useState(null);
    const [doneA, setDoneA] = useState(false);
    const [doneB, setDoneB] = useState(false);
    const reset = () => {
      setDoneA(false);
      setDoneB(false);
      setPath(null);
      window.scrollTo({
        top: 0
      });
    };
    return React.createElement('div', null, React.createElement('section', {
      style: {
        background: 'linear-gradient(180deg,var(--navy-050),var(--surface))',
        paddingTop: 56,
        paddingBottom: 24
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 820,
        textAlign: 'center'
      }
    }, React.createElement('div', {
      className: 'tag',
      style: {
        marginBottom: 18
      }
    }, React.createElement(Icon, {
      name: 'sparkle',
      size: 14
    }), 'Free \u00B7 Confidential \u00B7 No hidden fees'), React.createElement('h1', {
      className: 'h1'
    }, 'Start your application'), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 16
      }
    }, 'It\u2019s free and takes about 10 minutes. Tell us about yourself and we\u2019ll guide you to the right path.'))), React.createElement('section', {
      className: 'section',
      style: {
        paddingTop: 32
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 820
      }
    }, doneA || doneB ? React.createElement(Success, doneA ? {
      title: 'Application received! \uD83C\uDF89',
      body: 'Check your email for next steps. Our team will be in touch within 3\u20135 business days.',
      onReset: reset
    } : {
      title: 'Thank you!',
      body: 'We\u2019ve received your details and will send you our Ausbildung information pack shortly.',
      onReset: reset
    }) : React.createElement(React.Fragment, null, React.createElement('div', {
      style: {
        marginBottom: 30
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 19,
        color: 'var(--navy-800)',
        marginBottom: 16
      }
    }, 'Are you a qualified / trained nurse?'), React.createElement('div', {
      className: 'ntg-path',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, React.createElement(PathCard, {
      active: path === 'nurse',
      onClick: () => setPath('nurse'),
      icon: 'shieldCheck',
      title: 'Yes, I am a registered nurse',
      sub: 'Direct placement path'
    }), React.createElement(PathCard, {
      active: path === 'ausbildung',
      onClick: () => setPath('ausbildung'),
      icon: 'award',
      title: 'No \u2014 interested in training',
      sub: 'Ausbildung path'
    }))), path === 'nurse' && React.createElement('div', {
      className: 'card card-pad',
      style: {
        padding: 'clamp(22px,4vw,38px)'
      }
    }, React.createElement(FormA, {
      onDone: () => {
        setDoneA(true);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    })), path === 'ausbildung' && React.createElement('div', {
      className: 'card card-pad',
      style: {
        padding: 'clamp(22px,4vw,38px)'
      }
    }, React.createElement(FormB, {
      onDone: () => {
        setDoneB(true);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    })), !path && React.createElement('div', {
      style: {
        textAlign: 'center',
        padding: '40px 0',
        color: 'var(--slate-400)'
      }
    }, 'Choose a path above to begin.'), React.createElement(ReferralBlock, null)))));
  }
  window.ApplyPage = ApplyPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/ntg-apply.jsx", error: String((e && e.message) || e) }); }

// nurses-to-germany/ntg-chrome.jsx
try { (() => {
// ntg-chrome.jsx — global Nav, Footer, WhatsApp bubble, mobile sticky CTA.
(function () {
  const {
    useState,
    useEffect
  } = React;
  const Icon = window.Icon;
  const {
    Button
  } = window;
  const WA = 'https://wa.me/4915123456789';
  const NAV = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About the Program'
  }, {
    id: 'testimonials',
    label: 'Testimonials'
  }, {
    id: 'faq',
    label: 'FAQ'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  function Logo({
    onDark,
    onClick
  }) {
    return React.createElement('a', {
      href: '#',
      onClick,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, React.createElement('img', {
      src: 'nurses-to-germany/assets/med-global-logo.jpeg',
      alt: 'Med Global',
      style: {
        width: 40,
        height: 40,
        borderRadius: 9,
        objectFit: 'cover'
      }
    }), React.createElement('span', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.05
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 17,
        color: onDark ? '#fff' : 'var(--navy-800)',
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap'
      }
    }, 'Nurses ', React.createElement('span', {
      style: {
        color: 'var(--gold-500)'
      }
    }, 'to'), ' Germany'), React.createElement('span', {
      style: {
        fontSize: 10.5,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: onDark ? 'rgba(255,255,255,0.6)' : 'var(--slate-400)'
      }
    }, 'by Med Global')));
  }
  function Nav({
    page,
    navigate
  }) {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 12);
      window.addEventListener('scroll', onScroll);
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(() => {
      setOpenMenu(false);
    }, [page]);
    const go = id => e => {
      e.preventDefault();
      navigate(id);
    };
    return React.createElement(React.Fragment, null, React.createElement('header', {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.0)',
        backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background .25s ease, border-color .25s ease'
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        height: 'var(--nav-h)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20
      }
    }, React.createElement(Logo, {
      onClick: go('home')
    }), React.createElement('nav', {
      className: 'ntg-desktop-nav',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, NAV.map(n => React.createElement('a', {
      key: n.id,
      href: '#',
      onClick: go(n.id),
      style: {
        fontSize: 15,
        fontWeight: 600,
        fontFamily: 'var(--font-head)',
        padding: '9px 14px',
        borderRadius: 'var(--r-pill)',
        color: page === n.id ? 'var(--navy-800)' : 'var(--slate-600)',
        background: page === n.id ? 'var(--navy-050)' : 'transparent'
      }
    }, n.label))), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement('div', {
      className: 'ntg-desktop-nav'
    }, React.createElement(Button, {
      variant: 'primary',
      onClick: go('apply')
    }, 'Apply Now')), React.createElement('button', {
      className: 'ntg-burger',
      onClick: () => setOpenMenu(!openMenu),
      'aria-label': 'Menu',
      style: {
        display: 'none',
        background: 'none',
        border: '1px solid var(--line)',
        borderRadius: 10,
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--navy-800)'
      }
    }, React.createElement(Icon, {
      name: openMenu ? 'close' : 'menu',
      size: 24
    })))),
    // mobile drawer
    openMenu && React.createElement('div', {
      style: {
        borderTop: '1px solid var(--line)',
        background: '#fff',
        padding: '12px 24px 20px'
      }
    }, NAV.map(n => React.createElement('a', {
      key: n.id,
      href: '#',
      onClick: go(n.id),
      style: {
        display: 'block',
        padding: '13px 8px',
        fontSize: 17,
        fontWeight: 600,
        fontFamily: 'var(--font-head)',
        color: page === n.id ? 'var(--navy-800)' : 'var(--slate-600)',
        borderBottom: '1px solid var(--line)'
      }
    }, n.label)), React.createElement(Button, {
      variant: 'primary',
      block: true,
      style: {
        marginTop: 16
      },
      onClick: go('apply')
    }, 'Apply Now'))));
  }
  function Footer({
    navigate
  }) {
    const go = id => e => {
      e.preventDefault();
      navigate(id);
    };
    const col = (title, links) => React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 14,
        color: '#fff',
        marginBottom: 16,
        letterSpacing: '0.02em'
      }
    }, title), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 11
      }
    }, links.map((l, i) => React.createElement('a', {
      key: i,
      href: '#',
      onClick: l.go ? go(l.go) : e => e.preventDefault(),
      style: {
        fontSize: 14.5,
        color: 'rgba(255,255,255,0.62)'
      }
    }, l.label))));
    return React.createElement('footer', {
      className: 'dark-section',
      style: {
        paddingTop: 64
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      className: 'ntg-footer-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr',
        gap: 40,
        paddingBottom: 48
      }
    }, React.createElement('div', null, React.createElement(Logo, {
      onDark: true,
      onClick: go('home')
    }), React.createElement('p', {
      style: {
        marginTop: 18,
        color: 'rgba(255,255,255,0.7)',
        fontSize: 15,
        maxWidth: 300,
        lineHeight: 1.6
      }
    }, 'Your nursing career. Germany\u2019s future. We relocate qualified African nurses to German hospitals \u2014 with full support from language to landing.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 22
      }
    }, ['globe', 'chat', 'mail', 'play'].map(ic => React.createElement('a', {
      key: ic,
      href: '#',
      onClick: e => e.preventDefault(),
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }
    }, React.createElement(Icon, {
      name: ic,
      size: 18
    }))))), col('Program', [{
      label: 'About the Program',
      go: 'about'
    }, {
      label: 'How it works',
      go: 'about'
    }, {
      label: 'Eligibility',
      go: 'about'
    }, {
      label: 'Testimonials',
      go: 'testimonials'
    }]), col('Support', [{
      label: 'FAQ',
      go: 'faq'
    }, {
      label: 'Contact',
      go: 'contact'
    }, {
      label: 'Apply Now',
      go: 'apply'
    }, {
      label: 'Privacy Policy'
    }, {
      label: 'Terms'
    }]), React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 14,
        color: '#fff',
        marginBottom: 16
      }
    }, 'Join 2,000+ nurses'), React.createElement('p', {
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.62)',
        marginBottom: 14
      }
    }, 'Monthly stories, tips & program updates.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8
      }
    }, React.createElement('input', {
      className: 'input',
      placeholder: 'Your email',
      style: {
        background: 'rgba(255,255,255,0.08)',
        borderColor: 'rgba(255,255,255,0.2)',
        color: '#fff'
      }
    }), React.createElement(Button, {
      variant: 'primary'
    }, React.createElement(Icon, {
      name: 'arrow',
      size: 18
    }))))), React.createElement('div', {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.14)',
        padding: '22px 0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)'
      }
    }, '\u00A9 2026 Med Global Deutschland. All rights reserved.'), React.createElement('span', {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)'
      }
    }, 'Compliant with the German Anerkennungsgesetz.'))));
  }
  function FloatingBits({
    navigate
  }) {
    return React.createElement(React.Fragment, null,
    // WhatsApp bubble
    React.createElement('a', {
      href: WA,
      target: '_blank',
      rel: 'noreferrer',
      'aria-label': 'Chat on WhatsApp',
      style: {
        position: 'fixed',
        right: 22,
        bottom: 22,
        zIndex: 45,
        width: 58,
        height: 58,
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37,211,102,0.45)'
      }
    }, React.createElement(Icon, {
      name: 'chat',
      size: 28
    })),
    // mobile sticky apply
    React.createElement('div', {
      className: 'ntg-mobile-cta',
      style: {
        display: 'none',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 44,
        padding: '12px 16px',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--line)'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      block: true,
      arrow: true,
      onClick: e => {
        e.preventDefault();
        navigate('apply');
      }
    }, 'Apply Now \u2014 It\u2019s Free')));
  }
  Object.assign(window, {
    Nav,
    Footer,
    FloatingBits
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/ntg-chrome.jsx", error: String((e && e.message) || e) }); }

// nurses-to-germany/ntg-home.jsx
try { (() => {
// ntg-home.jsx — Home page. Hero has 3 switchable directions (heroStyle).
(function () {
  const Icon = window.Icon;
  const {
    Button,
    SectionHead,
    Reveal,
    CountUp,
    IconTile,
    Chip,
    Accordion
  } = window;
  const TRUST = [{
    t: 'Free to Apply',
    i: 'check'
  }, {
    t: '100+ Nurses Placed',
    i: 'users'
  }, {
    t: 'Legal & Visa Support',
    i: 'shield'
  }, {
    t: 'Start Within 12 Months',
    i: 'clock'
  }];

  // ---- HERO (3 directions) ----
  function HeroSplit({
    navigate
  }) {
    return React.createElement('section', {
      style: {
        paddingTop: 40,
        paddingBottom: 72,
        background: 'linear-gradient(180deg, var(--navy-050), var(--surface))'
      }
    }, React.createElement('div', {
      className: 'container ntg-hero-split',
      style: {
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 56,
        alignItems: 'center'
      }
    }, React.createElement('div', null, React.createElement('div', {
      className: 'tag',
      style: {
        marginBottom: 22
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 14
    }), 'Nigeria \u2192 Germany'), React.createElement('h1', {
      className: 'h-display'
    }, 'Relocate to Germany. Earn more. ', React.createElement('span', {
      style: {
        color: 'var(--gold-600)'
      }
    }, 'Build a life that matters.')), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 22,
        maxWidth: 520
      }
    }, 'We help qualified Nigerian nurses get placed in German hospitals \u2014 with full support from language training to landing.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 32,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Check If You Qualify'), React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      onClick: () => navigate('testimonials')
    }, React.createElement(Icon, {
      name: 'play',
      size: 16
    }), 'Watch a Nurse\u2019s Story')), React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 30
      }
    }, TRUST.map(b => React.createElement(Chip, {
      key: b.t,
      icon: b.i
    }, b.t)))), React.createElement('div', {
      style: {
        position: 'relative'
      }
    }, React.createElement('image-slot', {
      id: 'home-hero',
      shape: 'rounded',
      radius: '24',
      placeholder: 'Drop a hero photo \u2014 nurse in German scrubs',
      style: {
        width: '100%',
        aspectRatio: '3/4',
        boxShadow: 'var(--shadow-lg)'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        left: -22,
        bottom: 34,
        background: '#fff',
        borderRadius: 16,
        boxShadow: 'var(--shadow-md)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 13
      }
    }, React.createElement(IconTile, {
      name: 'euro',
      tone: 'green',
      size: 46
    }), React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 20,
        color: 'var(--navy-800)'
      }
    }, '\u20AC2,800'), React.createElement('div', {
      style: {
        fontSize: 12.5,
        color: 'var(--slate-600)'
      }
    }, 'avg. monthly salary'))))));
  }
  function HeroFullbleed({
    navigate
  }) {
    return React.createElement('section', {
      style: {
        position: 'relative',
        minHeight: 620,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }
    }, React.createElement('image-slot', {
      id: 'home-hero-fb',
      shape: 'rect',
      placeholder: 'Drop a full-bleed hero photo',
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        borderRadius: 0,
        border: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(100deg, rgba(7,32,63,0.92) 0%, rgba(13,43,85,0.78) 45%, rgba(13,43,85,0.30) 100%)'
      }
    }), React.createElement('div', {
      className: 'container',
      style: {
        position: 'relative',
        padding: '80px 24px'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 640
      }
    }, React.createElement('div', {
      className: 'eyebrow on-dark',
      style: {
        marginBottom: 18
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 15
    }), 'Nigeria \u2192 Germany'), React.createElement('h1', {
      className: 'h-display',
      style: {
        color: '#fff'
      }
    }, 'Relocate to Germany. Earn more. ', React.createElement('span', {
      style: {
        color: 'var(--gold-300)'
      }
    }, 'Build a life that matters.')), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 22,
        color: 'rgba(255,255,255,0.85)',
        maxWidth: 540
      }
    }, 'We help qualified Nigerian nurses get placed in German hospitals \u2014 with full support from language training to landing.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 32,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Check If You Qualify'), React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      onDark: true,
      onClick: () => navigate('testimonials')
    }, React.createElement(Icon, {
      name: 'play',
      size: 16
    }), 'Watch a Nurse\u2019s Story')), React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        marginTop: 34
      }
    }, TRUST.map(b => React.createElement('span', {
      key: b.t,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'rgba(255,255,255,0.92)',
        fontWeight: 600,
        fontSize: 14.5
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--gold-300)'
      }
    }, React.createElement(Icon, {
      name: b.i,
      size: 17,
      stroke: 2.4
    })), b.t))))));
  }
  function HeroEditorial({
    navigate
  }) {
    const stats = [['100+', 'Nurses placed'], ['\u20AC2,800', 'Avg. salary'], ['12', 'Partner hospitals']];
    return React.createElement('section', {
      style: {
        paddingTop: 36,
        paddingBottom: 64
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      style: {
        textAlign: 'center',
        maxWidth: 820,
        margin: '0 auto'
      }
    }, React.createElement('div', {
      className: 'tag',
      style: {
        marginBottom: 22
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 14
    }), 'Nigeria \u2192 Germany'), React.createElement('h1', {
      className: 'h-display'
    }, 'Relocate to Germany. Earn more. ', React.createElement('span', {
      style: {
        color: 'var(--gold-600)'
      }
    }, 'Build a life that matters.')), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 22,
        maxWidth: 600,
        margin: '22px auto 0'
      }
    }, 'We help qualified Nigerian nurses get placed in German hospitals \u2014 with full support from language training to landing.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 30,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Check If You Qualify'), React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      onClick: () => navigate('testimonials')
    }, React.createElement(Icon, {
      name: 'play',
      size: 16
    }), 'Watch a Nurse\u2019s Story'))), React.createElement('div', {
      className: 'ntg-hero-edit',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr 1fr',
        gap: 20,
        marginTop: 48,
        alignItems: 'stretch'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center'
      }
    }, stats.slice(0, 2).map(s => React.createElement('div', {
      key: s[0],
      className: 'card card-pad',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 32,
        color: 'var(--navy-800)'
      }
    }, s[0]), React.createElement('div', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-600)',
        marginTop: 4
      }
    }, s[1])))), React.createElement('image-slot', {
      id: 'home-hero-ed',
      shape: 'rounded',
      radius: '24',
      placeholder: 'Drop a hero photo',
      style: {
        width: '100%',
        minHeight: 360,
        boxShadow: 'var(--shadow-md)'
      }
    }), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center'
      }
    }, React.createElement('div', {
      className: 'card card-pad',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 32,
        color: 'var(--navy-800)'
      }
    }, stats[2][0]), React.createElement('div', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-600)',
        marginTop: 4
      }
    }, stats[2][1])), React.createElement('div', {
      className: 'card card-pad',
      style: {
        background: 'var(--navy-800)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center',
        textAlign: 'center'
      }
    }, React.createElement(IconTile, {
      name: 'shieldCheck',
      tone: 'gold',
      size: 44
    }), React.createElement('div', {
      style: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 14
      }
    }, 'Visa & legal support included'))))));
  }
  function Hero({
    heroStyle,
    navigate
  }) {
    if (heroStyle === 'fullbleed') return React.createElement(HeroFullbleed, {
      navigate
    });
    if (heroStyle === 'editorial') return React.createElement(HeroEditorial, {
      navigate
    });
    return React.createElement(HeroSplit, {
      navigate
    });
  }

  // ---- STATS BAR ----
  function StatsBar() {
    const stats = [{
      to: 100,
      suffix: '+',
      label: 'Nurses successfully placed'
    }, {
      prefix: '\u20AC',
      to: 2800,
      label: 'Average monthly salary'
    }, {
      to: 12,
      label: 'Partner hospitals in Germany'
    }, {
      to: 6,
      label: 'Countries we recruit from'
    }];
    return React.createElement('section', {
      className: 'dark-section',
      style: {
        padding: '54px 0'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      className: 'ntg-stats',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 28
      }
    }, stats.map((s, i) => React.createElement('div', {
      key: i,
      style: {
        textAlign: 'center',
        borderLeft: i ? '1px solid rgba(255,255,255,0.14)' : 'none'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 'clamp(30px,4vw,44px)',
        color: 'var(--gold-300)',
        letterSpacing: '-0.02em'
      }
    }, React.createElement(CountUp, {
      to: s.to,
      prefix: s.prefix || '',
      suffix: s.suffix || ''
    })), React.createElement('div', {
      style: {
        color: 'rgba(255,255,255,0.78)',
        fontSize: 14.5,
        marginTop: 6
      }
    }, s.label))))));
  }

  // ---- HOW IT WORKS ----
  function HowItWorks({
    navigate
  }) {
    const steps = [{
      n: 1,
      icon: 'doc',
      t: 'Apply & Get Assessed',
      d: 'Fill our quick form, upload your documents, and we review your eligibility \u2014 free.'
    }, {
      n: 2,
      icon: 'globe',
      t: 'Language & Recognition',
      d: 'We connect you with B2 German training and handle your certificate recognition (Anerkennung).'
    }, {
      n: 3,
      icon: 'plane',
      t: 'Fly & Start Working',
      d: 'Visa processed, flight supported, hospital placement confirmed. Welcome to Germany.'
    }];
    return React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'The Process',
      title: 'Your journey to Germany in 3 steps',
      lead: 'A clear, supported path from your first application to your first shift.'
    }), React.createElement('div', {
      className: 'ntg-steps',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        marginTop: 44,
        position: 'relative'
      }
    }, steps.map((s, i) => React.createElement(Reveal, {
      key: s.n,
      delay: i * 100
    }, React.createElement('div', {
      className: 'card card-pad card-hover',
      style: {
        height: '100%'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement(IconTile, {
      name: s.icon,
      tone: i === 1 ? 'gold' : 'navy',
      size: 54
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 44,
        color: 'var(--line-strong)'
      }
    }, '0' + s.n)), React.createElement('h3', {
      className: 'h3',
      style: {
        marginTop: 20
      }
    }, s.t), React.createElement('p', {
      className: 'muted',
      style: {
        marginTop: 10,
        fontSize: 15.5
      }
    }, s.d))))), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 40
      }
    }, React.createElement(Button, {
      variant: 'navy',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Start Your Application'))));
  }

  // ---- WHY GERMANY ----
  function WhyGermany({
    navigate
  }) {
    const cards = [{
      icon: 'building',
      tone: 'navy',
      t: 'A critical shortage',
      d: 'Germany needs 200,000+ nurses \u2014 demand is structural, not temporary.'
    }, {
      icon: 'euro',
      tone: 'green',
      t: 'Earn \u20AC2,500\u2013\u20AC4,000/mo',
      d: 'That\u2019s roughly \u20A64M\u2013\u20A66.5M every month, with pension from day one.'
    }, {
      icon: 'home',
      tone: 'gold',
      t: 'Relocation support',
      d: 'Accommodation and relocation help for your first months on the ground.'
    }, {
      icon: 'users',
      tone: 'navy',
      t: 'Bring your family',
      d: 'Family reunification visas let your spouse and children join you.'
    }];
    return React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Why Germany',
      title: 'Why thousands of African nurses are choosing Germany'
    }), React.createElement('div', {
      className: 'ntg-why',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 22,
        marginTop: 44
      }
    }, cards.map((c, i) => React.createElement(Reveal, {
      key: c.t,
      delay: i * 80
    }, React.createElement('div', {
      className: 'card card-pad card-hover',
      style: {
        height: '100%'
      }
    }, React.createElement(IconTile, {
      name: c.icon,
      tone: c.tone,
      size: 52
    }), React.createElement('h3', {
      style: {
        fontSize: 18.5,
        marginTop: 18,
        fontFamily: 'var(--font-head)',
        color: 'var(--navy-800)'
      }
    }, c.t), React.createElement('p', {
      className: 'muted',
      style: {
        marginTop: 9,
        fontSize: 14.5
      }
    }, c.d))))), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 36
      }
    }, React.createElement('a', {
      href: '#',
      onClick: e => {
        e.preventDefault();
        navigate('about');
      },
      style: {
        color: 'var(--navy-700)',
        fontWeight: 700,
        fontFamily: 'var(--font-head)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7
      }
    }, 'Learn more about the program', React.createElement(Icon, {
      name: 'arrow',
      size: 18
    })))));
  }

  // ---- TESTIMONIALS PREVIEW ----
  function TestimonialsPreview({
    navigate
  }) {
    const vids = [{
      name: 'Chioma A.',
      from: 'Lagos',
      city: 'Frankfurt'
    }, {
      name: 'Emeka O.',
      from: 'Abuja',
      city: 'Munich'
    }, {
      name: 'Blessing N.',
      from: 'Enugu',
      city: 'Hamburg'
    }];
    return React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Testimonials',
      title: 'Real nurses. Real stories.',
      lead: 'Hear from African nurses who already made the move \u2014 in their own words.'
    }), React.createElement('div', {
      className: 'ntg-vids',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        marginTop: 44
      }
    }, vids.map((v, i) => React.createElement(Reveal, {
      key: v.name,
      delay: i * 90
    }, React.createElement('div', {
      className: 'card card-hover',
      style: {
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'relative'
      }
    }, React.createElement('image-slot', {
      id: 'home-vid-' + i,
      shape: 'rect',
      placeholder: 'Video thumbnail',
      style: {
        width: '100%',
        aspectRatio: '4/3',
        borderRadius: 0,
        border: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 58,
        height: 58,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-md)'
      }
    }, React.createElement(Icon, {
      name: 'play',
      size: 24,
      color: 'var(--navy-800)'
    })))), React.createElement('div', {
      style: {
        padding: '18px 20px'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, v.name + ', ' + v.from), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--slate-600)',
        fontSize: 14,
        marginTop: 4
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 14
    }), 'Now in ' + v.city)))))), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 40
      }
    }, React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('testimonials')
    }, 'Watch More Stories'))));
  }

  // ---- ELIGIBILITY ----
  function Eligibility({
    navigate
  }) {
    const items = ['You are a registered nurse (RN) in Nigeria or another African country', 'You have at least 1 year of post-qualification experience', 'You are willing to learn German (or already have A1\u2013B2 level)', 'You are ready to relocate within 6\u201318 months'];
    return React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container ntg-elig',
      style: {
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, React.createElement('div', null, React.createElement(SectionHead, {
      eyebrow: 'Eligibility',
      title: 'Are you eligible?',
      lead: 'A quick check before you apply. If most of these sound like you, you\u2019re ready.'
    }), React.createElement('div', {
      style: {
        marginTop: 24
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Apply Now \u2014 It\u2019s Free'))), React.createElement('div', {
      className: 'card card-pad',
      style: {
        padding: 30
      }
    }, items.map((it, i) => React.createElement('div', {
      key: i,
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start',
        padding: '14px 0',
        borderTop: i ? '1px solid var(--line)' : 'none'
      }
    }, React.createElement('span', {
      style: {
        flex: '0 0 auto',
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'var(--green-100)',
        color: 'var(--green-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 17,
      stroke: 3
    })), React.createElement('span', {
      style: {
        fontSize: 16,
        color: 'var(--ink)',
        lineHeight: 1.5
      }
    }, it))))));
  }

  // ---- FAQ TEASER ----
  function FaqTeaser({
    navigate
  }) {
    const items = [{
      q: 'Do I need to speak German before applying?',
      a: 'No. You can apply at any German level \u2014 even none. We connect you with training to reach the B2 level hospitals require, and many nurses start from scratch.'
    }, {
      q: 'Who pays for my visa and flights?',
      a: 'Visa and relocation costs are supported and partially covered by the program and your placement hospital. We guide you through every step and document.'
    }, {
      q: 'What happens to my family?',
      a: 'Germany offers family reunification visas \u2014 your spouse and children can join you, typically 6\u201312 months after you arrive and settle.'
    }];
    return React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 860
      }
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'FAQ',
      title: 'Questions, answered'
    }), React.createElement('div', {
      style: {
        marginTop: 36
      }
    }, React.createElement(Accordion, {
      items,
      defaultOpen: 0
    })), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 28
      }
    }, React.createElement('a', {
      href: '#',
      onClick: e => {
        e.preventDefault();
        navigate('faq');
      },
      style: {
        color: 'var(--navy-700)',
        fontWeight: 700,
        fontFamily: 'var(--font-head)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7
      }
    }, 'See all FAQs', React.createElement(Icon, {
      name: 'arrow',
      size: 18
    })))));
  }

  // ---- FINAL CTA ----
  function FinalCta({
    navigate
  }) {
    return React.createElement('section', {
      style: {
        padding: '20px 0 90px'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 28,
        background: 'linear-gradient(120deg, var(--navy-900), var(--navy-700))',
        padding: 'clamp(40px,6vw,72px)',
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        top: -60,
        right: -40,
        width: 240,
        height: 240,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,166,35,0.35), transparent 70%)'
      }
    }), React.createElement('h2', {
      style: {
        position: 'relative',
        color: '#fff',
        fontSize: 'clamp(28px,4vw,42px)',
        maxWidth: 700,
        margin: '0 auto'
      }
    }, 'Your next shift could be in Frankfurt.'), React.createElement('p', {
      style: {
        position: 'relative',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
        marginTop: 16
      }
    }, 'Join hundreds of African nurses who already made the move.'), React.createElement('div', {
      style: {
        position: 'relative',
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Start My Application')))));
  }
  function HomePage({
    heroStyle,
    navigate
  }) {
    return React.createElement(React.Fragment, null, React.createElement(Hero, {
      heroStyle,
      navigate
    }), React.createElement(StatsBar, null), React.createElement(HowItWorks, {
      navigate
    }), React.createElement(WhyGermany, {
      navigate
    }), React.createElement(TestimonialsPreview, {
      navigate
    }), React.createElement(Eligibility, {
      navigate
    }), React.createElement(FaqTeaser, {
      navigate
    }), React.createElement(FinalCta, {
      navigate
    }));
  }
  window.HomePage = HomePage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/ntg-home.jsx", error: String((e && e.message) || e) }); }

// nurses-to-germany/ntg-icons.jsx
try { (() => {
// ntg-icons.jsx — clinical line-icon set (single stroke, rounded).
// Usage: <Icon name="check" size={20} />
(function () {
  const P = {
    menu: 'M3 6h18M3 12h18M3 18h18',
    close: 'M6 6l12 12M18 6L6 18',
    check: 'M20 6L9 17l-5-5',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    arrowDown: 'M12 5v14M6 13l6 6 6-6',
    chevron: 'M6 9l6 6 6-6',
    play: 'M8 5v14l11-7z',
    mail: 'M3 6.5h18v11H3zM3 7l9 6 9-6',
    phone: 'M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',
    calendar: 'M4 5h16v15H4zM4 9h16M8 3v4M16 3v4',
    shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
    shieldCheck: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',
    heart: 'M12 20s-7-4.5-9.5-9A4.5 4.5 0 0112 5a4.5 4.5 0 019.5 6C19 15.5 12 20 12 20z',
    home: 'M3 11l9-8 9 8M5 10v10h14V10',
    euro: 'M16 8a5 5 0 100 8M5 10h7M5 14h7',
    plane: 'M21 16v-2l-8-5V4a1.5 1.5 0 00-3 0v5l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.5z',
    globe: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18',
    users: 'M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 20c0-3 3-5 7-5s7 2 7 5M17 11a3 3 0 000-6M22 20c0-2.5-2-4-5-4.5',
    upload: 'M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3',
    star: 'M12 3l2.6 5.5 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.5l1.1-6L3.4 9.3l6-.8z',
    pin: 'M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
    search: 'M11 4a7 7 0 105 12l4 4M11 4a7 7 0 015 12',
    clock: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3.5 2',
    doc: 'M6 2h8l4 4v16H6zM14 2v4h4',
    chat: 'M4 5h16v11H8l-4 4z',
    sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
    building: 'M4 21V5l8-3 8 3v16M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h6',
    award: 'M12 3a5 5 0 100 10 5 5 0 000-10zM8.5 12L7 22l5-3 5 3-1.5-10'
  };
  const FILLED = {
    play: true,
    star: true,
    sparkle: true
  };
  function Icon({
    name,
    size = 22,
    stroke = 2,
    color = 'currentColor',
    style
  }) {
    const d = P[name] || P.check;
    const filled = FILLED[name];
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: filled ? color : 'none',
      stroke: filled ? 'none' : color,
      strokeWidth: stroke,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style,
      'aria-hidden': 'true'
    }, React.createElement('path', {
      d
    }));
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/ntg-icons.jsx", error: String((e && e.message) || e) }); }

// nurses-to-germany/ntg-pages.jsx
try { (() => {
// ntg-pages.jsx — About, Testimonials, FAQ, Contact.
(function () {
  const {
    useState
  } = React;
  const Icon = window.Icon;
  const {
    Button,
    SectionHead,
    Reveal,
    IconTile,
    Chip,
    Accordion
  } = window;
  function PageHero({
    eyebrow,
    title,
    lead,
    crumb
  }) {
    return React.createElement('section', {
      style: {
        background: 'linear-gradient(180deg,var(--navy-050),var(--surface))',
        paddingTop: 52,
        paddingBottom: 40
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 860
      }
    }, crumb && React.createElement('div', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-400)',
        marginBottom: 18
      }
    }, crumb), React.createElement('div', {
      className: 'eyebrow',
      style: {
        marginBottom: 14
      }
    }, React.createElement(Icon, {
      name: 'sparkle',
      size: 15
    }), eyebrow), React.createElement('h1', {
      className: 'h1'
    }, title), lead && React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 16,
        maxWidth: 640
      }
    }, lead)));
  }

  // ===================== ABOUT =====================
  function AboutPage({
    navigate
  }) {
    const benefits = [['Monthly salary', '\u20AC2,500 \u2013 \u20AC4,000 (entry to experienced)'], ['Accommodation', 'Provided or subsidized for first 3\u20136 months'], ['Health insurance', 'Mandatory state insurance \u2014 fully covered'], ['Pension', 'German state pension from day one'], ['Annual leave', '24\u201330 days paid leave per year'], ['Language training', 'Fully or partially funded before departure'], ['Visa & relocation', 'Supported and partially covered'], ['Family reunification', 'Spouse and children can join after 6\u201312 months']];
    const timeline = [['Month 1\u20132', 'Application submitted & documents verified'], ['Month 2\u20134', 'German language training begins (A1 \u2192 B2)'], ['Month 4\u20136', 'Certificate recognition (Anerkennung)'], ['Month 6\u20138', 'Hospital matching & contract signed'], ['Month 8\u201310', 'Visa application & approval'], ['Month 10\u201312', 'Pre-departure orientation & flight'], ['Month 12+', 'Arrive in Germany, start working']];
    const handle = [['doc', 'Document verification & authentication'], ['globe', 'German language school partnership'], ['shieldCheck', 'Anerkennung (recognition) guidance'], ['plane', 'Pre-departure orientation'], ['building', 'Visa application support'], ['home', 'Accommodation liaison'], ['chat', 'On-arrival support (first 30 days)'], ['users', 'Family reunification guidance']];
    const cities = ['Frankfurt am Main', 'Munich (M\u00FCnchen)', 'Berlin', 'Hamburg', 'Cologne (K\u00F6ln)', 'Stuttgart'];
    const reqNurse = ['Valid nursing certificate', 'NMCN or equivalent license', 'Min. 1 year clinical experience', 'Willingness to reach B2 German', 'Valid international passport', 'No serious criminal record', 'Medical fitness'];
    const reqAus = ['Secondary school leaving certificate', 'German level of at least A2', 'Age 18\u201335 (preferred)', 'Commitment to 3-year training', 'Strong motivation letter'];
    return React.createElement(React.Fragment, null, React.createElement(PageHero, {
      crumb: 'Home \u203A About the Program',
      eyebrow: 'About the Program',
      title: 'Everything you need to know about relocating to Germany as a nurse',
      lead: 'A structural opportunity, an honest timeline, and an organisation that handles the hard parts with you.'
    }),
    // Why Germany needs you
    React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container ntg-2col',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, React.createElement('image-slot', {
      id: 'about-hospital',
      shape: 'rounded',
      radius: '20',
      placeholder: 'Drop a German hospital photo',
      style: {
        width: '100%',
        aspectRatio: '4/3',
        boxShadow: 'var(--shadow-md)'
      }
    }), React.createElement('div', null, React.createElement(SectionHead, {
      eyebrow: 'Why Germany needs you',
      title: 'The door is wide open'
    }), React.createElement('ul', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        marginTop: 18
      }
    }, ['Germany has an ageing population \u2014 demand for nurses is structural, not temporary.', 'The German government actively funds international nurse recruitment.', 'African nurses are highly regarded for their work ethic and clinical training.'].map((t, i) => React.createElement('li', {
      key: i,
      style: {
        display: 'flex',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--green-600)',
        marginTop: 2
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 20,
      stroke: 3
    })), React.createElement('span', {
      style: {
        fontSize: 16,
        color: 'var(--slate-700)'
      }
    }, t)))), React.createElement('div', {
      style: {
        marginTop: 24,
        padding: 22,
        borderRadius: 'var(--r-lg)',
        background: 'var(--navy-800)',
        color: '#fff'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 19,
        lineHeight: 1.4
      }
    }, '\u201CGermany will need 500,000 more healthcare workers by 2030.\u201D'))))),
    // Benefits
    React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Your package',
      title: 'What you will earn & receive'
    }), React.createElement('div', {
      className: 'ntg-benefits',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginTop: 40
      }
    }, benefits.map((b, i) => React.createElement('div', {
      key: i,
      className: 'card',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '18px 22px'
      }
    }, React.createElement('span', {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--gold-500)',
        flex: '0 0 auto'
      }
    }), React.createElement('div', {
      style: {
        flex: '0 0 38%',
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, b[0]), React.createElement('div', {
      style: {
        color: 'var(--slate-600)',
        fontSize: 14.5
      }
    }, b[1])))))),
    // Timeline
    React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 880
      }
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Timeline',
      title: 'The full relocation timeline'
    }), React.createElement('div', {
      style: {
        marginTop: 44,
        position: 'relative'
      }
    }, React.createElement('div', {
      className: 'ntg-tl-line',
      style: {
        position: 'absolute',
        left: 19,
        top: 8,
        bottom: 8,
        width: 2,
        background: 'var(--line)'
      }
    }), timeline.map((t, i) => React.createElement(Reveal, {
      key: i,
      delay: i * 60,
      style: {
        display: 'flex',
        gap: 22,
        paddingBottom: 26,
        position: 'relative'
      }
    }, React.createElement('span', {
      style: {
        flex: '0 0 auto',
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: i === timeline.length - 1 ? 'var(--gold-500)' : 'var(--navy-800)',
        color: i === timeline.length - 1 ? 'var(--on-accent)' : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 14,
        zIndex: 1
      }
    }, i + 1), React.createElement('div', {
      style: {
        paddingTop: 2
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 13.5,
        color: 'var(--gold-600)',
        letterSpacing: '.04em'
      }
    }, t[0]), React.createElement('div', {
      style: {
        fontSize: 16.5,
        color: 'var(--navy-800)',
        fontWeight: 500,
        marginTop: 2
      }
    }, t[1]))))), React.createElement('p', {
      className: 'help',
      style: {
        textAlign: 'center',
        marginTop: 8
      }
    }, 'Timeline varies based on your current German level and document readiness.'))),
    // Requirements two-path
    React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Entry requirements',
      title: 'Two paths into Germany'
    }), React.createElement('div', {
      className: 'ntg-2col',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        marginTop: 40
      }
    }, [['For Qualified Nurses', reqNurse, 'shieldCheck', 'navy'], ['For Ausbildung (Training)', reqAus, 'award', 'gold']].map(col => React.createElement('div', {
      key: col[0],
      className: 'card card-pad'
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 18
      }
    }, React.createElement(IconTile, {
      name: col[2],
      tone: col[3],
      size: 48
    }), React.createElement('h3', {
      className: 'h3'
    }, col[0])), React.createElement('ul', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, col[1].map((r, i) => React.createElement('li', {
      key: i,
      style: {
        display: 'flex',
        gap: 11
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--green-600)',
        marginTop: 1
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 18,
      stroke: 3
    })), React.createElement('span', {
      style: {
        fontSize: 15,
        color: 'var(--slate-700)'
      }
    }, r))))))))),
    // Partner hospitals
    React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Network',
      title: 'Our partner hospitals'
    }), React.createElement('div', {
      className: 'ntg-cities',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 18,
        marginTop: 40
      }
    }, cities.map(c => React.createElement('div', {
      key: c,
      className: 'card card-hover',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '20px 22px'
      }
    }, React.createElement(IconTile, {
      name: 'building',
      tone: 'navy',
      size: 46
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 600,
        fontSize: 16,
        color: 'var(--navy-800)'
      }
    }, c)))), React.createElement('p', {
      className: 'help',
      style: {
        textAlign: 'center',
        marginTop: 18
      }
    }, 'We are growing our network. Hospital names are shared during the matching stage.'))),
    // What we handle
    React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement(SectionHead, {
      center: true,
      eyebrow: 'Full support',
      title: 'What we handle for you'
    }), React.createElement('div', {
      className: 'ntg-handle',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 18,
        marginTop: 40
      }
    }, handle.map((h, i) => React.createElement('div', {
      key: i,
      className: 'card card-pad',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, React.createElement(IconTile, {
      name: h[0],
      tone: i % 2 ? 'gold' : 'navy',
      size: 50
    })), React.createElement('div', {
      style: {
        fontSize: 14.5,
        color: 'var(--slate-700)',
        fontWeight: 500
      }
    }, h[1])))))), React.createElement('section', {
      className: 'section',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('h2', {
      className: 'h2'
    }, 'Ready to start?'), React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 12
      }
    }, 'Apply now \u2014 it\u2019s completely free.'), React.createElement('div', {
      style: {
        marginTop: 26,
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Apply Now')))));
  }

  // ===================== TESTIMONIALS =====================
  function TestimonialsPage({
    navigate
  }) {
    const cities = ['All', 'Lagos', 'Abuja', 'Enugu', 'Accra', 'Douala', 'Other'];
    const [filter, setFilter] = useState('All');
    const vids = [{
      name: 'Chioma A.',
      from: 'Lagos',
      city: 'Frankfurt',
      q: 'I never thought it could move this fast.'
    }, {
      name: 'Emeka O.',
      from: 'Abuja',
      city: 'Munich',
      q: 'The language support changed everything.'
    }, {
      name: 'Blessing N.',
      from: 'Enugu',
      city: 'Hamburg',
      q: 'My family joined me within a year.'
    }, {
      name: 'Tunde A.',
      from: 'Lagos',
      city: 'Berlin',
      q: 'They handled the paperwork I dreaded.'
    }, {
      name: 'Ama K.',
      from: 'Accra',
      city: 'Cologne',
      q: 'From application to arrival in 11 months.'
    }, {
      name: 'Marie D.',
      from: 'Douala',
      city: 'Stuttgart',
      q: 'Real people, real answers, every step.'
    }];
    const shown = filter === 'All' ? vids : vids.filter(v => v.from === filter || filter === 'Other' && !cities.includes(v.from));
    const quotes = [{
      name: 'Chioma A.',
      role: 'ICU Nurse, Frankfurt',
      text: 'I was anxious about the German exam, but the recognition guidance made it manageable. Today I work in a Frankfurt ICU and send money home every month.'
    }, {
      name: 'Emeka O.',
      role: 'Theatre Nurse, Munich',
      text: 'The hardest part was the language. Med Global got me into a funded B2 course and checked in weekly. Eight months later I had a contract.'
    }];
    return React.createElement(React.Fragment, null, React.createElement(PageHero, {
      eyebrow: 'Testimonials',
      title: 'Hear it from nurses who already made the move',
      lead: 'These are real stories from African nurses now working in Germany.'
    }),
    // featured
    React.createElement('section', {
      style: {
        paddingBottom: 8
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      style: {
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)'
      }
    }, React.createElement('image-slot', {
      id: 'test-feature',
      shape: 'rect',
      placeholder: 'Featured testimonial video',
      style: {
        width: '100%',
        aspectRatio: '16/7',
        borderRadius: 0,
        border: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(0deg, rgba(7,32,63,0.85), rgba(7,32,63,0.1) 60%)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(24px,4vw,44px)'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, React.createElement('div', {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, React.createElement(Icon, {
      name: 'play',
      size: 26,
      color: 'var(--navy-800)'
    })), React.createElement('div', null, React.createElement('div', {
      style: {
        color: '#fff',
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        fontSize: 22
      }
    }, 'Chioma A. \u2014 Lagos \u2192 Frankfurt'), React.createElement('div', {
      style: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 15,
        marginTop: 4
      }
    }, 'ICU Nurse \u00B7 University Hospital Frankfurt'))))))),
    // grid + filter
    React.createElement('section', {
      className: 'section',
      style: {
        paddingTop: 48
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 9,
        marginBottom: 30
      }
    }, cities.map(c => React.createElement('button', {
      key: c,
      onClick: () => setFilter(c),
      style: {
        padding: '8px 16px',
        borderRadius: 'var(--r-pill)',
        fontFamily: 'var(--font-head)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        border: '1px solid ' + (filter === c ? 'var(--navy-700)' : 'var(--line)'),
        background: filter === c ? 'var(--navy-800)' : '#fff',
        color: filter === c ? '#fff' : 'var(--slate-600)'
      }
    }, c))), React.createElement('div', {
      className: 'ntg-vids',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, shown.map((v, i) => React.createElement('div', {
      key: v.name,
      className: 'card card-hover',
      style: {
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'relative'
      }
    }, React.createElement('image-slot', {
      id: 'test-' + i,
      shape: 'rect',
      placeholder: 'Video',
      style: {
        width: '100%',
        aspectRatio: '4/3',
        borderRadius: 0,
        border: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 54,
        height: 54,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'play',
      size: 22,
      color: 'var(--navy-800)'
    })))), React.createElement('div', {
      style: {
        padding: '16px 18px'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, v.name + ', ' + v.from), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--slate-600)',
        fontSize: 13.5,
        margin: '3px 0 8px'
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 13
    }), 'Now in ' + v.city), React.createElement('p', {
      style: {
        fontSize: 14.5,
        color: 'var(--slate-700)',
        fontStyle: 'italic'
      }
    }, '\u201C' + v.q + '\u201D'))))))),
    // written quotes
    React.createElement('section', {
      className: 'section',
      style: {
        background: 'var(--bg)',
        paddingTop: 64
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      className: 'ntg-2col',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24
      }
    }, quotes.map(q => React.createElement('div', {
      key: q.name,
      className: 'card card-pad'
    }, React.createElement('div', {
      style: {
        color: 'var(--gold-500)',
        display: 'flex',
        gap: 3,
        marginBottom: 14
      }
    }, [0, 1, 2, 3, 4].map(s => React.createElement(Icon, {
      key: s,
      name: 'star',
      size: 18
    }))), React.createElement('p', {
      style: {
        fontSize: 17,
        color: 'var(--ink)',
        lineHeight: 1.6
      }
    }, '\u201C' + q.text + '\u201D'), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 20
      }
    }, React.createElement('image-slot', {
      id: 'q-' + q.name.replace(/\W/g, ''),
      shape: 'circle',
      placeholder: '',
      style: {
        width: 48,
        height: 48
      }
    }), React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, q.name), React.createElement('div', {
      style: {
        fontSize: 13.5,
        color: 'var(--slate-600)'
      }
    }, q.role)))))))), React.createElement('section', {
      className: 'section',
      style: {
        textAlign: 'center'
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('h2', {
      className: 'h2'
    }, 'Be the next success story.'), React.createElement('div', {
      style: {
        marginTop: 24,
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => navigate('apply')
    }, 'Apply Now')))));
  }

  // ===================== FAQ =====================
  function FaqPage({
    navigate
  }) {
    const [q, setQ] = useState('');
    const groups = [{
      cat: 'About the Program',
      items: [{
        q: 'What is the Nurses to Germany program?',
        a: 'A relocation program by Med Global Deutschland that places qualified African nurses in German hospitals, with full support from language to landing.'
      }, {
        q: 'Is this program free?',
        a: 'Applying is completely free. Visa, language and relocation costs are supported and partially covered by the program and your placement hospital.'
      }, {
        q: 'Are you a recruitment agency?',
        a: 'We are a relocation partner: we assess, prepare, and match you, then support you through recognition, visa and arrival.'
      }, {
        q: 'How long does the whole process take?',
        a: 'Typically 10\u201312 months, depending on your German level and how quickly documents are ready.'
      }]
    }, {
      cat: 'Eligibility & Requirements',
      items: [{
        q: 'What qualifications do I need?',
        a: 'A valid nursing certificate, a license (NMCN or equivalent), and at least one year of clinical experience for the nurse path.'
      }, {
        q: 'I qualified outside Nigeria \u2014 can I still apply?',
        a: 'Yes. We work with nurses across Africa, including Ghana, Cameroon and beyond.'
      }, {
        q: 'Do I need IELTS or TOEFL?',
        a: 'No. Germany requires German (B2), not English certification.'
      }, {
        q: 'What is the minimum age to apply?',
        a: 'There is no strict cap for the nurse path; the Ausbildung path prefers ages 18\u201335.'
      }]
    }, {
      cat: 'German Language',
      items: [{
        q: 'Do I need to speak German before applying?',
        a: 'No \u2014 you can apply at any level, including none. We connect you with training to reach B2.'
      }, {
        q: 'What level of German is required?',
        a: 'B2 is required to work as a nurse in Germany.'
      }, {
        q: 'Who pays for my German training?',
        a: 'Training is fully or partially funded depending on your path and placement.'
      }, {
        q: 'How long does it take to reach B2?',
        a: 'From zero, roughly 8\u201312 months of consistent, intensive study.'
      }]
    }, {
      cat: 'Certificate Recognition (Anerkennung)',
      items: [{
        q: 'What is Anerkennung?',
        a: 'The official recognition of your nursing qualification in Germany \u2014 required to practice.'
      }, {
        q: 'Will my certificate be recognized?',
        a: 'In most cases yes, sometimes with an adaptation course or exam. We guide the whole process.'
      }, {
        q: 'How long does recognition take?',
        a: 'Typically 2\u20134 months once documents are complete.'
      }]
    }, {
      cat: 'Visa & Immigration',
      items: [{
        q: 'What type of visa will I need?',
        a: 'Usually a recognition visa or skilled-worker visa. We advise based on your situation.'
      }, {
        q: 'Who handles the visa application?',
        a: 'We support and guide you through it, with your placement hospital.'
      }, {
        q: 'Can I bring my spouse and children?',
        a: 'Yes \u2014 via family reunification, typically 6\u201312 months after you arrive.'
      }]
    }, {
      cat: 'Life in Germany',
      items: [{
        q: 'Where in Germany will I be based?',
        a: 'Wherever your matched hospital is \u2014 we have partners in Frankfurt, Munich, Berlin, Hamburg, Cologne and Stuttgart.'
      }, {
        q: 'Is there an African community in Germany?',
        a: 'Yes \u2014 vibrant Nigerian and broader African communities exist in every major city.'
      }]
    }, {
      cat: 'Finances',
      items: [{
        q: 'How much will I earn?',
        a: '\u20AC2,500\u2013\u20AC4,000/month before tax, depending on experience and region.'
      }, {
        q: 'When will I start earning?',
        a: 'From your first month of employment after arrival.'
      }]
    }];
    const ql = q.trim().toLowerCase();
    const filtered = groups.map(g => ({
      ...g,
      items: ql ? g.items.filter(it => (it.q + it.a).toLowerCase().includes(ql)) : g.items
    })).filter(g => g.items.length);
    return React.createElement(React.Fragment, null, React.createElement(PageHero, {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      lead: 'Answers to the questions African nurses ask us most \u2014 visa, language, salary, family.'
    }), React.createElement('section', {
      className: 'section',
      style: {
        paddingTop: 24
      }
    }, React.createElement('div', {
      className: 'container',
      style: {
        maxWidth: 820
      }
    }, React.createElement('div', {
      style: {
        position: 'relative',
        marginBottom: 36
      }
    }, React.createElement('span', {
      style: {
        position: 'absolute',
        left: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--slate-400)'
      }
    }, React.createElement(Icon, {
      name: 'search',
      size: 20
    })), React.createElement('input', {
      className: 'input',
      placeholder: 'Search FAQs\u2026',
      value: q,
      onChange: e => setQ(e.target.value),
      style: {
        paddingLeft: 46,
        height: 52,
        fontSize: 16
      }
    })), filtered.length === 0 && React.createElement('p', {
      className: 'muted',
      style: {
        textAlign: 'center'
      }
    }, 'No questions match \u201C' + q + '\u201D.'), filtered.map(g => React.createElement('div', {
      key: g.cat,
      style: {
        marginBottom: 32
      }
    }, React.createElement('h3', {
      style: {
        fontSize: 15,
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--gold-600)',
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        marginBottom: 14
      }
    }, g.cat), React.createElement(Accordion, {
      items: g.items
    }))), React.createElement('div', {
      className: 'card card-pad',
      style: {
        textAlign: 'center',
        background: 'var(--bg)',
        marginTop: 20
      }
    }, React.createElement('h3', {
      className: 'h3'
    }, 'Still have questions?'), React.createElement('p', {
      className: 'muted',
      style: {
        marginTop: 8
      }
    }, 'We\u2019re happy to answer personally.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        marginTop: 20,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'navy',
      href: 'https://wa.me/4915123456789'
    }, React.createElement(Icon, {
      name: 'chat',
      size: 18
    }), 'Chat on WhatsApp'), React.createElement(Button, {
      variant: 'ghost',
      onClick: () => navigate('contact')
    }, React.createElement(Icon, {
      name: 'mail',
      size: 18
    }), 'Send Us an Email'))))));
  }

  // ===================== CONTACT =====================
  function ContactPage() {
    const [sent, setSent] = useState(false);
    const cards = [{
      icon: 'chat',
      tone: 'green',
      t: 'WhatsApp',
      s: 'Fastest response \u2014 typically within 2 hours during business hours.',
      b: 'Open WhatsApp Chat',
      href: 'https://wa.me/4915123456789'
    }, {
      icon: 'mail',
      tone: 'navy',
      t: 'Email',
      s: 'hello@medglobal-ng.com \u2014 for formal inquiries or documents.',
      b: 'Send an Email',
      href: 'mailto:hello@medglobal-ng.com'
    }, {
      icon: 'calendar',
      tone: 'gold',
      t: 'Book a Call',
      s: 'Schedule a free 15-minute call with a relocation advisor.',
      b: 'Book a Call',
      href: '#'
    }];
    return React.createElement(React.Fragment, null, React.createElement(PageHero, {
      eyebrow: 'Contact',
      title: 'Let\u2019s talk about your move',
      lead: 'Reach us however is easiest for you \u2014 we usually reply the same day.'
    }), React.createElement('section', {
      style: {
        paddingBottom: 8
      }
    }, React.createElement('div', {
      className: 'container'
    }, React.createElement('div', {
      className: 'ntg-contact',
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 22
      }
    }, cards.map(c => React.createElement('div', {
      key: c.t,
      className: 'card card-pad card-hover',
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, React.createElement(IconTile, {
      name: c.icon,
      tone: c.tone,
      size: 54
    }), React.createElement('h3', {
      className: 'h3'
    }, c.t), React.createElement('p', {
      className: 'muted',
      style: {
        fontSize: 14.5,
        flex: 1
      }
    }, c.s), React.createElement(Button, {
      variant: 'ghost',
      href: c.href,
      arrow: true
    }, c.b)))))), React.createElement('section', {
      className: 'section'
    }, React.createElement('div', {
      className: 'container ntg-2col',
      style: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: 48
      }
    }, React.createElement('div', {
      className: 'card card-pad',
      style: {
        padding: 'clamp(24px,4vw,38px)'
      }
    }, React.createElement('h3', {
      className: 'h3',
      style: {
        marginBottom: 22
      }
    }, 'Send us a message'), sent ? React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--green-600)',
        fontWeight: 600,
        padding: '20px 0'
      }
    }, React.createElement(Icon, {
      name: 'check',
      size: 22,
      stroke: 3
    }), 'Thanks! We\u2019ll be in touch shortly.') : React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, React.createElement('div', {
      className: 'ntg-form-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, React.createElement('input', {
      className: 'input',
      placeholder: 'Name'
    }), React.createElement('input', {
      className: 'input',
      placeholder: 'Email'
    })), React.createElement('input', {
      className: 'input',
      placeholder: 'Phone / WhatsApp number'
    }), React.createElement('select', {
      className: 'select',
      defaultValue: ''
    }, React.createElement('option', {
      value: '',
      disabled: true
    }, 'Subject\u2026'), ['General Inquiry', 'Application Status', 'Partnership', 'Media', 'Other'].map(o => React.createElement('option', {
      key: o
    }, o))), React.createElement('textarea', {
      className: 'textarea',
      placeholder: 'Your message'
    }), React.createElement(Button, {
      variant: 'primary',
      arrow: true,
      onClick: () => setSent(true)
    }, 'Send Message'))), React.createElement('div', null, React.createElement('div', {
      className: 'card card-pad',
      style: {
        marginBottom: 18
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
      }
    }, React.createElement(Icon, {
      name: 'clock',
      size: 20,
      color: 'var(--navy-700)'
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, 'Operating hours')), React.createElement('p', {
      className: 'muted',
      style: {
        fontSize: 15
      }
    }, 'Mon\u2013Fri, 9am\u20136pm WAT')), React.createElement('div', {
      className: 'card card-pad',
      style: {
        marginBottom: 18
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
      }
    }, React.createElement(Icon, {
      name: 'pin',
      size: 20,
      color: 'var(--navy-700)'
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 700,
        color: 'var(--navy-800)'
      }
    }, 'Where we are')), React.createElement('p', {
      className: 'muted',
      style: {
        fontSize: 15
      }
    }, 'We operate remotely with team members in Lagos, Abuja, and Germany.')), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10
      }
    }, ['globe', 'chat', 'play', 'mail'].map(ic => React.createElement('a', {
      key: ic,
      href: '#',
      onClick: e => e.preventDefault(),
      style: {
        width: 46,
        height: 46,
        borderRadius: 12,
        border: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--navy-700)'
      }
    }, React.createElement(Icon, {
      name: ic,
      size: 20
    }))))))));
  }
  Object.assign(window, {
    AboutPage,
    TestimonialsPage,
    FaqPage,
    ContactPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/ntg-pages.jsx", error: String((e && e.message) || e) }); }

// nurses-to-germany/ntg-ui.jsx
try { (() => {
// ntg-ui.jsx — shared building blocks. Exports to window.
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const Icon = window.Icon;

  // Button — variant: primary | navy | ghost; size: md | lg
  function Button({
    children,
    variant = 'primary',
    size = 'md',
    onDark,
    arrow,
    href,
    onClick,
    type,
    block,
    style
  }) {
    const cls = ['btn', `btn-${variant}`, size === 'lg' ? 'btn-lg' : '', onDark ? 'on-dark' : '', block ? 'btn-block' : ''].join(' ').trim();
    const inner = [children, arrow && React.createElement(Icon, {
      key: 'a',
      name: 'arrow',
      size: size === 'lg' ? 19 : 17
    })];
    if (href) return React.createElement('a', {
      href,
      onClick,
      className: cls,
      style
    }, inner);
    return React.createElement('button', {
      type: type || 'button',
      onClick,
      className: cls,
      style
    }, inner);
  }

  // SectionHead — eyebrow + title + optional lead, centered or left
  function SectionHead({
    eyebrow,
    title,
    lead,
    center,
    onDark,
    max = 680,
    style
  }) {
    return React.createElement('div', {
      style: {
        textAlign: center ? 'center' : 'left',
        maxWidth: center ? max : 760,
        margin: center ? '0 auto' : 0,
        marginBottom: 14,
        ...style
      }
    }, eyebrow && React.createElement('div', {
      className: 'eyebrow' + (onDark ? ' on-dark' : ''),
      style: {
        marginBottom: 14
      }
    }, React.createElement(Icon, {
      name: 'sparkle',
      size: 15
    }), eyebrow), React.createElement('h2', {
      className: 'h2',
      style: onDark ? {
        color: '#fff'
      } : null
    }, title), lead && React.createElement('p', {
      className: 'lead',
      style: {
        marginTop: 16,
        ...(onDark ? {
          color: 'rgba(255,255,255,0.8)'
        } : null)
      }
    }, lead));
  }

  // Reveal — fade-up when scrolled into view
  function Reveal({
    children,
    delay = 0,
    style,
    as = 'div'
  }) {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            setVis(true);
            io.disconnect();
          }
        });
      }, {
        threshold: 0.12
      });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    return React.createElement(as, {
      ref,
      className: 'fade-up' + (vis ? ' in' : ''),
      style: {
        transitionDelay: delay + 'ms',
        ...style
      }
    }, children);
  }

  // Count-up number when in view
  function CountUp({
    to,
    prefix = '',
    suffix = '',
    dur = 1400
  }) {
    const ref = useRef(null);
    const [val, setVal] = useState(0);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(es => {
        if (es[0].isIntersecting) {
          io.disconnect();
          const start = performance.now();
          const tick = now => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }, {
        threshold: 0.4
      });
      io.observe(el);
      return () => io.disconnect();
    }, [to]);
    return React.createElement('span', {
      ref
    }, prefix + val.toLocaleString() + suffix);
  }

  // IconTile — rounded squircle with icon
  function IconTile({
    name,
    tone = 'navy',
    size = 52
  }) {
    const tones = {
      navy: {
        bg: 'var(--navy-050)',
        fg: 'var(--navy-700)'
      },
      gold: {
        bg: 'var(--gold-100)',
        fg: 'var(--gold-600)'
      },
      green: {
        bg: 'var(--green-100)',
        fg: 'var(--green-600)'
      }
    };
    const t = tones[tone] || tones.navy;
    return React.createElement('div', {
      style: {
        width: size,
        height: size,
        borderRadius: 14,
        background: t.bg,
        color: t.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, React.createElement(Icon, {
      name,
      size: Math.round(size * 0.46),
      stroke: 2
    }));
  }

  // Chip — trust badge with check
  function Chip({
    children,
    icon = 'check'
  }) {
    return React.createElement('span', {
      className: 'chip'
    }, React.createElement(Icon, {
      name: icon,
      size: 16,
      stroke: 2.4
    }), children);
  }

  // Accordion list
  function Accordion({
    items,
    defaultOpen = -1
  }) {
    const [open, setOpen] = useState(defaultOpen);
    return React.createElement('div', {
      className: 'card',
      style: {
        overflow: 'hidden'
      }
    }, items.map((it, i) => React.createElement('div', {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--line)' : 'none'
      }
    }, React.createElement('button', {
      onClick: () => setOpen(open === i ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 24px',
        background: 'none',
        border: 'none',
        textAlign: 'left'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--navy-800)'
      }
    }, it.q), React.createElement('span', {
      style: {
        transform: open === i ? 'rotate(180deg)' : 'none',
        transition: 'transform .2s ease',
        color: 'var(--slate-400)',
        flex: '0 0 auto'
      }
    }, React.createElement(Icon, {
      name: 'chevron',
      size: 20
    }))), React.createElement('div', {
      style: {
        maxHeight: open === i ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height .3s ease'
      }
    }, React.createElement('p', {
      className: 'muted',
      style: {
        padding: '0 24px 22px',
        fontSize: 15.5,
        lineHeight: 1.6
      }
    }, it.a)))));
  }
  Object.assign(window, {
    Button,
    SectionHead,
    Reveal,
    CountUp,
    IconTile,
    Chip,
    Accordion
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/ntg-ui.jsx", error: String((e && e.message) || e) }); }

// nurses-to-germany/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "nurses-to-germany/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Faq.jsx
try { (() => {
// Faq — expandable content blocks. Large question headings paired with a
// ghost 'Read more' link, no borders, whitespace-separated.
function Faq() {
  const {
    Button
  } = window.MedGlobalDesignSystem_fc3d99;
  const [open, setOpen] = React.useState(0);
  const items = [{
    q: 'What exactly is tested?',
    a: 'A full panel of 100+ biomarkers spanning metabolic, cardiovascular, hormonal, and nutrient health — collected at a nearby lab and read by your clinician.'
  }, {
    q: 'Do I need insurance?',
    a: 'No. Membership is a flat $17/month and is HSA/FSA eligible. There are no per-visit fees and no insurance paperwork.'
  }, {
    q: 'Who reads my results?',
    a: 'A dedicated clinician reviews every panel and walks you through what changed and what to do next — on an actual call, in plain language.'
  }, {
    q: 'Can I cancel anytime?',
    a: 'Yes. Membership is month to month. Cancel in two taps; your data stays exportable.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "FAQ",
    style: {
      background: 'var(--surface-canvas)',
      padding: 'var(--section-gap) 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--color-carbon-black)',
      fontSize: 'var(--text-heading-lg)',
      lineHeight: 'var(--leading-heading-lg)',
      letterSpacing: 'var(--tracking-heading-lg)',
      margin: '0 0 40px'
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--color-carbon-black)',
      fontSize: 'var(--text-heading)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-heading)',
      margin: 0,
      cursor: 'pointer'
    },
    onClick: () => setOpen(open === i ? -1 : i)
  }, it.q), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setOpen(open === i ? -1 : i)
  }, open === i ? 'Close' : 'Read more')), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body-lg)',
      letterSpacing: 'var(--tracking-body-lg)',
      color: 'var(--color-zinc-gray)',
      maxWidth: 640,
      margin: '12px 0 0'
    }
  }, it.a))))));
}
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
// Hero — full-bleed dark cinematic section with the floating pill nav,
// whisper-weight display headline, coral CTA + trust row, membership card.
function Hero({
  onJoin
}) {
  const {
    FloatingNav,
    Button,
    TrustBadgeRow,
    MembershipCard
  } = window.MedGlobalDesignSystem_fc3d99;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      minHeight: '640px',
      borderRadius: '0 0 24px 24px',
      overflow: 'hidden',
      // Placeholder for full-bleed cinematic hero photography (intentionally dark/teal)
      background: 'radial-gradient(120% 100% at 70% 10%, #2f4a57 0%, #1c2c34 45%, #0f181d 100%)',
      padding: '20px 20px 64px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(15,24,29,0.1), rgba(15,24,29,0.55))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(FloatingNav, {
    brand: "med global",
    links: [{
      label: 'Membership'
    }, {
      label: 'Science'
    }, {
      label: 'Care team'
    }, {
      label: 'FAQ'
    }],
    cta: {
      label: 'Become a member'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      marginTop: 72,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 440px',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '-0.006em',
      color: 'rgba(255,255,255,0.6)',
      textTransform: 'uppercase'
    }
  }, "The health command center"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: '#fff',
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: '14px 0 0'
    }
  }, "Health,", /*#__PURE__*/React.createElement("br", null), "decoded."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body-lg)',
      letterSpacing: 'var(--tracking-body-lg)',
      color: 'rgba(255,255,255,0.75)',
      maxWidth: 480,
      margin: '20px 0 0'
    }
  }, "100+ biomarkers, twice a year, read by clinicians who actually call you back. One membership, your whole picture of health."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    withArrow: true,
    onClick: onJoin
  }, "Become a member")), /*#__PURE__*/React.createElement(TrustBadgeRow, {
    items: ['HSA / FSA eligible', 'Cancel anytime', 'No insurance needed']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(MembershipCard, {
    brand: "med global",
    tier: "membership",
    price: "$17",
    period: "/month",
    width: 320
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/JoinModal.jsx
try { (() => {
// JoinModal — fake membership join flow. Email step → success. Demonstrates
// the Input + primary Button + dark scrim overlay.
function JoinModal({
  open,
  onClose
}) {
  const {
    Button,
    Input,
    Badge
  } = window.MedGlobalDesignSystem_fc3d99;
  const [done, setDone] = React.useState(false);
  const [email, setEmail] = React.useState('');
  React.useEffect(() => {
    if (open) {
      setDone(false);
      setEmail('');
    }
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(15,24,29,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-cards)',
      border: '1px solid var(--color-mist-gray)',
      boxShadow: 'var(--shadow-subtle)',
      width: 'min(420px, 100%)',
      padding: 28,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)'
    }
  }, !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
    variant: "coral"
  }, "$17 / month"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 400,
      fontSize: 'var(--text-heading)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--color-carbon-black)',
      margin: '14px 0 8px'
    }
  }, "Become a member"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 400,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--color-zinc-gray)',
      margin: '0 0 20px'
    }
  }, "Start with your email. We'll book your first lab visit and pair you with a clinician."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    withArrow: true,
    onClick: () => setDone(true)
  }, "Continue"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      margin: '0 auto 16px',
      borderRadius: 'var(--radius-icons)',
      background: 'var(--color-sunrise-coral)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 400,
      fontSize: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--color-carbon-black)',
      margin: '0 0 8px'
    }
  }, "You're in."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 400,
      fontSize: 'var(--text-body)',
      color: 'var(--color-zinc-gray)',
      margin: '0 0 20px'
    }
  }, "Check ", email || 'your inbox', " to confirm and pick a lab near you."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Done"))));
}
window.JoinModal = JoinModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/JoinModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Membership.jsx
try { (() => {
// Membership — pricing section on white canvas. Marbled card + feature list,
// section heading at heading-lg weight 400.
function Membership({
  onJoin
}) {
  const {
    MembershipCard,
    FeatureList,
    Button,
    TrustBadgeRow,
    Badge
  } = window.MedGlobalDesignSystem_fc3d99;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Membership",
    style: {
      background: 'var(--surface-canvas)',
      padding: 'var(--section-gap) 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      display: 'flex',
      gap: 64,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(MembershipCard, {
    brand: "med global",
    tier: "membership",
    price: "$17",
    period: "/month",
    width: 360
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px',
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "coral"
  }, "Most popular"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      color: 'var(--color-carbon-black)',
      fontSize: 'var(--text-heading-lg)',
      lineHeight: 'var(--leading-heading-lg)',
      letterSpacing: 'var(--tracking-heading-lg)',
      margin: '14px 0 24px'
    }
  }, "Everything in one membership."), /*#__PURE__*/React.createElement(FeatureList, {
    items: ['100+ biomarkers tested twice a year', 'A dedicated clinician & care team', 'A personalized protocol that updates with you', 'Results explained in plain language, on a call']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    withArrow: true,
    onClick: onJoin
  }, "Become a member")), /*#__PURE__*/React.createElement(TrustBadgeRow, {
    items: ['HSA / FSA eligible', 'Billed monthly', 'Cancel anytime']
  })))));
}
window.Membership = Membership;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Membership.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.MembershipCard = __ds_scope.MembershipCard;

__ds_ns.TrustBadgeRow = __ds_scope.TrustBadgeRow;

__ds_ns.FloatingNav = __ds_scope.FloatingNav;

})();
