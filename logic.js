let maincontainer = document.createElement('div');
maincontainer.classList.add('maincontainer');
document.body.appendChild(maincontainer);

let heading = document.createElement('h1');
heading.textContent="Quotes Generator";
heading.classList.add('heading');
maincontainer.appendChild(heading);


let subcontainer = document.createElement('div');
subcontainer.classList.add('subcontainer');
maincontainer.appendChild(subcontainer);


let qarray = [
    {
        q:"\"You only live once, but if you do it right, once is enough.\"",
        w:'-Mae West',
        s:'https://tse1.mm.bing.net/th?id=OIP.tFPuCdVomwVhTY_PfvPJvQHaGL&pid=Api&P=0&h=180'
    },
    {
        q:"\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
        w:"-Albert Einstein",
        s:'https://tse3.mm.bing.net/th?id=OIP.lLAAtV0-rRVEfybr1ebeQQHaJ3&pid=Api&P=0&h=180'
    },
    {
        q:"\"A room without books is like a body without a soul.\"",
        w:"- Marcus Tullius Cicero",
        s:'https://tse4.mm.bing.net/th?id=OIP.tmOD7w3S8VY5-XWiW2dyegHaIV&pid=Api&P=0&h=180'
    },
    {
        q:"\"Be the change that you wish to see in the world.\"",
        w:"-Mahatma Gandhi",
        s:'https://tse1.explicit.bing.net/th?id=OIP.TuiHO-0-K6R_IdFmBoWAogHaEt&pid=Api&P=0&h=180'
    },
    {
        q:"\"In three words I can sum up everything I've learned about life: it goes on.\"",
        w:"-Robert Frost",
        s:"https://tse3.mm.bing.net/th?id=OIP.9aKuihn5gj_8JmS6vld72AHaHa&pid=Api&P=0&h=180"
    },
    {
        q:"\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"",
        w:"-Winston S. Churchill",
        s:"https://tse1.mm.bing.net/th?id=OIP.WB81gy1P_4INK2TidmpBiwHaGL&pid=Api&P=0&h=180"
    }
]
let color=['#00008B','#FF00FF','#00FF00','#FF0000','#FFA500'];

let image = document.createElement('img');
image.src='https://tse3.mm.bing.net/th?id=OIP.jeSdIOliWg0rcCsszbpQhAHaKe&pid=Api&P=0&h=180';
image.classList.add('image');
subcontainer.appendChild(image);

let mainq = document.createElement('h1');
mainq.textContent="\"Be yourself; everyone else is already taken\"";
mainq.classList.add('mainq');
subcontainer.appendChild(mainq);

let mainw = document.createElement('h2');
mainw.textContent="-Oscar Wilde";
mainw.classList.add('mainw');
subcontainer.appendChild(mainw);

let button = document.createElement('button');
button.classList.add('button');
button.id='button';
button.textContent="New Quotes";
subcontainer.appendChild(button);

let i=0;
button.onclick = function(){
    let lenArray = qarray.length;
    let lencolor = color.length;
    let j = Math.floor(Math.random()*lencolor);

    image.src=qarray[i].s;
    mainq.textContent=qarray[i].q;
    mainw.textContent=qarray[i].w;
   
    mainw.style.color=color[j];
    i+=1;
    if (i===lenArray){
        i=0;
    }
}