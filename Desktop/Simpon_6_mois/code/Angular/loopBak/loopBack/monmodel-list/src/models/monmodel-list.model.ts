import {Entity, model, property} from '@loopback/repository';

@model()
export class MonmodelList extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
  })
  color?: string;


  constructor(data?: Partial<MonmodelList>) {
    super(data);
  }
}

export interface MonmodelListRelations {
  // describe navigational properties here
}

export type MonmodelListWithRelations = MonmodelList & MonmodelListRelations;
