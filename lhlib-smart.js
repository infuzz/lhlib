/**
 * Created by erinsasha on 12/11/17.
 */
function er_loadlib() {
    console.log('START er_loadlib');
    if(document.head) {
        var version = '11-1-3-2';
        script=document.createElement('script');
        script.type='text/javascript';
        script.src='https://erinsasha.github.io/lhlib/lhlib-full-smart.js?v='+version;
        document.head.appendChild(script);

        /*var style=document.createElement('link');
        style.type='text/css';
        style.rel='stylesheet';
        style.href='https://erinsasha.github.io/lhlib/lhs.css?v='+version;
        document.head.appendChild(style);*/

        console.log('END er_loadlib');
    } else {
        setTimeout(er_loadlib, 100);
    }
}
er_loadlib();