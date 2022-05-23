

//usando desestruturação em um objeto para atribuir uma variável
const usuario = {
    nome: "paulo",
    sobrenome: "renato",
    email: "paulo_19883_@hotmail.com"
};

const { email } = usuario; //desestrutura o usuario buscando só email

console.log(email); //paulo_19883_@hotmail.com