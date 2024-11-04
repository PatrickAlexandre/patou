// init.js

import { saveProfile, loadProfile } from './profileManager.js';

// 🔄 INITIALISATION ET ÉCOUTEURS
$(document).ready(function() {
	loadProfile();
	$('#save-profile').click(saveProfile);
	$('#nav-health').click(function() { $('#health-section').show(); $('#finance-section, #profile-section').hide(); });
	$('#nav-finance').click(function() { $('#finance-section').show(); $('#health-section, #profile-section').hide(); });
	$('#nav-profile').click(function() { $('#profile-section').show(); $('#health-section, #finance-section').hide(); });
});
