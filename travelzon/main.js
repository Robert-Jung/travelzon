//package array
var app = {
    cart: [],
    travelPackages: [
    {
      id: '1',
      destination: 'Location 1',
      price: 1111,
      img: '1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
    },
    {
      id: '2',
      destination: 'Location 2',
      price: 2222,
      img: '2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
    },
    {
      id: '3',
      destination: 'Location 3',
      price: 3333,
      img: '3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
    },
    {
      id: '4',
      destination: 'Location 4',
      price: 4444,
      img: '4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
    }]
}

//wrapper
var $wrapper = document.createElement('div')
document.body.appendChild($wrapper).classList.add('container')

//navbar home + cart
function createNavbar() {
  var $nav = document.createElement('nav')
  var $navCart = document.createElement('span')
  var $homeBtn = document.createElement('button')

  $homeBtn.id = 'home'
  $homeBtn.textContent = 'HOME'

  $nav.appendChild($navCart).classList.add('glyphicon', 'glyphicon-shopping-cart')
  $nav.appendChild($homeBtn).classList.add('btn', 'btn-default')

  return $nav
}

var $nav = createNavbar()
$wrapper.appendChild($nav).classList.add('navbar', 'navbar-inverse')

//list page
var $wrapperRow = document.createElement('div')
$wrapper.appendChild($wrapperRow).classList.add('row')

function createSinglePackage(travelPackage) {
    var $div = document.createElement('div')
    var $img = document.createElement('img')
    var $p = document.createElement('p')
    var $desc = document.createElement('div')
    var $button = document.createElement('button')

    $img.setAttribute('src', travelPackage.img)
    $desc.textContent = travelPackage.description
    $button.textContent = ('Book a trip to ' + travelPackage.destination + ' for $' + travelPackage.price)

    $p.id = travelPackage.destination
    $button.id = travelPackage.id

    $div.appendChild($img).classList.add('img-responsive', 'resize')
    $div.appendChild($p).classList.add('overlay')
    $p.appendChild($desc).classList.add('text')
    $desc.appendChild($button).classList.add('btn', 'btn-info')

    return $div
}

function renderDeals() {
  for (var i = 0; i < app.travelPackages.length; i++) {
    var singlePackage = createSinglePackage(app.travelPackages[i])
    $wrapperRow.appendChild(singlePackage).classList.add('container', 'col-md-6', 'spacing', 'imgoverlay')
  }
}

renderDeals()

//detail page
function detailPage(deal) {
  var $div = document.createElement('div')
  var $leftCol = document.createElement('div')
  var $rightCol = document.createElement('div')
  var $img = document.createElement('img')
  var $desc = document.createElement('div')
  var $purchase = document.createElement('div')
  var $button = document.createElement('button')

  $img.setAttribute('src', deal.img)
  $desc.textContent = deal.description
  $button.id = deal.id
  $button.textContent = ('Book a trip to ' + deal.destination + ' for $' + deal.price)

  $div.appendChild($leftCol).classList.add('col-md-6')
  $div.appendChild($rightCol).classList.add('col-md-6')
  $leftCol.appendChild($img).classList.add('img-responsive', 'resize')
  $div.appendChild($desc).classList.add('col-md-6')
  $div.appendChild($purchase).classList.add('col-md-6')
  $purchase.appendChild($button).classList.add('btn', 'btn-info')

  return $div
}

function singlePage(event) {
  for (var i = 0; i < app.travelPackages.length; i++) {
    if (event.target.id === app.travelPackages[i].destination) {
      $wrapperRow.innerHTML = ""
      var $div = detailPage(app.travelPackages[i])
      $wrapperRow.appendChild($div).classList.add('container', 'spacing')
    }
  }
}

$wrapperRow.addEventListener('click', singlePage)

//add to cart
var $cartDisplay = document.createElement('span')

function cartBtn(addClick) {
  for (var i = 0; i < app.travelPackages.length; i++) {
    if (addClick.target.id === app.travelPackages[i].id) {
      app.cart.push(app.travelPackages[i])
      $cartDisplay.textContent = app.cart.length
      $nav.appendChild($cartDisplay).classList.add('cartDisplay')
    }
  }
}

$wrapperRow.addEventListener('click', cartBtn)

//return to home
var homePage = document.getElementById('home')

function backHome() {
  $wrapperRow.innerHTML = ""
  renderDeals()
}

homePage.addEventListener('click', backHome)
