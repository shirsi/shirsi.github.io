// console.log("HEY");
$(() => {

////////////////////////////////////////////////////////////////////
// Search Function
// ////////////////////////////////////////////////////////////////



console.log("hey");


$('.button').on('click', (event) => {


  event.preventDefault()
    $(".characters").empty()
    $(".favorite").empty()
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
    const $h2 = $('<h2>')
      .text(`${data.results[i].name}`)
            .appendTo($div)
            const $img = $("<img />").attr('src' ,`${data.results[i].image.url}`)
              $div.append($img)
  const $infodiv =$('<div>').appendTo($div).addClass('characterInfo')


  const $name = $('<h3>')
    .text(`Full name: ${data.results[i].biography['full-name']}`)
    .appendTo($infodiv)

    const $ul =$('<ul>').text("Aliases: ")
    $infodiv.append($ul)
      for (x = 0; x< data.results[i].biography.aliases.length; x++){
          let $li = $('<li>')
                  .text(`${data.results[i].biography.aliases[x]}`)
                  .appendTo($ul)
                }
    const $first = $('<h4>')
      .text(`First-appearance: ${data.results[i].biography['first-appearance']}`)
      .appendTo($infodiv)
    const $publisher = $('<h4>')
      .text(`Published by  ${data.results[i].biography.publisher}`)
      .appendTo($infodiv)
    const $appearance = $('<ul>')
      .text(`Appearance`)
      .appendTo($infodiv)
  let gender = $('<li>').text(`Gender:       ${data.results[i].appearance.gender}`)
        .appendTo($appearance)
    let race = $('<li>').text(`Race:       ${data.results[i].appearance.race}`)
      .appendTo($appearance)
    let height = $('<li>').text(`Height:       ${data.results[i].appearance.height[0]}`)
        .appendTo($appearance)
    let weight = $('<li>').text(`Weight:       ${data.results[i].appearance.weight[0]}`)
            .appendTo($appearance)
    let eyeColor = $('<li>').text(`Eye Color:       ${data.results[i].appearance["eye-color"]}`)
            .appendTo($appearance)
    let hairColor = $('<li>').text(`Hair Color:       ${data.results[i].appearance["hair-color"]}`)
            .appendTo($appearance)
    const $work = $('<ul>')
              .text(`Work`)
              .appendTo($infodiv)
    let occupation = $('<li>').text(`Occupation:       ${data.results[i].work.occupation}`)
              .appendTo($work)
    let base = $('<li>').text(`Base:       ${data.results[i].work.base}`)
              .appendTo($work)
  const $connections= $('<ul>')
                        .text(`Connections`)
                        .appendTo($infodiv)
  let group = $('<li>').text(`Group-affiliation:       ${data.results[i].connections['group-affiliation']}`)
                        .appendTo($connections)
              let relatives = $('<li>').text(`Relatives:       ${data.results[i].connections.relatives}`)
                        .appendTo($connections)
          let $powerstats = $('<ul>').appendTo($infodiv).addClass('powerstats').text("Power Stats: ")
          let intelligence = $('<li>')
            .text(`Intelligence: ${data.results[i].powerstats.intelligence}`)
            .appendTo($powerstats)
          let strength = $('<li>')
            .text(`Strength: ${data.results[i].powerstats.strength}`)
            .appendTo($powerstats)
          let speed = $('<li>')
            .text(`Speed: ${data.results[i].powerstats.speed}`)
            .appendTo($powerstats)
          let durability = $('<li>')
            .text(`Durability: ${data.results[i].powerstats.durability}`)
            .appendTo($powerstats)


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




let link = `https://superheroapi.com/api.php/10222119373912674/search/a`
// console.log(input);
$.ajax({
  url:link ,
  type: "GET"

}).then((data)=>{
  console.log(data.results.length);
  for (i= 1; i<=data.results.length;i++){
  console.log(data);

    const $img = $("<img />").attr('src' , `${data.results[i].image.url}`).appendTo('.photos').addClass('.pics')
// console.log($img);


}
},  (()=>{

console.log("Error")
}))


let currentImgIndex = 0
let highestIndex = 430
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



$('.hero').on('click',(event) => {
  event.preventDefault()
  $(".characters").empty()
  $(".favorite").empty()

  let subject = $(event.target).attr('id')
  console.log(event.target);
  let link = `https://www.superheroapi.com/api.php/10222119373912674/${subject}`
  console.log(link);



  $.ajax({
    url:link,
    type: "GET",
    data: {
        "$limit": 731
      }

  }).then((data)=>{

console.log(data);
{
const div = $('<div>').addClass('favs').appendTo(".favorite")
const $h2 = $('<h2>')
  .text(`${data.name}`)
        .appendTo(".favs")
        const $img = $("<img />").attr('src' ,`${data.image.url}`)
          $img.appendTo(".favs")
  const $infodiv =$('<div>').appendTo(".favs").addClass('favoriteInfo')

  const $name = $('<h3>')
    .text(`Full name: ${data.biography['full-name']}`)
    .appendTo($infodiv)

    const $ul =$('<ul>').text("Aliases: ")
    $infodiv.append($ul)
      for (x = 0; x< data.biography.aliases.length; x++){
          let $li = $('<li>')
                  .text(`${data.biography.aliases[x]}`)
                  .appendTo($ul)}
          const $first = $('<h4>')
                  .text(`First-appearance: ${data.biography['first-appearance']}`)
                  .appendTo($infodiv)
                const $publisher = $('<h4>')
                  .text(`Published by  ${data.biography.publisher}`)
                  .appendTo($infodiv)
          const $appearance = $('<ul>')
                  .text(`Appearance`)
                  .appendTo($infodiv)
              let gender = $('<li>').text(`Gender:       ${data.appearance.gender}`)
                    .appendTo($appearance)
                let race = $('<li>').text(`Race:       ${data.appearance.race}`)
                  .appendTo($appearance)
                let height = $('<li>').text(`Height:       ${data.appearance.height[0]}`)
                    .appendTo($appearance)
                let weight = $('<li>').text(`Weight:       ${data.appearance.weight[0]}`)
                        .appendTo($appearance)
                let eyeColor = $('<li>').text(`Eye Color:       ${data.appearance["eye-color"]}`)
                        .appendTo($appearance)
                let hairColor = $('<li>').text(`Hair Color:       ${data.appearance["hair-color"]}`)
                        .appendTo($appearance)
                const $work = $('<ul>')
                          .text(`Work`)
                          .appendTo($infodiv)
                let occupation = $('<li>').text(`Occupation:
    ${data.work.occupation}`)
                          .appendTo($work)
                let base = $('<li>').text(`Base:       ${data.work.base}`)
                          .appendTo($work)
              const $connections= $('<ul>')
                                    .text(`Connections`)
                                    .appendTo($infodiv)
              let group = $('<li>').text(`Group-affiliation:       ${data.connections['group-affiliation']}`)
                                    .appendTo($connections)
                          let relatives = $('<li>').text(`Relatives:       ${data.connections.relatives}`)
                                    .appendTo($connections)
                      let $powerstats = $('<ul>').appendTo($infodiv).addClass('powerstats').text("Power Stats: ")
                      let intelligence = $('<li>')
                        .text(`Intelligence: ${data.powerstats.intelligence}`)
                        .appendTo($powerstats)
                      let strength = $('<li>')
                        .text(`Strength: ${data.powerstats.strength}`)
                        .appendTo($powerstats)
                      let speed = $('<li>')
                        .text(`Speed: ${data.powerstats.speed}`)
                        .appendTo($powerstats)
                      let durability = $('<li>')
                        .text(`Durability: ${data.powerstats.durability}`)
                        .appendTo($powerstats)



  }
  })
  //
})

  });




// 10222119373912674
