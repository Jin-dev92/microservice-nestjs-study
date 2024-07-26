import { UserAuthRoleEnum } from '@app/database/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '@app/database/schema';

@Schema()
export class UserAuth {
  @Prop()
  id: number;
  @Prop()
  password: string;
  @Prop({ type: String, enum: UserAuthRoleEnum })
  role: UserAuthRoleEnum;
  @Prop()
  salt: string;
  @Prop()
  accessToken: string;
  @Prop()
  refreshToken: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const UserAuthSchema = SchemaFactory.createForClass(UserAuth);
