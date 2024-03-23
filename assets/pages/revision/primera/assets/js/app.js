const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se actualizaron los nombres de variables para mejorar legibilidad
// Se agregó el . al querySelector de name
const nameTag = document.querySelector('.name');
const blogElement = document.querySelector('.blog');
const locationClass = document.querySelector('.location');

//Se agregó async a la función para poder usar el await
async function displayUser(username) {
  // Se cambió a textContent a innerHTML
  nameTag.innerHTML = 'cargando...';
  const resolve = await fetch(`${usersEndpoint}/${username}`);
  
  // se convirtió el json a objeto
  const data = await resolve.json();
  console.log(data);
  // Se cambiaron las comillas para string template literal
  nameTag.innerHTML = `${data.name}`;
  blogElement.innerHTML = `${data.blog}`;
  locationClass.innerHTML = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // se cambió la variable a nameTag y el innerHTML
  nameTag.innerHTML = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);