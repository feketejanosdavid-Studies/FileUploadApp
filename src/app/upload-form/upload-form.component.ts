import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.css'
})
export class UploadFormComponent {
  SelectedFiles?: FileList;
  currentFileUpoload = false;
  percentage = 0

  constructor(private uploadFile: UploadService) { }


  SelectFiles(event: any) {
    console.log(event.target.files);
    this.SelectedFiles = event.target.files[0];
    this.percentage = 0
    this.currentFileUpoload = false
  }


  upload() {
    console.log(this.upload)
    console.log(this.SelectedFiles);
    this.currentFileUpoload = true;
    this.uploadFile.uploadFile(this.SelectedFiles).subscribe(
      (percentage:any) => {
        this.percentage = Math.round(percentage?percentage:0)
        console.log(this.percentage);
      }
    )
  }
}
