function login(event){
  event.preventDefault()
  error.style.display = "none";
  error.innerHTML = "User already exists";
  success.style.display = "none";
  const target = event.target;
  const form = new FormData(target)
  const email = form.get("email")?.trim()
  const firstName = form.get("firstName")?.trim()
  const secondName = form.get("secondName")?.trim()
  const lastName = form.get("lastName")?.trim()
  const password = form.get("password")?.trim()

  if(!email || !firstName || !secondName || !lastName || !password){
    error.innerHTML = "fil the required ";
    error.style.display = "block";
    return
  }
  const saveUsers = localStorage.users;
  let allUsers = []
  if(saveUsers){
    allUsers = JSON.parse(saveUsers)
  }
  const emailExist = allUsers.findIndex((user)=> user.email == email)
  if(emailExist > -1){
    error.style.display = "block";
    return
  }
  data = {
    firstName,
    secondName,
    lastName,
    email,
    password
  }
  allUsers.push(data)
  console.log(allUsers);
  localStorage.users = JSON.stringify(allUsers);
  success.style.display = "block";
}
function sigup(event){
  event.preventDefault();

  error.style.display = "none"
  success.style.display = "none"
  const target = event.target
  const form = new FormData(target)
  const email = form.get("email")?.trim()
  const password = form.get("password")?.trim()

  const savedUsers = localStorage.users
   let allUsers = []
  if(savedUsers){
    allUsers = JSON.parse(savedUsers)
  }
  const user = allUsers.find((user)=>{
    return user.email == email && user.password == password;
  })

  if(!user){
    error.style.display = "block";
    return
  }


  localStorage.currentUser = JSON.stringify(user);

  success.style.display = "block";
}
function dashboard(){
  
  const savedUsers = localStorage.currentUser;
  if(!savedUsers){
    alert("No user is found, going back to login")
    setTimeout(()=>{
      login.href = "./login.html";
     }, 5000)
     return
  }
  const user = JSON.parse(savedUsers);
  const detailsContainer = document.getElementById("detailsContainer");
  const userNameElement = document.createElement("p");
  userNameElement.textContent = "Welcome, " + user.firstName;

 
  
  
  detailsContainer.appendChild(userNameElement);

  
}