
let basics = document.getElementById("basics");
let story = document.getElementById("story");
let image = document.getElementById("image");


let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/declanvea");
req.addEventListener("load", reqListener);
req.send();
console.log(req);

function reqListener() {
  let data = JSON.parse(this.responseText);
  let info = '';
  console.log(data);

  let name = document.createElement("p");
  name.innerHTML = `<span>Name:</span> ${data.name}`;
  basics.appendChild(name);

  let url = document.createElement("p");
  url.innerHTML = `<span>GitHub URL:</span> ${data.blog}`;
  basics.appendChild(url);

  let email = document.createElement("p");
  email.innerHTML = `<span>Email:</span> declanpvea@gmail.com`;
  basics.appendChild(email);

  let company = document.createElement("p");
  company.innerHTML = `<span>Company:</span> ${data.company}`;
  basics.appendChild(company);

  let bio = document.createElement("p");
  bio.innerHTML = `${data.bio}`;
  story.appendChild(bio);

  let avatar_url = document.createElement("img");
  avatar_url.setAttribute('src', data.avatar_url);
  image.appendChild(avatar_url);
}








// data.results.forEach(function(apple){
//   info += `<li>${apple.name}</li>`;
// });
// characters.innerHTML = info;
// fetch('https://api.github.com/users/declanvea');
