import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent implements OnInit {

  modulesList = {
    "Artificial Intelligence": ["Logical Agent"],
    "Molecular Chemistry": ["Molecule Render"],
  }

  @Input() selectedClass: string = "Select Section";
  @Input() selectedDemo: string = "Select Demo";

  constructor() {}

  ngOnInit() {
  }

}
