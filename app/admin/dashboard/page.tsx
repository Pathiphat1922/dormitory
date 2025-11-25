'use client';

import React, { useState } from 'react';

// --- Icons Components ---
const IconHome = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const IconUsers = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconBed = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path></svg>;
const IconEdit = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const IconSave = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>;
const IconTrash = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>;
const IconX = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const IconPlus = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const IconLogOut = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const IconBill = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const IconScan = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect x="7" y="7" width="10" height="10"></rect></svg>;
const IconCheckCircle = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const IconAlert = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
const IconCoins = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="M17.12 10.06c-.87-1.24-2.32-1.53-3.69-1.28"></path></svg>;

// --- Types ---
interface Room {
  id: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  tenant: string;
  price: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  phone: string;
}

interface Invoice {
  id: string;
  roomId: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'verified' | 'paid';
  slipImage?: string; 
}

export default function AdminDashboard() {
  
  // --- 1. State Navigation (Tab Control) ---
  const [activeTab, setActiveTab] = useState<'dashboard' | 'tenants' | 'invoices'>('dashboard');

  // --- 2. State Data ---
  const [rooms, setRooms] = useState<Room[]>([
    { id: 'A101', status: 'occupied', tenant: 'สมชาย ใจดี', price: 3000, paymentStatus: 'paid', phone: '081-234-5678' },
    { id: 'A102', status: 'vacant', tenant: '-', price: 3000, paymentStatus: 'paid', phone: '-' },
    { id: 'A103', status: 'occupied', tenant: 'สมหญิง สวยงาม', price: 3000, paymentStatus: 'overdue', phone: '089-999-9999' },
    { id: 'B201', status: 'occupied', tenant: 'วิชัย มั่นคง', price: 3500, paymentStatus: 'pending', phone: '082-555-4444' },
    { id: 'B202', status: 'maintenance', tenant: '-', price: 3500, paymentStatus: 'paid', phone: '-' },
  ]);

  // เพิ่มข้อมูลจำลอง: บิลเก่าๆ ที่จ่ายแล้ว (เพื่อให้ยอดเงินสะสมดูมีประวัติจริง)
  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: 'INV-2401', roomId: 'B201', amount: 3500, dueDate: '2024-11-25', status: 'pending' },
    { id: 'INV-2402', roomId: 'A103', amount: 3000, dueDate: '2024-11-20', status: 'pending' },
    { id: 'INV-2403', roomId: 'A101', amount: 3000, dueDate: '2024-11-01', status: 'paid' },
    // Mock Data เพิ่มเติม: บิลของเดือนก่อนๆ ที่จ่ายแล้ว (แม้ห้องจะว่างไปแล้วก็ตาม)
    { id: 'INV-2399', roomId: 'A102', amount: 3000, dueDate: '2024-10-01', status: 'paid' }, 
    { id: 'INV-2398', roomId: 'B202', amount: 3500, dueDate: '2024-10-01', status: 'paid' },
  ]);

  // --- 3. State Modals ---
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  
  // State สำหรับการตรวจ QR Code
  const [verifyingInvoice, setVerifyingInvoice] = useState<Invoice | null>(null);
  const [verificationStep, setVerificationStep] = useState<'idle' | 'scanning' | 'result'>('idle');
  const [verificationResult, setVerificationResult] = useState<{ 
    success: boolean; 
    message: string; 
    scannedAmount?: number 
  } | null>(null);

  // --- Functions ---
  const handleLogout = () => {
    window.location.href = '/login';
  };

  // --- Room Logic ---
  const handleEditClick = (room: Room) => {
    setEditingRoom({ ...room });
  };

  const handleSaveRoom = () => {
    if (!editingRoom) return;
    setRooms(rooms.map(r => r.id === editingRoom.id ? editingRoom : r));
    setEditingRoom(null);
  };

  const handleDeleteRoom = (id: string) => {
    if (confirm(`ยืนยันการลบห้อง ${id} หรือไม่?`)) {
      setRooms(rooms.filter(r => r.id !== id));
    }
  };

  const handleChange = (field: keyof Room, value: any) => {
    if (editingRoom) setEditingRoom({ ...editingRoom, [field]: value });
  };

  // --- QR Code Logic (Thai Logic) ---
  const openVerificationModal = (invoice: Invoice) => {
    setVerifyingInvoice(invoice);
    setVerificationStep('idle');
    setVerificationResult(null);
  };

  const handleSimulateScan = () => {
    setVerificationStep('scanning');

    setTimeout(() => {
      if (!verifyingInvoice) return;

      const randomScenario = Math.random();
      
      let result;
      if (randomScenario > 0.3) {
        result = { success: true, message: 'ตรวจสอบสำเร็จ: ยอดเงินถูกต้อง', scannedAmount: verifyingInvoice.amount };
        
        // เมื่อจ่ายสำเร็จ -> อัปเดตสถานะบิลเป็น 'paid' (ยอดเงินรวมจะเพิ่มขึ้นทันที)
        setInvoices(prev => prev.map(inv => inv.id === verifyingInvoice.id ? { ...inv, status: 'paid' } : inv));
        setRooms(prev => prev.map(r => r.id === verifyingInvoice.roomId ? { ...r, paymentStatus: 'paid' } : r));
      } else if (randomScenario > 0.1) {
        const wrongAmount = verifyingInvoice.amount - 100;
        result = { success: false, message: `ยอดเงินไม่ตรง! (สแกนได้: ${wrongAmount})`, scannedAmount: wrongAmount };
      } else {
        result = { success: false, message: 'ไม่พบข้อมูลการโอน (อาจเป็นสลิปปลอม)', scannedAmount: 0 };
      }

      setVerificationResult(result);
      setVerificationStep('result');
    }, 2500);
  };

  // --- UI Helpers (Thai Badges) ---
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
    return <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>{labels[status]}</span>;
  };

  const getPaymentBadge = (status: string) => {
    const styles: Record<string, string> = {
      paid: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      overdue: 'bg-red-100 text-red-800',
      verified: 'bg-blue-100 text-blue-800',
    };
    const labels: Record<string, string> = {
      paid: 'จ่ายแล้ว',
      pending: 'รอตรวจสอบ',
      overdue: 'เกินกำหนด',
      verified: 'ตรวจสอบแล้ว',
    };
    return <span className={`px-2 py-1 rounded text-xs font-bold ${styles[status]}`}>{labels[status]}</span>;
  };

  // --- Main Render Content ---
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        
        // *** แก้ไขจุดสำคัญ ***
        // คำนวณจาก "ประวัติบิลที่จ่ายแล้ว (invoices)" แทน "ห้องที่มีคนอยู่"
        // ทำให้แม้ผู้เช่าจะออกไปแล้ว (ห้อง vacant) แต่ถ้ายอดเงินเคยเข้ามาแล้ว มันจะยังคงอยู่ครับ
        const totalRevenue = invoices
            .filter(inv => inv.status === 'paid') // เลือกเฉพาะบิลที่จ่ายแล้ว
            .reduce((sum, inv) => sum + inv.amount, 0); // รวมยอดเงิน

        return (
          <>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">แดชบอร์ด & ห้องพัก</h2>
                <p className="text-gray-500 text-sm mt-1">จัดการสถานะห้องพักและรายรับสะสม</p>
              </div>
              <button 
                onClick={() => {
                    const newId = prompt("ใส่เลขห้องใหม่:");
                    if(newId) setRooms([...rooms, { id: newId, status: 'vacant', tenant: '-', price: 3000, paymentStatus: 'paid', phone: '-' }]);
                }}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-md transition-all active:scale-95 font-medium"
              >
                <IconPlus /> เพิ่มห้องพัก
              </button>
            </div>

             {/* Stats Summary */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                
                {/* 1. Card รายได้สะสม (แก้ไขชื่อและตัวเลข) */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between relative overflow-hidden group">
                    <div className="absolute right-0 top-0 h-full w-1 bg-blue-600"></div>
                    <div>
                        <p className="text-gray-500 text-sm font-medium">รายได้สะสม (ทั้งหมด)</p>
                        <p className="text-3xl font-bold text-blue-600 mt-2">฿{totalRevenue.toLocaleString()}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                        <IconCoins />
                    </div>
                </div>

                {/* 2. ห้องทั้งหมด */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm font-medium">ห้องทั้งหมด</p>
                        <p className="text-3xl font-bold text-gray-800 mt-2">{rooms.length}</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-gray-600"><IconBed /></div>
                </div>

                {/* 3. ห้องว่าง */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm font-medium">ห้องว่าง</p>
                        <p className="text-3xl font-bold text-green-600 mt-2">{rooms.filter(r => r.status === 'vacant').length}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-green-600"><IconHome /></div>
                </div>

                {/* 4. ค้างชำระ */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm font-medium">ค้างชำระ</p>
                        <p className="text-3xl font-bold text-red-600 mt-2">{rooms.filter(r => r.paymentStatus === 'overdue').length}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg text-red-600"><IconUsers /></div>
                </div>
            </div>

            {/* Rooms Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                      <th className="p-4 border-b">เลขห้อง</th>
                      <th className="p-4 border-b">สถานะ</th>
                      <th className="p-4 border-b">ผู้เช่า</th>
                      <th className="p-4 border-b">ค่าเช่า</th>
                      <th className="p-4 border-b">สถานะการจ่าย</th>
                      <th className="p-4 border-b text-center">จัดการ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {rooms.map((room) => (
                      <tr key={room.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="p-4 font-bold text-gray-900">{room.id}</td>
                        <td className="p-4">{getStatusBadge(room.status)}</td>
                        <td className="p-4 text-gray-700 font-medium">{room.tenant}</td>
                        <td className="p-4 font-medium text-gray-900">฿{room.price.toLocaleString()}</td>
                        <td className="p-4">{room.status === 'occupied' ? getPaymentBadge(room.paymentStatus) : <span className="text-gray-300">-</span>}</td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-2">
                            <button onClick={() => handleEditClick(room)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg" title="แก้ไข">
                              <IconEdit />
                            </button>
                            <button onClick={() => handleDeleteRoom(room.id)} className="p-2 text-red-500 hover:bg-red-100 rounded-lg" title="ลบ">
                              <IconTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      case 'tenants':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">รายชื่อผู้เช่า (Tenants)</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                     <th className="p-4 border-b">ชื่อ-สกุล</th>
                     <th className="p-4 border-b">ห้องพัก</th>
                     <th className="p-4 border-b">เบอร์โทร</th>
                     <th className="p-4 border-b">สถานะสัญญา</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                   {rooms.filter(r => r.status === 'occupied').map((room) => (
                     <tr key={room.id} className="hover:bg-gray-50">
                       <td className="p-4 font-medium text-gray-900 flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                           {room.tenant.charAt(0)}
                         </div>
                         {room.tenant}
                       </td>
                       <td className="p-4 font-bold text-blue-600">{room.id}</td>
                       <td className="p-4 text-gray-600">{room.phone}</td>
                       <td className="p-4"><span className="text-green-600 text-sm font-medium">สัญญาเช่าปกติ</span></td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          </div>
        );

      case 'invoices':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">บิล & การตรวจสอบยอดเงิน</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                     <th className="p-4 border-b">เลขที่บิล</th>
                     <th className="p-4 border-b">ห้อง</th>
                     <th className="p-4 border-b">ยอดเงิน</th>
                     <th className="p-4 border-b">ครบกำหนด</th>
                     <th className="p-4 border-b">สถานะ</th>
                     <th className="p-4 border-b text-center">ดำเนินการ</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                   {invoices.map((inv) => (
                     <tr key={inv.id} className="hover:bg-gray-50">
                       <td className="p-4 font-medium text-gray-900">{inv.id}</td>
                       <td className="p-4 font-bold text-gray-700">{inv.roomId}</td>
                       <td className="p-4 font-bold text-blue-600">฿{inv.amount.toLocaleString()}</td>
                       <td className="p-4 text-gray-500 text-sm">{inv.dueDate}</td>
                       <td className="p-4">
                           <span className={`px-2 py-1 rounded text-xs font-bold ${
                               inv.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                           }`}>
                               {inv.status === 'paid' ? 'จ่ายแล้ว' : inv.status === 'pending' ? 'รอตรวจสอบ' : inv.status}
                           </span>
                       </td>
                       <td className="p-4 text-center">
                           {inv.status === 'pending' ? (
                               <button 
                                   onClick={() => openVerificationModal(inv)}
                                   className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 flex items-center justify-center gap-2 mx-auto w-fit shadow-sm"
                               >
                                   <IconScan /> ตรวจสลิป
                               </button>
                           ) : (
                               <span className="text-green-500 flex items-center justify-center gap-1 text-sm font-medium">
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                   เรียบร้อย
                               </span>
                           )}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col fixed inset-y-0 z-10">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200 text-lg">A</div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Admin Panel</h1>
            <p className="text-xs text-gray-400">หอพัก Management</p>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${
                activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <IconHome /> แดชบอร์ด & ห้องพัก
          </button>
          <button 
            onClick={() => setActiveTab('tenants')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${
                activeTab === 'tenants' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <IconUsers /> จัดการผู้เช่า
          </button>
           <button 
            onClick={() => setActiveTab('invoices')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${
                activeTab === 'invoices' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
           >
            <IconBill />
             บิล & ตรวจสลิป
          </button>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button onClick={handleLogout} className="w-full flex items-center gap-2 text-red-500 hover:bg-red-50 p-3 rounded-lg transition-colors font-medium">
            <IconLogOut /> ออกจากระบบ
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-0 lg:ml-64 p-8">
        {renderContent()}
      </main>

      {/* --- Edit Room Modal --- */}
      {editingRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <IconEdit /> แก้ไขห้อง <span className="text-blue-600">{editingRoom.id}</span>
              </h3>
              <button onClick={() => setEditingRoom(null)}><IconX /></button>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">สถานะ</label>
                  <select 
                    value={editingRoom.status}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  >
                    <option value="vacant">ว่าง</option>
                    <option value="occupied">มีผู้เช่า</option>
                    <option value="maintenance">ซ่อมบำรุง</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ค่าเช่า</label>
                  <input 
                    type="number" 
                    value={editingRoom.price}
                    onChange={(e) => handleChange('price', Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อผู้เช่า</label>
                <input 
                  type="text" 
                  value={editingRoom.tenant}
                  onChange={(e) => handleChange('tenant', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">เบอร์โทร</label>
                    <input 
                    type="text" 
                    value={editingRoom.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">สถานะจ่ายเงิน</label>
                    <select 
                    value={editingRoom.paymentStatus}
                    onChange={(e) => handleChange('paymentStatus', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    >
                    <option value="paid">จ่ายแล้ว</option>
                    <option value="pending">รอตรวจสอบ</option>
                    <option value="overdue">เกินกำหนด</option>
                    </select>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <button onClick={() => setEditingRoom(null)} className="px-5 py-2.5 text-gray-700 hover:bg-gray-200 rounded-lg font-medium">ยกเลิก</button>
              <button onClick={handleSaveRoom} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2"><IconSave /> บันทึก</button>
            </div>
          </div>
        </div>
      )}

      {/* --- QR Verification Modal --- */}
      {verifyingInvoice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in relative">
                <button onClick={() => setVerifyingInvoice(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <IconX />
                </button>

                <div className="p-8 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">ระบบตรวจสอบยอดเงิน (QR)</h3>
                    <p className="text-gray-500 text-sm mb-6">กำลังตรวจสอบสลิปของห้อง <span className="font-bold text-blue-600">{verifyingInvoice.roomId}</span></p>

                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">ยอดที่ต้องชำระ</p>
                        <p className="text-3xl font-bold text-gray-800">฿{verifyingInvoice.amount.toLocaleString()}.00</p>
                    </div>

                    {verificationStep === 'idle' && (
                        <div className="space-y-4">
                            <div className="w-48 h-48 bg-gray-100 mx-auto rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center flex-col gap-2">
                                <IconScan />
                                <span className="text-xs text-gray-400">จำลองพื้นที่กล้อง / QR Code</span>
                            </div>
                            <button 
                                onClick={handleSimulateScan}
                                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all active:scale-95"
                            >
                                สแกนตรวจสอบ (จำลอง)
                            </button>
                        </div>
                    )}

                    {verificationStep === 'scanning' && (
                        <div className="py-10 flex flex-col items-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                            <p className="text-blue-600 font-medium animate-pulse">กำลังติดต่อธนาคาร...</p>
                            <p className="text-xs text-gray-400 mt-2">ตรวจสอบลายเซ็นดิจิทัล & ยอดเงิน</p>
                        </div>
                    )}

                    {verificationStep === 'result' && verificationResult && (
                        <div className="animate-fade-in-up">
                            <div className="flex justify-center mb-4">
                                {verificationResult.success ? <IconCheckCircle /> : <IconAlert />}
                            </div>
                            
                            <h4 className={`text-lg font-bold mb-2 ${verificationResult.success ? 'text-green-600' : 'text-red-600'}`}>
                                {verificationResult.success ? 'ตรวจสอบสำเร็จ' : 'ตรวจสอบล้มเหลว'}
                            </h4>
                            <p className="text-gray-600 mb-4">{verificationResult.message}</p>

                            {!verificationResult.success && (
                                <div className="bg-red-50 p-3 rounded-lg border border-red-100 text-sm text-red-700 mb-4">
                                    <span className="font-bold">ยอดที่พบ:</span> ฿{verificationResult.scannedAmount?.toLocaleString()}
                                </div>
                            )}

                            <button 
                                onClick={() => setVerifyingInvoice(null)}
                                className={`w-full py-3 rounded-xl font-bold text-white shadow-md transition-all ${
                                    verificationResult.success ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
                                }`}
                            >
                                {verificationResult.success ? 'เสร็จสิ้น (ตกลง)' : 'ปิดหน้าต่าง'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}

    </div>
  );
}