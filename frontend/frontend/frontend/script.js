const sampleOdds = [
  { match: "Team A vs Team B", melbet: 2.1, betpawa: 1.95 },
  { match: "Team C vs Team D", melbet: 1.4, betpawa: 3.6 },
  { match: "Team E vs Team F", melbet: 1.85, betpawa: 2.15 }
];

function checkArb(mel, bet) {
  const margin = (1 / mel) + (1 / bet);
  return margin < 1 ? ((1 - margin) * 100).toFixed(2) + "%" : "No";
}

const tbody = document.getElementById("arb-table");
sampleOdds.forEach(({ match, melbet, betpawa }) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${match}</td>
    <td>${melbet}</td>
    <td>${betpawa}</td>
    <td>${checkArb(melbet, betpawa)}</td>
  `;
  tbody.appendChild(row);
});
