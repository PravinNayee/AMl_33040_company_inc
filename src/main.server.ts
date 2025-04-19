import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppServerModule } from './app/app.server.module';
import { AppModule } from './app/app.module';  // Import AppModule
import { config } from './app/app.config.server';
import { platformServer } from '@angular/platform-server';


const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
export function createApp() {
    return platformServer()
      .bootstrapModule(AppServerModule, {
      })
      .catch(err => console.error(err));
  }