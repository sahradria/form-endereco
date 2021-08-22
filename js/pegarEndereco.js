let endereco = {
    logradouro: 'Rua Barca Velha',
    cidade: 'fortaleza',
    uf: 'ce',
    bairro: 'jangurussu',
};

INPUT_CEP.addEventListener('blur', () => {
    if (INPUT_CEP.value.length !==8) {
        return;
    }

fetch (`https://viacep.com.br/ws/${INPUT_CEP.value}/json/`)
    .then(response => response.json())
    .then(endereco => {
        if (endereco.erro === true) {
            alert('CEP Inválido');
            return;
        }
      
   INPUT_LOGRADOURO.value = endereco.logradouro;
   INPUT_BAIRRO.value = endereco.bairro;
   INPUT_CIDADE.value = endereco.localidade;
   INPUT_UF.value = endereco.uf;
    });
});



/* alert('...CaReGaNdO...');*/