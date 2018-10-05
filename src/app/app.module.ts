import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClienteProvider } from '../providers/cliente/cliente';
import { DatePipe } from '@angular/common';
import { EditarPage } from '../pages/editar/editar';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteProvider
  ]
})
export class AppModule {}
