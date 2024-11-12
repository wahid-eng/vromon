import brand1 from '../../assets/images/brand-1.svg';
import brand2 from '../../assets/images/brand-2.svg';
import brand3 from '../../assets/images/brand-3.svg';
import brand4 from '../../assets/images/brand-4.svg';
import brand5 from '../../assets/images/brand-5.svg';

export default function Brands() {
	return (
		<section>
			<div className="container 2xl:max-w-screen-xl py-20 flex flex-wrap gap-8 justify-center lg:justify-between">
				<img src={brand1} alt="Tripadvisor" className="w-32 h-12" />
				<img src={brand2} alt="Tripadvisor" className="w-32 h-12" />
				<img src={brand3} alt="Tripadvisor" className="w-32 h-12" />
				<img src={brand4} alt="Tripadvisor" className="w-32 h-12" />
				<img src={brand5} alt="Tripadvisor" className="w-32 h-12" />
			</div>
		</section>
	);
}
