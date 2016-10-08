
var user = prompt("Who is your favorite character in friends?").toUpperCase();
        var monica = true;
        var phoebe = true;
        var rachel = true;
        
switch(user) {
    case 'CHANDLER':
        
        if (monica && phoebe) {
            console.log("This is surely him.");
        } else {
            console.log("Still him.");
    break;
    case 'JOEY': 
       
        if (phoebe || rachel) {
            console.log("An actor.");
        } else {
        console.log("Loves food.");
        }
     break;
    case 'ROSS': 
        
        if (rachel && monica) {
             console.log("Loves Science.");
        } else {
            console.log("Not him.");
        }
    break;
    
    default: 
        console.log("Write from these three people.");
    
}
