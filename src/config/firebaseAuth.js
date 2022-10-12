import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = "earmuffjam@gmail.com";
const password = "wat";

const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });