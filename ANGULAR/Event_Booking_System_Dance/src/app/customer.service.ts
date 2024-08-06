import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Customer } from './model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
url:string;
customerArray:Customer[];
customer:Customer;


  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/customer";
    this.customer=new Customer;
    this.customerArray=[];

    
   }

insertCustomer(customer:Customer
){

this.http.post<Customer>(this.url,customer).subscribe();
return "Customer Details Added"

}
updateCustomer(customer:Customer){

  this.http.put<Customer>(this.url+"/"+customer.id,customer).subscribe();
  return "Customer Details updated"
  
  }
  deleteCustomer(Id:string){

    this.http.delete<Customer>(this.url+"/"+Id).subscribe();
    return "Customer Details deleted"
    
    }
    findCustomer(Id:string){
      this.http.get<Customer>(this.url+"/"+Id).subscribe(data =>this.customer=data);
      return this.customer;
    }
    findAllCustomer(){
      this.http.get<Customer[]>(this.url).subscribe(data =>this.customerArray = data);
      return this.customerArray;
    }
}
