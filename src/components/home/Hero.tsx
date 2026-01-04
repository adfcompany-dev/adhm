import Image from 'next/image';

export default function Hero() {
    return (
        <header id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-[-2]">
                <Image
                    src="/images/exterior1.jpeg"
                    alt="Alldayhouse Exterior"
                    fill
                    priority
                    className="object-cover scale-110"
                    quality={90}
                />
            </div>
            <div className="absolute inset-0 bg-black/40 z-[-1]" />

            <div className="relative z-10 px-4 max-w-4xl mx-auto">
                <p className="text-sm md:text-lg tracking-[0.2em] uppercase mb-4 opacity-0 animate-fade-in-up">Daily Specialness</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up delay-100">
                    보통 날들에<br />특별함을 더해보세요
                </h1>
                <p className="text-lg md:text-xl mb-10 text-white/80 opacity-0 animate-fade-in-up delay-200">
                    묵동의 새로운 프리미엄 라이프스테이지, 올데이하우스
                </p>
                <a href="#rooms" className="inline-block px-10 py-4 bg-white text-[#2F3630] font-bold text-lg rounded hover:bg-white/90 transition-all transform hover:-translate-y-1 opacity-0 animate-fade-in-up delay-300">
                    공간 둘러보기
                </a>
            </div>
        </header>
    );
}
