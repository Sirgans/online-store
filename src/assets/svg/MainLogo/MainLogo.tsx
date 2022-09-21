import React from 'react';
import {cn} from "../../../utils/bem-config";
import {Link} from "react-router-dom";
import  "./MainLogo.scss";

export const MainLogo = () => {
    const mainLogo = cn("mainLogo");
    return (
        <div className={mainLogo()}>
            <Link to={"#"}>
                <svg className={mainLogo("svg")} width="189" height="39" viewBox="0 0 189 39" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M19.5 0C30.27 0 39 8.73004 39 19.5C39 30.27 30.27 39 19.5 39C8.73004 39 0 30.27 0 19.5C0 8.73004 8.73004 0 19.5 0Z"
                          fill="#FBD051"/>
                    <path
                        d="M12.1077 30.6361H9.0546C8.70385 30.6361 8.5596 30.454 8.68103 30.1063L15.1438 11.6346H11.0454C10.7349 11.6346 10.5779 11.4888 10.5779 11.198V8.83094C10.5779 8.51963 10.7341 8.36379 11.0454 8.36379C16.6821 8.36379 22.3185 8.36379 27.9552 8.36379C28.2673 8.36379 28.4223 8.52041 28.4223 8.83094V11.198C28.4223 11.488 28.2665 11.6346 27.9552 11.6346H23.8634L30.3261 30.1063C30.4298 30.4598 30.3052 30.6361 29.9522 30.6361H26.8991C26.6087 30.6361 26.4319 30.512 26.3693 30.2626L24.8433 25.559H14.1638L12.6375 30.2626C12.5574 30.5112 12.3765 30.6361 12.1077 30.6361ZM32.8177 15.2527C34.7277 14.5052 36.8245 14.1316 39.1084 14.1316C41.267 14.1316 43.0006 14.7024 44.3081 15.8444C45.6164 16.9863 46.2703 18.6882 46.2703 20.9513V24.3768C46.2703 26.3908 45.6264 27.9995 44.3394 29.2037C43.0525 30.4076 41.4024 31.0097 39.3884 31.0097C38.2468 31.0097 37.1462 30.7815 36.0874 30.3248V36.0857C36.0874 36.397 35.9315 36.5528 35.6202 36.5528H32.9422C32.6309 36.5528 32.4755 36.397 32.4755 36.0857V15.7512C32.4755 15.5017 32.5896 15.3358 32.8177 15.2527ZM39.0771 27.8336C41.4229 27.8336 42.5958 26.6913 42.5958 24.4081V20.9207C42.5958 19.633 42.2949 18.7095 41.6932 18.1488C41.0911 17.5884 40.1981 17.3077 39.0148 17.3077C37.7688 17.3077 36.7931 17.4531 36.0874 17.7439V26.9616C36.9385 27.5428 37.9347 27.8336 39.0771 27.8336ZM62.9925 30.6361H59.8474C59.5775 30.6361 59.3907 30.5425 59.2867 30.3562L54.4292 23.9719L53.1522 25.342V30.169C53.1522 30.4803 52.996 30.6361 52.6847 30.6361H50.1003C49.789 30.6361 49.6335 30.4803 49.6335 30.169V14.9727C49.6335 14.6614 49.789 14.5052 50.1003 14.5052H52.6847C52.996 14.5052 53.1522 14.6614 53.1522 14.9727V20.9822L58.7263 14.7542C58.8505 14.5883 59.0376 14.5052 59.2867 14.5052H62.4322C62.6391 14.5052 62.7694 14.557 62.8212 14.6614C62.873 14.765 62.8371 14.8996 62.7122 15.0655L56.8268 21.4498L63.3038 30.0758C63.532 30.4494 63.4284 30.6361 62.9925 30.6361ZM78.3443 24.7194C78.3443 26.6503 77.7012 28.1813 76.4142 29.3124C75.1264 30.4443 73.4032 31.0097 71.245 31.0097C69.0856 31.0097 67.3624 30.4443 66.0754 29.3124C64.7884 28.1813 64.1446 26.6503 64.1446 24.7194V20.5468C64.1446 18.5954 64.7884 17.0381 66.0754 15.8753C67.3624 14.7132 69.0856 14.1316 71.245 14.1316C73.4032 14.1316 75.1264 14.7132 76.4142 15.8753C77.7012 17.0381 78.3443 18.5954 78.3443 20.5468V24.7194ZM67.7882 24.7194C67.7882 26.7539 68.9402 27.7714 71.245 27.7714C72.3661 27.7714 73.2223 27.5119 73.8135 26.9925C74.4056 26.4736 74.701 25.7156 74.701 24.7194V20.5468C74.701 19.5294 74.4002 18.7455 73.7985 18.1952C73.1964 17.6457 72.3448 17.3703 71.245 17.3703C70.1239 17.3703 69.2673 17.6403 68.6753 18.1801C68.084 18.7196 67.7882 19.5089 67.7882 20.5468V24.7194ZM85.5994 30.6361H82.7659C82.4751 30.6361 82.3297 30.4803 82.3297 30.169V8.83751C82.3297 8.52621 82.4751 8.37075 82.7659 8.37075H86.1601C86.4092 8.37075 86.5751 8.48522 86.6582 8.71338L90.4573 15.7825C91.2462 17.2559 92.1286 19.0835 93.1043 21.263H93.2285C94.2045 19.0835 95.087 17.2559 95.8755 15.7825L99.6436 8.71338C99.7682 8.48522 99.9445 8.37075 100.173 8.37075H103.536C103.848 8.37075 104.003 8.52621 104.003 8.83751V30.169C104.003 30.4803 103.848 30.6361 103.536 30.6361H100.702C100.412 30.6361 100.266 30.4803 100.266 30.169V23.9096C100.266 21.4602 100.349 18.2006 100.515 14.1316L100.422 14.1003C99.7991 15.4499 98.8652 17.3703 97.6192 19.8611L94.8793 25.1866C94.7753 25.4151 94.5994 25.5292 94.3495 25.5292H91.9832C91.7338 25.5292 91.5579 25.4151 91.4538 25.1866L88.7136 19.8611C87.468 17.3703 86.5341 15.4499 85.9107 14.1003L85.8179 14.1316C85.9838 18.2006 86.0665 21.4602 86.0665 23.9096V30.169C86.0665 30.4803 85.9107 30.6361 85.5994 30.6361ZM121.598 20.5159V23.6606C121.598 23.9514 121.441 24.0968 121.13 24.0968H111.664V24.9681C111.664 25.9028 111.96 26.6135 112.551 27.1016C113.143 27.5896 113.947 27.8336 114.965 27.8336C116.48 27.8336 117.944 27.3556 119.356 26.4012C119.604 26.2346 119.812 26.2659 119.978 26.4941L121.255 28.2072C121.463 28.4357 121.432 28.6535 121.162 28.8611C119.356 30.2935 117.248 31.0097 114.84 31.0097C112.93 31.0097 111.316 30.4853 109.998 29.4373C108.68 28.3886 108.021 26.8893 108.021 24.9375V20.5159C108.021 18.3769 108.685 16.7787 110.014 15.7198C111.342 14.6614 112.961 14.1316 114.871 14.1316C116.76 14.1316 118.354 14.6614 119.651 15.7198C120.949 16.7787 121.598 18.3769 121.598 20.5159ZM118.079 20.4845C118.079 19.4044 117.778 18.6055 117.176 18.0865C116.574 17.5672 115.806 17.3077 114.871 17.3077C112.733 17.3077 111.664 18.3665 111.664 20.4845V21.2935H118.079V20.4845ZM128.323 16.0625C129.404 15.5435 130.607 15.284 131.936 15.284C133.908 15.284 135.507 15.8393 136.731 16.95C137.956 18.0606 138.569 19.633 138.569 21.6675V24.4391C138.569 26.619 137.899 28.259 136.56 29.3592C135.221 30.4594 133.555 31.0097 131.562 31.0097C129.632 31.0097 128.007 30.4544 126.689 29.3437C125.37 28.2331 124.711 26.5876 124.711 24.4081V15.0036C124.711 13.0937 125.339 11.5886 126.595 10.4884C127.852 9.3878 129.341 8.67161 131.064 8.33981C133.535 7.9036 135.102 7.51921 135.766 7.18741C136.057 7.0625 136.264 7.11509 136.389 7.34325L137.541 9.30466C137.666 9.59547 137.613 9.80313 137.385 9.92804C136.659 10.343 134.977 10.8515 132.341 11.4532C131.759 11.5986 131.271 11.744 130.877 11.8894C130.483 12.0349 130.067 12.2425 129.632 12.5121C129.195 12.7824 128.868 13.1354 128.651 13.5713C128.432 14.0071 128.323 14.5261 128.323 15.1282V16.0625ZM131.531 27.7714C132.507 27.7714 133.311 27.5011 133.944 26.9616C134.577 26.4217 134.894 25.5915 134.894 24.4704V21.7297C134.894 19.4876 133.794 18.3665 131.593 18.3665C130.368 18.3665 129.279 18.6159 128.323 19.114V24.4391C128.323 25.581 128.625 26.4217 129.227 26.9616C129.829 27.5011 130.597 27.7714 131.531 27.7714ZM155.01 20.5159V23.6606C155.01 23.9514 154.855 24.0968 154.543 24.0968H145.077V24.9681C145.077 25.9028 145.373 26.6135 145.964 27.1016C146.556 27.5896 147.36 27.8336 148.378 27.8336C149.893 27.8336 151.356 27.3556 152.768 26.4012C153.017 26.2346 153.225 26.2659 153.391 26.4941L154.668 28.2072C154.876 28.4357 154.845 28.6535 154.575 28.8611C152.768 30.2935 150.661 31.0097 148.253 31.0097C146.343 31.0097 144.729 30.4853 143.411 29.4373C142.092 28.3886 141.433 26.8893 141.433 24.9375V20.5159C141.433 18.3769 142.098 16.7787 143.426 15.7198C144.755 14.6614 146.374 14.1316 148.284 14.1316C150.173 14.1316 151.767 14.6614 153.065 15.7198C154.362 16.7787 155.01 18.3769 155.01 20.5159ZM151.492 20.4845C151.492 19.4044 151.191 18.6055 150.588 18.0865C149.987 17.5672 149.219 17.3077 148.284 17.3077C146.146 17.3077 145.077 18.3665 145.077 20.4845V21.2935H151.492V20.4845ZM162.826 25.342C162.432 27.3147 161.83 28.6999 161.02 29.4996C160.211 30.2989 158.924 30.7297 157.159 30.792C156.868 30.792 156.723 30.6361 156.723 30.3248V28.0513C156.723 27.7814 156.868 27.6155 157.159 27.5529C157.761 27.5119 158.233 27.2628 158.576 26.8057C158.918 26.349 159.204 25.5292 159.432 24.3455C159.785 22.2905 160.045 19.1558 160.211 14.9414C160.252 14.6506 160.407 14.5052 160.678 14.5052H171.265C171.577 14.5052 171.733 14.6506 171.733 14.9414V30.169C171.733 30.4803 171.577 30.6361 171.265 30.6361H168.587C168.276 30.6361 168.12 30.4803 168.12 30.169V17.6816H163.574C163.47 20.6504 163.221 23.2039 162.826 25.342ZM182.569 30.6361H176.123C175.811 30.6361 175.656 30.4803 175.656 30.169V14.9414C175.656 14.6506 175.811 14.5052 176.123 14.5052H178.801C179.112 14.5052 179.268 14.6506 179.268 14.9414V19.737H182.569C184.479 19.737 186.021 20.225 187.194 21.2007C188.366 22.1764 188.953 23.526 188.953 25.2488C188.953 27.0962 188.387 28.4562 187.255 29.3283C186.124 30.1999 184.562 30.6361 182.569 30.6361ZM179.268 22.6954V27.6465H181.946C184.188 27.6465 185.309 26.8266 185.309 25.1866C185.33 24.3358 185.06 23.707 184.5 23.3029C183.939 22.898 183.088 22.6954 181.946 22.6954H179.268ZM18.6435 11.6346L15.2227 22.1629H23.7841L20.364 11.6346H18.6435Z"
                        fill="black"/>
                </svg>
            </Link>
        </div>
    );
};

