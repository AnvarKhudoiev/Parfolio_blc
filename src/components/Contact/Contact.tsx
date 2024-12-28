import axios from "axios";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

function Contact() {
	const [loading, setLoading] = useState(false);
	const [formError, setFormError] = useState<string | null>(null);

	const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setFormError(null); // Reset error state

		const formData = new FormData(event.target as HTMLFormElement);
		formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "");

		try {
			const response = await axios.post(
				"https://api.web3forms.com/submit",
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
				}
			);

			if (response.data.success) {
				toast.success("Message sent successfully!");
			} else {
				setFormError(response.data.message || "Failed to send the message.");
				toast.error("Failed to send the message.");
			}
		} catch (error) {
			console.error("An error occurred:", error);
			setFormError("An unexpected error occurred. Please try again.");
			toast.error("An unexpected error occurred.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id="contact">
			<div
				className="animate-fadeIn animation-delay-2 mx-auto p-6 md:px-10 py-14 max-w-4xl 
							bg-gradient-to-tr from-[#0B1D2F] to-[#134E48]
							rounded-tl-[20px] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] contact-shadow"
			>
				<h2 className="mb-10 text-3xl font-bold md:mt-0 md:text-4xl text-center">
					Contact
					<hr
						className="w-12 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[54px]
									md:mt-1 md:w-14 md:-translate-x-[65px]"
					/>
				</h2>
				<div className="flex flex-col items-center md:flex-row md:items-start md:px-10">
					<div className="md:w-2/5 mb-8 text-center md:text-left md:pr-10 md:mr-4">
						<h3 className="text-2xl md:text-3xl font-semibold mb-4">
							I'm available for full-time opportunities
						</h3>
						<p>
							Feel free to contact me directly via{" "}
							<Link
								className="hover:text-secondary transition-colors"
								to="mailto:gustavo.torsunovbobur7@gmail.com"
							>
								<u>Email</u>
							</Link>{" "}
							or{" "}
							<Link
								className="hover:text-secondary transition-colors"
								to="https://www.linkedin.com/feed/"
							>
								<u>LinkedIn</u>
							</Link>
						</p>
					</div>
					<div className="md:w-3/5 w-full">
						<form onSubmit={onSubmitForm} className="flex flex-col gap-4">
							<input
								type="hidden"
								name="subject"
								value="New Submission From Contact Form"
							/>
							<input type="checkbox" name="botcheck" className="hidden" />
							<Input type="text" name="name" placeholder="Name" required />
							<Input
								type="email"
								name="email"
								placeholder="Email"
								required
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
								title="Please enter a valid email address"
							/>
							<Textarea name="message" placeholder="Message" required maxLength={500} />
							{formError && <p className="text-red-500 text-sm">{formError}</p>}
							<Button variant="secondary" type="submit" disabled={loading}>
								{loading ? <Spinner /> : "Submit"}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
