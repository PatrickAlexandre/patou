function calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const today = new Date();
    const diffTime = today - birth;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const days = diffDays % 365;
    return { years, days };
}

function fetchLifeExpectancy(sex, country = "FRA") {
    const indicator = sex === 'male' ? 'SP.DYN.LE00.MA.IN' : 'SP.DYN.LE00.FE.IN';
    const apiUrl = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&date=2022`;

    return $.getJSON(apiUrl).then(data => {
        if (data && data[1] && data[1][0] && data[1][0].value) {
            return data[1][0].value;
        } else {
            console.error("❌ Erreur lors de la récupération de l'espérance de vie depuis l'API.");
            return sex === "male" ? 0 : 0;
        }
    });
}

function calculateBMI(weight, heightM) {
    return (weight / (heightM * heightM)).toFixed(2);
}

function calculateIdealWeight(heightM, sex) {
    return ((sex === "male" ? 22 : 21) * (heightM * heightM)).toFixed(2);
}

function calculateBMR(weight, height, age, sex) {
    return sex === "male" 
        ? (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2)
        : (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(2);
}

function calculateTDEE(bmr, nap) {
    return (bmr * nap).toFixed(2);
}

function updateHealthMetrics(profile) {
    const heightM = profile.height / 100;
    const age = calculateAge(profile.birthdate);
    const lifeExpectancy = profile.lifeExpectancy;
    const remainingLife = (lifeExpectancy - age.years).toFixed(0);
    const bmi = calculateBMI(profile.weight, heightM);
    const idealWeight = calculateIdealWeight(heightM, profile.sex);
    const bmr = calculateBMR(profile.weight, profile.height, age.years, profile.sex);
    const tdee = calculateTDEE(bmr, profile.nap);
    const weightDifference = (profile.weight - idealWeight).toFixed(1);
    const lifePercentageRemaining = ((remainingLife / lifeExpectancy) * 100).toFixed(1);

    $('#profile-info').text(`${profile.name}, ${age.years} ans et ${age.days} jours`);
    $('#bmi').text(bmi);
    $('#ideal-weight').text(idealWeight);
    $('#weight-difference').text(weightDifference > 0 ? `+${weightDifference} kg excédentaires` : `${Math.abs(weightDifference)} kg manquants`);
    $('#bmr').text(bmr);
    $('#tdee').text(tdee);
    $('#life-expectancy').text(remainingLife);
    $('#life-expectancy-progress').css('width', `${lifePercentageRemaining}%`);
    $('#progress-text').text(`${lifePercentageRemaining}%`);
    updateProgressColor(lifePercentageRemaining);
}

function updateProgressColor(lifePercentageRemaining) {
    const progressBar = $('#life-expectancy-progress');
    progressBar.removeClass('bg-green-500 bg-yellow-500 bg-red-600');
    if (lifePercentageRemaining < 25) {
        progressBar.addClass('bg-red-600');
    } else if (lifePercentageRemaining < 50) {
        progressBar.addClass('bg-yellow-500');
    } else {
        progressBar.addClass('bg-green-500');
    }
}

async function saveProfile() {
    const profile = {
        name: $('#name').val(),
        birthdate: $('#birthdate').val(),
        sex: $('#sex').val(),
        height: parseFloat($('#height').val()),
        weight: parseFloat($('#weight').val()),
        nap: parseFloat($('#nap').val())
    };
    profile.lifeExpectancy = await fetchLifeExpectancy(profile.sex);
    localStorage.setItem('profile', JSON.stringify(profile));
    updateHealthMetrics(profile);
}

function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    if (profile) {
        $('#name').val(profile.name);
        $('#birthdate').val(profile.birthdate);
        $('#sex').val(profile.sex);
        $('#height').val(profile.height);
        $('#weight').val(profile.weight);
        $('#nap').val(profile.nap);
        updateHealthMetrics(profile);
    }
}

$(document).ready(function() {
    loadProfile();
    $('#save-profile').click(saveProfile);
    $('#nav-health').click(function() { $('#health-section').show(); $('#finance-section, #profile-section').hide(); });
    $('#nav-finance').click(function() { $('#finance-section').show(); $('#health-section, #profile-section').hide(); });
    $('#nav-profile').click(function() { $('#profile-section').show(); $('#health-section, #finance-section').hide(); });
});
