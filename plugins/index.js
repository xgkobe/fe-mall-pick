import history from 'connect-history-api-fallback';
import pages from '../pages.json';

export function pathRewritePlugin() {
    const rules = [];
    Reflect.ownKeys(pages).forEach(key => {
        rules.push({
            from: `/${pages[key].name}`,
            to: `${pages[key].entry}`,
        });
    });
    return {
        name: 'path-rewrite-plugin',
        configureServer(server) {
            server.middlewares.use(
                history({
                    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
                    disableDotRule: false,
                    rewrites: rules,
                })
            );
        },
    };
}