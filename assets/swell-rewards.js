$(document).ready(function() {

    $("body").on("click", ".close-thank-you", function(){
      $(".swell-post-checkout-hair").remove();
    });

  $(document).on("swell:setup", function() {
    $('.swell-referral-loader').remove();
    $(".swell-post-checkout-hair").css("display","flex");
    Swell.Campaign.initializeCampaigns(".campaigns", SwellConfig.Campaign.opts);
    SwellConfig.Campaign.custom_campaigns();
    SwellConfig.Referral.initializeReferral(".swell-referral");
    SwellConfig.Tier.sortTiers(spapi.activeVipTiers);
    SwellConfig.Tier.initializeCustomTierProperties();
    SwellConfig.Tier.initializeTiers(".vip-tier-holder");
    SwellConfig.Tier.setupStatus('.vip-tier-holder');

  });

  $("body").on("click",".news-letter-campaign",function(){
    if(spapi.authenticated){
      spapi.refreshCustomerDetails();
      var awarded = true;
      $.each(spapi.customer.perks, function(index, perk) {
        if(perk.campaign_id == 492595){
          awarded = false;
        }
      });
      if(awarded == true)
      {
        swellAPI.showPopupByType("EmailCapturePopup");
      }
    }
  });

  $(document).on("swell:referral:success", function() {
    if($('.swell-checkout-thanks').length > 0){
      $('.swell-checkout-thanks').hide();
    }
    SwellConfig.Referral.populateReferrals();
  });

  $(document).on("swell:referral:error", function(jqXHR, textStatus, errorThrown) {
    let emails = $("#swell-referral-refer-emails").val();
    $(".refer-customer-error").remove();
    if (emails.indexOf(spapi.customer.email) > -1 ) {
      $("<p class=\"refer-customer-error\">Email address is already associated with an account.</p>").insertBefore($("#swell-referral-refer-emails").parent().parent());;
      $("#swell-referral-refer-emails").addClass("error-border");
    }else if(textStatus && textStatus === "Please enter a valid email address"){
      $('<p class=\"refer-customer-error\">Please enter a valid email addresses.</p>').insertBefore($("#swell-referral-refer-emails").parent().parent());
      $("#swell-referral-refer-emails").parent().parent().addClass("error-border");
    } else if(textStatus && textStatus === "EMAILS_ALREADY_PURCHASED"){
      $('<p class=\"refer-customer-error\">Oops, looks like we already know that person. Try another friend\'s email address!</p>').insertBefore($("#swell-referral-refer-emails").parent().parent());
      $("#swell-referral-refer-emails").parent().parent().addClass("error-border");
    }
  });

});

(function() {
  window.SwellConfig = window.SwellConfig || {};
  SwellConfig.Campaign = {
    opts: {
      templates: {
        campaign: "<li class='swell-campaign'><div class='swell-campaign-content swell-campaign-link' data-display-mode='modal' data-campaign-id='<%= campaign.id %>'><div class='swell-campaign-icon'><span class='swell-campaign-icon-content'><i class='swell-icon <%= campaign.icon %>'></i></span></div><div class='swell-campaign-value'><span class='swell-campaign-value-content'><%= campaign.reward_text %></span></div><div class='swell-campaign-type'><span class='swell-campaign-type-content'><%= campaign.title %></span></div></div></li>"
      }
    },
    custom_campaigns: function() {
      $(".swell-campaign .swell-campaign-content[data-campaign-id='514562']").parent().remove();
      $(".swell-campaign .swell-campaign-content[data-campaign-id='514563']").parent().remove();
      $(".campaigns .swell-campaign:nth-child(4)").after("<li class='swell-campaign news-letter-campaign'> <div class='swell-campaign-content'> <div class='swell-campaign-icon'> <span class='swell-campaign-icon-content'><i class='swell-icon-newsletter-sign-up'></i></span> </div> <div class='swell-campaign-detail-holder'> <div class='swell-campaign-value'> <span class='swell-campaign-value-content'>50 POINTS</span> </div> <div class='swell-campaign-type'> <span class='swell-campaign-type-content'>Sign-up for Newsletter</span> </div> </div> </div> </li>");
      $(".campaigns").append("<li class='swell-campaign last-campaign'> <div class='swell-campaign-content'> <div class='swell-campaign-value'><span class='swell-campaign-value-content'>Start earning</span></div> <div class='swell-campaign-type'><span class='swell-campaign-type-content'><a href='/account/register' class='swell-campaign-sign-up'>Sign up now</a><a href='/collections' class='swell-campaign-shop-now'>Shop now</a></span></div> </div> </li>");      
    }
  };
}).call(this);

