import mongoose from "npm:mongoose@7.6.3"

export enum formatoD{
    LP,
    CD,
    single,
    cassete,
    reelToReel,
    minidisc,
    videocd
}

export type Disco={
    nombre:string,
    autor: string,
    formato: formatoD,
    matriz?:string,
    paisImpr:string,
    portada:string,
    id: mongoose.Types.ObjectId
}
