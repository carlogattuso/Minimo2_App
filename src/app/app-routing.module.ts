import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'subject-list',
    pathMatch: 'full'
  },
  {
    path: 'subject-list',
    loadChildren: () => import('./pages/subject-list/subject-list.module').then(m => m.SubjectListPageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./pages/student-list/student-list.module').then(m => m.StudentListPageModule)
  },
  {
    path: 'enroll-students',
    loadChildren: () => import('./pages/enroll-students/enroll-students.module').then(m => m.EnrollStudentsPageModule)
  },
  {
    path: 'subject-detail/:subjectId',
    loadChildren: () => import('./pages/subject-detail/subject-detail.module').then( m => m.SubjectDetailPageModule)
  },
  {
    path: 'student-detail/:studentId',
    loadChildren: () => import('./pages/student-detail/student-detail.module').then( m => m.StudentDetailPageModule)
  },
  {
    path: 'modal-add-subject',
    loadChildren: () => import('./pages/modal-add-subject/modal-add-subject.module').then(m => m.ModalAddSubjectPageModule)
  },
  {
    path: 'filter-studies',
    loadChildren: () => import('./pages/filter-studies/filter-studies.module').then(m => m.FilterStudiesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
