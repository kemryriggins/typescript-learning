function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = 'CO'; }
    console.log(street);
    if (streetTwo) {
        console.log(state);
    }
}
printAddress('710 Street');
printAddress('710 Gone Bye Bye Street', 'Suite 420');
printAddress('710 Gone Bye Bye Street', 'Suite 420', 'UT');
//# sourceMappingURL=016_function_args.js.map