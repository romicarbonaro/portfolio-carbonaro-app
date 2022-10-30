import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './components/person/person.component';
import { LanguageComponent } from './components/language/language.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CreateEditPersonDialogComponent } from './components/person/create-edit-person-dialog/create-edit-person-dialog.component';
import { ConfirmDeletePersonDialogComponent } from './components/person/confirm-delete-person-dialog/confirm-delete-person-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { CreateEditLanguageDialogComponent } from './components/language/create-edit-language-dialog/create-edit-language-dialog.component';
import { ConfirmDeleteLanguageDialogComponent } from './components/language/confirm-delete-language-dialog/confirm-delete-language-dialog.component';
import { ProgrammingLanguageComponent } from './components/programming-language/programming-language.component';
import { CreateEditProgrammingLanguageComponent } from './components/programming-language/create-edit-programming-language-dialog/create-edit-programming-language-dialog.component';
import { ConfirmDeleteProgrammingLanguageComponent } from './components/programming-language/confirm-delete-programming-language-dialog/confirm-delete-programming-language-dialog.component';
import { JobExperienceComponent } from './components/job-experience/job-experience.component';
import { ConfirmDeleteJobExperienceDialogComponent } from './components/job-experience/confirm-delete-job-experience-dialog/confirm-delete-job-experience-dialog.component';
import { CreateEditJobExperienceDialogComponent } from './components/job-experience/create-edit-job-experience-dialog/create-edit-job-experience-dialog.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    LanguageComponent,
    CreateEditPersonDialogComponent,
    ConfirmDeletePersonDialogComponent,
    HomeComponent,
    IntroComponent,
    CreateEditLanguageDialogComponent,
    ConfirmDeleteLanguageDialogComponent,
    ProgrammingLanguageComponent,
    CreateEditProgrammingLanguageComponent,
    ConfirmDeleteProgrammingLanguageComponent,
    JobExperienceComponent,
    ConfirmDeleteJobExperienceDialogComponent,
    CreateEditJobExperienceDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  title = 'Portfolio de Franco di Napoli';
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLd68UNljtPdVmr_IdqPGVnPXD_z0G4Vw",
  authDomain: "portfolio-rcarbonaro-app.firebaseapp.com",
  projectId: "portfolio-rcarbonaro-app",
  storageBucket: "portfolio-rcarbonaro-app.appspot.com",
  messagingSenderId: "429448387120",
  appId: "1:429448387120:web:ddd1cac25e59495bec2bf5",
  measurementId: "G-R6C02KSW0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


