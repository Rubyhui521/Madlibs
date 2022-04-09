// stories array
const stories = [
    {
      title: 'Mission Statement',
      words: [
        'Adjective', 
        'Verb 1',
        'Verb 2',
        'Plural Noun 1',
        'Plural Noun 2',
        'Plural Noun 3'
      ],
      output: function (words) {
        return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
      }
    },
    
    {
      title: 'Lunch Room!',
      words: [
        'Animal',
        'Adjective 1',
        'Adjective 2',
        'Vegetable 1',
        'Vegetable 2',
        'Noun',
        'Container'
      ],
      output: function (words) {
        return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
      }
    },
  
    {
      title: 'Weather Report',
      words: [
        'Adjective 1',
        'Adjective 2',
        'Article of Clothing',
        'Number 1',
        'Number 2',
        'Plural Noun 1',
        'Plural Noun 2'
      ],
      output: function (words) {
        return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
      }
    }
  ]

  






// ----------------------- test --------------------
// // stories array
// const inputs = document.querySelectorAll('input')

// const stories = [
//   {
//     title: 'Mission Statement',
//     words: {
//       'Adjective': inputs[0], 
//       'Adjective': inputs[1], 
//       'Verb 1': inputs[2],
//       'Verb 2': inputs[3],
//       'Plural Noun 1': inputs[4],
//       'Plural Noun 2': inputs[5],
//       'Plural Noun 3': inputs[6]
//     },
//     output: function (words) {
//       return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
//     }
//   },
  
//   {
//     title: 'Lunch Room!',
//     words: {
//       'Animal': inputs[0],
//       'Adjective 1': inputs[1],
//       'Adjective 2': inputs[2],
//       'Vegetable 1': inputs[3],
//       'Vegetable 2': inputs[4],
//       'Noun': inputs[5],
//       'Container': inputs[6]
//     },
//     output: function (words) {
//       return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
//     }
//   },

//   {
//     title: 'Weather Report',
//     words: {
//       'Adjective 1': inputs[0],
//       'Adjective 2': inputs[1],
//       'Article of Clothing': inputs[2],
//       'Number 1': inputs[3],
//       'Number 2': inputs[4],
//       'Plural Noun 1': inputs[5],
//       'Plural Noun 2': inputs[6]
//     },
//     output: function (words) {
//       return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
//     }
//   }
// ]





  















  












