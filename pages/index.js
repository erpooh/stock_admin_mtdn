import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, {
    useState,
    useEffect,
    useRef,
    createRef,
    forwardRef,
} from "react";
import { observer } from "mobx-react-lite";
//------------------------------------------------------------------------------- Store
import Store from "../_store/store";
const store = new Store();
//------------------------------------------------------------------------------- Store
//------------------------------------------------------------------------------- View
import View from "../_view/index.view";
//------------------------------------------------------------------------------- View

const Home = observer((props) => {
    const { common } = store;

    useEffect(() => {}, []);

    return (
        <>
            <View props={props} store={store} />
        </>
    );
});

export default Home;
