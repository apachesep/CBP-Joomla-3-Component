/*----------------------------------------------------------------------------------|  www.giz.de  |----/
	Deutsche Gesellschaft für International Zusammenarbeit (GIZ) Gmb 
/-------------------------------------------------------------------------------------------------------/

	@version		3.3.4
	@build			20th February, 2016
	@created		15th June, 2012
	@package		Cost Benefit Projection
	@subpackage		help_document.js
	@author			Llewellyn van der Merwe <http://www.vdm.io>	
	@owner			Deutsche Gesellschaft für International Zusammenarbeit (GIZ) Gmb
	@copyright		Copyright (C) 2015. All Rights Reserved
	@license		GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html
	
/-------------------------------------------------------------------------------------------------------/
	Cost Benefit Projection Tool.
/------------------------------------------------------------------------------------------------------*/

// Some Global Values
jform_nAUNRuRYvC_required = false;
jform_AoScEjXMUe_required = false;
jform_FrqcCsFvQO_required = false;
jform_TguOTheFhI_required = false;

// Initial Script
jQuery(document).ready(function()
{
	var location_cMgRrgD = jQuery("#jform_location input[type='radio']:checked").val();
	cMgRrgD(location_cMgRrgD);

	var location_nhJbrdp = jQuery("#jform_location input[type='radio']:checked").val();
	nhJbrdp(location_nhJbrdp);

	var type_nAUNRuR = jQuery("#jform_type").val();
	nAUNRuR(type_nAUNRuR);

	var type_AoScEjX = jQuery("#jform_type").val();
	AoScEjX(type_AoScEjX);

	var type_FrqcCsF = jQuery("#jform_type").val();
	FrqcCsF(type_FrqcCsF);

	var target_TguOThe = jQuery("#jform_target input[type='radio']:checked").val();
	TguOThe(target_TguOThe);
});

// the cMgRrgD function
function cMgRrgD(location_cMgRrgD)
{
	// set the function logic
	if (location_cMgRrgD == 1)
	{
		jQuery('#jform_admin_view').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_admin_view').closest('.control-group').hide();
	}
}

// the nhJbrdp function
function nhJbrdp(location_nhJbrdp)
{
	// set the function logic
	if (location_nhJbrdp == 2)
	{
		jQuery('#jform_site_view').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_site_view').closest('.control-group').hide();
	}
}

// the nAUNRuR function
function nAUNRuR(type_nAUNRuR)
{
	if (isSet(type_nAUNRuR) && type_nAUNRuR.constructor !== Array)
	{
		var temp_nAUNRuR = type_nAUNRuR;
		var type_nAUNRuR = [];
		type_nAUNRuR.push(temp_nAUNRuR);
	}
	else if (!isSet(type_nAUNRuR))
	{
		var type_nAUNRuR = [];
	}
	var type = type_nAUNRuR.some(type_nAUNRuR_SomeFunc);


	// set this function logic
	if (type)
	{
		jQuery('#jform_url').closest('.control-group').show();
		if (jform_nAUNRuRYvC_required)
		{
			updateFieldRequired('url',0);
			jQuery('#jform_url').prop('required','required');
			jQuery('#jform_url').attr('aria-required',true);
			jQuery('#jform_url').addClass('required');
			jform_nAUNRuRYvC_required = false;
		}

	}
	else
	{
		jQuery('#jform_url').closest('.control-group').hide();
		if (!jform_nAUNRuRYvC_required)
		{
			updateFieldRequired('url',1);
			jQuery('#jform_url').removeAttr('required');
			jQuery('#jform_url').removeAttr('aria-required');
			jQuery('#jform_url').removeClass('required');
			jform_nAUNRuRYvC_required = true;
		}
	}
}

// the nAUNRuR Some function
function type_nAUNRuR_SomeFunc(type_nAUNRuR)
{
	// set the function logic
	if (type_nAUNRuR == 3)
	{
		return true;
	}
	return false;
}

