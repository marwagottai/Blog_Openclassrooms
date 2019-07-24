import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to my blog';
  blogs = [
    {
      name: 'la vie a un sens',
      content: 'On se demande parfois si la vie a un sens... Et puis on rencontre des êtres qui donnent un sens à la vie.',
      loveIts: 0,
      created_at:  new Date()
    },
    {
      name: 'être différent, oui être créatif !',
      content: 'Il ne suffit pas de suivre le grand chemin de la vie humaine, de naître, de se marier et de mourir.',
      loveIts: 0,
      created_at:  new Date()
    },
    {
      name: 'être les plus fort',
      content: 'Ne vous contentez pas d une vie facile mes amis, cherchez juste a être les plus fort.',
      loveIts: 0,
      created_at:  new Date()
    }
  ];
}
