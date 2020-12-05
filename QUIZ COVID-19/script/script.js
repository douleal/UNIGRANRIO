const colorElemento = window.document.getElementById('iniciar')
const imgElemento = window.document.getElementById('imgQuiz')
const perguntaElemnto = window.document.getElementById('perg')
const opcElemento = window.document.getElementById('opc')
const progressoElemento = window.document.getElementById('progresso')
const etapaElemento = window.document.getElementById('num-automatico')
const etapasContainer = window.document.getElementById('etapas')
const statusElemento = window.document.getElementById('status')

const questions = [
    {
        imagem: '<img src="/img/img01.jpg" class="imgQ">',
        pergunta: "Como o COVID-19 é transmitido?",
        opcao: [
            { opc: 'Através de gotículas que saem de sua boca e nariz quando você tosse ou expira', correta: true},
            { opc: 'Bebendo água contaminada', correta: false },
            { opc: 'Todas as anteriores', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img02.jpg" class="imgQ">',
        pergunta: "Quais são os sintomas mais comuns de COVID-19?",
        opcao: [
            { opc: 'Uma tosse nova e contínua', correta: false},
            { opc: 'Febre', correta: false },
            { opc: 'Cansaço', correta: false },
            { opc: 'Todas as anteriores', correta: true }
        ]
    },
    {
        imagem: '<img src="/img/img03.jpg" class="imgQ">',
        pergunta: "Lavar as mãos pode protegê-lo do COVID-19?",
        opcao: [
            { opc: 'Sim - mas apenas se você usar um alvejante forte', correta: false},
            { opc: 'Sim - sabão e água normais ou desinfetante para as mãos são suficientes', correta: true },
            { opc: 'Não - Lavar as mãos não elimina COVID-19', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img04.jpg" class="imgQ">',
        pergunta: "Para qual das seguintes pessoas o COVID-19 é mais perigoso?",
        opcao: [
            { opc: 'Crianças', correta: false},
            { opc: 'Idosos, especialmente com 70 anos ou mais', correta: true },
            { opc: 'Pessoas de descendência chinesa', correta: false },
            { opc: 'Europeus', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img05.jpg" class="imgQ">',
        pergunta: "As pessoas que vivem com HIV estão sempre em maior risco?",
        opcao: [
            { opc: 'Sim - pessoas com HIV têm sistemas imunológicos mais fracos', correta: false},
            { opc: 'Não - as pessoas que aderem ao tratamento anti-retroviral (ART) e têm uma contagem de CD4 elevada não correm mais risco', correta: true }
        ]
    },
    {
        imagem: '<img src="/img/img06.jpg" class="imgQ">',
        pergunta: "Os vírus que infectam bactérias são chamados?",
        opcao: [
            { opc: 'Metanógenos', correta: false},
            { opc: 'Patógenos', correta: false },
            { opc: 'Fungo', correta: false },
            { opc: 'Bacteriófagos', correta: true }
        ]
    },
    {
        imagem: '<img src="/img/img07.jpg" class="imgQ">',
        pergunta: "Qual é a temperatura corporal normal de um ser humano?",
        opcao: [
            { opc: '35 - 36 °C', correta: false},
            { opc: '36 - 37 °C', correta: true },
            { opc: '34 - 35 °C', correta: false },
            { opc: '30 - 31 °C', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img08.jpg" class="imgQ">',
        pergunta: "Em qual dos locais a seguir foi identificado o primeiro caso de novo coronavírus?",
        opcao: [
            { opc: 'Beijing', correta: false},
            { opc: 'Wuhan', correta: true },
            { opc: 'Shangai', correta: false },
            { opc: 'Tianjin', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img09.jpg" class="imgQ">',
        pergunta: "De onde veio o nome do coronavírus?",
        opcao: [
            { opc: 'Uma pessoa chamada Corona o identificou', correta: false},
            { opc: 'Devido às projeções em forma de folha', correta: false },
            { opc: 'Devido às suas projeções em forma de coroa', correta: true }
        ]
    },
    {
        imagem: '<img src="/img/img10.jpg" class="imgQ">',
        pergunta: "Qual é o período de incubação do COVID-19?",
        opcao: [
            { opc: '1 a 14 dias', correta: true},
            { opc: '5 a 25 dias', correta: false },
            { opc: '10 a 15 dias', correta: false },
            { opc: '40 a 50 dias', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img11.jpg" class="imgQ">',
        pergunta: "Pessoas que não mostram sinais de uma determinada doença são:",
        opcao: [
            { opc: 'Assintomáticas', correta: true},
            { opc: 'Sintomáticas', correta: false },
            { opc: 'Antipáticas', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img12.jpg" class="imgQ">',
        pergunta: "Uma doença que pode ser transmitida aos humanos pelos animais é:",
        opcao: [
            { opc: 'Hipnótica', correta: false},
            { opc: 'Estenótica', correta: false },
            { opc: 'Zoonótica', correta: true }
        ]
    },
    {
        imagem: '<img src="/img/img13.jpg" class="imgQ">',
        pergunta: "Ao contrário do COVID-19, que afeta predominantemente pessoas mais velhas, quem a gripe espanhola teve como alvo principal?",
        opcao: [
            { opc: 'Jovens Adultos', correta: true},
            { opc: 'Apenas Mulheres', correta: false },
            { opc: 'Crianças', correta: false },
            { opc: 'Bebês', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img14.jpg" class="imgQ">',
        pergunta: "Por quanto tempo o vírus pode sobreviver em superfícies de plástico e aço inoxidável, de acordo com estudos?",
        opcao: [
            { opc: '72 horas ou mais', correta: true},
            { opc: '24 a 60 horas', correta: false },
            { opc: '4 a 12 horas', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img15.jpg" class="imgQ">',
        pergunta: "Qual órgão do corpo humano o coronavírus ataca principalmente?",
        opcao: [
            { opc: 'Fígado', correta: false},
            { opc: 'Pulmões', correta: true },
            { opc: 'Coração', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img16.jpg" class="imgQ">',
        pergunta: "Que porcentagem de álcool em produtos e desinfetantes é necessário para matar o vírus do coronavírus ao higienizar as mãos?",
        opcao: [
            { opc: '70%', correta: true},
            { opc: '50%', correta: false },
            { opc: '26%', correta: false }
        ]
    },
    {
        imagem: '<img src="/img/img17.jpg" class="imgQ">',
        pergunta: "A doença coronavírus (COVID-19) pode ser transmitida em temperaturas quentes e frias?",
        opcao: [
            { opc: 'Sim', correta: true},
            { opc: 'Não', correta: false }
        ]
    },
]

var indexPergunta = 0;
var perguntaAtual = 0;
var progresso = 0;
var pontos = 0;
var play = 0;

opcElemento.addEventListener('click', () => {
    if (perguntaAtual <= 16) {
        indexPergunta++
        console.log(indexPergunta)
        proxPergunta()
    } else {
        stop()
    }
})

function exibirQuiz() {
    imgElemento.innerHTML = questions[indexPergunta]["imagem"]
    perguntaElemnto.innerText = questions[indexPergunta]["pergunta"]
    questions[indexPergunta]["opcao"].forEach(opcao => {
        const button = document.createElement('button')
        button.innerText = opcao.opc
        button.classList.add('opcao')
        if (opcao.correta) {
            button.dataset.correta = opcao.correta
        }
        button.addEventListener('click', selecionar)
        opcElemento.appendChild(button)
    })
    perguntaAtual++
    etapaElemento.innerHTML = perguntaAtual
    progresso += 5.885;
    console.log(progresso)
    progressoElemento.style.width = `${progresso}%`
}

function selecionar (e) {
    const selec = e.target.dataset.correta
    console.log(selec)
    const teste = true
    console.log(teste)
    status(selec)
}

function status (selec) {
    if (selec == undefined) {
        colorElemento.style.backgroundColor = 'rgba(197, 20, 20, 0.842)'
        const div = document.createElement('div')
        div.innerText = "ERROU"
        div.classList.add('errou')
        statusElemento.appendChild(div)

    } else {
        colorElemento.style.backgroundColor = 'rgba(56, 218, 56, 0.842)'
        pontos++
        console.log(pontos)
        const div = document.createElement("div")
        div.innerText = "ACERTOU"
        div.classList.add('acertou')
        statusElemento.appendChild(div)
    }
}

function proxPergunta () {
    setTimeout(reset, 800);
    setTimeout(exibirQuiz, 800);
}

function reset () {
    while (opcElemento.firstChild) {
        opcElemento.removeChild(opcElemento.firstChild);
    }
    perguntaElemnto.innerText = "";
    statusElemento.classList.add('statusColor');
    statusElemento.removeChild(statusElemento.firstChild);
    colorElemento.style.backgroundColor = 'rgba(0, 0, 0, 0.733)'
    imgElemento.removeChild(imgElemento.firstChild);
}

function resetFinal() {
    while (etapasContainer.firstChild) {
        etapasContainer.removeChild(etapasContainer.firstChild);
    }
}

function stop () {
    setTimeout(reset, 800);
    setTimeout(final, 800);
    setTimeout(resetFinal, 800); 
}

function final () {

    imgElemento.innerHTML = '<img src="/img/imgFinal.jpg" class="imgQ">';
    perguntaElemnto.innerHTML = 'TESTE CONCLUÍDO <br>';
    perguntaElemnto.innerHTML+= `Sua Pontuação: ${pontos} de 17 <br>`;
    perguntaElemnto.innerHTML+= '<hr><br>';
    perguntaElemnto.innerHTML+= 'Siga as orientações das autoridades competentes. <br> Para saber mais acesso o portal do ministério da saúde: <a href="https://coronavirus.saude.gov.br/" target="_blank">PORTAL COVID-19</a>'
}

(function(){
    exibirQuiz()
}());