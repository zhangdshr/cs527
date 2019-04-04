const dns = require('dns');
const {promisify} = require('util');


dns.resolve4('www.mum.edu', (err, addresses) => {
  if (err) throw err;
  console.log(`IP ADRESS:` + addresses);
});


const dnsResolve4 = promisify(dns.resolve4)
dnsResolve4('www.mum.edu')
.then((text) => {
    console.log('IP ADRESS:', text);
})
.catch((err) => {
    console.log('ERROR:', err);
});


async function main() {
    try {
        const text = await dnsResolve4('www.mum.edu');
        console.log('IP ADRESS:', text);
    }
    catch (err) {
        console.log('ERROR:', err);
    }
}
main();