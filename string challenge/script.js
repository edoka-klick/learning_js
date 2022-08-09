document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', function(){
    const textarea = document.querySelector('textarea').value;
    ///textarea is only a string
    
    ///get the index after _ and make it uppercase then do these below 
    let lines = textarea.split('\n');
    //console.log(lines);

    let resultArr = []
    let str = '';
    let i = 1;
    for(let item of lines){
        //find the index of _
        const ind = item.indexOf('_');
        ///console.log(ind);
        //Get the char which will become upper case
        const uppCase = item[ind + 1];

        ///Replacing _
        item = item.replaceAll('_', '');
        
        ///console.log(item);
        ///storing the result in str
        str = item.slice(0, ind).toLowerCase() + uppCase.toUpperCase() + item.slice(ind + 1).toLowerCase();
        
        resultArr.push(`${str.trim()} ${'✅'.repeat(i)}`);
        i++;
    }
    console.log(resultArr);
});