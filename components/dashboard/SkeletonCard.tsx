"use client";

import React from "react";

/**
 * 1. Summary Card Skeleton
 * Optimized for both Light and Dark themes.
 */
export const SkeletonCard = () => (
  <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 animate-pulse shadow-sm h-32">
    <div className="h-3 w-20 bg-gray-200 dark:bg-slate-700 rounded-full mb-4"></div>
    <div className="h-8 w-32 bg-gray-300 dark:bg-slate-600 rounded-xl mb-2"></div>
    <div className="h-3 w-24 bg-gray-100 dark:bg-slate-800 rounded-full"></div>
  </div>
);

/**
 * 2. Large Bar/Line Chart Skeleton
 * Provides a visual structure for data visualization components.
 */
export const SkeletonChartLarge = () => (
  <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 animate-pulse h-[350px] w-full shadow-sm">
    <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded-full mb-8"></div>
    <div className="h-56 w-full bg-gray-50 dark:bg-slate-950 rounded-2xl flex items-end gap-2 p-4">
      <div className="h-20 w-full bg-gray-100 dark:bg-slate-800 rounded-t-lg"></div>
      <div className="h-40 w-full bg-gray-200 dark:bg-slate-700 rounded-t-lg"></div>
      <div className="h-32 w-full bg-gray-100 dark:bg-slate-800 rounded-t-lg"></div>
      <div className="h-48 w-full bg-gray-200 dark:bg-slate-700 rounded-t-lg"></div>
      <div className="h-24 w-full bg-gray-100 dark:bg-slate-800 rounded-t-lg"></div>
    </div>
  </div>
);

/**
 * 3. Pie/Round Chart Skeleton
 * Centered design to mimic circular data representation.
 */
export const SkeletonChartRound = () => (
  <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 animate-pulse h-[350px] w-full shadow-sm flex flex-col items-center">
    <div className="h-4 w-24 bg-gray-200 dark:bg-slate-700 rounded-full self-start mb-12"></div>
    {/* Circle part with darker border in dark mode */}
    <div className="h-40 w-40 bg-gray-100 dark:bg-slate-800 rounded-full border-8 border-gray-200 dark:border-slate-700"></div>
    <div className="mt-8 space-y-3 w-full px-4">
      <div className="h-3 w-full bg-gray-50 dark:bg-slate-800 rounded-full"></div>
      <div className="h-3 w-2/3 bg-gray-50 dark:bg-slate-800 rounded-full"></div>
    </div>
  </div>
);

/**
 * 4. Transaction Table Skeleton
 * Represents row-based data layout.
 */
export const SkeletonTable = () => (
  <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 animate-pulse p-6">
    <div className="h-4 w-40 bg-gray-200 dark:bg-slate-700 rounded-full mb-6"></div>
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="flex gap-4 py-4 border-b border-gray-50 dark:border-slate-800"
      >
        <div className="h-4 w-full bg-gray-50 dark:bg-slate-800 rounded"></div>
        <div className="h-4 w-24 bg-gray-100 dark:bg-slate-700 rounded"></div>
      </div>
    ))}
  </div>
);
