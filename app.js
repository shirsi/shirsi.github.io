// console.log("HEY");
$(() => {

////////////////////////////////////////////////////////////////////
// Search Function
////////////////////////////////////////////////////////////////////
$('.button').on('click', (event) => {
  event.preventDefault()
  console.log("whats");
  let userInput = $('input[type="text"]').val()
  let link = `https://www.superheroapi.com/api.php/10222119373912674/search/${userInput}`
console.log(link);



  $.ajax({
    url:link ,
    type: "GET",
    data: {
        "$limit": userInput
      }

  }).then((data)=>{

console.log(data);
console.log(data.results.length);
for (i = 0; i< data.results.length; i++){
  const $div = $('<div>').appendTo('.characters')
  const $h2 = $('<h2>')
          .text(`${data.results[i].name}`)
          .appendTo($div)
      const $img = $("<img />").attr('src' ,`${data.results[i].image.url}`)
        $div.append($img)

}
  })

})
  })
// 10222119373912674
