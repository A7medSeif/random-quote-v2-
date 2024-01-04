var quote = document.getElementById('quote')

var author = document.getElementById('author')




var quotes = [  `“Be yourself; everyone else is already taken.”`  ,  `“So many books, so little time.”` , `“A room without books is like a body without a soul.”` ,  `
“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”` ]


var authors=[ "― Oscar Wilde" , "― Frank Zappa" , "― Marcus Tullius Cicero"  , "― Dr. Seuss" ]






function quoteGenerator(){

    var x = Math.floor(Math.random() * authors.length);
    document.getElementById('quotes').innerHTML = quotes[x]
    document.getElementById('authors').innerHTML = authors[x]

}






