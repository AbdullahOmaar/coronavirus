import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, docChanges } from 'angularfire2/firestore';
import { Experience } from '../models/experience'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  // getExperience() {
  //   throw new Error("Method not implemented.");
  // }

   experienceCollection : AngularFirestoreCollection<Experience>;   
   experience: Observable<any[]>;
   experienceDoc: AngularFirestoreDocument<Experience>

  constructor(public afs: AngularFirestore) {
    // this.experience = this.afs.collection('experience').valueChanges();
      this.experienceCollection = this.afs.collection('experience',ref => ref.orderBy('title','asc'));
      
       this.experience = this.experienceCollection.snapshotChanges().map(changes => {
         return changes.map(a => {
           const data =a.payload.doc.data() as Experience;
           data.id = a.payload.doc.id;
           return data;
         })
       })
   }

   getErience(){
     return this.experience;
   }

   addErience(experience: Experience){
     this.experienceCollection.add(experience)
   }
//    deleteItem(experience: Experience){
//     this.itemDoc = this.afs.doc(`items/${experience.id}`);
//     this.itemDoc.delete();
//   }

//      updateItem(experience: Experience){
//     this.itemDoc = this.afs.doc(`items/${experience.id}`);
//     this.itemDoc.update(experience);
//   }
}

