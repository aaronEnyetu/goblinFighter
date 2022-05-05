export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');

    const nameEl = document.createElement('p');
    const faceEl = document.createElement('p');
    const hpEl = document.createElement('p');


    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    //use a weird "ternary" to set the face
    //if the goblin lives, do a imp emoji, else do a fire emoji

    faceEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }



    goblinEl.append(nameEl, faceEl, hpEl);
    return goblinEl;
}
