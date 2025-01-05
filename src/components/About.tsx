import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
	return (
		<section id="about" style={{ position: "relative" }}>
			<div
				className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
			>
				{/* Background pattern */}
				<div
					style={{ backgroundImage: `url(${bgImage})` }}
					className="bg-pattern bg-about"
				></div>

				{/* Text content */}
				<div className="md:w-3/5">
					<h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
						Men Haqimda
						<hr
							className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
						/>
					</h2>
					<p>
						Men <span className="font-bold">React.js</span>,{" "}
						<span className="font-bold">Next.js</span> va{" "}
						<span className="font-bold">TypeScript</span>-da tajribaga ega,
						zamonaviy veb-ilovalarni yaratishga ixtisoslashgan tajribali
						frontend dasturchisiman. Dizayn maketlarini tarjima qilish uchun
						tasdiqlangan qobiliyat va o‘ziga xoslik, sezgir foydalanuvchi
						interfeyslar yaratish ustuvor vazifamdir.
					</p>
					<br />
					<p>
						Muammolarni kuchli hal qilish ko‘nikmalariga ega bo‘lib, yangilanib
						turish va eng yangi <span className="font-bold">web-texnologiyalar</span>{" "}
						bilan ishlashga doimo ishtiyoqmandman.
					</p>
				</div>

				{/* Profile Image */}
				<div className="md:w-1/3">
					<img src={aboutImage} alt="Profile image" width={420} />
				</div>
			</div>
		</section>
	);
}

export default About;
