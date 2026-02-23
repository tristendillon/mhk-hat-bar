import { type LucideIcon } from "@/icons";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

type IconSize = 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | (number & {});

const SIZE_MAP: Record<number, string> = {
  12: "size-3",
  14: "size-3.5",
  16: "size-4",
  18: "size-4.5",
  20: "size-5",
  24: "size-6",
  28: "size-7",
  32: "size-8",
  36: "size-9",
  40: "size-10",
  48: "size-12",
};

interface IconBaseProps {
  /** Pixel size — maps to a Tailwind `size-*` class. Arbitrary numbers fall back to inline style. */
  size?: IconSize;
  className?: string;
  /** Accessible label. Adds `aria-label` + `role="img"` to the wrapper. */
  label?: string;
}

export interface IconComponentProps extends IconBaseProps {
  /** A Lucide icon or any `React.ComponentType<SVGProps>`. */
  src: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** SVG stroke width (component mode only). */
  strokeWidth?: number;
  /** N/A for component icons — use `label` for accessibility instead. */
  alt?: never;
  /** React 19 ref-as-prop — resolves to `HTMLSpanElement`. */
  ref?: React.Ref<HTMLSpanElement>;
}

export interface IconImageProps extends IconBaseProps {
  /** A public SVG path or imported asset URL. */
  src: string;
  /** Alt text for the `<img>` element. */
  alt?: string;
  /** N/A for image icons. */
  strokeWidth?: never;
  /** React 19 ref-as-prop — resolves to `HTMLImageElement`. */
  ref?: React.Ref<HTMLImageElement>;
}

export type IconProps = IconComponentProps | IconImageProps;

// ── Helpers ───────────────────────────────────────────────────────────────────

function isComponentSrc(
  src: IconProps["src"]
): src is IconComponentProps["src"] {
  return typeof src === "function" || (typeof src === "object" && src !== null);
}

/** Returns a Tailwind class for known sizes, or a fallback inline style for arbitrary ones. */
function resolveSize(size: IconSize): {
  cls: string | undefined;
  style: React.CSSProperties | undefined;
} {
  const cls = SIZE_MAP[size as number];
  return cls
    ? { cls, style: undefined }
    : { cls: undefined, style: { width: size, height: size } };
}

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * ### `<Icon>`
 *
 * A fully type-safe, polymorphic icon primitive.
 * Uses React 19 **ref-as-prop** — no `forwardRef` wrapper needed.
 * Styled entirely with Tailwind; color is inherited via `text-*` on the parent or `className`.
 *
 * ```tsx
 * // Lucide / SVG component
 * import { Heart } from "@/icons"
 * <Icon src={Heart} size={20} strokeWidth={1.5} className="text-violet-500" />
 *
 * // SVG file path / imported asset URL
 * import { InstagramIcon } from "@/icons"
 * <Icon src={InstagramIcon} size={32} alt="Instagram" />
 * ```
 */
function Icon(props: IconComponentProps): React.ReactElement;
function Icon(props: IconImageProps): React.ReactElement;
function Icon({
  src,
  size = 24,
  className,
  label,
  // component-only
  strokeWidth = 2,
  // image-only
  alt = "icon",
  // React 19 ref-as-prop (no forwardRef)
  ref,
  ...rest
}: IconProps & { ref?: React.Ref<HTMLSpanElement | HTMLImageElement> }) {
  const { cls: sizeClass, style: sizeStyle } = resolveSize(size);

  // ── Lucide / SVG component ──────────────────────────────────────────────────
  if (isComponentSrc(src)) {
    const SvgIcon = src;
    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={cn(
          "inline-flex items-center justify-center shrink-0",
          className
        )}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        role={label ? "img" : undefined}
        {...(rest as React.HTMLAttributes<HTMLSpanElement>)}
      >
        <SvgIcon
          className={cn(sizeClass, "text-current")}
          style={sizeStyle}
          strokeWidth={strokeWidth}
          aria-hidden="true"
          focusable="false"
        />
      </span>
    );
  }

  // ── SVG image / public path ─────────────────────────────────────────────────
  return (
    <img
      ref={ref as React.Ref<HTMLImageElement>}
      src={src}
      alt={label ?? alt}
      aria-hidden={label ? undefined : alt === "" ? true : undefined}
      className={cn("inline-flex shrink-0 object-contain", sizeClass, className)}
      style={sizeStyle}
      {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)}
    />
  );
}

Icon.displayName = "Icon";

export { Icon };
export type { IconSize };