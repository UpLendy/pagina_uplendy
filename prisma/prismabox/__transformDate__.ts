// En Next.js 16, a veces necesitamos transformar el string de fecha que viene del cliente
export const __transformDate__ = (date: any) => {
    if (!date) return null;
    return new Date(date);
  };