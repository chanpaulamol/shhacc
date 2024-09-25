import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
	return (
		<>
			<HashLink
				className="text-gray-500 font-extrabold px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#932A8E] hover:text-white"
				smooth
				to="/#about"
			>
				About Us
			</HashLink>
			<HashLink
				className="text-gray-500 font-extrabold px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#932A8E] hover:text-white"
				smooth
				to="/#services"
			>
				Services
			</HashLink>
			<HashLink
				className="text-gray-500 font-extrabold px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#932A8E] hover:text-white"
				to="/contact#contact"
			>
				Contact Us
			</HashLink>
		</>
	);
};

export default NavLinks;
