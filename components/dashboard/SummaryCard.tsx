import { SummaryCardProps } from "@/types/dashboard";

/**
 * SummaryCard: A reusable metric card component.
 * Displays key financial figures with dynamic icons and theme-aware styling.
 */
export const SummaryCard = ({
  label,
  value,
  icon: Icon,
  iconColor,
  bgColor,
}: SummaryCardProps) => (
  /* Utilizes dynamic background and border variables for smooth Dark/Light mode transitions */
  <div className="bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm flex items-center justify-between hover:shadow-md transition-all duration-300">
    <div className="space-y-1">
      {/* Label styling with uppercase and wide tracking for a professional dashboard look */}
      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
        {label}
      </p>

      {/* Formats the numeric value with local currency separators for readability */}
      <h3 className="text-2xl font-black text-foreground tracking-tighter transition-colors duration-300">
        ${Number(value).toLocaleString()}
      </h3>
    </div>

    {/* Icon Container: Uses high opacity in light mode and subtle glow (20% opacity) in dark mode.
        The transition-colors ensures a smooth aesthetic shift when toggling themes.
    */}
    <div
      className={`p-4 ${bgColor} ${iconColor} rounded-2xl bg-opacity-100 dark:bg-opacity-20 transition-colors`}
    >
      <Icon size={24} strokeWidth={2.5} />
    </div>
  </div>
);
