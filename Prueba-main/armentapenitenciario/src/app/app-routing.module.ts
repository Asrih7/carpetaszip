import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./pages/login-forget/login-forget.module').then( m => m.LoginForgetPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test-do',
    loadChildren: () => import('./pages/test-do/test-do.module').then( m => m.TestDoPageModule)
  },
  {
    path: 'test-info',
    loadChildren: () => import('./pages/test-info/test-info.module').then( m => m.TestInfoPageModule)
  },
  {
    path: 'test-review',
    loadChildren: () => import('./pages/test-review/test-review.module').then( m => m.TestReviewPageModule)
  },
  {
    path: 'test-score',
    loadChildren: () => import('./pages/test-score/test-score.module').then( m => m.TestScorePageModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./pages/docs/docs.module').then( m => m.DocsPageModule)
  },
  {
    path: 'doc-viewer',
    loadChildren: () => import('./pages/doc-viewer/doc-viewer.module').then( m => m.DocViewerPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'video-player',
    loadChildren: () => import('./pages/video-player/video-player.module').then( m => m.VideoPlayerPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./pages/forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'forum-topic',
    loadChildren: () => import('./pages/forum-topic/forum-topic.module').then( m => m.ForumTopicPageModule)
  },
  {
    path: 'test-index',
    loadChildren: () => import('./pages/test-index/test-index.module').then( m => m.TestIndexPageModule)
  },
  {
    path: 'test-index-review',
    loadChildren: () => import('./pages/test-index-review/test-index-review.module').then( m => m.TestIndexReviewPageModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('./pages/modules/modules.module').then( m => m.ModulesPageModule)
  },
  {
    path: 'module-detail',
    loadChildren: () => import('./pages/module-detail/module-detail.module').then( m => m.ModuleDetailPageModule)
  },
  {
    path: 'specific-content',
    loadChildren: () => import('./pages/specific-content/specific-content.module').then( m => m.SpecificContentPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'notification-detail',
    loadChildren: () => import('./pages/notification-detail/notification-detail.module').then( m => m.NotificationDetailPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./pages/account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
