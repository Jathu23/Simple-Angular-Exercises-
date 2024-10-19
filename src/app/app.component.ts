import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-admission';
  newStudentName="";
  pendingStudents:string[]=[];
  completedStudents:string[]=[];
  editIndex:number|null=null;

  addPendingList(){
    if(this.editIndex!=null){
      this.pendingStudents=this.pendingStudents.map((val,i)=>{ 
        if(this.editIndex==i){
          val=this.newStudentName;
        }
        return val;
      });
    }
    else{
      this.pendingStudents.push(this.newStudentName);
    }
    this.editIndex=null;
    this.newStudentName="";
  }
  edit(editIndex:number){
    this.editIndex=editIndex;
    const editStudent=this.pendingStudents.find((val,i)=>{
      return editIndex==i;
    });
    if(editStudent)
    this.newStudentName=editStudent;
  }
  delete(deleteIndex:number){
    this.pendingStudents=this.pendingStudents.filter((val,i)=>{
      return deleteIndex!==i;
    });
  }
  completed(completedIndex:number){
    const completedStudent=this.pendingStudents.find((val,i)=>{
      return completedIndex==i;
    });

    this.pendingStudents=this.pendingStudents.filter((val,i)=>{
      return completedIndex!==i;
    });
    if(completedStudent)
    this.completedStudents.push(completedStudent);
    
  }
}
