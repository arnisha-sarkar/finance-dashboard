import { SummaryCardProps } from "@/types/dashboard";

export const SummaryCard = ({
  label,
  value,
  icon: Icon,
  iconColor,
  bgColor,
}: SummaryCardProps) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
    <div className="space-y-1">
      <p className="text-sm font-semibold text-gray-400 uppercase tracking-tight">
        {label}
      </p>
      <h3 className="text-2xl font-bold text-gray-900">
        ${value.toLocaleString()}
      </h3>
    </div>
    <div className={`p-3 ${bgColor} ${iconColor} rounded-xl`}>
      <Icon size={24} strokeWidth={2.5} />
    </div>
  </div>
);
