// Lightweight chart rendering (no external libs)
    function drawSparkline(values, canvas){
      const ctx = canvas.getContext('2d');
      const w = canvas.width = canvas.offsetWidth; const h = canvas.height = 220;
      ctx.clearRect(0,0,w,h);
      const max = Math.max(...values); const min = Math.min(...values);
      const range = Math.max(1, max-min);
      ctx.beginPath();
      values.forEach((v,i)=>{
        const x = (i/(values.length-1))* (w-20) + 10;
        const y = h - ((v-min)/range)*(h-30) - 10;
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      });
      ctx.strokeStyle = '#0891b2'; ctx.lineWidth=2; ctx.stroke();
      // fill gradient
      const grad = ctx.createLinearGradient(0,0,0,h);
      grad.addColorStop(0,'rgba(6,182,212,0.12)'); grad.addColorStop(1,'rgba(6,182,212,0)');
      ctx.lineTo(w-10,h); ctx.lineTo(10,h); ctx.closePath(); ctx.fillStyle=grad; ctx.fill();
    }

    let turbidity = [10,12,9,11,14,13,12,11,10,12,15,16];
    const canvas = document.getElementById('turbidityChart');
    function refresh(){
      drawSparkline(turbidity, canvas);
      const latest = turbidity[turbidity.length-1];
      const score = Math.min(100, Math.round(latest + (Math.random()*6)));
      document.getElementById('score').textContent = score;
      document.getElementById('updated').textContent = new Date().toLocaleTimeString();
    }
    refresh();

    document.getElementById('spike').addEventListener('click', ()=>{
      for(let i=0;i<3;i++){ turbidity.push(turbidity[turbidity.length-1] + 25 + Math.round(Math.random()*40)); }
      turbidity = turbidity.slice(-12);
      const alerts = document.getElementById('alerts');
      const li = document.createElement('li'); li.textContent = 'Turbidity spike detected — check well #2'; alerts.prepend(li);
      refresh();
    });

    document.getElementById('report').addEventListener('click', ()=>{
      const alerts = document.getElementById('alerts');
      const li = document.createElement('li'); li.textContent = '3 diarrhoea reports received from 2 households'; alerts.prepend(li);
      // slightly increase score
      turbidity.push((turbidity[turbidity.length-1]||12) + Math.round(Math.random()*6)); turbidity = turbidity.slice(-12);
      refresh();
    });

    document.getElementById('contact').addEventListener('submit', (e)=>{
      e.preventDefault();
      const msg = document.getElementById('formMsg');
      msg.textContent = 'Thanks — demo request noted (this is a static prototype).';
    });

    // Download HTML blob
    document.getElementById('download').addEventListener('click', ()=>{
      const blob = new Blob([document.documentElement.outerHTML], {type:'text/html'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'smart-community-health.html'; document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
    });