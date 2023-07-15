import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [];

@NgModule({declarations: [],
  imports: [
    RouterModule.forRoot([
      // { path: '', component: AppComponent },
      { path: '', component: HomeComponent },
      { path: 'Skills', component: SkillComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'About', component: AboutComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
