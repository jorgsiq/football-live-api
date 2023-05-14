const getClubName = (name) => {
    switch (name.toLowerCase()) {
        //Grêmio
        case ("grêmio"):
        case ("gremio"):
            return "gremio";
        //Internacional
        case "internacional":
            return "internacional"
        //Guarany de Bagé
        case "guarany de bagé":
        case "guarany de bage":
        case "guarany bage":
        case "guarany-rs":
        case "guaranydebage":
            return "guarany-de-bage";
        //Bagé
        case "bagé":
        case "bagé-rs":
        case "bage-rs":
        case "bage":
            return "bage";
        //Caxias
        case "caxias":
        case "caxias-rs":
            return "caxias";
        //Juventude
        case "juventude":
        case "juventude-rs":
            return "juventude";
        //Pelotas
        case "pelotas":
        case "pelotas-rs":
            return "pelotas";
        //Brasil de Pelotas
        case "brasildepelotas":
        case "brasil de pelotas":
        case "brasil-rs":
            return "brasil-de-pelotas";
        //Ypiranga
        case "ypiranga":
        case "ypiranga-rs":
            return "ypiranga";
        //São José
        case "saojose":
        case "sao jose":
        case "sao jose-rs":
            return "sao-jose-rs";
        //Novo Hamburgo
        case "novohamburgo":
        case "novo hamburgo":
        case "novo hamburgo-rs":
            return "novo-hamburgo";
        //Avenida
        case "avenida":
        case "avenida-rs":
            return "avenida";
        //São Luiz
        case "saoluiz":
        case "são luiz":
        case "sao luiz":
        case "são luiz-rs":
        case "sao luiz-rs":
            return "sao-luiz-rs";
        //Esportivo
        case "esportivo":
        case "esportivo-rs":
            return "esportivo-rs";
        //Aimoré
        case "aimore":
        case "aimoré":
        case "aimoré-rs":
        case "aimore-rs":
            return "aimore";
        //Veranópolis
        case "veranópolis":
        case "veranopolis":
            return "veranopolis";
        //União Frederiquense
        case "uniaofrederiquense":
        case "uniao frederiquense-rs":
        case "união frederiquense-rs":
        case "uniao frederiquense":
        case "união frederiquense":
            return "uniao-frederiquense";
        //Monsoon
        case "monsoon":
        case "monsoon-rs":
            return "monsoon";
        //Glória
        case "gloria":
        case "glória":
        case "gloria-rs":
        case "glória-rs":
            return "gloria";
        //Passo Fundo
        case "passofundo":
        case "passo fundo":
        case "passo fundo-rs":
            return "passo-fundo";
        //Gaúcho
        case "gaucho":
        case "gaúcho":
        case "gaucho-rs":
        case "gaúcho-rs":
            return "gaucho";
        //Brasil de Farroupilha
        case "brasilfarroupilha":
        case "brasil de farroupilha-rs":
        case "brasildefarroupilha":
        case "brasil farroupilha-rs":
            return "brasil-farroupilha";
        //Tupi
        case "tupi":
        case "tupi-rs":
            return "tupi-rs";
        //Lajeadense
        case "lajeadense":
        case "lajeadense-rs":
            return "lajeadense";
        //Inter de Santa Maria
        case "intersantamaria":
        case "interdesantamaria":
        case "inter de santa maria":
        case "inter-sm":
        case "inter de santa maria-rs":
            return "inter-santa-maria";
        //Santa Cruz - RS
        case "santacruz":
        case "santa cruz-rs":
            return "santa-cruz-rs";
        //Guarani de Venâncio Aires
        case "guarani":
        case "guarani-va":
        case "guarani-rs":
            return "guarani-rs";
        //São Gabriel
        case "saogabriel":
        case "sao gabriel":
        case "sao gabriel rs":
            return "sao-gabriel";
        //Flamengo
        case "flamengo":
            return "flamengo";
        //Fluminense
        case "fluminense":
            return "fluminense";
        //Athletico
        case "athletico":
        case "athletico-pr":
        case "athletico paranaense":
            return "athletico-pr";
        //Corinthians
        case "corinthians":
            return "corinthians";
        //RB Bragantino
        case "bragantino":
        case "rbbragantino":
        case "rb bragantino":
        case "red bull bragantino":
        case "redbull bragantino":
            return "bragantino";
        //Botafogo
        case "botafogo":
            return "botafogo";
        //Vasco da Gama
        case "vasco":
        case "vascodagama":
        case "vasco da gama":
            return "vasco";
        //Palmeiras
        case "palmeiras":
            return "palmeiras";
        //Fortaleza
        case "fortaleza":
            return "fortaleza";
        //Atlético Mineiro
        case "atleticomg":
        case "atlético mineiro":
        case "atletico mineiro":
        case "atletico-mg":
        case "atlético-mg":
            return "atletico-mg";
        //Bahia
        case "bahia":
            return "bahia";
        //Cruzeiro
        case "cruzeiro":
            return "cruzeiro";
        //Cuiabá
        case "cuiaba":
        case "cuiabá":
            return "cuaiaba";
        //Santos
        case "santos":
            return "santos";
        //Goiás
        case "goias":
        case "goiás":
            return "goias";
        //Coritiba
        case "coritiba":
            return "coritiba";
        //América Mineiro
        case "americamg":
        case "américa-mg":
        case "america-mg":
        case "américa mineiro":
        case "america mineiro":
            return "america-mg";
        //São Paulo
        case "sao paulo":
        case "saopaulo":
        case "são paulo":
            return "sao-paulo";
        //Paris Saint German
        case "psg":
        case "parissaintgerman":
        case "paris saint german":
            return "psg";
        //Arsenal
        case "arsenal":
            return "arsenal";
        //Chelsea
        case "chelsea":
            return "chelsea";
        //Liverpool
        case "liverpool":
            return "liverpool";
        //Tottenham
        case "tottenham":
            return "tottenham";
        //Manchester United
        case "manchesterunited":
        case "manchester united":
            return "manchester-united";
        //Manchester City
        case "manchestercity":
        case "manchester city":
            return "manchester-city";
        //Bayern de Munique
        case "bayern munchen":
        case "bayernmunchen":
        case "bayern de munique":
        case "bayerndemunique":
            return "bayern-munchen";
        //Borussia Dortmund
        case "borussiadortmund":
        case "borussia dortmund":
            return "borussia-dortmund";
        //Napoli
        case "napoli":
            return "napoli";
        //Lazio
        case "lazio":
            return "lazio";
        //Roma
        case "roma":
            return "roma";
        //Milan
        case "milan":
            return "milan";
        //Juventus
        case "juventus":
            return "juventus";
        //Inter
        case "inter":
        case "internazionale":
        case "interdemilao":
        case "inter de milão":
        case "inter de milao":
            return "inter-de-milao";
        //Benfica
        case "benfica":
            return "benfica";
        //Sporting
        case "sporting":
            return "sporting";
        //Porto
        case "porto":
            return "porto";
        //Barcelona
        case "barcelona":
            return "barcelona";
        //Real Madrid
        case "realmadrid":
        case "real madrid":
            return "real-madrid";
        //Atletico de Madrid
        case "atleticomadrid":
        case "atleticodemadrid":
        case "atletico madrid":
        case "atletico de madrid":
            return "atletico-madrid";
        //River Plate
        case "riverplate":
        case "river plate":
            return "river-plate";
        //Racing
        case "racing":
            return "racing-club";
        //Estudiantes
        case "estudiantes":
            return "estudiantes";
        //Boca Juniors
        case "bocajuniors":
        case "boca juniors":
        case "boca":
            return "boca-juniors";
        //Independiente
        case "independiente":
            return "independiente";
        default:
            return "none";
    }
}

