// function printAddress(street: string, streetTwo?: string, state= 'CO') {
//	console.log(street);
//	if (streetTwo) {
//		console.log(streetTwo);
//	}
//	console.log(state);
// }
// printAddress('710 Street');
// printAddress('710 Gone Bye Bye Street', 'Suite 420');
// printAddress('710 Gone Bye Bye Street', 'Suite 420', 'UT');
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');
//# sourceMappingURL=016_function_args.js.map