(function() {
  window.SwellConfig = window.SwellConfig || {};
  SwellConfig.Tier = {
    sortTiers:function(tiers){
      if(tiers[0].rank!= 0){
        while(tiers[0].rank!= 0){
          temp = tiers.pop();
          tiers.unshift(temp);
        }
      }
    },
    getTierById : function(id) {
      var tiers;
      tiers = spapi.activeVipTiers;
      return $.grep(tiers, function(e) {
        return e.id === id;
      })[0];
    },
    getTierByRank: function(rank) {
      var tiers;
      tiers = spapi.activeVipTiers;
      return $.grep(tiers, function(e) {
        return e.rank === rank;
      })[0];
    },
    initializeCustomTierProperties: function() {
      var tiers = spapi.activeVipTiers;
        Tier_0 = SwellConfig.Tier.getTierByRank(0);
        Tier_1 = SwellConfig.Tier.getTierByRank(1);
        Tier_2 = SwellConfig.Tier.getTierByRank(2);

      if(Tier_0){
        if(Tier_1){
          Tier_0.spend = "Qualifying Amount: <br>$0-$"+((Tier_1.amount_spent_cents/100)-1); 
        }else{
          Tier_0.spend = "Qualifying Amount: <br>$"+(Tier_0.amount_spent_cents/100)+"+"; 
        }
        Tier_0.redeemable_vouchers = '<i class="swell-icon-girl"></i>'; 
        Tier_0.free_shipping = '<i class="swell-icon-girl"></i>';
        Tier_0.exchanges_returns = '<i class="swell-icon-girl"></i>';
        Tier_0.early_access_to_sales = ''; 
        Tier_0.free_express_shipping = ''; 
        Tier_0.icon = '<i class="swell-icon-girl"></i>'; 
        Tier_0.class = 'tier_0'; 
      }
      if(Tier_1){
        if(Tier_2){
          Tier_1.spend = "Qualifying Amount: <br>$"+(Tier_1.amount_spent_cents/100)+"-$"+((Tier_2.amount_spent_cents/100)-1); 
        }else{
          Tier_1.spend = "Qualifying Amount: <br>$"+(Tier_1.amount_spent_cents/100)+"+"; 
        }
        Tier_1.redeemable_vouchers = '<i class="swell-icon-insider"></i>'; 
        Tier_1.free_shipping = '<i class="swell-icon-insider"></i>';
        Tier_1.exchanges_returns = '<i class="swell-icon-insider"></i>';
        Tier_1.early_access_to_sales = '<i class="swell-icon-insider"></i>'; 
        Tier_1.free_express_shipping = ''; 
        Tier_1.icon = '<i class="swell-icon-insider"></i>'; 
        Tier_1.class = 'tier_1'; 
      }
      if(Tier_2){
        Tier_2.spend = "Qualifying Amount: <br>$"+(Tier_2.amount_spent_cents/100)+"+"; 
        Tier_2.redeemable_vouchers = '<i class="swell-icon-vip"></i>'; 
        Tier_2.free_shipping = '<i class="swell-icon-vip"></i>';
        Tier_2.exchanges_returns = '<i class="swell-icon-vip"></i>';
        Tier_2.early_access_to_sales = '<i class="swell-icon-vip"></i>'; 
        Tier_2.free_express_shipping = '<i class="swell-icon-vip"></i>'; 
        Tier_2.icon = '<i class="swell-icon-vip"></i>'; 
        Tier_2.class = 'tier_2'; 
      }
    },
    initializeTiers: function(containerSelector) {
      var i, j, key, properties, property, ref, ref1, tiers;
      if ($(containerSelector).length === 0) {
        return "";
      }
      tiers = spapi.activeVipTiers;
      properties = {
        body: {
          redeemable_vouchers: {
            title: "Tiered Birthday Bonus <br>(500, 750, and 1000 points)"
          },
          free_shipping: {
            title: "Tiered Points Per Dollar <br>(x1, x1.25, and 1.5)"
          },
          exchanges_returns: {
            title: "FREE 60-day Exchanges (US)"
          },
          early_access_to_sales: {
            title: "60-day Returns (US)"
          },
          free_express_shipping: {
            title: "FREE express shipping (US)"
          }
        }
      };
      tiers.forEach(function(tier) {
        $(containerSelector).find(".vip-tier-head").append('<li data-tier-id="' + tier.id + '"> <div class="tier-icon">' + tier.icon + '</div> <div class="text-holder"> <h3 class="tier-name">' + tier.name + '</h3> <p class="tier-value">' + tier.spend + '</p> </div> </li>');
      });
      i = 0;
      ref1 = properties.body;
      for (key in ref1) {
        property = ref1[key];
        $(containerSelector).find(".vip-tier-body").append('<li> <div class="tier-property-icons"></div> <p class="tier-property-value">' + property.title + '</p> </li>');
        tiers.forEach(function(tier) {
          return $(containerSelector).find(".vip-tier-body li:eq(" + i + ") .tier-property-icons").append((tier[key].length>0)?('<div class="icon" data-tier-id="' + tier.id + '">' + tier[key] + '</div>'):'');
        });
        i++;
      }
    },
    setupStatus: function(containerSelector){
      if(spapi.authenticated){
        tiers = spapi.activeVipTiers;

        if(spapi.customer.vip_tier){
          current_tier = SwellConfig.Tier.getTierById(spapi.customer.vip_tier.id);
          $(containerSelector).addClass(current_tier.class);
          $(containerSelector).find('.vip-tier-head li[data-tier-id="'+spapi.customer.vip_tier.id+'"]').addClass("swell-active");
          $(containerSelector).find('.vip-tier-body li .tier-property-icons .icon[data-tier-id="'+spapi.customer.vip_tier.id+'"]').addClass("swell-active");
        }else{
          next_tier = SwellConfig.Tier.getTierByRank(0);
          $(containerSelector).find('.vip-tier-head li[data-tier-id="'+next_tier.id+'"]').addClass("swell-active");
          $(containerSelector).find('.vip-tier-body li .tier-property-icons .icon[data-tier-id="'+next_tier.id+'"]').addClass("swell-active");  
          $(containerSelector).addClass(SwellConfig.Tier.getTierByRank(0).class);
        }
      }
    }
  };

}).call(this);

