import './setup';
import { Type as t } from "@sinclair/typebox";
import { __nullable__ } from "./__nullable__";

export const DiagnosticPlain = t.Object(
  {
    id: t.String(),
    leadId: t.String(),
    riskLevel: t.Union([
      t.Literal("CRITICO"),
      t.Literal("ALTO"),
      t.Literal("MODERADO")
    ]),
    responses: t.Any(), // Estructura flexible para las preguntas del Typeform
    createdAt: t.Date(),
  },
  { additionalProperties: false }
);

export const DiagnosticInputCreate = t.Object(
  {
    leadId: t.String(),
    responses: t.Object({
      procesosManuales: t.Number(),
      dependenciaPersona: t.Boolean(),
      impactoSalarioMinimo: t.Number({ minimum: 1, maximum: 5 }), // Escala de preocupación
    }),
  },
  { additionalProperties: false }
);

export const DiagnosticRelations = t.Object(
  {
    lead: t.Object({
      email: t.String(),
      companyName: t.String(),
    }),
  },
  { additionalProperties: false }
);

export const Diagnostic = t.Composite([DiagnosticPlain, DiagnosticRelations]);