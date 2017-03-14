//Main deal banner
var $topDiv = document.createElement('div')
var $topRow = document.createElement('div')
var $topLeftCol = document.createElement('div')
var $mainImg = document.createElement('img')

document.body.appendChild($topDiv).classList.add('container')
$topDiv.appendChild($topRow).classList.add('row')
$topRow.appendChild($topLeftCol).classList.add('col-md-6')
$topLeftCol.appendChild($mainImg).classList.add('img-responsive', 'resize')

$mainImg.setAttribute('src', 'main.jpg')

//Row One
var $div = document.createElement('div')
var $row = document.createElement('div')
var $leftCol = document.createElement('div')
var $rightCol = document.createElement('div')
var $imgOne = document.createElement('img')
var $imgTwo = document.createElement('img')

document.body.appendChild($div).classList.add('container')
$div.appendChild($row).classList.add('row')
$row.appendChild($leftCol).classList.add('col-md-6')
$row.appendChild($rightCol).classList.add('col-md-6')
$leftCol.appendChild($imgOne).classList.add('img-responsive', 'resize')
$rightCol.appendChild($imgTwo).classList.add('img-responsive', 'resize')

$imgOne.setAttribute('src', '1.jpg')
$imgTwo.setAttribute('src', '2.jpg')

//Row Two
var $div = document.createElement('div')
var $row = document.createElement('div')
var $leftCol = document.createElement('div')
var $rightCol = document.createElement('div')
var $imgOne = document.createElement('img')
var $imgTwo = document.createElement('img')

document.body.appendChild($div).classList.add('container')
$div.appendChild($row).classList.add('row')
$row.appendChild($leftCol).classList.add('col-md-6')
$row.appendChild($rightCol).classList.add('col-md-6')
$leftCol.appendChild($imgOne).classList.add('img-responsive', 'resize')
$rightCol.appendChild($imgTwo).classList.add('img-responsive', 'resize')

$imgOne.setAttribute('src', '3.jpg')
$imgTwo.setAttribute('src', '4.jpg')
