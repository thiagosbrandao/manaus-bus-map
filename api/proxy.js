export default async function handler(req,res){
  const path=String(req.query.path||'').replace(/^\/+/, '/');
  const qs=new URLSearchParams(req.query); qs.delete('path');
  const r=await fetch(`https://mobilibus.com/api${path}?${qs}`);
  res.status(r.status).setHeader('Access-Control-Allow-Origin','*').setHeader('Cache-Control','no-store');
  res.send(await r.text());
}
