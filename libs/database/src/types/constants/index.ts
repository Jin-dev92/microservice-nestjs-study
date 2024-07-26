import { Schema } from 'mongoose';
import { User, UserAuth, UserAuthSchema } from '@app/database/schema';

type ISchemaInfo = {
  name: string;
  schema: Schema<any>;
};

export const schemaInfos = [
  {
    name: User.name,
    schema: Schema<User>,
  },
  {
    name: UserAuth.name,
    schema: UserAuthSchema,
  },
] as ISchemaInfo[];
