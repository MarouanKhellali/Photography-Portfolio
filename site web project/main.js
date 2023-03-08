let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    number=prompt("write number of perso");
    for (let i=0;i<number;i++){
        name=prompt("write name")
        name!null?contacts.unshift(name):alert("write a correct name")
        email= prompt("write email")
        email!null?contacts.unshift(email):alert("write a correct email")
        phone=prompt("write phone")
        name !null && typeof(name)="String"?contacts.unshift(name):alert("write a correct a number")
        }
    console.log(contacts);