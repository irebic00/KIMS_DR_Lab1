import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `

  
  <div class="col-md-auto">
    <div class="input-group" style="padding-top: 50px; padding-left: 200px; padding-right: 200px; padding-bottom: 10px;">
      <input type="text" class="form-control" placeholder="Input PlainText here..." #text>
      <input type="text" class="form-control" placeholder="Input shift amount here..." #shift>
      <span class="input-group-btn">
        <button type="button" class="btn btn-primary btn-lg" (click)="callCaesar(text, shift)" style="padding: 25px;">Calculate!</button>
      </span>
    </div>
  </div>

  <div class="row" style="padding-left: 200px; padding-right: 200px;">
    <div *ngIf="errorCode == 0" class="alert alert-success" role="alert">Your cypher is: {{output}}</div>
    <div *ngIf="errorCode == 1" class="alert alert-danger" role="alert">Please input text</div>
    <div *ngIf="errorCode == 2" class="alert alert-danger" role="alert">Please input shift amount</div>
  </div>
  `
})
export class AppComponent { 
  public errorCode: number = -1;
  public output: string = "";

  public callCaesar(text: HTMLInputElement, shift: HTMLInputElement)
  {
    if(text.value.trim() == ""){
      this.errorCode = 1;
      return;
    }
    if (shift.value.trim() == "")
    {
      this.errorCode = 2;
      return;
    }

    this.output = this.caesarShift(text.value.trim(), parseInt(shift.value.trim()));
    this.errorCode = 0;
  }

  public caesarShift(str: string, amount: number): string 
  {    
	  var output: string = '';
	  if (amount < 0)
		  amount += 26;

	  for (var i = 0; i < str.length; i ++) {
		  var c = str[i];
		  if (c.match(/[a-z]/i)) 
      {
			  var code = str.charCodeAt(i);
			  if ((code >= 65) && (code <= 90))
				  c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			  else if ((code >= 97) && (code <= 122))
				  c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		  }
		  output += c;
	  }
	return output;
  };
}
