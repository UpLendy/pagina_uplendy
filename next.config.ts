import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Eliminamos 'swagger-ui-react' de aquí. 
  // Solo dejamos 'next-swagger-doc' que es lógica de servidor pura.
  serverExternalPackages: ['next-swagger-doc'],
};

export default nextConfig;