import{i as u,S as m}from"./assets/vendor-B07T6_gy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function f(i){return new URLSearchParams({key:"46823434-044aaff3f806d325c686b1cda",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}function d(i){return fetch(`https://pixabay.com/api/?${f(i)}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(i){return i.hits.map(({largeImageURL:a,webformatURL:s,tags:e,likes:r,views:o,comments:c,downloads:l})=>`<li class="list-item">
                        <a href='${a}' class="image-link"> 
                            <img src='${s}' alt="${e}">
                        </a>
                        <div class="list-item-info">
                            <div class="image-info">
                                <h2>Likes</h2>
                                <p>${r}</p>
                            </div>
                            <div class="image-info">
                                <h2>Views</h2>
                                <p>${o}</p>
                            </div>
                            <div class="image-info">
                                <h2>Comments</h2>
                                <p>${c}</p>
                            </div>
                            <div class="image-info">
                                <h2>Downloads</h2>
                                <p>${l}</p>
                            </div>
                        </div>                 
                    </li> `).join("")}const h=document.querySelector("form"),n=document.querySelector("ul");h.addEventListener("submit",i=>{i.preventDefault(),i.target.elements.search.value&&(n.innerHTML="",document.querySelector(".loader").style.display="block",d(i.target.elements.search.value).then(t=>{if(!t.total){u.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const a=p(t);n.innerHTML=a,new m(".list-item a",{captionsData:"alt",captionDelay:250}).refresh()}).finally(()=>{document.querySelector(".loader").style.display="none"}))});
//# sourceMappingURL=index.js.map
