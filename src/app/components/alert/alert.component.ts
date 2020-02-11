import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {



  constructor(public dialogRef:MatDialogRef<AlertComponent>){ }

  ngOnInit() {
  }
  
  
  closeDialog(){
  this.dialogRef.close(true);
  }


}

