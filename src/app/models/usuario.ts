
export class Usuario {
    id?: number;
    nombre: string;
    email: string;
    dni: string;
    unenabled?: boolean;
    password?: string;
    direccion: string;
    telefono: string;
    clave: string;
    claveRep: string;
    celular?: string;
    cp?: string;
    fechaActivacion?: any;
    fechaNacimiento?: any;
    novedades?: boolean;
    perfils?: Perfils[];
    sexo?: string;
    username?: string;
}

export class DetalleUsuario extends Usuario {
    roles: Rol[];
}

export class Rol {
    id: number;
    name: string;
}

export class Perfils {
    id?: number;
    descripcion: string;
    nombre: string;
    rolId: string;
}