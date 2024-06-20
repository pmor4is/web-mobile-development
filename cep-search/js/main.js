function consultaCEP () {
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            
            $("#logradouro").html(response.logradouro); //Funcionalidade permitida por ajax, ao inves da opção abaixo
            // document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: " + response.cep);
        }
    })
}

