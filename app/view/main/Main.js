/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FirstAppSencha.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'FirstAppSencha.view.main.MainController',
        'FirstAppSencha.view.main.MainModel',
        'FirstAppSencha.view.main.List',
        'FirstAppSencha.view.userView.UserView'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-shield'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Creación de usuario',
        iconCls: 'fa-user',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'userView'
        }]
    }, {
        title: 'User Interface',
        iconCls: 'x-fa fa-home',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Usuarios',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Ver usuario',
        iconCls: 'fa-home',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
