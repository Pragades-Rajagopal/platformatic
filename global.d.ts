import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { EntityTypes, Employee,EmployeeDetail,Partner,PartnerDetail } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Employee' | 'EmployeeDetail' | 'Partner' | 'PartnerDetail'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

declare module '@platformatic/sql-mapper' {
  interface Entities {
    employee: Entity<Employee>,
    employeeDetail: Entity<EmployeeDetail>,
    partner: Entity<Partner>,
    partnerDetail: Entity<PartnerDetail>,
  }
}
