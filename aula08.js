// document.querySelector('#teste').innerHTML = 'oi'
// $('#teste').html('oisss')

// const div = document.createElement('div')
// const p = document.createElement('p')
// const text = document.createTextNode('oieeeeeeee')
// p.appendChild(text)
// div.appendChild(p)
// document.querySelector('#teste').appendChild(div)

const div = $('<div class="teste"><p>oieeee</p></div> <div class="teste"><p>oieeee</p></div> <div class="teste"><p>oieeee</p></div>')
$('#teste').append(div)

// document.querySelectorAll('.teste')[0].style.color = 'red'

$('.teste').css({
    color: 'red',
    fontSize: '50px',
})

