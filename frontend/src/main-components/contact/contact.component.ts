import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContactFormGroup, ContactFormInitializeClass} from "./contact-form.initialize";
import {NotificationService} from "../../services/notification.service";
@Component({
  selector:'app-contact',
  templateUrl:'contact.component.html',
  styleUrls:['contact.component.scss'],
  standalone:true,
  imports:[CommonModule , ReactiveFormsModule]
})
export class ContactComponent{
  public contactFormGroup:FormGroup<ContactFormGroup> = ContactFormInitializeClass.buildContactFormGroup();
  constructor(private notificationService:NotificationService) {

  }
  sendEmail() {
    emailjs.send('service_ipdthwf', 'template_1edgczb', {
      to_name: this.contactFormGroup.value.name,
      from_name: this.contactFormGroup.value.email,
      message: this.contactFormGroup.value.message
    }, 'Vh1oS20eM6ATfC7L4')
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully', response.status, response.text);
        this.notificationService.succes('Email sent successfully');
        this.contactFormGroup.patchValue({
          name:'',
          email:'',
          message:''
        })
      }, (error) => {
        console.error('Failed to send email', error);
        this.notificationService.error('Failed to send email');
      });
  }
}
