import { Employee } from './Employee'
import { EmployeeDetail } from './EmployeeDetail'
import { Partner } from './Partner'
import { PartnerDetail } from './PartnerDetail'
  
  interface EntityTypes  {
    Employee:Employee
    EmployeeDetail:EmployeeDetail
    Partner:Partner
    PartnerDetail:PartnerDetail
  }
  
  export { EntityTypes ,Employee,EmployeeDetail,Partner,PartnerDetail }