var randomNum;
    var check;
    console.log(check)
    console.log(randomNum)

function quote(){
    
randomNum= (Math.trunc(Math.random() *7)+1);
if (check===randomNum && check==7){
    console.log("hi1")
    randomNum -= 1
    
}
else if(check===randomNum){
    console.log("hi2")
    randomNum += 1
}    

switch (randomNum){
    case 1:
        document.getElementById("quoteHeader").innerHTML="“Be yourself; everyone else is already taken.”";
        document.getElementById("quoteName").innerHTML="-- Oscar Wilde" ;
        check=1
        break;
    case 2:
        document.getElementById("quoteHeader").innerHTML="“So many books, so little time.”";
        document.getElementById("quoteName").innerHTML="-- Frank Zappa" ;
        check=2
        break;
    case 3:
        document.getElementById("quoteHeader").innerHTML="“A room without books is like a body without a soul.”";
        document.getElementById("quoteName").innerHTML="-- Marcus Tullius Cicero" ;
        check=3
        break;
    case 4:
        document.getElementById("quoteHeader").innerHTML="“You only live once, but if you do it right, once is enough.”";
        check=4
        document.getElementById("quoteName").innerHTML="-- Mae West" ;
        break;
    case 5:
        document.getElementById("quoteHeader").innerHTML="“Be the change that you wish to see in the world.”";
        document.getElementById("quoteName").innerHTML="-- Mahatma Gandhi" ;
        check=5
        break;
    case 6:
        document.getElementById("quoteHeader").innerHTML="“If you tell the truth, you don't have to remember anything.”";
        document.getElementById("quoteName").innerHTML="-- Mark Twain" ;
        check=6
        break;
    case 7:
        document.getElementById("quoteHeader").innerHTML="“A friend is someone who knows all about you and still loves you.”";
        document.getElementById("quoteName").innerHTML="-- Elbert Hubbard" ;
        check=7
        break;
};
}
