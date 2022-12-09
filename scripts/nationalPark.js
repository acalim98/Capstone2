function displayCards (){
    nationalParksArray.forEach(park => {
        let title = park.LocationName
        let text = `${park.City},${park.State},${park.Address}${park.ZipCode}`
        let cardTemplate = `  <div class="card card-block">
        <h4 class="card-title">${title}</h4>
        <p class="card-text">${text}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>`

        

        
        var parkCards = document.getElementById("parkCards")
        parkCards.insertAdjacentHTML ("beforeend",cardTemplate)
    })
    }

  window.onload = () =>{displayCards()} 

  function favTutorialstat() {
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }
    let parksByLocation = nationalParksArray.filter