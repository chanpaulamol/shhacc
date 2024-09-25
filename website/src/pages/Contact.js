import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";

const Contact = () => {
	useDocTitle("SHHACC | Contact - Send us a message");

	return (
		<>
			<div>
				<NavBar />
			</div>
			<div
				id="contact"
				className="flex flex-col justify-center items-center w-full min-h-screen py-10 lg:py-24"
			>
				<div className="container mx-auto px-4 lg:px-10">
					<div className="w-full bg-white p-10 md:px-12 lg:w-8/12 lg:pl-10 lg:pr-20 mx-auto rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
						<div className="flex justify-center mb-8">
							<h1 className="font-bold text-center text-blue-900 text-4xl md:text-5xl tracking-tight">
								Contact Us
							</h1>
						</div>

						<div className="space-y-12 text-center">
							{/* Office Address */}
							<div className="flex flex-col items-center space-x-0 space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-center">
								<i className="fas fa-map-marker-alt text-blue-500 text-2xl lg:text-3xl"></i>
								<div>
									<h2 className="text-xl md:text-2xl font-semibold text-gray-900">
										Office Address
									</h2>
									<p className="text-gray-600">Sydney, Australia</p>
								</div>
							</div>

							{/* Phone Number */}
							<div className="flex flex-col items-center space-x-0 space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-center">
								<i className="fas fa-phone-alt text-blue-500 text-2xl lg:text-3xl"></i>
								<div>
									<h2 className="text-xl md:text-2xl font-semibold text-gray-900">
										Call Us
									</h2>
									<p className="text-gray-600">Tel: +618055384406</p>
								</div>
							</div>

							{/* Email Address */}
							<div className="flex flex-col items-center space-x-0 space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-center">
								<i className="fas fa-envelope text-blue-500 text-2xl lg:text-3xl"></i>
								<div>
									<h2 className="text-xl md:text-2xl font-semibold text-gray-900">
										Send an Email
									</h2>
									<p className="text-gray-600">admin@shhacc.com.au</p>
								</div>
							</div>

							{/* Social Media Links */}
							<div className="flex justify-center space-x-6 mt-6">
								{/* Facebook Icon with Link */}
								<a
									href="https://www.facebook.com/carecommunity"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
								>
									<svg
										className="w-6 h-6"
										viewBox="0 0 32 32"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
