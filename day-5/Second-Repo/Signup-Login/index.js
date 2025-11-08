function signup(userName) {
  let users = ["Dhana", "Laxmi", "Rani"];

  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}

console.log(signup("Roopa")); //Signup Successful, Please Login 
console.log(signup("nani")); //User Already Registered, Please Login