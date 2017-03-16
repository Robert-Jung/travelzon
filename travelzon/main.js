var travelPackage = [
  {
  destination: 'Main Location',
  price: '$9999',
  img: 'main.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pulvinar nibh. Suspendisse lobortis, ipsum eget vulputate rutrum, erat sem facilisis lectus, tempor vehicula augue neque at tortor.'
  },
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

//Main deal banner
var $wrapperMain = document.createElement('div')
$wrapper.appendChild($wrapperMain).classList.add('row')

for (var i = 0; i < 1; i++) {
  var $div = document.createElement('div')
  var $rightCol = document.createElement('div')
  var $img = document.createElement('img')

  $img.setAttribute('src', travelPackage[i].img)
  $rightCol.textContent = travelPackage[i].description

  $wrapperMain.appendChild($div).classList.add('container', 'col-md-6', 'spacing')
  $div.appendChild($img).classList.add('img-responsive', 'resize')
  $wrapperMain.appendChild($rightCol).classList.add('col-md-6', 'spacing')
}

//Rows
var $wrapperRow = document.createElement('div')
$wrapper.appendChild($wrapperRow).classList.add('row')

for (var i = 1; i < travelPackage.length; i++) {
  var $div = document.createElement('div')
  var $img = document.createElement('img')
  var $p = document.createElement('p')
  var $desc = document.createElement('div')
  $desc.textContent = travelPackage[i].description
  $img.setAttribute('src', travelPackage[i].img)

  $wrapperRow.appendChild($div).classList.add('container', 'col-md-6', 'spacing', 'imgoverlay')
  $div.appendChild($img).classList.add('img-responsive', 'resize')
  $div.appendChild($p).classList.add('overlay')
  $p.appendChild($desc).classList.add('text')
}
