import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  toggleSwitch: boolean;
  darkMode: boolean;
  modeText: string;
  footerText: string;

  constructor() {
    this.toggleSwitch = true;
    this.darkMode = false;
    this.modeText = 'Modo Claro';
    this.footerText = 'SanCorSystems-2022- V1.0.0';
  }
  /* const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");*/

  ngOnInit(): void {
    if (this.toggleSwitch) {
      this.footerText = 'SanCorSystems-2022- V1.0.0';
    } else {
      this.footerText = '';
    }
  }
  changeValues(): void {
    this.toggleSwitch = !this.toggleSwitch;
    if (this.toggleSwitch) {
      this.footerText = 'SanCorSystems-2022- V1.0.0';
    } else {
      this.footerText = '';
    }
  }

  /*
toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
    modeText.innerText = "Light mode";
}else{
    modeText.innerText = "Dark mode";
}
});*/
  /*modeSwitch(): void {
    this.darkMode = !this.darkMode;
    if (this.darkMode === true) {
      this.modeText = 'Modo Claro';
      document.body.classList.toggle('dark');
    } else {
      this.modeText = 'Modo Oscuro';
    }
  }*/
}
