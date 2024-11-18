import './App.css';
import Brands from './components/Brands/Brands';
import Destinations from './components/Destinations/Destination';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Newsletter from './components/Newsletter/Newsletter';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonitals/Testimonials';
import Travelpoint from './components/Travelpoint/Travelpoint';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Brands />
			<Services />
			<Destinations />
			<Travelpoint />
			<Features />
			<Testimonials />
			<Newsletter />
			<Footer />
		</>
	);
}

export default App;
