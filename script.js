// story options created
const $container = document.getElementById('container')
const storyOptions = []
storyOptions.push(`
        <form id="chooseStory">
            <label>Choose A Story</lable>
            <select id="index" name="stories">
                <option value="0"> Mission Statement </option>
                <option value="1"> Lunch Room </option>
                <option value="2"> Weather Report </option>
            </select>
            <button type="button" id="start">START! </button>
        </form>
`)

const storyOption = storyOptions.join('')
$container.innerHTML += storyOption



// skip to the input fields
const $start = document.getElementById('start')
const $chooseStory = document.getElementById('chooseStory')
const $index = document.getElementById('index')

$start.addEventListener('click', function(){
    $chooseStory.remove()

    const inputs = []
    
    inputs.push(`
        <form id="form">
        <label>Provide The Following Words</lable>
    `)

    // assign words of stories to names and placeholders of inputs
    // the input will automatically loop for as many as the words are
    for (const word of stories[$index.value].words) {
    inputs.push(`
        <input type="text" name='${word}' placeholder="${word}">
    `)}

    inputs.push(`
        <button type="submit" id="submit"> Read Story </button>
        <code id="result"></code>
        </form>
    `)

    const inputsField = inputs.join('')
    $container.innerHTML += inputsField
})



// show the completed story
$container.addEventListener('submit', function(e){ // use event delegation to manipulate the event at a higher level thus we addEventListener to <div id="container"> not <form>
  // prevent refresh
  e.preventDefault() 

  // retrieve values of the form

  const $form = document.getElementById('form')
  const elements = $form.elements

  // retrieve value of the form
  const words = {}
  for (const element of elements) {
    words[element.name] = element.value
  }

  // generate story
  $form.remove()

  const story = []

  story.push(`<div id="generate-story">`)
      
  const title = stories[$index.value].title
  story.push(`<h2>${title}</h2>`) 

  const storyContent = stories[$index.value].output(words)
  story.push(`<p>${storyContent}<p>`)

  story.push(`
  <button type="submit" id="new">Create A New Story</button>
  `)

  story.push(`</div>`)

  const completedStory = story.join('')
  $container.innerHTML += completedStory

  // create a new story
  const $new = document.getElementById('new')
  $new.addEventListener('click', function(){
    window.location.reload(true)
  })
})
























