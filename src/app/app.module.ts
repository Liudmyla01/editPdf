import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolsNavComponent } from './components/tools-nav/tools-nav.component';
import { MainFildsComponent } from './components/main-filds/main-filds.component';
import { TopToolsPanelComponent } from './components/top-tools-panel/top-tools-panel.component';
import { ElementsToolsComponent } from './components/elements-tools/elements-tools.component';
import { TextToolsComponent } from './components/text-tools/text-tools.component';
import { ImagesToolsComponent } from './components/images-tools/images-tools.component';
import { BackgroundToolsComponent } from './components/background-tools/background-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolsNavComponent,
    MainFildsComponent,
    TopToolsPanelComponent,
    ElementsToolsComponent,
    TextToolsComponent,
    ImagesToolsComponent,
    BackgroundToolsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
