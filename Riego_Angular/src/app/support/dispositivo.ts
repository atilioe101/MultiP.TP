export class UltimaMedicion {
    fecha: string;
    valor: number;
}

export class ElectroValvula {
    codigo: number;
    nombre: string;
    activo: number;
}

export class DispositivoItem {
    _id: string;
    dispositivoId: number;
    nombre: string;
    ubicacion: string;
    electrovalvula: ElectroValvula;
    ultimamedicion: UltimaMedicion;
}