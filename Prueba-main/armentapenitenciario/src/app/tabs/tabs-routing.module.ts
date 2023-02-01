import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';



const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'modulos',
        loadChildren: () => import('../pages/modules/modules.module').then(m => m.ModulesPageModule)
      },
      {
        path: 'docs',
        loadChildren: () => import('../pages/docs/docs.module').then(m => m.DocsPageModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('../pages/videos/videos.module').then(m => m.VideosPageModule)
      },
      {
        path: 'test',
        loadChildren: () => import('../pages/test/test.module').then(m => m.TestPageModule)
      },
      {
        path: 'foro',
        loadChildren: () => import('../pages/forum/forum.module').then(m => m.ForumPageModule)
      },
      // {
      //   path: 'menu',
      //   loadChildren: () => import('../pages/menu/menu.module').then(m => m.MenuPageModule)
      // },
      // {
      //   path: 'mas',
      //   // loadChildren: () => import('../pages/forum/forum.module').then(m => m.ForumPageModule)
      // },
      // {
      //   path: 'eventos',
      //   loadChildren: () => import('../pages/events/events.module').then(m => m.EventsPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
