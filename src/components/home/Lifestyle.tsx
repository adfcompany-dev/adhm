"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { CAFE_IMAGES } from '@/data/rooms';
import { Coffee, Car, Shield, Star } from 'lucide-react';

export default function Lifestyle() {
    return (
        <section id="lifestyle" className="py-24 bg-[#F9F9F9]">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2F3630]">Special Benefits</h2>
                    <p className="text-gray-600">입주민만을 위한 특별한 혜택과 프리미엄 옵션</p>
                </div>

                <div className="mb-16">
                    {/* Cafe Visual - Full Width */}
                    <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg relative bg-white">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            className="h-full w-full"
                        >
                            {CAFE_IMAGES.map((src, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="relative w-full h-full">
                                        <Image src={src} alt={`Cafe image ${idx}`} fill className="object-cover" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-8 py-4 rounded-xl z-10">
                            <h3 className="font-bold text-xl text-[#2F3630] mb-1">Cafe Lounge: Allday Financier</h3>
                            <p className="text-gray-600">입주민을 위한 1층 감성 카페 & 라운지</p>
                        </div>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<Car size={32} />}
                        title="편리한 주차"
                        desc="총 3대 주차 공간 확보 (별도 문의)"
                    />
                    <FeatureCard
                        icon={<Star size={32} />}
                        title="Full Options"
                        desc="시스템에어컨, 냉장고, 세탁기 등 풀옵션"
                    />
                    <FeatureCard
                        icon={<Shield size={32} />}
                        title="Safety"
                        desc="CCTV, 현관보안, 안전한 주거환경"
                    />
                    <FeatureCard
                        icon={<div className="text-2xl">✨</div>}
                        title="Rooftop"
                        desc="탁 트인 옥상 공간과 프라이빗 테라스"
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-6 rounded-xl text-center shadow-md hover:-translate-y-1 transition-transform duration-300">
            <div className="text-[#4A5D4F] mb-4 flex justify-center">{icon}</div>
            <h4 className="font-bold mb-2 text-gray-800">{title}</h4>
            <p className="text-xs md:text-sm text-gray-500 break-keep">{desc}</p>
        </div>
    )
}
