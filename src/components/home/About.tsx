import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 bg-[#4A5D4F] text-white text-xs font-bold rounded-full mb-4">Brand Story</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2F3630]">
                        단순히 사는 곳이 아닌,<br />삶을 누리는 공간
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        (주)에이디에프컴퍼니는 편리함과 라이프스타일 서비스가 결합된<br className="hidden md:block" />
                        새로운 형태의 주거 문화를 제안합니다.<br className="hidden md:block" />
                        당신의 일상이 올데이하우스에서 더욱 빛나기를 바랍니다.
                    </p>
                </div>

                <div className="w-full h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/images/exterior2.jpeg"
                        alt="Alldayhouse Building View"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
