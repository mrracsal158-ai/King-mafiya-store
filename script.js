const packages=[
["100 Diamonds","LKR 350","STARTER"],["310 Diamonds","LKR 900","POPULAR"],
["520 Diamonds","LKR 1,450","VALUE"],["1060 Diamonds","LKR 2,800","POPULAR"],
["2180 Diamonds","LKR 5,400","VALUE"],["5600 Diamonds","LKR 13,500","BEST VALUE"]
];
const list=document.querySelector("#packages"),chosen=document.querySelector("#chosen"),price=document.querySelector("#price");
let current=null;
packages.forEach((p,i)=>{const el=document.createElement("div");el.className="pkg";el.innerHTML=`<span class="label">${p[2]}</span><div class="d">💎 ${p[0]}</div><div class="p">${p[1]}</div>`;el.onclick=()=>{document.querySelectorAll(".pkg").forEach(x=>x.classList.remove("active"));el.classList.add("active");current=p;chosen.textContent=p[0];price.textContent=p[1]};list.appendChild(el)});
document.querySelector("#order").onclick=()=>{const id=document.querySelector("#playerId").value.trim(),name=document.querySelector("#playerName").value.trim();if(!current)return alert("Select a diamond package first.");if(!id)return alert("Enter the Free Fire Player ID.");const msg=`King Mafia Store - FF Top Up%0APlayer ID: ${id}%0APlayer Name: ${name||"-"}%0APackage: ${current[0]}%0APrice: ${current[1]}%0A%0AI want to place this order.`;const order={playerId:id,playerName:name,package:current[0],price:current[1],status:"PENDING",created:new Date().toLocaleString()};
const old=JSON.parse(localStorage.getItem("km_orders")||"[]"); old.unshift(order); localStorage.setItem("km_orders",JSON.stringify(old));
window.open("https://wa.me/94758525595?text="+msg,"_blank")};
