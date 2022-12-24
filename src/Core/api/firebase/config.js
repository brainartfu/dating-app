import { decode, encode } from 'base-64';
import './timerConfig';
global.addEventListener = (x) => x;
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyAOWHBpPhKoNhcGFKHH_Q_0AtL2gV-imgQ',
  // authDomain: 'production-a9404.firebaseapp.com',
  // databaseURL: 'https://production-a9404.firebaseio.com',
  // projectId: 'production-a9404',
  // storageBucket: 'production-a9404.appspot.com',
  // messagingSenderId: '525472070731',
  // appId: '1:525472070731:web:ee873bd62c0deb7eba61ce',
  apiKey: "AIzaSyAWwVpaYVkuEDR21Xkiojmgufa3RQgOODQ",
  authDomain: "instadating-f8dd6.firebaseapp.com",
  databaseURL: "https://instadating-f8dd6-default-rtdb.firebaseio.com",
  projectId: "instadating-f8dd6",
  storageBucket: "instadating-f8dd6.appspot.com",
  messagingSenderId: "91443376326",
  appId: "1:91443376326:web:f1b6063f61a1cc49c2a7c7",
  measurementId: "G-LBGESM971R"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };
