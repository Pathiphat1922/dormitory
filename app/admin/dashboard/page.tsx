'use client';

import React, { useState, useMemo } from 'react'; // เพิ่ม useMemo

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
const IconSettings = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const IconShield = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const IconDownload = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const IconActivity = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
const IconZap = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;

// --- Types ---
interface Room {
  id: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  tenant: string;
  price: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  phone: string;
  lastWater: number;
  currentWater: number;
  lastElectric: number;
  currentElectric: number;
}

interface Invoice {
  id: string;
  roomId: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'verified' | 'paid';
  isHistory?: boolean;
}

export default function AdminDashboard() {

  const [activeTab, setActiveTab] = useState<'dashboard' | 'tenants' | 'invoices' | 'settings' | 'logs'>('dashboard');
  const [activeSettingsTab, setActiveSettingsTab] = useState<'general' | 'pricing' | 'staff' | 'roomTypes'>('general');

  // --- 0. Admin User Info ---
  const [currentUser] = useState({ name: 'เจ้าของหอพัก (Admin)', role: 'owner' });

  // --- 1. State Dorm Info ---
  const [dormSettings, setDormSettings] = useState({
    name: 'หอพัก สบายใจ (Sabaijai Dorm)',
    address: '123/45 ซอยสุขุมวิท 21 แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110',
    phone: '02-123-4567',
    bankName: 'ธนาคารกสิกรไทย',
    accountNumber: '012-3-45678-9',
    accountName: 'บจก. หอพักสบายใจ',
    promptPayId: '0812345678',
    logo: null as string | null
  });

  // --- 2. State Pricing & Rates ---
  const [pricingRates, setPricingRates] = useState({
    waterRate: 18,
    electricRate: 7,
    commonFee: 200,
    parkingFee: 500,
    internetFee: 300,
    lateFeePerDay: 50,
    graceDays: 5
  });

  // --- 3. State Room Types ---
  const [roomTypes, setRoomTypes] = useState([
    { id: 'RT001', name: 'ห้องแอร์ VIP', price: 4500, description: 'เตียงคู่, เฟอร์ครบ, เครื่องน้ำอุ่น' },
    { id: 'RT002', name: 'ห้องแอร์ Standard', price: 3500, description: 'เตียงเดี่ยว, เฟอร์ครบ' },
    { id: 'RT003', name: 'ห้องพัดลม', price: 2800, description: 'เตียงเดี่ยว, ตู้เสื้อผ้า' },
  ]);

  // --- 4. State Staff ---
  const [staffList, setStaffList] = useState([
    { id: 1, name: 'สมชาย พนักงาน', role: 'Staff', phone: '081-111-2222', lastActive: '2024-11-25 14:20' },
    { id: 2, name: 'สมหญิง ดูแล', role: 'Manager', phone: '082-222-3333', lastActive: '2024-11-25 15:10' },
  ]);

  // --- 5. State Audit Logs ---
  const [auditLogs, setAuditLogs] = useState([
    { id: 1, timestamp: '2024-11-25 15:45:12', user: 'เจ้าของหอพัก', action: 'แก้ไขราคาค่าเช่าห้อง A103', ip: '192.168.1.1' },
    { id: 2, timestamp: '2024-11-25 15:30:05', user: 'สมชาย พนักงาน', action: 'ยืนยันบิล INV-2411-85932', ip: '192.168.1.52' },
    { id: 3, timestamp: '2024-11-25 14:15:00', user: 'เจ้าของหอพัก', action: 'เพิ่มห้องพักใหม่ B305', ip: '192.168.1.1' },
  ]);

  // --- 1. State Rooms (Source of Truth) ---
  const [rooms, setRooms] = useState<Room[]>([
    { id: 'A101', status: 'occupied', tenant: 'สมชาย ใจดี', price: 3000, paymentStatus: 'paid', phone: '081-234-5678', lastWater: 100, currentWater: 110, lastElectric: 500, currentElectric: 550 },
    { id: 'A102', status: 'vacant', tenant: '-', price: 3000, paymentStatus: 'paid', phone: '-', lastWater: 80, currentWater: 80, lastElectric: 420, currentElectric: 420 },
    { id: 'A103', status: 'occupied', tenant: 'สมหญิง สวยงาม', price: 3000, paymentStatus: 'overdue', phone: '089-999-9999', lastWater: 150, currentWater: 165, lastElectric: 600, currentElectric: 680 },
    { id: 'B201', status: 'occupied', tenant: 'วิชัย มั่นคง', price: 3500, paymentStatus: 'pending', phone: '082-555-4444', lastWater: 90, currentWater: 102, lastElectric: 310, currentElectric: 390 },
    { id: 'B202', status: 'maintenance', tenant: '-', price: 3500, paymentStatus: 'paid', phone: '-', lastWater: 50, currentWater: 50, lastElectric: 200, currentElectric: 200 },
  ]);

  // --- 2. State Historical Invoices ---
  const [historyInvoices, setHistoryInvoices] = useState<Invoice[]>([
    { id: 'INV-2410-84932', roomId: 'A102', amount: 3000, dueDate: '2024-10-01', status: 'paid', isHistory: true },
    { id: 'INV-2410-10293', roomId: 'B202', amount: 3500, dueDate: '2024-10-01', status: 'paid', isHistory: true },
  ]);

  // --- 3. Derived State: รวมบิลทั้งหมด (สร้างจากห้องปัจจุบัน + ประวัติ) ---

  // (ใหม่) Helper Function สุ่มเลขบิลให้ดูมีมาตรฐาน (เช่น INV-2411-85932)
  // ใช้ roomId เป็นตัวตั้งต้นเพื่อให้เลขไม่เปลี่ยนไปมาตอนกด Render
  const generateBillId = (roomId: string) => {
    // ใช้วิธีแปลงชื่อห้องเป็นตัวเลขสุ่ม เพื่อให้ได้เลขเดิมเสมอสำหรับห้องเดิม (Stable Random)
    // ถ้าใช้ Math.random() เฉยๆ เลขจะเปลี่ยนทุกครั้งที่หน้าจอกระพริบ ซึ่งจะดูไม่ดี
    let hash = 0;
    for (let i = 0; i < roomId.length; i++) {
      hash = roomId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const randomSuffix = Math.abs(hash).toString().substring(0, 5).padEnd(5, '0');
    return `INV-2411-${randomSuffix}`;
  };

  // ใช้ useMemo เพื่อช่วยเรื่อง Performance และความนิ่งของข้อมูล
  const currentInvoices: Invoice[] = useMemo(() => {
    return rooms
      .filter(r => r.status === 'occupied')
      .map(r => {
        // คำนวณค่าน้ำ-ไฟตามมิเตอร์
        const waterUnits = r.currentWater - r.lastWater;
        const electricUnits = r.currentElectric - r.lastElectric;
        const waterBill = waterUnits * pricingRates.waterRate;
        const electricBill = electricUnits * pricingRates.electricRate;

        // ยอดรวม: ค่าเช่า + ค่าส่วนกลาง + ค่าเน็ต + ค่าน้ำ + ค่าไฟ
        const totalAmount = r.price + pricingRates.commonFee + pricingRates.internetFee + waterBill + electricBill;

        return {
          id: generateBillId(r.id),
          roomId: r.id,
          amount: totalAmount,
          dueDate: '2024-11-30',
          status: r.paymentStatus === 'overdue' ? 'pending' : (r.paymentStatus === 'paid' ? 'paid' : 'pending'),
          breakdown: {
            rent: r.price,
            waterUnits: waterUnits,
            waterRate: pricingRates.waterRate,
            waterBill: waterBill,
            electricUnits: electricUnits,
            electricRate: pricingRates.electricRate,
            electricBill: electricBill,
            commonFee: pricingRates.commonFee,
            internetFee: pricingRates.internetFee,
            total: totalAmount,
          }
        };
      });
  }, [rooms, pricingRates]); // คำนวณใหม่เมื่อข้อมูลห้องหรือเรทราคาเปลี่ยน

  const allInvoices = useMemo(() => [...currentInvoices, ...historyInvoices], [currentInvoices, historyInvoices]);


  // --- Modals State ---
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [verifyingInvoice, setVerifyingInvoice] = useState<Invoice | null>(null);
  const [verificationStep, setVerificationStep] = useState<'idle' | 'scanning' | 'result'>('idle');
  const [verificationResult, setVerificationResult] = useState<{ success: boolean; message: string; scannedAmount?: number } | null>(null);

  // --- Functions ---
  const handleLogout = () => { window.location.href = '/login'; };

  const handleEditClick = (room: Room) => { setEditingRoom({ ...room }); };
  const handleDeleteRoom = (id: string) => { if (confirm(`ยืนยันการลบห้อง ${id} หรือไม่?`)) setRooms(rooms.filter(r => r.id !== id)); };

  const handleSaveRoom = () => {
    if (!editingRoom) return;
    setRooms(rooms.map(r => r.id === editingRoom.id ? editingRoom : r));
    setEditingRoom(null);
  };

  const handleChange = (field: keyof Room, value: string | number) => {
    if (editingRoom) setEditingRoom({ ...editingRoom, [field]: value });
  };

  // --- Invoice Action Logic ---

  const updateRoomPaymentStatus = (roomId: string, status: 'paid' | 'pending' | 'overdue') => {
    setRooms(prevRooms => prevRooms.map(room =>
      room.id === roomId ? { ...room, paymentStatus: status } : room
    ));

    if (verifyingInvoice?.isHistory) {
      setHistoryInvoices(prev => prev.map(inv => inv.id === verifyingInvoice.id ? { ...inv, status: 'paid' } : inv));
    }
  };

  const openVerificationModal = (invoice: Invoice) => {
    setVerifyingInvoice(invoice);
    setVerificationStep('idle');
    setVerificationResult(null);
  };

  const handleSimulateScan = () => {
    setVerificationStep('scanning');
    setTimeout(() => {
      if (!verifyingInvoice) return;
      const result = { success: true, message: 'ตรวจสอบสำเร็จ: ยอดเงินถูกต้อง', scannedAmount: verifyingInvoice.amount };

      updateRoomPaymentStatus(verifyingInvoice.roomId, 'paid');

      // Add to audit log
      const newLog = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        user: currentUser.name,
        action: `ยืนยันการชำระบิล ${verifyingInvoice.id} ห้อง ${verifyingInvoice.roomId}`,
        ip: '127.0.0.1'
      };
      setAuditLogs([newLog, ...auditLogs]);

      setVerificationResult(result);
      setVerificationStep('result');
    }, 1500);
  };

  const addAuditLog = (action: string) => {
    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      user: currentUser.name,
      action: action,
      ip: '127.0.0.1'
    };
    setAuditLogs([newLog, ...auditLogs]);
  };

  const exportInvoices = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + "Invoice ID,Room,Amount,Due Date,Status\n"
      + allInvoices.map(inv => `${inv.id},${inv.roomId},${inv.amount},${inv.dueDate},${inv.status}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "dormitory_invoices.csv");
    document.body.appendChild(link);
    link.click();
    addAuditLog("Exported invoices to CSV");
  };


  // --- UI Helpers ---
  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = { occupied: 'bg-green-100 text-green-800 border-green-200', vacant: 'bg-gray-100 text-gray-800 border-gray-200', maintenance: 'bg-yellow-100 text-yellow-800 border-yellow-200' };
    const labels: Record<string, string> = { occupied: 'มีผู้เช่า', vacant: 'ว่าง', maintenance: 'ซ่อมบำรุง' };
    return <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>{labels[status]}</span>;
  };

  const getPaymentBadge = (status: string) => {
    const styles: Record<string, string> = { paid: 'bg-green-100 text-green-800', pending: 'bg-yellow-100 text-yellow-800', overdue: 'bg-red-100 text-red-800', verified: 'bg-blue-100 text-blue-800' };
    const labels: Record<string, string> = { paid: 'จ่ายแล้ว', pending: 'รอตรวจสอบ', overdue: 'เกินกำหนด', verified: 'ตรวจสอบแล้ว' };
    return <span className={`px-2 py-1 rounded text-xs font-bold ${styles[status]}`}>{labels[status]}</span>;
  };

  // --- Render ---
  const renderContent = () => {
    const totalRevenue = allInvoices
      .filter(inv => inv.status === 'paid')
      .reduce((sum, inv) => sum + inv.amount, 0);

    const totalOutstanding = allInvoices
      .filter(inv => inv.status !== 'paid')
      .reduce((sum, inv) => sum + inv.amount, 0);

    switch (activeTab) {
      case 'settings':
        return (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">ตั้งค่าระบบ (Settings)</h2>
                <p className="text-gray-500 text-sm mt-1">ตั้งค่าหอพัก, อัตราค่าบริการ และสิทธิ์การใช้งาน</p>
              </div>
            </div>

            <div className="flex gap-2 mb-6 p-1 bg-gray-200 rounded-xl w-fit">
              <button
                onClick={() => setActiveSettingsTab('general')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeSettingsTab === 'general' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                ข้อมูลหอพัก
              </button>
              <button
                onClick={() => setActiveSettingsTab('pricing')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeSettingsTab === 'pricing' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                เรทราคา & บิล
              </button>
              <button
                onClick={() => setActiveSettingsTab('staff')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeSettingsTab === 'staff' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                ผู้ดูแลระบบ
              </button>
              <button
                onClick={() => setActiveSettingsTab('roomTypes')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeSettingsTab === 'roomTypes' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                ประเภทห้องพัก
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
              {activeSettingsTab === 'general' && (
                <div className="p-8 max-w-3xl">
                  <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2"><IconSettings /> ข้อมูลพื้นฐานและการรับเงิน</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-black text-gray-500 uppercase mb-2">ชื่อหอพัก</label>
                        <input type="text" value={dormSettings.name} onChange={(e) => setDormSettings({ ...dormSettings, name: e.target.value })} className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-black text-gray-500 uppercase mb-2">ที่อยู่หอพัก (แสดงบนใบเสร็จ)</label>
                        <textarea rows={3} value={dormSettings.address} onChange={(e) => setDormSettings({ ...dormSettings, address: e.target.value })} className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-gray-500 uppercase mb-2">เบอร์โทรศัพท์ติดต่อ</label>
                        <input type="text" value={dormSettings.phone} onChange={(e) => setDormSettings({ ...dormSettings, phone: e.target.value })} className="w-full border border-gray-300 rounded-xl p-3" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-gray-500 uppercase mb-2">PromptPay ID / เลขประชาชน</label>
                        <input type="text" value={dormSettings.promptPayId} onChange={(e) => setDormSettings({ ...dormSettings, promptPayId: e.target.value })} className="w-full border border-gray-300 rounded-xl p-3 text-blue-600 font-bold" />
                      </div>
                    </div>

                    <hr className="border-gray-100" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black text-gray-500 uppercase mb-2">ธนาคาร</label>
                        <input type="text" value={dormSettings.bankName} onChange={(e) => setDormSettings({ ...dormSettings, bankName: e.target.value })} className="w-full border border-gray-300 rounded-xl p-3" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-gray-500 uppercase mb-2">เลขที่บัญชี</label>
                        <input type="text" value={dormSettings.accountNumber} onChange={(e) => setDormSettings({ ...dormSettings, accountNumber: e.target.value })} className="w-full border border-gray-300 rounded-xl p-3" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-black text-gray-500 uppercase mb-2">ชื่อบัญชี</label>
                        <input type="text" value={dormSettings.accountName} onChange={(e) => setDormSettings({ ...dormSettings, accountName: e.target.value })} className="w-full border border-gray-300 rounded-xl p-3" />
                      </div>
                    </div>

                    <button onClick={() => addAuditLog("อัปเดตข้อมูลการตั้งค่าหอพัก")} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 flex items-center gap-2 mt-4"><IconSave /> บันทึกข้อมูล</button>
                  </div>
                </div>
              )}

              {activeSettingsTab === 'pricing' && (
                <div className="p-8 max-w-3xl">
                  <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2"><IconZap /> เรทค่าบริการและค่าปรับ</h3>
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-6 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                      <div>
                        <label className="block text-xs font-black text-blue-600 uppercase mb-2">ค่าน้ำ (ยูนิตละ)</label>
                        <div className="flex items-center gap-3">
                          <input type="number" value={pricingRates.waterRate} onChange={(e) => setPricingRates({ ...pricingRates, waterRate: Number(e.target.value) })} className="w-full border border-blue-200 rounded-xl p-3 font-bold text-lg" />
                          <span className="text-gray-500 font-bold">บาท</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-black text-blue-600 uppercase mb-2">ค่าไฟ (ยูนิตละ)</label>
                        <div className="flex items-center gap-3">
                          <input type="number" value={pricingRates.electricRate} onChange={(e) => setPricingRates({ ...pricingRates, electricRate: Number(e.target.value) })} className="w-full border border-blue-200 rounded-xl p-3 font-bold text-lg" />
                          <span className="text-gray-500 font-bold">บาท</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <label className="block text-xs font-black text-gray-400 uppercase mb-2">ค่าส่วนกลาง/เดือน</label>
                        <input type="number" value={pricingRates.commonFee} onChange={(e) => setPricingRates({ ...pricingRates, commonFee: Number(e.target.value) })} className="w-full border-b border-gray-200 p-1 font-bold text-gray-800 focus:border-blue-500 outline-none" />
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <label className="block text-xs font-black text-gray-400 uppercase mb-2">ค่าที่จอดรถ/คัน</label>
                        <input type="number" value={pricingRates.parkingFee} onChange={(e) => setPricingRates({ ...pricingRates, parkingFee: Number(e.target.value) })} className="w-full border-b border-gray-200 p-1 font-bold text-gray-800 focus:border-blue-500 outline-none" />
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <label className="block text-xs font-black text-gray-400 uppercase mb-2">ค่าบริการเน็ต/เดือน</label>
                        <input type="number" value={pricingRates.internetFee} onChange={(e) => setPricingRates({ ...pricingRates, internetFee: Number(e.target.value) })} className="w-full border-b border-gray-200 p-1 font-bold text-gray-800 focus:border-blue-500 outline-none" />
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                      <h4 className="text-red-600 font-bold text-sm mb-4">ระบบค่าปรับ (Late Penalty)</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-red-500 mb-2">ปรับวันละ (บาท)</label>
                          <input type="number" value={pricingRates.lateFeePerDay} onChange={(e) => setPricingRates({ ...pricingRates, lateFeePerDay: Number(e.target.value) })} className="w-full border border-red-200 rounded-xl p-3 bg-white" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-red-500 mb-2">เริ่มปรับหลังวันที่ (ของเดือน)</label>
                          <input type="number" value={pricingRates.graceDays} onChange={(e) => setPricingRates({ ...pricingRates, graceDays: Number(e.target.value) })} className="w-full border border-red-200 rounded-xl p-3 bg-white" />
                        </div>
                      </div>
                    </div>

                    <button onClick={() => addAuditLog("อัปเดตเรทราคาและค่าบริการพิเศษ")} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2 mt-4"><IconSave /> บันทึกเรทค่าบริการ</button>
                  </div>
                </div>
              )}

              {activeSettingsTab === 'staff' && (
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2"><IconShield /> จัดการบัญชีผู้ดูแล</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2"><IconPlus /> เพิ่มพนักงาน</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {staffList.map(staff => (
                      <div key={staff.id} className="bg-white border border-gray-200 rounded-2xl p-6 flex justify-between items-start hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-600">{staff.name.charAt(0)}</div>
                          <div>
                            <p className="font-bold text-gray-800">{staff.name}</p>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-tighter mb-1 border border-blue-200 w-fit px-1.5 rounded">{staff.role}</p>
                            <p className="text-xs text-gray-400">เข้าใช้งานล่าสุด: {staff.lastActive}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg border border-transparent"><IconEdit /></button>
                          <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg border border-transparent"><IconTrash /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSettingsTab === 'roomTypes' && (
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2"><IconBed /> จัดการประเภทห้องพัก (Templates)</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2"><IconPlus /> สร้างประเภทใหม่</button>
                  </div>
                  <div className="space-y-4">
                    {roomTypes.map(rt => (
                      <div key={rt.id} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex-1">
                          <p className="font-black text-lg text-gray-800">{rt.name}</p>
                          <p className="text-sm text-gray-500">{rt.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black text-blue-600">฿{rt.price.toLocaleString()}</p>
                          <p className="text-xs text-gray-400">ราคามาตรฐาน</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-white border border-gray-200 p-2 rounded-xl hover:text-blue-600"><IconEdit /></button>
                          <button className="bg-white border border-gray-200 p-2 rounded-xl hover:text-red-600"><IconTrash /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'logs':
        return (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">บันทึกกิจกรรม (Audit Logs)</h2>
                <p className="text-gray-500 text-sm mt-1">เก็บประวัติการแก้ไขข้อมูลสำคัญเพื่อความปลอดภัยและความโปร่งใส</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                      <th className="p-4 border-b">วัน/เวลา</th>
                      <th className="p-4 border-b">ผู้ปฏิบัติการ</th>
                      <th className="p-4 border-b">การกระทำ</th>
                      <th className="p-4 border-b">เลข IP อ้างอิง</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {auditLogs.map(log => (
                      <tr key={log.id} className="hover:bg-gray-50/50">
                        <td className="p-4 text-xs font-bold text-gray-400">{log.timestamp}</td>
                        <td className="p-4"><span className="p-1 px-2 bg-gray-100 rounded-lg text-xs font-black text-gray-600 uppercase tracking-tighter shadow-sm border border-gray-200">{log.user}</span></td>
                        <td className="p-4 text-gray-800 font-medium">{log.action}</td>
                        <td className="p-4"><code className="text-[10px] bg-slate-100 p-1 px-2 rounded-lg text-slate-500 border border-slate-200">{log.ip}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'dashboard':
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
                  if (newId) setRooms([...rooms, { id: newId, status: 'vacant', tenant: '-', price: 3000, paymentStatus: 'paid', phone: '-' }]);
                }}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-md transition-all active:scale-95 font-medium"
              >
                <IconPlus /> เพิ่มห้องพัก
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between relative overflow-hidden group">
                <div className="absolute right-0 top-0 h-full w-1 bg-blue-600"></div>
                <div><p className="text-gray-500 text-sm font-medium">รายได้สะสม (ทั้งหมด)</p><p className="text-3xl font-bold text-blue-600 mt-2">฿{totalRevenue.toLocaleString()}</p></div>
                <div className="bg-blue-50 p-4 rounded-full text-blue-600 group-hover:scale-110 transition-transform"><IconCoins /></div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div><p className="text-gray-500 text-sm font-medium">ห้องทั้งหมด</p><p className="text-3xl font-bold text-gray-800 mt-2">{rooms.length}</p></div>
                <div className="bg-gray-100 p-3 rounded-lg text-gray-600"><IconBed /></div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div><p className="text-gray-500 text-sm font-medium">ห้องว่าง</p><p className="text-3xl font-bold text-green-600 mt-2">{rooms.filter(r => r.status === 'vacant').length}</p></div>
                <div className="bg-green-50 p-3 rounded-lg text-green-600"><IconHome /></div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between relative overflow-hidden group">
                <div className="absolute right-0 top-0 h-full w-1 bg-red-500"></div>
                <div><p className="text-gray-500 text-sm font-medium">ยอดค้างชำระ (รอเก็บ)</p><p className="text-3xl font-bold text-red-600 mt-2">฿{totalOutstanding.toLocaleString()}</p></div>
                <div className="bg-red-50 p-4 rounded-full text-red-600 group-hover:scale-110 transition-transform"><IconAlert /></div>
              </div>
            </div>
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
                            <button onClick={() => handleEditClick(room)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg" title="แก้ไข"><IconEdit /></button>
                            <button onClick={() => handleDeleteRoom(room.id)} className="p-2 text-red-500 hover:bg-red-100 rounded-lg" title="ลบ"><IconTrash /></button>
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
                      <td className="p-4 font-medium text-gray-900 flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">{room.tenant.charAt(0)}</div>{room.tenant}</td>
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
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">บิล & การตรวจสอบยอดเงิน</h2>
                <p className="text-gray-500 text-sm mt-1">บิลถูกสร้างอัตโนมัติจากห้องที่มีผู้เช่า (รวมกับประวัติเก่า)</p>
              </div>
              <div className="flex gap-2">
                <button onClick={exportInvoices} className="bg-white text-gray-600 px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 shadow-sm transition-all focus:ring-1 focus:ring-blue-100 flex items-center gap-2 font-medium">
                  <IconDownload /> ส่งออก CSV
                </button>
                <div className="bg-white px-5 py-3 rounded-xl border border-blue-100 shadow-sm flex items-center gap-4">
                  <div className="text-right"><p className="text-xs text-gray-400 font-bold uppercase">รายได้สะสม</p><p className="text-2xl font-bold text-blue-600">฿{totalRevenue.toLocaleString()}</p></div>
                  <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><IconCoins /></div>
                </div>
              </div>
            </div>

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
                  {allInvoices.map((inv) => (
                    <tr key={inv.id} className={`hover:bg-gray-50 ${inv.isHistory ? 'bg-gray-50/50 text-gray-500' : ''}`}>
                      <td className="p-4 font-medium text-gray-900">
                        {inv.id}
                        {inv.isHistory && <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-1 rounded border border-gray-300">ประวัติเก่า</span>}
                      </td>
                      <td className="p-4 font-bold text-gray-700">{inv.roomId}</td>
                      <td className="p-4 font-bold text-blue-600">฿{inv.amount.toLocaleString()}</td>
                      <td className="p-4 text-gray-500 text-sm">{inv.dueDate}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${inv.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {inv.status === 'paid' ? 'จ่ายแล้ว' : inv.status === 'pending' ? 'รอตรวจสอบ' : inv.status}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        {(inv.status === 'pending' && !inv.isHistory) ? (
                          <div className="flex items-center justify-center gap-2 mx-auto w-fit">
                            <button
                              onClick={() => openVerificationModal(inv)}
                              className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 flex items-center gap-1 shadow-sm"
                              title="สแกนตรวจสอบ"
                            >
                              <IconScan /> ตรวจสลิป
                            </button>
                          </div>
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
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col fixed inset-y-0 z-10">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3"><div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200 text-lg">A</div><div><h1 className="text-lg font-bold text-gray-800">Admin Panel</h1><p className="text-xs text-gray-400">หอพัก Management</p></div></div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}><IconHome /> แดชบอร์ด & ห้องพัก</button>
          <button onClick={() => setActiveTab('tenants')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${activeTab === 'tenants' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}><IconUsers /> จัดการผู้เช่า</button>
          <button onClick={() => setActiveTab('invoices')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${activeTab === 'invoices' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}><IconBill /> บิล & ตรวจสลิป</button>
          <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}><IconSettings /> ตั้งค่าพื้นฐาน</button>
          <button onClick={() => setActiveTab('logs')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${activeTab === 'logs' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}><IconActivity /> บันทึกกิจกรรม</button>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <div className="px-4 py-3 mb-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xs">A</div>
            <div className="min-w-0">
              <p className="text-xs font-black text-gray-800 truncate">{currentUser.name}</p>
              <p className="text-[10px] text-blue-600 font-bold uppercase">{currentUser.role}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-2 text-red-500 hover:bg-red-50 p-3 rounded-lg transition-colors font-medium border border-transparent hover:border-red-100"><IconLogOut /> ออกจากระบบ</button>
        </div>
      </aside>

      <main className="flex-1 ml-0 lg:ml-64 p-8">{renderContent()}</main>

      {/* --- Edit Room Modal --- */}
      {editingRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center"><h3 className="text-lg font-bold text-gray-800 flex items-center gap-2"><IconEdit /> แก้ไขห้อง <span className="text-blue-600">{editingRoom.id}</span></h3><button onClick={() => setEditingRoom(null)}><IconX /></button></div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">สถานะ</label><select value={editingRoom.status} onChange={(e) => handleChange('status', e.target.value)} className="w-full border border-gray-300 rounded-lg p-2"><option value="vacant">ว่าง</option><option value="occupied">มีผู้เช่า</option><option value="maintenance">ซ่อมบำรุง</option></select></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">ค่าเช่า</label><input type="number" value={editingRoom.price} onChange={(e) => handleChange('price', Number(e.target.value))} className="w-full border border-gray-300 rounded-lg p-2" /></div>
              </div>
              <div><label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อผู้เช่า</label><input type="text" value={editingRoom.tenant} onChange={(e) => handleChange('tenant', e.target.value)} className="w-full border border-gray-300 rounded-lg p-2" /></div>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">เบอร์โทร</label><input type="text" value={editingRoom.phone} onChange={(e) => handleChange('phone', e.target.value)} className="w-full border border-gray-300 rounded-lg p-2" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">สถานะจ่ายเงิน</label><select value={editingRoom.paymentStatus} onChange={(e) => handleChange('paymentStatus', e.target.value)} className="w-full border border-gray-300 rounded-lg p-2"><option value="paid">จ่ายแล้ว</option><option value="pending">รอตรวจสอบ</option><option value="overdue">เกินกำหนด</option></select></div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3"><button onClick={() => setEditingRoom(null)} className="px-5 py-2.5 text-gray-700 hover:bg-gray-200 rounded-lg font-medium">ยกเลิก</button><button onClick={handleSaveRoom} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2"><IconSave /> บันทึก</button></div>
          </div>
        </div>
      )}

      {/* --- QR Verification Modal --- */}
      {verifyingInvoice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in relative">
            <button onClick={() => setVerifyingInvoice(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><IconX /></button>
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">ระบบตรวจสอบยอดเงิน (QR)</h3>
              <p className="text-gray-500 text-sm mb-6">กำลังตรวจสอบสลิปของห้อง <span className="font-bold text-blue-600">{verifyingInvoice.roomId}</span></p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-6 text-left">
                <p className="text-xs text-gray-400 font-bold uppercase mb-3">รายละเอียดบิล</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>ค่าเช่าห้องพัก</span><span className="font-bold">฿{rooms.find(r => r.id === verifyingInvoice.roomId)?.price.toLocaleString()}</span></div>
                  <div className="flex justify-between text-gray-500"><span>ค่าส่วนกลาง + เน็ต</span><span>฿{(pricingRates.commonFee + pricingRates.internetFee).toLocaleString()}</span></div>
                  {rooms.find(r => r.id === verifyingInvoice.roomId) && (
                    <>
                      <div className="flex justify-between text-blue-600">
                        <span>ค่าน้ำ ({rooms.find(r => r.id === verifyingInvoice.roomId)!.currentWater - rooms.find(r => r.id === verifyingInvoice.roomId)!.lastWater} หน่วย)</span>
                        <span>฿{((rooms.find(r => r.id === verifyingInvoice.roomId)!.currentWater - rooms.find(r => r.id === verifyingInvoice.roomId)!.lastWater) * pricingRates.waterRate).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-yellow-600">
                        <span>ค่าไฟ ({rooms.find(r => r.id === verifyingInvoice.roomId)!.currentElectric - rooms.find(r => r.id === verifyingInvoice.roomId)!.lastElectric} หน่วย)</span>
                        <span>฿{((rooms.find(r => r.id === verifyingInvoice.roomId)!.currentElectric - rooms.find(r => r.id === verifyingInvoice.roomId)!.lastElectric) * pricingRates.electricRate).toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  <div className="border-t border-dashed border-gray-300 pt-2 mt-2 flex justify-between text-lg font-black text-gray-800">
                    <span>ยอดสุทธิ</span>
                    <span className="text-blue-600">฿{verifyingInvoice.amount.toLocaleString()}.00</span>
                  </div>
                </div>
              </div>
              {verificationStep === 'idle' && (
                <div className="space-y-4">
                  <div className="w-48 h-48 bg-gray-100 mx-auto rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center flex-col gap-2"><IconScan /><span className="text-xs text-gray-400">จำลองพื้นที่กล้อง / QR Code</span></div>
                  <button onClick={handleSimulateScan} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all active:scale-95">สแกนตรวจสอบ (จำลอง)</button>
                </div>
              )}
              {verificationStep === 'scanning' && (<div className="py-10 flex flex-col items-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div><p className="text-blue-600 font-medium animate-pulse">กำลังติดต่อธนาคาร...</p><p className="text-xs text-gray-400 mt-2">ตรวจสอบลายเซ็นดิจิทัล & ยอดเงิน</p></div>)}
              {verificationStep === 'result' && verificationResult && (
                <div className="animate-fade-in-up">
                  <div className="flex justify-center mb-4">{verificationResult.success ? <IconCheckCircle /> : <IconAlert />}</div>
                  <h4 className={`text-lg font-bold mb-2 ${verificationResult.success ? 'text-green-600' : 'text-red-600'}`}>{verificationResult.success ? 'ตรวจสอบสำเร็จ' : 'ตรวจสอบล้มเหลว'}</h4>
                  <p className="text-gray-600 mb-4">{verificationResult.message}</p>
                  <button onClick={() => setVerifyingInvoice(null)} className={`w-full py-3 rounded-xl font-bold text-white shadow-md transition-all ${verificationResult.success ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}`}>{verificationResult.success ? 'เสร็จสิ้น (ตกลง)' : 'ปิดหน้าต่าง'}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}