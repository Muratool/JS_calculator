'use strict'

let disp = document.querySelector('.display')

let n1 = document.querySelector('.one')

let num = document.querySelectorAll('.num')

let chisl_1 = 0,
	chisl_2 = 0

let plus = false
let minus = false
let multy = false
let division = false

let comma_state = false

let ch = false

num.forEach(element => {
	element.addEventListener('click', () => {
		if (
			disp.textContent.length == 10 ||
			disp.textContent.length == 20 ||
			disp.textContent.length == 30
		) {
			disp.innerHTML += '<br>'
		}

		switch (element.classList[1]) {
			case 'zero':
				disp.innerHTML += '0'
				break
			case 'one':
				disp.innerHTML += '1'
				break
			case 'two':
				disp.innerHTML += '2'
				break
			case 'three':
				disp.innerHTML += '3'
				break
			case 'four':
				disp.innerHTML += '4'
				break
			case 'five':
				disp.innerHTML += '5'
				break
			case 'six':
				disp.innerHTML += '6'
				break
			case 'seven':
				disp.innerHTML += '7'
				break
			case 'eight':
				disp.innerHTML += '8'
				break
			case 'nine':
				disp.innerHTML += '9'
				break
			case 'comma':
				if (comma_state == true || disp.innerHTML == '') {
					disp.innerHTML += ''
				} else {
					disp.innerHTML += '.'
					comma_state = true
				}
				break

			case 'plus':
				if (ch == true) {
					plus = true
					minus = false
					multy = false
					division = false
					comma_state = false
					break
				}

				plus = true
				minus = false
				multy = false
				division = false
				comma_state = false

				chisl_1 = +disp.innerHTML
				disp.innerHTML = ''

				ch = true

				break

			case 'minus':
				if (ch == true) {
					plus = false
					minus = true
					multy = false
					division = false
					comma_state = false
					break
				}

				plus = false
				minus = true
				multy = false
				division = false
				comma_state = false

				chisl_1 = +disp.innerHTML
				disp.innerHTML = ''

				ch = true

				break

			case 'multiplication':
				if (ch == true) {
					plus = false
					minus = false
					multy = true
					division = false
					comma_state = false
					break
				}

				plus = false
				minus = false
				multy = true
				division = false
				comma_state = false

				chisl_1 = +disp.innerHTML
				disp.innerHTML = ''

				ch = true

				break

			case 'division':
				if (ch == true) {
					plus = false
					minus = false
					multy = false
					division = true
					comma_state = false
                    break
				}

				plus = false
				minus = false
				multy = false
				division = true
				comma_state = false

				chisl_1 = +disp.innerHTML
				disp.innerHTML = ''

				ch = true

				break

			case 'AC':
				disp.innerHTML = ''
				chisl_1 = 0
				chisl_2 = 0
				comma_state = false
				ch = false
				break

			case 'plus-minus':
				if (disp.innerHTML == '' || disp.innerHTML == '0') {
					disp.innerHTML = ''
					disp.innerHTML += '-'
				} else {
					disp.innerHTML *= -1
				}

				break

			case 'percent':
				disp.innerHTML /= 100
				break

			case 'ravno':
				if (plus == true) {
					chisl_2 = +disp.innerHTML
					disp.innerHTML = chisl_1 + chisl_2

					plus = false
					minus = false
					multy = false
					division = false
					comma_state = false
					ch = false
				} else if (minus == true) {
					chisl_2 = +disp.innerHTML
					disp.innerHTML = chisl_1 - chisl_2

					plus = false
					minus = false
					multy = false
					division = false
					comma_state = false
					ch = false
				} else if (multy == true) {
					chisl_2 = +disp.innerHTML
					disp.innerHTML = chisl_1 * chisl_2

					plus = false
					minus = false
					multy = false
					division = false
					comma_state = false
					ch = false
				} else if (division == true) {
					chisl_2 = +disp.innerHTML
					disp.innerHTML = chisl_1 / chisl_2

					plus = false
					minus = false
					multy = false
					division = false
					comma_state = false
					ch = false
				}
				break
			default:
				break
		}
	})
})
