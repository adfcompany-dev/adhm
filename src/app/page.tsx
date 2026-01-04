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
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <p className="text-gray-500 font-medium">지도 API 영역</p>
            </div>
            {/* Simulated map overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin size={48} className="text-[#2F3630] fill-white animate-bounce" />
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black/20 rounded-full blur-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[#4A5D4F] font-bold tracking-widest text-sm uppercase">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#2F3630]">입주 상담 문의</h2>
            <p className="mt-4 text-gray-600">
              궁금한 점이 있으신가요?<br />
              아래 양식을 작성해 주시거나 전화 주시면 친절히 안내해 드립니다.
            </p>

            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 text-lg font-medium">
              <a href="tel:010-8903-8833" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F5F5F7] rounded-full hover:bg-gray-200 transition-colors">
                <Phone size={20} />
                010-8903-8833
              </a>
              <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FAE100] text-[#371D1E] rounded-full hover:bg-[#F9D000] transition-colors">
                <span className="font-bold">TALK</span>
                카카오톡 문의하기
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">이름</label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#4A5D4F] focus:ring-0 transition-colors"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                <input type="tel" id="phone" name="phone" required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#4A5D4F] focus:ring-0 transition-colors"
                  placeholder="010-1234-5678"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="type" className="block text-sm font-bold text-gray-700 mb-2">관심 타입</label>
              <select id="type" name="type"
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
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#4A5D4F] focus:ring-0 transition-colors resize-none"
                placeholder="입주 희망일이나 궁금한 점을 적어주세요."
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-[#2F3630] text-white font-bold text-lg rounded-xl hover:bg-[#3E4740] transition-all transform hover:-translate-y-1 shadow-lg">
              문의하기
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
