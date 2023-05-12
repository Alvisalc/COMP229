//File read and write
const fs = require('fs');

const getNewID = (array)=>{

    if(array.length > 0){
        return array[array.length -1].id +1
    }else{
        return 1;
    }
    //one line code is better if it is simple
    const newDate = () => new Date().toString();

    // const newDate = () => {
    //     return new Date().toString()
    // };
    
    //whenever we use Promise, resolve and reject will be involed
    function mustBeInArray(array, id){
        return new Promise((resolve,reject)=>{
            const row = array.find(r => r.id == id)
            if(!row){
                reject({
                    message: 'ID not found',
                    status: 404
                })
            }
            resolve(row)
        });
    }

    function writeJSONFile(fileName, content){
        fs.writeFileSync(fileName, 
                        JSON.stringify(content),
                        'utf8', 
                        (err)=>{
                        if(err){
                            console.log("Helper file wrtieJSONfile: "+err);
                        }
        })
    }

    module.exports = {
        getNewID,
        newDate,
        mustBeInArray,
        writeJSONFile
    }

}