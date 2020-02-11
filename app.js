// console.log("HEY");
$(() => {
// console.log($('.button'));
////////////////////////////////////////////////////////////////////
// Search Function
////////////////////////////////////////////////////////////////////
$('.button').on('click', (event) => {
  event.preventDefault()
  console.log("whats up");
  let userInput = $('input[type="text"]').val()
  let link = `https://www.superheroapi.com/api.php/10222119373912674/search/${userInput}`




  $.ajax({
    url:link ,
    type: "GET",
    data: {
        "$limit": userInput
      }

  }).then((data)=>{

// console.log(data);

    const $body = $('body')
    const $div = $(`<div><h3>${data.results[i].name}</h3></div>`);
      $('.characters').append($div)


  })

})
  })
// 10222119373912674
