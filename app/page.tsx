'use client';

import React, { useState } from 'react';

// Icons Component (ใช้แทน lucide-react)
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
  Calendar: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6m7.071-13.071l-4.243 4.243m-5.656 5.656l-4.243 4.243m13.071 0l-4.243-4.243m-5.656-5.656l-4.243-4.243"></path>
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
  Clock: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  TrendingUp: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
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
};

export default function DormitoryManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // ข้อมูลตัวอย่าง
  const stats = [
    { label: 'ห้องทั้งหมด', value: '120', icon: 'Bed', color: 'bg-blue-500', change: '+0%' },
    { label: 'ห้องว่าง', value: '25', icon: 'CheckCircle', color: 'bg-green-500', change: '-5%' },
    { label: 'ผู้เช่า', value: '95', icon: 'Users', color: 'bg-purple-500', change: '+8%' },
    { label: 'รายได้เดือนนี้', value: '285,000', icon: 'DollarSign', color: 'bg-yellow-500', change: '+12%' },
  ];

  const rooms = [
    { id: 'A101', status: 'occupied', tenant: 'สมชาย ใจดี', price: 3000, dueDate: '2024-12-01' },
    { id: 'A102', status: 'vacant', tenant: '-', price: 3000, dueDate: '-' },
    { id: 'A103', status: 'occupied', tenant: 'สมหญิง สวยงาม', price: 3000, dueDate: '2024-11-28' },
    { id: 'B201', status: 'occupied', tenant: 'วิชัย มั่นคง', price: 3500, dueDate: '2024-12-05' },
    { id: 'B202', status: 'maintenance', tenant: '-', price: 3500, dueDate: '-' },
    { id: 'B203', status: 'vacant', tenant: '-', price: 3500, dueDate: '-' },
  ];

  const recentActivities = [
    { action: 'ห้อง A305 ชำระค่าเช่าแล้ว', time: '5 นาทีที่แล้ว', type: 'payment' },
    { action: 'ผู้เช่าใหม่เข้าพักห้อง C102', time: '1 ชั่วโมงที่แล้ว', type: 'checkin' },
    { action: 'แจ้งซ่อมห้อง B204', time: '2 ชั่วโมงที่แล้ว', type: 'maintenance' },
    { action: 'ห้อง D301 แจ้งย้ายออก', time: '3 ชั่วโมงที่แล้ว', type: 'checkout' },
  ];

  const navItems = [
    { icon: 'Home', label: 'แดชบอร์ด', id: 'dashboard' },
    { icon: 'Bed', label: 'จัดการห้องพัก', id: 'rooms' },
    { icon: 'Users', label: 'ผู้เช่า', id: 'tenants' },
    { icon: 'DollarSign', label: 'การเงิน', id: 'finance' },
    { icon: 'Calendar', label: 'การนัดหมาย', id: 'appointments' },
    { icon: 'Settings', label: 'ตั้งค่า', id: 'settings' },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      occupied: 'bg-green-100 text-green-800 border-green-200',
      vacant: 'bg-gray-100 text-gray-800 border-gray-200',
      maintenance: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    };
    const labels: Record<string, string> = {
      occupied: 'มีผู้เช่า',
      vacant: 'ว่าง',
      maintenance: 'ซ่อมบำรุง',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const IconComponent = ({ name }: { name: string }) => {
    const Component = Icons[name as keyof typeof Icons];
    return Component ? <Component /> : null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              {sidebarOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                <Icons.Home />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ระบบจัดการหอพัก</h1>
                <p className="text-xs text-gray-500">Dormitory Management System</p>
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
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Icons.Bell />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 pt-16 lg:pt-0`}>
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <IconComponent name={item.icon} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-4 text-white">
              <p className="text-sm font-medium mb-1">อัพเกรดแผน Pro</p>
              <p className="text-xs opacity-90 mb-3">ปลดล็อคฟีเจอร์เพิ่มเติม</p>
              <button className="w-full bg-white text-blue-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
                อัพเกรดเลย
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                    <IconComponent name={stat.icon} />
                  </div>
                  <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stat.label.includes('รายได้') ? '฿' : ''}{stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Room List */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">รายการห้องพัก</h2>
                  <p className="text-sm text-gray-500 mt-1">จัดการห้องพักทั้งหมด</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Icons.Plus />
                  <span className="hidden sm:inline">เพิ่มห้อง</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ห้อง</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">สถานะ</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ผู้เช่า</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ค่าเช่า</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ครบกำหนด</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {rooms.map((room) => (
                      <tr key={room.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-semibold text-gray-900">{room.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(room.status)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">{room.tenant}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">฿{room.price.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{room.dueDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-sm text-gray-600">แสดง 6 จาก 120 ห้อง</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">ก่อนหน้า</button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">ถัดไป</button>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">กิจกรรมล่าสุด</h2>
                <p className="text-sm text-gray-500 mt-1">อัพเดทแบบเรียลไทม์</p>
              </div>

              <div className="p-4 space-y-4">
                {recentActivities.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'payment' ? 'bg-green-500' :
                      activity.type === 'checkin' ? 'bg-blue-500' :
                      activity.type === 'maintenance' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Icons.Clock />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium">
                  ดูกิจกรรมทั้งหมด →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <div className="mx-auto mb-3 text-gray-400 group-hover:text-blue-500 flex justify-center">
                <Icons.Plus />
              </div>
              <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600">เพิ่มผู้เช่าใหม่</p>
            </button>
            <button className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-green-500 hover:bg-green-50 transition-all group">
              <div className="mx-auto mb-3 text-gray-400 group-hover:text-green-500 flex justify-center">
                <Icons.DollarSign />
              </div>
              <p className="text-sm font-medium text-gray-600 group-hover:text-green-600">บันทึกการชำระเงิน</p>
            </button>
            <button className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-purple-500 hover:bg-purple-50 transition-all group">
              <div className="mx-auto mb-3 text-gray-400 group-hover:text-purple-500 flex justify-center">
                <Icons.TrendingUp />
              </div>
              <p className="text-sm font-medium text-gray-600 group-hover:text-purple-600">ดูรายงานรายได้</p>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}