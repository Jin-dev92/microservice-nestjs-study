import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

export interface IBaseRepository<M> {
  // create(data: M): Promise<M>;
}

@Injectable()
export abstract class BaseRepository<M = any> implements IBaseRepository<M> {
  protected _model: Model<M>;
  protected _modelName: string;

  protected constructor(model: Model<M>) {
    this._model = model;
    this._modelName = this._model.modelName;
  }
}
