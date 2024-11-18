import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import thumb1 from '../../assets/images/destination-1.webp';
import thumb2 from '../../assets/images/destination-2.webp';
import thumb3 from '../../assets/images/destination-3.webp';
import thumb4 from '../../assets/images/destination-4.webp';
import thumb5 from '../../assets/images/destination-5.webp';
import thumb6 from '../../assets/images/destination-6.webp';
import star from '../../assets/images/star.svg';
import backgroundElem from '../../assets/images/destination-bg.svg';

export default function Destinations() {
	return (
		<section className="my-32 relative">
			<img
				src={backgroundElem}
				alt="Destination Background"
				className="absolute right-0 top-0 translate-y-full"
				loading="lazy"
			/>
			<div className="container 2xl:max-w-screen-xl">
				<div className="font-bold mb-16 text-center xl:text-start">
					<h4 className="text-pink-500 text-2xl uppercase mb-4">
						Top Destination
					</h4>
					<p className="text-4xl">Explore top destination</p>
				</div>
				<Swiper
					modules={[Autoplay, Navigation, A11y]}
					breakpoints={{
						575: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
						1280: { slidesPerView: 4 },
					}}
					spaceBetween={20}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					navigation
				>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb1}
								alt="Destination thumbnail"
								className="w-full h-72 object-fill"
								loading="lazy"
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
										loading="lazy"
									/>
								</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb2}
								alt="Destination thumbnail"
								className="w-full h-72 object-fill"
								loading="lazy"
							/>
							<div className="p-6 grid gap-3">
								<h4 className="text-xl font-bold">
									Ocean with full of Mermid Colors
								</h4>
								<p className="font-bold text-pink-500">$20.99</p>
								<p className="text-gray-500 text-sm">Maldives</p>
								<div className="flex gap-2 items-center font-bold mt-1">
									<p>4.5</p>
									<img
										src={star}
										alt="Star"
										className="w-5 h-5 object-contain"
										loading="lazy"
									/>
								</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb3}
								alt="Destination thumbnail"
								className="w-full h-72 object-fill"
								loading="lazy"
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
										loading="lazy"
									/>
								</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb4}
								alt="Destination thumbnail"
								className="w-full h-72 object-fill"
								loading="lazy"
							/>
							<div className="p-6 grid gap-3">
								<h4 className="text-xl font-bold">
									A blend of tradition and modernity
								</h4>
								<p className="font-bold text-pink-500">$200.50</p>
								<p className="text-gray-500 text-sm">Tokyo, Japan</p>
								<div className="flex gap-2 items-center font-bold mt-1">
									<p>4.7</p>
									<img
										src={star}
										alt="Star"
										className="w-5 h-5 object-contain"
										loading="lazy"
									/>
								</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb5}
								alt="Destination thumbnail"
								className="w-full h-72 object-fill"
								loading="lazy"
							/>
							<div className="p-6 grid gap-3">
								<h4 className="text-xl font-bold">
									Serene beaches and lush rice terraces
								</h4>
								<p className="font-bold text-pink-500">$100.00</p>
								<p className="text-gray-500 text-sm">Bali, Indonesia</p>
								<div className="flex gap-2 items-center font-bold mt-1">
									<p>4.4</p>
									<img
										src={star}
										alt="Star"
										className="w-5 h-5 object-contain"
										loading="lazy"
									/>
								</div>
							</div>
						</a>
					</SwiperSlide>
					<SwiperSlide>
						<a
							href="#"
							className="grid bg-white border border-violet-50 rounded-3xl overflow-hidden"
						>
							<img
								src={thumb6}
								alt="Destination thumbnail"
								className="w-full h-72 object-fill"
								loading="lazy"
							/>
							<div className="p-6 grid gap-3">
								<h4 className="text-xl font-bold">
									The Eiffel Tower and Louvre Museum.
								</h4>
								<p className="font-bold text-pink-500">$450.33</p>
								<p className="text-gray-500 text-sm">Paris, France</p>
								<div className="flex gap-2 items-center font-bold mt-1">
									<p>4.2</p>
									<img
										src={star}
										alt="Star"
										className="w-5 h-5 object-contain"
										loading="lazy"
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
