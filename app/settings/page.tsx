"use client";

import React, { useState, useEffect } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { User, Shield, LogOut } from "lucide-react";
import toast from "react-hot-toast";

/**
 * SettingsSkeleton Component
 * Defined outside the main component to follow React best practices
 * and avoid "Cannot create components during render" error.
 */
const SettingsSkeleton = () => (
  <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-pulse">
    {/* Header Skeleton */}
    <div className="space-y-3">
      <div className="h-10 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
      <div className="h-4 w-64 bg-slate-100 dark:bg-slate-800 rounded"></div>
    </div>

    <div className="grid gap-6">
      {/* Profile Card Skeleton */}
      <section className="bg-card-bg p-6 rounded-[32px] border border-border-custom space-y-8">
        <div className="flex items-center gap-3 border-b border-border-custom pb-4">
          <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
          <div className="h-5 w-40 bg-slate-100 dark:bg-slate-800 rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="h-3 w-20 bg-slate-100 dark:bg-slate-800 rounded"></div>
            <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
          </div>
          <div className="space-y-3">
            <div className="h-3 w-20 bg-slate-100 dark:bg-slate-800 rounded"></div>
            <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Role Card Skeleton */}
      <section className="bg-card-bg p-6 rounded-[32px] border border-border-custom space-y-6">
        <div className="flex items-center gap-3 border-b border-border-custom pb-4">
          <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
          <div className="h-5 w-40 bg-slate-100 dark:bg-slate-800 rounded"></div>
        </div>
        <div className="h-20 w-full bg-slate-100 dark:bg-slate-800 rounded-2xl border border-dashed border-border-custom"></div>
      </section>

      {/* Buttons Skeleton */}
      <div className="flex justify-end gap-4">
        <div className="h-12 w-24 bg-slate-100 dark:bg-slate-800 rounded-2xl"></div>
        <div className="h-12 w-36 bg-slate-200 dark:bg-slate-700 rounded-2xl"></div>
      </div>
    </div>
  </div>
);

const SettingsPage = () => {
  // 1. All hooks must be declared at the very top
  const { role } = useDashboard();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // 2. Action Handlers
  const handleSave = () => {
    toast.success("Settings updated successfully!", {
      style: {
        borderRadius: "12px",
        background: "#1f2937",
        color: "#fff",
      },
    });
  };

  const handleSignOut = () => {
    toast.error("Sign out is disabled in demo mode.");
  };

  /**
   * 3. Conditional Return for Loading State
   * Place this AFTER all hooks to follow the Rules of Hooks.
   */
  if (isLoading) return <SettingsSkeleton />;

  // 4. Main UI Rendering
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500 bg-background text-foreground transition-colors duration-300">
      {/* Section: Page Title and Description */}
      <div>
        <h1 className="text-3xl font-black text-foreground italic uppercase tracking-tight">
          Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Manage your account preferences and security.
        </p>
      </div>

      <div className="grid gap-6">
        {/* 1. Profile Information Section */}
        <section className="bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm space-y-6 transition-all">
          <div className="flex items-center gap-3 border-b border-border-custom pb-4">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
              <User size={20} />
            </div>
            <h2 className="font-bold uppercase text-sm tracking-wider text-slate-700 dark:text-slate-300">
              Profile Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Arnisha Sarkar"
                className="w-full p-3 rounded-xl border border-border-custom bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-bold text-foreground"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="arnisha.dev@example.com"
                className="w-full p-3 rounded-xl border border-border-custom bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500 text-sm font-bold cursor-not-allowed"
                disabled
              />
            </div>
          </div>
        </section>

        {/* 2. Security & Role Section */}
        <section className="bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm space-y-6 transition-all">
          <div className="flex items-center gap-3 border-b border-border-custom pb-4">
            <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
              <Shield size={20} />
            </div>
            <h2 className="font-bold uppercase text-sm tracking-wider text-slate-700 dark:text-slate-300">
              Role & Permissions
            </h2>
          </div>

          <div className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-border-custom">
            <div>
              <p className="text-sm font-bold text-foreground">
                Current Access Level
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Your role is managed by the system administrator.
              </p>
            </div>
            <span className="px-5 py-1.5 bg-foreground text-background text-[10px] font-black uppercase rounded-full shadow-sm">
              {role}
            </span>
          </div>
        </section>

        {/* 3. Action Buttons */}
        <div className="flex items-center justify-end gap-4">
          <button className="px-6 py-3 rounded-2xl text-sm font-bold text-slate-400 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            Discard
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-foreground text-background rounded-2xl text-sm font-black shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Section: Danger Zone */}
      <div className="pt-8 border-t border-border-custom">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-red-500 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-50 dark:hover:bg-red-950/30 px-4 py-3 rounded-2xl transition-all w-fit"
        >
          <LogOut size={16} />
          Sign Out from Device
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
