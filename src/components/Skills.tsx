import { SkillType, skillsData } from "../data/skills";
import MagneticButton from "./MagneticButton";

function Skills() {
	return (
		<section id="skills">
			<div className="pb-20 animate-fadeIn animation-delay-2">
				<h2 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
					Skills
					<hr
						className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[36px]
									md:mt-1 md:w-12 md:-translate-x-[45px]"
					/>
				</h2>
				<p className="text-center mt-4 text-lg">
					This project showcases the development of a Weather App using modern web development
					tools and technologies. Explore the skills and tools utilized in this project!
				</p>
				<div className="flex flex-wrap mt-10 justify-center gap-6">
					{skillsData.map((item: SkillType, index) => {
						return (
							<div
								key={index}
								className="border rounded-lg p-4 flex flex-col items-center max-w-[300px]"
							>
								<div className="flex items-center gap-3">
									<img src={item.src} alt={item.alt} width={35} height={35} />
									<h3 className="text-2xl font-semibold">{item.label}</h3>
								</div>
								<div className="flex flex-wrap gap-2 mt-6">
									{item.skills.map((skill, i) => {
										return (
											<MagneticButton key={i}>
												<button
													className="bg-skills-bg px-2 py-2 rounded-sm
															 transition-colors hover:bg-teal-700"
												>
													{skill}
												</button>
											</MagneticButton>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Skills;
