import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skillName = '';
  keyword = 'name';
  public Skills = [
    {
      id: 1,
      name: 'React',
    },
    {
      id: 2,
      name: 'React native',
    },
    {
      id: 3,
      name: 'Angular',
    },
    {
      id: 4,
      name: 'Figma',
    },
    {
      id: 5,
      name: 'Illustrator',
    },
    {
      id: 6,
      name: '.Net',
    },
    {
      id: 7,
      name: 'Adobe',
    },
    {
      id: 8,
      name: 'PHP',
    },
    {
      id: 9,
      name: 'Java',
    },
    {
      id: 10,
      name: 'Python',
    },
   
  ];
    selectEvent(_item: any) {
      console.log(_item)
      this.skillName = _item.name
      
    // do something with selected item
  }

  onChangeSearch(_search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(_e: any) {
    // do something
  }
}

