import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useState } from 'react';
import Homepage from "./Pages/homepage/Homepage";
import "./app.scss";


function App() {

	const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

	return (
		<div className={ isOpen ? "dark-back" : "" }>
			<Header toggleMenu={toggleMenu} isOpen={isOpen} />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
