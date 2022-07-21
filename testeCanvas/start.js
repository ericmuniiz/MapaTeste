//funcao geral, automaticamente chamada, com todo o código
(function(){

    //variável para chamar o canvas do html
    let canvas = document.getElementById("canvas");

    //variável para puxar o contexto 2d do canvas do html
    let ctx = canvas.getContext("2d");

    //variável para facilitar pegar o valor do tamanho dos blocos
    let tamanhoDoBloco = 20;

    var mapa=[

        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    ]


    //funcao de update
    function update(){

    }
    
    //funcao de carregar o mapa, com a informaçao das peças e de onde por as peças
    function renderizar(){

        for(var linha in mapa){
            for(var coluna in mapa[linha]){

                var tela = mapa[linha][coluna];

                if(tela === 1){
                    var x = coluna*20; // x pois o eixo x são as linhas
                    var y = linha*20; // y pois o eixo y são as colunas
                    
                    //imprimindo os blocos em cada coordenada e com os tamanhos
                    ctx.fillStyle = "orange";
                    ctx.fillRect(x, y, tamanhoDoBloco, tamanhoDoBloco);
                }
            }
        }

    };

    function loop(){
        update();

        renderizar();

        requestAnimationFrame(loop, canvas);

    }
    
    requestAnimationFrame(loop, canvas);






}())