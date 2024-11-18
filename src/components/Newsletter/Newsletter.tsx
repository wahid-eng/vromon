import Button from '../Button/Button';
import bgElem1 from '../../assets/images/newsletter-bg-1.svg';
import bgElem2 from '../../assets/images/newsletter-bg-2.svg';

export default function Newsletter() {
	return (
		<section className="relative">
			<img
				src={bgElem2}
				alt="Spiral"
				className="absolute right-0 bottom-0 translate-y-1/2"
				loading="lazy"
			/>
			<div className="container 2xl:max-w-screen-xl relative">
				<img
					src={bgElem1}
					alt="Dotted Triangle"
					className="absolute inset-0 -translate-x-3 -translate-y-6"
					loading="lazy"
				/>
				<div className="bg-[#FACD49] bg-opacity-10 py-32 px-16">
					<h4 className="text-pink-500 text-2xl uppercase font-bold text-center mb-4">
						Subscribe to our newsletter
					</h4>
					<p className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
						Prepare yourself & let&apos;s explore the beauty of the world
					</p>
					<form
						className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8"
						method="POST"
					>
						<input
							type="text"
							className="bg-white shadow rounded-full flex-1 px-8 py-4 md:py-3 placeholder:text-gray-500 font-bold focus:outline-none focus:shadow-xl transition-shadow"
							placeholder="Email address"
						/>
						<Button
							type="button"
							className="px-12 py-3 justify-center md:py-6 rounded-full"
						>
							Subscribe
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
