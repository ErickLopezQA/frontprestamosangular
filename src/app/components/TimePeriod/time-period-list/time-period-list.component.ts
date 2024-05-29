import { Component } from '@angular/core';
import { TimePeriod } from '../../../interfaces/time-period';
import { TimePeriodService } from 'src/app/services/time-period.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-time-period-list',
  templateUrl: './time-period-list.component.html',
  styleUrls: ['./time-period-list.component.css']
})
export class TimePeriodListComponent {

  TimePeriodList: TimePeriod[] = [];
  loading: boolean = false;

  constructor(private _timePeriodService: TimePeriodService,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.getListTimePeriods();
    }

  getListTimePeriods() {
    this.loading = true;
    this._timePeriodService.getListTimePeriods().subscribe((data: TimePeriod[]) => {
      this.TimePeriodList = data;
      this.loading = false;
    })
  }

  deleteTimePeriod(id: number) {
    this.loading = true;
    this._timePeriodService.deleteTimePeriod(id).subscribe((data) => {
      console.log(data);
      this.getListTimePeriods();
      this.toastr.warning('Periodo de tiempo eliminado con éxito', 'Periodo de tiempo eliminado');
    })
  }



}
