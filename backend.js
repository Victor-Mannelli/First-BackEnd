import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

let usersList = [
    {
        username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]
// `${}`
// a-zA-Z0-9_
app.get("/sign-up", (req, res) => {
    res.send(usersList)
})
app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body
    // const regexUsername = /^[a-z]{3,15}$/
    // if ( regexUsername.test(username) ){
    //     setedUsername = username;
    // } else {
    //     res.send("O nome de usuário deve ter de 3 a 15 caracteres, incluindo apenas letras, numeros e _")
    // }   

    // app.send({message: "O nome de usuário e avatar foram salvos"})
    if ( username && avatar ) {
        usersList.push({
            username,
            avatar
        })
        res.send("OK")
    } else {
        res.send({message: "O nome de usuário e avatar devem ser preenchidos"})
    }
})








app.listen(5000)