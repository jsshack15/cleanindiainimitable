
(function(module){if(typeof define==='function'&&define.amd){define(['jquery'],module);}else{module(jQuery);}})(function(jQuery,undefined){var add=jQuery.event.add,remove=jQuery.event.remove,trigger=function(node,type,data){jQuery.event.trigger(type,data,node);},settings={threshold:0.4,sensitivity:6};function moveend(e){var w,h,event;w=e.target.offsetWidth;h=e.target.offsetHeight;event={distX:e.distX,distY:e.distY,velocityX:e.velocityX,velocityY:e.velocityY,finger:e.finger};if(e.distX>e.distY){if(e.distX>-e.distY){if(e.distX/w>settings.threshold||e.velocityX*e.distX/w*settings.sensitivity>1){event.type='swiperight';trigger(e.currentTarget,event);}}else{if(-e.distY/h>settings.threshold||e.velocityY*e.distY/w*settings.sensitivity>1){event.type='swipeup';trigger(e.currentTarget,event);}}}else{if(e.distX>-e.distY){if(e.distY/h>settings.threshold||e.velocityY*e.distY/w*settings.sensitivity>1){event.type='swipedown';trigger(e.currentTarget,event);}}else{if(-e.distX/w>settings.threshold||e.velocityX*e.distX/w*settings.sensitivity>1){event.type='swipeleft';trigger(e.currentTarget,event);}}}}function getData(node){var data=jQuery.data(node,'event_swipe');if(!data){data={count:0};jQuery.data(node,'event_swipe',data);}return data;}jQuery.event.special.swipe=jQuery.event.special.swipeleft=jQuery.event.special.swiperight=jQuery.event.special.swipeup=jQuery.event.special.swipedown={setup:function(data,namespaces,eventHandle){var data=getData(this);if(data.count++>0){return;}add(this,'moveend',moveend);return true;},teardown:function(){var data=getData(this);if(--data.count>0){return;}remove(this,'moveend',moveend);return true;},settings:settings};});