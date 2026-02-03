import { FormatRegistry } from '@sinclair/typebox';

// Registramos el formato 'email' para que TypeBox sepa cómo validarlo
FormatRegistry.Set('email', (value) => 
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value)
);