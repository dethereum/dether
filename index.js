#!/usr/bin/env node
const welcome = require('cli-welcome')

const pkgJSON = require('./package.json');

welcome({
    title: pkgJSON.name,
    tagLine: `Get to know Dether`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: false
})


console.log(`
Dethereum - Frontend Engineer/AWS Architech

FP Fundamentalist, Typescript Enthusiast and caffiene abuser
`);