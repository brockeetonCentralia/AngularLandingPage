import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  products: any[] = [
    { id: 1, name: "Product 1", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros lorem, quis rutrum augue varius at.", imageurl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png" },
    { id: 2, name: "Product 2", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros lorem, quis rutrum augue varius at.", imageurl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"  },
    { id: 3, name: "Product 3", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros lorem, quis rutrum augue varius at.", imageurl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"  }
  ];

  id = 0;

  data: any = { 
    id: 0,
    name: "Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros lorem, quis rutrum augue varius at.",
    imageurl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
  };


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
