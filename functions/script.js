// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer: function(){
//         let res = prompt(
//             `${this.question} \n
//              ${this.options[0]} \n
//              ${this.options[1]} \n
//              ${this.options[2]} \n
//              ${this.options[3]} \n
//              (Write your answer)
//             `
//         )
//         const rightAns = '0 1 2 3';
//         if(res.includes(rightAns)){
//             this.answers[res]++;
//         } else {
//             console.log('Your input is not correct (sad face)')
//         }
//         displayResults.call(poll, this.answers);
//     }
// };

// const displayResults = function(type){
//     if(Array.isArray(type)){
//         console.log(type);
//     } else if(typeof type === 'string'){
//         console.log(`Poll results are ${type}`);
//     }
// }

// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];

// //displayResults.call(poll, [13, 2, 4, 1]);
// //displayResults.call(poll, '13, 2, 4, 1');

// displayResults.call(null, data1);
// displayResults.call(null, data2);

////Second challenge


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    header.addEventListener('click', function(){
        header.style.color = 'blue';
    })
})();







