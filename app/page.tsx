'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
  dueDate: string;
  waterBill: number;
  electricBill: number;
  outstandingBalance: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  phone: string;
  moveInDate: string;
}

export default function DormitoryManagement() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showOutstandingOnly, setShowOutstandingOnly] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const handleLogout = () => {
    console.log('🚪 Logging out...');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('loginTime');
    document.cookie = 'authToken=; path=/; max-age=0';
    router.push('/login');
  };

  const [paymentRoom, setPaymentRoom] = useState<Room | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      if (!isAuthenticated) {
        console.log('🔒 ไม่ผ่านการรับรองความถูกต้อง, กำลังเปลี่ยนเส้นทางไปยังล็อกอิน...');
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  const [roomData, setRoomData] = useState<Room[]>([
    { id: 'A101', status: 'occupied', tenant: 'สมชาย ใจดี', price: 3000, dueDate: '2024-12-01', waterBill: 150, electricBill: 450, outstandingBalance: 0, paymentStatus: 'paid', phone: '081-234-5678', moveInDate: '2024-01-15' },
    { id: 'A102', status: 'vacant', tenant: '-', price: 3000, dueDate: '-', waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid', phone: '-', moveInDate: '-' },
    { id: 'A103', status: 'occupied', tenant: 'สมหญิง สวยงาม', price: 3000, dueDate: '2024-11-28', waterBill: 200, electricBill: 380, outstandingBalance: 3580, paymentStatus: 'overdue', phone: '082-345-6789', moveInDate: '2024-03-10' },
    { id: 'B201', status: 'occupied', tenant: 'วิชัย มั่นคง', price: 3500, dueDate: '2024-12-05', waterBill: 180, electricBill: 520, outstandingBalance: 0, paymentStatus: 'paid', phone: '083-456-7890', moveInDate: '2024-02-20' },
    { id: 'B202', status: 'maintenance', tenant: '-', price: 3500, dueDate: '-', waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid', phone: '-', moveInDate: '-' },
  ]);

  const [income, setIncome] = useState(13400);

  const stats = [
    { label: 'ห้องทั้งหมด', value: roomData.length.toString(), icon: 'Bed', color: 'text-blue-600', bgColor: 'bg-blue-50', gradient: 'from-blue-500 to-indigo-600' },
    { label: 'ห้องว่าง', value: roomData.filter(r => r.status === 'vacant').length.toString(), icon: 'CheckCircle', color: 'text-emerald-600', bgColor: 'bg-emerald-50', gradient: 'from-emerald-500 to-teal-600' },
    { label: 'รายได้เดือนนี้', value: income.toLocaleString(), icon: 'DollarSign', color: 'text-blue-600', bgColor: 'bg-blue-50', gradient: 'from-blue-600 to-cyan-600' },
    { label: 'ยอดค้างชำระ', value: roomData.reduce((sum, r) => sum + r.outstandingBalance, 0).toLocaleString(), icon: 'AlertCircle', color: 'text-red-600', bgColor: 'bg-red-50', gradient: 'from-red-500 to-rose-600' },
  ];

  // Unused variables removed to fix lint
  // const totalOutstanding = rooms.reduce((sum, room) => sum + room.outstandingBalance, 0);
  // const overdueRooms = rooms.filter(room => room.paymentStatus === 'overdue').length;

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

  const openPaymentModal = (room: Room) => {
    setPaymentRoom(room);
    setPaymentModalOpen(true);
  };
  const closePaymentModal = () => {
    setPaymentRoom(null);
    setPaymentModalOpen(false);
  };

  const outstandingRooms = roomData.filter(r => r.outstandingBalance > 0);

  const handleConfirmPayment = () => {
    if (paymentRoom) {
      const totalToPay = paymentRoom.price + paymentRoom.waterBill + paymentRoom.electricBill;

      setRoomData(prev => prev.map(r =>
        r.id === paymentRoom.id
          ? { ...r, outstandingBalance: 0, paymentStatus: 'paid' }
          : r
      ));

      setIncome(prev => prev + totalToPay);

      // Update activity log
      console.log(`✅ Room ${paymentRoom.id} paid ฿${totalToPay.toLocaleString()}`);

      setPaymentModalOpen(false);
      setPaymentRoom(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-500 text-lg">กำลังโหลด...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              {sidebarOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900">
                <Icons.Home />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">ระบบจัดการหอพัก</h1>
                <p className="text-xs text-slate-500">Dormitory Management System</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Icons.Search />
              </div>
              <input
                type="text"
                placeholder="ค้นหาห้อง, ผู้เช่า..."
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64"
              />
            </div>
            <button className="relative p-2 hover:bg-slate-100 rounded-lg">
              <Icons.Bell />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500 hover:text-red-500"
              title="ออกจากระบบ"
            >
              <Icons.LogOut />
              <span className="hidden sm:inline text-sm font-medium">ออกจากระบบ</span>
            </button>
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold text-sm">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transition-transform duration-300 pt-16 lg:pt-0`}>
          <nav className="p-4 space-y-2 h-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSelectedRoom(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id
                  ? 'bg-slate-100 text-blue-600 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <IconComponent name={item.icon} />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          {activeTab === 'dashboard' && !selectedRoom ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group cursor-default relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rounded-bl-full translate-x-8 -translate-y-8" style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
                    <div className="flex items-center gap-5">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${stat.gradient} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <IconComponent name={stat.icon} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.15em] mb-1">{stat.label}</p>
                        <p className="text-3xl font-black text-slate-900 tracking-tight flex items-baseline gap-1">
                          {stat.label.includes('รายได้') || stat.label.includes('ชำระ') ? <span className="text-lg font-bold text-slate-400">฿</span> : ''}
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {outstandingRooms.length ? outstandingRooms.map(r => (
                  <div key={r.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-xs text-slate-500">ห้อง</p>
                        <p className="text-lg font-bold text-slate-900">{r.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">ค้างชำระ</p>
                        <p className="text-lg font-bold text-red-500">฿{r.outstandingBalance.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openPaymentModal(r)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        ชำระเงิน
                      </button>
                      <button
                        onClick={() => { setSelectedRoom(r); setActiveTab('rooms'); }}
                        className="px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-full text-slate-500">ไม่มีห้องที่มียอดค้างชำระ</div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-8">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                    <div>
                      <h2 className="text-xl font-black text-slate-900 tracking-tight">
                        {showOutstandingOnly ? 'ห้องที่ค้างชำระ' : 'รายการห้องพัก'}
                      </h2>
                      <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
                        {showOutstandingOnly
                          ? `แสดงห้องที่มียอดค้างชำระ ${roomData.filter(r => r.outstandingBalance > 0).length} ห้อง`
                          : 'ข้อมูลสถานะห้องพักปัจจุบัน'
                        }
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setShowOutstandingOnly(!showOutstandingOnly)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all uppercase tracking-wider border ${showOutstandingOnly
                          ? 'bg-red-50 text-red-600 border-red-200 shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                      >
                        {showOutstandingOnly ? 'แสดงทั้งหมด' : 'ดูค้างชำระ'}
                      </button>
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-xs font-black shadow-lg shadow-blue-600/20 active:scale-95 uppercase tracking-wider">
                        <Icons.Plus />
                        <span className="hidden sm:inline">เพิ่มห้อง</span>
                      </button>
                    </div>
                  </div>

                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">ห้อง</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">สถานะ</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">ผู้เช่า</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">ค่าเช่า</th>
                          {showOutstandingOnly && (
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">ค้างชำระ</th>
                          )}
                          <th className="px-6 py-4 text-left font-black tracking-widest">การชำระ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {(showOutstandingOnly ? roomData.filter(r => r.outstandingBalance > 0) : roomData).map((room) => (
                          <tr
                            key={room.id}
                            onClick={() => handleRoomClick(room)}
                            className={`transition-colors ${room.status !== 'vacant' ? 'hover:bg-slate-50 cursor-pointer' : 'opacity-60'} ${room.outstandingBalance > 0 && showOutstandingOnly ? 'bg-red-50' : ''}`}
                          >
                            <td className="px-6 py-4">
                              <span className="font-bold text-slate-900">{room.id}</span>
                            </td>
                            <td className="px-6 py-4">
                              {getStatusBadge(room.status)}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">{room.tenant}</td>
                            <td className="px-6 py-4 text-sm font-bold text-slate-900">฿{room.price.toLocaleString()}</td>
                            {showOutstandingOnly && (
                              <td className="px-6 py-4">
                                <span className="text-sm font-bold text-red-600">฿{room.outstandingBalance.toLocaleString()}</span>
                              </td>
                            )}
                            <td className="px-6 py-4">
                              {room.status === 'occupied' && getPaymentStatusBadge(room.paymentStatus)}
                              {room.status !== 'occupied' && <span className="text-xs text-slate-400">-</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="md:hidden divide-y divide-slate-50">
                    {(showOutstandingOnly ? roomData.filter(r => r.outstandingBalance > 0) : roomData).map((room) => (
                      <div
                        key={room.id}
                        onClick={() => handleRoomClick(room)}
                        className={`p-4 transition-colors ${room.status !== 'vacant' ? 'cursor-pointer' : 'opacity-60'} ${room.outstandingBalance > 0 && showOutstandingOnly ? 'bg-red-50' : ''}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">ห้อง {room.id}</h3>
                            <p className="text-sm text-slate-600">{room.tenant}</p>
                          </div>
                          {getStatusBadge(room.status)}
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-slate-500 mb-1">ค่าเช่า</p>
                            <p className="text-base font-bold text-slate-900">฿{room.price.toLocaleString()}</p>
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

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-4 sm:p-6 border-b border-slate-100">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">กิจกรรมล่าสุด</h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">อัพเดทแบบเรียลไทม์</p>
                  </div>

                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    {recentActivities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-slate-50 rounded-lg transition-colors">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${activity.type === 'payment' ? 'bg-green-500' :
                          activity.type === 'checkin' ? 'bg-blue-500' :
                            activity.type === 'maintenance' ? 'bg-yellow-500' :
                              'bg-red-500'
                          }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-slate-900">{activity.action}</p>
                          <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                            <Icons.Clock />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 sm:p-4 border-t border-slate-100">
                    <button className="w-full text-xs sm:text-sm text-slate-500 hover:text-slate-900 font-bold transition-colors">
                      ดูกิจกรรมทั้งหมด →
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {selectedRoom && (
            <div className="max-w-4xl mx-auto">
              <button
                onClick={handleCloseDetail}
                className="flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 text-sm sm:text-base text-slate-300 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Icons.ArrowLeft />
                <span>กลับไปรายการห้อง</span>
              </button>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 sm:p-6 text-white">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-white">ห้อง {selectedRoom.id}</h1>
                      <p className="text-sm sm:text-base text-blue-100">รายละเอียดห้องพักและการชำระเงิน</p>
                    </div>
                    <div className="self-start sm:self-auto">
                      {getPaymentStatusBadge(selectedRoom.paymentStatus)}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 border-b border-slate-100">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">ข้อมูลผู้เช่า</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                        {selectedRoom.tenant.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-slate-500">ชื่อผู้เช่า</p>
                        <p className="font-bold text-sm sm:text-base text-slate-900 truncate">{selectedRoom.tenant}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 flex-shrink-0">
                        <Icons.Phone />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-slate-500">เบอร์โทรศัพท์</p>
                        <p className="font-bold text-sm sm:text-base text-slate-900">{selectedRoom.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                        <Icons.Calendar />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-slate-500">วันที่เข้าพัก</p>
                        <p className="font-bold text-sm sm:text-base text-slate-900">{selectedRoom.moveInDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                        <Icons.DollarSign />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-slate-500">ค่าเช่าต่อเดือน</p>
                        <p className="font-bold text-sm sm:text-base text-slate-900">฿{selectedRoom.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 border-b border-slate-100">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">รายละเอียดค่าใช้จ่ายประจำเดือน</h2>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0 shadow-sm">
                          <Icons.Home />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-sm sm:text-base text-slate-900">ค่าเช่าห้อง</p>
                          <p className="text-xs text-slate-500">รายเดือน</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-slate-900 flex-shrink-0">฿{selectedRoom.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0 shadow-sm">
                          <Icons.Droplet />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-sm sm:text-base text-slate-900">ค่าน้ำประปา</p>
                          <p className="text-xs text-slate-500">เดือนนี้</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-slate-900 flex-shrink-0">฿{selectedRoom.waterBill.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0 shadow-sm">
                          <Icons.Zap />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-sm sm:text-base text-slate-900">ค่าไฟฟ้า</p>
                          <p className="text-xs text-slate-500">เดือนนี้</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-slate-900 flex-shrink-0">฿{selectedRoom.electricBill.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-blue-100 shadow-sm">
                      <div>
                        <p className="font-bold text-blue-600 text-base sm:text-lg">รวมทั้งหมด</p>
                        <p className="text-xs text-slate-500">ค่าใช้จ่ายประจำเดือนนี้</p>
                      </div>
                      <p className="text-xl sm:text-2xl font-black text-blue-600">
                        ฿{(selectedRoom.price + selectedRoom.waterBill + selectedRoom.electricBill).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {selectedRoom.outstandingBalance > 0 && (
                  <div className="p-4 sm:p-6 border-b border-slate-100 bg-red-50">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Icons.AlertCircle />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-red-900 mb-1">ยอดค้างชำระ</h3>
                        <p className="text-xs sm:text-sm text-red-700 mb-3">
                          มีค่าใช้จ่ายที่ค้างชำระจากเดือนก่อนหน้า
                        </p>
                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-red-200 shadow-sm">
                          <p className="text-xs sm:text-sm text-slate-500 mb-1">ยอดค้างชำระทั้งหมด</p>
                          <p className="text-2xl sm:text-3xl font-bold text-red-600">
                            ฿{selectedRoom.outstandingBalance.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-6 bg-white">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">สถานะการชำระเงิน</h2>

                  {selectedRoom.paymentStatus === 'paid' && (
                    <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Icons.CheckCircle />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm sm:text-base text-green-900">ชำระเงินครบถ้วนแล้ว</p>
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
                        <p className="font-bold text-sm sm:text-base text-yellow-900">รอการชำระเงิน</p>
                        <p className="text-xs sm:text-sm text-yellow-700">กำหนดชำระภายในวันที่ {selectedRoom.dueDate}</p>
                        <p className="text-xs sm:text-sm font-bold text-yellow-800 mt-2 break-words">
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
                        <p className="font-bold text-sm sm:text-base text-red-900">เกินกำหนดชำระ</p>
                        <p className="text-xs sm:text-sm text-red-700">เกินกำหนดชำระตั้งแต่วันที่ {selectedRoom.dueDate}</p>
                        <p className="text-xs sm:text-sm font-bold text-red-800 mt-2 break-words">
                          ยอดที่ต้องชำระทันที: ฿{(selectedRoom.price + selectedRoom.waterBill + selectedRoom.electricBill + selectedRoom.outstandingBalance).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {paymentModalOpen && paymentRoom && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
              <div className="w-full max-w-md bg-white rounded-2xl p-6 text-slate-900 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-slate-900">ชำระเงิน — ห้อง {paymentRoom.id}</h3>
                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">ค่าเช่าห้อง</span>
                    <span className="font-bold">฿{paymentRoom.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">ค่าน้ำ</span>
                    <span className="font-bold">฿{paymentRoom.waterBill.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">ค่าไฟ</span>
                    <span className="font-bold">฿{paymentRoom.electricBill.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-slate-200 text-blue-600">
                    <span>รวมทั้งสิ้น</span>
                    <span>฿{(paymentRoom.price + paymentRoom.waterBill + paymentRoom.electricBill).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 bg-white border border-slate-200 p-2 rounded-xl shadow-inner flex items-center justify-center relative">
                    <Image
                      src="/QR.jpg"
                      alt="QR Code"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleConfirmPayment}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-600/20 transition-all active:scale-[0.98] uppercase tracking-wider"
                  >
                    ยืนยันการชำระเงิน
                  </button>
                  <button
                    onClick={closePaymentModal}
                    className="px-6 py-4 border border-slate-200 rounded-2xl text-slate-500 hover:bg-slate-50 font-bold transition-all"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}