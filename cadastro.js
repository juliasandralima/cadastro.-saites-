function verificar() {

    let Nome = document.getElementById('Nome').value;
   let DatadeNascimento = document.getElementById('dtnasc').value;
   let CPF = document.getElementById('CPF').value;
   let Email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let CEP = document.getElementById('CEP').value;
   let Endereço = document.getElementById('Endereco').value;
   let Numero = document.getElementById('Numero').value;
   let Complemento = document.getElementById('Complemento').value;
   let Bairro = document.getElementById('Bairro').value;
   let cidade = document.getElementById('cidade').value;
   let Estado = document.getElementById('Estado').value;
   let ref = document.getElementById('ref').value;
   let confirmSenha = document.getElementById('confirmsenha').value;
   let senha = document.getElementById('Senha').value;
   if (!Nome || !DatadeNascimento || !CPF || !Email || !telefone || !CEP || !Endereço || !Numero || !Complemento || !Bairro ||  || !cidade !Estado || !ref || !confirmSenha || !senha) {
   
    alert("Campo de preenchimento obrigatório");
   }
       }