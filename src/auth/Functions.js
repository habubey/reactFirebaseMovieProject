import app from "../auth/Firebase";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";
import { useEffect, useState } from "react";

// yorumu alma

export const AddUser = (info) => {
  const db = getDatabase(app);
  const userRef = ref(db, "baglanti");
  const newUserRef = push(userRef);
  console.log(info);
  set(newUserRef, {
    ...info,
  });
};

// yorumu ekleme

export const useFetch = (id) => {
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "baglanti");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const baglantiArray = [];
      console.log(data);
      for (let id in data) {
        baglantiArray.push({ firebaseId: id, ...data[id] });
      }
      setContactList(baglantiArray.filter((item) => item.id === id));
    });
  }, []);
  return contactList ;
};

// yorumu silme
export const DeleteUser = (id) => {
  const db = getDatabase();
  const userRef = ref(db, "baglanti");
  remove(ref(db, "baglanti/" + id));
};
