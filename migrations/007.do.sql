CREATE VIEW partners_v AS
SELECT 
p.id 'partner_id',
p.name,
p.business_type,
pd.address,
pd.is_tax_exempt,
pd.band,
pd.comment,
p.created_on
FROM partners p, partner_details pd
WHERE pd.partner_id = p.id;