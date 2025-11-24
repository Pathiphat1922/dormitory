'use client';

import React, { useState } from 'react';

// Icons Component
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
  ArrowLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  ),
  Droplet: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  AlertCircle: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
};

interface Room {
  id: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  tenant: string;
  price: number;
  dueDate: string;
  waterBill: number;
  electricBill: number;
  outstandingBalance: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  phone: string;
  moveInDate: string;
}

export default function DormitoryManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showOutstandingOnly, setShowOutstandingOnly] = useState(false);

  // ข้อมูลห้องพัก 10 ห้อง
  const rooms: Room[] = [
    { id: 'A101', status: 'occupied', tenant: 'สมชาย ใจดี', price: 3000, dueDate: '2024-12-01', waterBill: 150, electricBill: 450, outstandingBalance: 0, paymentStatus: 'paid', phone: '081-234-5678', moveInDate: '2024-01-15' },
    { id: 'A102', status: 'vacant', tenant: '-', price: 3000, dueDate: '-', waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid', phone: '-', moveInDate: '-' },
    { id: 'A103', status: 'occupied', tenant: 'สมหญิง สวยงาม', price: 3000, dueDate: '2024-11-28', waterBill: 200, electricBill: 380, outstandingBalance: 3580, paymentStatus: 'overdue', phone: '082-345-6789', moveInDate: '2024-03-10' },
    { id: 'B201', status: 'occupied', tenant: 'วิชัย มั่นคง', price: 3500, dueDate: '2024-12-05', waterBill: 180, electricBill: 520, outstandingBalance: 0, paymentStatus: 'paid', phone: '083-456-7890', moveInDate: '2024-02-20' },
    { id: 'B202', status: 'maintenance', tenant: '-', price: 3500, dueDate: '-', waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid', phone: '-', moveInDate: '-' },
    { id: 'B203', status: 'vacant', tenant: '-', price: 3500, dueDate: '-', waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid', phone: '-', moveInDate: '-' },
    { id: 'C301', status: 'occupied', tenant: 'ประยุทธ์ รักสะอาด', price: 3200, dueDate: '2024-12-03', waterBill: 170, electricBill: 420, outstandingBalance: 0, paymentStatus: 'paid', phone: '084-567-8901', moveInDate: '2024-04-05' },
    { id: 'C302', status: 'occupied', tenant: 'สุดา แสงจันทร์', price: 3200, dueDate: '2024-12-01', waterBill: 160, electricBill: 390, outstandingBalance: 3750, paymentStatus: 'pending', phone: '085-678-9012', moveInDate: '2024-05-18' },
    { id: 'C303', status: 'occupied', tenant: 'อนุชา ยิ้มแย้ม', price: 3200, dueDate: '2024-12-10', waterBill: 190, electricBill: 480, outstandingBalance: 0, paymentStatus: 'paid', phone: '086-789-0123', moveInDate: '2024-06-22' },
    { id: 'D401', status: 'occupied', tenant: 'มานี เงินงาม', price: 3800, dueDate: '2024-11-25', waterBill: 220, electricBill: 550, outstandingBalance: 7600, paymentStatus: 'overdue', phone: '087-890-1234', moveInDate: '2024-07-30' },
  ];

  const stats = [
    { label: 'ห้องทั้งหมด', value: '10', icon: 'Bed', color: 'bg-blue-500', change: '+0%' },
    { label: 'ห้องว่าง', value: '2', icon: 'CheckCircle', color: 'bg-green-500', change: '-20%' },
    { label: 'ผู้เช่า', value: '7', icon: 'Users', color: 'bg-purple-500', change: '+12%' },
    { label: 'รายได้เดือนนี้', value: '22,400', icon: 'DollarSign', color: 'bg-yellow-500', change: '+8%' },
  ];

  // คำนวณยอดค้างชำระทั้งหมด
  const totalOutstanding = rooms.reduce((sum, room) => sum + room.outstandingBalance, 0);
  const overdueRooms = rooms.filter(room => room.paymentStatus === 'overdue').length;

  const recentActivities = [
    { action: 'ห้อง A101 ชำระค่าเช่าแล้ว', time: '5 นาทีที่แล้ว', type: 'payment' },
    { action: 'ผู้เช่าใหม่เข้าพักห้อง C102', time: '1 ชั่วโมงที่แล้ว', type: 'checkin' },
    { action: 'แจ้งซ่อมห้อง B202', time: '2 ชั่วโมงที่แล้ว', type: 'maintenance' },
    { action: 'ห้อง D401 ค้างชำระเกิน 7 วัน', time: '3 ชั่วโมงที่แล้ว', type: 'warning' },
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

  const getPaymentStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      paid: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      overdue: 'bg-red-100 text-red-800 border-red-200',
    };
    const labels: Record<string, string> = {
      paid: 'ชำระแล้ว',
      pending: 'รอชำระ',
      overdue: 'เกินกำหนด',
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

  const handleRoomClick = (room: Room) => {
    if (room.status !== 'vacant') {
      setSelectedRoom(room);
    }
  };

  const handleCloseDetail = () => {
    setSelectedRoom(null);
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
          {!selectedRoom ? (
            <>
              {/* Outstanding Balance Alert - โดดเด่นที่สุด */}
              {totalOutstanding > 0 && (
                <div className="mb-6 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 sm:p-8 text-white shadow-2xl border-4 border-red-300">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icons.AlertCircle />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-xl sm:text-2xl font-bold">⚠️ แจ้งเตือนยอดค้างชำระ</h2>
                      </div>
                      <p className="text-red-100 text-sm sm:text-base mb-4">มีห้องที่ค้างชำระเงินทั้งหมด {overdueRooms} ห้อง</p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-6">
                        <div>
                          <p className="text-red-100 text-xs sm:text-sm mb-1">ยอดค้างชำระทั้งหมด</p>
                          <p className="text-4xl sm:text-5xl font-black">
                            ฿{totalOutstanding.toLocaleString()}
                          </p>
                        </div>
                        <button 
                          onClick={() => setShowOutstandingOnly(!showOutstandingOnly)}
                          className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg"
                        >
                          {showOutstandingOnly ? 'แสดงทั้งหมด' : 'ดูรายละเอียด →'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
                  <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-gray-900">
                        {showOutstandingOnly ? 'ห้องที่ค้างชำระ' : 'รายการห้องพัก'}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {showOutstandingOnly 
                          ? `แสดงห้องที่มียอดค้างชำระ ${rooms.filter(r => r.outstandingBalance > 0).length} ห้อง`
                          : 'คลิกเพื่อดูรายละเอียด'
                        }
                      </p>
                    </div>
                    <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      <Icons.Plus />
                      <span className="hidden sm:inline">เพิ่มห้อง</span>
                    </button>
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ห้อง</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">สถานะ</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ผู้เช่า</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ค่าเช่า</th>
                          {showOutstandingOnly && (
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ค้างชำระ</th>
                          )}
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">การชำระ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {(showOutstandingOnly ? rooms.filter(r => r.outstandingBalance > 0) : rooms).map((room) => (
                          <tr 
                            key={room.id} 
                            onClick={() => handleRoomClick(room)}
                            className={`transition-colors ${room.status !== 'vacant' ? 'hover:bg-blue-50 cursor-pointer' : 'opacity-60'} ${room.outstandingBalance > 0 && showOutstandingOnly ? 'bg-red-50' : ''}`}
                          >
                            <td className="px-6 py-4">
                              <span className="font-semibold text-gray-900">{room.id}</span>
                            </td>
                            <td className="px-6 py-4">
                              {getStatusBadge(room.status)}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">{room.tenant}</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">฿{room.price.toLocaleString()}</td>
                            {showOutstandingOnly && (
                              <td className="px-6 py-4">
                                <span className="text-sm font-bold text-red-600">฿{room.outstandingBalance.toLocaleString()}</span>
                              </td>
                            )}
                            <td className="px-6 py-4">
                              {room.status === 'occupied' && getPaymentStatusBadge(room.paymentStatus)}
                              {room.status !== 'occupied' && <span className="text-xs text-gray-400">-</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden divide-y divide-gray-200">
                    {(showOutstandingOnly ? rooms.filter(r => r.outstandingBalance > 0) : rooms).map((room) => (
                      <div
                        key={room.id}
                        onClick={() => handleRoomClick(room)}
                        className={`p-4 transition-colors ${room.status !== 'vacant' ? 'active:bg-blue-50 cursor-pointer' : 'opacity-60'} ${room.outstandingBalance > 0 && showOutstandingOnly ? 'bg-red-50' : ''}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">ห้อง {room.id}</h3>
                            <p className="text-sm text-gray-600">{room.tenant}</p>
                          </div>
                          {getStatusBadge(room.status)}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">ค่าเช่า</p>
                            <p className="text-base font-semibold text-gray-900">฿{room.price.toLocaleString()}</p>
                            {showOutstandingOnly && room.outstandingBalance > 0 && (
                              <>
                                <p className="text-xs text-red-600 mt-2">ค้างชำระ</p>
                                <p className="text-base font-bold text-red-600">฿{room.outstandingBalance.toLocaleString()}</p>
                              </>
                            )}
                          </div>
                          {room.status === 'occupied' && (
                            <div className="text-right">
                              {getPaymentStatusBadge(room.paymentStatus)}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-xl border border-gray-200">
                  <div className="p-4 sm:p-6 border-b border-gray-200">
                    <h2 className="text-base sm:text-lg font-bold text-gray-900">กิจกรรมล่าสุด</h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">อัพเดทแบบเรียลไทม์</p>
                  </div>

                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    {recentActivities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          activity.type === 'payment' ? 'bg-green-500' :
                          activity.type === 'checkin' ? 'bg-blue-500' :
                          activity.type === 'maintenance' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                            <Icons.Clock />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 sm:p-4 border-t border-gray-200">
                    <button className="w-full text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium">
                      ดูกิจกรรมทั้งหมด →
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Room Detail View */
            <div className="max-w-4xl mx-auto">
              <button
                onClick={handleCloseDetail}
                className="flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icons.ArrowLeft />
                <span>กลับไปรายการห้อง</span>
              </button>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 sm:p-6 text-white">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">ห้อง {selectedRoom.id}</h1>
                      <p className="text-sm sm:text-base text-blue-100">รายละเอียดห้องพักและการชำระเงิน</p>
                    </div>
                    <div className="self-start sm:self-auto">
                      {getPaymentStatusBadge(selectedRoom.paymentStatus)}
                    </div>
                  </div>
                </div>

                {/* Tenant Info */}
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">ข้อมูลผู้เช่า</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                        {selectedRoom.tenant.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500">ชื่อผู้เช่า</p>
                        <p className="font-semibold text-sm sm:text-base text-gray-900 truncate">{selectedRoom.tenant}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                        <Icons.Phone />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500">เบอร์โทรศัพท์</p>
                        <p className="font-semibold text-sm sm:text-base text-gray-900">{selectedRoom.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                        <Icons.Calendar />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500">วันที่เข้าพัก</p>
                        <p className="font-semibold text-sm sm:text-base text-gray-900">{selectedRoom.moveInDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                        <Icons.DollarSign />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500">ค่าเช่าต่อเดือน</p>
                        <p className="font-semibold text-sm sm:text-base text-gray-900">฿{selectedRoom.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">รายละเอียดค่าใช้จ่ายประจำเดือน</h2>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* Room Rent */}
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          <Icons.Home />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm sm:text-base text-gray-900">ค่าเช่าห้อง</p>
                          <p className="text-xs text-gray-500">รายเดือน</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-gray-900 flex-shrink-0">฿{selectedRoom.price.toLocaleString()}</p>
                    </div>

                    {/* Water Bill */}
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          <Icons.Droplet />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm sm:text-base text-gray-900">ค่าน้ำประปา</p>
                          <p className="text-xs text-gray-500">เดือนนี้</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-gray-900 flex-shrink-0">฿{selectedRoom.waterBill.toLocaleString()}</p>
                    </div>

                    {/* Electric Bill */}
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          <Icons.Zap />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm sm:text-base text-gray-900">ค่าไฟฟ้า</p>
                          <p className="text-xs text-gray-500">เดือนนี้</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-gray-900 flex-shrink-0">฿{selectedRoom.electricBill.toLocaleString()}</p>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
                      <div>
                        <p className="font-bold text-gray-900 text-base sm:text-lg">รวมทั้งหมด</p>
                        <p className="text-xs text-gray-500">ค่าใช้จ่ายประจำเดือนนี้</p>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-purple-600">
                        ฿{(selectedRoom.price + selectedRoom.waterBill + selectedRoom.electricBill).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Outstanding Balance */}
                {selectedRoom.outstandingBalance > 0 && (
                  <div className="p-4 sm:p-6 border-b border-gray-200 bg-red-50">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Icons.AlertCircle />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-red-900 mb-1">ยอดค้างชำระ</h3>
                        <p className="text-xs sm:text-sm text-red-700 mb-3">
                          มีค่าใช้จ่ายที่ค้างชำระจากเดือนก่อนหน้า
                        </p>
                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-red-200">
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">ยอดค้างชำระทั้งหมด</p>
                          <p className="text-2xl sm:text-3xl font-bold text-red-600">
                            ฿{selectedRoom.outstandingBalance.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Status Summary */}
                <div className="p-4 sm:p-6">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">สถานะการชำระเงิน</h2>
                  
                  {selectedRoom.paymentStatus === 'paid' && (
                    <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Icons.CheckCircle />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-green-900">ชำระเงินครบถ้วนแล้ว</p>
                        <p className="text-xs sm:text-sm text-green-700">ขอบคุณที่ชำระเงินตรงเวลา</p>
                      </div>
                    </div>
                  )}

                  {selectedRoom.paymentStatus === 'pending' && (
                    <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Icons.Clock />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-yellow-900">รอการชำระเงิน</p>
                        <p className="text-xs sm:text-sm text-yellow-700">กำหนดชำระภายในวันที่ {selectedRoom.dueDate}</p>
                        <p className="text-xs sm:text-sm font-medium text-yellow-800 mt-2 break-words">
                          ยอดที่ต้องชำระ: ฿{(selectedRoom.price + selectedRoom.waterBill + selectedRoom.electricBill + selectedRoom.outstandingBalance).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedRoom.paymentStatus === 'overdue' && (
                    <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Icons.AlertCircle />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-red-900">เกินกำหนดชำระ</p>
                        <p className="text-xs sm:text-sm text-red-700">เกินกำหนดชำระตั้งแต่วันที่ {selectedRoom.dueDate}</p>
                        <p className="text-xs sm:text-sm font-medium text-red-800 mt-2 break-words">
                          ยอดที่ต้องชำระทันที: ฿{(selectedRoom.price + selectedRoom.waterBill + selectedRoom.electricBill + selectedRoom.outstandingBalance).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors">
                      บันทึกการชำระเงิน
                    </button>
                    <button className="px-4 sm:px-6 py-3 border border-gray-300 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors">
                      พิมพ์ใบเสร็จ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}