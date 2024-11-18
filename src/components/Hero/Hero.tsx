import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import heroBg from '../../assets/images/hero-bg.svg';
import heroThumb1 from '../../assets/images/hero-thumb-1.webp';
import heroThumb2 from '../../assets/images/hero-thumb-2.webp';
import heroThumb3 from '../../assets/images/hero-thumb-3.webp';

export default function Hero() {
	return (
		<section>
			<div className="container 2xl:max-w-screen-xl py-8 flex flex-col-reverse lg:flex-row items-center justify-between">
				<div className="grid gap-y-11 lg:w-5/12 -mt-28 lg:-mt-0 z-10">
					<Badge className="bg-white shadow-pink-100 w-64">
						<span className="text-pink-500">Explore the world!</span>
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10.7044 4.01898C10.034 4.01898 9.46373 4.4848 9.30365 5.11265H14.6863C14.5263 4.4848 13.956 4.01898 13.2856 4.01898H10.7044ZM16.2071 5.11264H18.1881C20.2891 5.11264 22 6.84428 22 8.97085C22 8.97085 21.94 9.8711 21.92 11.1248C21.918 11.224 21.8699 11.3212 21.7909 11.38C21.3097 11.7354 20.8694 12.0291 20.8294 12.0493C19.1686 13.1632 17.2386 13.947 15.1826 14.3369C15.0485 14.3632 14.9165 14.2934 14.8484 14.1739C14.2721 13.1754 13.1956 12.5253 11.995 12.5253C10.8024 12.5253 9.71586 13.1683 9.12256 14.1678C9.05353 14.2853 8.92346 14.3531 8.7904 14.3278C6.75138 13.9369 4.82141 13.1541 3.17059 12.0594L2.21011 11.3911C2.13007 11.3405 2.08004 11.2493 2.08004 11.1481C2.05003 10.6316 2 8.97085 2 8.97085C2 6.84428 3.71086 5.11264 5.81191 5.11264H7.78289C7.97299 3.6443 9.2036 2.5 10.7044 2.5H13.2856C14.7864 2.5 16.017 3.6443 16.2071 5.11264ZM21.6598 13.3152L21.6198 13.3355C19.5988 14.6924 17.1676 15.5937 14.6163 15.9684C14.2561 16.019 13.8959 15.7861 13.7959 15.4216C13.5758 14.5912 12.8654 14.0443 12.015 14.0443H12.005H11.985C11.1346 14.0443 10.4242 14.5912 10.2041 15.4216C10.1041 15.7861 9.74387 16.019 9.38369 15.9684C6.83242 15.5937 4.4012 14.6924 2.38019 13.3355C2.37019 13.3254 2.27014 13.2646 2.1901 13.3152C2.10005 13.3659 2.10005 13.4874 2.10005 13.4874L2.17009 18.6519C2.17009 20.7785 3.87094 22.5 5.97199 22.5H18.018C20.1191 22.5 21.8199 20.7785 21.8199 18.6519L21.9 13.4874C21.9 13.4874 21.9 13.3659 21.8099 13.3152C21.7599 13.2849 21.6999 13.295 21.6598 13.3152ZM12.7454 17.5583C12.7454 17.9836 12.4152 18.3177 11.995 18.3177C11.5848 18.3177 11.2446 17.9836 11.2446 17.5583V16.2519C11.2446 15.8367 11.5848 15.4924 11.995 15.4924C12.4152 15.4924 12.7454 15.8367 12.7454 16.2519V17.5583Z"
								fill="#F85E9F"
							/>
						</svg>
					</Badge>
					<h1 className="font-bold text-5xl leading-tight md:text-6xl md:leading-tight">
						Travel <span className="text-pink-500">top destination</span> of the
						world
					</h1>
					<p className="text-lg">
						We always make our customer happy by providing as many choices as
						possible.
					</p>
					<div className="flex gap-4">
						<Button>Get Started</Button>
						<Button className="bg-white !text-violet-700 border-violet-100">
							<svg
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.9688 2.5C6.44875 2.5 1.96875 6.98 1.96875 12.5C1.96875 18.02 6.44875 22.5 11.9688 22.5C17.4888 22.5 21.9688 18.02 21.9688 12.5C21.9688 6.98 17.4988 2.5 11.9688 2.5ZM14.9688 14.73L12.0687 16.4C11.7087 16.61 11.3088 16.71 10.9187 16.71C10.5188 16.71 10.1287 16.61 9.76875 16.4C9.04875 15.98 8.61875 15.24 8.61875 14.4V11.05C8.61875 10.22 9.04875 9.47 9.76875 9.05C10.4888 8.63 11.3487 8.63 12.0787 9.05L14.9787 10.72C15.6987 11.14 16.1287 11.88 16.1287 12.72C16.1287 13.56 15.6987 14.31 14.9688 14.73Z"
									className="fill-violet-700"
								/>
							</svg>
							Watch Demo
						</Button>
					</div>
				</div>
				<div className="flex-1 relative lg:pt-20">
					<img
						src={heroBg}
						alt="Hero Background"
						className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-z-10 max-w-sm md:max-w-md lg:max-w-full"
						loading="lazy"
					/>
					<div className="items-center justify-center gap-8 hidden lg:flex">
						<div className="flex flex-col gap-8">
							<img
								src={heroThumb1}
								alt="Hero Thumb 1"
								className="rounded-3xl"
								loading="lazy"
							/>
							<img
								src={heroThumb2}
								alt="Hero Thumb 2"
								className="rounded-3xl"
								loading="lazy"
							/>
						</div>
						<img
							src={heroThumb3}
							alt="Hero Thumb 3"
							className="rounded-3xl"
							loading="lazy"
						/>
					</div>
					<Badge className="bg-white !text-violet-700 shadow-violet-200 w-48 absolute right-0 bottom-1/3 hidden lg:flex">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z"
								className="fill-violet-700"
							/>
						</svg>{' '}
						Top Places
					</Badge>

					<svg
						width="64"
						height="64"
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-20 bottom-1/2 hidden lg:block shadow-2xl shadow-pink-300 rounded-full"
					>
						<rect width="64" height="64" rx="32" className="fill-pink-500" />
						<path
							d="M44.5806 19.4426C43.9137 18.7581 42.9266 18.5031 42.0062 18.7715L20.5441 25.0127C19.573 25.2825 18.8847 26.0569 18.6993 27.0407C18.5099 28.042 19.1715 29.313 20.0359 29.8445L26.7466 33.9691C27.4349 34.3919 28.3233 34.2859 28.8928 33.7113L36.5773 25.9791C36.9641 25.5764 37.6043 25.5764 37.9913 25.9791C38.3781 26.3683 38.3781 26.9991 37.9913 27.4018L30.2934 35.1355C29.7225 35.7085 29.6158 36.6011 30.0359 37.2936L34.1363 44.0717C34.6165 44.8769 35.4435 45.3333 36.3505 45.3333C36.4573 45.3333 36.5773 45.3333 36.6841 45.3199C37.7245 45.1857 38.5514 44.4744 38.8582 43.4677L45.2209 22.033C45.501 21.1204 45.2475 20.1272 44.5806 19.4426Z"
							className="fill-white"
						/>
					</svg>

					<svg
						width="64"
						height="64"
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-1/2 bottom-20 hidden lg:block shadow-2xl shadow-orange-300 rounded-full"
					>
						<rect width="64" height="64" rx="32" className="fill-orange-500" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M28.6667 32.7383C32.3395 32.7383 35.2835 29.7561 35.2835 26.0358C35.2835 22.3155 32.3395 19.3333 28.6667 19.3333C24.994 19.3333 22.0499 22.3155 22.0499 26.0358C22.0499 29.7561 24.994 32.7383 28.6667 32.7383ZM28.6667 36.0203C23.2724 36.0203 18.6667 36.8828 18.6667 40.3285C18.6667 43.7731 23.2443 44.6667 28.6667 44.6667C34.0598 44.6667 38.6667 43.8041 38.6667 40.3583C38.6667 36.9125 34.0891 36.0203 28.6667 36.0203ZM42.5306 28.7838H44.1347C44.795 28.7838 45.3334 29.3297 45.3334 29.9993C45.3334 30.6688 44.795 31.2148 44.1347 31.2148H42.5306V32.7845C42.5306 33.4541 41.9937 34 41.3321 34C40.6718 34 40.1334 33.4541 40.1334 32.7845V31.2148H38.5321C37.8703 31.2148 37.3334 30.6688 37.3334 29.9993C37.3334 29.3297 37.8703 28.7838 38.5321 28.7838H40.1334V27.2155C40.1334 26.5459 40.6718 26 41.3321 26C41.9937 26 42.5306 26.5459 42.5306 27.2155V28.7838Z"
							className="fill-white"
						/>
					</svg>
				</div>
			</div>
			<div className="bg-[#FACD49] w-[250px] h-[500px] absolute right-0 bottom-0 translate-y-full rounded-l-full opacity-50 blur-[150px]"></div>
		</section>
	);
}
