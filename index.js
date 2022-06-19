// document.querySelector('#rankings').addEventListener('click', getTop100)

// function getTop100() {
//     fetch('https://americas.api.riotgames.com/lor/ranked/v1/leaderboards?api_key=RGAPI-9cbfe7be-8dc7-4074-8472-1b1ef84b824a')
//   .then(response => response.json())
//   .then(data =>{
//     // console.log(data.players[0])
//     data.players.slice(0, -294).forEach(item => {
//         // console.log(item)
//         const li = document.createElement('li');
//         li.textContent = item.name
//         document.querySelector('ol').appendChild(li)
//       });
//   });
// }

// window.addEventListener("DOMContentLoaded", function() {
//     const audio = document.querySelector("#choose");
//   audio.volume = 0.2;
//   audio.play();
// });

document.getElementById("home").volume = .1;

document.querySelector('#astra').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/astra.gif')";
    select.pause(); select.currentTime = 0; select.play();
    astraA.volume = .1
    astraA.pause(); astraA.currentTime = 0; astraA.play(); 
    cancelVoice(astra);
})

document.querySelector('#breach').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/breach.gif')";
    select.pause(); select.currentTime = 0; select.play();
    breachA.volume = .1
    breachA.pause(); breachA.currentTime = 0; breachA.play();
    cancelVoice(breach);
})

document.querySelector('#brimstone').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/brimstone.gif')";
    select.pause(); select.currentTime = 0; select.play();
    brimstoneA.volume = .1
    brimstoneA.pause(); brimstoneA.currentTime = 0; brimstoneA.play();
    cancelVoice(brimstone);
})

document.querySelector('#viper').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/viper.gif')";
    select.pause(); select.currentTime = 0; select.play();
    viperA.volume = .1
    viperA.pause(); viperA.currentTime = 0; viperA.play();
    cancelVoice(viper);
})

document.querySelector('#cypher').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/cypher.gif')";
    select.pause(); select.currentTime = 0; select.play();
    cypherA.volume = .1
    cypherA.pause(); cypherA.currentTime = 0; cypherA.play();
    cancelVoice(cypher);
})

document.querySelector('#chamber').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/chamber.gif')";
    select.pause(); select.currentTime = 0; select.play();
    chamberA.volume = .1
    chamberA.pause(); chamberA.currentTime = 0; chamberA.play();
    cancelVoice(chamber);
})

document.querySelector('#fade').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/fade.gif')";
    select.pause(); select.currentTime = 0; select.play();
    fadeA.volume = .1
    fadeA.pause(); fadeA.currentTime = 0; fadeA.play();
    cancelVoice(fade);
})

document.querySelector('#jett').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/jett.gif')";
    select.pause(); select.currentTime = 0; select.play();
    jettA.volume = .1
    jettA.pause(); jettA.currentTime = 0; jettA.play();
    cancelVoice(jett);
})

document.querySelector('#kayo').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/kayo.gif')";
    select.pause(); select.currentTime = 0; select.play();
    kayoA.volume = .1
    kayoA.pause(); kayoA.currentTime = 0; kayoA.play();
    cancelVoice(kayo);
})

document.querySelector('#killjoy').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/killjoy.gif')";
    select.pause(); select.currentTime = 0; select.play();
    killjoyA.volume = .1
    killjoyA.pause(); killjoyA.currentTime = 0; killjoyA.play();
    cancelVoice(killjoy);
})

document.querySelector('#neon').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/neon.gif')";
    select.pause(); select.currentTime = 0; select.play();
    neonA.volume = .1
    neonA.pause(); neonA.currentTime = 0; neonA.play();
    cancelVoice(neon);
})

document.querySelector('#omen').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/omen.gif')";
    select.pause(); select.currentTime = 0; select.play();
    omenA.volume = .1
    omenA.pause(); omenA.currentTime = 0; omenA.play();
    cancelVoice(omen);
})

document.querySelector('#phoenix').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/phoenix.gif')";
    select.pause(); select.currentTime = 0; select.play();
    phoenixA.volume = .1
    phoenixA.pause(); phoenixA.currentTime = 0; phoenixA.play();
    cancelVoice(phoenix);
})

document.querySelector('#raze').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/raze.gif')";
    select.pause(); select.currentTime = 0; select.play();
    razeA.volume = .1
    razeA.pause(); razeA.currentTime = 0; razeA.play();
    cancelVoice(raze);
})

document.querySelector('#reyna').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/reyna.gif')";
    select.pause(); select.currentTime = 0; select.play();
    reynaA.volume = .1
    reynaA.pause(); reynaA.currentTime = 0; reynaA.play();
    cancelVoice(reyna);
})

document.querySelector('#sage').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/sage.gif')";
    select.pause(); select.currentTime = 0; select.play();
    sageA.volume = .1
    sageA.pause(); sageA.currentTime = 0; sageA.play();
    cancelVoice(sage);
})

document.querySelector('#skye').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/skye.gif')";
    select.pause(); select.currentTime = 0; select.play();
    skyeA.volume = .1
    skyeA.pause(); skyeA.currentTime = 0; skyeA.play();
    cancelVoice(skye);
})

document.querySelector('#sova').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/sova.gif')";
    select.pause(); select.currentTime = 0; select.play();
    sovaA.volume = .1
    sovaA.pause(); sovaA.currentTime = 0; sovaA.play();
    cancelVoice(sova);
})
  
document.querySelector('#yoru').addEventListener('click', function(){
    document.querySelector('#mainContainer').style.backgroundImage = "url('val/yoru.gif')";
    select.pause(); select.currentTime = 0; select.play();
    yoruA.volume = .1
    yoruA.pause(); yoruA.currentTime = 0; yoruA.play();
    cancelVoice(yoru);
})

// function cancelVoice() {
//     astraA.pause(); jettA.pause(); breachA.pause(); brimstoneA.pause(); chamberA.pause(); fadeA.pause(); cypherA.pause(); kayoA.pause(); killjoyA.pause(); neonA.pause(); omenA.pause(); phoenixA.pause(); razeA.pause(); reynaA.pause(); sageA.pause(); skyeA.pause(); sovaA.pause(); viperA.pause(); yoruA.pause();
// }



function cancelVoice(agent) {
    const agentRoster = [astraA, breachA, brimstoneA, chamberA, cypherA, fadeA, jettA, kayoA, killjoyA, neonA, omenA, phoenixA, razeA, sageA, skyeA, sovaA, viperA, yoruA]
    agentRoster.forEach(item => {
        let audioName = (item.id)
        let agentz = agent.id;
        let test = audioName.includes(agentz)
        if (test) {
            return;
        }
        else{
            item.pause()
        }  
    })
}




