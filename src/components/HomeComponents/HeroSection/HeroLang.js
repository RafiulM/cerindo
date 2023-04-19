import React from 'react'

export const NewsLangTitle = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <div>{data?.title_en}</div> :
    (lang === "id") ? 
        <div>{data?.title_id}</div> :
    (lang === "cn") ? 
        <div>{data?.title_ch}</div> : <> </>;

    return text;
}

export const NewsLangBanner = (data, lang) => {
    var text = 
    (lang === "en") ? 
        <>{data?.title_en}</> :
    (lang === "id") ? 
        <>{data?.title_id}</> :
    (lang === "cn") ? 
        <>{data?.title_ch}</> : <> </>;

    return text;
}