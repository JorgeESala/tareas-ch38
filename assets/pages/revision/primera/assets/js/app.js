const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se actualizaron los nombres de variables para mejorar legibilidad
// Se agregó el . al querySelector de name
const nameClass = document.querySelector('.name');
const blogClass = document.querySelector('.blog');
const locationClass = document.querySelector('.location');

//Se agregó async a la función para poder usar el await
async function displayUser(username) {
  // Se cambió a textContent a innerHTML
  nameClass.innerHTML = 'cargando...';
  const resolve = await fetch(`${usersEndpoint}/${username}`);
  
  // se convirtió el json a objeto
  const data = await resolve.json();
  // Se eliminó un console.log
  // Se cambiaron las comillas para string template literal
  nameClass.innerHTML = `${data.name}`;
  blogClass.innerHTML = `${data.blog}`;
  locationClass.innerHTML = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // se cambió la variable a nameClass y el innerHTML
  nameClass.innerHTML = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);