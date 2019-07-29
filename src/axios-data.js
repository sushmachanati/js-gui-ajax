const getData = async () => {
  try {
    const jsonURI = 'https://jsonplaceholder.typicode.com/todos'
    const response = await axios.get(jsonURI)
    const json = response.data
    console.log(`FETCHED. Response JSON ${json}`)
    return json
  } catch (error) { console.error(error) }
}

const createListItem = item => {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(item.title))
  return li
}

const updateWithData = async (event) => {
  try {
    document.querySelector('#result').innerHTML = ''
    const todos = await getData()
    const ul = document.querySelector('ul')
    if (Array.isArray(todos) && todos.length > 0) {
      todos.map(todo => { ul.appendChild(createListItem(todo)) })
    } else if (todos) { ul.appendChild(createListItem(todos)) }
    document.querySelector('#result').innerHTML = joke
  } catch (error) { console.error(error) }
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getDataButton') { updateWithData(event) }
})
