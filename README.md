<h2 align="center"> React Notes </h2>

![react-notes](https://user-images.githubusercontent.com/91632194/225176736-56af85ed-4eda-4afd-9ce8-842bb8c2eb02.png)

![react-notes-light](https://user-images.githubusercontent.com/91632194/225176760-0c5ac2ac-8b33-4955-b6e6-0ab9185d1405.png)

## Description
A notes app made with React. This app uses localStorage to store your personal notes and logs the date and time of 
any notes you create. You can view, edit, or delete any notes you've created. This app also features a search bar so you can easily find any notes you have created! You can also toggle between dark mode or light mode. 

A preview of each note is displayed on the home page. Clicking the note will allow to either edit or delete that note. Notes are displayed in order of newest to oldest. 

> Each note used to display with a random background color, but on page reload, the background colors would 
> occasionally be absent from one or more of the notes.

```
Code for random background colors (not included in commit)

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

for(var i=0; i < bgColor.length; i++) {
  uniqueColorIndex = Math.floor(Math.random() * (colors.length + 1));
  bgColor[i].style['background-color'] = colors[uniqueColorIndex]; };
```


## View
[Live Demo](https://react-notes-one.vercel.app/)

## Built With
- [React](https://reactjs.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Notes
> This is an ongoing project! The app works as intended, but I really want to figure out the background colors and/or 
> polish the UI. It's more of a project for design now. 


