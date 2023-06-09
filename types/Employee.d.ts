/**
 * Employee
 * A Employee
 */
declare interface Employee {
    id?: number;
    name: string;
    designation?: string | null;
    experience: number;
    email: string;
    createdOn: string;
    modifiedOn: string;
}
export { Employee };
