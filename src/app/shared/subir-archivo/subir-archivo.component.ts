import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { ArchivoCarga } from 'app/models/archivo';
// import { ImageCompressService, IImage } from 'ng2-image-compress';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.scss']
})
export class SubirArchivoComponent implements OnInit {
  // uploading = false;
  // uploadSuccessful = false;

  // archivoLeido: any;
  // nombreArchivoLeido = 'No hay archivos seleccionados';
  // informacionSubida: any;

  // fileI: IImage;
  // processedImages: any = [];

  // @Input() mostrarBotonCancelar: boolean;
  // @Input() textoBoton: string;
  // @Input() validarTamanio: boolean;
  // @Input() validarTipo: string[];
  // @Output() archivoCargado: EventEmitter<ArchivoCarga> = new EventEmitter<any>();
  // @Output() cargaCancelada: EventEmitter<any> = new EventEmitter<any>();
  // @Output() errorCarga: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  // clickEnInput() {
  //   document.getElementById('fileInput').click()
  // }

  // // para 5mb
  // public validateSize(file: any): boolean {
  //   if (!this.validarTamanio) {
  //     return true;
  //   }
  //   return file.size / 1024 / 1024 <= 15;
  // }

  // // para imagen puede ser generico "image" o especifico "image/png" y para pdf puede ser especifico "application/pdf"
  // public validateType(file: any): boolean {
  //   if (!this.validarTipo || this.validarTipo.length === 0) {
  //     return true;
  //   }
  //   return this.validarTipo.filter((tipoArchivo: string) => String(file.type).toLowerCase().indexOf(tipoArchivo.toLowerCase()) !== -1).length > 0;
  // }

  // public borrarImagenCargada() {
  //   this.archivoLeido = null;
  //   this.nombreArchivoLeido = 'No hay archivos seleccionados';
  //   this.cargaCancelada.emit(null);
  // }

  // procesarArchivo(): void {
  //   const files = (<HTMLInputElement>document.getElementById('fileInput')).files;
  //   const file = files[0];
  //   if (!file) {
  //     this.borrarImagenCargada();
  //     return;
  //   }
  //   const tamanioValido = this.validateSize(file);
  //   if (tamanioValido && this.validateType(file)) {
  //     if (file.type.toLowerCase().substring(0, 5) === 'image') {
  //       this.comprimirImagen(files);
  //     } else {
  //       this.procesarArchivoNoImagen(file);
  //     }
  //   } else {
  //     this.archivoLeido = null;
  //     this.nombreArchivoLeido = 'No hay archivos seleccionados';
  //     this.errorCarga.emit(tamanioValido ? 'type_error' : 'size_error');
  //   }
  // }

  // comprimirImagen(files: FileList) {
  //   ImageCompressService.filesToCompressedImageSource(files).then(observableImages => {
  //     observableImages.subscribe(image => {
  //       this.nombreArchivoLeido = image.fileName;
  //       this.archivoLeido = image.compressedImage.imageDataUrl;
  //       this.archivoCargado.emit({ archivo: this.archivoLeido, nombre: this.nombreArchivoLeido });
  //     }, error => {
  //       console.error("Error while converting");
  //     })
  //   });
  // }

  // procesarArchivoNoImagen(file: File) {
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = (e) => {
  //     this.nombreArchivoLeido = file.name;
  //     this.archivoLeido = fileReader.result;
  //     this.archivoCargado.emit({ archivo: this.archivoLeido, nombre: this.nombreArchivoLeido });
  //   };
  //   fileReader.readAsDataURL(file);
  // }

}

