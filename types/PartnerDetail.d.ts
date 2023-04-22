/**
 * PartnerDetail
 * A PartnerDetail
 */
declare interface PartnerDetail {
    id?: number;
    partnerId: number;
    address: string;
    isTaxExempt: string;
    band: string;
    comment?: string | null;
}
export { PartnerDetail };
