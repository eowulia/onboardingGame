

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const gameStart = document.getElementById("gameStart")

let link1 = "I seek other adventurers to join me"
let result1 = link1.link("https://metagame.wtf/players")
let link2 = "I seek mercenaries to join me"
let result2 = link2.link("https://metagame.wtf/community/guilds")
let link3 = "Projects"
let result3 = link3.link("https://metagame.wtf/community/guilds")
let link4 = "Ok, I'll buy seeds"
let result4 = link4.link("https://metagame.wtf/seeds")
let link5 = "I'll support the wider ecosystem & donate on Gitcoin"
let result5 = link5.link("https://gitcoin.co/grants/")
let link6 = "I'll zoom out of crypto & donate on Giveth"
let result6 = link6.link("https://giveth.io/projects")
let link7 = "Let me at least offset my carbon footprint..."
let result7= link7.link ("")




let state = {}

function startGame() {
    var x = document.getElementById("main");
    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
    } else {
      x.classList.add("hide");
    }
    showTextNode(1)
}



function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
textNode.options.forEach (option => {
if (showOption(option)) {
  const button = document.createElement("button")
  button.innerHTML = option.text
  button.classList.add("btn")
  button.addEventListener("click",() => selectOption(option))
  optionButtonsElement.appendChild(button)

}
})
  }



function showOption(option) {
  return option.requireState == null
  
}

function selectOption(option) {

const nextTextNodeId = option.nextText

showTextNode(nextTextNodeId)

  }


const textNodes = [
  {
    id: 1,
    text: "Welcome weary traveler! Have you been to these lands before?",
    options: [
      {
        text: 'Where the fuck am I?',
        nextText: 2
      },
      {
        text: "Yes sir! I'm back on another quest",
        nextText: 3
      },
      {
        text: "Yeah, I know a thing or two about the new web",
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: "You're at the edge of the new web. There are dark forests & open plains, gold mines & minefields. Its a Wild Web to be sure, full of great opportunities but also great dangers...",
    options: [
      {
        text: "Tell me about opportunities",
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 5
      },
        {
        text: "Tell me about dangers",
        nextText: 6
      },
    ]
  },

  {
    id: 3,
    text: "What brings you back?",
    options: [
      {
        text: "I'm here to get support for a project",
        nextText: 7
      },
        {
        text: "I'm here to explore & learn",
        nextText: 8
      },
    ]
  },
    {
    id: 4,
    text: "Oh yeah, what do you know?",
    options: [
      {
        text: "I've been in this space for many years",
        nextText: 9
      },
        {
        text: "I know about the dangers & opportunities",
        nextText: 10
      },
      
    ]
  }, 

  {
    id: 5,
    text: "In case you haven't noticed, a whole new world is being built out here, a new socioeconomic fabric. If you're willing to take risks & put in effort, there are many ways to benefit. What kind of opportunities are you looking for?",
    options: [
      {
        text: "I'm looking for places to invest my time",
        nextText: 11
      },
        {
        text: "Places to invest my money",
        nextText: 12
      },
        {
        text: "I'm looking for places to learn'",
        nextText: 13
      },
        {
        text: "What do you mean a whole socioeconomic fabric lol?",
        nextText: 14
      },
      
    ]
  },
  {
    id: 6,
    text: "There are all kinds of ways to leave these lands empty handed & worse off than when you came here with high hopes of riches.From being fished in the most blatant ways to elaborate schemes of robbing or pulling the proverbial rug from under your feet, to YOU! Remember, you are your own greatest danger. Failure to safely store your secret phrase or not being careful enough has cost many people many fortunes...",
    options: [
      {
        text: "Uhh... Sounds really dangerous, tell me more",
        nextText: 15
      },
        {
        text: "Gotcha, now tell me about the opportunities",
        nextText: 16
      }
            
    ]
  },

  {
    id: 7,
    text: "What kind of support?",
    options: [
      {
        text: result1
        
      },
      {
        text: result2
      
      },
      {
        text: "I seek money",
        nextText: 17
      },
        {
        text: "Other",
        nextText: 18
      }
            
    ]
  },
  {
    id: 8,
    text: "What do you want to explore",
    options: [
      {
        text: result3
        
      },
      {
        text: "Knowledge",
        nextText:19
      
      },
      {
        text: "MetaGame",
        nextText: 20
      }
     
            
    ]
  },
  {
    id: 9,
    text: "Well, if you benefited & built a great life for yourself for not much effort, maybe its time to give some back?",
    options: [
      {
        text: result4
        
      },
      {
        text: result5,
        
      
      },
      {
        text:result6,
        
      
      },
      {
        text:"No thanks! I want to explore more first!",
        nextText:8
        
      
      },
     
            
    ]
  },
  {
    id: 10,
    text: "Nice! Have you done anything useful or at least enriched yourself without losing it all to one of the great dangers",
    options: [
      {
        text: "Kind of been on the sidelines most of the time", 
        nextText:21
        
      },
      {
        text: "You could say I did well?",
        nextText:10
      
      },
      {
        text:"Yess sir! I have built things",
        nextText:22
      
      },
     
     
            
    ]
  },
  {
    id: 11,
    text: "There's no lack of places to invest time! The question is, what is your skill level & how much do you value your time? Are you here to work for passion & promise-tokens or are you looking for well paid gigs.",
    options: [
      {
        text: "Kind of been on the sidelines most of the time", 
        nextText:21
        
      },
      {
        text: "You could say I did well?",
        nextText:10
      
      },
      {
        text:"Yess sir! I have built things",
        nextText:22
      
      },
     
     
            
    ]
  },
]



