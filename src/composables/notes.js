
// Optionally the request above could also be done as
axios.get('/user', {
    headers: {"Authorization": "Client-ID " + accessKey},
    params: {
      ID: TextMetrics.v
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}


  const instance = axios.create({
    baseURL: 'https://api.example.com'
  });
  instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;