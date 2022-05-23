var formData = new FormData();
    formData.append('usuario', 'paulo3');
    formData.append('senha', 'senha123');

    let url = 'endpoint';

    fetch(url, {
      method: 'POST',
      body: formData,
      dataType: 'json'
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (body) {
        let result = JSON.parse(body);
        console.log(result);

      });