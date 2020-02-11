// console.log("HEY");
$(() => {

////////////////////////////////////////////////////////////////////
// Search Function
// ////////////////////////////////////////////////////////////////////
$('.button').on('click', (event) => {
  event.preventDefault()
    $(".characters").empty()
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
  const $div = $('<div>').appendTo('.characters').addClass("info")
  const $infodiv =$('<div>').appendTo($div).addClass('.characterInfo')
  const $h2 = $('<h2>')
    .text(`${data.results[i].name}`)
          .appendTo($infodiv)

  const $name = $('<h3>')
    .text(`Full name: ${data.results[i].biography['full-name']}`)
    .appendTo($infodiv)
  // for (p = 0; x< data.results[i].powerstats.length; x++){
    let $powerstats = $('<ul>').appendTo($infodiv).addClass('powerstats').text("Power Stats")
    let intelligence = $('<li>')
          .text(`Intelligence: ${data.results[i].powerstats.intelligence}`)
          .appendTo($powerstats)

          console.log(data.results[i].powerstats);
// }
    const $ul =$('<ul>').text("Aliases")
    $infodiv.append($ul)
      for (x = 0; x< data.results[i].biography.aliases.length; x++){
          let $li = $('<li>')
                  .text(`${data.results[i].biography.aliases[x]}`)
                  .appendTo($ul)
                }
      const $img = $("<img />").attr('src' ,`${data.results[i].image.url}`)
        $div.append($img)

}
  })
//
});


////////////////////////////////////////////////////////////////////
// Photo Array
////////////////////////////////////////////////////////////////////
let input = 1

// let link = `https://www.superheroapi.com/api.php/10222119373912674/${userInput}`
// console.log(link);


for (i= 1; i<=10;i++){
input =+ i
let link = `https://www.superheroapi.com/api.php/10222119373912674/${input}`
// console.log(link);
// console.log(userInput);
$.ajax({
  url:link ,
  type: "GET"

}).then((data)=>{
  console.log(data);
  const $img = $("<img />").attr('src' , data.image.url).appendTo('.photos')
console.log($img);



},  (()=>{

console.log("Error")
}))


let currentImgIndex = 0
let highestIndex = 9
$('.next').on('click', () => {
  event.preventDefault()
$('.photos').children().eq(currentImgIndex).css('display', 'none');
if (currentImgIndex < highestIndex ) {
      currentImgIndex++
    } else {
      currentImgIndex = 0
    }
    $('.photos').children().eq(currentImgIndex).css('display', 'block');
  })
  $('.previous').on('click', () => {

      $('.photos').children().eq(currentImgIndex).css('display', 'none');
      if (currentImgIndex > 0) {
        currentImgIndex--
      } else {
        currentImgIndex = highestIndex
      }
      $('.photos').children().eq(currentImgIndex).css('display', 'block');

})

}

})
// 10222119373912674
