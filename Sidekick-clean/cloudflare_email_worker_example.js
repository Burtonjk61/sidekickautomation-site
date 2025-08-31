// Cloudflare Email Worker (free). Attach to Email Routing → Send to Worker.
export default { async email(message, env, ctx){ const from=`${message.from}`; const to=`${message.rcptTo}`; const subject=message.headers.get("subject")||"";
 let text=""; try{ const stream=await message.raw; const buf=await new Response(stream).arrayBuffer(); text=new TextDecoder().decode(buf);}catch(e){}
 await fetch(env.INBOUND_URL,{method:"POST",headers:{"Content-Type":"application/json","X-INBOUND-SECRET":env.INBOUND_SECRET},body:JSON.stringify({from,to,subject,text})});
 }};
