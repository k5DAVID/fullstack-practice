function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
      if (seconds > 1) {
        reject("waited too long!");
      } else  {
        resolve();
      }  
        }, seconds * 1000);
 });
}

async function run() {
try{
     console.log("starting...");
  await wait(2);
  console.log("2 seconds passed!");  
} catch (error){
    console.log("something went wrong:", error);
}
}   
run();