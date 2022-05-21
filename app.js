console.log('js arrived')


let chops = 0

const drums = {
  image: "./drumset.jpg",  
}

let clickUpgrades = {
  sticks: {
    Name: 'Sticks',
    price: 10,
    quantity: 0,
    multiplier: 1.5
  },
  axe: {
    Name: 'Axe',
    price: 20,
    quantity: 0,
    multiplier: 4
  }
  
};



let guestDrummers= {
  TravisBarker: {
    Name: 'Travis Barker',
    price: 200,
    quantity: 0,
    multiplier: 20
  },

  NeilPeart: {
    Name: 'Neil Peart',
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};


function drawDrums(){
  let template = ''
  template +=`
  <div class="col-md-4 shadow drums-card p-0 rounded"  style="width: 30em">
    <img class="img-fluid drums-img rounded" onclick="mine()" src="${drums.image}" alt="">
  </div>
  `
  document.getElementById('drums').innerHTML = template
}

function mine(){
  
  chops++
    if (clickUpgrades.sticks.quantity > 0){
      chops += clickUpgrades.sticks.quantity * clickUpgrades.sticks.multiplier
    } if (clickUpgrades.axe.quantity > 0){
      chops += clickUpgrades.axe.quantity * clickUpgrades.axe.multiplier
    } 
      
    
    priceMultiplier()
    updateChops()
  }




function updatePrice(){
  
}

function updateChops(){
  document.getElementById('chops-count').innerText = chops.toString()
}

function purchasedSticks(){
  document.getElementById('purchased-sticks').innerText = clickUpgrades.sticks.quantity.toString()
}

document.getElementById('stick-price').innerText = clickUpgrades.sticks.price.toString()

document.getElementById('travis-price').innerText = guestDrummers.TravisBarker.price.toString()

document.getElementById('axe-price').innerText = clickUpgrades.axe.price.toString()

document.getElementById('neil-price').innerText = guestDrummers.NeilPeart.price.toString()

function purchasedAxes(){
  document.getElementById('purchased-axes').innerText = clickUpgrades.axe.quantity.toString()
}

function purchasedTravis(){
  document.getElementById('purchased-travis').innerText = guestDrummers.TravisBarker.quantity.toString()
}

function purchasedNeil(){
  document.getElementById('purchased-neil').innerText = guestDrummers.NeilPeart.quantity.toString()
}

function buySticks(){
  if(chops >= clickUpgrades.sticks.price){
    chops -= clickUpgrades.sticks.price
    clickUpgrades.sticks.quantity++
  }
  updateChops()
  purchasedSticks()
}

function buyAxe(){
  if(chops >= clickUpgrades.axe.price){
    chops -= clickUpgrades.axe.price
    clickUpgrades.axe.quantity++
  }
  updateChops()
  purchasedAxes()
}

function buyTravis(){
  if(chops >= guestDrummers.TravisBarker.price){
    chops -= guestDrummers.TravisBarker.price
    guestDrummers.TravisBarker.quantity++
  }
  updateChops()
  purchasedTravis()
  // collectAutoUpgrades()
}

function buyNeil(){
  if(chops >= guestDrummers.NeilPeart.price){
    chops -= guestDrummers.NeilPeart.price
    guestDrummers.NeilPeart.quantity++
  }
  updateChops()
  purchasedNeil()
  // collectAutoUpgrades()
}

function collectAutoUpgrades(){
      if (guestDrummers.TravisBarker.quantity > 0){
        chops += guestDrummers.TravisBarker.quantity * guestDrummers.TravisBarker.multiplier
      } if (guestDrummers.NeilPeart.quantity > 0){
        chops += guestDrummers.NeilPeart.quantity * guestDrummers.NeilPeart.multiplier
      }
    updateChops()
  }

function priceMultiplier(){
  if (clickUpgrades.sticks.quantity >= 10) {
    clickUpgrades.sticks.price *= 1.2
  }
}

setInterval(collectAutoUpgrades, 3000);


drawDrums()













