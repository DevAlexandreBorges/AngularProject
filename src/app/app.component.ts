import { Component, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotasComponent } from './components/notas/notas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuLateralComponent, NotasComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularProject';
  
  @ViewChild(NotasComponent) notasComponent!: NotasComponent; 
  @ViewChild(MenuLateralComponent) menuLateralComponent!: MenuLateralComponent;
  
  handleNoteIdEmiter(id: number){
    this.notasComponent.getNote(id);
  }

  handleNewNoteEmiter(){
    this.notasComponent.newNote();
  }

  handleMenuUpdateEmmiter(){
    this.menuLateralComponent.getNotes();
  }
}
