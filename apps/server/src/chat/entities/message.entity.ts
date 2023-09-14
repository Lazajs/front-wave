import {
  Prop,
  SchemaFactory,
  Schema as SchemaDecorator,
} from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import { HydratedDocument, Schema, Types } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@SchemaDecorator({ timestamps: { createdAt: 'sendAt' } })
export class Message {
  @Prop()
  @IsOptional()
  id: string;

  @Prop()
  body: string;

  @Prop()
  senderId: string;

  @Prop({ type: Schema.Types.ObjectId, ref: 'Chat' })
  chatId: Types.ObjectId;

  @Prop()
  sendAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
