import { bootstrapApplication} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent, AppModule } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));;
