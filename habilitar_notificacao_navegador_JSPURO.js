
    if(window.Notification && Notification.permission !== "denied"){
        Notification.requestPermission(function(status){
            let n = new Notification('Title',{
                body: 'Conteudo da notificação'
            });
        });
    }
