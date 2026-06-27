const projetos = [
    {
        titulo: "Portfólio", 
        tecnologias: [
            "HTML5", "CSS3", "JavaScript"
        ],
        descricao: "Projeto que representa meu portfolío pessoal."
    },
    {
        titulo: "Site de Vendas - Massas", 
        tecnologias: [
            "HTML5", "CSS3", "JavaScript", "Python"
        ],
        descricao: "Site para vendas de produtos alimentícios feitos com massa."
    }
];

let botao = (clique) => {
    if(clique){
        console.log("Mudou para tema claro.");    
    }else {        
        console.log("Mudou para tema escuro");   
    }
} 