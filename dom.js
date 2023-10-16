// QuerySelector

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'green';
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color = 'white';

// QuerySelectorALL

var list = document.querySelectorAll('li');
list[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}


