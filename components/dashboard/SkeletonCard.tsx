// "use client";

// import React, { useState, useEffect } from "react";

// // ১. SkeletonCard-কে export করুন যাতে অন্য পেজেও (যেমন Transactions বা Home) এটি ব্যবহার করা যায়
// export const SkeletonCard = () => (
//   <div className="p-4 md:p-6 bg-white rounded-3xl border border-gray-100 animate-pulse shadow-sm">
//     <div className="h-4 w-24 bg-gray-200 rounded-full mb-4"></div>
//     <div className="h-8 w-32 bg-gray-300 rounded-xl"></div>
//   </div>
// );

// const DashboardPage = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="space-y-6 animate-in fade-in duration-700">
//       {/* কার্ড সেকশন */}
//       {isLoading ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <SkeletonCard />
//           <SkeletonCard />
//           <SkeletonCard />
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-medium">
//           <div className="p-6 bg-black text-white rounded-3xl shadow-lg transition-transform hover:scale-[1.02]">
//             <p className="opacity-70 uppercase text-[10px] tracking-widest mb-1">
//               Total Balance
//             </p>
//             <h3 className="text-2xl font-bold">$12,500.00</h3>
//           </div>
//           <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm transition-transform hover:scale-[1.02]">
//             <p className="text-gray-400 uppercase text-[10px] tracking-widest mb-1">
//               Total Income
//             </p>
//             <h3 className="text-2xl font-bold text-green-600">$8,200.00</h3>
//           </div>
//           <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm transition-transform hover:scale-[1.02]">
//             <p className="text-gray-400 uppercase text-[10px] tracking-widest mb-1">
//               Total Expense
//             </p>
//             <h3 className="text-2xl font-bold text-red-600">$3,150.00</h3>
//           </div>
//         </div>
//       )}

//       {/* বাকি চার্ট বা টেবিল এখানে থাকবে */}
//     </div>
//   );
// };

// // ২. ড্যাশবোর্ড পেজকে অবশ্যই default export হিসেবে রাখতে হবে
// export default DashboardPage;

"use client";

import React from "react";

// 1. Summary Card-er jonno (Balance, Income, Expense)
export const SkeletonCard = () => (
  <div className="p-6 bg-white rounded-3xl border border-gray-100 animate-pulse shadow-sm h-32">
    <div className="h-3 w-20 bg-gray-200 rounded-full mb-4"></div>
    <div className="h-8 w-32 bg-gray-300 rounded-xl mb-2"></div>
    <div className="h-3 w-24 bg-gray-100 rounded-full"></div>
  </div>
);

// 2. Balance Chart (Large Bar/Line Chart)-er jonno
export const SkeletonChartLarge = () => (
  <div className="p-6 bg-white rounded-3xl border border-gray-100 animate-pulse h-[350px] w-full shadow-sm">
    <div className="h-4 w-32 bg-gray-200 rounded-full mb-8"></div>
    <div className="h-56 w-full bg-gray-50 rounded-2xl flex items-end gap-2 p-4">
      <div className="h-20 w-full bg-gray-100 rounded-t-lg"></div>
      <div className="h-40 w-full bg-gray-200 rounded-t-lg"></div>
      <div className="h-32 w-full bg-gray-100 rounded-t-lg"></div>
      <div className="h-48 w-full bg-gray-200 rounded-t-lg"></div>
      <div className="h-24 w-full bg-gray-100 rounded-t-lg"></div>
    </div>
  </div>
);

// 3. Expense Pie Chart (Round Chart)-er jonno
export const SkeletonChartRound = () => (
  <div className="p-6 bg-white rounded-3xl border border-gray-100 animate-pulse h-[350px] w-full shadow-sm flex flex-col items-center">
    <div className="h-4 w-24 bg-gray-200 rounded-full self-start mb-12"></div>
    <div className="h-40 w-40 bg-gray-100 rounded-full border-8 border-gray-200"></div>
    <div className="mt-8 space-y-3 w-full px-4">
      <div className="h-3 w-full bg-gray-50 rounded-full"></div>
      <div className="h-3 w-2/3 bg-gray-50 rounded-full"></div>
    </div>
  </div>
);

// 4. Transaction Table-er jonno (Jodi lagbe mone koren)
export const SkeletonTable = () => (
  <div className="w-full bg-white rounded-3xl border border-gray-100 animate-pulse p-6">
    <div className="h-4 w-40 bg-gray-200 rounded-full mb-6"></div>
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex gap-4 py-4 border-b border-gray-50">
        <div className="h-4 w-full bg-gray-50 rounded"></div>
        <div className="h-4 w-24 bg-gray-100 rounded"></div>
      </div>
    ))}
  </div>
);
