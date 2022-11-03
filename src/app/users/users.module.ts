import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ParentComponent } from './parent/parent.component';
import { PublicComponent } from './public/public.component';
import { HighlightDirective } from './public/highlight.directive';
import { AgePipe } from './public/age.pipe';



@NgModule({
  declarations: [
    UsersComponent,
    ParentComponent,
    PublicComponent,
    HighlightDirective,
    AgePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent,
    ParentComponent,
    PublicComponent
  ]
})
export class UsersModule { }
