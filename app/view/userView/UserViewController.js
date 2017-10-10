Ext.define('FirstAppSencha.view.userView.UserViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userview-userview',

    isValid: function(){
        var me= this,
            view = me.getView(),
            codeForm = view.lookupReference('codeForm'),
            personalData = view.lookupReference('personalData'),
            businessData=view.lookupReference('businessData'),
            code= codeForm.getValues(),
            personalDataJson=personalData.getValues(),
            businessDataJson=businessData.getValues(),
            codeValid = codeForm.isValid(),
            personalDataValid= personalData.isValid(),
            businessDataValid= businessData.isValid();

            debugger;
            if(codeValid && personalDataValid && businessDataValid)
            {
                return true;
            }
            else{
                return false;
            }
    },

    saveUser: function(){
            var me=this;
            if(me.isValid())
            {
                var me= this,
                view=me.getView(),
                codeForm = view.lookupReference('codeForm'),
                personalData = view.lookupReference('personalData'),
                businessData=view.lookupReference('businessData'),
                code= codeForm.getValues(),
                personalDataJson=personalData.getValues(),
                businessDataJson=businessData.getValues();

                debugger;
                var jsonData= Object.assign({},code,personalDataJson, businessDataJson);
                if (!Ext.isEmpty(jsonData.edad)){
                    jsonData.edad = parseInt(jsonData.edad);
                }
                if (!Ext.isEmpty(jsonData.codigo)){
                    jsonData.codigo = parseInt(jsonData.codigo);
                }

                Ext.Ajax.request({
                    url: 'http://192.168.120.30:3500/user/createUser',
                    method: 'PUT',
                    jsonData: jsonData,
                    success: function(response)
                    {
                        var response=JSON.parse(response.responseText);
                        if(response.status)
                        {
                            Ext.Msg.alert('Guardar', response.message);
                        }
                        else{
                            Ext.Msg.alert('Guardar', 'Error datos incorrectos');
                        }
                    },
                    failure: function (response)
                    {
                        var data= JSON.parse(response.responseText);
                        Ext.Msg.alert('Guardar', 'Error datos incorrectos');
                    }


                });

            }
    }
});
