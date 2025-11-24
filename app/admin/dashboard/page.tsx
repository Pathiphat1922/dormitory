'use client';

import React, { useState } from 'react';

// --- Icons Components (Refactored for stability) ---
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

// --- Types ---
interface Room {
  id: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  tenant: string;
  price: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  phone: string;
}

export default function AdminDashboard() {
  // ลบ router และ auth check เพื่อให้แสดงผลได้ทันที
  
  // --- State สำหรับข้อมูล (จำลอง Database) ---
  const [rooms, setRooms] = useState<Room[]>([
    { id: 'A101', status: 'occupied', tenant: 'สมชาย ใจดี', price: 3000, paymentStatus: 'paid', phone: '081-234-5678' },
    { id: 'A102', status: 'vacant', tenant: '-', price: 3000, paymentStatus: 'paid', phone: '-' },
    { id: 'A103', status: 'occupied', tenant: 'สมหญิง สวยงาม', price: 3000, paymentStatus: 'overdue', phone: '089-999-9999' },
    { id: 'B201', status: 'occupied', tenant: 'วิชัย มั่นคง', price: 3500, paymentStatus: 'pending', phone: '082-555-4444' },
    { id: 'B202', status: 'maintenance', tenant: '-', price: 3500, paymentStatus: 'paid', phone: '-' },
  ]);

  const [editingRoom, setEditingRoom] = useState<Room | null>(null);

  // --- Functions ---
  const handleLogout = () => {
    // จำลองการ Logout
    alert('ออกจากระบบ (Demo)');
  };

  const handleEditClick = (room: Room) => {
    setEditingRoom({ ...room });
  };

  const handleSave = () => {
    if (!editingRoom) return;
    const updatedRooms = rooms.map(r => 
      r.id === editingRoom.id ? editingRoom : r
    );
    setRooms(updatedRooms);
    setEditingRoom(null);
  };

  const handleDelete = (id: string) => {
    if (confirm(`ยืนยันการลบห้อง ${id} หรือไม่?`)) {
      setRooms(rooms.filter(r => r.id !== id));
    }
  };

  const handleChange = (field: keyof Room, value: any) => {
    if (editingRoom) {
      setEditingRoom({ ...editingRoom, [field]: value });
    }
  };

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

  const getPaymentBadge = (status: string) => {
     const styles: Record<string, string> = {
      paid: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      overdue: 'bg-red-100 text-red-800',
    };
     const labels: Record<string, string> = {
      paid: 'จ่ายแล้ว',
      pending: 'รอจ่าย',
      overdue: 'เกินกำหนด',
    };
    return (
      <span className={`px-2 py-1 rounded text-xs font-bold ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col fixed inset-y-0 z-10">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Admin </h1>
           
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-bold transition-colors">
            <IconHome /> แดชบอร์ด & ห้องพัก
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <IconUsers /> จัดการผู้เช่า
          </button>
           <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <IconBill />
             บิล & ใบแจ้งหนี้
          </button>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button onClick={handleLogout} className="w-full flex items-center gap-2 text-red-500 hover:bg-red-50 p-3 rounded-lg transition-colors font-medium">
            <IconLogOut /> ออกจากระบบ
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">จัดการข้อมูลห้องพัก</h2>
           
          </div>
          <button 
            onClick={() => {
                const newId = prompt("ใส่เลขห้องใหม่ (เช่น C301):");
                if(newId) setRooms([...rooms, { id: newId, status: 'vacant', tenant: '-', price: 3000, paymentStatus: 'paid', phone: '-' }]);
            }}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-md transition-all active:scale-95 font-medium"
          >
            <IconPlus /> เพิ่มห้องพัก
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">ห้องทั้งหมด</p>
                    <p className="text-3xl font-bold text-gray-800">{rooms.length}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><IconBed /></div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">ห้องว่าง</p>
                    <p className="text-3xl font-bold text-green-600">{rooms.filter(r => r.status === 'vacant').length}</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-green-600"><IconHome /></div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">ค้างชำระ</p>
                    <p className="text-3xl font-bold text-red-600">{rooms.filter(r => r.paymentStatus === 'overdue').length}</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-red-600"><IconUsers /></div>
            </div>
        </div>

        {/* Table Card */}
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
                  <th className="p-4 border-b">เบอร์โทร</th>
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
                    <td className="p-4 text-gray-500 text-sm">{room.phone}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => handleEditClick(room)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="แก้ไข"
                        >
                          <IconEdit />
                        </button>
                        <button 
                          onClick={() => handleDelete(room.id)}
                          className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                          title="ลบ"
                        >
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
      </main>

      {/* --- Edit Modal (Pop-up แก้ไขข้อมูล) --- */}
      {editingRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <IconEdit /> แก้ไขข้อมูลห้อง <span className="text-blue-600">{editingRoom.id}</span>
              </h3>
              <button onClick={() => setEditingRoom(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <IconX />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">สถานะห้อง</label>
                  <select 
                    value={editingRoom.status}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                  >
                    <option value="vacant">ว่าง (Vacant)</option>
                    <option value="occupied">มีผู้เช่า (Occupied)</option>
                    <option value="maintenance">ซ่อมบำรุง (Maintenance)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ค่าเช่า (บาท)</label>
                  <input 
                    type="number" 
                    value={editingRoom.price}
                    onChange={(e) => handleChange('price', Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อผู้เช่า</label>
                <input 
                  type="text" 
                  value={editingRoom.tenant}
                  onChange={(e) => handleChange('tenant', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                  placeholder="ใส่ชื่อ หรือ - ถ้าไม่มี"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">เบอร์โทรศัพท์</label>
                    <input 
                    type="text" 
                    value={editingRoom.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">สถานะการจ่าย</label>
                    <select 
                    value={editingRoom.paymentStatus}
                    onChange={(e) => handleChange('paymentStatus', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                    >
                    <option value="paid">จ่ายแล้ว (Paid)</option>
                    <option value="pending">รอจ่าย (Pending)</option>
                    <option value="overdue">เกินกำหนด (Overdue)</option>
                    </select>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={() => setEditingRoom(null)}
                className="px-5 py-2.5 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors font-medium"
              >
                ยกเลิก
              </button>
              <button 
                onClick={handleSave}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md flex items-center gap-2 font-medium transition-transform active:scale-95"
              >
                <IconSave /> บันทึก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}