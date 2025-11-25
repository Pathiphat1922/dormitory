'use client';

import React, { useState } from 'react';

const Icons = {
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  ),
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
};

export default function ForgetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [forgetForm, setForgetForm] = useState({ email: '' });

  const handleForgetPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!forgetForm.email) {
      alert('กรุณากรอกอีเมล');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('ส่งลิงค์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 p-4 bg-green-600/20 border border-green-500/50 rounded-lg flex items-center gap-3 animate-in">
            <Icons.Check />
            <span className="text-sm text-green-300">{successMessage}</span>
          </div>
        )}

        <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <button
            className="flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-6 transition"
          >
            <Icons.ArrowLeft />
            <span className="text-sm font-medium">กลับไปเข้าสู่ระบบ</span>
          </button>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-100 mb-2">ลืมรหัสผ่าน</h2>
            <p className="text-sm text-slate-400">ใส่อีเมลของคุณเพื่อรับลิงค์รีเซ็ตรหัสผ่าน</p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">อีเมล</label>
              <div className="relative">
                <Icons.Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={forgetForm.email}
                  onChange={(e) => setForgetForm({ ...forgetForm, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">เราจะส่งลิงค์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณ</p>
            </div>

            <button
              onClick={handleForgetPassword}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? 'กำลังประมวลผล...' : 'ส่งลิงค์รีเซ็ต'}
            </button>
          </div>

          <div className="p-4 bg-slate-700/30 border border-slate-600 rounded-lg text-center">
            <p className="text-xs text-slate-300">
              ไม่ได้รับอีเมล? ลองตรวจสอบโฟลเดอร์ spam หรือ{' '}
              <button
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                สมัครสมาชิกใหม่
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}