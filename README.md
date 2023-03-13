<h2 align="center"> React Notes </h2>

![react-notes](https://user-images.githubusercontent.com/91632194/224813184-8bab37c3-608f-4455-81b7-a42b7ea907b6.png)

## Description
A notes app made with React. This app uses localStorage to store your notes, similar to my previous to-do app.
Each note used to display with a random background color, but on page reload, the background colors would occasionally be absent from one or more of the notes.

> Code for random background color
`
  var colors = [
    "#c897ce", 
    "#eb8890",  
    "#7facde", 
    "#92d59a", 
    "#e3d586",
    "#d26f6f",
    "#918ed4",
    "#88cf8e",
    "#e5e87d",
    "#dea36f",
  ];                
  var bgColor = document.getElementsByClassName('note');
  var uniqueColorIndex = 0;
  for(var i=0; i < bgColor.length; i++){
    uniqueColorIndex = Math.floor(Math.random() * (colors.length + 1));
    bgColor[i].style['background-color'] = colors[uniqueColorIndex];
  };
`

## View
[Live Demo]()

## Built With
- [React]()
- [CSS]()

## Notes
> This is an ongoing project! The app works as intended, but I really want to figure out the background colors and/or 
> polish the UI. It's more of a project for design now. 


