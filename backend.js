import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let usersList = [
	{
		username: "bobesponja",
		avatar:
			"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	},
];
let tweetsArray = [
	{
		username: "bobesponja",
		tweet: "1",
	},
];
app.post("/sign-up", (req, res) => {
	const { username, avatar } = req.body;
	if (username && avatar) {
		usersList.push({
			username,
			avatar,
		});
		res.status(201).send("Usuário registrado com sucesso");
	} else {
		res.status(400).send("Todos os campos são obrigatórios!");
	}
});
app.post("/tweets", (req, res) => {
	const { username, tweet } = req.body;

	if (username && tweet) {
		tweetsArray.push({
			username,
			tweet,
		});
		res.send({ message: "Tweet enviado com sucesso" });
	} else {
		res.status(400).send("Todos os campos são obrigatórios!");
	}
});
app.get("/tweets", (req, res) => {
	let allTweets = tweetsArray.map((e, i) => {
		return {
			username: e.username,
			avatar: usersList.find((user) => user.username === e.username).avatar,
			tweet: e.tweet,
		};
	});
    if (tweetsArray.length < 10){
        res.send(allTweets.reverse());
    } else {
        let a = allTweets.slice(Math.max(allTweets.length - 10, 1))
        res.send(a.reverse())
    }
});
app.listen(5000);
