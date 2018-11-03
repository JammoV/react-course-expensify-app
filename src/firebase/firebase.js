import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses/-LPuw8Ls219P2OPEYt5K').update({
//     amount: "900"
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     });


// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'January',
//     amount: '400',
//     createdAt: '10000'
// });

// database.ref('notes/-LPuv2Ydx9Xwer1h0ElI').remove();

// database.ref('notes/-LPuv2Ydx9Xwer1h0ElI').update({
//     body: 'Buy food'
// });

// database.ref('notes').push({
//     title: 'Course tops',
//     body: 'React lol more'
// });

// const firebaseNotes = {
//     notes: {
//         sfsggds: {
//             title: 'My first note',
//             body: 'Body of my first note'
//         },
//         dsgjdsgsdg: {
//             title: 'My second note',
//             body: 'Body of my second note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'My first note',
//     body: 'Body of my first note'
// },
// {
//     id: '14',
//     title: 'My second note',
//     body: 'Body of my second note'
// }];

// database.ref().set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error: ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error! ', e)
// });

// database.ref().set({
//     name: 'Jarmo Vleeshouwer',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Groningen',
//         country: 'Holland'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Error: ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().update({
//     name: 'Mike',
//     age: 25,
//     job: 'Programmer',
//     isSingle: null
// });

// database.ref()
// .remove()
// .then(() => {
//     console.log('Data is removed');
// }).catch((e) => {
//     console.log('Error: ', e);
// });

// database.ref('isSingle').set(null);