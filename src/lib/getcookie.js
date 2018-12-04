const getCookie = () => {
    var value = document.cookie.match('(^|;) ?' + 'token' + '=([^;]*)(;|$)');
    return value? value[2] : null;
};
export {getCookie}