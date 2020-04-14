class Script {

    constructor() {
        var $nomeTabela = document.querySelector('#nomeTabelaText');
        this.recolherInformacoesDaTela($nomeTabela);
    }

    recolherInformacoesDaTela(nomeDaTabela) {
        var textArea = document.querySelector('#textAreaResultado');
        var $botaoInsert = document.querySelector('#botaoInsert');
        var $botaoDelete = document.querySelector('#botaoDelete');
        var $botaoUpdate = document.querySelector('#botaoUpdate');
        var $botaoCarregaArquivos = document.querySelector('#carregaArquivos');
        var retorno2 = [];

        var linhasArquivoCarregado = null;

        $botaoCarregaArquivos.addEventListener('change', function () {
            let $labelCarregaArquivos = document.querySelector('#labelCarregaArquivos');
            $labelCarregaArquivos.innerHTML = $botaoCarregaArquivos.value
            
            var fileToLoad = $botaoCarregaArquivos.files[0];
            var fileReader = new FileReader();
            fileReader.readAsText(fileToLoad, "UTF-8")
            fileReader.onload = function (fileLoadedEvent) {
                debugger
                linhasArquivoCarregado = fileLoadedEvent.target.result.split("\n").map(function(linhasArquivoCarregado){
                    var teste =  linhasArquivoCarregado.trim().split(";");
                    var retorno = [];
                    
                    teste.forEach(x=>{
                        if (isNaN(x)) {
                            retorno.push(`'${x}'`)
                        } else if (x==""){

                        } else {
                            retorno.push(parseInt(x))
                        }
                        
                    })
                    if (retorno.length > 0) {
                        retorno2.push(retorno)
                    }
                    
                })
                linhasArquivoCarregado = retorno2
                return linhasArquivoCarregado
                
            }
        });

        $botaoInsert.addEventListener('click', function () {
            debugger
            var query = "";
            if (nomeDaTabela.value != "" && $botaoCarregaArquivos.value != "") {
                linhasArquivoCarregado.forEach(x => {
                    query += `INSERT INTO ${nomeDaTabela.value} VALUES (${x});\n`
                });

                console.log(query)
                
                textArea.innerHTML = query;
                document.querySelector('#alertAcao').style.display = 'none';
            } else {
                document.querySelector('#alertAcao').style.display = 'block';
            }

        });

        $botaoDelete.addEventListener('click', function () {
            debugger
            if (nomeDaTabela.value != null && nomeDaTabela.value !== "") {
                console.log(linhasArquivoCarregado)
            } else {
                document.querySelector('#alertAcao').style.display = 'block';
            }
        });

        $botaoUpdate.addEventListener('click', function () {
            console.log('clicou botão update')
            document.querySelector('#alertAcao').style.display = 'none';
        });
    }

    copiar(textoDaArea) {
        var $botaoCopiar = document.querySelector('#botaoCopiar');
        $botaoCopiar.addEventListener('click', function () {
            if (textoDaArea.value != "") {
                document.querySelector('#alertCopy').style.display = 'block';
            }
        });
    }

    gerarScript() {
        console.log(document.querySelector('#textoCapturado'))
    }

}