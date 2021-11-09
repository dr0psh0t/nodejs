async function myDisplay() {
    let myPromise = new Promise((resolve, reject) => {
        resolve("RESOLVE");
    });

    //console.log(myPromise);       //  Promise { 'RESOLVE' }
    console.log(await myPromise);   //  RESOLVE
}