module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {

        // To be implemented!
        if(reject){console.log(reject);}
        var buf1 = fs.readFileSync(filePath, 'utf8');
        content = Buffer.from(buf1, 'hex').toString('utf8');
        if(buf1)
        resolve(buf1)
    });
}




 
     