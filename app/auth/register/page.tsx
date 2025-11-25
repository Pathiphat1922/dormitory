'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Icons = {
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  Users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Bed: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 4v16"></path>
      <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
      <path d="M2 17h20"></path>
      <path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path>
    </svg>
  ),
  DollarSign: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  ),
  Plus: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  ),
  CheckCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  LogOut: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  ),
};

interface Room {
  id: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  tenant: string;
  price: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
}

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // ตรวจสอบ token จาก cookie
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='))
      ?.split('=')[1];

    // ถ้าไม่มี token ให้ redirect ไปหน้า login
    if (!token) {
      router.push('/auth/login');
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = 'authToken=; path=/; max-age=0';
    router.push('/auth/login');
  };

  const stats = [
    { label: 'ห้องทั้งหมด', value: '5', icon: 'Bed', change: '+0%' },
    { label: 'ห้องว่าง', value: '2', icon: 'CheckCircle', change: '-20%' },
    { label: 'ผู้เช่า', value: '3', icon: 'Users', change: '+12%' },
    { label: 'รายได้เดือนนี้', value: '13,400', icon: 'DollarSign', change: '+8%' },
  ];

  const navItems = [
    { icon: 'Home', label: 'แดชบอร์ด', id: 'dashboard' },
    { icon: 'Bed', label: 'จัดการห้องพัก', id: 'rooms' },
    { icon: 'Users', label: 'ผู้เช่า', id: 'tenants' },
  ];

  const IconComponent = ({ name }: { name: string }) => {
    const Component = Icons[name as keyof typeof Icons];
    return Component ? <Component /> : null;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg lg:hidden"
            >
              {sidebarOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white">
                <Icons.Home />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-100">ระบบจัดการหอพัก</h1>
                <p className="text-xs text-slate-300">Dormitory Management System</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Icons.Search />
              </div>
              <input
                type="text"
                placeholder="ค้นหาห้อง, ผู้เช่า..."
                className="pl-10 pr-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 w-64"
              />
            </div>
            <button className="relative p-2 hover:bg-slate-800 rounded-lg">
              <Icons.Bell />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-slate-800 rounded-lg text-red-400 hover:text-red-300 transition"
              title="ออกจากระบบ"
            >
              <Icons.LogOut />
            </button>
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-700 transition-transform duration-300 pt-16 lg:pt-0`}>
          <nav className="p-4 space-y-2 h-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-slate-300 hover:bg-slate-800"
              >
                <IconComponent name={item.icon} />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center text-white">
                    <IconComponent name={stat.icon} />
                  </div>
                  <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-slate-300 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-100">
                  {stat.label.includes('รายได้') ? '฿' : ''}{stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h2 className="text-lg font-bold text-slate-100 mb-4">ยินดีต้อนรับกลับมา!</h2>
            <p className="text-slate-300">
              คุณได้เข้าสู่ระบบจัดการหอพักเรียบร้อยแล้ว คลิกปุ่มออกจากระบบ (LogOut) ที่มุมขวาบนเพื่อออกจากระบบ
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}