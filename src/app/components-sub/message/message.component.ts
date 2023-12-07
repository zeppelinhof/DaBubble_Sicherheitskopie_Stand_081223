import { Component } from '@angular/core';
import { InputService } from '../../shared/services/input.service';
import { WorkspaceService } from 'src/app/shared/services/workspace.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  isWriting:boolean = true;

  constructor(public service: InputService, public ws: WorkspaceService, public us: UserService){

  }

  clickedContactId!: string;
  clickedContact!: User;


  ngOnInit(): void {
    this.us.clickedContactId
      .subscribe((chId: string) => {
        this.clickedContactId = chId;
        console.log('Komponente Channel hat folgende Id erhalten:', chId)
      });

    this.us.clickedContact
      .subscribe((user: User) => {
        this.clickedContact = user;
        console.log('Komponente Message hat folgenden User erhalten:', user)
      });
  }

  
}
