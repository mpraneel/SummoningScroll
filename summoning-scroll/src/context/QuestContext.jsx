import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const fetchQuestsFromFirebase = async () => {
  const questsCollection = collection(db, "quests");
  const questsSnapshot = await getDocs(questsCollection);
  const questsData = questsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return questsData;
};