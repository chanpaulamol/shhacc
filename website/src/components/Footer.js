import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer max-w-full mx-auto px-2 sm:px-6 bg-gray-100 border-t border-b py-30">
					<div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
						<div className="col-span-12 lg:col-span-4">
							<div className="box-border border-b-4 border-[#932A8E] p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
								<div className="flex items-center">
									<h3 className="font-extrabold text-2xl md:text-4xl ml-2">
										<span className="text-[#6155A4]">S</span>
										<span className="text-[#67308F]">H</span>
										<span className="text-[#932A8E]">H</span>
										<span className="text-[#ED2079]">A</span>
										<span className="text-[#F27BAA]">C</span>
										<span className="text-[#6155A4]">C</span>
									</h3>
								</div>
								<div className="text-md font-medium text-gray-600">
									<h5>Office</h5>
									<p>Sydeny, Australia</p>
								</div>
							</div>
						</div>

						<div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
							<h6 className="text-[#932A8E] text-xl font-bold mb-4">LINKS</h6>
							<ul className="text-md">
								<li className="mb-2">
									<HashLink
										to="#about"
										className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
									>
										About
									</HashLink>
								</li>
								<li className="mb-2">
									<HashLink
										to="#services"
										className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
									>
										Services
									</HashLink>
								</li>
								<li className="mb-2">
									<HashLink
										to="/contact#contact"
										className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
									>
										Contact
									</HashLink>
								</li>
							</ul>
						</div>

						<div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
							<h6 className="text-[#932A8E] text-xl font-bold mb-4">
								OUR SERVICES
							</h6>
							<ul className="text-md">
								<li className="mb-2">
									<Link to="#" className="text-[#013289] hover:text-[#932A8E] ">
										Accomodation
									</Link>
								</li>
								<li className="mb-2">
									<Link to="#" className="text-[#013289] hover:text-[#932A8E]">
										Therapeutic Supports- Social Work
									</Link>
								</li>
								<li className="mb-2">
									<Link to="#" className="text-[#013289] hover:text-[#932A8E]">
										Household Tasks
									</Link>
								</li>
								<li className="mb-2">
									<Link to="#" className="text-[#013289] hover:text-[#932A8E]">
										Interpreting / Translation
									</Link>
								</li>
							</ul>
						</div>

						<div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase">
							<div className="text-xl mb-6 text-[#932A8E]">
								Social Media Links
							</div>
							<div className="text-md font-medium mb-6">
								Follow us on social media.
							</div>
							<div className="mx-auto text-center mt-2">
								<ul className="flex justify-center mb-4 md:mb-0">
									<li className="ml-4">
										<Link
											to="#"
											className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
											aria-label="Facebook"
										>
											<svg
												className="w-8 h-8 fill-current"
												viewBox="0 0 32 32"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
											</svg>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
						<div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
							<div className="text-sm text-gray-700 font-semibold py-1">
								Copyright &copy; {new Date().getFullYear()}
								{"  "}
								<HashLink to="#" className=" hover:text-gray-900">
									<span className="text-[#6155A4]">S</span>
									<span className="text-[#67308F]">H</span>
									<span className="text-[#932A8E]">H</span>
									<span className="text-[#ED2079]">A</span>
									<span className="text-[#F27BAA]">C</span>
									<span className="text-[#6155A4]">C</span>
								</HashLink>
								. All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
