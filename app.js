const readline = require("readline");

const readLine = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

readLine.question("Enter Your Github Username: ", (username) => {
	let url = `https://api.github.com/users/${username}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const createDate = new Date(data.created_at);
			const updateDate = new Date(data.updated_at);

			const months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];

			const formattedCreateDate = `${
				months[createDate.getMonth()]
			} ${createDate.getDate()}, ${createDate.getFullYear()}`;
			const formattedUpdateDate = `${
				months[updateDate.getMonth()]
			} ${updateDate.getDate()}, ${updateDate.getFullYear()}`;

			// console.log(data);
			console.log(`\n------------\nUsername: ${data.login}`);
			console.log(`Name: ${data.name}`);
			console.log(`Bio: ${data.bio}`);
			console.log(`Public Repositories: ${data.public_repos}`);
			if (data.blog === "") {
				console.log("Website: not Provided");
			} else {
				console.log(`Website: ${data.blog}`);
			}
			if (data.location == null) {
				console.log("Location: not Provided");
			} else {
				console.log(`Location: ${data.location}`);
			}
			console.log(`account URL: ${data.html_url}`);
			console.log(`Followers: ${data.followers}`);
			console.log(`Following: ${data.following}`);
			console.log(`account Creation Date: ${formattedCreateDate}`);
			console.log(
				`Last account Update: ${formattedUpdateDate}\n---------------------------------`
			);
		})
		.catch((error) => {
			console.log("Error: ", error);
		});
	readLine.close();
});
