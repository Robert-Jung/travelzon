var travelPackage = [
  {
  destination: 'Location 1',
  price: '$1111',
  img: '1.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  },
  {
  destination: 'Location 2',
  price: '$2222',
  img: '2.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  },
  {
  destination: 'Location 3',
  price: '$3333',
  img: '3.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  },
  {
  destination: 'Location 4',
  price: '$4444',
  img: '4.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  }
  ]

var $wrapper = document.createElement('div')
document.body.appendChild($wrapper).classList.add('container')

//Rows
var $wrapperRow = document.createElement('div')
$wrapper.appendChild($wrapperRow).classList.add('row')

for (var i = 0; i < travelPackage.length; i++) {
  var $div = document.createElement('div')
  var $img = document.createElement('img')
  var $p = document.createElement('p')
  var $desc = document.createElement('div')
  var $button = document.createElement('div')

  $desc.textContent = travelPackage[i].description
  $button.textContent = ('Book a trip to ' + travelPackage[i].destination + ' for ' + travelPackage[i].price)
  $img.setAttribute('src', travelPackage[i].img)

  $wrapperRow.appendChild($div).classList.add('container', 'col-md-6', 'spacing', 'imgoverlay')
  $div.appendChild($img).classList.add('img-responsive', 'resize')
  $div.appendChild($p).classList.add('overlay')
  $p.appendChild($desc).classList.add('text')
  $desc.appendChild($button).classList.add('btn', 'btn-info')
}
