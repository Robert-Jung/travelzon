//package array
var travelPackage = [
  {
  id: 1,
  destination: 'Location 1',
  price: 1111,
  img: '1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  },
  {
  id: 2,
  destination: 'Location 2',
  price: 2222,
  img: '2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  },
  {
  id: 3,
  destination: 'Location 3',
  price: 3333,
  img: '3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  },
  {
  id: 4,
  destination: 'Location 4',
  price: 4444,
  img: '4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  }
  ]

//wrapper
var $wrapper = document.createElement('div')
var $wrapperRow = document.createElement('div')

document.body.appendChild($wrapper).classList.add('container')
$wrapper.appendChild($wrapperRow).classList.add('row')

// Rows
function render(packages) {
  for (var i = 0; i < travelPackage.length; i++) {
    var $div = document.createElement('div')
    var $img = document.createElement('img')
    var $p = document.createElement('p')
    var $desc = document.createElement('div')
    var $button = document.createElement('div')

    $img.setAttribute('src', travelPackage[i].img)
    $desc.textContent = travelPackage[i].description
    $button.textContent = ('Book a trip to ' + travelPackage[i].destination + ' for $' + travelPackage[i].price)

    $p.id = travelPackage[i].destination

    $wrapperRow.appendChild($div).classList.add('container', 'col-md-6', 'spacing', 'imgoverlay')
    $div.appendChild($img).classList.add('img-responsive', 'resize')
    $div.appendChild($p).classList.add('overlay')
    $p.appendChild($desc).classList.add('text')
    $desc.appendChild($button).classList.add('btn', 'btn-info')
    }
    return $div
}

var $oneDeal = render()
$wrapperRow.appendChild($oneDeal)

//single page description
function renderSingle(deal) {
  var $div = document.createElement('div')
  var $leftCol = document.createElement('div')
  var $rightCol = document.createElement('div')
  var $img = document.createElement('img')
  var $desc = document.createElement('div')
  var $purchase = document.createElement('div')
  var $button = document.createElement('div')

  $img.setAttribute('src', deal.img)
  $desc.textContent = deal.description
  $button.textContent = ('Book a trip to ' + deal.destination + ' for $' + deal.price)

  $wrapperRow.appendChild($div).classList.add('container', 'spacing')
  $div.appendChild($leftCol).classList.add('col-md-6')
  $div.appendChild($rightCol).classList.add('col-md-6')
  $leftCol.appendChild($img).classList.add('img-responsive', 'resize')
  $div.appendChild($desc).classList.add('col-md-6')
  $div.appendChild($purchase).classList.add('col-md-6')
  $purchase.appendChild($button).classList.add('btn', 'btn-info')
}

function singlePage (event) {
  for (var i = 0; i < travelPackage.length;i++) {
    if (event.target.id === travelPackage[i].destination) {
      $wrapperRow.innerHTML = ""
      renderSingle(travelPackage[i])
    }
  }
}

$wrapperRow.addEventListener('click', singlePage)
