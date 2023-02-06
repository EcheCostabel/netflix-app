import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAzUe_OB3Rv1KgPBkaWfUbxMrZILulEric",
    authDomain: "netflix-clone-4595d.firebaseapp.com",
    projectId: "netflix-clone-4595d",
    storageBucket: "netflix-clone-4595d.appspot.com",
    messagingSenderId: "1010207441278",
    appId: "1:1010207441278:web:c14f0ab40447f72f25732f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth};