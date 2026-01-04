"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ROOMS_DATA } from '@/data/rooms';

export default function Rooms() {
    const [activeTab, setActiveTab] = useState(ROOMS_DATA[0].id);

    const activeRoom = ROOMS_DATA.find(r => r.id === activeTab) || ROOMS_DATA[0];

    // Logic to handle image switching (main image vs thumbnails)
    const [currentMainImage, setCurrentMainImage] = useState(activeRoom.mainImage);

    // When tab changes, reset the main image to the default for that room
    const handleTabChange = (id: string) => {
        setActiveTab(id);
        const room = ROOMS_DATA.find(r => r.id === id);
        if (room) setCurrentMainImage(room.mainImage);
    };

    return (
        <section id="rooms" className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2F3630]">Our Rooms</h2>
                    <p className="text-gray-600">당신의 라이프스타일에 맞는 공간을 선택하세요</p>
                </div>

                {/* Tab Controls */}
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    {ROOMS_DATA.map((room) => (
                        <button
                            key={room.id}
                            onClick={() => handleTabChange(room.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === room.id
                                    ? 'bg-[#2F3630] text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {room.title}
                        </button>
                    ))}
                </div>

                {/* Active Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start animate-fade-in-up">

                    {/* Gallery Area */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                            <Image
                                src={currentMainImage}
                                alt="Main view"
                                fill
                                className="object-cover transition-opacity duration-300"
                            />
                        </div>
                        {/* Thumbnails */}
                        <div className="flex flex-wrap gap-2">
                            {activeRoom.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentMainImage(img)}
                                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${currentMainImage === img ? 'border-[#4A5D4F] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info Area */}
                    <div className="bg-gray-50 p-8 rounded-2xl h-full border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-[#2F3630] mb-2">{activeRoom.title}</h3>
                        <p className="text-[#4A5D4F] font-bold text-lg mb-6">{activeRoom.price}</p>

                        <div className="space-y-6">
                            <InfoItem label="대상 호수" value={activeRoom.units.join(", ")} />
                            <InfoItem label="구조" value={activeRoom.specs.structure} />
                            <InfoItem label="전용면적" value={activeRoom.specs.area} />
                            <InfoItem label="특징" value={activeRoom.specs.features} />
                        </div>

                        <div className="mt-10 p-4 bg-white rounded-lg border border-gray-200 text-sm text-gray-600">
                            💡 <strong>TIP:</strong> 방문 예약 시 실제 호수를 직접 둘러보실 수 있습니다.
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function InfoItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-gray-200 pb-3 last:border-0">
            <span className="text-gray-500 font-medium w-24 shrink-0">{label}</span>
            <span className="text-gray-800 break-keep">{value}</span>
        </div>
    )
}
