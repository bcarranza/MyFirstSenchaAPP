
Ext.define('FirstAppSencha.view.userView.UserView',{
    extend: 'Ext.panel.Panel',
    xtype: 'userView',

    requires: [
        'FirstAppSencha.view.userView.UserViewController',
        'FirstAppSencha.view.userView.UserViewModel'
    ],

    controller: 'userview-userview',
    viewModel: {
        type: 'userview-userview'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,
    items: [{
        xtype: 'form',
        reference: 'codeForm',
        align: 'stretch'
    },
    {
        title: 'Busqueda de usuario',
        flex: 1, 
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            fieldLabel: 'Código de usuario',
            xtype: 'numberfield',
            minValue: 0,
            required: true,
            allowBlank: false,
            flex: 1,
            margin: '10px'
            
        },
        {
            xtype: 'button',
            text: 'Buscar',
            flex: 1,
            margin: '10px'
        }],
    },
    {
        xtype: 'tabpanel',
        layout: 'vbox',
        flex: 1,
        border: true,
        items: [{
            xtype: 'form',
            title: 'Datos personales',
            layout: {
                type: 'vbox',
                align: 'stretch '
            },
            flex: 1,
            defaults: {
                flex: 1,
                margin: '10px'
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Nombre',
                required:true,
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Apellido',
                required:true,
                allowBlank: false
            },
             {
                xtype: 'numberfield',
                fieldLabel: 'Edad',
                minValue: 0
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Fecha nacimiento',
                requiered: true,
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Dirección',
                requiered: false,
                allowBlank: true
            }]

        }, {
            xtype: 'form',
            title: 'Datos empresariales',
            flex: 1,
            layout: {
                type: 'vbox',
                aling: 'stretch'
            },
            defaults: {
                flex: 1,
                margin: '10px'
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Nombre de la empresa',
                required: true,
                allowBlank: false
            },
        {
                xtype: 'textfield',
                fieldLabel: 'Dirección de la empresa',
                required: true,
                allowBlank: false
            }]

        }]
    },
    {
            xtype: 'button',
            text: 'Guardar',
            flex: 1,
            margin: '10px'
    }]
});
