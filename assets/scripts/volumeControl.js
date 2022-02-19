function createNode(props) {
  let node = document.createElement(props.tag || "div")
  if (props.className) {
    if (Array.isArray(props.className)) for (let className in props.className) { node.classList.add(className) }
    else node.className = props.className
  }
  if (props.id) { node.setAttribute("id", props.id) }
  if (props.src) { node.setAttribute("src", props.src) }
  if(props.attributes) {
    props.attributes.forEach(attr => {
      node.setAttribute(attr[0], attr[1])
    })
  }
  if (props.textContent) { node.innerHTML = props.textContent }
  if (props.subNodes) {
    if (Array.isArray(props.subNodes)) props.subNodes.forEach(subNode => {
      node.appendChild(createNode(subNode))
    }); else node.appendChild(createNode(props.subNodes))
  }
  return node
}

export default () => {
  let isStarted = false;
  let phases = {
    phase0: false,
    phase1: false,
    phase2: false,
    phase3: false,
    phase4: false,
    phase5: false,
    phase6: false
  }
  let subCount = 0
  let playCheckbox = document.querySelector("#startBtn")
  let recording = new Audio("../audio/test.mp3")
  let volumeRange = document.querySelector("#volume")
  
  playCheckbox.addEventListener("change", e => {
    if(!isStarted) {
      isStarted = true
      setTimeout(() => {
        recording.play()
      }, 500);
      document.querySelector("[name=play]").setAttribute("name", "pause")
    } else {
      if(recording.paused) {
        document.querySelector("[name=play]").setAttribute("name", "pause")
        recording.play()
      }
      else {
        document.querySelector("[name=pause]").setAttribute("name", "play")
        recording.pause()
      }
    }
  })
  recording.addEventListener("timeupdate", e => {
    if (recording.currentTime >= 1 && !phases.phase0) {
      eventInit()
      phases.phase0 = true
    }
    else if(recording.currentTime >= 3 && !phases.phase1) {
      phaseFade(phase1)
      phases.phase1 = true
    }
    else if(recording.currentTime >= 22 && !phases.phase2) {
      phaseFade(phase2, true)
      phases.phase2 = true
    }
    else if (recording.currentTime >= 35 && !phases.phase3) {
      phaseFade(phase3, true)
      phases.phase3 = true
    }
    else if (recording.currentTime >= 71 && !phases.phase4) {
      phaseFade(phase4, true)
      phases.phase4 = true
    }
    else if (recording.currentTime >= 85 && !phases.phase5) {
      phaseFade(phase5, true)
      phases.phase5 = true
    }
    else if (recording.currentTime >= 117 && !phases.phase6) {
      phaseFade(phase6, true)
      phases.phase6 = true
      document.querySelector(".volumeBox").style.transform = "translateY(0)"
      document.querySelector(".subsBox").style.transform = "translateY(0)"
      document.querySelector(".control").style.opacity = 0
    }
  })

  recording.addEventListener("timeupdate", e => {
    let time = recording.currentTime
    if(time >= 0 && subCount === 0) {
      subChanger("Hello there everyone !")
      subCount ++
    }
    else if (time >= 2.5 && subCount === 1) {
      subChanger("today, we are going to introduce you to the")
      subCount++
    }
    else if (time >= 5 && subCount === 2) {
      subChanger("Alwarqa Big challenge ! but before we start")
      subCount++
    }
    else if (time >= 8 && subCount === 3) {
      subChanger("Make sure to adjust your volume to your liking")
      subCount++
    }
    else if (time >= 11 && subCount === 4) {
      subChanger("and remember that you can pause in any moment !")
      subCount++
    }
    else if (time >= 14 && subCount === 5) {
      subChanger("Okay so, the Alwarqa big challenge is an exciting")
      subCount++
    }
    else if (time >= 18 && subCount === 6) {
      subChanger("race organized by the Al Warqah team, and it's really")
      subCount++
    }
    else if (time >= 21.75 && subCount === 7) {
      subChanger("not an event that you would want to miss out !")
      subCount++
    }
    else if (time >= 24 && subCount === 8) {
      subChanger("This event shall take place in the Al Warqah park")
      subCount++
    }
    else if (time >= 26.5 && subCount === 9) {
      subChanger("in the heart of Sharjah, and the competition will")
      subCount++
    }
    else if (time >= 30 && subCount === 10) {
      subChanger("be held on the 19th of March of this year, 2022,")
      subCount++
    }
    else if (time >= 34 && subCount === 11) {
      subChanger("so it's quite close !")
      subCount++
    }
    else if (time >= 35.5 && subCount === 12) {
      subChanger("Essentialy, it's a relay race, which means that")
      subCount++
    }
    else if (time >= 39.75 && subCount === 13) {
      subChanger("it involves teams of people taking turns in")
      subCount++
    }
    else if (time >= 42.30 && subCount === 14) {
      subChanger("completing parts of the race until one has finished")
      subCount++
    }
    else if (time >= 45.5 && subCount === 15) {
      subChanger("first. It's a golden opportunity for you and")
      subCount++
    }
    else if (time >= 48.75 && subCount === 16) {
      subChanger("your friends to compete and cooperate together !")
      subCount++
    }
    else if (time >= 51.5 && subCount === 17) {
      subChanger("And even if you have none, you surely will be")
      subCount++
    }
    else if (time >= 54.5 && subCount === 18) {
      subChanger("able to make new friends during the race !")
      subCount++
    }
    else if (time >= 58 && subCount === 19) {
      subChanger("The distance is certainly a long one, estimated")
      subCount++
    }
    else if (time >= 60.5 && subCount === 20) {
      subChanger("to be 12 kilometers long, split into")
      subCount++
    }
    else if (time >= 63.5 && subCount === 21) {
      subChanger("four laps, with three kilometers for each. It's")
      subCount++
    }
    else if (time >= 67.1 && subCount === 22) {
      subChanger("quite the long one, but it only means that it'll")
      subCount+=6
      // because i did an oopsie and will take a few minutes to fix which am not willing to spend lmao
    }
    else if (time >= 69.5 && subCount === 28) {
      subChanger("be a true test for your power and abilites !")
      subCount++
    }
    else if (time >= 73.1 && subCount === 29) {
      subChanger("Regarding the age of the participants, they can")
      subCount++
    }
    else if (time >= 75.5 && subCount === 30) {
      subChanger("only be 18 years or older, but there are no other")
      subCount++
    }
    else if (time >= 79 && subCount === 31) {
      subChanger("restrictions ! so whether you would bring your")
      subCount++
    }
    else if (time >= 81.3 && subCount === 32) {
      subChanger("siblings, your parents, your friends, they are all welcome!")
      subCount++
    }
    else if (time >= 86.5 && subCount === 33) {
      subChanger("And now for the great part ! the prizes for the")
      subCount++
    }
    else if (time >= 89.75 && subCount === 34) {
      subChanger("first three places are amazing, with the first")
      subCount++
    }
    else if (time >= 92.6 && subCount === 35) {
      subChanger("winner leaving with a staggering five thousand")
      subCount++
    }
    else if (time >= 95.15 && subCount === 36) {
      subChanger("Dirhams ! even the second and third places will")
      subCount++
    }
    else if (time >= 98.15 && subCount === 37) {
      subChanger("get a veeeery genirous prizes, three thousand and")
      subCount++
    }
    else if (time >= 101.6 && subCount === 38) {
      subChanger("two thousand dirhams, so you really want to secure")
      subCount++
    }
    else if (time >= 104.75 && subCount === 39) {
      subChanger("these prizes right ?")
      subCount++
    }
    else if (time >= 107 && subCount === 40) {
      subChanger("Even if you didn't, the race itself will set a big")
      subCount++
    }
    else if (time >= 110 && subCount === 41) {
      subChanger("goal for you to work towards, and it will be a unique")
      subCount++
    }
    else if (time >= 113.5 && subCount === 42) {
      subChanger("experience for you to test out your abilites")
      subCount++
    }
    else if (time >= 115.6 && subCount === 43) {
      subChanger("So")
      subCount++
    }
  })

  volumeRange.addEventListener("input", e => {
    recording.volume = e.currentTarget.value / 100
  })
}

