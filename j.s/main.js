var articles =[
    {
       description :' Without music, life would be aSSS mistake ',
       name : "Friedrich Nietzsche, Twilight of the Idols",
    },
    {
        description :"We accept the love we think we deserve.",
        name : "Stephen Chbosky, The Perks of Being a Wallflower",
     },
     {
        description :"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        name : " Mahatma Gandhi",
     },
     {
        description :"A friend is someone who knows all about you and still loves you.",
        name : " Elbert Hubbard",
     },
     {
        description :"To live is the rarest thing in the world. Most people exist, that is all",
        name : " Oscar Wilde",
     },
     {
        description :"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name : "Albert Einstein",
     },
     {
        description :"So many books, so little time.",
        name : "Frank Zappa",
     },
     {
        description :"A room without books is like a body without a soul.",
        name : "Marcus Tullius Cicero",
     },
     {
        description :"You only live once, but if you do it right, once is enough.",
        name : "Mae West",
     },
];

function changeItem(){
var cartona = ""
for (var i=0;i<articles.length;i++){
    var x = Math.floor(Math.random()*articles.length)  
    cartona=`
    <p class="m-3 fs-3">"${articles[x].description}"</p>
    <p class=" fs-3">-${articles[x].name}</p>
    
    `
}
document.getElementById('changePragragh').innerHTML=cartona
}
