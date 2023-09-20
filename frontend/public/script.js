const team = [
    {
		id: "22BDS",
        rank: 1,
        name: "Lewis Hamilton",
        handle: "lewishamilton",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png",
        points: 36,
    },
    {
		id: "23MIS",
        rank: 2,
        name: "Kimi Raikkonen",
        handle: "kimimatiasraikkonen",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col-retina/image.png",
        points: 31,
    },
    {
		id: "23BEE",
        rank: 3,
        name: "Sebastian Vettel",
        handle: "vettelofficial",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col-retina/image.png",
        points: 24,
    },
    {
		id: "22BEC",
        rank: 4,
        name: "Max Verstappen",
        handle: "maxverstappen1",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png",
        points: 22,
    },
    {
		id: "22BME",
        rank: 5,
        name: "Lando Norris",
        handle: "landonorris",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png",
        points: 18,
    },
    {
		id: "20BCI",
        rank: 6,
        name: "Charles Leclerc",
        handle: "charles_leclerc",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png",
        points: 16,
    },
    {
		id: "23BCE",
        rank: 7,
        name: "George Russell",
        handle: "georgerussell63",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png",
        points: 10,
    },
    {
		id: "20BCT",
        rank: 8,
        name: "Daniel Ricciardo",
        handle: "danielricciardo",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png",
        points: 7,
    },
    {
		id: "2BKT",
        rank: 9,
        name: "Alexander Albon",
        handle: "alex_albon",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col-retina/image.png",
        points: 4,
    },
    {
		id: "22BBS",
        rank: 10,
        name: "Carlos Sainz Jr.",
        handle: "carlossainz55",
        img: "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png",
        points: 1,
    },
];
const CURRENT_USER = "23MIS";
addDetails(team);


function addDetails(board) {
	board.forEach((member) => {
        let newRow = document.createElement("li");
        if (member.id === CURRENT_USER) {
            newRow.classList = "c-list__item highlight";
        } else {
            newRow.classList = "c-list__item";
        }
        newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a>@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-points">
				<div class="u-mt--8">
					<strong>${member.points}</strong>
				</div>
			</div>
		</div>
	`;
        if (member.rank === 1) {
            newRow.querySelector(".c-place").classList.add("u-text--dark");
            newRow.querySelector(".c-place").classList.add("u-bg--yellow");
            newRow.querySelector(".c-points").classList.add("u-text--yellow");
        } else if (member.rank === 2) {
            newRow.querySelector(".c-place").classList.add("u-text--dark");
            newRow.querySelector(".c-place").classList.add("u-bg--teal");
            newRow.querySelector(".c-points").classList.add("u-text--teal");
        } else if (member.rank === 3) {
            newRow.querySelector(".c-place").classList.add("u-text--dark");
            newRow.querySelector(".c-place").classList.add("u-bg--orange");
            newRow.querySelector(".c-points").classList.add("u-text--orange");
        }
        list.appendChild(newRow);
    });
}

