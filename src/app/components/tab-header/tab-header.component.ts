import { Component, OnInit, Input } from '@angular/core';
// import { ScrollHideConfig } from 'src/app/directive/scroll-hide.directive';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
})
export class TabHeaderComponent implements OnInit {

  @Input() icon_name: string;
  @Input() titulo_tab: string;

  constructor() { }

  ngOnInit() {}

  // footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  // headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 44 };

}