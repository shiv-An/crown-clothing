import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyC9K_HhGU_QIPfgWKSWfr-PtqlZbi29trM",
    authDomain: "crown-db-a03ad.firebaseapp.com",
    projectId: "crown-db-a03ad",
    storageBucket: "crown-db-a03ad.appspot.com",
    messagingSenderId: "1059790130061",
    appId: "1:1059790130061:web:561bf64cd1d5c161078bc4",
    measurementId: "G-RB69ZT0R8H"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('Error createing user',error.messagae);
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;