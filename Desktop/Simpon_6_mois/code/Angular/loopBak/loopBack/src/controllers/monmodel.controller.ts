import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Monmodel} from '../models';
import {MonmodelRepository} from '../repositories';

export class MonmodelController {
  constructor(
    @repository(MonmodelRepository)
    public monmodelRepository : MonmodelRepository,
  ) {}

  @post('/monmodels')
  @response(200, {
    description: 'Monmodel model instance',
    content: {'application/json': {schema: getModelSchemaRef(Monmodel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Monmodel, {
            title: 'NewMonmodel',
            exclude: ['id'],
          }),
        },
      },
    })
    monmodel: Omit<Monmodel, 'id'>,
  ): Promise<Monmodel> {
    return this.monmodelRepository.create(monmodel);
  }

  @get('/monmodels/count')
  @response(200, {
    description: 'Monmodel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Monmodel) where?: Where<Monmodel>,
  ): Promise<Count> {
    return this.monmodelRepository.count(where);
  }

  @get('/monmodels')
  @response(200, {
    description: 'Array of Monmodel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Monmodel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Monmodel) filter?: Filter<Monmodel>,
  ): Promise<Monmodel[]> {
    return this.monmodelRepository.find(filter);
  }

  @patch('/monmodels')
  @response(200, {
    description: 'Monmodel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Monmodel, {partial: true}),
        },
      },
    })
    monmodel: Monmodel,
    @param.where(Monmodel) where?: Where<Monmodel>,
  ): Promise<Count> {
    return this.monmodelRepository.updateAll(monmodel, where);
  }

  @get('/monmodels/{id}')
  @response(200, {
    description: 'Monmodel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Monmodel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Monmodel, {exclude: 'where'}) filter?: FilterExcludingWhere<Monmodel>
  ): Promise<Monmodel> {
    return this.monmodelRepository.findById(id, filter);
  }

  @patch('/monmodels/{id}')
  @response(204, {
    description: 'Monmodel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Monmodel, {partial: true}),
        },
      },
    })
    monmodel: Monmodel,
  ): Promise<void> {
    await this.monmodelRepository.updateById(id, monmodel);
  }

  @put('/monmodels/{id}')
  @response(204, {
    description: 'Monmodel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() monmodel: Monmodel,
  ): Promise<void> {
    await this.monmodelRepository.replaceById(id, monmodel);
  }

  @del('/monmodels/{id}')
  @response(204, {
    description: 'Monmodel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.monmodelRepository.deleteById(id);
  }
}
