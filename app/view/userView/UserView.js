
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
    items: [
    {
        xtype: 'form',
        reference: 'codeForm',
        title: 'Busqueda de usuario',
        flex: 1, 
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            fieldLabel: 'Código de usuario',
            name: 'codigo',
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
            reference: 'personalData',
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
                name: 'nombre',
                fieldLabel: 'Nombre',
                required:true,
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Apellido',
                name: 'apellido',
                required:true,
                allowBlank: false
            },
             {
                xtype: 'numberfield',
                fieldLabel: 'Edad',
                name: 'edad',
                minValue: 0
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Fecha nacimiento',
                name: 'fechaNac',
                format: 'm/d/Y',
                requiered: true,
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name:'direccion',
                fieldLabel: 'Dirección',
                requiered: false,
                allowBlank: true
            }]

        }, {
            xtype: 'form',
            title: 'Datos empresariales',
            reference: 'businessData',
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
                name: 'nombreEmp',
                required: true,
                allowBlank: false
            },
        {
                xtype: 'textfield',
                fieldLabel: 'Dirección de la empresa',
                name:'direccionEmp',
                required: true,
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Número de telefono',
                name:'numeroTelEmp',
                required: true,
                allowBlank: false
            }]

        }]
    },
    {
            xtype: 'button',
            text: 'Guardar',
            flex: 1,
            margin: '10px',
            handler: 'saveUser'
    }]
});
