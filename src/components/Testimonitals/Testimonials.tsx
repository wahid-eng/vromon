import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import testimonialBg from '../../assets/images/testimonial-bg.svg';
import avatar1 from '../../assets/images/avatar-1.svg';
import avatar2 from '../../assets/images/avatar-2.svg';
import star from '../../assets/images/star.svg';

export default function Testimonials() {
	return (
		<section className="relative min-h-screen">
			<img
				src={testimonialBg}
				alt=""
				className="absolute w-full h-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-10"
			/>
			<div className="container 2xl:max-w-screen-xl relative">
				<h4 className="text-pink-500 text-2xl uppercase font-bold text-center mb-4">
					Testimonials
				</h4>
				<p className="text-4xl font-bold text-center">Trust our clients</p>

				<Swiper
					modules={[Autoplay, Pagination, Navigation, A11y]}
					loop={true}
					autoplay={{
						delay: 8000,
						disableOnInteraction: false,
					}}
					autoHeight={true}
					pagination={{ clickable: true }}
					navigation
				>
					<SwiperSlide>
						<div className="grid gap-10 py-16">
							<img
								src={avatar1}
								alt="Mark Smith"
								className="w-24 h-24 object-contain mx-auto"
							/>
							<h4 className="text-xl text-center font-bold text-gray-500">
								<span className="text-orange-500">Mark Smith</span> / Travel
								Enthusiast
							</h4>
							<div className="flex gap-3 justify-center">
								{Array.from({ length: 5 }).map((_, i) => (
									<img src={star} alt="Star" key={i} />
								))}
							</div>
							<blockquote className="lg:w-2/3 mx-auto mb-8 text-center">
								<p className="text-xl">
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC.
								</p>
							</blockquote>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid gap-10 py-16">
							<img
								src={avatar2}
								alt="Mark Smith"
								className="w-24 h-24 object-contain mx-auto"
							/>
							<h4 className="text-xl text-center font-bold text-gray-500">
								<span className="text-orange-500">Zio Len</span> / Businessman
							</h4>
							<div className="flex gap-3 justify-center">
								{Array.from({ length: 5 }).map((_, i) => (
									<img src={star} alt="Star" key={i} />
								))}
							</div>
							<blockquote className="lg:w-2/3 mx-auto mb-8 text-center">
								<p className="text-xl">
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
								</p>
							</blockquote>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
