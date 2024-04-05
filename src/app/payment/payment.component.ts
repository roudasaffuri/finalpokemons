import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  title = 'payment';
  onSubmit(form: NgForm) {
    if(form.valid){
      alert('payment done successfully');
    
    }}
}

