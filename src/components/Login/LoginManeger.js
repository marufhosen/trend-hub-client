import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase.config";

export const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

export const createedUsers = (email, password, name) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = {
        error: "",
        createSuccess: true,
      };
      updateUserName(name);
      return newUser;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const newUser = {
        error: errorMessage,
        success: false,
      };
      return newUser;
    });
};

export const signInUsers = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = {
        name: res.user.displayName,
        email: res.user.email,
        success: true,
        error: "",
        loginSuccess: true,
      };
      return newUser;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const newUser = {
        error: errorMessage,
        success: false,
      };
      return newUser;
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(() => {
      // Update successful
      //   console.log("User Name Update Successfully");
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};

export const storeAuthToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      // console.log(idToken);
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {
      // Handle error
    });
};
