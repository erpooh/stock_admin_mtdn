//------------------------------------------------------------------------------- Module
import React from "react";
import Head from "next/head";
import Script from "next/script";
import PropTypes from "prop-types";
import "@babel/polyfill";
import { appWithTranslation } from "next-i18next";
import { AnimatePresence } from "framer-motion";
//------------------------------------------------------------------------------- Module
import "../public/static/style/global.css";
import { ConfigProvider } from "antd";
import theme from "../_lib/theme";

const MyApp = (props) => {
    const { Component, pageProps, router } = props;

    return (
        <>
            <Head>
                <meta name="format-detection" content="telephone=no, address=no, date=no" />
                <meta httpEquiv="Expires" content="Mon, 06 Jan 1990 00:00:01 GMT" />
                {/* # 위의 명시된 날짜 이후가 되면 페이지가 캐싱되지 않습니다. */}
                {/* (따라서 위와 같은 날짜로 지정할 경우 페이지는 지속적으로 캐싱되지 않습니다.) */}
                <meta httpEquiv="Expires" content="-1" />
                {/* # 캐시된 페이지가 만료되어 삭제되는 시간을 정의합니다. 특별한 경우가 아니면 -1로 설정합니다. */}
                <meta httpEquiv="Pragma" content="no-cache" />
                {/* # 페이지 로드시마다 페이지를 캐싱하지 않습니다. (HTTP 1.0) */}
                <meta httpEquiv="Cache-Control" content="no-cache" />
                {/* 페이지 로드시마다 페이지를 캐싱하지 않습니다. (HTTP 1.1) */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <meta name="description" content="아트 드롭 컬쳐 미디어 & 스토어. 아티스트, 큐레이터, 컬렉터들의 이야기와 아트에 대한 다양한 콘텐츠를 제공합니다. 아티스트 및 브랜드와 협업한 기발한 작품도 만나 보세요." />

                <meta name="desciption" content="dropkitchen™ invites you to discover the next generation of artists with a fun and easy way to grow your digital art collection with our art gallery app in your pocket. Surprise yourself with new flavors of cutting edge art." />

                <title>dropkitchen™</title>

                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
            </Head>
            <ConfigProvider theme={theme}>
                <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                    <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
            </ConfigProvider>
        </>
    );
};

export default appWithTranslation(MyApp);

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
