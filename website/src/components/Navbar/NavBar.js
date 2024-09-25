import React, { useState, useEffect } from "react";
import NavLinks from "../Navbar/NavLinks";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/shhacc-logo.png";

const NavBar = () => {
	const [top, setTop] = useState(!window.scrollY);
	const [isOpen, setisOpen] = React.useState(false);
	function handleClick() {
		setisOpen(!isOpen);
	}

	useEffect(() => {
		const scrollHandler = () => {
			window.scrolly > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<nav
			className={`bg-white fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
				!top && "bg-white shadow-lg"
			}`}
		>
			<div className="bg-white flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 px-4 md:px-0">
				<p className="text-center">
					For a <span className="font-bold">free care consultation</span>, call:{" "}
					<a href="tel:+61286033218" className="underline">
						+61 2 8603 3218
					</a>
				</p>
				<p className="text-center">
					Email:{" "}
					<a href="mailto:admin@shhacc.com.au" className="underline">
						admin@shhacc.com.au
					</a>
				</p>
			</div>
			<div className="flex flex-row justify-between items-center px-4 md:px-12">
				<div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
					<HashLink smooth to="/#hero" className="flex items-center">
						<img
							alt="Shhacc Logo"
							className="object-contain h-12 w-12"
							src={logo}
						/>
						<h1 className="font-extrabold text-2xl md:text-4xl ml-2">
							<span className="text-[#6155A4]">S</span>
							<span className="text-[#67308F]">H</span>
							<span className="text-[#932A8E]">H</span>
							<span className="text-[#ED2079]">A</span>
							<span className="text-[#F27BAA]">C</span>
							<span className="text-[#6155A4]">C</span>
						</h1>
					</HashLink>
				</div>
				<div className="group flex flex-col items-center">
					<button
						className="p-2 rounded-lg lg:hidden text-blue-900"
						onClick={handleClick}
					>
						<svg
							className="h-6 w-6 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							{isOpen && (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							)}
							{!isOpen && (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
						</svg>
					</button>
					<div className="hidden space-x-6 lg:inline-block p-5">
						<NavLinks />
					</div>

					<div
						className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${
							isOpen ? "block" : "hidden"
						} `}
					>
						<div className="flex flex-col space-y-6">
							<NavLinks />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
