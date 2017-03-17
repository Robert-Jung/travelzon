//package array
var app = [
    cart = [],
    travelPackage = [
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
]
//wrapper
var $wrapper = document.createElement('div')
document.body.appendChild($wrapper).classList.add('container')

//nav bar cart
var $nav = document.createElement('nav')
$wrapper.appendChild($nav).classList.add('navbar', 'navbar-inverse')

var $navCart = document.createElement('span')
$nav.appendChild($navCart).classList.add('glyphicon', 'glyphicon-shopping-cart')

//nav bar home
var $homeBtn = document.createElement('button')
$homeBtn.id = 'home'
$homeBtn.textContent = 'HOME'
$nav.appendChild($homeBtn).classList.add('btn', 'btn-default')

//deals
var $wrapperRow = document.createElement('div')
$wrapper.appendChild($wrapperRow).classList.add('row')

function render(packages) {
  for (var i = 0; i < travelPackage.length; i++) {
    var $div = document.createElement('div')
    var $img = document.createElement('img')
    var $p = document.createElement('p')
    var $desc = document.createElement('div')
    var $button = document.createElement('button')

    $img.setAttribute('src', travelPackage[i].img)
    $desc.textContent = travelPackage[i].description
    $button.textContent = ('Book a trip to ' + travelPackage[i].destination + ' for $' + travelPackage[i].price)

    $p.id = travelPackage[i].destination
    $button.id = travelPackage[i].id

    $wrapperRow.appendChild($div).classList.add('container', 'col-md-6', 'spacing', 'imgoverlay')
    $div.appendChild($img).classList.add('img-responsive', 'resize')
    $div.appendChild($p).classList.add('overlay')
    $p.appendChild($desc).classList.add('text')
    $desc.appendChild($button).classList.add('btn', 'btn-info')
    }
    return $div
}

var $oneDeal = render(travelPackage)
$wrapperRow.appendChild($oneDeal)

//single page description
function renderSingle(deal) {
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

  $wrapperRow.appendChild($div).classList.add('container', 'spacing')
  $div.appendChild($leftCol).classList.add('col-md-6')
  $div.appendChild($rightCol).classList.add('col-md-6')
  $leftCol.appendChild($img).classList.add('img-responsive', 'resize')
  $div.appendChild($desc).classList.add('col-md-6')
  $div.appendChild($purchase).classList.add('col-md-6')
  $purchase.appendChild($button).classList.add('btn', 'btn-info')
}

function singlePage(event) {
  for (var i = 0; i < travelPackage.length; i++) {
    if (event.target.id === travelPackage[i].destination) {
      $wrapperRow.innerHTML = ""
      renderSingle(travelPackage[i])
    }
  }
}

$wrapperRow.addEventListener('click', singlePage)

//add to cart
var $cartDisplay = document.createElement('span')

function cartBtn(addClick) {
  for (var i = 0; i < travelPackage.length; i++) {
    if (addClick.target.id === travelPackage[i].id) {
      cart.push(travelPackage[i])
      $cartDisplay.textContent = cart.length
      $nav.appendChild($cartDisplay).classList.add('cartDisplay')
    }
  }
}

$wrapperRow.addEventListener('click', cartBtn)

//return to home
var homePage = document.getElementById('home')

function backHome() {
  $wrapperRow.innerHTML = ""
  render(travelPackage)
}

homePage.addEventListener('click', backHome)
