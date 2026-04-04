"use client";

import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import { User, Shield, LogOut } from "lucide-react";
import toast from "react-hot-toast";

const SettingsPage = () => {
  const { role } = useDashboard();

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

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 italic uppercase tracking-tight">
          Settings
        </h1>
        <p className="text-gray-500 text-sm">
          Manage your account preferences and security.
        </p>
      </div>

      <div className="grid gap-6">
        {/* 1. Profile Section */}
        <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <User size={20} />
            </div>
            <h2 className="font-bold uppercase text-sm tracking-wider text-gray-700">
              Profile Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Arnisha Sarkar"
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all text-sm font-medium text-black"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="arnisha.dev@example.com"
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-400 text-sm font-medium cursor-not-allowed"
                disabled
              />
            </div>
          </div>
        </section>

        {/* 2. Role and Security Section */}
        <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
              <Shield size={20} />
            </div>
            <h2 className="font-bold uppercase text-sm tracking-wider text-gray-700">
              Role & Permissions
            </h2>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Current Access Level
              </p>
              <p className="text-xs text-gray-500">
                Your role is managed by the system administrator.
              </p>
            </div>
            <span className="px-4 py-1 bg-black text-white text-[10px] font-black uppercase rounded-full">
              {role}
            </span>
          </div>
        </section>

        {/* 3. Action Buttons */}
        <div className="flex items-center justify-end gap-4">
          <button className="px-6 py-3 rounded-2xl text-sm font-bold text-gray-500 hover:bg-gray-100 transition-all">
            Discard
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-black text-white rounded-2xl text-sm font-bold shadow-lg hover:bg-gray-800 active:scale-95 transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="pt-8 border-t border-gray-100">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest hover:bg-red-50 p-3 rounded-xl transition-all"
        >
          <LogOut size={16} />
          Sign Out from Device
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
