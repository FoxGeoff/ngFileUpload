// app.component.ts

import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective, FileItem } from 'ng2-file-upload/ng2-file-upload';

const UploadURL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Upload a File';

  public uploader: FileUploader = new FileUploader({ url: UploadURL, itemAlias: 'photo', removeAfterUpload: false, autoUpload: false });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      var uploadFile:FileItem = item;
      alert(`File uploaded successfully: ${uploadFile._file.name}`);
    };
  }
}
