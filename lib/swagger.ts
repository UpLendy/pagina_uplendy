import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'app/api', // Busca comentarios @swagger en esta carpeta
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Uplendy 2026 - API de Blindaje Financiero',
        version: '1.0',
      },
    },
  });
  return spec;
};