const Icon = ({weather}) => {
    return ( 
        <div>
            {(weather === 'Haze' || weather === 'Tornado' || weather === 'Squall' || weather === 'Ash' || weather === 'Dust' || weather === 'Sand' || weather === 'Fog' || weather === 'Dust' || weather === 'Mist' || weather === 'Smoke') ? (
                
                <svg width="150" height="150" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9999 17.1081C27.9999 19.381 26.5216 21.2879 24.5 21.9304V23.9999C27.6452 23.3079 29.9999 20.4852 29.9999 17.1081C29.9999 13.2122 26.8659 10.054 22.9999 10.054C22.8016 10.054 22.6052 10.0623 22.4111 10.0786C20.9765 5.95612 17.0808 3 12.5 3C6.70101 3 2 7.73737 2 13.5812C2 17.9978 4.68511 21.7823 8.5 23.3676V21.1542C5.82613 19.712 4 16.868 4 13.5812C4 8.82738 7.82008 5 12.5 5C16.1234 5 19.2314 7.29436 20.45 10.5367L20.4583 10.5334C20.6894 11.1592 20.8514 11.8194 20.9349 12.5044C21.5654 12.2149 22.265 12.054 22.9999 12.054C25.7469 12.054 27.9999 14.3023 27.9999 17.1081ZM23 18H13V20H23V18ZM21 22H11V24H21V22ZM13 26H23V28H13V26Z" fill="url(#paint0_linear_9_2192)"/>
                <defs>
                <linearGradient id="paint0_linear_9_2192" x1="16" y1="3" x2="16" y2="28" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CED3EA"/>
                <stop offset="1" stop-color="#7E83A9"/>
                </linearGradient>
                </defs>
                </svg>

                
                ) : ''}
                {weather == 'Clouds' ? (
                
                <svg width="150" height="150" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 8.05595C11.8857 8.01895 12.2449 8 12.6083 8C17.469 8 21.5661 11.3898 22.821 16.0139C22.9215 16.0073 23.0225 16.0031 23.1241 16.0012C23.0828 16.0005 23.0414 16.0001 23 16.0001L22.9664 16.0002L22.9664 16H24.5H24.5602V15.9995C26.4654 15.9673 28 14.4129 28 12.5C28 10.567 26.433 9 24.5 9C23.8509 9 23.2432 9.17666 22.7221 9.48451C22.7206 8.92577 22.6357 8.38663 22.4793 7.87885C21.7001 5.62147 19.5567 4 17.0345 4C14.4468 4 12.2578 5.70676 11.5317 8.05595ZM27.1766 17.3059C28.8861 18.5759 30 20.653 30 23C30 26.866 26.9776 30 23.2493 30C23.1658 30 23.0827 29.9984 23 29.9953V30H12.7671V29.9988C12.7143 29.9996 12.6613 30 12.6083 30C6.74949 30 2 25.0751 2 19C2 14.0943 5.09693 9.9387 9.37412 8.52057C9.96691 4.82406 13.1709 2 17.0345 2C20.3494 2 23.1787 4.07884 24.2899 7.00394C24.3596 7.00132 24.4296 7 24.5 7C27.5375 7 30 9.46243 30 12.5C30 14.5659 28.8609 16.3658 27.1766 17.3059ZM23 28H12.7671H12.652V27.9999L12.6083 28C7.92179 28 4 24.0395 4 19C4 13.9605 7.92179 10 12.6083 10C16.5839 10 20.0091 12.85 20.9569 16.7911L20.9599 16.7899C21.0937 17.3367 21.1791 17.9037 21.2108 18.4855C21.8339 18.1732 22.5272 18 23.2493 18C25.8053 18 28 20.1696 28 23C28 25.8105 25.8359 27.9695 23.3029 27.9996V28H23Z" fill="url(#paint0_linear_9_1040)"/>
                <defs>
                <linearGradient id="paint0_linear_9_1040" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B2D4F7"/>
                <stop offset="1" stop-color="#D9E2F3"/>
                </linearGradient>
                </defs>
                </svg>
                

                
                ) : ''}
                {weather == 'Clear' ? (
                
                <svg width="150" height="150" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 8.05595C11.8857 8.01895 12.2449 8 12.6083 8C17.469 8 21.5661 11.3898 22.821 16.0139C22.9215 16.0073 23.0225 16.0031 23.1241 16.0012C23.0828 16.0005 23.0414 16.0001 23 16.0001L22.9664 16.0002L22.9664 16H24.5H24.5602V15.9995C26.4654 15.9673 28 14.4129 28 12.5C28 10.567 26.433 9 24.5 9C23.8509 9 23.2432 9.17666 22.7221 9.48451C22.7206 8.92577 22.6357 8.38663 22.4793 7.87885C21.7001 5.62147 19.5567 4 17.0345 4C14.4468 4 12.2578 5.70676 11.5317 8.05595ZM27.1766 17.3059C28.8861 18.5759 30 20.653 30 23C30 26.866 26.9776 30 23.2493 30C23.1658 30 23.0827 29.9984 23 29.9953V30H12.7671V29.9988C12.7143 29.9996 12.6613 30 12.6083 30C6.74949 30 2 25.0751 2 19C2 14.0943 5.09693 9.9387 9.37412 8.52057C9.96691 4.82406 13.1709 2 17.0345 2C20.3494 2 23.1787 4.07884 24.2899 7.00394C24.3596 7.00132 24.4296 7 24.5 7C27.5375 7 30 9.46243 30 12.5C30 14.5659 28.8609 16.3658 27.1766 17.3059ZM23 28H12.7671H12.652V27.9999L12.6083 28C7.92179 28 4 24.0395 4 19C4 13.9605 7.92179 10 12.6083 10C16.5839 10 20.0091 12.85 20.9569 16.7911L20.9599 16.7899C21.0937 17.3367 21.1791 17.9037 21.2108 18.4855C21.8339 18.1732 22.5272 18 23.2493 18C25.8053 18 28 20.1696 28 23C28 25.8105 25.8359 27.9695 23.3029 27.9996V28H23Z" fill="url(#paint0_linear_9_1040)"/>
                <defs>
                <linearGradient id="paint0_linear_9_1040" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B2D4F7"/>
                <stop offset="1" stop-color="#D9E2F3"/>
                </linearGradient>
                </defs>
                </svg>
                

                
                ) : ''}
                {weather == 'Snow' ? (
                
                <svg width="150" height="150" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9944 16.0012L8.88094 18.992L4.82766 17.1314L3.99561 18.9618L6.76174 20.2315L5.24022 21.1214L6.2305 22.859L7.75177 21.9693L7.45421 25.0305L9.43493 25.2156L9.87098 20.7298L14.9868 17.7376V23.7528L11.3669 26.3801L12.5417 27.9988L14.9868 26.2241V28H16.9868V26.224L19.4321 27.9988L20.6069 26.3801L16.9868 23.7527V17.7514L22.1141 20.7503L22.5502 25.2367L24.531 25.0515L24.2333 21.9898L25.7549 22.8798L26.7452 21.1422L25.2239 20.2523L27.9896 18.9828L27.1575 17.1525L23.1047 19.0128L17.9556 16.0012L23.0888 12.9988L27.1684 14.8715L28.0005 13.0412L25.208 11.7593L26.7472 10.859L25.757 9.12142L24.2471 10.0045L24.5419 6.97248L22.5611 6.78729L22.1279 11.244L16.9868 14.251V8.26755L20.6301 5.62327L19.4554 4.00466L16.9868 5.79629V4H14.9868V5.76246L12.565 4.00466L11.3902 5.62327L14.9868 8.23371V14.2648L9.88669 11.2818L9.44778 6.7665L7.46706 6.95168L7.76749 10.0423L6.2285 9.14217L5.23821 10.8798L6.74798 11.7628L4.00846 13.0204L4.84051 14.8507L8.86719 13.0023L13.9944 16.0012Z" fill="url(#paint0_linear_9_4034)"/>
                <defs>
                <linearGradient id="paint0_linear_9_4034" x1="15.998" y1="4" x2="15.998" y2="28" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B2D4F7"/>
                <stop offset="1" stop-color="#D9E2F3"/>
                </linearGradient>
                </defs>
                </svg>
         ) : ''}
         {weather == 'Rain' ? (
                
                <svg width="150" height="150" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13C2 17.3628 4.44938 21.1323 8 22.9107V20.6003C5.61019 19.0152 4 16.2291 4 13C4 7.96046 7.92179 4 12.6083 4C16.5839 4 20.0091 6.85004 20.9569 10.7911L20.9599 10.7899C21.0937 11.3367 21.1791 11.9037 21.2108 12.4855C21.8339 12.1732 22.5272 12 23.2493 12C25.8053 12 28 14.1696 28 17C28 18.7105 27.1984 20.1797 26 21.0745V23.3944C28.3573 22.3025 30 19.8501 30 17C30 13.134 26.9776 10 23.2493 10C23.1054 10 22.9626 10.0047 22.821 10.0139C21.5661 5.38976 17.469 2 12.6083 2C6.74949 2 2 6.92487 2 13ZM18.719 20.2026C18.9287 20.3237 19.2571 20.2708 19.4251 19.9798C19.5171 19.8204 19.6353 19.4894 19.721 18.9505C19.7551 18.7357 19.7808 18.5091 19.7995 18.2764C19.2154 18.6896 18.7729 19.1085 18.5588 19.4795C18.3908 19.7705 18.5093 20.0815 18.719 20.2026ZM19.7944 15.9217C20.8367 15.3377 21.7192 15.0042 21.7192 15.0042C21.7192 15.0042 21.8347 15.9432 21.8392 17.1264C21.8441 18.4226 21.7159 20.0116 21.157 20.9801C20.4541 22.198 18.915 22.6254 17.7192 21.9348C16.5235 21.2442 16.124 19.6971 16.8269 18.4792C17.4402 17.4164 18.7047 16.5323 19.7944 15.9217ZM12.1161 21.2203C12.3258 21.3414 12.6543 21.2885 12.8223 20.9975C12.9142 20.8381 13.0325 20.5071 13.1181 19.9682C13.1522 19.7534 13.178 19.5268 13.1966 19.2941C12.6126 19.7073 12.17 20.1262 11.9559 20.4972C11.788 20.7882 11.9064 21.0992 12.1161 21.2203ZM13.1916 16.9394C14.2339 16.3554 15.1164 16.0218 15.1164 16.0218C15.1164 16.0218 15.2318 16.9609 15.2363 18.1441C15.2413 19.4402 15.1131 21.0293 14.5541 21.9978C13.8513 23.2157 12.3121 23.6431 11.1164 22.9525C9.92065 22.2619 9.52113 20.7148 10.224 19.4969C10.8374 18.4341 12.1018 17.5499 13.1916 16.9394ZM21.6793 26.1129C21.5113 26.4039 21.1829 26.4567 20.9732 26.3356C20.7635 26.2145 20.645 25.9035 20.813 25.6125C21.0271 25.2415 21.4696 24.8227 22.0537 24.4095C22.0351 24.6421 22.0093 24.8687 21.9752 25.0836C21.8895 25.6225 21.7713 25.9535 21.6793 26.1129ZM23.9734 21.1372C23.9734 21.1372 23.0909 21.4708 22.0486 22.0548C20.9589 22.6653 19.6944 23.5495 19.0811 24.6122C18.3782 25.8301 18.7777 27.3772 19.9734 28.0678C21.1692 28.7584 22.7083 28.331 23.4112 27.1131C23.9701 26.1447 24.0983 24.5556 24.0934 23.2594C24.0889 22.0763 23.9734 21.1372 23.9734 21.1372ZM14.2549 27.9375C14.4645 28.0586 14.793 28.0058 14.961 27.7147C15.053 27.5554 15.1712 27.2244 15.2568 26.6855C15.291 26.4706 15.3167 26.244 15.3354 26.0113C14.7513 26.4246 14.3088 26.8434 14.0947 27.2144C13.9267 27.5054 14.0452 27.8164 14.2549 27.9375ZM15.3303 23.6566C16.3726 23.0727 17.2551 22.7391 17.2551 22.7391C17.2551 22.7391 17.3706 23.6781 17.3751 24.8613C17.38 26.1575 17.2518 27.7466 16.6929 28.715C15.99 29.9329 14.4509 30.3603 13.2551 29.6697C12.0594 28.9791 11.6599 27.432 12.3628 26.2141C12.9761 25.1514 14.2406 24.2672 15.3303 23.6566Z" fill="url(#paint0_linear_9_2362)"/>
                <defs>
                <linearGradient id="paint0_linear_9_2362" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#95B6F6"/>
                <stop offset="1" stop-color="#5193DE"/>
                </linearGradient>
                </defs>
                </svg>

         ) : ''}
          
                {weather == 'Drizzle' ? (
                
                <svg width="150" height="150" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 17C30 20.2381 27.8796 22.9627 25 23.7623V21.6467C26.7314 20.9218 28 19.1518 28 17C28 14.1696 25.8053 12 23.2493 12C22.5272 12 21.8339 12.1732 21.2108 12.4855C21.1791 11.9037 21.0937 11.3367 20.9599 10.7899L20.9569 10.7911C20.0091 6.85004 16.5839 4 12.6083 4C7.92179 4 4 7.96046 4 13C4 16.2291 5.61019 19.0152 8 20.6003V22.9107C4.44938 21.1323 2 17.3628 2 13C2 6.92487 6.74949 2 12.6083 2C17.469 2 21.5661 5.38976 22.821 10.0139C22.9626 10.0047 23.1054 10 23.2493 10C26.9776 10 30 13.134 30 17ZM10.001 22.4091C10.0009 21.9308 10.1533 21.4108 10.3609 20.9244C10.8044 19.8856 11.5 19 11.5 19C11.5 19 12.1643 19.9175 12.609 20.9252C12.8327 21.4321 13.0009 21.9619 13.001 22.4091C13.0013 23.2877 12.33 24 11.5015 24C10.6731 24 10.0013 23.2877 10.001 22.4091ZM15.3609 20.9244C15.1533 21.4108 15.0009 21.9308 15.001 22.4091C15.0013 23.2877 15.6731 24 16.5015 24C17.33 24 18.0013 23.2877 18.001 22.4091C18.0009 21.9619 17.8327 21.4321 17.609 20.9252C17.1643 19.9175 16.5 19 16.5 19C16.5 19 15.8044 19.8856 15.3609 20.9244ZM12.8756 27.4091C12.8754 26.9308 13.0278 26.4108 13.2354 25.9244C13.6789 24.8856 14.3745 24 14.3745 24C14.3745 24 15.0388 24.9175 15.4835 25.9252C15.7072 26.4321 15.8754 26.9619 15.8756 27.4091C15.8758 28.2877 15.2045 29 14.376 29C13.5476 29 12.8758 28.2877 12.8756 27.4091ZM20.3609 20.9244C20.1533 21.4108 20.0009 21.9308 20.001 22.4091C20.0013 23.2877 20.6731 24 21.5015 24C22.33 24 23.0013 23.2877 23.001 22.4091C23.0009 21.9619 22.8327 21.4321 22.609 20.9252C22.1643 19.9175 21.5 19 21.5 19C21.5 19 20.8044 19.8856 20.3609 20.9244ZM17.8905 27.4091C17.8903 26.9308 18.0427 26.4108 18.2503 25.9244C18.6938 24.8856 19.3894 24 19.3894 24C19.3894 24 20.0537 24.9175 20.4984 25.9252C20.7221 26.4321 20.8903 26.9619 20.8904 27.4091C20.8907 28.2877 20.2194 29 19.3909 29C18.5625 29 17.8907 28.2877 17.8905 27.4091Z" fill="url(#paint0_linear_9_3214)"/>
                <defs>
                <linearGradient id="paint0_linear_9_3214" x1="16" y1="2" x2="16" y2="29" gradientUnits="userSpaceOnUse">
                <stop stop-color="#95B6F6"/>
                <stop offset="1" stop-color="#5193DE"/>
                </linearGradient>
                </defs>
                </svg>

         ) : ''}
        
                {weather == 'Thunderstorm' ? (
                
                <svg width="150" height="150" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 23.3473C4.91752 21.8163 2 17.7615 2 13C2 6.92487 6.74949 2 12.6083 2C17.469 2 21.5661 5.38976 22.821 10.0139C22.9626 10.0047 23.1054 10 23.2493 10C26.9776 10 30 13.134 30 17C30 20.866 26.9776 24 23.2493 24C23.1658 24 23.0827 23.9984 23 23.9953V22H23.3029V21.9996C25.8359 21.9695 28 19.8105 28 17C28 14.1696 25.8053 12 23.2493 12C22.5272 12 21.8339 12.1732 21.2108 12.4855C21.1791 11.9037 21.0937 11.3367 20.9599 10.7899L20.9569 10.7911C20.0091 6.85004 16.5839 4 12.6083 4C7.92179 4 4 7.96046 4 13C4 16.6616 6.0703 19.7535 9 21.1706V23.3473Z" fill="url(#paint0_linear_9_3765)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.168 16.4453L18.8321 17.5547L15.8685 22H20.9557L15.4773 29.5855L13.856 28.4145L17.0442 24H12.1315L17.168 16.4453Z" fill="url(#paint1_linear_9_3765)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3609 26.9244C20.1533 27.4108 20.0009 27.9308 20.001 28.4091C20.0013 29.2877 20.6731 30 21.5015 30C22.33 30 23.0013 29.2877 23.001 28.4091C23.0009 27.9619 22.8327 27.4321 22.609 26.9252C22.1643 25.9175 21.5 25 21.5 25C21.5 25 20.8044 25.8856 20.3609 26.9244Z" fill="url(#paint2_linear_9_3765)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.36092 26.9244C9.15328 27.4108 9.0009 27.9308 9.00105 28.4091C9.00132 29.2877 9.67311 30 10.5015 30C11.33 30 12.0013 29.2877 12.001 28.4091C12.0009 27.9619 11.8327 27.4321 11.609 26.9252C11.1643 25.9175 10.5 25 10.5 25C10.5 25 9.80441 25.8856 9.36092 26.9244Z" fill="url(#paint3_linear_9_3765)"/>
                    <defs>
                    <linearGradient id="paint0_linear_9_3765" x1="16" y1="2" x2="16" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#95B6F6"/>
                    <stop offset="1" stop-color="#5193DE"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_9_3765" x1="16.5436" y1="16.4453" x2="16.5436" y2="29.5855" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F5BD52"/>
                    <stop offset="1" stop-color="#F5DA79"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_9_3765" x1="21.5" y1="25" x2="21.5" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#95B6F6"/>
                    <stop offset="1" stop-color="#5193DE"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_9_3765" x1="10.5" y1="25" x2="10.5" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#95B6F6"/>
                    <stop offset="1" stop-color="#5193DE"/>
                    </linearGradient>
                    </defs>
                    </svg>

         ) : ''}
        </div>
     );
}
 
export default Icon;