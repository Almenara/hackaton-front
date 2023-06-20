import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hackaton-front';

    public view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Barri';
  showYAxisLabel = true;
  yAxisLabel = 'Renda Bruta';

colorScheme = 'vivid';

  data: any[] = [];

  constructor(private http: HttpClient) {
    //Assignació inicial
    this.yAxisLabel = 'Import_Renda_Bruta_€';
    this.loadData('Import_Renda_Bruta_€');
  }

  loadData(column: string) {
    this.http.get('../assets/taula.json').subscribe(data => {
      this.data = this.jsonToNgxData(data, column);
      this.yAxisLabel = column;
    });
  }

jsonToNgxData(json: any, column: string): any[] {
  let data: {name: string, value: number}[] = [];
  const barriNames = Object.values(json.Nom_Barri) as string[];
  const values = Object.values(json[column]) as number[];
  barriNames.forEach((name, index) => {
    data.push({
      "name": name,
      "value": values[index]
    });
  });
  return [{ "name": column, "series": data }];
}


changeColumn(column: string) {
  this.yAxisLabel = column;
  this.loadData(column);
}

}
