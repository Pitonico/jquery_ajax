function consultaCEP() {
    const cep = document.getElementById('cep').value;
    const url = 'https://viacep.com.br/ws/'+cep+'/json/';
    $.ajax({
        url,
        type: 'GET',
        success: function(response) {
            console.log(response);
            document.getElementById('logradouro').innerHTML = response.logradouro;
            $('#bairro').html(response.bairro) // jQuery
        }
    })
}