import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  dataArray = [];
  dataIndex: any;
  showHideEditButton: boolean = false;
  public form = {
    firstName: '',
    lastName: '',
    email: ''
  }

  submitForm() {
    console.log('form Data ===', this.form)
    this.dataArray.push(this.form);
    this.resetForm();
  }

  editData(index) {
    this.showHideEditButton = true;
    this.dataIndex = index;
    console.log(this.dataArray[index]);
    const data = this.dataArray[index];
    this.form = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    }
  }

  deleteData(index) {
    console.log(this.dataArray[index]);
    this.dataArray.splice(index, 1)
  }

  editForm() {
    this.dataArray[this.dataIndex].firstName = this.form.firstName;
    this.dataArray[this.dataIndex].lastName = this.form.lastName;
    this.dataArray[this.dataIndex].email = this.form.email;
    this.resetForm();
    this.showHideEditButton = false;
  }

  resetForm() {
    this.form = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
}
