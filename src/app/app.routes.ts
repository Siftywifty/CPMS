import { Routes } from '@angular/router';

// ===========================
// AUTH COMPONENTS
// ===========================
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { Settings } from './shared/settings/settings';
import { Feedback } from './shared/feedback/feedback';
import { HelpSupport } from './shared/help-support/help-support';


// ===========================
// APP SHELL
// ===========================
import { AppShell } from './app-shell/app-shell';

// ===========================
// STUDENT
// ===========================
import { StudentDashboard as StudentDashboard } from './student/dashboard/dashboard';
import { Profile } from './student/profile/profile';
import { Resume } from './student/resume/resume';
import { Applications } from './student/applications/applications';

// ===========================
// RECRUITER
// ===========================
import { RecruiterDashboard as RecruiterDashboard } from './recruiter/dashboard/dashboard';
import { CompanyProfile } from './recruiter/company-profile/company-profile';
import { JobPosting } from './recruiter/job-posting/job-posting';
import { CandidateSearch } from './recruiter/candidate-search/candidate-search';
import { InterviewSchedule } from './recruiter/interview-schedule/interview-schedule';

// ===========================
// PLACEMENT CELL
// ===========================
import { PlacementDashboard as PlacementDashboard } from './placement-cell/dashboard/dashboard';
import { StudentManagement } from './placement-cell/student-management/student-management';
import { CompanyManagement } from './placement-cell/company-management/company-management';
import { TrainingProgram } from './placement-cell/training-program/training-program';
import { Reports } from './placement-cell/reports/reports';
import { Announcements } from './placement-cell/announcements/announcements';

// ===========================
// GUARDS
// ===========================
import { studentGuard } from './auth/student-guard';
import { recruiterGuard } from './auth/recruiter-guard';
import { placementCellGuard } from './auth/placement-cell-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // ===========================
  // AUTH
  // ===========================

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'forgot-password',
    component: ForgotPassword
  },
  {
  path: 'settings',
  component: Settings
},

  // ===========================
  // APP SHELL
  // ===========================

  {

    path: '',
    component: AppShell,

    children: [

      // ===========================
      // STUDENT
      // ===========================

      {
        path: 'student',
        component: StudentDashboard,
        canActivate: [studentGuard]
      },
      {
  path:'feedback',
  component:Feedback
},
{
   path:'help-support',
   component:HelpSupport
},

      {
        path: 'profile',
        component: Profile,
        canActivate: [studentGuard]
      },

      {
        path: 'resume',
        component: Resume,
        canActivate: [studentGuard]
      },

      {
        path: 'applications',
        component: Applications,
        canActivate: [studentGuard]
      },

      // ===========================
      // RECRUITER
      // ===========================

      {
        path: 'recruiter',
        component: RecruiterDashboard,
        canActivate: [recruiterGuard]
      },

      {
        path: 'company-profile',
        component: CompanyProfile,
        canActivate: [recruiterGuard]
      },

      {
        path: 'job-posting',
        component: JobPosting,
        canActivate: [recruiterGuard]
      },

      {
        path: 'candidate-search',
        component: CandidateSearch,
        canActivate: [recruiterGuard]
      },

      {
        path: 'interview-schedule',
        component: InterviewSchedule,
        canActivate: [recruiterGuard]
      },

      // ===========================
      // PLACEMENT CELL
      // ===========================

      {
        path: 'placement-cell',
        component: PlacementDashboard,
        canActivate: [placementCellGuard]
      },

      {
        path: 'student-management',
        component: StudentManagement,
        canActivate: [placementCellGuard]
      },

      {
        path: 'company-management',
        component: CompanyManagement,
        canActivate: [placementCellGuard]
      },

      {
        path: 'training-program',
        component: TrainingProgram,
        canActivate: [placementCellGuard]
      },

      {
        path: 'reports',
        component: Reports,
        canActivate: [placementCellGuard]
      },

      {
        path: 'announcements',
        component: Announcements,
        canActivate: [placementCellGuard]
      }

    ]

  },

  // ===========================
  // INVALID ROUTE
  // ===========================

  {
    path: '**',
    redirectTo: 'login'
  }

];