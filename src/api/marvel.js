import axios from 'axios'

export const GetCharactersList = (limit, offset, name) => axios
    .get("https://gateway.marvel.com:443/v1/public/characters?ts=1" 
    + (name != undefined && name != ""? "&name=" + name : "") 
    /*+ "&limit=" + limit */+ "&offset=" + offset + "&orderBy=name&apikey=ca9a7301bbc2263d4409730f26282e80&hash=1d6fc742542f7472cf9584b4bc1f5dc7")
    .then(response => response.data.data.results)
    export const GetCharactersComicsList = (id) => axios
    .get("https://gateway.marvel.com:443/v1/public/characters/" + id + "/comics?ts=1&apikey=ca9a7301bbc2263d4409730f26282e80&hash=1d6fc742542f7472cf9584b4bc1f5dc7")
    .then(response => response.data.data.results)
//ts=1&apikey=ca9a7301bbc2263d4409730f26282e80&hash=1d6fc742542f7472cf9584b4bc1f5dc7

    