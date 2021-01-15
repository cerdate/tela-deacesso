let email = 'cleyton_cerdate@hcode.com.br';


console.log(email);
console.log('o seu e-email: cleyton_cerdate@gmail.com' + email);
console.log(`O seu e-email é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {

     console.log('O botao foi clicado !');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

        console.log('o mouse está sobre o formulário');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

     console.log("o mouse esta fora da caixa");
});



document.querySelector('#form-login').addEventListener('submit', e => {

     e.preventDefault();

     let email = document.querySelector('#email').value;
     let password = document.querySelector('#password').value;
     
     
     let json = {
         email , 
         password
     };
         
        if (!json.email) {
            alert("O campo e-mail deve ser preenchido"); /*console.error*/

        } else if (!json.password) { 
            
            alert("o campo senha deve ser preenchido");
        }
        else { 
            alert("Dados validados com sucesso"); /*console.info*/
        }

    });

