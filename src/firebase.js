import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey:  "AIzaSyA_r-ew2QjzQGEXVDVSLzr404QTLdRaK3g",
    authDomain: "kosalvireak-khoeun.firebaseapp.com",
    databaseURL: "https://kosalvireak-khoeun-default-rtdb.firebaseio.com",
    projectId:"kosalvireak-khoeun" ,
    storageBucket: "kosalvireak-khoeun.appspot.com" ,
    messagingSenderId:" 250441279398",
    appId: "1:250441279398:web:483f3787fd2d2f222c5167" ,
  };

  // const firebaseConfig = {
  //   apiKey:  process.env.VUE_APP_API_KEY,
  //   authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  //   databaseURL: process.env.VUE_APP_DATABASE_URL ,
  //   projectId:process.env.VUE_APP_PROJECT_ID  ,
  //   storageBucket: process.env.VUE_APP_STORAGE_BUCKET ,
  //   messagingSenderId:process.env.VUE_APP_MESSAGING_SENDER_ID ,
  //   appId: process.env.VUE_APP_APP_ID ,
  // };

const app = initializeApp(firebaseConfig);
export default app;