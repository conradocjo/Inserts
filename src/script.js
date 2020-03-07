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

        $botaoCarregaArquivos.addEventListener('change', function () {
            debugger
            let $labelCarregaArquivos = document.querySelector('#labelCarregaArquivos');
            $labelCarregaArquivos.innerHTML = $botaoCarregaArquivos.value
        });

        $botaoInsert.addEventListener('click', function () {
            if (nomeDaTabela.value != "" && $botaoCarregaArquivos.value != "") {
                var query = `INSERT INTO ${nomeDaTabela.value} () VALUES ()`
                textArea.innerHTML = query;
                document.querySelector('#alertAcao').style.display = 'none';
            } else {
                document.querySelector('#alertAcao').style.display = 'block';
            }

        });

        $botaoDelete.addEventListener('click', function () {
            console.log('clicou botão delete')
            document.querySelector('#alertAcao').style.display = 'none';
        });

        $botaoUpdate.addEventListener('click', function () {
            console.log('clicou botão update')
            document.querySelector('#alertAcao').style.display = 'none';
        });

        this.copiar(textArea)

    }

    copiar(textoDaArea) {
        var $botaoCopiar = document.querySelector('#botaoCopiar');
        $botaoCopiar.addEventListener('click', function () {
            if (textoDaArea.value != "") {
                document.querySelector('#alertCopy').style.display = 'block';
            }
        });
    }

    teste() {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";

        req.onload = function (e) {
            var data = new Uint8Array(req.response);
            var workbook = XLSX.read(data, { type: "array" }); //Faz o "parse"
        };
        req.send();
    }

}