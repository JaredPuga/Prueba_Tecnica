export const returnElement = (elemnt) => {

    var e = ''

    switch (elemnt) {
        case 'grass':
            e = '🍃';
            break;
        case 'water':
            e = '💧'
            break;
        case 'fire':
            e = '🔥'
            break;
        case 'dragon':
            e = '🐉'
            break;
        case 'ghost':
            e = '👻'
            break;
        case 'bug':
            e = '🐛'
            break;
        case 'electric':
            e = '⚡'
            break;
        case 'fighting':
            e = '💪'
            break;
        case 'psychic':
            e = '🧠'
            break;
        default:
            break;
    }
    return e
}