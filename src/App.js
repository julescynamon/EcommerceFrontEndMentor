import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Homepage from "./Pages/homepage/Homepage";
import "./app.scss";
import { useState } from "react";


function App() {

	const [productQuantity, setProductQuantity] = useState(0);
	const [cartProductQuantity, setCartProductQuantity] = useState(0);

	return (
		<div>
			<Header 
				cartProductQuantity={cartProductQuantity}
				setCartProductQuantity={setCartProductQuantity} 
				/>
			<Homepage 
				productQuantity={productQuantity}
				setProductQuantity={setProductQuantity}
				setCartProductQuantity={setCartProductQuantity}
				/>
			<Footer />
		</div>
	);
}

export default App;
