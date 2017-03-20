//wrapper
var $wrapper = document.createElement('div')
document.body.appendChild($wrapper).classList.add('container')

//navbar home + cart
function createNavbar() {
  var $nav = document.createElement('nav')
  var $navCart = document.createElement('span')
  var $homeBtn = document.createElement('button')

  $navCart.classList.add('glyphicon', 'glyphicon-shopping-cart')

  $homeBtn.id = 'home'
  $homeBtn.textContent = 'HOME'
  $homeBtn.classList.add('btn', 'btn-default')

  $nav.appendChild($navCart)
  $nav.appendChild($homeBtn)

  return $nav
}

var $nav = createNavbar()
$nav.classList.add('navbar', 'navbar-inverse')
$wrapper.appendChild($nav)

var $cartDisplay = document.createElement('span')

//list page
var $wrapperRow = document.createElement('div')
$wrapperRow.classList.add('row')
$wrapper.appendChild($wrapperRow)

function createSinglePackage(travelPackage) {
    var $div = document.createElement('div')
    var $img = document.createElement('img')
    var $p = document.createElement('p')
    var $desc = document.createElement('div')
    var $button = document.createElement('button')

    $img.setAttribute('src', travelPackage.img)
    $img.classList.add('img-responsive', 'resize')

    $desc.textContent = travelPackage.description
    $desc.classList.add('text')

    $p.id = travelPackage.destination
    $p.classList.add('overlay')

    $button.id = travelPackage.id
    $button.classList.add('btn', 'btn-info')
    $button.textContent = ('Book a trip to ' + travelPackage.destination + ' for $' + travelPackage.price)

    $div.appendChild($img)
    $div.appendChild($p)
    $p.appendChild($desc)
    $desc.appendChild($button)

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
function createDetailPage(travelPackage) {
  var $div = document.createElement('div')
  var $leftCol = document.createElement('div')
  var $rightCol = document.createElement('div')
  var $img = document.createElement('img')
  var $desc = document.createElement('div')
  var $purchase = document.createElement('div')
  var $button = document.createElement('button')

  $leftCol.classList.add('col-md-6')
  $rightCol.classList.add('col-md-6')

  $img.setAttribute('src', travelPackage.img)
  $img.classList.add('img-responsive', 'resize')

  $desc.textContent = travelPackage.description
  $desc.classList.add('col-md-6')

  $button.id = travelPackage.id
  $button.textContent = ('Book a trip to ' + travelPackage.destination + ' for $' + travelPackage.price)
  $button.classList.add('btn', 'btn-info')

  $purchase.classList.add('col-md-6')

  $div.appendChild($leftCol)
  $div.appendChild($rightCol)
  $leftCol.appendChild($img)
  $div.appendChild($desc)
  $div.appendChild($purchase)
  $purchase.appendChild($button)

  return $div
}

//return to home
var homePage = document.getElementById('home')

function backHome() {
  $wrapperRow.innerHTML = ""
  renderDeals()
}

//clickHandler for add to cart and render single page
function clickHandler(event) {
  for (var i = 0; i < app.travelPackages.length; i++) {
    if (event.target.id === app.travelPackages[i].destination) {
      $wrapperRow.innerHTML = ""
      var $div = createDetailPage(app.travelPackages[i])
      $wrapperRow.appendChild($div).classList.add('container', 'spacing')
      break;
    }

    if (event.target.id === app.travelPackages[i].id) {
      app.cart.push(app.travelPackages[i])
      $cartDisplay.textContent = app.cart.length
      $nav.appendChild($cartDisplay).classList.add('cartDisplay')
    }
  }
}

$wrapperRow.addEventListener('click', clickHandler)
homePage.addEventListener('click', backHome)
