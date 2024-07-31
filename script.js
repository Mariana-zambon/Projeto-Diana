const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        enunciado: "Durante a Juventude, Diana se depara com essas duas escolhas, qual é a mais prudente de se seguir? ",
        alternativas: [
            {
                texto: "Diana deve investir em sua educação. Ela economiza dinheiro de trabalhos de meio período e bolsas de estudo para pagar a faculdade sem contrair muitas dívidas.",
                afirmacao: " Na juventude Diana fez cursos e construiu um currículo exemplar."
            },
            {
                texto: "Diana deve gastar impulsivamente seu dinheiro com roupas e festas, negligenciando a importância da educação e das economias.",
                afirmacao: "Na juventude Diana foi imprudente, resultando em um currículo pobre e pouco chamativo."
            }
        ]
    },
    {
        enunciado: "Diana inicia sua carreira, qual a escolha ela deve tomar? ",
        alternativas: [
            {
                texto: "Diana deve escolher viver acima das suas possibilidades, comprando um carro caro e morando em um apartamento luxuoso, financiando tudo com cartões de crédito.",
                afirmacao: "No inicio de sua carreia, ela gastou sem pensar nas consequências, se individando."
            },
            {
                texto: "Diana deve viver de forma modesta e economizar uma parte significativa de seu salário. Ela investe em uma carteira diversificada de ações e fundos, o que aumenta seu patrimônio ao longo do tempo, proporcionando segurança financeira.",
                afirmacao: "No início de sua carreira, Diana escolheu economizar e investir sabiamente, aumentando o seu patrimônio."
            }
        ]
    },
    {
        enunciado: "Diana chega em sua meia-idade, e precisa se preparar para o futuro, qual a escolha que ela deve tomar?",
        alternativas: [
            {
                texto: "Na meia-idade, Diana deve priorizar seu futuro financeiro. Ela contribui regularmente para um plano de aposentadoria e busca a orientação de um consultor financeiro para garantir que seus investimentos estejam alinhados com seus objetivos de longo prazo.",
                afirmacao: "Na meia-idade, ela pensou em seu futuro, investindo em sua futura aposentadoria."
            },
            {
                texto: "Diana pode optar por ignorar a importância da poupança para a aposentadoria, preferindo gastar seus recursos em viagens e bens de consumo de luxo.",
                afirmacao: "Na meia-idade, ela não deu importância a sua aposentadoria, ficando sem fundos para essa fase. "
            }
        ]
    },
    {
        enunciado: "Diana está cada vez mais perto de se aposentar, qual será a escolha mais prudente a se fazer? ",
        alternativas: [
            {
                texto: "Perto da aposentadoria, Diana deve realizar um esforço consciente para pagar todas as suas dívidas. Ela quita o financiamento da casa e elimina quaisquer empréstimos pendentes.",
                afirmacao: "Perto de se aposentar, Diana quitou todas as suas dívidas, se preaparando para uma velhice tranquila."
            },
            {
                texto: "Diana deve continuar a acumular dívidas, refinanciando sua casa para pagar outras despesas e contraindo novos empréstimos.",
                afirmacao: "Perto de se aposentar, Diana se enterrou em dívidas, ficando sem nenhuma poupança para a aposentadoria."
            }
        ]
    },
    {
        enunciado: "Diana finalmente começou a receber a sua aposentadoria, qual caminho ela deve seguir?",
        alternativas: [
            {
                texto: "Diana deve gastar seu dinheiro sem um plano claro, retirando grandes quantias para viagens e luxos",
                afirmacao: "Já aposentada, ela esgotou rapidamente suas economias, por não seguir um plano claro e eficiente."
            },
            {
                texto: "Já aposentada, Diana deve adotar um orçamento rigoroso para garantir que suas economias e investimentos durem pelo resto de sua vida. Ela prioriza gastos essenciais e desfruta de uma vida confortável, mas frugal, sem se preocupar em ficar sem dinheiro.",
                afirmacao: " Já aposentada, ela fez escolhas sábias, garantindo uma vida confortável e estável."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Baseado em suas escolhas, a vida de Diana foi assim:";
    textoResultado.textContent = historiaFinal
    caixaAlternativas.textContent = "";
}

mostraPergunta();
