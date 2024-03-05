import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

// Quand une fonction retourne une promesse, cette promesse ne peut avoir que 3 valeurs possibles :
// 1er cas : promesse en cours d'achèvement => Promise (pending)
// 2e cas : résultat positif de la promesse achevée => résultat positif (fulfilled)
// 3e cas : résultat négatif de la promesse achevée => résultat négatif (rejected)
// un document docSnapshot c'est une photographie de la base de donnée au moment ou on a fini d'executer la BD

export const createUser = (userId) => {
  // CACHETTE
  const docRef = doc(db, "users", userId);

  // NOURRITURE
  const nourriture = {
    username: userId,
    menu: fakeMenu.SMALL,
  };

  //setDoc(CACHETTE, NOURRITURE)
  setDoc(docRef, nourriture);
};

export const authenticateUser = async (userId) => {
  //1.  récupere un utilisateur existant

  const existingUser = await getUser(userId);

  //2. si non  créer un nouveau utilisateur
  if (!existingUser) {
    createUser(userId);
  }
};
