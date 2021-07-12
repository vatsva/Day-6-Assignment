let cards=[
    {
        image:"https://static.wikia.nocookie.net/disney/images/4/4a/Thor_Odinson_TDW_poster_textless.jpg/revision/latest/top-crop/width/360/height/450?cb=20130615173905",
        value:1,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/disney/images/4/4a/Thor_Odinson_TDW_poster_textless.jpg/revision/latest/top-crop/width/360/height/450?cb=20130615173905",
        value:1,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/headhuntersholosuite/images/6/68/Baby_Groot.jpg/revision/latest?cb=20170526164642",
        value:2,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/headhuntersholosuite/images/6/68/Baby_Groot.jpg/revision/latest?cb=20170526164642",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/1d/ca/45/1dca456da902596ff336db24978727eb.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/1d/ca/45/1dca456da902596ff336db24978727eb.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/19/78/82/197882435c2ffe0a13e71717a85fac14.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/19/78/82/197882435c2ffe0a13e71717a85fac14.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://theafictionado.files.wordpress.com/2014/09/captain-america-the-first-avenger-01.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://theafictionado.files.wordpress.com/2014/09/captain-america-the-first-avenger-01.jpg",
        value:5,
        status:"closed"
    },
]


let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));


    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
} 


let cardsCopy=cards;


function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
        <div class= "card" style="background-image:url('${card.image}')">
            <div class= "overlay ${card.status}" onclick="openCard(${index})">

            </div>

        </div>



        `;
    });


    document.getElementById('cards').innerHTML=cardsString;
  
}

displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    


    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;

    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
            

            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("Game Over");
            location.reload();

        }
    }

    displayCards(cards);
}



