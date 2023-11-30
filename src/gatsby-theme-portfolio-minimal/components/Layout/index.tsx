import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '../../globalStyles/global.css';
import '../../globalStyles/theme.css';
import React, { useLayoutEffect, useState } from 'react';
// import { Helmet } from 'gatsby-theme-portfolio-minimal/src/components/Layout';
import { useLocation } from '@reach/router';
import { Theme, useGlobalState } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/context';
import { SplashScreen } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen';
import { Header } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/components/Header';
import { CookieBar } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar';
import * as classes from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/components/Layout';

interface LayoutProps {
    children: React.ReactElement;
    useSplashScreenAnimation: boolean;
    useCookieBar: boolean;
}

export function Layout(props: LayoutProps): React.ReactElement {
    const location = useLocation();
    const { globalState } = useGlobalState();
    const [isInternalNavigation, setIsInternalNavigation] = useState<boolean>(false);

    const showSplashScreen = !isInternalNavigation && props.useSplashScreenAnimation && !globalState.splashScreenDone;
    const darkModeEnabled = globalState.theme === Theme.Dark;

    useLayoutEffect(() => {
        const referrer = location.state && (location.state as { referrer: string | null }).referrer !== null;
        setIsInternalNavigation(!!referrer);
    }, []);

    const splashScreenView = (
        <>
            {/* <Helmet bodyAttributes={{ 'data-theme': Theme.Light }} /> */}
            <SplashScreen />
        </>
    );

    const layoutView = (
        <>
            {/* <Helmet
                bodyAttributes={{
                    'data-theme': darkModeEnabled ? Theme.Dark : Theme.Light,
                }}
            /> */}
            <div className={"Layout"}>
                <Header />
                <main>{props.children}</main>
                {/* <Footer /> */}
                {props.useCookieBar && <CookieBar />}
            </div>
        </>
    );

    return showSplashScreen ? splashScreenView : layoutView;
}