let subChanger = (newSub) => {
  document.querySelector(".subsBox").textContent = newSub
}

let eventInit = () => {
  document.querySelector(".volumeBox").style.transform = "translateY(-100%)"
  document.querySelector(".subsBox").style.transform = "translateY(-100%)"
  document.querySelector(".eventHeading").style.opacity = 0
  setTimeout(() => {
    document.querySelector(".eventHeading").remove()
  }, 1000);
  document.querySelector(".control").style.top = "-2.25rem"
  document.querySelector(".control").style.left = "9rem"
  document.querySelector(".volumeControl").style.opacity = 1
  document.querySelector(".subsBox").style.opacity = 1
}

let phaseFade = (nextPhase, currentPhase) => {
  let eventContainer = document.querySelector(".eventContainer")
  if(currentPhase) {
    console.log(eventContainer)
    eventContainer.children[0].style.transform = "translateX(2rem)"
    eventContainer.children[0].style.opacity = 0
    setTimeout(() => {
      eventContainer.children[0].remove()
    }, 600);
  }
  setTimeout(() => {
    eventContainer.appendChild(nextPhase)
    nextPhase.style.opacity = 0;
    nextPhase.style.transform = "translateX(-2rem)"
    setTimeout(() => {
      nextPhase.style.opacity = 1;
      nextPhase.style.transform = "translateX(0)";
    }, 500);
  }, 1000);
}

