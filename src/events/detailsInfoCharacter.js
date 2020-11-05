export default function DetailsCharacter(){}

DetailsCharacter.prototype.ToogleDetailsCharacter = function(id){
    const detailsToShow = "character" + id;
    document.querySelectorAll(".detailsCharacters").forEach(c => {
        if(c.style.display === "" && c.id !== detailsToShow){ 
            c.style.display = "none";
        }
        document.querySelector("#" + detailsToShow).style.display = "";
      })
      return null;
}
DetailsCharacter.prototype.CloseDetailsCharacter = function(id){
    const cardCharacterDetails = document.querySelector("#character" + id);
    cardCharacterDetails.style.display = "none";
    return null;
}
DetailsCharacter.prototype.ToogleComicsList = function (id){
    const bodyComicsCard = document.querySelector("#comicsCard" + id);
    bodyComicsCard.style.display = (bodyComicsCard.style.display === "" ? "none" : "") 
    return null;
}

