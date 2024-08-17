import { initializeApp } from "firebase/app";
import { getDatabase, goOnline, goOffline } from "firebase/database";
import 'react-native-get-random-values';

const firebaseConfig = {
  apiKey: "AIzaSyABgpCDuSzEw6_Zc6pDUx7sRpmHXuKQr0c",
  authDomain: "rental-system-2f6b4.firebaseapp.com",
  databaseURL: "https://rental-system-2f6b4-default-rtdb.firebaseio.com",
  projectId: "rental-system-2f6b4",
  storageBucket: "rental-system-2f6b4.appspot.com",
  messagingSenderId: "862030347364",
  appId: "1:862030347364:web:e640b3ca13d707f34ff371",
  measurementId: "G-JJFY2KT65V"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
goOnline (database)
database.persistenceEnabled = true;

export { database, goOffline, goOnline };
