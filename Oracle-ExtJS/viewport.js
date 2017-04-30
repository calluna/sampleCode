Ext.define('App.view.Viewport', {
	extend: 'Ext.container.Viewport',
	//controllers:['test'],
	layout: 'fit',
	afterRender:function () {
		this.callParent();
		var contentPanel = Ext.getCmp('mainContent');
		contentPanel.removeAll(); //removing existing views.
	
		var test = Ext.create('App.view.MainPage');
	
		contentPanel.add(test);
		contentPanel.doLayout();

		//Menu
		$('.logo').click(function() {
			$('#menuContainer').animate({height: 'toggle', opacity: 'toggle'},100);
		});
		
		
		//Sub Menu
		$('.programItem').hover(function(){
			$('#subMenuPrograms').animate({width: 'toggle', opacity: 'toggle'},100);
		});

		$('.campaignItem').hover(function(){
			$('#subMenuCampaigns').animate({width: 'toggle', opacity: 'toggle'},100);
		});
		
	},
	items:[{
		xtype: 'panel',
		cls: 'interactMainClass',
		items:[{
			xtype: 'container',
			cls:'mainHeader',
			items:[{
				xtype: 'button',
				text: 'Responsys',
				cls: 'logo',
				itemId: 'home',
			},{
				xtype: 'container',
				id: 'menuContainer',
				width: 100,
				items: [{
					xtype: 'button',
					text: 'Home',
					cls: 'homeItem menuItem',
					handler: function(){
						var contentPanel = Ext.getCmp('mainContent');
						contentPanel.removeAll(); //removing existing views.
			
						var test = Ext.create('App.view.MainPage');
			
						contentPanel.add(test);
						contentPanel.doLayout();
					}
				},{
					xtype: 'button',
					text: 'Folders',
					cls: 'folderItem menuItem',
					handler: function(){
						//function similar to 'Programs' button
					}
				},{
					xtype: 'container',
					cls: 'programItem',
					height: 32,
					width: 100,
					items: [{
						xtype: 'button',
						cls: 'menuItem',
						text: 'Programs',
						handler: function () {
							var contentPanel = Ext.getCmp('mainContent');
							contentPanel.removeAll(); //removing existing views.
				
							var test = Ext.create('App.view.ProgramManager');
				
							contentPanel.add(test);
							contentPanel.doLayout();
							}
					},{
						xtype: 'container',
						id: 'subMenuPrograms',
						cls: 'hidden',
						width: 120,
						margin: '-36 0 0 100',
						items: [{
							xtype: 'button',
							text: 'Manage programs',
							cls: 'menuItem'
						},{
							xtype: 'button',
							id: 'createProgram',
							text: 'Create programs',
							cls: 'menuItem',
							handler: function(){
								createProgram();
							}
						}]
					}]
				},{
					xtype: 'container',
					cls: 'campaignItem',
					height: 32,
					width: 100,
					items: [{
						xtype: 'button',
						cls: 'menuItem',
						text: 'Campaigns',
						handler: function () {
							var contentPanel = Ext.getCmp('mainContent');
							contentPanel.removeAll(); //removing existing views.
				
							var test = Ext.create('App.view.CampaignManager');
				
							contentPanel.add(test);
							contentPanel.doLayout();
							}
					},{
						xtype: 'container',
						id: 'subMenuCampaigns',
						cls: 'hidden',
						width: 120,
						margin: '-36 0 0 100',
						items: [{
							xtype: 'button',
							text: 'Manage campaigns',
							cls: 'menuItem'
						},{
							xtype: 'button',
							text: 'Create campaigns',
							cls: 'menuItem'
						}]
					}]
				},{
					xtype: 'button',
					text: 'Forms',
					cls: 'formItem menuItem',
					handler: function(){
						//function similar to 'Programs' button
					}
				},{
					xtype: 'button',
					text: 'Content',
					cls: 'contentItem menuItem',
					handler: function(){
						//function similar to 'Programs' button
					}
				},{
					xtype: 'button',
					text: 'Data',
					cls: 'dataItem menuItem',
					handler: function(){
						//function similar to 'Programs' button
					}
				},{
					xtype: 'button',
					text: 'Insight',
					cls: 'insightItem menuItem',
					handler: function(){
						//function similar to 'Programs' button
					}
				}]
			},{
				xtype: 'button',
				text: 'Admin',
				cls: 'adminButton',
				handler: function () {
							var contentPanel = Ext.getCmp('mainContent');
							contentPanel.removeAll(); //removing existing views.
				
							var test = Ext.create('App.view.AdminManager');
				
							contentPanel.add(test);
							contentPanel.doLayout();
							}
			}],
		},{
		xtype: 'container',
		id:'mainContent'
		}]
	}]
});
