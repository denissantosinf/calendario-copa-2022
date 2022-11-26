function createGame(player1, hour, player2, statistic ) {
  return `
  <li>
    <a target="_blank" href="${statistic}" title="ver estatistica">
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </a>
  </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}
  </ul>
  </div>
`
}

document.querySelector("#cards").innerHTML =

    createCard("20/11", "domingo", createGame("catar", "13:00", "equador", "https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400128082?competitionEntryId=17" )) + 
    
    createCard("21/11", "segunda", createGame("inglaterra", "10:00", "iran", "https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235458") + createGame("senegal", "10:00", "holanda", "https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235449") + createGame("estadosunidos", '16:00', "gales", "https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235455" )) +

    createCard("22/11", "terca", createGame('argentina', '07:00', 'arabiasaudita', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235461') + createGame('dinamarca', '10:00', 'tunisia', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235466') + createGame('mexico', '13:00', 'polonia', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235463') + createGame('frança', '16:00', 'australia', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235470')) +

    createCard("23/11", "quarta", createGame('marrocos', '07:00', 'croacia', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235481') + createGame('alemanha', '10:00', 'japão', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235476') + createGame('espanha', '13:00', 'costarica', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235472') + createGame('belgica', '16:00', 'canada', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235477')) +

    createCard("24/11", "quinta", createGame('suiça', '07:00', 'camarões', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235488') + createGame('uruguai', '10:00', 'coreiadosul', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235491') + createGame('portugal', '13:00', 'gana', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235493') + createGame('brasil', '16:00', 'serbia', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235484')) +

    createCard("25/11", "sexta", createGame('gales', '07:00', 'iran', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235453') + createGame('catar', '10:00', 'senegal', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235448') + createGame('holanda', '13:00', 'equador', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235452') + createGame('estadosunidos', '16:00', 'inglaterra', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235457')) +

    createCard("26/11", "sabado", createGame('tunisia', '07:00', 'australia', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235469') + createGame('polonia', '10:00', 'arabiasaudita', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235459') + createGame('frança', '13:00', 'dinamarca', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235467') + createGame('argentina', '16:00', 'mexico', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235462')) +

    createCard("27/11", "domindo", createGame('japão', '07:00', 'costarica', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235471') + createGame('belgica', '10:00', 'marrocos', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235480') + createGame('croacia', '13:00', 'canada', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235482') + createGame('espanha', '16:00', 'alemanha', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235474')) +

    createCard("28/11", "segunda", createGame('camarões', '07:00', 'serbia', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235487') + createGame('coreiadosul', '10:00', 'gana', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235489') + createGame('brasil', '13:00', 'suiça', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235485') + createGame('portugal', '16:00', 'uruguai', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235492')) +

    createCard("29/11", "terça", createGame('equador', '12:00', 'senegal', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235451') + createGame('holanda', '12:00', 'catar', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235450') + createGame('iran', '16:00', 'estadosunidos', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235456') + createGame('gales', '16:00', 'inglaterra', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235454')) +

    createCard("30/11", "quarta", createGame('tunisia', '12:00', 'frança', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235465') + createGame('australia', '12:00', 'dinamarca', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235468') + createGame('polonia', '16:00', 'argentina', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235464') + createGame('arabiasaudita', '16:00', 'mexico', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235460')) +

    createCard("01/12", "quinta", createGame('croacia', '12:00', 'belgica', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235478') + createGame('canada', '12:00', 'marrocos', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235479') + createGame('japão', '16:00', 'espanha', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235475') + createGame('costarica', '16:00', 'alemanha', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235473')) +

    createCard("02/12", "sexta", createGame('coreiadosul', '12:00', 'portugal', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235490') + createGame('gana', '12:00', 'uruguai', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235494') + createGame('serbia', '16:00', 'suiça', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235486') + createGame('camarões', '16:00', 'brasil', 'https://www.fifa.com/fifaplus/pt/match-centre/match/17/255711/285063/400235483')) 
     