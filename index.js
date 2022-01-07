#!/usr/bin/env node

// const clearConsole = require('clear-any-console');
// Clears the console.
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome'); 
welcome({
   title: pkgJSON.name, 
   tagLine: `Howdy, nice to meet ya!`,
   description: pkgJSON.description,
   version: pkgJSON.version,
   bgColor: `#FADC00`,
   color: `#000000`,
   bold: true,
   clear: true,
})
console.log(`
NAME: ${pkgJSON.name}
VERSION: ${pkgJSON.version}
DESCRIPTION: ${pkgJSON.description}

`);

console.log(`Ahmed Asim - DevOps Engineer 

I'm Senior DevOps Engineer, 29 years old Egyption based on Riyadh KSA I've 4 years of experience in the IT field.
I've worked with different companies with different roles i.e DevOps Engineer,Linux Systems Engineer,
Systems Engineer, Product technology Engineer.

LinkedIn: https://www.linkedin.com/in/ahmed-asim/
Twitter: https://twitter.com/AmAhmedassem
GitHub: https://github.com/AhmedAsimMetwally
`);