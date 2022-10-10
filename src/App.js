import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import React, { Component, Fragment } from "react";
import NavBar from "./components/navbar/NavBar";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import ProductPage from "./pages/productPage/ProductPage";
import CartPage from "./pages/cartPage/CartPage";
import PageNotFound from "./pages/notFound/PageNotFound";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Router>
					<NavBar />
					<Routes>
						<Route />
						<Route exact path="/" element={<Navigate to="/category/all" />} />
						<Route exact path="/product/:productId" element={<ProductPage />} />
						<Route path="/category/:category" element={<CategoryPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Router>
			</Fragment>
		);
	}
}

export default App;
