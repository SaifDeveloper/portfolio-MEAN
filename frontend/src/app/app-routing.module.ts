import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProfessionalexpComponent } from './professionalexp/professionalexp.component';
import { PerosnalProjectsComponent } from './perosnal-projects/perosnal-projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'certifications', component: CertificationsComponent},
  { path: 'professionalexp', component: ProfessionalexpComponent},
  { path: 'personalprojects', component: PerosnalProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
