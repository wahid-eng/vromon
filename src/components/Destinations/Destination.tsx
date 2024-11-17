import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import thumb1 from '../../assets/images/destination-1.png';
import thumb2 from '../../assets/images/destination-2.png';
import thumb3 from '../../assets/images/destination-3.png';
import star from '../../assets/images/star.svg';
import backgroundElem from '../../assets/images/destination-bg.svg';

export default function Destinations() {
	return (
		<section className="mt-16 relative">
			<img
				src={backgroundElem}
				alt="Destination Background"
				className="absolute right-0 top-0 translate-y-full"
			/>
			<div className="container 2xl:max-w-screen-xl">
				<div className="font-bold">
					<h4 className="text-pink-500 text-2xl uppercase mb-4">
						Top Destination
					</h4>
					<p className="text-4xl">Explore top destination</p>
				</div>
				<Swiper
					modules={[Autoplay, Navigation, A11y]}
					slidesPerView={4}
					spaceBetween={20}
					loop={true}
					// autoplay={{
					// 	delay: 8000,
					// 	disableOnInteraction: false,
					// }}
					// autoHeight={true}
					navigation
				>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white shadow-2xl shadow-violet-100 border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb1}
								alt="Destination thumbnail"
								className="w-full object-contain"
							/>
							<div className="p-6 grid gap-3">
								<h4 className="text-xl font-bold">
									Paradise Beach, Bantayan Island
								</h4>
								<p className="font-bold text-pink-500">$550.16</p>
								<p className="text-gray-500 text-sm">Rome, Italy</p>
								<div className="flex gap-2 items-center font-bold mt-1">
									<p>4.8</p>
									<img
										src={star}
										alt="Star"
										className="w-5 h-5 object-contain"
									/>
								</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white shadow-2xl shadow-violet-100 border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb2}
								alt="Destination thumbnail"
								className="w-full object-contain"
							/>
							<div className="p-6 grid gap-3">
								<h4 className="text-xl font-bold">Ocean with full of Colors</h4>
								<p className="font-bold text-pink-500">$20.99</p>
								<p className="text-gray-500 text-sm">Maldives</p>
								<div className="flex gap-2 items-center font-bold mt-1">
									<p>4.5</p>
									<img
										src={star}
										alt="Star"
										className="w-5 h-5 object-contain"
									/>
								</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white shadow-2xl shadow-violet-100 border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb3}
								alt="Destination thumbnail"
								className="w-full object-contain"
							/>
							<div className="p-6 grid gap-3">
								<h4 className="text-xl font-bold">
									Mountain View, Above the cloud
								</h4>
								<p className="font-bold text-pink-500">$150.27</p>
								<p className="text-gray-500 text-sm">Nepal</p>
								<div className="flex gap-2 items-center font-bold mt-1">
									<p>4.9</p>
									<img
										src={star}
										alt="Star"
										className="w-5 h-5 object-contain"
									/>
								</div>
							</div>
						</a>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
