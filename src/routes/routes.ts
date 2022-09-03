import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";


type JSXComponent = () => JSX.Element;
interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../lazyload/layout/LazyLayout'));

// todo lo q venga luego /lazyload sera procesado por el router q se definirá en el LazyLayout
export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];
