import 'angular2-universal/polyfills';
import {JavaEngine} from './engine/java_engine'

import * as path from 'path';

// Angular 2 Universal
import {
    REQUEST_URL,
    ORIGIN_URL,
    NODE_HTTP_PROVIDERS,

} from 'angular2-universal';

// Application
import {MainModule} from './app/module';
import {enableProdMode} from '@angular/core';
enableProdMode();

interface IExampleRequestInfo {
    url:string;
}

JavaEngine.connect((reqInfo:IExampleRequestInfo) => {
    let baseUrl = '/';

    let url = reqInfo.url;

    let config:BootloaderConfig = {
        directives: [App],
        platformProviders: [
            provide(ORIGIN_URL, {useValue: 'http://localhost:3000'}),
            provide(BASE_URL, {useValue: baseUrl}),
        ],
        providers: [
            provide(REQUEST_URL, {useValue: url}),
            NODE_ROUTER_PROVIDERS,
            NODE_HTTP_PROVIDERS,
        ],
        async: true,
        preboot: false // { appRoot: 'app' } // your top level app component selector
    };

    return config;
});