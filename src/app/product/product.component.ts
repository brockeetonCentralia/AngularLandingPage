import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data = {
    id: 0,
    name: "Product",
    description: "pLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros lorem, quis rutrum augue varius at.",
    imageurl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