let phase1 = createNode({
  className: "fadeTransition",
  subNodes: [
    {
      tag: "img",
      src: "./pics/relay_race.jpg",
      className: "eventImage"
    },
    {
      tag: "h2",
      className: "eventTitle",
      textContent: "Al Warqa Big Challenge"
    },
    {
      tag: "p",
      className: "eventDescription",
      textContent: "A relay event not to be missed !"
    }
  ]
})
let phase2 = createNode({
  className: "fadeTransition",
  subNodes: [
    {
      tag: "iframe",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5240.445362816987!2d55.41563008979778!3d25.18904800251599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f612889187dc9%3A0x134c1f927b925fa7!2z2K3Yr9mK2YLYqSDZhdmF2LTZiSDYp9mE2YjYsdmC2KfYoQ!5e1!3m2!1sen!2sae!4v1644992326339!5m2!1sen!2sae",
      attributes: [
        ["width", 400], ["height", 300], ["loading", "lazy"]
      ],
      className: "eventImage"
    }, {
      className: "eventDescription",
      textContent: '<span class="titleColor">Location:</span> Al Warqah 3 Park'
    }, {
      className: "eventDescription",
      textContent: '<span class="titleColor">Date:</span> 19th of March, 2022'
    }
  ]
})

let phase3 = createNode({
  className: "fadeTransition",
  subNodes: [
    {
      tag: "img",
      src: "./pics/relay_race_2.gif",
      className: "eventImage"
    }, {
      className: "eventDescription",
      textContent: '<span class="titleColor">Type:</span> Relay race'
    }, {
      className: "eventDescription",
      textContent: '<span class="titleColor">Distance:</span> 12km split between 4 laps'
    }
  ]
})

let phase4 = createNode({
  className: "fadeTransition",
  subNodes: [
    {
      tag: "img",
      src: "./pics/adults.png",
      className: "eventImage"
    }, {
      className: "eventDescription",
      textContent: '<span class="titleColor">Participants:</span> People from age 18 and above'
    }
  ]
})

let phase5 = createNode({
  className: "fadeTransition",
  subNodes: [
    {
      tag: "img",
      src: "./pics/winners.jpg",
      className: "eventImage"
    },
    {
      className: "eventDescription",
      textContent: '<span class="titleColor">Prizes:</span>'
    }, {
      className: "eventDescription",
      textContent: '<span class="titleColor gold">1st:</span> 5000 AED'
    }, {
      className: "eventDescription",
      textContent: '<span class="titleColor silver">2nd:</span> 3000 AED'
    }, {
      className: "eventDescription",
      textContent: '<span class="titleColor bronze">3rd:</span> 2000 AED'
    }
  ]
})

let phase6 = createNode({
  textContent: "Are you up for the challenge ?",
  className: "eventHeading"
})