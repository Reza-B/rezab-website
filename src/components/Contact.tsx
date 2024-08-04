import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
	return (
		<section
			id="contact"
			className="z-[100] pt-16 h-[100vh] flex flex-col justify-between">
			<div className="place-content-center my-auto h-[80vh]">
				<div className="flex sm:justify-around text-white flex-col sm:flex-row ">
					<div className="gap-12 mx-auto">
						<div className="font-bold text-5xl">
							<span>{"Let's work"}</span>
							<br />
							<span className="text-cyan-700">{"together"}</span>
						</div>
						<div className="mt-8">
							<span className="font-bold">Mail</span>
							<br />
							<span className="hover:text-cyan-700">dev.reza21@gmail.com</span>
						</div>
						<div className="mt-4">
							<span className="font-bold">Phone</span>
							<br />
							<span className="hover:text-cyan-700">+98 9105972669</span>
						</div>
						<div className="mt-4">
							<span className="font-bold">Address</span>
							<br />
							<span className="hover:text-cyan-700">
								Laleh Sahra street, Rudehen
							</span>
						</div>
					</div>
					<div className="w-[250px] h-[250px] mx-auto mt-16 sm:my-auto stroke-cyan-600">
						<svg
							width="250px"
							height="250px"
							viewBox="0 0 32.666 32.666">
							<motion.path
								strokeWidth={0.2}
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{
									duration: 5,
									repeat: Infinity,
									repeatDelay: 2,
									repeatType: "reverse",
								}}
								fill="none"
								d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
							/>
						</svg>
					</div>
				</div>
				<div className="flex w-fit gap-2 sm:gap-4 mt-16 mx-auto">
					<Link href="https://t.me/re_pv">
						<div className="rounded-lg w-[45px] h-[45px] place-content-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="45"
								height="45"
								viewBox="0 0 48 48">
								<path
									fill="#29b6f6"
									d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
								<path
									fill="#fff"
									d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path>
								<path
									fill="#b0bec5"
									d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path>
								<path
									fill="#cfd8dc"
									d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path>{" "}
							</svg>
						</div>
					</Link>
					<Link href="https://youtube.com/rezakuix">
						<div className="rounded-lg w-[45px] h-[45px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="45"
								height="45"
								viewBox="0 0 48 48">
								<path
									fill="#FF3D00"
									d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
								<path
									fill="#FFF"
									d="M20 31L20 17 32 24z"></path>{" "}
							</svg>
						</div>
					</Link>
					<Link href="https://x.com/rezakuix">
						<div className="rounded-lg w-[45px] h-[45px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="45"
								height="45"
								viewBox="0 0 48 48">
								<path
									fill="#212121"
									fill-rule="evenodd"
									d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
									clip-rule="evenodd"></path>
								<path
									fill="#fff"
									d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path>
								<polygon
									fill="#fff"
									points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
								<polygon
									fill="#fff"
									points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
							</svg>
						</div>
					</Link>
					<Link href="https://instagram.com/rezakuix">
						<div className="rounded-lg w-[45px] h-[45px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="45"
								height="45"
								viewBox="0 0 48 48">
								<radialGradient
									id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
									cx="19.38"
									cy="42.035"
									r="44.899"
									gradientUnits="userSpaceOnUse">
									<stop
										offset="0"
										stop-color="#fd5"></stop>
									<stop
										offset=".328"
										stop-color="#ff543f"></stop>
									<stop
										offset=".348"
										stop-color="#fc5245"></stop>
									<stop
										offset=".504"
										stop-color="#e64771"></stop>
									<stop
										offset=".643"
										stop-color="#d53e91"></stop>
									<stop
										offset=".761"
										stop-color="#cc39a4"></stop>
									<stop
										offset=".841"
										stop-color="#c837ab"></stop>
								</radialGradient>
								<path
									fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
									d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
								<radialGradient
									id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
									cx="11.786"
									cy="5.54"
									r="29.813"
									gradientTransform="matrix(1 0 0 .6663 0 1.849)"
									gradientUnits="userSpaceOnUse">
									<stop
										offset="0"
										stop-color="#4168c9"></stop>
									<stop
										offset=".999"
										stop-color="#4168c9"
										stop-opacity="0"></stop>
								</radialGradient>
								<path
									fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
									d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
								<path
									fill="#fff"
									d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
								<circle
									cx="31.5"
									cy="16.5"
									r="1.5"
									fill="#fff"></circle>
								<path
									fill="#fff"
									d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
							</svg>
						</div>
					</Link>
				</div>
			</div>
			<p className="text-gray-500 w-fit mx-auto py-2">
				Copyright &copy; Reza Buzarjemehri 2024. All rights reserved.
			</p>
		</section>
	);
};

export default Contact;
