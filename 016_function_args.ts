// function printAddress(street: string, streetTwo?: string, state= 'CO') {
//	console.log(street);
//	if (streetTwo) {
//		console.log(streetTwo);
//	}
//	console.log(state);
// }

// printAddress('710 Street');
// printAddress('710 Gone Street', 'Suite 420');
// printAddress('710 Gone Street', 'Suite 420', 'UT');

function lineupCard(team: string, ...players: string[]) {
	console.log('Team: ' + team);
	for (let player of players) {
		console.log(player);
	}
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');