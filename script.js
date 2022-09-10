let a=[{"text":"Why did the bee get married? He found his honey"},
       {"text":"Did you hear the rumor about the butter? Never mind, I shouldn’t spread it!"},
       {"text":"What do you call a fake noodle? An impasta"},
       {"text":"Why can’t a bicycle stand on it’s own? It is two tired."},
       {"text":"What is the opposite of a croissant? A happy uncle."},
       {"text":"What does it make you if you see a robbery at an Apple Store? An iwitness."},
       {"text":"What is an astronaut’s favorite key on a keyboard? The space bar."},
       {"text":"What is brown and sticky? A stick"},
       {"text":"Can February March? No but April May"},
       {"text":"Which is the most religious cheese?Swiss, because it is holy. "},
 {"text":"What do you call cheese that isn’t yours?Nacho Cheese!"},
       {"text":"Did you see the movie about the hot dog?It was an Oscar Wiener."},
       {"text":"Why did the can crusher quit his job?Because it was soda pressing! "},
       {"text":"Do you want to hear a pizza joke?Never mind it’s too cheesy."},
       {"text":"Why don’t eggs tell jokes?They’d crack each other up!"},
       {"text":"Did you hear the joke about the peanut butter?I’m not telling you. You might spread it! "},
       {"text":"What do you call candy that was stolen?Hot chocolate! "},
 {"text":"Why did the fisherman put peanut butter into the sea?To go with the jellyfish!"} ];

const jokeContainer=document.getElementsByClassName('joke-container');
const joketext=document.getElementById('joke');
const jokebtn=document.getElementsByClassName('reload');

function newjoke(){
    const joketeller=a[Math.floor(Math.random() * a.length)];
    joketext.textContent=joketeller.text;
  console.log(joketeller.text);
}
jokebtn.addEventListener('click',newjoke());
newjoke();