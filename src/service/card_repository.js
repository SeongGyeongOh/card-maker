import {
  getDatabase,
  onValue,
  ref,
  remove,
  set,
  update,
  off,
} from "firebase/database";

class CardRepository {
  database = getDatabase();

  upload(card, userId) {
    const db = this.database;
    set(ref(db, `users/${userId}/${card.id}`), {
      id: card.id,
      name: card.name,
      profile: card.profile,
      fileName: card.fileName,
      company: card.company,
      position: card.position,
      email: card.email,
      comment: card.comment,
      color: card.color,
    });
  }

  getRealtimeData(userId, getData) {
    console.log(userId);
    const db = this.database;
    const userRef = ref(db, `users/${userId}/`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      getData(data);
    });

    return () => off(userRef);
  }

  updateDate(updated, userId) {
    const db = this.database;
    const ref = ref(db, `users/${userId}/${updated.id}`);
    onValue(ref);
  }

  deleteData(id, userId) {
    const db = this.database;
    remove(ref(db, `users/${userId}/${id}`));
  }
}

export default CardRepository;
