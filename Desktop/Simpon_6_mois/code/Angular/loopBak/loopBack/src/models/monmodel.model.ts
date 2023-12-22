import {Entity, model, property} from '@loopback/repository';

@model()
export class Monmodel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  qualite: string;

  @property({
    type: 'number',
    required: true,
  })
  cout: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Monmodel>) {
    super(data);
  }
}

export interface MonmodelRelations {
  // describe navigational properties here
}

export type MonmodelWithRelations = Monmodel & MonmodelRelations;
