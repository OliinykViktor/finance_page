export interface StyleParams {
    wrap?: {
      display?:string;
      alignItems?:string;
      justifyContent?:string;
      minWidth?:string;
      padding?:string;
      cursor?:string;
      width?: string;
      m?:number;
      backgroundColor?:string;
    },
    card?:{
      display?:string;
      justifyContent?:string;
    },
    icon?:{
      width?:string;
      height?:string;
      backgroundColor?:string;
      cursor?:string;
    },
    title?:{
      display?:string;
      justifyContent?:string;
    },
    subtitle?:{
      width?: string
    },
    coloms?:{
      minWidth?:string;
    },
    change?:{
      backgroundColor?:string;
    }
  }