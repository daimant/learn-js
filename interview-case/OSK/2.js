const tickets = [
  { from: 'London', to: 'Moscow' },
  { from: 'NY', to: 'London' },
  { from: 'Moscow', to: 'SPb' },
];

const makeRoute = tickets => {
  const endPoints = new Set(tickets.map(el => el.to));
  let currTicket;
  let result = '';

  for (let ticket in tickets) {
    if (!endPoints.has(tickets[ticket].from)) {
      currTicket = tickets[ticket];
      break;
    }
  }

  return tickets
    .sort((a, b) => a.to === b.from ? 1 : a.to !== b.from ? 1 : 0);


  // result += `${currTicket.from} - ${currTicket.to}; `;
  //
  // for (let i = 1; i < tickets.length; i++) {
  //   for (let j in tickets) {
  //     if (tickets[j].from === currTicket.to) {
  //       currTicket = tickets[j];
  //       result += `${currTicket.from} - ${currTicket.to}; `;
  //     }
  //   }
  // }
  // return result;
};

console.log(makeRoute(tickets));