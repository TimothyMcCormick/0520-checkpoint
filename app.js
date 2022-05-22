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
    multiplier: 2
  },
  axe: {
    Name: 'Axe',
    price: 20,
    quantity: 0,
    multiplier: 5
  }
  
};

let guestDrummers= {
  TravisBarker: {
    Name: 'Travis Barker',
    price: 500,
    quantity: 0,
    multiplier: 50
  },

  NeilPeart: {
    Name: 'Neil Peart',
    price: 1000,
    quantity: 0,
    multiplier: 100
  }
};

// let newSticksPrice = clickUpgrades.sticks.price


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
    }
    updateChops()
    
  
}


function updateChops(){
  document.getElementById('chops-count').innerText = chops.toString()
}

// function purchasedSticks(){
  // if (clickUpgrades.sticks.quantity > 50){
  //   clickUpgrades.sticks.price += 10 * 1.2
  // }
  // document.getElementById('purchased-sticks').innerText = clickUpgrades.sticks.quantity.toString()
  // document.getElementById('stick-price').innerText = clickUpgrades.sticks.price.toString()
// }

// function purchasedAxes(){
  // if (clickUpgrades.axe.quantity > 50){
  //   clickUpgrades.axe.price += 20 * 1.2
  // }
  // document.getElementById('purchased-axes').innerText = clickUpgrades.axe.quantity.toString()
  // document.getElementById('axe-price').innerText = clickUpgrades.axe.price.toString()
// }

// function purchasedTravis(){
//   if (guestDrummers.TravisBarker.quantity > 25){
//     guestDrummers.TravisBarker.price += 200 * 1.2
//   }
//   document.getElementById('purchased-travis').innerText = guestDrummers.TravisBarker.quantity.toString()
//   document.getElementById('travis-price').innerText = guestDrummers.TravisBarker.price.toString()

// }

// function purchasedNeil(){
//   if (guestDrummers.NeilPeart.quantity > 25){
//     guestDrummers.NeilPeart.price += 600 * 1.2
//   }
//   document.getElementById('purchased-neil').innerText = guestDrummers.NeilPeart.quantity.toString()
//   document.getElementById('neil-price').innerText = guestDrummers.NeilPeart.price.toString()
// }

function buySticks(){
  if(chops >= clickUpgrades.sticks.price){
    chops -= clickUpgrades.sticks.price
    clickUpgrades.sticks.quantity++
  } if (clickUpgrades.sticks.quantity > 50){
    clickUpgrades.sticks.price += 10 * 1.1
  }
  document.getElementById('purchased-sticks').innerText = clickUpgrades.sticks.quantity.toString()
  document.getElementById('stick-price').innerText = clickUpgrades.sticks.price.toString()
  
  updateChops()
  // purchasedSticks()
}




  // if(clickUpgrades.sticks.quantity >= 10){
  //   clickUpgrades.sticks.price += clickUpgrades.sticks.price * 1.2
  // }


function buyAxe(){
  if(chops >= clickUpgrades.axe.price){
    chops -= clickUpgrades.axe.price
    clickUpgrades.axe.quantity++
  } if (clickUpgrades.axe.quantity > 50){
    clickUpgrades.axe.price += 20 * 1.1
  }
  document.getElementById('purchased-axes').innerText = clickUpgrades.axe.quantity.toString()
  document.getElementById('axe-price').innerText = clickUpgrades.axe.price.toString()
  updateChops()
  // purchasedAxes()
}

function buyTravis(){
  if(chops >= guestDrummers.TravisBarker.price){
    chops -= guestDrummers.TravisBarker.price
    guestDrummers.TravisBarker.quantity++
  } if (guestDrummers.TravisBarker.quantity > 25){
    guestDrummers.TravisBarker.price += 200 * 1.1
  }
  document.getElementById('purchased-travis').innerText = guestDrummers.TravisBarker.quantity.toString()
  document.getElementById('travis-price').innerText = guestDrummers.TravisBarker.price.toString()
  updateChops()
  // purchasedTravis()
  // collectAutoUpgrades()
}

function buyNeil(){
  if(chops >= guestDrummers.NeilPeart.price){
    chops -= guestDrummers.NeilPeart.price
    guestDrummers.NeilPeart.quantity++
  } if (guestDrummers.NeilPeart.quantity > 25){
    guestDrummers.NeilPeart.price += 600 * 1.1
  }
  document.getElementById('purchased-neil').innerText = guestDrummers.NeilPeart.quantity.toString()
  document.getElementById('neil-price').innerText = guestDrummers.NeilPeart.price.toString()
  updateChops()
  // purchasedNeil()
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


setInterval(collectAutoUpgrades, 3000);
drawDrums()













