import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // animations: [
  //   trigger('showOverlay', [
  //     state('void', style({ width: '0', opacity: 0})),
  //     state('*', style({width: '100%', opacity: 1})),
  //     transition(':enter', [animate('.1s')]),
  //     transition(':leave', [animate('.1s')])
  //   ])
  // ]
})
export class AppComponent {
  title = 'pages';
  menus = [
    {
      name: "Main Page",
      elements: []
    },
    {
      name: "ONU Buildings",
      elements: [
        {
          name: 'ONU Corp 1',
          elements: [
            {
              name: '1 Floor',
              elements: []
            },
            {
              name: '2 Floor',
              elements: []
            },
            {
              name: '3 Floor',
              elements: []
            },
          ]
        },
        {
          name: 'ONU Corp 2',
          elements: [
            {
              name: '1 Floor',
              elements: []
            },
            {
              name: '2 Floor',
              elements: []
            },
            {
              name: '3 Floor',
              elements: []
            },
          ]
        }
      ]
    },
    {
      name: 'ONU faculties',
      elements: [
        {
          name: "Faculty 1",
          elements: [
            {
              name: 'ONU Corp 1',
              elements: [
                {
                  name: '1 Floor',
                  elements: []
                },
                {
                  name: '2 Floor',
                  elements: []
                },
                {
                  name: '3 Floor',
                  elements: []
                },
              ]
            },
            {
              name: 'ONU Corp 2',
              elements: [
                {
                  name: '1 Floor',
                  elements: []
                },
                {
                  name: '2 Floor',
                  elements: []
                },
                {
                  name: '3 Floor',
                  elements: []
                },
              ]
            }
          ]
        },
        {
          name: 'Faculty 2',
          elements: [
            {
              name: 'ONU Corp 1',
              elements: [
                {
                  name: '1 Floor',
                  elements: []
                },
                {
                  name: '2 Floor',
                  elements: []
                },
                {
                  name: '3 Floor',
                  elements: []
                },
              ]
            }
          ]
        }
      ]
    }
  ]
  buildings = [
    {
      name: 'Odesa Mechnikov National University',
      imageIndex: 1
    },
    {
      name: 'Faculty of Romance-Germanic Philology',
      imageIndex: 2
    },
    {
      name: 'Odesa Mechnikov National University',
      imageIndex: 3
    },
    {
      name: 'Odesa Mechnikov National University',
      imageIndex: 4
    },  
    {
      name: 'Faculty of Romance-Germanic Philology',
      imageIndex: 5
    }
  ]
  overlayIsVisible = false;
  showImagesOverlay() { 
    this.overlayIsVisible = true;
  }
  hideImagesOverlay() {
    this.overlayIsVisible = false;
  } 
}