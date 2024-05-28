import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Amount } from 'src/app/interfaces/amount';
import { AmountService } from 'src/app/services/amount.service';

@Component({
  selector: 'app-add-edit-amount',
  templateUrl: './add-edit-amount.component.html',
  styleUrls: ['./add-edit-amount.component.css']
})
export class AddEditAmountComponent {

  formAmount: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb:FormBuilder,
    private _amountService: AmountService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {

      this.formAmount = this.fb.group({
        amount: ['']
      });
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
      console.log(this.id);
      }

      ngOnInit(): void {
        if(this.id !== 0) {
          this.operacion = 'Editar ';
          this.getAmount(this.id);
        }
      }

      getAmount(id: number) {
        this._amountService.getAmount(id).subscribe((data: any) => {
          this.loading = true;
          this.formAmount.patchValue({
            amount: data.amount
          })
          this.loading = false;
        });
      }

      addAmount() {
        const dataAmount: Amount = {
          amount: this.formAmount.get('amount')?.value
        };

        this.loading = true;
        this._amountService.addAmount(dataAmount).subscribe(data => {
          this.loading = false;
          this.toastr.success('Monto agregado con éxito', 'Monto');
          this.router.navigate(['/amounts']);
        })

      }

    }
