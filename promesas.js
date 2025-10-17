/* setTimeout(() => {
  console.log('Me ejecuto primero');
}, 2000);

console.log('Me ejecuto al final');

console.log('-------------'); */

/* function msg1(callback) {
  console.log('Me ejecuto primero');
  callback();
}

setTimeout(() => {
  msg1(function () {
    console.log('Me ejecuto al final');
  });
}, 2000);
 */

async function msg2(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      return reject();
      return resolve();
    }, 2000);
  });
}

async function main() {
  try {
    await msg2('Me ejecuto primero');

    console.log('Me ejecuto al final');
  } catch (error) {
    console.log('Se ha producido un error');
  }
}

main();
