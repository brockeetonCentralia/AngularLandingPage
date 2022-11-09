import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  heading: string = "Products";

  products: any[] = [
    { id: 1, name: "Product 1", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros lorem, quis rutrum augue varius at.", imageurl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png" },
    { id: 2, name: "Product 2", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros lorem, quis rutrum augue varius at.", imageurl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"  },
    { id: 3, name: "Product 3", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros lorem, quis rutrum augue varius at.", imageurl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
