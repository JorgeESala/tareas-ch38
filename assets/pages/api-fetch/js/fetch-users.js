
async function fetchUsers(){
  // Cleans the table before fetching users
  document.getElementById("users-body").innerHTML = "";
  let users;
  document.getElementById("users-spinner").hidden = false;
  if(!askedAMinuteAgo()){
     users = await getUsersAPI();
    
  }
  else{
   users =getUsersLocalStorage();
  }
  users.map( (user) => {
    document.getElementById("users-body").innerHTML += `
    <tr>
    <th scope="row">${user.id}</th>
    <td>${user.first_name}</td>
    <td>${user.last_name}</td>
    <td>${user.email}</td>
    <td><img src="${user.avatar}"</td>
  </tr>
    `
})
  document.getElementById("users-spinner").hidden = true;
}

async function getUsersAPI(){
  

  
  const resolve = await fetch("https://reqres.in/api/users?delay=3");
  const users = await resolve.json();
  localStorage.setItem("users", JSON.stringify(users.data));
  return users.data;
  
}

function getUsersLocalStorage(){
  return JSON.parse(localStorage.getItem("users"));

}
// checks if the users were asked a minute ago
function askedAMinuteAgo(){

  // if the date exists
  if(localStorage.getItem("date")){

    // actual date
    const minActuales = new Date().getMinutes();

    // stored date
    const minLocalStorage = new Date(localStorage.getItem("date")).getMinutes();

    const diferenciaMinutos = minActuales- minLocalStorage;
    
    if(diferenciaMinutos <= 1 ){
      return true;
    }else {
      localStorage.setItem("date", new Date());
      return false;
    }

    
  }else{
    localStorage.setItem("date", new Date());
    return false;
  }
}