//wrapper
var $wrapper = document.createElement('div')
$wrapper.classList.add('container')
document.body.appendChild($wrapper)

//navbar with home and cart
function createNavbar() {
  var $nav = document.createElement('nav')
  var $navCart = document.createElement('span')
  var $homeBtn = document.createElement('button')

  $navCart.classList.add('glyphicon', 'glyphicon-shopping-cart')
  $navCart.id = 'cartIcon'

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

var $cartQuantity = document.createElement('span')

//list travel packages
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

//calculate total
function calculateTotal(cartedTravelPackage) {
  var total = 0
  for (var i = 0; i < cartedTravelPackage.length; i++) {
    total += cartedTravelPackage[i].price
  }
  return total
}

//display total
function displayTotal() {
  var $div = document.getElementById('viewtotal')
  var $span = document.createElement('span')

  $div.innerHTML = ""

  var viewTotal = calculateTotal(app.cart)
  $span.textContent = "Your Total is $" + viewTotal

  $div.appendChild($span)

  return $div
}

//create checkout product
function createCheckoutProduct(cartedTravelPackage) {
  var $div = document.createElement('div')
  var $img = document.createElement('img')
  var $location = document.createElement('span')
  var $price = document.createElement('span')

  $div.classList.add('row')

  $img.setAttribute('src', cartedTravelPackage.img)
  $img.classList.add('col-md-3', 'img-responsive')

  $location.classList.add('div', 'col-md-6')

  $price.classList.add('div', 'col-md-6')

  $location.textContent = cartedTravelPackage.destination
  $price.textContent = '$' + cartedTravelPackage.price

  $div.appendChild($img)
  $div.appendChild($location)
  $div.appendChild($price)

  return $div
}

//render checkout product
function renderCheckoutProduct() {
  var $viewCheckoutProduct = document.getElementById('productCheckout')
  $viewCheckoutProduct.innerHTML = ""

  for (var i = 0; i < app.cart.length; i++) {
    var checkoutPackage = createCheckoutProduct(app.cart[i])
    $viewCheckoutProduct.appendChild(checkoutPackage)
  }
}

//views
function hideDeals(){
  $wrapperRow.classList.add('hidden')
}

function showDeals(){
  $wrapperRow.classList.remove('hidden')
}

function showCheckoutPage(){
  var $checkoutPage = document.getElementById('checkoutPage')

  displayTotal()
  renderCheckoutProduct()

  $checkoutPage.classList.remove('hidden')
  $wrapper.appendChild($checkoutPage)
}

function hideCheckoutPage() {
  var $checkoutPage = document.getElementById('checkoutPage')
  $checkoutPage.classList.add('hidden')
}

//nav click handler: return home & display checkout page
var homePage = document.getElementById('home')
var cartIcon = document.getElementById('cartIcon')

function navHandler(click) {
  if (click.target === homePage) {
    hideCheckoutPage()
    $wrapperRow.innerHTML = ""
    renderDeals()
    showDeals()
  }

  if (click.target === cartIcon) {
    hideDeals()
    showCheckoutPage()
  }
}

//wrapperRow click handler: detail page & display cart quantity
function wrapperRowHandler(event) {
  for (var i = 0; i < app.travelPackages.length; i++) {
    if (event.target.id === app.travelPackages[i].destination) {
      $wrapperRow.innerHTML = ""
      var $div = createDetailPage(app.travelPackages[i])
      $div.classList.add('container', 'spacing')
      $wrapperRow.appendChild($div)
      break;
      hideCheckoutPage()
    }

    if (event.target.id === app.travelPackages[i].id) {
      app.cart.push(app.travelPackages[i])
      $cartQuantity.textContent = app.cart.length
      $cartQuantity.classList.add('cartDisplay')
      $nav.appendChild($cartQuantity)
    }
  }
}

$wrapperRow.addEventListener('click', wrapperRowHandler)
$nav.addEventListener('click', navHandler)
