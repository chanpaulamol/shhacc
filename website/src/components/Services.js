import React from "react";
import accomodation from "../images/accomodation.svg";
import therapy from "../images/therapy.svg";
import householdTasks from "../images/house-chores.svg";
import img4 from "../images/consultation.svg";

const Services = () => {
	return (
		<div id="services" className="bg-gray-100 py-12">
			<section data-aos="zoom-in-down">
				<div className="my-4 py-4">
					<h2 className="my-2 text-center text-3xl text-[#932A8E] uppercase font-bold">
						services
					</h2>

					<div className="flex justify-center">
						<div className="w-24 border-b-4 border-[#932A8E]"></div>
					</div>
					<h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
						Our services are high-quality, sustainable, and tailored to meet the
						specific needs of our clients.
					</h2>
				</div>

				<div className="px-12" data-aos="fade-down" data-aos-delay="600">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
						<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
							<div className="m-2 text-justify text-sm">
								<img
									alt="card img"
									className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
									src={accomodation}
								/>
								<h2 className="font-semibold my-4 text-2xl text-center">
									Accomodation / Tenancy
								</h2>
								<p className="text-md font-medium">
									We provide a social worker with experience in assisting people
									from culturally diverse backgrounds to locate an affordable
									accomodation and establish tenancies where this is part of the
									NDIS plan.
								</p>
							</div>
						</div>

						<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
							<div className="m-2 text-justify text-sm">
								<img
									alt="card img"
									className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
									src={therapy}
								/>
								<h2 className="font-semibold my-4 text-2xl text-center">
									Therapeutic Supports- Social work
								</h2>
								<p className="text-md font-medium">
									We provide social work support in a range of situations,
									depending on the goals identified in participant's plans. This
									could include counselling for people adapting to new
									circumstances, or addressing personal issues that are
									impacting on their ability to live the good life.
								</p>
							</div>
						</div>

						<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
							<div className="m-2 text-justify text-sm">
								<img
									alt="card img"
									className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
									src={householdTasks}
								/>
								<h2 className="font-semibold my-4 text-2xl text-center">
									Household Tasks
								</h2>
								<p className="text-md font-medium">
									We provide household cleaning of all kind, including weekly
									rountine changing, spring cleaning, and cleaning in special
									circumstances. We do all forms of yard maintenance including
									lawn mowing and weekly rubbish bins.
								</p>
							</div>
						</div>

						<div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
							<div className="m-2 text-justify text-sm">
								<img
									alt="card img"
									className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
									src={img4}
								/>
								<h2 className="font-semibold my-4 text-2xl text-center ">
									Interpreting / Translation
								</h2>
								<p className="text-md font-medium">
									We provide telephone or face to face interpreting for NDIS
									participants speaking in Dinka, Nuer or Sudanese Arabic who
									can assist in a range of situations where African participants
									need specialised interpreting so they can get the most out of
									their plan.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-gradient-to-br from-blue-100 to-white">
				<div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
					<div
						className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
						data-aos="zoom-out"
					>
						<div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
							<h3
								className="text-3xl text-center text-blue-900
                            font-bold"
							>
								<span className="font-black">Client</span>
							</h3>
							<div>
								<p className="my-3 text-xl text-gray-600 font-semibold">
									We treat each client with dignity and respect, valuing their
									individuality and cultural differences.
								</p>
							</div>
						</div>
						<div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
							<h3 className="text-3xl text-center  text-blue-900 font-bold">
								<span className="font-black">Operation</span>
							</h3>
							<div>
								<p className="my-3 text-xl text-gray-600 font-semibold">
									We operate with honesty, integrity, and without
									discrimination.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
