function arrays() {
    const colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];

    let totsMenorsQueMarro = colors.every(function(color) {
        return color < 'marró';
    });
    document.write("Tots els colors són menors que 'marró': " + totsMenorsQueMarro + "<br>");

    let colorsMenorsQueMarro = colors.filter(function(color) {
        return color < 'marró';
    });
    document.write("Colors menors que 'marró': " + colorsMenorsQueMarro + "<br>");

    let darrers2Colors = colors.slice(-2);
    document.write("Darrers 2 colors: " + darrers2Colors + "<br>");

    colors.push('turquesa');
    document.write("Array amb 'turquesa' afegit: " + colors + "<br>");

    let indexVerd = colors.indexOf('verd');
    if (indexVerd !== -1) {
        colors.splice(indexVerd, 1);
    }
    document.write("Array amb 'verd' eliminat: " + colors + "<br>");
}