// the AoScEjX function
function AoScEjX(type_AoScEjX)
{
	if (isSet(type_AoScEjX) && type_AoScEjX.constructor !== Array)
	{
		var temp_AoScEjX = type_AoScEjX;
		var type_AoScEjX = [];
		type_AoScEjX.push(temp_AoScEjX);
	}
	else if (!isSet(type_AoScEjX))
	{
		var type_AoScEjX = [];
	}
	var type = type_AoScEjX.some(type_AoScEjX_SomeFunc);


	// set this function logic
	if (type)
	{
		jQuery('#jform_article').closest('.control-group').show();
		if (jform_AoScEjXMUe_required)
		{
			updateFieldRequired('article',0);
			jQuery('#jform_article').prop('required','required');
			jQuery('#jform_article').attr('aria-required',true);
			jQuery('#jform_article').addClass('required');
			jform_AoScEjXMUe_required = false;
		}

	}
	else
	{
		jQuery('#jform_article').closest('.control-group').hide();
		if (!jform_AoScEjXMUe_required)
		{
			updateFieldRequired('article',1);
			jQuery('#jform_article').removeAttr('required');
			jQuery('#jform_article').removeAttr('aria-required');
			jQuery('#jform_article').removeClass('required');
			jform_AoScEjXMUe_required = true;
		}
	}
}

// the AoScEjX Some function
function type_AoScEjX_SomeFunc(type_AoScEjX)
{
	// set the function logic
	if (type_AoScEjX == 1)
	{
		return true;
	}
	return false;
}

// the FrqcCsF function
function FrqcCsF(type_FrqcCsF)
{
	if (isSet(type_FrqcCsF) && type_FrqcCsF.constructor !== Array)
	{
		var temp_FrqcCsF = type_FrqcCsF;
		var type_FrqcCsF = [];
		type_FrqcCsF.push(temp_FrqcCsF);
	}
	else if (!isSet(type_FrqcCsF))
	{
		var type_FrqcCsF = [];
	}
	var type = type_FrqcCsF.some(type_FrqcCsF_SomeFunc);


	// set this function logic
	if (type)
	{
		jQuery('#jform_content-lbl').closest('.control-group').show();
		if (jform_FrqcCsFvQO_required)
		{
			updateFieldRequired('content',0);
			jQuery('#jform_content').prop('required','required');
			jQuery('#jform_content').attr('aria-required',true);
			jQuery('#jform_content').addClass('required');
			jform_FrqcCsFvQO_required = false;
		}

	}
	else
	{
		jQuery('#jform_content-lbl').closest('.control-group').hide();
		if (!jform_FrqcCsFvQO_required)
		{
			updateFieldRequired('content',1);
			jQuery('#jform_content').removeAttr('required');
			jQuery('#jform_content').removeAttr('aria-required');
			jQuery('#jform_content').removeClass('required');
			jform_FrqcCsFvQO_required = true;
		}
	}
}

// the FrqcCsF Some function
function type_FrqcCsF_SomeFunc(type_FrqcCsF)
{
	// set the function logic
	if (type_FrqcCsF == 2)
	{
		return true;
	}
	return false;
}

// the TguOThe function
function TguOThe(target_TguOThe)
{
	// set the function logic
	if (target_TguOThe == 1)
	{
		jQuery('#jform_groups').closest('.control-group').show();
		if (jform_TguOTheFhI_required)
		{
			updateFieldRequired('groups',0);
			jQuery('#jform_groups').prop('required','required');
			jQuery('#jform_groups').attr('aria-required',true);
			jQuery('#jform_groups').addClass('required');
			jform_TguOTheFhI_required = false;
		}

	}
	else
	{
		jQuery('#jform_groups').closest('.control-group').hide();
		if (!jform_TguOTheFhI_required)
		{
			updateFieldRequired('groups',1);
			jQuery('#jform_groups').removeAttr('required');
			jQuery('#jform_groups').removeAttr('aria-required');
			jQuery('#jform_groups').removeClass('required');
			jform_TguOTheFhI_required = true;
		}
	}
}

// update required fields
function updateFieldRequired(name,status)
{
	var not_required = jQuery('#jform_not_required').val();

	if(status == 1)
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required+','+name;
		}
		else
		{
			not_required = ','+name;
		}
	}
	else
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required.replace(','+name,'');
		}
	}

	jQuery('#jform_not_required').val(not_required);
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
} 
