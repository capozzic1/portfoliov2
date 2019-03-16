import { AppModule } from './appComponent/app.module';
import { AppComponent } from './appComponent/app.component';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
