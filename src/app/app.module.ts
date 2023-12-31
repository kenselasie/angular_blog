import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubscribeSectionComponent } from './components/subscribe-section/subscribe-section.component';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
import { BlogTabsComponent } from './components/blog-tabs/blog-tabs.component';
import { ButtonComponent } from './widgets/button/button.component';
import { TypographyComponent } from './widgets/typography/typography.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubscribeSectionComponent,
    BlogPreviewComponent,
    BlogTabsComponent,
    ButtonComponent,
    TypographyComponent,
    PricingComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