(function() {
   window.SwellConfig = window.SwellConfig || {};

   SwellConfig.Referral = {
      opts: {
         localization: {
          referralSidebarDetailsAction: "",
          referralSidebarDetailsReward: "",

          referralRegisterHeading: "<span class='refer-heading'>Hair for a friend</span>Give $10, Get $10",
          referralRegisterDetails: "Set up your friends with Luxy Hair. They’ll get $10 OFF and you’ll get $10 store credit when they shop.<br>Earn $10 for every referral you make.",
          referralRegisterFormDetails: "Earn good shopping karma.",
          referralRegisterFormEmail: "Your email",
          referralRegisterFormSubmit: "NEXT",

          referralReferHeading: "<span class='refer-heading'>Hair for a friend</span>Give $10, Get $10",
          referralReferDetails: "Set up your friends with Luxy Hair. They’ll get $10 OFF and you’ll get $10 store credit when they shop.<br>Earn $10 for every referral you make.",
          referralReferFormSubmit: "SEND",
          referralReferFormDetails: "Earn good shopping karma.",
          referralReferFormEmailsDetails: "Your friend's email address",

          referralReferMediaDetails: "You can also share your link with the buttons below.",

          referralShareFacebook: "Share",
          referralShareMessenger: "Message",
          referralShareTwitter: "Tweet",
          referralShareSMS: "SMS",
          referralShareCopy: "Copy Link",

          referralFacebookIcon: "swell-icon-share",
          referralMessengerIcon: "swell-icon-message",
          referralTwitterIcon: "swell-icon-tweet",
          referralLinkIcon: "swell-icon-copy-link",
          referralSMSIcon: "swell-icon-sms",

          referralThanksHeading: "Thanks for Referring!",
          referralThanksDetails: "Remind your friends to check their emails.",

          referralCopyHeading: "",
          referralCopyButton: "Copy link",
          referralCopyDetails: "Copy link and share with your friends."
        },
        templates: {
          referralRefer: '<div class="swell-referral-refer"> <h2 class="swell-referral-heading"><%= localization.referralReferHeading %></h2> <p class="swell-referral-details"><%= localization.referralReferDetails %></p> <div class="swell-referral-form-wrapper"> <form class="swell-referral-form" name="swell-referral-refer-form" id="swell-referral-refer-form" method="POST" action="."> <div class="swell-referral-form-header"> <p class="swell-referral-form-header-details"><%= localization.referralReferFormDetails %></p> </div> <div class="swell-referral-form-body"> <ul class="swell-referral-form-list"> <li class="swell-referral-form-list-field"> <input class="swell-referral-form-list-field-input" type="text" name="swell-referral-refer-emails" id="swell-referral-refer-emails" required="required" placeholder="<%= localization.referralReferFormEmailsDetails %>"> <input class="swell-referral-form-list-submit" type="submit" name="swell-referral-refer-submit" id="swell-referral-refer-submit" value="<%= localization.referralReferFormSubmit %>"> </li> </ul> </div> </form> </div> <div class="swell-referral-media-wrapper"> <p class="swell-referral-media-details"><%= localization.referralReferMediaDetails %></p> <ul class="swell-referral-media-list"> <li class="swell-referral-medium swell-share-referral-facebook"> <div class="swell-referral-medium-content"> <i class="swell-referral-media-icon <%= localization.referralFacebookIcon %>" aria-hidden="true"></i> <%= localization.referralShareFacebook %> </div> </li> <li class="swell-referral-medium swell-share-referral-sms"> <div class="swell-referral-medium-content"> <i class="swell-referral-media-icon <%= localization.referralSMSIcon %>" aria-hidden="true"></i> <%= localization.referralShareSMS %> </div> </li> <li class="swell-referral-medium swell-share-referral-twitter"> <div class="swell-referral-medium-content"> <i class="swell-referral-media-icon <%= localization.referralTwitterIcon %>" aria-hidden="true"></i> <%= localization.referralShareTwitter %> </div> </li> <li class="swell-referral-medium swell-share-referral-messenger"> <div class="swell-referral-medium-content"> <i class="swell-referral-media-icon <%= localization.referralMessengerIcon %>" aria-hidden="true"></i> <%= localization.referralShareMessenger %> </div> </li> <li class="swell-referral-medium swell-share-referral-copy"> <div class="swell-referral-medium-content"> <i class="swell-referral-media-icon <%= localization.referralLinkIcon %>" aria-hidden="true"></i> <%= localization.referralShareCopy %> </div> </li> </ul> </div> </div>',
          referralRegister: '<div class="swell-referral-register"> <h2 class="swell-referral-heading"><%= localization.referralRegisterHeading %></h2> <p class="swell-referral-details"><%= localization.referralRegisterDetails %></p> <div class="swell-referral-form-wrapper"> <form name="swell-referral-register-form" id="swell-referral-register-form" method="POST" action="."> <div class="swell-referral-form-header"> <p class="swell-referral-form-header-details"><%= localization.referralRegisterFormDetails %></p> </div> <div class="swell-referral-form-body"> <ul class="swell-referral-form-list"> <li class="swell-referral-form-list-field"> <input class="swell-referral-form-list-field-input" type="email" name="swell-referral-register-email" id="swell-referral-register-email" required="required" placeholder="<%= localization.referralRegisterFormEmail %>"> <input class="swell-referral-form-list-submit" type="submit" name="swell-referral-register-submit" id="swell-referral-register-submit" value="<%= localization.referralRegisterFormSubmit %>"> </li> </ul> </div> </form> </div> </div>'
        }
      
      },
      populateReferrals: function(){
        if (spapi.authenticated) {
          swellAPI.refreshCustomerDetails(function(){
            var referral_receipts = spapi.customer.referral_receipts;
            $('.table-data tr').remove();
            referral_receipts.forEach(function(referral_receipt) {
               var email = referral_receipt.email;
               var completed_at = referral_receipt.completed_at;
               if (completed_at) {
                  status = "Purchased (" + spapi.activeReferralCampaign.reward_text + ")";
               } else {
                  status = 'Invited';
               }
               $(".table-data").append("<tr><td>" + email + "</td><td>" + status + "</td></tr>");
            });
          });
        }
      },
      initializeReferral: function(containerSelector) {
        var email = $(containerSelector).data("customer-email");
        if (email) {
          spapi.storage.setItem("referrer_email", email);
          spapi.customer.email = email;
        }
        Swell.Referral.initializeReferral(".swell-referral", SwellConfig.Referral.opts);
        SwellConfig.Referral.populateReferrals();
      }
   };

}).call(this);

