export default function Footer() {
    return (
        <footer className="bg-[#1a1f1b] text-white py-12 text-center md:text-left">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="md:col-span-2">
                        <h5 className="font-black text-2xl mb-4 tracking-tighter">A.D.H MUKDONG</h5>
                        <p className="text-gray-400 text-sm mb-6 max-w-sm">
                            보통의 날들에 특별함을 더하는 공간,<br />
                            올데이하우스 묵동에서 당신만의 라이프스타일을 완성하세요.
                        </p>
                        <p className="text-gray-500 text-xs">
                            &copy; 2026 Alldayhouse. All rights reserved.
                        </p>
                    </div>

                    <div>
                        <h6 className="font-bold mb-4 text-gray-300">Contact</h6>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>서울시 중랑구 묵동 246-13 (먹골역 도보 5분)</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-bold mb-4 text-gray-300">Menu</h6>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#home" className="hover:text-white">Home</a></li>
                            <li><a href="#about" className="hover:text-white">About</a></li>
                            <li><a href="#rooms" className="hover:text-white">Types & Pricing</a></li>
                            <li><a href="#contact" className="hover:text-white">Inquiry</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}
