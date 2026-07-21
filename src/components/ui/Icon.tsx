import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Cable,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cog,
  DollarSign,
  DraftingCompass,
  Facebook,
  Factory,
  File,
  FileSpreadsheet,
  FileText,
  Gauge,
  Handshake,
  HardHat,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Minus,
  Package,
  Phone,
  Plus,
  Quote,
  RadioTower,
  Ruler,
  Send,
  ShieldCheck,
  Star,
  Target,
  Trash2,
  TrendingUp,
  Upload,
  UserCheck,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon registry. Content modules reference icons by string name so copy stays
 * plain, serializable data. Add an import above and an entry here to expose a
 * new icon to the content layer.
 */
export const iconRegistry: Record<string, LucideIcon> = {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Cable,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cog,
  DollarSign,
  DraftingCompass,
  Facebook,
  Factory,
  File,
  FileSpreadsheet,
  FileText,
  Gauge,
  Handshake,
  HardHat,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Minus,
  Package,
  Phone,
  Plus,
  Quote,
  RadioTower,
  Ruler,
  Send,
  ShieldCheck,
  Star,
  Target,
  Trash2,
  TrendingUp,
  Upload,
  UserCheck,
  Users,
  X,
  Zap,
};

export type IconName = keyof typeof iconRegistry;

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
  /** Decorative by default. Pass a label to expose the icon to assistive tech. */
  label?: string;
}

export function Icon({ name, className, size = 20, strokeWidth = 1.75, label }: IconProps) {
  const Component = iconRegistry[name];
  if (!Component) return null;
  return (
    <Component
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
