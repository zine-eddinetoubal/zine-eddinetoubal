import { Component } from '@angular/core';
import { Config } from '../../core/config/config';

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  cvLink = Config.cvLink;
}
