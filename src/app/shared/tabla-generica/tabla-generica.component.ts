import { Component, Input, OnChanges } from '@angular/core';

interface IColumnsAndProps {
	columnName: string;
	prop: string;
	footer: { isCalculable: boolean; value: string };
}

@Component({
	selector: 'tabla-generica',
	templateUrl: './tabla-generica.component.html',
	styleUrls: [ './tabla-generica.component.scss' ]
})
export class TablaGenericaComponent implements OnChanges {

  displayedColumns: string[];
  footer = {};

	@Input() dataSource: any[];
	@Input() columnsAndProps : IColumnsAndProps []

	ngOnChanges() {
    this.getDisplay();
    this.getFooter()
	}

	getDisplay() {
		this.displayedColumns = this.columnsAndProps.map((el) => el.columnName);
  }

  getFooter() {
    this.columnsAndProps.forEach((colAndProps) => {
      if (colAndProps.footer.isCalculable) {
        this.footer[colAndProps.prop] = this.dataSource.reduce(
          (accum, current) =>{
            let value = current[colAndProps.prop] || 0
             accum = accum + value;
             return accum
            }, 0
        );
      }else {
        this.footer[colAndProps.prop] = colAndProps.footer.value
      }
    });
  }

}
