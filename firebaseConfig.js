import { initializeApp } from "firebase/app";
import { getDatabase, goOnline, goOffline } from "firebase/database";
import 'react-native-get-random-values';

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "XXXXXXXXXXXX",
  measurementId: "XXXXXXXXXXXX"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
goOnline (database)
database.persistenceEnabled = true;

export { database, goOffline, goOnline };
