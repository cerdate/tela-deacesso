let email = 'joão@hcode.com.br';


console.log(email);
console.log('o seu e-email: joao@hcode.com.br' + email);
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
            console.error("O campo e-mail deve ser preenchido");

        } else if (!json.password) { 
            
            console.error("o campo senha deve ser preenchido");
        }
        else { 
            console.info("Dados validados com sucesso");
        }

    });

