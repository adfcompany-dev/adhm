export interface RoomImage {
    src: string;
    alt: string;
    category?: 'living' | 'kitchen' | 'room' | 'bath' | 'terrace' | 'etc' | 'plan';
}

export interface RoomType {
    id: string;
    title: string;
    units: string[]; // e.g., ["201호", "301호"]
    price: string;
    specs: {
        structure: string;
        area: string;
        features: string;
    };
    mainImage: string;
    images: string[];
}

export const ROOMS_DATA: RoomType[] = [
    {
        id: "type-a",
        title: "Type A",
        units: ["201호", "301호"],
        price: "보증금 5,000만원 / 월 90만원",
        specs: {
            structure: "2룸 (거실 + 방2 + 화장실)",
            area: "약 9평",
            features: "효율적인 동선과 넓은 거실 공간",
        },
        mainImage: "/images/201/room-201-01.jpeg",
        // 7 images available for 201
        images: [
            "/images/201/room-201-01.jpeg",
            "/images/201/room-201-02.jpeg",
            "/images/201/room-201-03.jpeg",
            "/images/201/room-201-04.jpeg",
            "/images/201/room-201-05.jpeg",
            "/images/201/room-201-06.jpeg",
            "/images/201/room-201-07.jpg",
        ],
    },
    {
        id: "type-b",
        title: "Type B",
        units: ["202호", "302호"],
        price: "보증금 5,000만원 / 월 90만원",
        specs: {
            structure: "2룸 (거실 + 방2 + 화장실)",
            area: "약 9평",
            features: "프라이빗한 침실 구조와 아늑함",
        },
        mainImage: "/images/202/room-202-02.jpeg",
        // 6 images available for 202
        images: [
            "/images/202/room-202-01.jpeg",
            "/images/202/room-202-02.jpeg",
            "/images/202/room-202-03.jpeg",
            "/images/202/room-202-04.jpeg",
            "/images/202/room-202-05.jpeg",
            "/images/202/room-202-06.jpg",
        ],
    },
    {
        id: "type-c",
        title: "Type C (Penthouse)",
        units: ["401호"],
        price: "보증금 5,000만원 / 월 120만원",
        specs: {
            structure: "1.5룸 + 다락 + 전용 테라스",
            area: "약 14평 (실면적 + 다락 포함)",
            features: "높은 층고, 나만의 루프탑 테라스, 낭만적인 다락",
        },
        mainImage: "/images/401/room-401-04.jpeg",
        // 11 images available for 401
        images: [
            "/images/401/room-401-01.jpeg",
            "/images/401/room-401-02.jpeg",
            "/images/401/room-401-03.jpeg",
            "/images/401/room-401-04.jpeg",
            "/images/401/room-401-05.jpeg",
            "/images/401/room-401-06.jpeg",
            "/images/401/room-401-07.jpeg",
            "/images/401/room-401-08.jpeg",
            "/images/401/room-401-09.jpeg",
            "/images/401/room-401-10.jpeg",
            "/images/401/room-401-11.jpg",
        ],
    },
];

export const CAFE_IMAGES = [
    "/images/cafe/cafe-01.jpeg",
    "/images/cafe/cafe-02.jpg",
    "/images/cafe/cafe-03.jpeg",
    "/images/cafe/cafe-04.jpg",
    "/images/cafe/cafe-05.jpeg",
    "/images/cafe/cafe-06.jpg",
    "/images/cafe/cafe-07.jpeg",
    "/images/cafe/cafe-08.jpg",
    "/images/cafe/cafe-09.jpg",
    "/images/cafe/cafe-10.jpg",
];
