import './setup';
import { Type as t } from "@sinclair/typebox";
import { __nullable__ } from "./__nullable__";

export const LeadPlain = t.Object(
  {
    id: t.String(),
    email: t.String({ format: 'email' }),
    fullName: t.String(),
    companyName: t.String(),
    phoneNumber: __nullable__(t.String()),
    createdAt: t.Date(),
  },
  { additionalProperties: false }
);

export const LeadInputCreate = t.Object(
  {
    email: t.String(),
    fullName: t.String(),
    companyName: t.String(),
    phoneNumber: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false }
);

export const LeadInputUpdate = t.Partial(LeadInputCreate);

export const LeadRelations = t.Object(
  {
    calculations: t.Array(t.Any()), // Aquí iría el esquema de RoiCalculation
    diagnostics: t.Array(t.Any()),  // Aquí iría el esquema de Diagnostic
  },
  { additionalProperties: false }
);

export const Lead = t.Composite([LeadPlain, LeadRelations], {
  additionalProperties: false,
});