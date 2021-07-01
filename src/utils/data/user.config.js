import ResumePDF from "./Amir_Resume.pdf";
import avatar from "../../assets/images/baseImages/Avatar.png";
import SoftRetic from ".././../assets/images/data/SoftRetic.png";
import CodingExpo from ".././../assets/images/data/CodingExpo.png";

const user = {
	firstName: "Arsh",
	lastName: "Sahzad",
	userImage: avatar,
	resume: ResumePDF,
	email: "hello@arsh.dev",
	linkedIn: "in/arshsahzad",
	gitHub: "arshsahzad",
	twitter: "arshsahzad",
	aboutMe: {
		intro: " I'm a Full Stack Software Development Engineer from India.",
		description:
			"I enjoy taking up complex problems and converting to an usable format. My major domains are Web Development and Cloud Computing.",
		outro: "When I'm not developing any stuff , you will find me re-watching an episode of Star Trek or surfing on the Internet.",
	},
	experiences: [
		{
			organization: "CodingExpo",
			organizationPicture: CodingExpo,
			isCurrent: true,
			startDate: "March 2020",
			endDate: "December 2020",
			positions: [
				{
					positionName: "Web Developer",
					startDate: "July 2021",
					endDate: "December 2020",
					isPresent: false,
					description:
						"Responsible for coding, modifying and maintaining exiting web apps & deploying into cloud platform such as AWS & Azure.",
				},
				{
					positionName: "Web Developer ~ Trainee",
					startDate: "April 2020",
					endDate: "June 2020",
					isPresent: false,
					description:
						"Worked on a LMS platform & responsible for front-end part, database management payment gateway integration in the web app.",
				},
			],
		},
		{
			organization: "SoftRetic",
			startDate: "January 2020",
			endDate: "March 2020",
			organizationPicture: SoftRetic,
			isCurrent: false,
			positions: [
				{
					positionName: "SEO Trainee",
					startDate: "January 2020",
					endDate: "March 2020",
					isPresent: false,
					description:
						"Responsible for on-page and off-page SEO, manual link-building, back-linking, social posting, analyzing, reviewing competitor site.",
				},
			],
		},
	],
	education: [
		{
			instituteName:
				"Greater Noida Institute of Technology",
			degree: "Bachelor's Degree in Information Technology (IT) ",
			year: "2017-2021",
			id: 1,
		},
		{
			instituteName: "Mira Mateshwari M.S.S School",
			degree: "Senior Secondary",
			year: "2014-2016",
			id: 2,
		},
		{
			instituteName: "DAV Centenary Public School",
			degree: "Secondary School",
			year: "2004-2014",
			id: 3,
		},
	],
	projects: [
		{
			projectName: "Windfolio",
			description:
				"It is a portfolio web application based on theme of Windows 10. It replicates the feature of the Windows 10 and it uses technology such as node.js and react.js",
			madeWith: ["HTML","CSS","JavaScript","Node.js","React.js"],
			link: "https://www.arsh.dev/windfolio",
		},
		{
			projectName: "GitWatcher",
			description:
				"A github profile analyze tool where we can get the information of github user like total public repos, forks. It fetches data from github using axios library for http requests.",
			madeWith: ["React.js","Node.js","Axios","Github API"],
			link: "https://www.arsh.dev/gitwatcher/",
		},
		{
			projectName: "RelaxSound",
			description:
				"Ambient sound healing therapy uses aspects of nature's sounds to improve physical and emotional health. It is based next.js and prerecorded sounds of nature from SoundBible.",
			madeWith: ["HTML","CSS","JavaScript","Next.js","Dockerfile"],
			link: "https://www.arsh.dev/relaxsound/",
		},
		{
			projectName: "QuizBuzz",
			description:
				"An app based on HTML, CSS & JS with the feature of 30 second timer for each of five question and report are generated based on performance of the participated user.",
			madeWith: ["Python", "DJANGO", "HTML", "CSS", "JavaScript"],
			link: "https://www.arsh.dev/quizbuzz/",
		},
	],
	skills: [
		{
			name: "Language Proficiency",
			values: ["HTML", "CSS", "JavaScript", "React.js", "Angular.js", "Python", "SQL", "YAML", "JSON",],
		},
		{
			name: "Tools Proficiency",
			values: ["Node.js", "Git", "Github", "Docker", "Pycharm", "WebStorm", "Linux OS", "Cloud Computing"],
		},
		{
			name: "Database Proficiency",
			values: ["MySQL", "PostgreSQL", "MongoDB", "FaunaDB", "Firestore"],
		},
	],
};

export default user;
