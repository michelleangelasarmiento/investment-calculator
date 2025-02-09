import { Component ,EventEmitter,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type{ InvestmentInput } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  // enteredInitialInvestment = signal('0');
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '2';
  enteredDuration = '1';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}
