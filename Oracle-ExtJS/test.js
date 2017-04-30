Ext.define('App.view.test',{
	extend: 'Ext.container.Container',
	alias: 'widget.test',
	afterRender:function () {
		this.callParent();
		$("#amazingButton").click(function(){
			setTimeout(function(){
				$("#amazingPopup").animate({opacity:'1'},500);
			});
		}); 
		
		$("#amazingButton3").click(function(){
			setTimeout(function(){
				$("#amazingPopup3").show().css("top", "0px").animate({top: 250}, 500);
			});
		}); 
		
		$("#amazingButton6").click(function(){
			setTimeout(function(){
				$("#amazingPopup6").animate({width:'370', height: '400'},500);
				$(".x-resizable-proxy").animate({width:'370', height: '400'},500);
				//$("#amazingForm").animate({opacity:'1'},500);
			});
			
		}); 
	},
	items: [{
		xtype: 'component',
		html: 'it worked, yay!'
	},// fade jQuery
	{
				xtype: 'button',
				text: 'Fade jQuery',
				cls: 'createProgram',
				id: 'amazingButton',
				handler: function () {
						
						var transComponent = Ext.create ('Ext.Window',{
							title: 'New Program',
							height: 370,
							width: 400,
							style: 'opacity: 0.1;',
							shadow: false,
							cls: 'popUp',
							footer: true,
							id: 'amazingPopup',
							bodyCfg: {
								tag: 'iframe',
							},
							items: [{xtype: 'myForm'}],
							buttons: [{
								text: 'Cancel',
								cls: 'buttonStyling'
								},{
								text: 'Done',
								cls: 'buttonStyling'
							}]
						}).show();
					}
				},// fade Extjs
				{
				xtype: 'button',
				text: 'Fade Extjs',
				cls: 'createProgram',
				id: 'amazingButton2',
				handler: function () {
						
						var transComponent2 = Ext.create ('Ext.Window',{
							title: 'New Program',
							height: 370,
							width: 400,
							style: 'opacity: 0;',
							shadow: false,
							cls: 'popUp',
							footer: true,
							id: 'amazingPopup2',
							bodyCfg: {
								tag: 'iframe',
							},
							items: [{xtype: 'myForm'}],
							buttons: [{
								text: 'Cancel',
								cls: 'buttonStyling'
								},{
								text: 'Done',
								cls: 'buttonStyling'
							}]
						}).show();
						
						Ext.create('Ext.fx.Anim', {
							target: transComponent2,
							duration: 500,
							from: {
								opacity: 0,
								},
							to: {
								opacity: 1,
								}
						});
					}
				},
				//move jQuery
				{
				xtype: 'button',
				text: 'Move jQuery',
				cls: 'createProgram',
				id: 'amazingButton3',
				handler: function () {
						
						var transComponent3 = Ext.create ('Ext.Window',{
							title: 'New Program',
							height: 370,
							width: 400,
							top: -370,
							shadow: false,
							cls: 'popUp',
							footer: true,
							id: 'amazingPopup3',
							bodyCfg: {
								tag: 'iframe',
							},
							items: [{xtype: 'myForm'}],
							buttons: [{
								text: 'Cancel',
								cls: 'buttonStyling'
								},{
								text: 'Done',
								cls: 'buttonStyling'
							}]
						}).show();
					}
				},// move Extjs
				{
				xtype: 'button',
				text: 'Move Extjs',
				cls: 'createProgram',
				id: 'amazingButton4',
				handler: function () {
						
						var transComponent4 = Ext.create ('Ext.Window',{
							title: 'New Program',
							height: 370,
							width: 400,
							top: -350,
							shadow: false,
							cls: 'popUp',
							footer: true,
							id: 'amazingPopup4',
							bodyCfg: {
								tag: 'iframe',
							},
							items: [{xtype: 'myForm'}],
							buttons: [{
								text: 'Cancel',
								cls: 'buttonStyling'
								},{
								text: 'Done',
								cls: 'buttonStyling'
							}]
						}).show();
						
						Ext.create('Ext.fx.Anim', {
							target: transComponent4,
							duration: 500,
							from: {
								top: -370
								},
							to: {
								top: 200
								}
						});
					}
				}, //size Extjs
				{
				xtype: 'button',
				text: 'Size Extjs',
				cls: 'createProgram',
				id: 'amazingButton5',
				handler: function () {
						
						var transComponent5 = Ext.create ('Ext.Window',{
							title: 'New Program',
							height: 390,
							width: 420,
							shadow: false,
							cls: 'popUp',
							footer: true,
							id: 'amazingPopup5',
							bodyCfg: {
								tag: 'iframe',
							},
							items: [{xtype: 'myForm'}],
							buttons: [{
								text: 'Cancel',
								cls: 'buttonStyling'
								},{
								text: 'Done',
								cls: 'buttonStyling'
							}]
						}).show();
						
						Ext.create('Ext.fx.Anim', {
							target: transComponent5,
							duration: 500,
							from: {
								height: 390,
								width: 420,
								},
							to: {
								height: 370,
								width: 400,
								}
						});
					}
				},// resize outer and fade inner jQuery
				{
				xtype: 'button',
				text: 'Fade and size jQuery',
				cls: 'createProgram',
				id: 'amazingButton6',
				handler: function () {
						
						var transComponent6 = Ext.create ('Ext.Window',{
							title: 'New Program',
							height: 370,
							width: 400,
							//style: 'opacity: 0.1;',
							shadow: false,
							cls: 'popUp',
							footer: true,
							id: 'amazingPopup6',
							bodyCfg: {
								tag: 'iframe',
							},
							items: [{
								xtype: 'container',
								cls: 'formContainer'
								}],
							buttons: [{
								text: 'Cancel',
								cls: 'buttonStyling'
								},{
								text: 'Done',
								cls: 'buttonStyling'
							}]
						}).show();
					//},
					//afterRender: function(){
						setTimeout(function(){
							//this.callParent();
							var generateForm = Ext.getCmp('formContainer');
							generateForm.removeAll(); //removing existing views.
																		
							var test = Ext.create('myForm');
																		
							generateForm.add(test);
							generateForm.doLayout();
						}, 1000);
					}
				},{
					xtype: 'button',
					text: 'Menu Extjs',
					cls: 'menuPopOut',
					id: 'amazingButton7',
					enableToggle: true,
					toggle: function(state, suppressEvent){
						
						var menuContainer2 = Ext.create('Ext.Window',{
							xtype: 'container',
							id: 'menuContainer2',
							width: 100,
							x: 567,
							y: 151,
							shadow: false,
							//height: 200
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
									//some fantastic function to make the sub menu appear
								}
							},{
								xtype: 'container',
								cls: 'programItem',
								height: 32,
								width: 100,
								//html: '<span class="text">Programs</span>',
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
								//html: '<span class="text">Campaigns</span>',
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
									//some fantastic function to make the sub menu appear
								}
							},{
								xtype: 'button',
								text: 'Content',
								cls: 'contentItem menuItem',
								handler: function(){
									//some fantastic function to make the sub menu appear
								}
							},{
								xtype: 'button',
								text: 'Data',
								cls: 'dataItem menuItem',
								handler: function(){
									//some fantastic function to make the sub menu appear
								}
							},{
								xtype: 'button',
								text: 'Insight',
								cls: 'insightItem menuItem',
								handler: function(){
									//some fantastic function to make the sub menu appear
								}
							}]
						}).show();
						
						Ext.create('Ext.fx.Anim', {
							target: menuContainer2,
							duration: 500,
							from: {
								opacity: 0
								},
							to: {
								opacity: 1
								}
						});
					}
				}]
});
Ext.define('myForm',{
							xtype: 'form',
							extend: 'Ext.form.Panel',
							id: 'amazingForm',
							alias: 'widget.myForm',
							items: [{
									xtype: 'textfield',
									fieldLabel: 'Name',
									value: 'Name your Program',
									labelAlign: 'top',
									cls: 'field low',
									name: 'testfield',
									width: 317,
								},{
									xtype: 'textfield',
									fieldLabel: 'Description',
									cls: 'field',
									labelAlign: 'top',
									name: 'testfield2',
									width: 317,
								},{
									xtype: 'textfield',
									fieldLabel: 'List',
									labelAlign: 'top',
									cls: 'field low',
									name: 'testfield3',
									width: 241,
								},{
									xtype: 'button',
									text: 'Select',
									cls: 'buttonStyling small fltright PropertiesSelect',
								},{
									xtype: 'container',
									items: [{
										xtype: 'button',
										text: 'Guided set up',
										cls: 'buttonStyling newProgram guided'
									},{
										xtype: 'button',
										text: 'Go to Program Designer',
										cls: 'buttonStyling newProgram',
										handler: function() {
											var contentPanel = Ext.getCmp('mainContent');
											contentPanel.removeAll(); //removing existing views.
															
											var test = Ext.create('App.view.MxGraph');
															
											contentPanel.add(test);
											contentPanel.doLayout();
										}
									},{
										xtype: 'button',
										text: 'Use Program Template',
										cls: 'buttonStyling newProgram'
									}]
								}]
						});
		