"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.errorCode = -1;
        this.output = "";
    }
    AppComponent.prototype.callCaesar = function (text, shift) {
        if (text.value.trim() == "") {
            this.errorCode = 1;
            return;
        }
        if (shift.value.trim() == "") {
            this.errorCode = 2;
            return;
        }
        this.output = this.caesarShift(text.value.trim(), parseInt(shift.value.trim()));
        this.errorCode = 0;
    };
    AppComponent.prototype.caesarShift = function (str, amount) {
        var output = '';
        if (amount < 0)
            amount += 26;
        for (var i = 0; i < str.length; i++) {
            var c = str[i];
            if (c.match(/[a-z]/i)) {
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
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n  \n  <div class=\"col-md-auto\">\n    <div class=\"input-group\" style=\"padding-top: 50px; padding-left: 200px; padding-right: 200px; padding-bottom: 10px;\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Input PlainText here...\" #text>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Input shift amount here...\" #shift>\n      <span class=\"input-group-btn\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"callCaesar(text, shift)\" style=\"padding: 25px;\">Calculate!</button>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"padding-left: 200px; padding-right: 200px;\">\n    <div *ngIf=\"errorCode == 0\" class=\"alert alert-success\" role=\"alert\">Your cypher is: {{output}}</div>\n    <div *ngIf=\"errorCode == 1\" class=\"alert alert-danger\" role=\"alert\">Please input text</div>\n    <div *ngIf=\"errorCode == 2\" class=\"alert alert-danger\" role=\"alert\">Please input shift amount</div>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map