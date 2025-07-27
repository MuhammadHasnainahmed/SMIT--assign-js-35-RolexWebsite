import { client } from "./config.js";

// console.log("Initializing Supabase client..." , client);


let signupForm = document.getElementById("signup-form");
let useremail = document.getElementById("email");
let userpassword = document.getElementById("password");
let userfullName = document.getElementById("full-name");
let googlesignup = document.querySelector(".google-signup");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let email = useremail.value;
  let password = userpassword.value;
    let fullName = userfullName.value;
  
    const { data, error } = await client.auth.signUp({
  email,
  password,
  options:{
    data:{
      fullName
    }
  },
  
})

    if (error) {
      console.log("Error signing up:", error);
      alert("Error signing up: " + error.message);
    } else {
      console.log("User signed up:", data);
      alert("User signed up successfully! Please check your email for confirmation.");
    }
    
    
    useremail.value = "";
    userpassword.value = "";
    userfullName.value = "";
    
    
    window.location.href = "login.html";

});



googlesignup.addEventListener("click", async () => {
 const { data, error } = await client.auth.signInWithOAuth({
  provider: 'google',
   
})
  if (error) {
    console.error("Google sign-in error:", error);
    alert("Google sign-in failed: " + error.message);
    
  }else {
    console.log("Google sign-in successful:", data);
    alert("Google sign-in successful! Redirecting...");
    window.location.href = "index.html"; 
  }

});
