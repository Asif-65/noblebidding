import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";
/** Background the button sits on — adjusts outline/ghost contrast. */
type Tone = "ink" | "paper";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  tone?: Tone;
  iconLeft?: string;
  iconRight?: string;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type AsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };
type AsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

type ButtonProps = AsButton | AsLink;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-control font-medium leading-none transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass disabled:cursor-not-allowed disabled:opacity-50";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

function variantClasses(variant: Variant, tone: Tone): string {
  if (variant === "primary") return "bg-brass text-ink hover:bg-brass-dim hover:text-ink";
  if (variant === "outline") {
    return tone === "ink"
      ? "border border-white/25 text-mist hover:bg-white/10"
      : "border border-ink/20 text-ink hover:bg-ink/[0.04]";
  }
  // ghost
  return tone === "ink" ? "text-mist hover:bg-white/10" : "text-ink hover:bg-ink/[0.04]";
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    tone = "paper",
    iconLeft,
    iconRight,
    fullWidth,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    base,
    sizes[size],
    variantClasses(variant, tone),
    fullWidth && "w-full",
    className,
  );

  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={18} />}
      {children}
      {iconRight && (
        <Icon
          name={iconRight}
          size={18}
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href } = props;
    const isExternal = /^(https?:|tel:|mailto:)/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
