export const generateID = function(idLength){
    idLength = idLength === undefined ? 3 : idLength; 
    return Math.round((Math.pow(36, idLength + 1) - Math.random() * Math.pow(36, idLength))).toString(36).slice(1).toUpperCase();
}