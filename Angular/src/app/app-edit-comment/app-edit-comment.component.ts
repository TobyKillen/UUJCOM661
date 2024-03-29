import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-app-edit-comment',
  templateUrl: './app-edit-comment.component.html',
  styleUrls: ['./app-edit-comment.component.css']
})
export class AppEditCommentComponent implements OnInit {

  comment_update_submission_form: any;
  comment_information: any;
  default_form_data: any;
  default_form_data_1: any;


  constructor(private webservice: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder, private Router: Router ) { }
  
  onUpdate() {
    var Post_UUID: any = this.route.snapshot.params["Post_UUID"];
    var Comment_UUID: any = this.route.snapshot.params["Comment_UUID"];
    this.webservice.updateComment(this.comment_update_submission_form.value, Post_UUID, Comment_UUID);
    this.Router.navigate(["/"]);
  }

  async ngOnInit() {

    this.comment_update_submission_form = this.formBuilder.group({
      "Comment_Author": ["", Validators.required],
      "Comment_Body": ["", Validators.required],
    });
    
    var Post_UUID: any = this.route.snapshot.params["Post_UUID"];
    var Comment_UUID: any = this.route.snapshot.params["Comment_UUID"];
    
    var comment_response = await this.webservice.getComment(Post_UUID, Comment_UUID);
    this.comment_information = comment_response;

    this.default_form_data = this.comment_information[0];
    this.default_form_data_1 = this.default_form_data[0];

    

    this.comment_update_submission_form.setValue({
      "Comment_Author": this.default_form_data_1.comment_author,
      "Comment_Body": this.default_form_data_1.comment_body
    });

   



    
  }

}
