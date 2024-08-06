import { Component } from '@angular/core';
import { Customer} from './model/Customer';
import { CustomerService} from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = 'Event_Management_System_Dance';
customer:Customer;
result:string;
customerArray : Customer[];
flag:boolean;

constructor(private service : CustomerService)
{
  this.customer=new Customer();
  this.result="";
  this.customerArray=[];
  this.flag=false;
}

  insertCustomer(data: any){
    this.customer.id=data.customerEmail;
    this.customer.customerName=data.customerName;
    this.customer.customerContact=data.customerContact;
    this.customer.customerAddress=data.customerAddress;
    this.customer.FunctionDate=data.FunctionDate;
    this.customer.customerTiming=data.customerTiming;
    this.result=this.service.insertCustomer(this.customer);
    
  }

  updateCustomer(data: any){
    this.customer.id=data.customerEmail;
    this.customer.customerName=data.customerName;
    this.customer.customerContact=data.customerContact;
    this.customer.customerAddress=data.customerAddress;
    this.customer.FunctionDate=data.FunctionDate;
    this.customer.customerTiming=data.customerTiming;
    this.result=this.service.updateCustomer(this.customer);
    /*alert(data.empId+" "+data.empName+" "+data.empSalary);*/
  }
  deleteCustomer(data: any){
    this.result=this.service.deleteCustomer(data.customerEmail);
  }
  findCustomer(data:any){
    this.customer=this.service.findCustomer(data.customerEmail);
    this.result=this.customer.id+" "+this.customer.customerName+this.customer.customerContact;
  }
  
  findAllCustomer(){
    this.customerArray=this.service.findAllCustomer();
    this.flag=true;
  }
}
