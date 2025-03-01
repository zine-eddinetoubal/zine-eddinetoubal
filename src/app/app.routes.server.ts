import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'home',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**', 
    renderMode: RenderMode.Prerender
  }
];
