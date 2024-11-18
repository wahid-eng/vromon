import travelpointThumb from '../../assets/images/travelpoint.webp';
import Badge from '../Badge/Badge';

export default function Travelpoint() {
	return (
		<section className="my-32 relative">
			<div className="bg-yellow-400 w-[75vw] lg:w-[50vw] h-96 lg:h-[550px] absolute bottom-0 lg:bottom-auto lg:top-1/2 left-0 lg:-translate-y-1/2 -z-10 rounded-r-full"></div>
			<div className="container 2xl:max-w-screen-xl flex flex-col-reverse lg:flex-row items-center gap-10">
				<div className="lg:w-1/2 xl:w-7/12 relative">
					<img
						src={travelpointThumb}
						alt="Travelpoint image"
						className="w-96 lg:w-full xl:w-4/5"
					/>
					<Badge className="bg-white !text-black shadow-black-100 w-56 absolute right-0 top-2/3 md:top-1/4 z-30">
						<svg
							width="24"
							height="24"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M33.9987 15.2433L35.199 16.4433C36.1495 17.3767 36.6664 18.6433 36.6664 19.9767C36.683 21.31 36.1662 22.5783 35.2325 23.5267C35.2214 23.5388 35.2102 23.5497 35.199 23.5603C35.1935 23.5657 35.188 23.5712 35.1824 23.5767L33.9987 24.76C33.5319 25.2267 33.265 25.86 33.265 26.5283V28.2433C33.265 31.01 31.0142 33.2617 28.2465 33.2617H26.5294C25.8624 33.2617 25.2289 33.5267 24.762 33.9933L23.5615 35.1933C22.5779 36.1783 21.294 36.66 20.0102 36.66C18.7265 36.66 17.4427 36.1783 16.459 35.2117L15.2419 33.9933C14.775 33.5267 14.1415 33.2617 13.4746 33.2617H11.7573C8.98962 33.2617 6.73881 31.01 6.73881 28.2433V26.5283C6.73881 25.86 6.47204 25.2267 6.00521 24.7433L4.80477 23.56C2.85406 21.6117 2.83739 18.4267 4.78809 16.4616L6.00521 15.2433C6.47204 14.7766 6.73881 14.1433 6.73881 13.46V11.76C6.73881 8.99331 8.98962 6.74498 11.7573 6.74498H13.4746C14.1415 6.74498 14.775 6.47665 15.2419 6.00998L16.4423 4.80998C18.393 2.84498 21.5775 2.84498 23.5449 4.79498L24.762 6.00998C25.2289 6.47665 25.8624 6.74498 26.5294 6.74498H28.2465C31.0142 6.74498 33.265 8.99331 33.265 11.76V13.4783C33.265 14.1433 33.5319 14.7766 33.9987 15.2433ZM15.7087 25.7433C16.1089 25.7433 16.4757 25.5933 16.7424 25.31L25.3122 16.745C25.879 16.1783 25.879 15.2433 25.3122 14.6766C24.7454 14.1116 23.8284 14.1116 23.2615 14.6766L14.6917 23.2433C14.1248 23.81 14.1248 24.7433 14.6917 25.31C14.9584 25.5933 15.3252 25.7433 15.7087 25.7433ZM22.828 24.2767C22.828 25.0933 23.4782 25.7433 24.2952 25.7433C25.0954 25.7433 25.7457 25.0933 25.7457 24.2767C25.7457 23.4783 25.0954 22.8267 24.2952 22.8267C23.4782 22.8267 22.828 23.4783 22.828 24.2767ZM15.7254 14.26C16.5257 14.26 17.1759 14.91 17.1759 15.71C17.1759 16.5283 16.5257 17.1767 15.7254 17.1767C14.9251 17.1767 14.2582 16.5283 14.2582 15.71C14.2582 14.91 14.9251 14.26 15.7254 14.26Z"
								className="fill-orange-500"
							/>
						</svg>{' '}
						Discounted Price
					</Badge>
				</div>
				<div className="flex-1 relative">
					<svg
						width="64"
						height="64"
						viewBox="0 0 112 112"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute right-0 top-full lg:top-24"
					>
						<rect
							width="112"
							height="112"
							rx="56"
							className="fill-yellow-400"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M71.522 56.002C71.522 57.629 72.858 58.9528 74.5 58.9528C75.328 58.9528 76 59.6186 76 60.439V65.7916C76 70.318 72.284 74 67.716 74H44.286C39.718 74 36 70.318 36 65.7916V60.439C36 59.6186 36.672 58.9528 37.5 58.9528C39.144 58.9528 40.48 57.629 40.48 56.002C40.48 54.4166 39.198 53.2236 37.5 53.2236C37.102 53.2236 36.722 53.067 36.44 52.7876C36.158 52.5082 36 52.1296 36 51.7373L36.004 46.2103C36.004 41.684 39.72 38 44.288 38H67.712C72.28 38 75.998 41.684 75.998 46.2103L76 51.5649C76 51.9573 75.842 52.3378 75.562 52.6152C75.28 52.8946 74.9 53.0512 74.5 53.0512C72.858 53.0512 71.522 54.375 71.522 56.002ZM60.504 57.296L62.862 55.021C63.272 54.6286 63.414 54.05 63.236 53.515C63.06 52.9798 62.6 52.5994 62.044 52.522L58.786 52.0504L57.328 49.1254C57.078 48.622 56.57 48.3089 56.004 48.3069H56C55.436 48.3069 54.928 48.6201 54.674 49.1234L53.216 52.0504L49.964 52.52C49.402 52.5994 48.942 52.9798 48.764 53.515C48.588 54.05 48.73 54.6286 49.138 55.021L51.496 57.296L50.94 60.5124C50.844 61.0672 51.07 61.6182 51.53 61.9492C51.79 62.1334 52.092 62.2286 52.398 62.2286C52.632 62.2286 52.868 62.171 53.084 62.0582L56 60.5402L58.91 62.0542C59.414 62.3216 60.012 62.28 60.47 61.9472C60.932 61.6182 61.158 61.0672 61.062 60.5124L60.504 57.296Z"
							fill="white"
						/>
					</svg>

					<h4 className="text-pink-500 text-2xl uppercase font-bold mb-4 text-center lg:text-start">
						Travel Point
					</h4>
					<p className="text-4xl font-bold mb-8 text-center lg:text-start">
						We helping you find your dream location
					</p>
					<p className="mb-12 text-center lg:text-start">
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC.
					</p>
					<div className="grid grid-cols-2 gap-6">
						<div className="border rounded-3xl p-4 text-center">
							<h4 className="text-orange-500 font-bold text-2xl">500+</h4>
							<p>Holiday Package</p>
						</div>
						<div className="border rounded-3xl p-4 text-center">
							<h4 className="text-orange-500 font-bold text-2xl">100+</h4>
							<p>Luxury Hotel</p>
						</div>
						<div className="border rounded-3xl p-4 text-center">
							<h4 className="text-orange-500 font-bold text-2xl">7+</h4>
							<p>Premium Airlines</p>
						</div>
						<div className="border rounded-3xl p-4 text-center">
							<h4 className="text-orange-500 font-bold text-2xl">2000+</h4>
							<p>Happy Customer</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
