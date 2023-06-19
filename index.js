//import tools we need from firebase-admin library
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//import credentials 
import { creds } from "./secrets.js";

//connect to our Firebase project (needs credentials)
initializeApp({
    credential: cert(creds)
});

//connect to the Firestore database (just ask)
const db = getFirestore();


//---------------------------------------------------------------------------
//CRUD

// const shirt = {
//     brand: "bungie",
//     syle: "jacket",
//     color: "black",
//     size: "XXL",
//     price: 160.00
// }

//lets add a shirt to our clothing collection 
// db.collection('clothing').add(shirt)
//     .then(doc => {
//         console.log("clothing added: " + doc.id);

//        } )
// .catch(console.error)

//---------------------------------------------------------------------------

// ///now that we have some data, lets READ them
// db.collection('clothing').get()
//     .then(collection => {
//         // const clothing = collection.docs.map(doc =>{     |\
//         //     let item = doc.data()                        | \
//         //     item.id = doc.id                             |==> another way of writing whats below
//         //     return item                                  | /
//         // })                                               |/
//         const clothing = collection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
//         console.table(clothing)
//     })

//     .catch(console.error);

// //////////////////////////////////////////
    
// //lets say we want to find all of the items costing more than $100
// db.collection('clothing').where("price", '>=', 100).get()
//     .then(collection => {
//         const clothing = collection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
//         console.table(clothing);
//     })
//     .catch(console.error)

// /////////////////////////////////////////

// ///now lets get a single doc by id (and use await to show)
// const doc = await db.collection('clothing').doc('cruK0PKp16SnOkIWz32r').get()
//         .catch(console.error);
// const clothingItem = {...doc.data(), id: doc.id}
// console.table(clothingItem);

    //--------------------------------------

//lets UPDATE a single document:
db.collection('clothing').doc('cruK0PKp16SnOkIWz32r').update({ price: 120, qualityRating: 5.0 })
    .then(doc =>  console.table("updated doc. "))
    .catch(console.error)
//--------------------------------------------------

///even tho we SELDOM DELETE, here's how:

await db.collection('clothing').doc('8fgNoNEcokJpgOItpicn').delete()
    console.log("deleted")