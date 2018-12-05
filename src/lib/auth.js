const auth = () => {
       var value = document.cookie.match('(^|;) ?' + 'token' + '=([^;]*)(;|$)');
       return value? true: false;
   };
   export {auth}

