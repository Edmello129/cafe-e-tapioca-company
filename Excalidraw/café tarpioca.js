const botaoCafe = document.getElementById ('botão café'); // acha o botão café no html pela váriavel de identificação dele

 botaoCafe.addEventListener ('click', () => { // coloca o evento de "click" no botão para ele emitir uma ação quando for clicado
document.body.classList.toggle ('cfé');     // alterna o classe do body entre "café" e "tapioca" quando der o click mudando o modo do site junto e alterando suas cores

    if (document.body.classList.contains ('cfé')) {  // se, quando clicado, o body estiver no modo café, o texto do site vai mudar para o "modo tapioca" 
        botaoCafe.textContent = 'modo-tapioca'; /// apresenta o modo tapioca no botão
    } else { // ao contrario, se o body estiver no modo tapioca, o texto do site vai para o "modo café"
     botaoCafe.textContent = 'modo-café'; // apresenta o modo café no botão
    }   // o if else.
}); // fecha a condição de click 

const botoesabas = document.querySelectorAll ('.bnt-aba'); //procura todos os botões com a classe "bnt-aba"
const allabas =document.querySelectorAll ('.aba');// seleciona as abas com a class ".aba"
botoesabas.forEach(item => { /// acha todos os clicaveis das abas
    item.addEventListener('click', () => { // coloca o evento de "click" para emitir a ação quando for clicado, assim como a linha 3 
    
        allabas.forEach( secao => secao.classList.remove ('ativa')); // dentro do evento de click, ele "procura" todas as abas e retira a class "ativa" dentro da condição
         
            
         const destino = item.getAttribute ('data-alvo'); // acha o valor "data-alvo" quando for clicado e apresenta a tela
        document.getElementById ( destino).classList.add ('ativa'); /// acha a class ativa e a deixa como principal para exibir
    }); // fecha o evento de clique.
}); /// fecha a condição até ser adicionado mais.

// optei por não colocar os outros modulos, não vejo sentido, pois, o código é simples.



// supabase como banco de dados
const { data, error } = await banco.from('produtos').select('*'); 

const supabaseUrl = 'https://quiztyshowiwxhecrclw.supabase.co'; 
const supabaseKey = 'sb_publishable_Le4GorG7P-t28W05nbZ-8w_1pc4IK7T'; 
const banco = supabase.createClient(supabaseUrl, supabaseKey); 

async function carregarTabela() { 
    
    const { data, error } = await banco.from('Produtos').select('*'); // 

    if (error) {
        console.error('Erro ao puxar dados:', error);  
        return;  
    }  

    console.log('Dados da tabela:', data); 
} 

carregarTabela(); 