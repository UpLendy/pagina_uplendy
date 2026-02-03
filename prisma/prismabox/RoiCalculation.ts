import './setup';
import { Type as t } from "@sinclair/typebox";
import { __nullable__ } from "./__nullable__";

export const RoiCalculationPlain = t.Object(
  {
    id: t.String(),
    leadId: t.String(),
    employeeCount: t.Integer({ minimum: 1 }), // Mínimo 1 empleado para ser cliente
    hoursLostPerWeek: t.Integer({ minimum: 0, maximum: 168 }),
    monthlySalary: t.Number({ minimum: 0 }),
    annualSavings: t.Number(),
    createdAt: t.Date(),
  },
  { additionalProperties: false }
);

export const RoiCalculationInputCreate = t.Object(
  {
    employeeCount: t.Integer({ minimum: 1 }),
    hoursLostPerWeek: t.Integer({ minimum: 1 }),
    monthlySalary: t.Number({ minimum: 1300000 }), // Base SMLV 2026 proyectado
    email: t.String({ format: 'email' }), // Requerido para crear/conectar el Lead
    fullName: t.String(),
    companyName: t.String(),
    phoneNumber: t.String({ minLength: 1 }), // Celular del lead (obligatorio)
  },
  { additionalProperties: false }
);

export const RoiCalculationRelations = t.Object(
  {
    lead: t.Object({
      id: t.String(),
      email: t.String(),
      fullName: t.String(),
    }),
  },
  { additionalProperties: false }
);

export const RoiCalculation = t.Composite([RoiCalculationPlain, RoiCalculationRelations]);