function Strings() {
    var language = "sv";
    var values = {
        sv: {
            'general/name': 'Med andra ord',
            'general/description': 'Beskriv ordet med andra ord',

            'rules/short/title': 'Reglerna i korthet',
            'rules/short/description': '1. Lagen förklarar och gissar i tur och ordning\n2. Varje ny omgång blir en ny spelkare i laget förklarare.',

            'game/ok': 'Korrekt',
            'game/pass': 'Pass',

            'misc/settings': 'Inställningar',
            'misc/help': 'Hjälp',
        },
    };

    return {
        getKey: function ( key ) {
            return values[ language ][ key ] || '???';
        }
    };
}

export { Strings };