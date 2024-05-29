import { TimePeriod } from '../../../interfaces/time-period';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimePeriodService } from 'src/app/services/time-period.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-time-period',
  templateUrl: './add-edit-time-period.component.html',
  styleUrls: ['./add-edit-time-period.component.css']
})
export class AddEditTimePeriodComponent {

  formTimePeriod: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor (private fb: FormBuilder,
    private _timePeriodService: TimePeriodService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {

    this.formTimePeriod = this.fb.group({
      timePeriod: ['']
    });
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void {
    if(this.id !== 0) {
      this.operacion = 'Editar ';
      this.getTimePeriod(this.id);
    }
  }

  getTimePeriod(id: number) {
    this._timePeriodService.getTimePeriod(id).subscribe((data: any) => {
      this.loading = true;
      this.formTimePeriod.patchValue({
        timePeriod: data.timePeriod
      })
      this.loading = false;
    });
  }

  addTimePeriod() {
    const dataTimePeriod: TimePeriod = {
      time_period: this.formTimePeriod.get('timePeriod')?.value
    };

    if(this.id !== 0) {
      this.loading = true;
      this._timePeriodService.updateTimePeriod(this.id, dataTimePeriod).subscribe(data => {
        this.loading = false;
        this.toastr.info('Periodo de tiempo actualizado con éxito', 'Periodo de tiempo');
        this.router.navigate(['/time_period']);
      });
    } else {

    this.loading = true;
    this._timePeriodService.addTimePeriod(dataTimePeriod).subscribe(data => {
      this.loading = false;
      this.toastr.success('Periodo de tiempo agregado con éxito', 'Periodo de tiempo');
      this.router.navigate(['/time_period']);
    });
  }
  }

}
