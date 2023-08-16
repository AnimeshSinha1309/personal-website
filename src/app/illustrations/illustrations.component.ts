import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent implements OnInit {

  modulesList = [
    "Artificial Intelligence / Model Filtering",
    "Molecular Chemistry / Molecule Render",
  ]

  @Input() selectedDemo: string = this.modulesList[0];

  constructor() {}

  ngOnInit() {
  }

}
