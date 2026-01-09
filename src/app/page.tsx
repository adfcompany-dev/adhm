"use client";
import { useState } from 'react';
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Lifestyle from "@/components/home/Lifestyle";
import Rooms from "@/components/home/Rooms";
import Footer from "@/components/common/Footer";
import { Flag, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <Lifestyle />
      <Rooms />

      {/* Location Section */}
      <section id="location" className="py-24 bg-[#F5F5F7]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#2F3630]">Location</h2>
          <p className="text-gray-600 mb-10">서울시 중랑구 묵동 246-13 (먹골역 도보 5분)</p>

          <div className="w-full h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden relative group">
            {/* Placeholder for map - In real app, use Naver/Kakao Maps API */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.644578147285!2d127.0754868!3d37.6146313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbb768d33666b%3A0x2a30d55655555555!2z7ISc7IqV7Yq567OE7IucIOlykOuekeq1rCDrqqnrjZkgMjQ2LTEz!5e0!3m2!1sko!2skr!4v1704360000000!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alldayhouse Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[#4A5D4F] font-bold tracking-widest text-sm uppercase">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#2F3630]">입주 상담 문의</h2>
            <p className="mt-4 text-gray-600">
              궁금한 점이 있으신가요?<br />
              아래 양식을 작성해 주시거나 전화 주시면 친절히 안내해 드립니다.
            </p>
            <br />
          </div>

          <ContactForm />

        </div>
      </section>


      <Footer />
    </main>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'A',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const FORMSPREE_URL = "https://formspree.io/f/xlgdyjop";

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', type: 'A', message: '' });
        alert("문의가 성공적으로 접수되었습니다. 확인 후 상세히 답변 드리겠습니다.");
      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      console.error(error);
      setStatus('error');
      alert("일시적인 오류로 접수에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">이름</label>
          <input type="text" id="name" name="name" required
            value={formData.name} onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#4A5D4F] focus:ring-0 transition-colors"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
          <input type="tel" id="phone" name="phone" required
            value={formData.phone} onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#4A5D4F] focus:ring-0 transition-colors"
            placeholder="010-1234-5678"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="type" className="block text-sm font-bold text-gray-700 mb-2">관심 타입</label>
        <select id="type" name="type"
          value={formData.type} onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#4A5D4F] focus:ring-0 transition-colors"
        >
          <option value="A">Type A (201호, 301호)</option>
          <option value="B">Type B (202호, 302호)</option>
          <option value="C">Type C (401호 펜트하우스)</option>
          <option value="Space">상가 임대</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">문의 내용</label>
        <textarea id="message" name="message" rows={4}
          value={formData.message} onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#4A5D4F] focus:ring-0 transition-colors resize-none"
          placeholder="입주 희망일이나 궁금한 점을 적어주세요."
        ></textarea>
      </div>

      <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-[#2F3630] text-white font-bold text-lg rounded-xl hover:bg-[#3E4740] transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
        {status === 'submitting' ? '전송 중...' : '문의하기'}
      </button>
    </form>
  );
}
