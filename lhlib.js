/**
 * Created by erinsasha on 12/11/17.
 */
function er_loadlib() {
    console.log('START er_loadlib');

    var version = '6-4-8';
    script=document.createElement('script');
    script.type='text/javascript';
    script.src='https://erinsasha.github.io/lhlib/lhlib-full.js?v='+version;
    document.head.appendChild(script);

    var style=document.createElement('link');
    style.type='text/css';
    style.rel='stylesheet';
    style.href='https://erinsasha.github.io/lhlib/lhs.css?v='+version;
    document.head.appendChild(style);

    console.log('END er_loadlib');
}
er_loadlib();