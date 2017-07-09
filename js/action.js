var drink = [{
        Name: "Surge",
        Amount: 16,
        Caffeine: 69,
        Image: "https://i5.walmartimages.com/asr/30e93dea-0453-4577-b9e2-914bbec9cee3_2.f3356144782f047ace4e6e64049533a0.jpeg?"
    },
    {
        Name: "Monster Engery",
        Amount: 16,
        Caffeine: 280,
        Image: "https://i5.walmartimages.com/asr/67d13f4f-07cb-45e1-856f-dfa777e58dec_2.b7410fc774e5c4bbb282b722039f52e8.png?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
    },
    {
        Name: "Dr Pepper",
        Amount: 12,
        Caffeine: 41,
        Image: "https://i5.walmartimages.com/asr/401aa80d-51fe-4ce3-bd20-0d464dee9b3a_1.19f858aeafc8573590179c137f444fc7.jpeg?"
    },
    {
        Name: "Mountain Zevia",
        Amount: 12,
        Caffeine: 55,
        Image: "https://i5.walmartimages.com/asr/052ca4ce-6e92-4a78-b9d0-ce0efbccd1e3_1.efc31ad1c5cb7ac98a67f349c42f67d0.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"
    },
    {
        Name: "Mountain Dew",
        Amount: 12,
        Caffeine: 54
    },
    {
        Name: "Diet Coke",
        Amount: 12,
        Caffeine: 46
    },
    {
        Name: "Sunkist",
        Amount: 12,
        Caffeine: 41,
        Image: "https://i5.walmartimages.com/asr/85e7df4d-a9e7-4a12-96d0-928150ea7729_1.7eb9b18083ffea527470af3424c990f6.jpeg?"
    },
    {
        Name: "Pepsi",
        Amount: 12,
        Caffeine: 38,
        Image: "https://i5.walmartimages.com/asr/30a77671-d4c5-4b68-98ec-82cd765607e9_1.06c0bc6c9a30835e24447ecbc9bd7a6a.jpeg?"
    },
    {
        Name: "Pepsi True",
        Amount: 12,
        Caffeine: 38
    },
    {
        Name: "Coca-Cola",
        Amount: 12,
        Caffeine: 34,
        Image: "https://i5.walmartimages.com/asr/5685ebb7-2dcb-4f1d-9536-8f6138b5e593_2.6806519262065557443234385e612be8.jpeg?"
    },
    {
        Name: "Coke Zero",
        Amount: 12,
        Caffeine: 34
    },
    {
        Name: "Diet Pepsi",
        Amount: 12,
        Caffeine: 34
    },
    {
        Name: "Coca-Cola Life",
        Amount: 12,
        Caffeine: 28
    },
    {
        Name: "Sprite",
        Amount: 12,
        Caffeine: 0,
        Image: "https://i5.walmartimages.com/asr/11bc7d40-dfc5-4246-b001-37ad59d83ac3_1.3df259f33f03bf568d46230d9dc50be8.jpeg?"
    }
];



var drinkSelector = document.getElementById("drink-selector"),
    drinkName = document.getElementById("drink-name"),
    drinkImage = document.getElementById("drink-image"),
    caffeine = document.getElementById("caffeine-amount"),
    detailsHolder = document.getElementById("details-holder"),
    currentPercent;


$("#search-btn").click(function () {

    var image = "",
        amount = 0;

    (function find() {
        drink.forEach(function (element) {
            if (element.Name === drinkSelector.value) {
                image = element.Image;
                amount = element.Caffeine;
                return;
            }
        })
    })();


    var meterBar = document.getElementById("meter-bar");

    if (amount < 80) {
        meterBar.style.backgroundColor = "#5cb85c";
    } else if (amount > 80 && amount < 120) {
        meterBar.style.backgroundColor = "#f0ad4e";
    } else if (amount > 120) {
        meterBar.style.backgroundColor = "#d9534f";
    }


    $("#meter-bar").animate({
        width: ((amount / 300) * 100) + "%"
    }, 1250);

    drinkName.innerText = drinkSelector.value;
    caffeine.innerText = amount + " mg";
    drinkImage.src = image;
    detailsHolder.classList.remove("hidden");
})