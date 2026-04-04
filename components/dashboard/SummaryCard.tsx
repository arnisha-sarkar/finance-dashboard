import { SummaryCardProps } from "@/types/dashboard";

export const SummaryCard = ({
  label,
  value,
  icon: Icon,
  iconColor,
  bgColor,
}: SummaryCardProps) => (
  /* ১. ব্যাকগ্রাউন্ড bg-card-bg এবং বর্ডার border-border-custom করা হয়েছে */
  <div className="bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm flex items-center justify-between hover:shadow-md transition-all duration-300">
    <div className="space-y-1">
      {/* ২. লেবেলের জন্য text-slate-400 এবং ডার্ক মোডেও এটি ঠিক থাকবে */}
      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
        {label}
      </p>
      {/* ৩. ভ্যালুর জন্য text-foreground ব্যবহার করা হয়েছে */}
      <h3 className="text-2xl font-black text-foreground tracking-tighter transition-colors duration-300">
        ${value.toLocaleString()}
      </h3>
    </div>

    {/* ৪. আইকন বক্সটিকে ডার্ক মোডে গ্লো করানোর জন্য dark:bg-opacity-20 যোগ করা হয়েছে */}
    <div
      className={`p-4 ${bgColor} ${iconColor} rounded-2xl bg-opacity-100 dark:bg-opacity-20 transition-colors`}
    >
      <Icon size={24} strokeWidth={2.5} />
    </div>
  </div>
);
