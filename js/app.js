window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body'),
        logo = body.querySelector('.top__logo-text a'),
        defaultLogoColor = '#00ADB5',
        navButtons = body.querySelector('.top__nav'),
        navRgbBtn = body.querySelector('.nav-rgb'),
        navHexBtn = body.querySelector('.nav-hex'),
        navHslBtn = body.querySelector('.nav-hsl'),
        hamburgerBtn = body.querySelector('.hamburger'),
        mobileMenu = body.querySelector('.mobile__nav'),
        mobRgbBtn = body.querySelector('.mob-rgb'),
        mobHexBtn = body.querySelector('.mob-hex'),
        mobHslBtn = body.querySelector('.mob-hsl'),
        input = body.querySelector('.content-block__header input'),
        allButtons = body.querySelectorAll('button'),
        mainButtons = body.querySelectorAll('.content-block__buttons button'),
        mainRgbBtn = body.querySelector('.main-rgb'),
        mainHexBtn = body.querySelector('.main-hex'),
        mainHslBtn = body.querySelector('.main-hsl'),
        copyImg = body.querySelector('.content-block img'),
        copyAlert = body.querySelector('.content-block__copy-alert'),
        warningAlert = body.querySelector('.content-block__warning-alert'),
        pickAlert = body.querySelector('.content-block__pick-alert ');

    const hexArray = [
        "#000000",
        "#0C090A",
        "#34282C",
        "#3B3131",
        "#3A3B3C",
        "#454545",
        "#413839",
        "#3D3C3A",
        "#463E3F",
        "#4C4646",
        "#504A4B",
        "#565051",
        "#52595D",
        "#5C5858",
        "#625D5D",
        "#666362",
        "#696969",
        "#686A6C",
        "#6D6968",
        "#726E6D",
        "#736F6E",
        "#757575",
        "#797979",
        "#837E7C",
        "#808080",
        "#848482",
        "#8D918D",
        "#A9A9A9",
        "#B6B6B4",
        "#C0C0C0",
        "#C9C0BB",
        "#D1D0CE",
        "#CECECE",
        "#D3D3D3",
        "#DADBDD",
        "#DCDCDC",
        "#E5E4E2",
        "#BCC6CC",
        "#98AFC7",
        "#838996",
        "#778899",
        "#708090",
        "#6D7B8D",
        "#657383",
        "#616D7E",
        "#646D7E",
        "#566D7E",
        "#737CA1",
        "#728FCE",
        "#4863A0",
        "#2B547E",
        "#36454F",
        "#29465B",
        "#2B3856",
        "#123456",
        "#151B54",
        "#191970",
        "#000080",
        "#151B8D",
        "#00008B",
        "#15317E",
        "#0000A0",
        "#0000A5",
        "#0020C2",
        "#0000CD",
        "#0041C2",
        "#2916F5",
        "#0000FF",
        "#0909FF",
        "#1F45FC",
        "#2554C7",
        "#1569C7",
        "#1974D2",
        "#2B60DE",
        "#4169E1",
        "#2B65EC",
        "#306EFF",
        "#157DEC",
        "#1589FF",
        "#1E90FF",
        "#368BC1",
        "#4682B4",
        "#488AC7",
        "#357EC7",
        "#3090C7",
        "#659EC7",
        "#87AFC7",
        "#95B9C7",
        "#6495ED",
        "#6698FF",
        "#56A5EC",
        "#38ACEC",
        "#00BFFF",
        "#3BB9FF",
        "#5CB3FF",
        "#79BAEC",
        "#82CAFF",
        "#87CEFA",
        "#87CEEB",
        "#A0CFEC",
        "#B7CEEC",
        "#B4CFEC",
        "#ADDFFF",
        "#C2DFFF",
        "#C6DEFF",
        "#BDEDFF",
        "#B0E0E6",
        "#AFDCEC",
        "#ADD8E6",
        "#B0CFDE",
        "#C9DFEC",
        "#D5D6EA",
        "#E3E4FA",
        "#DBE9FA",
        "#E6E6FA",
        "#EBF4FA",
        "#F0F8FF",
        "#F8F8FF",
        "#F0FFFF",
        "#E0FFFF",
        "#CCFFFF",
        "#9AFEFF",
        "#7DFDFE",
        "#57FEFF",
        "#00FFFF",
        "#0AFFFF",
        "#50EBEC",
        "#4EE2EC",
        "#16E2F5",
        "#8EEBEC",
        "#AFEEEE",
        "#CFECEC",
        "#81D8D0",
        "#77BFC7",
        "#92C7C7",
        "#78C7C7",
        "#7BCCB5",
        "#66CDAA",
        "#AAF0D1",
        "#7FFFD4",
        "#93FFE8",
        "#40E0D0",
        "#48D1CC",
        "#48CCCD",
        "#46C7C7",
        "#43C6DB",
        "#00CED1",
        "#43BFC7",
        "#20B2AA",
        "#3EA99F",
        "#5F9EA0",
        "#3B9C9C",
        "#008B8B",
        "#00827F",
        "#008080",
        "#045F5F",
        "#033E3E",
        "#25383C",
        "#2C3539",
        "#3C565B",
        "#4C787E",
        "#5E7D7E",
        "#307D7E",
        "#348781",
        "#438D80",
        "#4E8975",
        "#306754",
        "#2E8B57",
        "#31906E",
        "#00A36C",
        "#34A56F",
        "#50C878",
        "#3EB489",
        "#3CB371",
        "#7C9D8E",
        "#78866B",
        "#848B79",
        "#617C58",
        "#728C00",
        "#6B8E23",
        "#808000",
        "#556B2F",
        "#4E5B31",
        "#4B5320",
        "#667C26",
        "#4E9258",
        "#387C44",
        "#347235",
        "#347C2C",
        "#228B22",
        "#008000",
        "#006400",
        "#046307",
        "#355E3B",
        "#254117",
        "#437C17",
        "#347C17",
        "#6AA121",
        "#4AA02C",
        "#41A317",
        "#12AD2B",
        "#3EA055",
        "#73A16C",
        "#6CBB3C",
        "#6CC417",
        "#4CC417",
        "#32CD32",
        "#52D017",
        "#4CC552",
        "#54C571",
        "#99C68E",
        "#8FBC8F",
        "#89C35C",
        "#85BB65",
        "#9CB071",
        "#B0BF1A",
        "#B2C248",
        "#9DC209",
        "#A1C935",
        "#9ACD32",
        "#77DD77",
        "#7FE817",
        "#59E817",
        "#57E964",
        "#16F529",
        "#5EFB6E",
        "#36F57F",
        "#00FF7F",
        "#00FA9A",
        "#5FFB17",
        "#00FF00",
        "#7CFC00",
        "#66FF00",
        "#7FFF00",
        "#87F717",
        "#98F516",
        "#B1FB17",
        "#ADFF2F",
        "#BDF516",
        "#DAEE01",
        "#E2F516",
        "#CCFB5D",
        "#BCE954",
        "#64E986",
        "#90EE90",
        "#6AFB92",
        "#98FB98",
        "#98FF98",
        "#B5EAAA",
        "#E3F9A6",
        "#C3FDB8",
        "#DBF9DB",
        "#E8F1D4",
        "#F0FFF0",
        "#F5FFFA",
        "#FFFACD",
        "#FFFFC2",
        "#FFFFCC",
        "#FFFDD0",
        "#FAFAD2",
        "#FFFFE0",
        "#F5F5DC",
        "#FFF8DC",
        "#FBF6D9",
        "#F7E7CE",
        "#FAEBD7",
        "#FFEFD5",
        "#FFEBCD",
        "#FFE4C4",
        "#F5DEB3",
        "#FFE4B5",
        "#FFE5B4",
        "#FED8B1",
        "#FFDAB9",
        "#FFDEAD",
        "#FBE7A1",
        "#F3E3C3",
        "#F0E2B6",
        "#F1E5AC",
        "#F3E5AB",
        "#ECE5B6",
        "#E8E4C9",
        "#EEE8AA",
        "#F0E68C",
        "#EDDA74",
        "#EDE275",
        "#FFE87C",
        "#FFF380",
        "#FAF884",
        "#FFFF33",
        "#FFFF00",
        "#FFEF00",
        "#F5E216",
        "#FFDB58",
        "#FFDF00",
        "#F9DB24",
        "#FFD801",
        "#FFD700",
        "#FDD017",
        "#FFCE44",
        "#EAC117",
        "#F6BE00",
        "#F2BB66",
        "#FBB917",
        "#FDBD01",
        "#FBB117",
        "#FFAE42",
        "#FFA62F",
        "#FFA500",
        "#EE9A4D",
        "#F4A460",
        "#E2A76F",
        "#C19A6B",
        "#E6BF83",
        "#DEB887",
        "#D2B48C",
        "#C8AD7F",
        "#C2B280",
        "#BCB88A",
        "#C8B560",
        "#C9BE62",
        "#C9AE5D",
        "#BDB76B",
        "#BAB86C",
        "#B5A642",
        "#C7A317",
        "#D4AF37",
        "#E9AB17",
        "#E8A317",
        "#DAA520",
        "#D4A017",
        "#C68E17",
        "#B8860B",
        "#C58917",
        "#CD853F",
        "#CD7F32",
        "#C88141",
        "#B87333",
        "#AA6C39",
        "#AB784E",
        "#966F33",
        "#806517",
        "#665D1E",
        "#8E7618",
        "#8B8000",
        "#827839",
        "#8A865D",
        "#93917C",
        "#9F8C76",
        "#AF9B60",
        "#827B60",
        "#786D5F",
        "#483C32",
        "#493D26",
        "#513B1C",
        "#3D3635",
        "#3B2F2F",
        "#43302E",
        "#49413F",
        "#5C3317",
        "#654321",
        "#704214",
        "#804A00",
        "#6F4E37",
        "#835C3B",
        "#7F5217",
        "#7F462C",
        "#A0522D",
        "#8B4513",
        "#8A4117",
        "#7E3817",
        "#7E3517",
        "#954535",
        "#C34A2C",
        "#C04000",
        "#EB5406",
        "#C35817",
        "#B86500",
        "#B5651D",
        "#B76734",
        "#C36241",
        "#CB6D51",
        "#C47451",
        "#D2691E",
        "#CC6600",
        "#E56717",
        "#E66C2C",
        "#FF6700",
        "#FF5F1F",
        "#F87217",
        "#F88017",
        "#FF8C00",
        "#F87431",
        "#FF7722",
        "#E67451",
        "#FF8040",
        "#FF7F50",
        "#F88158",
        "#F9966B",
        "#FFA07A",
        "#E9967A",
        "#E78A61",
        "#DA8A67",
        "#FF8674",
        "#FA8072",
        "#F98B88",
        "#F08080",
        "#F67280",
        "#E77471",
        "#F75D59",
        "#E55451",
        "#CD5C5C",
        "#FF6347",
        "#E55B3C",
        "#FF4500",
        "#FF0000",
        "#FD1C03",
        "#FF2400",
        "#F62217",
        "#F70D1A",
        "#F62817",
        "#E42217",
        "#E41B17",
        "#DC381F",
        "#C24641",
        "#C11B17",
        "#B22222",
        "#B21807",
        "#A52A2A",
        "#A70D2A",
        "#9F000F",
        "#931314",
        "#990000",
        "#990012",
        "#8B0000",
        "#800000",
        "#8C001A",
        "#7E191B",
        "#800517",
        "#660000",
        "#551606",
        "#560319",
        "#3D0C02",
        "#3F000F",
        "#2B1B17",
        "#550A35",
        "#810541",
        "#7D0541",
        "#7D0552",
        "#872657",
        "#7E354D",
        "#7F4E52",
        "#7F525D",
        "#7F5A58",
        "#997070",
        "#B1907F",
        "#B38481",
        "#BC8F8F",
        "#C5908E",
        "#C48793",
        "#C48189",
        "#E799A3",
        "#D58A94",
        "#E8ADAA",
        "#C4AEAD",
        "#E6C7C2",
        "#ECC5C0",
        "#FFCBA4",
        "#F8B88B",
        "#EDC9AF",
        "#FFDDCA",
        "#FDD7E4",
        "#FFE6E8",
        "#FFE4E1",
        "#FFDFDD",
        "#FFCCCB",
        "#FBCFCD",
        "#FBBBB9",
        "#FFC0CB",
        "#FFB6C1",
        "#FAAFBE",
        "#FAAFBA",
        "#F9A7B0",
        "#FEA3AA",
        "#E7A1B0",
        "#E38AAE",
        "#F778A1",
        "#E56E94",
        "#DB7093",
        "#D16587",
        "#C25A7C",
        "#C25283",
        "#E75480",
        "#F660AB",
        "#FF69B4",
        "#FC6C85",
        "#F6358A",
        "#F52887",
        "#FF007F",
        "#FF1493",
        "#F535AA",
        "#FD349C",
        "#E45E9D",
        "#E759AC",
        "#E3319D",
        "#E4287C",
        "#FA2A55",
        "#E30B5D",
        "#DC143C",
        "#C32148",
        "#C21E56",
        "#C12869",
        "#C12267",
        "#CA226B",
        "#CC338B",
        "#C71585",
        "#C12283",
        "#B3446C",
        "#B93B8F",
        "#DA70D6",
        "#DF73D4",
        "#EE82EE",
        "#FF77FF",
        "#F433FF",
        "#FF00FF",
        "#E238EC",
        "#D462FF",
        "#C45AEC",
        "#BA55D3",
        "#A74AC7",
        "#B048B5",
        "#D291BC",
        "#915F6D",
        "#7E587E",
        "#614051",
        "#583759",
        "#5E5A80",
        "#4E5180",
        "#6A5ACD",
        "#6960EC",
        "#736AFF",
        "#7B68EE",
        "#7575CF",
        "#6667AB",
        "#6F2DA8",
        "#6C2DC7",
        "#6A0DAD",
        "#5453A6",
        "#483D8B",
        "#4E387E",
        "#571B7E",
        "#4B0150",
        "#36013F",
        "#461B7E",
        "#4B0082",
        "#342D7E",
        "#663399",
        "#6A287E",
        "#8B008B",
        "#800080",
        "#86608E",
        "#9932CC",
        "#9400D3",
        "#8D38C9",
        "#A23BEC",
        "#B041FF",
        "#842DCE",
        "#8A2BE2",
        "#7A5DC7",
        "#7F38EC",
        "#9D00FF",
        "#8E35EF",
        "#893BFF",
        "#967BB6",
        "#9370DB",
        "#8467D7",
        "#9172EC",
        "#9E7BFF",
        "#CCCCFF",
        "#DCD0FF",
        "#E0B0FF",
        "#D891EF",
        "#B666D2",
        "#C38EC7",
        "#C8A2C8",
        "#DDA0DD",
        "#E6A9EC",
        "#F2A2E8",
        "#F9B7FF",
        "#C6AEC7",
        "#D2B9D3",
        "#D8BFD8",
        "#DFD3E3",
        "#E9CFEC",
        "#FCDFFF",
        "#EBDDE2",
        "#E1D9D1",
        "#E9E4D4",
        "#EDE6D6",
        "#FAF0DD",
        "#F8F0E3",
        "#F8F6F0",
        "#F3E8EA",
        "#FFF0F5",
        "#FDEEF4",
        "#FFF9E3",
        "#FDF5E6",
        "#FAF0E6",
        "#FFF5EE",
        "#F9F6EE",
        "#FAF5EF",
        "#FFFAF0",
        "#FFFFF0",
        "#FFFFF4",
        "#FFFFF7",
        "#F5F5F5",
        "#FBFBF9",
        "#FFFAFA",
        "#FEFCFF",
        "#FFFFFF",
        "#FFFFFF",
        "#C0C0C0",
        "#808080",
        "#000000",
        "#FFA500",
        "#A52A2A",
        "#800000",
        "#008000",
        "#808000",
        "#7FFFD4",
        "#FF0000",
        "#00FFFF",
        "#0000FF",
        "#00008B",
        "#ADD8E6",
        "#800080",
        "#FFFF00",
        "#00FF00",
        "#FF00FF",
        "#FFC0CB",
    ];

    // Random colors logic FULLY DONE

    function getRandomRGBColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const randomColorElement = `rgb(${r}, ${g}, ${b})`;

        return randomColorElement;
    }

    function getRandomHslColor() {
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 101);
        const l = Math.floor(Math.random() * 101);

        const randomColorHslElement = `hsl(${h}, ${s}%, ${l}%)`;

        return randomColorHslElement;
    }

    function getRandomHexColor() {
        return Math.floor(Math.random() * hexArray.length);
    }

    // Random color generator FULLY DONE

    function generateRgbColor() {
        const rRgbNumber = getRandomRGBColor();

        input.value = `${rRgbNumber};`;
        input.style.color = rRgbNumber;
        input.style.textShadow = `0px 1px 2px ${rRgbNumber}`;
        body.style.backgroundColor = rRgbNumber;
    }

    function generateHexColor() {
        const randomHex = getRandomHexColor();
        const colorHex = hexArray[randomHex];

        input.value = `${colorHex};`;
        input.style.color = colorHex;
        body.style.backgroundColor = colorHex;
        input.style.textShadow = `0px 1px 2px ${colorHex}`;
    }

    function generateHslColor() {
        const rHsLNumber = getRandomHslColor();

        input.value = `${rHsLNumber};`;
        input.style.color = rHsLNumber;
        body.style.backgroundColor = rHsLNumber;

        input.style.textShadow = `0px 1px 2px ${rHsLNumber}`;
    }

    // Hamburger and Mobile menu functions
    
    function makeHambMobActive() {
        hamburgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    }

    // Alerts FULLY DONE

    function warningMessage() {
        warningAlert.classList.add('warning-alert__block');
        setTimeout(() => warningAlert.classList.remove('warning-alert__block'), 3000);
    }

    function formatPickedMessage(colorFormat) {
        pickAlert.innerText = `You picked ${colorFormat} format`;
        pickAlert.classList.add('pick-alert__block');
        setTimeout(() => pickAlert.classList.remove('pick-alert__block'), 3000);
    }

    // Appearance of buttons

    function rgbBtnAppearance() {
        mainHexBtn.style.display = 'none';
        mainHslBtn.style.display = 'none';
        mainRgbBtn.style.display = 'block';
        mainRgbBtn.innerText = 'Generate';
    }

    function hexBtnAppearance() {
        mainHslBtn.style.display = 'none';
        mainRgbBtn.style.display = 'none';
        mainHexBtn.style.display = 'block';
        mainHexBtn.innerText = 'Generate';
    }

    function hslBtnAppearance() {
        mainHexBtn.style.display = 'none';
        mainRgbBtn.style.display = 'none';
        mainHslBtn.style.display = 'block';
        mainHslBtn.innerText = 'Generate';
    }

    // Logo FULLY DONE

    logo.addEventListener('mouseenter', () => {
        const randomColor = getRandomRGBColor();
        logo.style.color = randomColor;
        logo.style.textShadow = `1px 1px 4px ${randomColor}`;
    });

    logo.addEventListener('mouseleave', () => {
        logo.style.color = defaultLogoColor;
        logo.style.textShadow = `1px 1px 4px ${defaultLogoColor}`;
    });

    // Nav menu

    navRgbBtn.addEventListener('click', () => {
        if (mainRgbBtn.style.display !== 'none') {
            warningMessage();
        } else {
            rgbBtnAppearance();
            generateRgbColor();
            formatPickedMessage('RGB');
        }
    });

    navHexBtn.addEventListener('click', () => {
        if (mainHexBtn.style.display !== 'none') {
            warningMessage();
        } else {
            hexBtnAppearance();
            generateHexColor();
            formatPickedMessage('HEX');
        }
    });

    navHslBtn.addEventListener('click', () => {
        if (mainHslBtn.style.display !== 'none') {
            warningMessage();
        } else {
            hslBtnAppearance();
            generateHslColor();
            formatPickedMessage('HSL');
        }
    });

    // Hamburger menu

    hamburgerBtn.addEventListener('click', function () {
        body.classList.toggle('overflow-hidden');
        hamburgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });

    mobRgbBtn.addEventListener('click', () => {
        if (mainRgbBtn.style.display !== 'none') {
            warningMessage();
        } else {
            rgbBtnAppearance();
            generateRgbColor();
            formatPickedMessage('RGB');
        }

        makeHambMobActive();
    });

    mobHexBtn.addEventListener('click', () => {
        if (mainHexBtn.style.display !== 'none') {
            warningMessage();
        } else {
            hexBtnAppearance();
            generateHexColor();
            formatPickedMessage('HEX');
        }

        makeHambMobActive();
    });

    mobHslBtn.addEventListener('click', () => {
        if (mainHslBtn.style.display !== 'none') {
            warningMessage();
        } else {
            hslBtnAppearance();
            generateHslColor();
            formatPickedMessage('HSL');
        }

        makeHambMobActive();
    });

    // Pick color format and hide other buttons

    mainRgbBtn.addEventListener('click', () => {
        generateRgbColor();
        rgbBtnAppearance();
        hamburgerBtn.classList.add('display-block');
    });

    mainHexBtn.addEventListener('click', () => {
        generateHexColor();
        hexBtnAppearance();
        hamburgerBtn.classList.add('display-block');
    });

    mainHslBtn.addEventListener('click', () => {
        generateHslColor();
        hslBtnAppearance();
        hamburgerBtn.classList.add('display-block');
    });

    // Generate buttons

    mainButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.classList.add('active'); // nav menu appears when you go to one of the pages
            navButtons.classList.add('fade');
        });
    });

    // Color copy section

    allButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            copyImg.classList.add('display-iB');
        });
    });

    copyImg.addEventListener('click', () => {
        input.select();
        input.setSelectionRange(0, input.length);
        const inputV = input.value;
        navigator.clipboard.writeText(inputV);
        copyAlert.classList.add('copy-alert__block'); // Copy alert message
        setTimeout(() => copyAlert.classList.remove('copy-alert__block'), 3000);
    });

    copyImg.addEventListener('mouseenter', () => {
        copyImg.setAttribute('src', '/img/copy-imgwhite.png');
    });
    copyImg.addEventListener('mouseleave', () => {
        copyImg.setAttribute('src', '/img/copy-img.png');
    });
});