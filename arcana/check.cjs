const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{},crypto:require('node:crypto').webcrypto};vm.createContext(ctx);vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'data.js'),'utf8'),ctx);
const {cards,spreads,shuffle}=ctx.window.Tarot;assert.equal(cards.length,78);assert.equal(cards.filter(c=>c.suit==='major').length,22);for(const suit of ['wands','cups','swords','pentacles'])assert.equal(cards.filter(c=>c.suit===suit).length,14);assert.equal(new Set(cards.map(c=>c.name)).size,78);
for(const c of cards)for(const key of ['name','en','element','keywords','upright','reversedKeywords','reversed'])assert(c[key]?.length>0,`${c.id} missing ${key}`);
for(const s of spreads){assert.equal(s.count,s.positions.length);for(const p of s.positions)for(const k of ['title','meaning','prompt'])assert(p[k]?.length>0);}
let reversed=0;for(let n=0;n<100;n++){const deck=shuffle();assert.equal(deck.length,78);assert.equal(new Set(deck.map(e=>e.card.id)).size,78);assert(deck.every(e=>typeof e.reversed==='boolean'));reversed+=deck.filter(e=>e.reversed).length;}
console.log(JSON.stringify({cards:78,meanings:156,spreads:spreads.length,positionDefinitions:spreads.reduce((a,s)=>a+s.count,0),shufflesChecked:100,reversedRatio:reversed/7800,result:'PASS'}));

