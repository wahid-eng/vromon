import vromonLogo from '../../assets/images/vromon-logo.svg';
import Button from '../Button/Button';

export default function Header() {
	return (
		<header>
			<div className="bg-[#FF5722] w-[500px] h-[500px] absolute -translate-x-1/2 -translate-y-1/3 rounded-full opacity-50 blur-[500px] -z-10"></div>
			<div className="container 2xl:max-w-screen-xl py-8 flex items-center justify-between">
				<a href="#">
					<figure>
						<img src={vromonLogo} alt="Vromon Logo" />
					</figure>
				</a>
				<div className="flex gap-4">
					<Button className="bg-white !text-violet-700 border-violet-100">
						Login
					</Button>
					<Button>Sign Up</Button>
				</div>
			</div>
		</header>
	);
}
