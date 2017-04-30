Ext.define('App.view.MxGraph',{
	extend: 'Ext.container.Container',
	alias: 'widget.MxGraph',
	afterRender: function (){
		this.callParent();
		//Palette close-open function
		$('.library .button').click(function() {
			$('.closeDiv').animate({width: 'toggle'},80);

			$('#toolIconsBox').toggleClass('paddingRight');

			$('.button img').each(function(){
				$(this).toggleClass('show');
				$(this).toggleClass('hide');
			});
		});

		//Validation Section
		$('.showDiv .exclaimButton').click(function() {
			var $marginLefty = $('.showDiv');
			$marginLefty.animate({
				marginRight: parseInt($marginLefty.css('marginRight'),10) == 0 ?
				-$marginLefty.outerWidth() :0
			}, 80);
		});
	},
	items: [{
		xtype: 'container',
		cls: 'validation',
		html: '<div class="showDiv"><a href="#" class="exclaimButton left">{3}</a><dl><dt>D-02131</dt><dd>Program must contain a campaign</dd><dd>Close notification email addresses required for scheduled close program</dd></dl><dl><dt>Customer Activated</dt><dd>Exit path(s) are missing</dd></dl><dl><dt>Custom Event</dt><dd>Exit path(s) are missing</dd><dd>Missing custom event</dd></dl></div>',
		items: {
			xtype: 'button',
			text: 'Validate',
			cls: 'buttonStyling buttonProgram'
		}
	},{	
		xtype: 'container',
		cls: 'programMenu',
		items: [{
			xtype: 'button',
			cls: 'toolbarButton edit',
			icon: 'TWimages/toolbar/cut.png',
			id: 'cut'
		},{
			xtype: 'button',
			cls: 'toolbarButton edit',
			icon: 'TWimages/toolbar/copy.png',
			id: 'copy'
		},{
			xtype: 'button',
			cls: 'toolbarButton edit',
			icon: 'TWimages/toolbar/paste.png',
			id: 'paste'
		},{
			xtype: 'button',
			cls: 'toolbarButton edit',
			icon: 'TWimages/toolbar/delete.png',
			id: 'deleteCell'
		},{
			xtype: 'button',
			cls: 'toolbarButton removeBorder',
			icon: 'TWimages/toolbar/magglass.png'
		},{
			xtype: 'button',
			cls: 'toolbarButton removeBorder',
			icon: 'TWimages/toolbar/zoomin.png',
			id: 'zoomIn'
		},{
			xtype: 'button',
			cls: 'toolbarButton',
			icon: 'TWimages/toolbar/zoomout.png',
			id: 'zoomOut'
		}]
	},{
		xtype: 'container',
		cls: 'library',
		width: 36,
		items: [{
			xtype: 'container',
			id: 'toolIconsBox',
			cls: 'paddingRight'
		},{
			xtype: 'container',
			top: 20,
			width: 203,
			html: '<a href="#" class="button"><img class="hide" src="TWimages/open.png"/><img class="show" src="TWimages/close.png"/></a><div class="closeDiv"><span>Customer Activation</span></div><div class="closeDiv"><span>Customer Deactivation</span></div><div class="closeDiv"><span>Schedule Filter or View</span></div><div class="closeDiv"><span>Custom Event</span></div><div class="closeDiv"><span>Custom Timer</span></div><div class="closeDiv"><span>Elapse Timer</span></div><div class="closeDiv"><span>Connect Event</span></div><div class="closeDiv"><span>End</span></div><div class="closeDiv"><span class="divider"></span></div><div class="closeDiv"><span>Send Email Campaign</span></div><div class="closeDiv"><span>Send SMS Message</span></div><div class="closeDiv"><span>Set Data</span></div><div class="closeDiv"><span>Get Data</span></div><div class="closeDiv"><span>Add Display Campaign</span></div><div class="closeDiv"><span>Remove Display Campaign</span></div><div class="closeDiv"><span class="divider"></span></div><div class="closeDiv"><span>Data</span></div><div class="closeDiv"><span>Allocation</span></div><div class="closeDiv"><span>Performance</span></div><div class="closeDiv"><span class="divider"></span></div><div class="closeDiv"><span>Note</span></div>',
		}]
	},{
		xtype:'tabpanel',
		layout: 'card',
		cls: 'mainTabs',
		height: 625,
		items:[{
			title:'Design',
			listeners: {
				activate : function(){
				$('.toolIcons').show(400);
				$('.closeDiv').show(400);
				$('.button img').show(400);
				$('.edit').show(400);
				$('.validation').show(400);
				}
			},
			items: [{
			xtype: 'container',
			top: '0',
			id: 'gridBox',
			listeners: {
				render: function(){
					graph(document.getElementById('gridBox'));
					}
				}
			}]
		},{
			title:'Publish',
			cls: 'Publish',
			layout: 'border',
			defaults: {
				split: true,
				},
			items: [{
				xtype: 'container',
				region: 'north',
				top: '0',
				cls: 'north',
				height: '50%',
				layout: 'border',
				items: [{
					xtype: 'container',
					width: 34,
					cls: 'titleBar',
					html: '<div class="titles">Published</div>'
				},{
					xtype: 'container',
					top: '0',
					id: 'published',
					bodyStyle: 'margin-left: 34px',
					autoScroll: true,
					listeners: {
						render: function(){
							published(document.getElementById('published'));
							
							},
						}
					}]
				},{
					xtype: 'container',
					region: 'center',
					top: '0',
					height: '50%',
					layout: 'border',
					items: [{
						xtype: 'container',
						width: 34,
						cls: 'titleBar',
						html: '<div class="titles draft">Draft</div>'
					},{
						xtype: 'container',
						top: '0',
						id: 'draft',
						bodyStyle: 'margin-left: 34px',
						autoScroll: true,
						listeners: {
							render: function(){
								draft(document.getElementById('draft'));
							},
						}
					}]
				}],
					listeners:{
					activate : function(){
						$('.toolIcons').hide(400);
						$('.closeDiv').hide(400);
						$('.button img').hide(400);
						$('.edit').hide(400);
						$('.validation').hide(400);
						}
					}
				},{
					title:'Analyze',
					listeners:{
						activate : function(){
							$('.toolIcons').hide(400);
							$('.closeDiv').hide(400);
							$('.button img').hide(400);
							$('.edit').hide(400);
							$('.validation').hide(400);
						}
					}
				}]
	}]
});