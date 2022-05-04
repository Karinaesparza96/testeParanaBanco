const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];

function ValidateForm() {
    //  1. Referenciar elementos dos campos do formulário pelo ID
    const email = document.getElementById("email").value;
    const senha = document.getElementById("passwd").value;

    // 2. Verificar se a senha e o e-mail estão válidos 
    const somaIdade = somarIdade();
    let senhaValida = false;
    let emailValido = validaEmail(email);

    if(parseInt(senha) == somaIdade){
        senhaValida = true;
    }

    // 3. Se tudo estiver ok, alertar o usuário que o formulário foi submetido
    if(senhaValida == true && emailValido == true){
        alert("formulário enviado com sucesso!");
    }
    // Plus: Alertar o usuário quando o e-mail ou senha estiverem vazios ou incorretos.
    else if(email == "" && senha == ""){
        alert("Favor preencher os campos email e senha");
    }
    else if(email == ""){
        alert("O campo email esta vazio");
    }
    else if(senha == ""){
        alert("O campo senha esta vazio"); 
    }
    else if(emailValido == false && senhaValida == false){
        alert("O campo email e senha estao incorretos");
    }
    else if(senhaValida == true && emailValido == false){
        alert("O campo e-mail esta incorreto");
    } 
    else if(senhaValida == false && emailValido == true){
        alert("O campo senha esta incorreto");
    }
}

function somarIdade(){
    const soma = users.map(user => user.age).reduce((acc, cur) => acc + cur);
    return soma;
}

function validaEmail(email){
    const user = users.find(el => el.email === email);

    if(user === undefined){
        return false;
    }
    else{
        return true;
    }
}
