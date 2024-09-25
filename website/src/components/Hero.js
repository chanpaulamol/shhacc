import React from "react";
import heroImg from "../images/hero-background.svg";

const Hero = () => {
	return (
		<div className="hero" id="hero">
			<div
				className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
				data-aos="zoom-in"
			>
				<div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
					<div
						className="lg:w-1/2 flex flex-col justify-center"
						data-aos="zoom-in"
						data-aos-delay="200"
					>
						<h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
							Improving the Quality of Life Outcomes for People with
							Disabilities
						</h1>
						<p className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
							Our mission at Sacred Heart Home and Community Care is to provide
							quality ongoing support and care that addresses individual needs
							within the secure and familiar surroundings of their own home.
						</p>
					</div>
					<div
						className="flex lg:justify-end w-full lg:w-1/2"
						data-aos="fade-up"
						data-aos-delay="700"
					>
						<img
							alt="Hero background"
							className="rounded-t float-right duration-1000 w-full"
							src={heroImg}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
