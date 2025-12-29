(function(){
  if (typeof Plotly === 'undefined') {
    const el = document.getElementById('plot');
    el.innerHTML = '<p style="padding:16px;color:#c00">Plotly 로드 실패</p>';
    return;
  }

  const data = [{
    x:[1,2,3,4,5],
    y:[10,15,13,18,20],
    mode:'markers',
    type:'scatter',
    marker:{ size:12 }
  }];

  const layout = {
    title:{ text:'가격상승률 vs 연평균 회전률', font:{ size:16 }},
    xaxis:{ title:'가격상승률(%)', automargin:true },
    yaxis:{ title:'연평균 회전률', automargin:true },
    autosize:true,
    margin:{ l:50, r:20, t:60, b:50 }
  };

  Plotly.newPlot('plot', data, layout, {
    responsive:true,
    displayModeBar:true,
    displaylogo:false
  });
})();