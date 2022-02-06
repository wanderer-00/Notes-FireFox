// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷
const cluster = document.getElementById('cluster');
let hp = [];

function SSS(){
    if (1==1) { return 1 } else { return 0 };
};


const load = async () => {
    try {
        const res = await fetch('URLs.json');
        hp = await res.json();
        console.log(hp);
        //console.log("img = ", hp[5]['img']);
        displayCharacters(hp);
    } catch (err) {
        //console.error(err);
        console.log('ERROR');
    }
};

const displayCharacters = (characters) => {
    $(function() {
        var link = "https://www.pandoge.com"; // Ссылка на сайт
		$("#result").html('<img src="https://www.google.com/s2/favicons?domain='+link+'" alt="favicon">');

	});
    const htmlString = characters.map((character) => {
        return`
        <a href='${character.URL}'>
            <div class="box">
                <div style='background: url(ICONs/${character.ICON}) 0 0 /100% no-repeat' class='icon'></div>
                <div class='title'>COUB</div>
            </div>
        </a>\n`
        ;
        }).join('');
    console.log(htmlString);
    cluster.innerHTML = htmlString;
};

load();

// автофавикон
//https://www.pandoge.com/moduli-i-skripty/kak-poluchit-favicon-sayta-po-ego-url-na-php-jquery