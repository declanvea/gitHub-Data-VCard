
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/declanvea");
req.addEventListener("load", reqListener);
req.send();
console.log(req);

function reqListener() {
  let data = JSON.parse(this.responseText);
  let info = '';
  console.log(data);

  let name = data.getElementsByName('name');
  basics.appendChild(name);
  let url = data.getElementsByName('url');
  basics.appendChild(url);
  let email = data.getElementsByName('email');
  basics.appendChild(email);
  let company = data.getElementsByName('company');
  basics.appendChild(company);
  let website = data.getElementsByName('url');
  basics.appendChild(website);
  let avatar_url = data.getElementsByName('img');
  basics.appendChild(avatar_url);
}








// data.results.forEach(function(apple){
//   info += `<li>${apple.name}</li>`;
// });
// characters.innerHTML = info;
// fetch('https://api.github.com/users/declanvea');
