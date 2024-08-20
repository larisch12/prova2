var usuarios = [];

function adicionarUsuario(nome, idade, email) {
    if (!nome) {
        console.log("Nome não preenchido.")
    } else if (!idade) {
        console.log("Idade não preenchida.")
    } else if (!email) {
        console.log("Email não preenchido.")
    }
    

    if (idade <=18 ) {
        console.log("A idade deve ser maior que 18.")
        return
    }

  
   usuarios.push({ nome: nome, idade: idade, email: email })
   console.log("Usuário adicionado com sucesso!")
}

function mostrarUsuarios() {
    if (usuarios.length == 0) {
        console.log("Nenhum usuário na lista.")
        return
    }
    
    console.log("Usuários na lista:");
    for (var i = 0; i < usuarios.length; i++) {
        var usuario = usuarios[i];
        console.log("nome: " + usuario.nome + ", idade: " + usuario.idade + ", email: " + usuario.email);
    }
}


adicionarUsuario(" Vitória", " 15", " vitoria_silva18@estudante.sesisenai.org.br");
adicionarUsuario(" Larissa", " 19", "larissa_schmitz1@estudante.sesisenai.org.br");

mostrarUsuarios()


