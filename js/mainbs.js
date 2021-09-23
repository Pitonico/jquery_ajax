function consultaCEP() {
    $('.barra-progresso').show()
    const cep = document.getElementById('cep').value;
    const url = 'https://viacep.com.br/ws/'+cep+'/json/';
    $.ajax({
        url,
        type: 'GET',
        success: function(response) {
            console.log(response);
            document.querySelector('#meucep').innerHTML = cep;
            document.getElementById('logradouro').innerHTML = response.logradouro;
            $('#bairro').html(response.bairro) // jQuery
            $('#localidade').html(response.localidade) // jQuery
            $('#uf').html(response.uf) // jQuery
            $('.cep').show() // jQuery         
        }
    })
}

// iniciada automaticamente quando acessa a página
$(function() {
    $('.cep').hide()
    $('.barra-progresso').hide()
})