import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutRootComponent } from './layout-root/layout-root.component';
import { RoleGuardService } from './services/role-guard/role-guard.service';

const routes: Routes = [
    {
        path: '',
        component: LayoutRootComponent,
        children: [
            {
                path: '',
                redirectTo: 'admin',
                pathMatch: 'full'
            },
            {
                path: 'admin',
                loadChildren: './modules/admin/admin.module#AdminModule',
                canActivate: [RoleGuardService]
            },
            {
                path: 'teacher',
                loadChildren: './modules/teacher/teacher.module#TeacherModule',
                canActivate: [RoleGuardService]
            },
            {
                path: 'student',
                loadChildren: './modules/student/student.module#StudentModule',
                canActivate: [RoleGuardService]
            },
            {
                path: 'alumni',
                loadChildren: './modules/alumni/alumni.module#AlumniModule',
                canActivate: [RoleGuardService]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
