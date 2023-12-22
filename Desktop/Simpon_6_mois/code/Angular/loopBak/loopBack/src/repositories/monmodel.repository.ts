import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Monmodel, MonmodelRelations} from '../models';

export class MonmodelRepository extends DefaultCrudRepository<
  Monmodel,
  typeof Monmodel.prototype.id,
  MonmodelRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Monmodel, dataSource);
  }
}
