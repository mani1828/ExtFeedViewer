/*
 * File: app/view/FeedPanel.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.FeedPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.feedpanel',

    layout: {
        type: 'fit'
    },
    collapseDirection: 'left',
    collapsible: false,
    title: 'Feeds',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    itemId: 'toolbar',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'add',
                            iconCls: 'feed-add',
                            text: 'Add Feed'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'remove',
                            iconCls: 'feed-remove',
                            text: 'Remove Feed'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'dataview',
                    cls: 'feed-list',
                    itemId: 'dataview',
                    tpl: [
                        '<tpl for="."><div class="feed-list-item">{title}</div></tpl>'
                    ],
                    itemSelector: '.feed-list-item',
                    overItemCls: 'feed-list-item-hover',
                    singleSelect: true,
                    store: 'FeedStore',
                    trackOver: true
                }
            ]
        });

        me.callParent(arguments);
    }

});