const getCompetitionName = (name) => {
    switch (name.toLowerCase()) {
        //Campeonato Gaúcho - Divisão de Acesso
        case "gauchoa2":
        case "divisão de acesso":
        case "gauchão divisão de acesso":
        case "gaúcho divisão de acesso":
        case "gaucho divisao de acesso":
        case "gaúcho a2":
        case "gaucho a2":
        case "gauchao a2":
        case "gauchão a2":
            return "gaucho-divisao-de-acesso";
        //Campeonato Gaúcho 
        case "gauchoa":
        case "gaucho":
        case "gauchao":
        case "gaúcho":
        case "gauchão":
        case "campeonato gaucho":
        case "campeonato gaúcho":
            return "campeonato-gaucho";
        //Copa do Brasil
        case "copadobrasil":
        case "copa do brasil":
            return "copa-do-brasil";
        //Campeonato Brasileiro - Brasileirão
        case "brasileiroa":
        case "campeonatobrasileiro":
        case "campeonato brasileiro":
        case "campeonato brasileiro serie a":
        case "campeonato brasileiro série a":
        case "brasileirão":
        case "brasileirão série a":
        case "brasileirao":
        case "brasileirao serie a":
            return "brasileirao-serie-a";
        //Copa Libertadores da América
        case "libertadores":
        case "copalibertadores":
        case "copa libertadores da américa":
        case "copa libertadores da america":
        case "libertadores da américa":
        case "libertadores da america":
        case "copa libertadores":
            return "copa-libertadores";
        //Copa Sul-Americana
        case "sulamericana":
        case "sudamericana":
        case "copa sul americana":
        case "copa sul-americana":
            return "copa-sul-americana";
        //Recopa Gaúcha
        case "recopagaucha":
        case "recopa gaucha":
        case "recopa gaúcha":
            return "recopa-gaucha";
        //Recopa Sul-Americana
        case "recopasulamericana":
        case "recopa sul americana":
        case "recopa sul-americana":
            return "recopa-sulamericana";
        //Cempeonato Paulista
        case "paulistaa":
        case "paulistao":
        case "paulista":
        case "paulistão":
        case "campeonato paulista":
            return "campeonato-paulista";
        //Campeonato Carioca
        case "cariocaa":
        case "cariocaa":
        case "cariocão":
        case "campeonato carioca":
            return "campeonato-carioca";
        //Copa do Nordeste
        case "copadonordeste":
        case "copa do nordeste":
        case "copa nordeste":
            return "copa-do-nordeste";
        //Copa São Paulo de Futebol Júnior
        case "copasaopaulo":
        case "copa são paulo":
        case "copa sao paulo":
            return "copa-sao-paulo";
        //Copa do Mundo da FIFA
        case "copadomundo":
        case "copa do mundo da fifa":
        case "copa do mundo":
            return "copa-do-mundo";
        //Mundial de Clubes da FIFA
        case "mundialdeclubes":
        case "mundial":
        case "mundial de clubes":
        case "mundial de clubes da fifa":
            return "mundial-clubes-fifa";
        //Champions League
        case "championsleague":
        case "champions league":
        case "uefa champions league":
        case "champions":
        case "liga dos campeões":
            return "champions-league";
        //Europe League
        case "euroleague":
        case "uefa europe league":
        case "europe league":
        case "euro league":
        case "europa league":
        case "uefa europa league":
        case "liga europa":
            return "uefa-europe-league";
        //Amistosos de Seleções
        case "amistososselecoes":
        case "amistosos de seleções":
            return "amistosos-selecoes";
        //Eliminatórias da Copa do Mundo - América do Sul
        case "eliminatoriasamerica":
        case "eliminatórias américa do sul":
        case "eliminatórias da copa - américa do sul":
            return "eliminatorias-da-copa-america-do-sul";
        //Copa América
        case "copaamerica":
        case "copa américa":
        case "copa america":
            return "copa-america";
        //Repescagem para Copa do Mundo
        case "repescagemcopa":
        case "repescagem copa do mundo":
        case "repescagem - copa do mundo":
        case "repescagem":
            return "eliminatorias-da-copa-repescagem";
        //Eliminatória da Copa do Mundo - Europa
        case "eliminatoriaseuropa":
        case "eliminatorias da copa europa":
        case "eliminatorias da copa - europa":
        case "eliminatorias da copa do mundo - europa":
            return "eliminatorias-da-copa-europa";
        //Eliminatórias da Eurocopa
        case "eliminatoriaseurocopa":
        case "eliminatórias euro":
        case "eliminatórias eurocopa":
            return "eurocopa-eliminatorias";
        //Eurocopa
        case "eurocopa":
        case "euro copa":
            return "eurocopa";
        //Jogos Olímpicos (futebol)
        case "jogosolimpicos":
        case "jogos olímpicos":
        case "olimpíadas":
            return "jogos-olimpicos";
        //Campeonato Argentino - Primera División
        case "argentino":
        case "primera división":
            return "campeonato-argentino";
        //Campeonato Italiano - Serie A
        case "italiano":
        case "campeonato italiano":
        case "serie a":
        case "serie a - italiano":
        case "liga italiana":
            return "campeonato-italiano";
        //Campeonato Inglês - Premier League
        case "ingles":
        case "campeonato inglês":
        case "liga inglesa":
        case "premier league":
            return "campeonato-ingles";
        //Campeonato Espanhol - La Liga
        case "espanhol":
        case "campeonato espanhol":
        case "liga espanhola":
        case "la liga":
            return "campeonato-espanhol";
        //Campeonato Português - Liga Portugal
        case "liga portugal":
        case "primeira liga":
        case "campeonato portugues":
        case "liga portuguesa":
        case "portugues":
            return "campeonato-portugues";
        //Campeonato Francês - Ligue 1
        case "campeonato francês":
        case "liga francesa":
        case "ligue 1":
        case "ligue1":
        case "frances":
            return "campeonato-frances";
        //Campeonato Alemão - Bundesliga
        case "campeonato alemão":
        case "bundesliga":
        case "alemao":
            return "campeonato-alemao";

        default:
            return "none";
    }
}

module.exports = {
    getClubName,
    getCompetitionName,
};