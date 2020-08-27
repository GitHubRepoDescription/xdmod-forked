Ext.namespace('XDMoD', 'XDMoD.Plugins');

// --------------------------------------------------

XDMoD.Plugins.ContextSensitiveHelper = function (tags) {

	return {
      
      init: function(p) {

         p.on('afterrender', function(panel) {

         panel.addTool({
         
            id: 'help',
            
            handler: function(event, toolEl, panel, tc) {
            
               window.open('user_manual.php?t=' + tags);   
                       
            },
            
            qtip: 'More information'
            
         });

      }, p, {single: true});

      }//init

   };//return

};//XDMoD.Plugins.ContextSensitiveHelper
