let pronoun = ['the', 'our'];
let adjective = ['great', 'big'];
let noun = ['jogger', 'racoon'];

pronoun.forEach(pron => {
    adjective.forEach(adj => {
        noun.forEach(nou => {
            console.log(pron + adj + nou + ".com");
        });
    });
});


