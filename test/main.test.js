QUnit.module('MAIN MODULE', {})

QUnit.test('TEST add', assert => {
  assert.equal(add(1, 1), 2, 'Positive integers')
  assert.equal(add(-1, -1), -2, 'Negative integers')
  assert.equal(add(-10, 10), 0, 'Mixed')
})

QUnit.config.autostart = false // sync = false; start after loading html

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns people per course
    }).catch(error => { console.error(`ERROR: ${error}`) })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => { console.error(error); QUnit.start() })
})

QUnit.test('TEST first number validation (DOM manipulation)', assert => {
  const input = document.querySelector('#firstNumber')
  const warning = document.querySelector('#firstWarning')
  input.value = -3
  assert.equal(input.value, -3, 'Bad value assigned')
  assert.strictEqual(input.checkValidity(), false, 'Correctly fails validation')
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})

QUnit.test('TEST second number validation (DOM manipulation)', assert => {
  const input = document.querySelector('#secondNumber')
  const warning = document.querySelector('#secondWarning')
  input.value = -3
  assert.equal(input.value, -3, 'Bad value assigned')
  assert.strictEqual(input.checkValidity(), false, 'Correctly fails validation')
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})
