import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css'],
  providers: [
    LocalStorageService
  ]
})
export class ConfigurationsComponent {
  
  configForm: FormGroup;


  storage: LocalStorageService;
  instrumentoSelecionado: number = 5;
  withMetronome: boolean = false;

  instrumentos = [
    { id: 4, nome: 'Teclado' },
    { id: 5, nome: 'Pads' }
  ];

  @Output () aoSalvar = new EventEmitter<any>();

  onSubmit() {
    this.aoSalvar.emit(this.configForm.value);
    console.log(this.instrumentoSelecionado)
    this.storage.set('instrumento', this.instrumentoSelecionado);
    this.storage.set('withMetronome', this.withMetronome);
  }

  constructor(
    private route: ActivatedRoute,
     private fb: FormBuilder,
      private localStorageService: LocalStorageService
     ) { 
    this.configForm = this.fb.group({
      instrumento: ['', Validators.required]
    });
    this.storage = localStorageService;
    console.log(this.storage.get('instrumento'));
    this.instrumentoSelecionado = parseInt(this.storage.get('instrumento')) || this.instrumentoSelecionado;
    this.withMetronome = this.storage.get('withMetronome');
  }
}
