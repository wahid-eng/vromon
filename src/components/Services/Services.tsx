import service1 from '../../assets/images/service-1.svg';
import service2 from '../../assets/images/service-2.svg';
import service3 from '../../assets/images/service-3.svg';

export default function Services() {
	return (
		<section className="mt-16">
			<div className="container 2xl:max-w-screen-xl flex flex-col xl:flex-row items-center gap-10">
				<div className="xl:w-1/3 font-bold text-center xl:text-start">
					<h4 className="text-pink-500 text-2xl uppercase mb-4">Services</h4>
					<p className="text-4xl">Our top value categories for you</p>
				</div>
				<div className="w-full flex-1 flex flex-col md:flex-row gap-5">
					<div className="py-16 px-8 bg-white shadow-2xl shadow-violet-100 border border-violet-50 rounded-2xl grid gap-5 text-center">
						<img
							src={service1}
							alt="Tour Icon"
							className="w-12 h-12 object-contain mx-auto"
						/>
						<h4 className="font-bold text-xl">Best Tour Guide</h4>
						<div className="block bg-pink-500 h-[1px] w-1/6 mx-auto"></div>
						<p className="text-gray-500">
							What looked like a small patch of purple grass, above five feet.
						</p>
					</div>
					<div className="py-16 px-8 bg-white shadow-2xl shadow-violet-100 border border-violet-50 rounded-2xl grid gap-5 text-center">
						<img
							src={service2}
							alt="Booking Icon"
							className="w-12 h-12 object-contain mx-auto"
						/>
						<h4 className="font-bold text-xl">Easy Booking</h4>
						<div className="block bg-pink-500 h-[1px] w-1/6 mx-auto"></div>
						<p className="text-gray-500">
							Square, was moving across the sand in their direction.
						</p>
					</div>
					<div className="py-16 px-8 bg-white shadow-2xl shadow-violet-100 border border-violet-50 rounded-2xl grid gap-5 text-center">
						<img
							src={service3}
							alt="Tour Icon"
							className="w-12 h-12 object-contain mx-auto"
						/>
						<h4 className="font-bold text-xl">Weather Forecast</h4>
						<div className="block bg-pink-500 h-[1px] w-1/6 mx-auto"></div>
						<p className="text-gray-500">
							What looked like a small patch of purple grass, above five feet.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
