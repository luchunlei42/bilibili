<!--  -->
<template>
  <div id="arc_toolbar_report" class="video-toolbar-container" data-v-c9c871ec data-v-66bd1e0b>
    <div class="video-toolbar-left" data-v-c9c871ec>
      <!---->
      <div class="toolbar-left-item-wrap" data-v-c9c871ec>
        <div title="点赞（Q）" class="video-like video-toolbar-left-item" v-bind:class="{on : isLike}">
          <!---->
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            class="video-like-icon video-toolbar-item-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
              fill="currentColor"
            />
          </svg>
          <span class="video-like-info video-toolbar-item-text">{{ like }}</span>
        </div>
        <!---->
      </div>
      <div class="toolbar-left-item-wrap" data-v-c9c871ec>
        <div
          title="投币（W）"
          class="video-coin video-toolbar-left-item"
          data-v-47535144
          data-v-c9c871ec
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            class="video-coin-icon video-toolbar-item-icon"
            data-v-47535144
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z"
              fill="currentColor"
            />
          </svg>
          <span class="video-coin-info video-toolbar-item-text" data-v-47535144>9090</span>
        </div>
        <!---->
        <!---->
      </div>
      <div class="toolbar-left-item-wrap" data-v-c9c871ec>
        <div
          title="收藏（E）"
          class="video-fav video-toolbar-left-item"
          data-v-912a7b4a
          data-v-c9c871ec
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            class="video-fav-icon video-toolbar-item-icon"
            data-v-912a7b4a
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
              fill="currentColor"
            />
          </svg>
          <span class="video-fav-info video-toolbar-item-text" data-v-912a7b4a>6292</span>
        </div>
        <!---->
        <!---->
      </div>
      <div class="toolbar-left-item-wrap" data-v-c9c871ec>
        <div class="video-share-wrap video-toolbar-left-item" data-v-ea5a070a data-v-c9c871ec>
          <span data-v-ea5a070a>
            <div
              data-v-ea5a070a
              id="share-btn-outer"
              class="video-share van-popover__reference"
              aria-describedby="van-popover-4424"
              tabindex="0"
            >
              <svg
                data-v-ea5a070a
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
                class="video-share-icon video-toolbar-item-icon"
              >
                <path
                  d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"
                  fill="currentColor"
                />
              </svg>
              <div data-v-ea5a070a class="video-share-info video-toolbar-item-text">
                <span data-v-ea5a070a class="video-share-info-text">991</span>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="triple-oldfan-entry" style="display:none;" data-v-4ef3ea3d data-v-c9c871ec>
        <img
          src="//s1.hdslb.com/bfs/static/jinkela/video/asserts/oldfanIcon.svg"
          alt
          class="oldfan-icon"
          data-v-4ef3ea3d
        />
        <div class="oldfan-hover-panel" style="display:none;" data-v-4ef3ea3d>
          <div class="panel-main" data-v-4ef3ea3d>
            <img
              src="//s1.hdslb.com/bfs/static/jinkela/video/asserts/oldfanIcon.svg"
              alt
              class="oldfan-panel-icon"
              data-v-4ef3ea3d
            />
            <div class="panel-info" data-v-4ef3ea3d>
              <div class="panel-info-txt" data-v-4ef3ea3d>
                <span class="txt-at-top" data-v-4ef3ea3d></span>
                <span class="txt-at-bottom" data-v-4ef3ea3d></span>
              </div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjA0MDE4IDYuOTk5MTRMNS4xMDEyNyA5LjkzODA2QzQuODQ0OTkgMTAuMTk0MyA0Ljg0NDk5IDEwLjYwOTkgNS4xMDEyNyAxMC44NjYxQzUuMzU3NTUgMTEuMTIyNCA1Ljc3MzA3IDExLjEyMjQgNi4wMjkzNSAxMC44NjYxTDkuNDMyMyA3LjQ2MzE4QzkuNjg4NTggNy4yMDY5IDkuNjg4NTggNi43OTEzOSA5LjQzMjMgNi41MzUxTDYuMDI5MzUgMy4xMzIxNUM1Ljc3MzA2IDIuODc1ODcgNS4zNTc1NSAyLjg3NTg3IDUuMTAxMjcgMy4xMzIxNUM0Ljg0NDk5IDMuMzg4NDMgNC44NDQ5OSAzLjgwMzk1IDUuMTAxMjcgNC4wNjAyM0w4LjA0MDE4IDYuOTk5MTRaIiBmaWxsPSIjNjE2NjZEIi8+Cjwvc3ZnPgo="
                alt
                class="rightarrow-icon"
                data-v-4ef3ea3d
              />
            </div>
          </div>
          <div class="split-line" data-v-4ef3ea3d></div>
          <div class="close-panel-btn" data-v-4ef3ea3d>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuOTAwMTMgMTAuMUw2Ljk5OTQ3IDcuMDAwNjFNMTAuMTAwMiAzLjg5OTg4TDYuOTk5NDcgNy4wMDA2MU02Ljk5OTQ3IDcuMDAwNjFMMy44OTk1MSAzLjkwMDY2TTYuOTk5NDcgNy4wMDA2MUwxMC4wOTk2IDEwLjEwMDciIHN0cm9rZT0iIzYxNjY2RCIgc3Ryb2tlLXdpZHRoPSIxLjIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy42NDc4MiAzLjY0OTMzQzMuNzg2NjMgMy41MTA1MSA0LjAxMTcxIDMuNTEwNTEgNC4xNTA1MiAzLjY0OTMzTDYuOTk5MTMgNi40OTc5M0w5Ljg0ODUgMy42NDg1NUM5Ljk4NzMyIDMuNTA5NzMgMTAuMjEyNCAzLjUwOTczIDEwLjM1MTIgMy42NDg1NUMxMC40OSAzLjc4NzM3IDEwLjQ5IDQuMDEyNDQgMTAuMzUxMiA0LjE1MTI2TDcuNTAxODMgNy4wMDA2NEwxMC4zNTA2IDkuODQ5NEMxMC40ODk0IDkuOTg4MjIgMTAuNDg5NCAxMC4yMTMzIDEwLjM1MDYgMTAuMzUyMUMxMC4yMTE4IDEwLjQ5MDkgOS45ODY3MSAxMC40OTA5IDkuODQ3ODkgMTAuMzUyMUw2Ljk5OTEzIDcuNTAzMzRMNC4xNTExNCAxMC4zNTEzQzQuMDEyMzIgMTAuNDkwMiAzLjc4NzI1IDEwLjQ5MDIgMy42NDg0MyAxMC4zNTEzQzMuNTA5NjEgMTAuMjEyNSAzLjUwOTYxIDkuOTg3NDQgMy42NDg0MyA5Ljg0ODYyTDYuNDk2NDIgNy4wMDA2NEwzLjY0NzgyIDQuMTUyMDNDMy41MDkgNC4wMTMyMSAzLjUwOSAzLjc4ODE0IDMuNjQ3ODIgMy42NDkzM1oiIGZpbGw9IiM2MTY2NkQiLz4KPC9zdmc+Cg=="
              alt
              class="close-icon"
              data-v-4ef3ea3d
            />
          </div>
        </div>
      </div>
    </div>
    <div class="video-toolbar-right" data-v-c9c871ec>
      <!---->
      <div
        data-v-423a8fa8
        data-v-c9c871ec
        class="video-note video-toolbar-right-item toolbar-right-note"
      >
        <div
          data-v-423a8fa8
          labeltooltip="该浏览器暂不支持记笔记功能，推荐使用Chrome浏览器"
          class="video-note-inner"
          style="display: none;"
        >
          <svg
            data-v-423a8fa8
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="video-note-icon video-toolbar-item-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.75 10C6.75 9.58579 7.08579 9.25 7.5 9.25H16.5C16.9142 9.25 17.25 9.58579 17.25 10C17.25 10.4142 16.9142 10.75 16.5 10.75H7.5C7.08579 10.75 6.75 10.4142 6.75 10Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.75 14C6.75 13.5858 7.08579 13.25 7.5 13.25H13C13.4142 13.25 13.75 13.5858 13.75 14C13.75 14.4142 13.4142 14.75 13 14.75H7.5C7.08579 14.75 6.75 14.4142 6.75 14Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 5.25C9.48998 5.25 7.29811 5.3777 5.75109 5.50315C4.79223 5.58091 4.05407 6.31053 3.96899 7.25687C3.85555 8.51874 3.75 10.1822 3.75 12C3.75 13.8178 3.85555 15.4813 3.96899 16.7431C4.05408 17.6895 4.79214 18.4191 5.75095 18.4968C7.17292 18.6122 9.14013 18.7294 11.3987 18.7476C11.951 18.752 12.3951 19.2033 12.3906 19.7556C12.3862 20.3079 11.9349 20.752 11.3826 20.7475C9.06584 20.7289 7.04905 20.6087 5.58929 20.4903C3.67182 20.3348 2.15034 18.8499 1.97703 16.9222C1.8597 15.6172 1.75 13.892 1.75 12C1.75 10.108 1.8597 8.38283 1.97703 7.07779C2.15034 5.15 3.67203 3.66518 5.58944 3.50969C7.17721 3.38094 9.42438 3.25 12 3.25C14.5759 3.25 16.8232 3.38096 18.411 3.50973C20.3281 3.6652 21.8497 5.14946 22.0231 7.07716C22.1127 8.07392 22.1977 9.31512 22.233 10.6888C22.2471 11.2409 21.811 11.6999 21.2589 11.7141C20.7068 11.7282 20.2478 11.2921 20.2336 10.74C20.1997 9.41683 20.1177 8.21901 20.0311 7.25626C19.946 6.31026 19.2081 5.58094 18.2494 5.50319C16.7023 5.37772 14.5103 5.25 12 5.25Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.2557 13.3102C19.0368 12.5292 20.3031 12.5292 21.0841 13.3102L22.4983 14.7244C23.2794 15.5055 23.2794 16.7718 22.4983 17.5528L18.5486 21.5026C18.1735 21.8777 17.6648 22.0884 17.1344 22.0884L15.0702 22.0884C14.3246 22.0884 13.7202 21.484 13.7202 20.7384V18.6742C13.7202 18.1437 13.9309 17.635 14.306 17.26L18.2557 13.3102ZM21.0841 16.1386L19.6699 14.7244L15.7202 18.6742L15.7202 20.0884L17.1344 20.0884L21.0841 16.1386Z"
            />
          </svg>
          <span data-v-423a8fa8 class="video-note-info video-toolbar-item-text">记笔记</span>
          <!---->
        </div>
        <div
          data-v-7a68f144
          data-v-423a8fa8
          class="resizable-component note-pc"
          style="width: 405px; height: 550px; left: 100px; top: 320px; z-index: 10000; display: none;"
        >
          <div data-v-7a68f144 class="note-container">
            <div
              data-v-7a68f144
              class="note-header drag-el"
              style="background-color: rgb(241, 242, 243);"
            >
              <!---->
              <div data-v-7a68f144 class="note-title list">笔记</div>
              <!---->
              <!---->
              <div data-v-7a68f144 class="close-note">
                <div class="svg-icon close" data-v-7a68f144 style="width: 22px; height: 22px;">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L10.0104 11.0711L4.46967 16.6118C4.17678 16.9047 4.17678 17.3796 4.46967 17.6725C4.76256 17.9654 5.23744 17.9654 5.53033 17.6725L11.0711 12.1317L16.6118 17.6725C16.9047 17.9654 17.3796 17.9654 17.6725 17.6725C17.9654 17.3796 17.9654 16.9047 17.6725 16.6118L12.1317 11.0711L17.6725 5.53033C17.9654 5.23744 17.9654 4.76256 17.6725 4.46967C17.3796 4.17678 16.9047 4.17678 16.6118 4.46967L11.0711 10.0104L5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967Z"
                      fill="#18191C"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div data-v-7a68f144 class="note-content">
              <div data-v-13587840 class="note-list" data-v-7a68f144>
                <div data-v-13587840 class="list-note-operation">
                  <div
                    data-v-13587840
                    class="note-icon svg-icon note use-color"
                    style="width: 26px; height: 26px;"
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.41663C10.2719 5.41663 7.8899 5.55541 6.20845 5.69176C5.03988 5.78652 4.1341 6.67921 4.02999 7.83732C3.90656 9.21019 3.79166 11.0206 3.79166 13C3.79166 14.9793 3.90656 16.7897 4.02999 18.1626C4.13411 19.3208 5.03976 20.2134 6.20829 20.3081C7.75388 20.4335 9.89174 20.5609 12.3464 20.5807C12.7951 20.5843 13.1559 20.9509 13.1523 21.3997C13.1487 21.8484 12.782 22.2092 12.3333 22.2056C9.83137 22.1855 7.65323 22.0557 6.07694 21.9278C4.1295 21.7699 2.58732 20.2636 2.41152 18.3081C2.28494 16.9002 2.16666 15.0396 2.16666 13C2.16666 10.9603 2.28494 9.09977 2.41152 7.69181C2.58732 5.73628 4.12971 4.22999 6.07711 4.07208C7.79167 3.93304 10.2186 3.79163 13 3.79163C15.7816 3.79163 18.2088 3.93306 19.9234 4.07212C21.8704 4.23002 23.4127 5.73574 23.5886 7.69113C23.6852 8.76635 23.777 10.1051 23.815 11.5864C23.8265 12.035 23.4721 12.4079 23.0236 12.4194C22.575 12.4309 22.202 12.0766 22.1905 11.628C22.1536 10.1878 22.0643 8.88424 21.9701 7.83665C21.866 6.67888 20.9605 5.78656 19.792 5.6918C18.1105 5.55543 15.7283 5.41663 13 5.41663ZM8.125 10.0208C7.67627 10.0208 7.3125 10.3846 7.3125 10.8333C7.3125 11.2821 7.67627 11.6458 8.125 11.6458H17.875C18.3237 11.6458 18.6875 11.2821 18.6875 10.8333C18.6875 10.3846 18.3237 10.0208 17.875 10.0208H8.125ZM8.125 14.3542C7.67627 14.3542 7.3125 14.7179 7.3125 15.1667C7.3125 15.6154 7.67627 15.9792 8.125 15.9792H14.0833C14.5321 15.9792 14.8958 15.6154 14.8958 15.1667C14.8958 14.7179 14.5321 14.3542 14.0833 14.3542H8.125ZM22.6498 14.6109C21.9094 13.8705 20.709 13.8705 19.9687 14.6109L15.6898 18.8898C15.3342 19.2453 15.1345 19.7275 15.1345 20.2303L15.1345 22.4665C15.1345 23.1247 15.668 23.6582 16.3262 23.6582H18.5624C19.0652 23.6582 19.5474 23.4585 19.9029 23.1029L24.1818 18.824C24.9222 18.0837 24.9222 16.8833 24.1818 16.1429L22.6498 14.6109ZM21.1177 15.7599C21.2235 15.6541 21.395 15.6541 21.5007 15.7599L23.0328 17.292C23.1386 17.3977 23.1386 17.5692 23.0328 17.675L18.7539 21.9539C18.7031 22.0047 18.6342 22.0332 18.5624 22.0332H16.7595L16.7595 20.2303C16.7595 20.1585 16.788 20.0896 16.8388 20.0388L21.1177 15.7599Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div data-v-13587840 class="operation-desc">记笔记</div>
                  <div
                    data-v-13587840
                    class="arrow-icon svg-icon right-arrow use-color"
                    style="width: 16px; height: 16px;"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.8257 2.07564C5.59138 2.30995 5.59138 2.68985 5.8257 2.92417L10.9014 7.9999L5.8257 13.0756C5.59138 13.31 5.59138 13.6899 5.8257 13.9242C6.06001 14.1585 6.43991 14.1585 6.67423 13.9242L11.9385 8.65987C12.303 8.29538 12.303 7.70443 11.9385 7.33994L6.67423 2.07564C6.43991 1.84132 6.06001 1.84132 5.8257 2.07564Z"
                        fill="#00AEEC"
                      />
                    </svg>
                  </div>
                </div>
                <div data-v-13587840 class="part-line"></div>
                <div data-v-13587840 class="empty-note">还没有人发布笔记哦，快去发布一篇吧～</div>
              </div>
              <!---->
              <!---->
            </div>
          </div>
          <div data-v-7a68f144 class="resizable-r"></div>
          <div data-v-7a68f144 class="resizable-rb"></div>
          <div data-v-7a68f144 class="resizable-b"></div>
          <div data-v-7a68f144 class="resizable-lb"></div>
          <div data-v-7a68f144 class="resizable-l"></div>
          <div data-v-7a68f144 class="resizable-lt"></div>
          <div data-v-7a68f144 class="resizable-t"></div>
          <div data-v-7a68f144 class="resizable-rt"></div>
        </div>
        <div data-v-423a8fa8 class="van-dialog__wrapper" style="display: none;">
          <div class="van-dialog protocal-dialog new" style="width: 605px; margin-top: 15vh;">
            <div class="van-dialog__header">
              <span class="van-dialog__title">公开发布笔记</span>
              <button type="button" aria-label="Close" class="van-dialog__headerbtn">
                <i class="van-icon-close van-dialog__close"></i>
              </button>
            </div>
            <!---->
            <!---->
          </div>
        </div>
      </div>
      <div class="video-tool-more video-toolbar-right-item" data-v-46c3fd44 data-v-c9c871ec>
        <span data-v-46c3fd44 class="video-tool-more-reference">
          <svg
            data-v-46c3fd44
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="video-tool-more-icon video-toolbar-item-icon van-popover__reference"
            aria-describedby="van-popover-4706"
            tabindex="0"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7484 5.49841C13.7484 6.46404 12.9656 7.24683 11.9999 7.24683C11.0343 7.24683 10.2515 6.46404 10.2515 5.49841C10.2515 4.53279 11.0343 3.75 11.9999 3.75C12.9656 3.75 13.7484 4.53279 13.7484 5.49841ZM13.7484 18.4985C13.7484 19.4641 12.9656 20.2469 11.9999 20.2469C11.0343 20.2469 10.2515 19.4641 10.2515 18.4985C10.2515 17.5328 11.0343 16.75 11.9999 16.75C12.9656 16.75 13.7484 17.5328 13.7484 18.4985ZM11.9999 13.7485C12.9656 13.7485 13.7484 12.9656 13.7484 12C13.7484 11.0343 12.9656 10.2515 11.9999 10.2515C11.0343 10.2515 10.2515 11.0343 10.2515 12C10.2515 12.9656 11.0343 13.7485 11.9999 13.7485Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </div>
    <div class="teleport hidden" data-v-c9c871ec>
      <!---->
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "toolbar",
  props: {
    like: 0,
    isLike: false
  },
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
.activity-frame {
  width: 350px;
  height: 520px;
  position: absolute;
  right: 0;
  bottom: 46px;
  z-index: 132;
  padding: 4px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}
.activity-frame::-webkit-scrollbar {
  width: 6px;
}
.activity-frame::-webkit-scrollbar-track {
  background: transparent;
}
.activity-frame::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
}
.activity-frame .close-container {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  width: 29px;
  height: 29px;
  text-align: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
}
.activity-frame .close-container .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.activity-frame .close-container .icon svg path {
  fill: #fff;
}
.activity-frame iframe {
  height: 100%;
  width: 342px;
  border: none;
  border-radius: 8px;
}
.tip-off-menu[data-v-a78f9abc] {
  width: 80px;
  background: #fff;
  border: 1px solid #e5e9ef;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2000;
  text-align: center;
  padding: 8px 0;
  box-sizing: border-box;
}
.tip-off-menu .item[data-v-a78f9abc] {
  font-size: 12px;
  color: #99a2aa;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 6px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: pointer;
}
.tip-off-menu .item[data-v-a78f9abc]:hover {
  color: #00a1d6;
}
.tip-off-menu .item[data-v-a78f9abc]:last-child {
  margin-bottom: 0;
}
.chat-msg-container[data-v-02606dcb] {
  margin-top: 25px;
  margin-bottom: 25px;
}
.chat-msg-container.system.text[data-v-02606dcb] {
  width: 270px;
  text-align: center;
  margin: 16px auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.chat-msg-container.system.text .system-msg .clickable[data-v-02606dcb] {
  color: #00a1d6;
  cursor: pointer;
}
.chat-msg-container.system.image[data-v-02606dcb] {
  margin: 16px auto;
}
.chat-msg-container.system.image .system-img[data-v-02606dcb] {
  margin: 0 auto;
  width: 320px;
  height: 160px;
  background-size: cover;
  background-position: 50%;
  cursor: pointer;
}
.chat-msg-container.self[data-v-02606dcb] {
  margin-right: 15px;
}
.chat-msg-container.self .content[data-v-02606dcb] {
  justify-content: flex-end;
}
.chat-msg-container.self .content .pop[data-v-02606dcb] {
  border-radius: 20px 2px 20px 20px;
}
.chat-msg-container.self .user-attr[data-v-02606dcb] {
  display: flex;
  justify-content: flex-end;
}
.chat-msg-container.other[data-v-02606dcb] {
  margin-left: 15px;
}
.chat-msg-container.other .content .pop[data-v-02606dcb] {
  border-radius: 2px 20px 20px 20px;
}
.chat-msg-container .content .img-msg[data-v-02606dcb] {
  width: 216px;
  height: 82px;
  background-size: cover;
  background-position: 50%;
  cursor: pointer;
  border-radius: 20px;
}
.chat-msg-container .chat.l .content-area[data-v-02606dcb] {
  margin-left: 13px;
}
.chat-msg-container .chat.r[data-v-02606dcb] {
  justify-content: flex-end;
}
.chat-msg-container .chat.r .content-area[data-v-02606dcb] {
  margin-right: 13px;
}
.chat-msg-container .chat .uname[data-v-02606dcb] {
  color: silver;
}
.chat-msg-container .chat .uname.vip[data-v-02606dcb] {
  color: #fb7299;
}
.chat-msg-container .chat .content[data-v-02606dcb] {
  color: #fff;
  margin-top: 6px;
  max-width: 230px;
  line-height: 20px;
  display: flex;
}
.chat-msg-container .chat .content .pop[data-v-02606dcb] {
  background: rgba(205, 218, 255, 0.08);
  padding: 10px 16px;
  word-break: break-all;
}
.chat-msg-container .chat.default .content[data-v-02606dcb] {
  color: #18191c;
}
.chat-msg-container .chat.default .content .pop[data-v-02606dcb] {
  background: #f1f2f3;
}
.chat-msg-container .chat.roomowner .content .pop[data-v-02606dcb] {
  background: linear-gradient(90deg, #31214c, #1f2748);
}
.chat-msg-container .chat.roomowner.default .content .pop[data-v-02606dcb] {
  background: linear-gradient(90deg, #eddbff, #d7dfff);
}
.chat-msg-container .icon[data-v-02606dcb] {
  display: inline-block;
  vertical-align: text-bottom;
}
.chat-msg-container .chat[data-v-02606dcb] {
  display: flex;
}
.chat-msg-container .user-attr[data-v-02606dcb] {
  align-items: center;
}
.chat-msg-container .level.user[data-v-02606dcb] {
  margin-left: 4px;
}
.chat-msg-container .face-c .vip[data-v-02606dcb] {
  display: inline-block !important;
}
.sticky-top-msg-container[data-v-58b0c4f1] {
  background-color: #11111d;
  padding: 12px 15px;
  color: #a2a7ae;
}
.sticky-top-msg-container.default[data-v-58b0c4f1] {
  background-color: #fff;
  border-bottom: 1px solid #e3e5e7;
  color: #61666d;
  padding: 0;
}
.sticky-top-msg-container .borderwrap[data-v-58b0c4f1] {
  box-sizing: border-box;
  width: 100%;
  padding: 5px 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e2022;
  border-radius: 4px;
}
.sticky-top-msg-container .borderwrap.default[data-v-58b0c4f1] {
  background-color: #fff;
  border-radius: 0;
}
.sticky-top-msg-container .borderwrap .top-msg-content-wrap[data-v-58b0c4f1] {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  overflow: hidden;
  position: relative;
}
.sticky-top-msg-container
  .borderwrap
  .top-msg-content-wrap.top-msg-content-wrap-fire[data-v-58b0c4f1] {
  align-items: center;
}
.sticky-top-msg-container
  .borderwrap
  .top-msg-content-wrap
  .top-msg-tip[data-v-58b0c4f1] {
  border: 1px;
  border-radius: 2px;
  padding: 5px 0;
  white-space: nowrap;
}
.sticky-top-msg-container
  .borderwrap
  .top-msg-content-wrap
  .top-msg-tip
  div[data-v-58b0c4f1] {
  padding: 2px;
  background: #1e2022;
  color: #f69;
}
.sticky-top-msg-container
  .borderwrap
  .top-msg-content-wrap
  .top-msg-tip
  div.default[data-v-58b0c4f1] {
  background: #ffecf1;
}
.sticky-top-msg-container
  .borderwrap
  .top-msg-content-wrap
  .top-msg-content[data-v-58b0c4f1] {
  overflow: hidden;
}
.sticky-top-msg-container
  .borderwrap
  .top-msg-content-wrap
  .top-msg-content
  .text[data-v-58b0c4f1] {
  padding: 8px 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.sticky-top-msg-container
  .borderwrap
  .top-msg-content-wrap
  .mask[data-v-58b0c4f1] {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 12px;
  padding: 8px 2px;
  line-height: 12px;
  width: 50px;
  z-index: 5;
  background: linear-gradient(90deg, transparent, #1e2022 50%, #1e2022);
}
.sticky-top-msg-container
  .borderwrap
  .top-msg-content-wrap
  .mask.default[data-v-58b0c4f1] {
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 50%, #fff);
}
.sticky-top-msg-container .borderwrap .top-msg-close[data-v-58b0c4f1] {
  flex: 0 0 16px;
  padding: 8px;
}
.sticky-top-msg-container .borderwrap .pop-over-content[data-v-58b0c4f1] {
  position: absolute;
  word-break: break-all;
  top: 10px;
  left: 8px;
  right: 40px;
  max-height: 94px;
  z-index: 10;
  background-color: #1e2022;
  padding: 10px;
  border: 1px solid #2f3134;
  border-radius: 3px;
}
.sticky-top-msg-container
  .borderwrap
  .pop-over-content.default[data-v-58b0c4f1] {
  background-color: #fff;
  border: 1px solid #e3e5e7;
}
.scrollbar-mixin::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-mixin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-mixin::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
}
.single-ellips {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tip-off-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5000;
}
.tip-off-dialog .projection-hall-tip-off-dialog {
  width: 594px;
  background-color: #fff;
  border-radius: 4px;
}
.tip-off-dialog .projection-hall-tip-off-dialog .content {
  margin: 0 40px;
  padding-bottom: 30px;
}
.tip-off-dialog .projection-hall-tip-off-dialog .content .question {
  margin-top: 30px;
}
.tip-off-dialog .projection-hall-tip-off-dialog .content .question .title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222;
  line-height: 20px;
}
.tip-off-dialog .projection-hall-tip-off-dialog .content .question .desc {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #99a2aa;
  line-height: 20px;
  margin-top: 6px;
}
.tip-off-dialog .projection-hall-tip-off-dialog .content .answer-options {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  width: 480px;
  flex-wrap: wrap;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item {
  width: 240px;
  margin-top: 14px;
  font-size: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item:first-child,
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item:nth-child(2) {
  margin-top: 0;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item:nth-child(2n) {
  text-align: left;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item
  label {
  cursor: pointer;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item
  label
  .custom-radio {
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1px solid #bec3cc;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  vertical-align: middle;
  margin-right: 8px;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item
  label
  .custom-radio:hover {
  border-color: #00a1d6;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item
  label
  .custom-radio
  input {
  display: inline-block;
  cursor: pointer;
  line-height: 16px;
  width: 16px;
  height: 16px;
  outline: none;
  z-index: 1;
  box-sizing: border-box;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item
  label
  .custom-radio
  input:checked {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-block;
  border-color: #00a1d6;
  background: #00a1d6;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item
  label
  .custom-radio
  input:checked:after {
  content: "";
  width: 6px;
  height: 6px;
  color: #fff;
  display: inline-block;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .answer-options
  .radio-item
  label
  .text {
  vertical-align: middle;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222;
  line-height: 20px;
}
.tip-off-dialog .projection-hall-tip-off-dialog .content .text-input {
  margin-top: 30px;
  position: relative;
}
.tip-off-dialog .projection-hall-tip-off-dialog .content .text-input .hint {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222;
  line-height: 20px;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .text-input
  .user-input {
  margin-top: 10px;
  width: 514px;
  height: 108px;
  resize: none;
  border-radius: 4px;
  border: 1px solid #ccd0d7;
  box-sizing: border-box;
  padding: 6px 10px;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .text-input
  .user-input:focus {
  border: 1px solid #00a1d6;
  outline: none;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .text-input
  .user-input.error {
  border: 1px solid #e40c0c;
}
.tip-off-dialog .projection-hall-tip-off-dialog .content .text-input .text-num {
  position: absolute;
  bottom: 6px;
  right: 10px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #99a2aa;
  text-align: left;
  line-height: 20px;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .text-input
  .error-hint {
  position: absolute;
  bottom: -20px;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .text-input
  .error-hint
  span {
  font-family: Helvetica;
  font-size: 12px;
  color: #e40c0c;
  line-height: 14px;
  vertical-align: middle;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .content
  .text-input
  .error-hint
  .icon {
  height: 14px;
  width: 15px;
  display: inline-block;
  vertical-align: middle;
}
.tip-off-dialog .projection-hall-tip-off-dialog .bottom-oper {
  height: 80px;
  border-top: 1px solid #e5e9ef;
}
.tip-off-dialog .projection-hall-tip-off-dialog .bottom-oper .btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 20px auto;
}
.tip-off-dialog .projection-hall-tip-off-dialog .bottom-oper .btns div {
  height: 40px;
  width: 140px;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  font-family: Helvetica;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.tip-off-dialog .projection-hall-tip-off-dialog .bottom-oper .btns .cancel {
  border: 1px solid #ccd0d7;
  color: #6d757a;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .bottom-oper
  .btns
  .cancel:hover {
  border: 1px solid #00a1d6;
}
.tip-off-dialog .projection-hall-tip-off-dialog .bottom-oper .btns .submit {
  background: #00a1d6;
  color: #fff;
}
.tip-off-dialog
  .projection-hall-tip-off-dialog
  .bottom-oper
  .btns
  .submit:hover {
  background: #00b5e5;
}
.scrollbar-mixin[data-v-45a72735]::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-mixin[data-v-45a72735]::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-mixin[data-v-45a72735]::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
}
.single-ellips[data-v-45a72735] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.all-wraper[data-v-45a72735] {
  height: 100%;
  width: 100%;
}
.start-fail-container[data-v-45a72735] {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.start-fail-container .fail-img[data-v-45a72735] {
  height: 158px;
  width: 280px;
}
.start-fail-container .fail-tips[data-v-45a72735] {
  color: #9499a0;
  margin: 20px;
}
.start-fail-container .try-again[data-v-45a72735] {
  background-color: #f69;
  padding: 11px 34px;
  color: #fff;
  cursor: pointer;
}
.chat-container[data-v-45a72735] {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 12px;
  color: #8a8a8a;
  border-radius: 2px;
}
.chat-container .loginevent[data-v-45a72735],
.chat-container .registerevent[data-v-45a72735] {
  display: inline-block;
  margin: 0 8px;
  color: #2c9cc8;
  cursor: pointer;
}
.chat-container .chat-header[data-v-45a72735] {
  padding: 12px;
  font-weight: 700;
  border-radius: 2px 2px 0 0;
  font-size: 14px;
  color: #fff;
}
.chat-container .chat-header.header-default[data-v-45a72735] {
  background-color: #e3e5e7;
  color: #18191c;
}
.chat-container .chat-module[data-v-45a72735] {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0 0 2px 2px;
}
.chat-container .chat-module .static-popup[data-v-45a72735] {
  position: absolute;
  bottom: 112px;
  width: 334px !important;
  left: 50%;
  transform: translateX(-50%);
}
.chat-container .chat-module .top-message[data-v-45a72735] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.chat-container .chat-contant[data-v-45a72735] {
  flex: 1 0 auto;
  height: 0;
  overflow-y: auto;
  position: relative;
}
.chat-container .chat-contant[data-v-45a72735]::-webkit-scrollbar {
  width: 6px;
}
.chat-container .chat-contant[data-v-45a72735]::-webkit-scrollbar-track {
  background: transparent;
}
.chat-container .chat-contant[data-v-45a72735]::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
}
.chat-container .startTime[data-v-45a72735] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-align: center;
  margin-top: 16px;
}
.chat-container .pendant[data-v-45a72735] {
  position: absolute;
  top: 100px;
  right: 15px;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.chat-container .input-area[data-v-45a72735] {
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border-top: 1px solid rgba(205, 218, 255, 0.1);
  align-self: end;
  border-radius: 0 0 2px 2px;
}
.chat-container .input-area .new-msg-tip[data-v-45a72735] {
  background: #d89404;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  height: 24px;
  line-height: 24px;
  position: absolute;
  width: 100%;
  top: -25px;
  left: 0;
  cursor: pointer;
}
.chat-container .input-area .new-msg-tip .irrow[data-v-45a72735] {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAABXUlEQVRoBe2UMUoFMRRFv2AlYucKrF2BlbXgIizETtyAuBBdgaXgArQRS7dg93tbx/OKB+GZmckvZpLAfXAJSV5+zr1k/majUgJKQAkoASWgBJSAElACSqBmAsMwXKK9XRjov0D7u5xZpBeIB2T1iIpM0HdrB6hnVM8El1vyaT0xmTTBvsP7uftFki35UYNFBp3WqAmaIvwba4cldy3WA0CRiSbhPZU5E03DF5i4w0Ba9Z+NQ8cRytxz6gPezUyYaDd5h/cxY6If+IyJdwzV/at0qNwI3DF6RSdxnzX7Jg4y60esv6DTuLfqHACD/0JW3+ifiQhEj8F/IKstqmeCy8/QD/KaNEFTCm9nftFVNLnqHIBzNGuCnhz8zaqwY5fNmWga3k2NmegCfsbEJya87M238WwcOo4Axm+iH3g3kzHRfvIO72Nioj/4YOLa5xqVgBJQAkpACSgBJdBYAn+o1dAmTRdQzAAAAABJRU5ErkJggg==)
    no-repeat;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 16px;
  vertical-align: text-bottom;
}
.chat-container .input-area .input-c[data-v-45a72735] {
  background: rgba(205, 218, 255, 0.08);
  padding: 12px;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid rgba(205, 218, 255, 0);
  margin-top: 16px;
  position: relative;
  border-radius: 2px;
}
.chat-container .input-area .input-c.border[data-v-45a72735] {
  border: 1px solid #00a1d6;
  border-radius: 2px;
}
.chat-container .input-area .input-c .placeholder[data-v-45a72735] {
  position: absolute;
  top: 14px;
}
.chat-container .input-area .input-c .expression[data-v-45a72735] {
  position: absolute;
  display: inline-block;
  width: 22px;
  height: 24px;
  background-image: url(data:image/png;base64,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);
  background-size: 22px;
  background-repeat: no-repeat;
  right: 12px;
  bottom: 10px;
  cursor: pointer;
  z-index: 3;
}
.chat-container .input-area .input-c .textareaInput[data-v-45a72735] {
  resize: none;
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  caret-color: #00a1d6;
  font-size: 12px;
  height: 34px;
}
.chat-container
  .input-area
  .input-c
  .textareaInput[data-v-45a72735]::-webkit-scrollbar {
  width: 6px;
}
.chat-container
  .input-area
  .input-c
  .textareaInput[data-v-45a72735]::-webkit-scrollbar-track {
  background: transparent;
}
.chat-container
  .input-area
  .input-c
  .textareaInput[data-v-45a72735]::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
}
.chat-container .input-area .text-c[data-v-45a72735] {
  overflow-y: auto;
  min-height: 20px;
  line-height: 20px;
  word-break: break-all;
  padding-right: 46px;
  max-height: 100px;
  outline: none;
  box-sizing: border-box;
  resize: none;
  background: rgba(205, 218, 255, 0);
  color: #fff;
  border: none;
  caret-color: #00a1d6;
  position: relative;
  z-index: 2;
}
.chat-container .input-area .text-c[data-v-45a72735]::-webkit-scrollbar {
  width: 6px;
}
.chat-container .input-area .text-c[data-v-45a72735]::-webkit-scrollbar-track {
  background: transparent;
}
.chat-container .input-area .text-c[data-v-45a72735]::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
}
.chat-container .input-area .text-c img[data-raw][data-v-45a72735] {
  margin: 0 4px;
}
.chat-container .input-area .btn-send[data-v-45a72735] {
  width: 88px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  background: #00a1d6;
  border-radius: 2px;
  margin: 12px 15px 16px auto;
  cursor: pointer;
}
.chat-container .input-area .btn-send.disabled[data-v-45a72735] {
  color: #9499a0;
  background-color: #e3e5e7;
  cursor: not-allowed;
}
.chat-container .input-area-default[data-v-45a72735] {
  width: 100%;
  padding: 13px 8px;
  position: relative;
  border-top: 1px solid #e3e5e7;
  align-self: end;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0 0 2px 2px;
  background: #fff;
}
.chat-container .input-area-default .new-msg-tip[data-v-45a72735] {
  background: #d89404;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  height: 24px;
  line-height: 24px;
  position: absolute;
  width: 100%;
  top: -25px;
  left: 0;
  cursor: pointer;
}
.chat-container .input-area-default .new-msg-tip .irrow[data-v-45a72735] {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAABXUlEQVRoBe2UMUoFMRRFv2AlYucKrF2BlbXgIizETtyAuBBdgaXgArQRS7dg93tbx/OKB+GZmckvZpLAfXAJSV5+zr1k/majUgJKQAkoASWgBJSAElACSqBmAsMwXKK9XRjov0D7u5xZpBeIB2T1iIpM0HdrB6hnVM8El1vyaT0xmTTBvsP7uftFki35UYNFBp3WqAmaIvwba4cldy3WA0CRiSbhPZU5E03DF5i4w0Ba9Z+NQ8cRytxz6gPezUyYaDd5h/cxY6If+IyJdwzV/at0qNwI3DF6RSdxnzX7Jg4y60esv6DTuLfqHACD/0JW3+ifiQhEj8F/IKstqmeCy8/QD/KaNEFTCm9nftFVNLnqHIBzNGuCnhz8zaqwY5fNmWga3k2NmegCfsbEJya87M238WwcOo4Axm+iH3g3kzHRfvIO72Nioj/4YOLa5xqVgBJQAkpACSgBJdBYAn+o1dAmTRdQzAAAAABJRU5ErkJggg==)
    no-repeat;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 16px;
  vertical-align: text-bottom;
}
.chat-container .input-area-default .input-c[data-v-45a72735] {
  flex: 1 1 235px;
  height: 40px;
  background: #f6f7f8;
  padding: 8px;
  text-align: left;
  box-sizing: border-box;
  position: relative;
  border-radius: 2px 0 0 2px;
}
.chat-container .input-area-default .input-c.border[data-v-45a72735] {
  border: 1px solid #9499a0;
  border-radius: 2px;
}
.chat-container .input-area-default .input-c .placeholder[data-v-45a72735] {
  position: absolute;
  top: 11px;
}
.chat-container .input-area-default .input-c .text-c[data-v-45a72735] {
  overflow-y: auto;
  padding-right: 46px;
  word-break: break-all;
  height: 20px;
  line-height: 20px;
  outline: none;
  box-sizing: border-box;
  resize: none;
  background: rgba(205, 218, 255, 0);
  color: #9499a0;
  border: none;
  caret-color: #9499a0;
  position: relative;
  z-index: 2;
}
.chat-container
  .input-area-default
  .input-c
  .text-c[data-v-45a72735]::-webkit-scrollbar {
  width: 6px;
}
.chat-container
  .input-area-default
  .input-c
  .text-c[data-v-45a72735]::-webkit-scrollbar-track {
  background: transparent;
}
.chat-container
  .input-area-default
  .input-c
  .text-c[data-v-45a72735]::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
}
.chat-container
  .input-area-default
  .input-c
  .text-c
  img[data-raw][data-v-45a72735] {
  margin: 0 4px;
}
.chat-container .input-area-default .input-c .expression[data-v-45a72735] {
  position: absolute;
  display: inline-block;
  width: 22px;
  height: 24px;
  background-image: url(data:image/png;base64,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);
  background-size: 22px;
  background-repeat: no-repeat;
  right: 12px;
  top: 7px;
  cursor: pointer;
  z-index: 3;
}
.chat-container .input-area-default .input-c .textareaInput[data-v-45a72735] {
  resize: none;
  width: 194px;
  border: none;
  outline: none;
  background: transparent;
  color: #9499a0;
  caret-color: #9499a0;
  font-size: 12px;
  height: 16px;
  overflow-y: hidden;
  -ms-overflow-y: hidden;
}
.chat-container
  .input-area-default
  .input-c
  .textareaInput[data-v-45a72735]::-webkit-scrollbar {
  width: 6px;
}
.chat-container
  .input-area-default
  .input-c
  .textareaInput[data-v-45a72735]::-webkit-scrollbar-track {
  background: transparent;
}
.chat-container
  .input-area-default
  .input-c
  .textareaInput[data-v-45a72735]::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.4);
  border-radius: 3px;
}
.chat-container .input-area-default .btn-send[data-v-45a72735] {
  flex: 0 0 88px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  background: #00a1d6;
  border-radius: 0 2px 2px 0;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.chat-container .input-area-default .btn-send.disabled[data-v-45a72735] {
  cursor: not-allowed;
  color: #9499a0;
  background-color: #e3e5e7;
}
.chat-container .activity-frame[data-v-45a72735] {
  position: absolute;
  top: 130px;
  right: 83px;
  bottom: auto;
  left: auto;
}
.fe-ui-open-app-btn {
  display: inline-block;
  position: relative;
}
.wx-open-app-btn {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  overflow: hidden;
}
.switch-c {
  width: 21px;
  height: 12px;
  border-radius: 12px;
  position: relative;
  background: #999;
}
.switch-c .round {
  position: absolute;
  top: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  right: 12px;
  transition: right 0.3s;
}
.switch-c.checked {
  background: #00a1d6;
}
.switch-c.checked .round {
  right: 3px;
}
.face-cc[data-v-c1712ae6] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.face[data-v-c1712ae6] {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.owner[data-v-c1712ae6] {
  position: relative;
  margin-left: 3px;
  margin-right: 15px;
}
.owner[data-v-c1712ae6]:before {
  content: " ";
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #fb7299;
  display: inline-block;
  position: absolute;
  left: -3px;
  top: -3px;
}
.up[data-v-c1712ae6] {
  position: relative;
}
.up[data-v-c1712ae6]:after {
  content: " ";
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAADoklEQVRIDb2Wz0tVQRTHv++ZZvaelGKBFiiRGZVUVLgpa9EyknLlnxD0m4KgZRDUMvqxadGioCgwaNei0iIrIooWvoQySkXDLBV/ZPr6fmfueO99776nRHZgftwzZ87nztwzc24M85B0Or2FZk0sO1mqWCpZJL0sPSztLK2xWOwN278XgppZOlnmK7JtzkeMRQ1yUg31t1gazPhkPzD0iKUNmPgK/Bqw04pWAMWrgOW7WPYAi1daPdDBTgtX/MkpXJsFJKyRg/dYyo3jL1eAgft8nHFzcrRxYMV+YPUhQC8CDLIcJPRJcEII6MEe0qAQ3x8DXWfIGQvah/vF1Rwf54q5A07iJcDa80DZbmmmWPYGoXwtK942amWF6LsJpI7lh5XuAOpvA9WnnAvb6gU1t09fhL64W55vMz4L5JMsys3Kui+ymzYGkVXpdqDuElBQDIx1RZhwbvcFGF/yaX0bOwPkGyiyGsw30zbmhW3zYXIx8lZ1hBAqXzbAGjwG3ArPmRkKkHzfLLnVgy2xgDQDafR9BMxTyZd8WjGMOMk61Oug0DfR6MYz2iTN1l/mNjIonIx/BKZH3VN0K5/yTYZYWqFuEHvOcoV+cjNhfNMgTHNG3qmeQ7gLOsNWmgTUdWUPtelkVIn6aJjMRucDpJ0uDCs7F7HV3WhvENMJVIlNhF3lypYGlIGuXsYe8oCS3akhoP+Or9PtZKVKQHsRu+vKDSU2EnYNWJRwmux25YFsnTS/+V2/PfAD0Pdd6aI0PDHOKKzjN8sHC8/wn6Z586SO+DB/RL20VqgUU2u2ZuKzlDTmpN7rBJbZ59lzybNVVAFU7PP0GY1gnYeB4dfhAX/b+wRUPqs1t74Dyrz3hupsqeAFHQWcniCMKxt+lT1HGcVKj7ZUydOmGNOZo0oyUDJlZtJu4/DLzBH7rPRlpV3AVtNXPpu9eOxoZK3IDIpgnUeBny+C2kCfCOPbqFrj3m9ByiRP5bN8omAqWeNbzPziyo4T9tzXZfbk0ybmlFguSs8aOyVP5bNcktgAxArs6AxTnWA/nuWytr7k04phGCDJd6nrMJGq5IlQXvbs2bjtNLAThD31x7J69CFfNkI7PEboo7VwzqDJ1CapRkCX1PDIcGUfThLWloXwFZxbfdpl/UHq5dtIyCtv80ZqH7JE/2IU8gwWLsuRdK1D80ny/GKEgJriQe+xu/A/Ud47Csq9W5jfRMeIbAn+Pz/CmXSCme7/za/+H5F1nIRMp8ceAAAAAElFTkSuQmCC);
  background-size: 14px;
  position: absolute;
  bottom: 3px;
  left: 20px;
}
.vip[data-v-c1712ae6] {
  position: relative;
}
.vip[data-v-c1712ae6]:after {
  content: " ";
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMLSURBVHgBvVa/axNRHP9eKArFSjBZKhXP5VwqRrKYLE3tajBFLTj1+icU14KLuBXcHFtXQRppJkHUKVM1ootdPKHo0kJBidolfj/vey/v5XJ3uRDxAy/38vLN+9z399ehDOj1ejV+3OKFp8srH/50zKsTrheO47yhScBEPq8vveyArJ92p5NA5PJjh1dJHXT/EL36RLT/nejohyxg+jTRXIGlWLx0kagwo68IeC2yxsFIQiZb5cdjgtlw8fZbJvpGmVDxiOplTQxzrzFpM5GQyRqhZqzRR6LWO9FuHEyfIrrJpEtX9InPpE+HCEMzvidotrvHZHs0EUAKbUXTa9q8OUvktSJTmk1IBuAO3CURvaOPFWEYWa7yGcyYhsIZokf3ZGE/ilQCrKSjV2v4QH3ClKN8VjgrQYHlnU+X7Z5I0FkcuTCpRbv2Po0FkwbJQISLEi64pnjTUD90gmFhRNx1T/ItjuTyLH+UB//T/sxm/Dl4hhyWAGqA8KoQfqUh3K0SVT1KBEwaNesFLgRPXg6eoWAIFuBDqSYHh8MX6ooyDn6dpN3jQkMpxN0YQUSZeTuJSr9mLjEBIYCvDo4ohTA/RaNgl7XVmtmriP7NJiyKTNRvCQAhKkGeihwMhykmhNO1P3VEq1ycke+bu8mkCD7BMXwYqO25lBBfmpdSpRE1JUg37kjniMNcUe86IJR/e7MU+2Yw40rVnMGU2sybLZNOkL1fj68+aF2CDyCU9mGqu0E0LaJFHaZECkjNFFL75fqErt41c+FYECjhaE7piFM+aiUX9Wdto3U0ldAjpVgE4FLtKSysW0r44fPBFMFLgDhLX4QP7bSAEhu3NSGa8bbdD9ELS8o8eON/gZWKdhW0u4SN3Q+XCSkCgXqZJka93/WRdov6uE8YduR19QUpgLcz+ZMdKnAqdhqt2cNU3BCF7rFFeohCZGZtW/C3v2APUevwmy2SNiZi5HDVAYjRTZBzKPI6qHQjRpu6MW+3MQzGy3FjYir+2yAcQ1wjadTonWhn9qgfkFSrZpZR/y/6loRdui1pKwAAAABJRU5ErkJggg==);
  background-size: 14px;
  position: absolute;
  bottom: 3px;
  left: 20px;
}
.enter-prise[data-v-c1712ae6] {
  position: relative;
}
.enter-prise[data-v-c1712ae6]:after {
  content: " ";
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAADlElEQVRIDb1Wz0tUURT+RjN/VFJORY1ZCuVo9IMWxWzERUW7EHIlbfMvaBmUZrTpL6htuCnBNm0MItwMWVgRNFqQIY5Ealnh75q+7859894833tOUX1w3nv33HPP9879cc6NoQTkcrkTNOugtFHqKQmKkKVMUYYpg7FYbJTvPweJOikZSqmQbWcUYyyok4OaqO+npNQ/swykPwNPvwDTS8DcirRA3WZgbxVwajsNdwA7K/N6PtOULkb8vqCxH+sISdbOvgFKfJaO704Cjz4BP/0jfe0yts/sAi42cCB/hJilXCDpE9OyjyJCSzbEvor0HHDrHbAYwbSP0S2xf8ZGLJ/VZL58kBHXGYZVPs96SQuEdhpHaBB/MA3c+QDkzJjgx/Fa4GoLMMKpvvm22EZOuxuB83uMXpGedKZXM+FAaxZXZBuRHbNklRw9seAMd9/60dsTXEj6IuIU+TYwhIxOOyulNdM0RkV2VGRJQGTCm+/5t/8pH/Iln0TKcsCJsE9abZCoNTuyDbhGsqpyWXMj0et4CKH65Us+LQxHGZl1qJPa+tqNYThMsh6umUMmu8lFYOFH2Ii8Xj7lm0iKSxEqg5hzFrYhW7cCvT4yjclERKd+QT51hi06RKh0ZQ61VRa9WkTWyu1up9HbmfnmbYV/K2FYtG3ih3KjySBWWXglSXadkdUEkMmohdNsD3lhjD7m14CHH12VspNFvQgTajjpynageQvQJzJZhODc7uCOBRI+5to5G9DjO+Hs0qKRVdRqGqPIigZ4GkvcRD1jLpmnS585/X+W0qxEnLWhK13dY9GprZCNixyPgexOM2cGwSF77VtbjbGYFqHqWbOyvkOozgGmtyAoQQcRLvMnexnZq6/rR8m3xZSmdFgNlZhSoF3rx4rIMsDLADLZenwPi3BQStWzwAVVpwd+QkPGyF6EkMmnfFsMljGL61owpuKp6YqCNtP+GtdilZH1kWx03tX5v+TTFuYxcTlBXZGhiqfqWRgOcTrLbUEzZOPA8wgy+ZJPC8Nh3JP5PpVpHWIVz0KRdEzt25lOkd0g2TM3g/gs8z7kyyaGtOUoWrYujppVpb50IJi0oRpYI5kK7sgGZN2NXDv6kk+KfBsUBcNs3k7tECXwilHHc6mzGVR08+5+44rhDLCkA2z/+0uUh7SJ3/2UlHR/85oof6FgtP/nIuz/A1Vq6jooqp0qZwmKkKUoNSpblXTV/wW67piqVm9NcwAAAABJRU5ErkJggg==);
  background-size: 14px;
  position: absolute;
  bottom: 3px;
  left: 20px;
}
#user-card-container {
  font-size: 12px;
  position: fixed;
  z-index: 10002;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  width: 335px;
  background: #fff;
}
#user-card-container a {
  text-decoration: none;
}
#user-card-container p {
  margin: 0;
}
#user-card-container .bg {
  position: absolute;
  width: 375px;
  height: 120px;
  top: 0;
  left: 0;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
#user-card-container .face-cc {
  left: 20px;
  top: 100px;
  position: absolute;
  border: 2px solid #fff;
  border-radius: 50%;
}
#user-card-container .info {
  padding: 105px 0 0 65px;
  position: relative;
}
#user-card-container .info p {
  margin: 0;
  color: #222;
}
#user-card-container .info .action-trigger {
  width: 22px;
  height: 22px;
  position: absolute;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALKADAAQAAAABAAAALAAAAAD8buejAAABHUlEQVRYCe2YwQ3CMAxFXQQLcObKuSswVYdgEdZghZ65InFjAZDAKQ1q2sRqmn8A6SNVbeLY+XkkrlUR/kiABEjAIlBZxlxb2152D3ke5SWHzreS80bWTV3vr7mxUuNhgnuxrYrdBpNVclfRNUr0Kghe0OjJhmJdPF1AZyuIPXSFCf5ug2F0/+y3iG8X3HGCC0TkuOIE6wFLTmzZkk5xA0ywywaiB2wyzefQNZP+hR0wwS4LuGygok+q5dZd+ozMEAvXSDcS+CkCsFezWxVrich/C0trrCUidF0XjHAiPrwbJ9iqFyxb5pJggllLZJLncBL4FwKsJfhdYrRXYS8OfpcYkfVNHGGrXrBsXsnMO0wwa4mZxDmMBEiABEICb/whcz+iTEdrAAAAAElFTkSuQmCC);
  background-size: 22px;
  right: -10px;
  top: 117px;
  cursor: pointer;
}
#user-card-container .info .action-trigger:hover .actions-wrp {
  display: block;
}
#user-card-container .info .action-trigger .actions-wrp {
  width: 80px;
  left: 50%;
  top: 18px;
  transform: translateX(-50%);
  display: none;
  position: absolute;
  padding-top: 9px;
}
#user-card-container .info .action-trigger .actions {
  background: #fff;
  border: 1px solid #e5e9ef;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}
#user-card-container .info .action-trigger .actions div {
  font-size: 12px;
  color: #99a2aa;
  text-align: center;
  cursor: pointer;
}
#user-card-container .info .sign {
  line-height: 16px;
  margin-top: 11px;
  color: #99a2aa;
  word-break: break-all;
  word-wrap: break-word;
}
#user-card-container .info .social {
  margin-top: 6px;
}
#user-card-container .info .social a {
  color: #222;
}
#user-card-container .info .user {
  font-size: 14px;
  font-weight: 700;
  margin-top: 6px;
}
#user-card-container .info .user .name {
  color: #222;
}
#user-card-container .info .user .sex {
  margin-left: 6px;
  width: 20px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
  background-size: 20px;
}
#user-card-container .info .user .sex.boy {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALKADAAQAAAABAAAALAAAAAD8buejAAAEbUlEQVRYCe2XXWgcVRTH/3dmsySaFlMMKK2CgqiIBUUEpdCE4kcqIunHqvSt3VYbWixiKz6ooT6JSh9KqOTDR7GbgAlIsVGIPij1weJLREIJid1SNW2t2I91d2eu/zPNjcNkNnd2NVVkBmbvveeee85v/nM/ZoH0ShVIFUgVSBX4NxVQy5V8b0G3lzS2+0CrclCF5g14iqVmW7N05m1QqGRdTPRtVrM2nmUD3nlUv03YAzYA00+QX1corD6UU1eNLa504oz/iM3BGJX7nvd53heVwiXGLbGssq2jOWhoK7m4NWqPtpdN4WiiaDs/rA9qH6+H7U4T7h7YpKbCtmh9+RSOZgq180d1r4Gl4n+YLqeKjKnXKq87cAALvDkPNMPpsdvAec5/DDgK25xBB2FPGWDK65p6rfK6KRwHK9uYe21rC/g8ZVfYOmfinrR3QmfOXECH76GL++pdfK0rucovcV+dhIMvHtMYz+WUZ8bWgpV+bs4Lfo5nB65b4Z3D+rniHKb8Kj7j5vQyQZ/mIbCe9adk3/V9HBsHprkPbxegpWCl33WDA0WqPFXswIkV7i3o7GmFIwQKQCQBV/gVFt/yPse7jfdawq/ifTsfZIiwr7C8l3a5ZmTORk8zPzQlnASLLjFwUeMDqrhNMhP0R0K90dKKjw5vVAvbkkyV4nk8zpf8FkEfXIBVmG1qQmdf9+Kj1/VRlTNbLvpbF10iYE6DHiprYL9k4E1Dz6oL19L89dvbqST3sUJBHx/XOES/vdLL0+nE+91qRurRK9uKYvV3XKb9xoyH09H+aNt60vUUdCslnObjt9N5ylF4uD+nfosGimvnC3qQb2JH0KfQNZRTn8b57RrR98hUGtiqvo7rD9usClc0nueAdhmkFV5KCiv+a9qxhwv0CcKs4cO+SlMscP8W9YP4J7msuwQhuyQQ5+2pWgrVSsQpUuJ8eE/6Cd3RM6pvq+Wb1G4FZqD7JRjBJ5IGDftlMhg17XIZj5p6o6UVmAvnZgnOQ+FsI0nmF1tpfuwdjcQIj7ECc+7Jdyx8hRvCA+usl8WfsVrqHLfI3QrM3WE2GKVx36LRCQwHxvQKuq0UV76tnxIMWdLFDgx8HkTQ6Nz3sb5pyWgxnRcr2GDMPIYnTb3R0gqsXAzzXVIcNF8uJ/+PZoB44OyTOqfDuQ0evjL2Rksr8MAWNclkBUnAnWI//9p0JE22Y1jnuZ2tD/wdHAl/wSWNEfWzAsuAbBb7KdEck2f412YsP6I3RgNF2zzOt/G99Imde3hxVRbvRH0aaVO8ZNeugl7Hz8dxQrfIFOF38IcEeXcgp74LR3hxRD9Q8fEaYbeKnT5XHRfr+jerk2G/RuuJgSXBCyP6Ic/HKKFXm4QEOku4aT4EnwF3sn5LuI+fjN08er8xtr9b1gUsyXZ/otsqV6ggsCdQO45AoUzwQdWMg4PPqJ/jXBq11Q1sEslXHE+DJ6nqI7QF3whU+xf4ONGicPxwTs0Z37RMFUgVSBVIFfj/KPAnnoB30RYEztcAAAAASUVORK5CYII=);
}
#user-card-container .info .user .sex.girl {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALKADAAQAAAABAAAALAAAAAD8buejAAAERElEQVRYCe2XXWgcVRTH77l3pGl1k1ZKBR9E8RO1BGqxiAgqUgVRUWrVfkDRJEtBiqShFVHYB1GUZAV9ysY8KEqrRR9aFbRotBVEpFhQfFCoVdsqCtp22xTbuXP8n2lmMyQ7d+7upurDDCT33K9zfvnfM+dOlCqeQoFCgUKBQoH/UgE6F8F562iPtXqVYr6LFV9OihYyqz9I8fdK6fdMd7SLKuXJdmLPKTBXWEf12hAr9SQAF2UBEanf8FMxw+XRrDVZ43MGzFvGS9aG2wB6twSDqjB5HxF9wcR/EqvFGLgJU8sSGATfYbrVhlbUnhNgUdbWazsbsESfmICfoBfK3yRwSYt0WWpDqjLzHTIGpd83pYF7qUJRssbVatek71x04tVN07CqZlYsXNkMVvzJuCn136k0VaUv+6L62NNi+zwdKxynQmgP4vgvRB7sCVYsup1Wr7Y+wcPNtR1QehUgJk2XuoKeK/+at69jhW0U3hPDIlKg9KAvrICZebxJYPGSLghPq415sDLfMbBitTIOROo7Gunf5xM0WRMrSvRO3Ge6Lxl3tR0Ds6IrJQCU+tIVKHuOPz67n6/nykSQve7sTC4wv/zBPOSZI9d5vrgC+NG8YM3mmehwvJ9x2pMHljRbkx5zAvPQ60vswUNHwqHatyhHl6Q3Jjbq7TGx8RflBkv2pFsUswWNvu461bAzDCewMqe6UP+7Id+1qJ2fNoOG+vtj38w3Z8RwDuO6XioLcMGcVM+vyT0lJzBq5s+K9TqoaAF2WTNoBPpIAuJNv/TMltHbxG7lwW3x4NT6CfiCG/fjBJatQbX/Lfz9a7OgcQl8iHQ4EIcJ1bDkvDvk9CxS7WH0euMR4m3TM9lWLrBsdUHHV6rWg1MhltmfDo37vO28dbwXx1KL96EkmgsGtk/5cDZewOLBBW20/gonEOcfUmetrf+wGzfg1c0iS8XBDbfengk/h13C6UwGbNb5fktgfWtPODj2EDL2TdxuBjn3ozG0JrT8Gj4Krkp7wkdNiD7ShXaj5P2iKOrCd8N1GHsAyl4jawUWvx8JqgM7pe/ztAwsTtPQ6SBa0WZ8Sh7H2DDgetJzs2yi/QHrR6na9/WsOcdAW8Dizw6NPh5F6pWGb6JnzxsZeEb68h9HFNKGiNX9UHo5jv58GYf9u2LaC2O7KfW965sGsjd52gJGfl4cWjuRToM4PQK+NS6Fifeplqtvz1fH/6JWPtRnuGh0WwaeCQsHb0geNnI6A7oRsUPDu0pInJmwmtRgUC2vB3Bmne6Qb9Z2b4X5qbGLwr95T5IGAmtGyi8lHtMvois9kvXttt4Kh6ejjVmwEtxVp9uFa7bPGxglaBeO/jPSui+tbNrpvwHtnRJpsDx7VnoY00svPlbP2+cz762wj7NkzUylwyi6IZnrtD0nwAIl0EabW3BZ9Ac39uztFLTYXyhQKFAoUCjw/1DgHz524LXaAru+AAAAAElFTkSuQmCC);
}
#user-card-container .info .like {
  margin-right: 20px;
}
#user-card-container .info .labels {
  margin-top: 12px;
}
#user-card-container .info .labels .label {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 6px;
  display: inline-block;
  margin-bottom: 6px;
}
#user-card-container .info .labels .label:last-child {
  margin-right: 0;
}
#user-card-container .btn-box {
  margin-top: 20px;
  font-size: 12px;
}
#user-card-container .btn-box .btn {
  display: inline-block;
  cursor: pointer;
  width: 80px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  margin-right: 20px;
  border-radius: 4px;
  transition: all 0.3s;
  color: #fff;
  border: 1px solid #00a1d6;
  background-color: #00a1d6;
}
#user-card-container .btn-box .btn:hover {
  border-color: #00b5e5;
  background-color: #00b5e5;
}
#user-card-container .btn-box .btn.remove {
  border-color: #d4d4d4;
  background-color: #fff;
  color: #757575;
}
#user-card-container .btn-box .btn.remove:hover {
  border-color: #00a1d6;
  color: #00a1d6;
  background-color: #fff;
}
#user-card-container .btn-box .message {
  background-color: #fff;
}
#user-card-container .btn-box .followed {
  background: #e5e9ef;
  color: #757575;
  border-color: #e5e9ef;
}
#user-card-container .btn-box .followed:hover {
  border-color: #e5e9ef;
  background-color: #e5e9ef;
}
.user-card-container .vip-red-name {
  color: #fb7299 !important;
}
.user-card-container .vip-green-name {
  color: #62c076 !important;
}
.level.user {
  display: inline-block;
  width: 19px;
  height: 9px;
  margin-left: 8px;
  background: url(data:image/png;base64,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)
    no-repeat;
}
.level.user.l0 {
  background-position: -23px -28px;
}
.level.user.l1 {
  background-position: -23px -92px;
}
.level.user.l2 {
  background-position: -23px -156px;
}
.level.user.l3 {
  background-position: -23px -220px;
}
.level.user.l4 {
  background-position: -23px -284px;
}
.level.user.l5 {
  background-position: -23px -348px;
}
.level.user.l6 {
  background-position: -23px -412px;
}
.level.user.l7 {
  background-position: -23px -476px;
}
.level.user.l8 {
  background-position: -23px -540px;
}
.level.user.l9 {
  background-position: -23px -604px;
}
.ogv-loading[data-v-c9366512] {
  width: 20px;
  height: 20px;
  position: relative;
  display: inline-block;
}
.ogv-loading .ring[data-v-c9366512] {
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid hsla(0, 0%, 100%, 0.5);
  border-bottom-color: #fff;
  transform: translate(-50%, -50%) rotate(0deg);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
@keyframes rotateAuto {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}
.bottom-oper[data-v-40824816] {
  height: 80px;
  overflow: hidden;
}
.bottom-oper .btns[data-v-40824816] {
  display: flex;
  justify-content: space-between;
  height: 32px;
  margin: 24px auto;
  width: 272px;
  align-items: center;
}
.bottom-oper .btns div[data-v-40824816] {
  width: 130px;
  height: 32px;
  border-radius: 2px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  line-height: 32px;
  box-sizing: border-box;
}
.bottom-oper .btns .cancel[data-v-40824816] {
  border: 1px solid #e1e1e1;
  color: #000;
}
.bottom-oper .btns .submit[data-v-40824816] {
  background: #20aae2;
  color: #fff;
}
.ogv-dialog-confirm[data-v-7004816a] {
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  width: 320px;
}
.ogv-dialog-confirm .close[data-v-7004816a] {
  right: 16px;
  top: 16px;
  width: 22px;
  height: 22px;
  position: absolute;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.ogv-dialog-confirm .close .icon[data-v-7004816a] {
  display: inline-block;
  width: 72.22%;
  height: 72.22%;
  color: #00a1d6;
}
.ogv-dialog-confirm .close .icon[data-v-7004816a]:hover {
  color: #00a1d6;
}
.ogv-dialog-confirm .close .icon:hover svg path[data-v-7004816a] {
  fill: #00a1d6;
}
.ogv-dialog-confirm .title[data-v-7004816a] {
  height: 54px;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f4f4;
  text-align: center;
  line-height: 54px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #212121;
}
.ogv-dialog-confirm .short-msg[data-v-7004816a] {
  text-align: center;
  width: 272px;
  margin: 24px auto;
}
.ogv-dialog-confirm .short-msg .content[data-v-7004816a] {
  display: inline-block;
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #757575;
  white-space: pre-wrap;
}
.dialog-base-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.3);
}
.dialog-base-wrapper,
.dialog-base-wrapper .close {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-base-wrapper .close {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 13px;
  cursor: pointer;
  z-index: 10;
}
.dialog-base-wrapper .close .icon {
  display: inline-block;
  width: 72.22%;
  height: 72.22%;
  color: #00a1d6;
}
.dialog-base-wrapper .close .icon:hover {
  color: #00a1d6;
}
.dialog-base-wrapper .close .icon:hover svg path {
  fill: #00a1d6;
}
.dialog-base-wrapper .confirm-dialog {
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  width: 320px;
}
.dialog-base-wrapper .confirm-dialog .close {
  right: 16px;
  top: 16px;
  width: 22px;
  height: 22px;
}
.dialog-base-wrapper .confirm-dialog .title {
  height: 54px;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f4f4;
  text-align: center;
  line-height: 54px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #212121;
}
.dialog-base-wrapper .confirm-dialog .short-msg {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #757575;
  text-align: center;
  width: 272px;
  white-space: pre-wrap;
  margin: 24px auto;
}
.dialog-base-wrapper .confirm-dialog .bottom {
  display: flex;
  justify-content: space-between;
  height: 32px;
  margin: 24px auto;
  width: 272px;
  align-items: center;
}
.dialog-base-wrapper .confirm-dialog .bottom div {
  width: 130px;
  height: 32px;
  border-radius: 2px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  line-height: 32px;
  box-sizing: border-box;
}
.dialog-base-wrapper .confirm-dialog .bottom .left {
  border: 1px solid #e1e1e1;
  color: #000;
}
.dialog-base-wrapper .confirm-dialog .bottom .right {
  background: #20aae2;
  color: #fff;
}
.dialog-base-wrapper .dialog-common-style {
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.dialog-base-wrapper .dialog-common-style .ph-header {
  text-align: center;
  line-height: 50px;
  height: 50px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #000;
  border-bottom: 1px solid #e5e9ef;
}
.dialog-base-wrapper .dialog-common-style .short-msg {
  height: 50px;
  text-align: center;
  font-size: 14px;
  line-height: 50px;
}
.popup-dialog-base-enter-active {
  animation: popup-bounce-in 0.5s;
}
.popup-dialog-base-leave-active {
  animation: popup-bounce-in 0.3s reverse;
}
@keyframes popup-bounce-in {
  0% {
    transform: translateY(-50%) scale(0);
  }
  50% {
    transform: translateY(-50%) scale(1.2);
  }
  to {
    transform: translateY(-50%) scale(1);
  }
}
.common-toast .container[data-v-15669508] {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  z-index: 2022;
  padding: 11px 24px;
  display: inline-block;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #212121;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.common-toast .container .icon[data-v-15669508] {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-position: 50%;
}
.common-toast .container .text[data-v-15669508] {
  margin-left: 8px;
  line-height: 20px;
}
.common-toast .fade-enter-active[data-v-15669508],
.common-toast .fade-leave-active[data-v-15669508] {
  opacity: 1;
}
.common-toast .fade-enter[data-v-15669508],
.common-toast .fade-leave-to[data-v-15669508] {
  opacity: 0;
  transform: translate(-50%, -20px);
}
.local-toast .toast-msg[data-v-3ae3d78e] {
  position: fixed;
  display: inline-block;
  font-family: PingFangSC-Regular;
  max-width: 240px;
  font-size: 12px;
  color: #fff;
  letter-spacing: 0;
  line-height: 20px;
  padding: 8px 12px;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2021;
  border-radius: 4px;
}
.local-toast .toast-enter-active[data-v-3ae3d78e],
.local-toast .toast-leave-active[data-v-3ae3d78e] {
  opacity: 1;
  transform: translateY(0);
}
.local-toast .toast-enter[data-v-3ae3d78e],
.local-toast .toast-leave-to[data-v-3ae3d78e] {
  opacity: 0;
  transform: translateY(20px);
}
.h5-toast .container[data-v-1d7bc4d0] {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2021;
  padding: 0.42666667rem 0.64rem;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  border-radius: 0.21333333rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
}
.h5-toast .container .text[data-v-1d7bc4d0] {
  font-size: 0.512rem;
  display: block;
  text-align: center;
}
.h5-toast .fade-enter-active[data-v-1d7bc4d0],
.h5-toast .fade-leave-active[data-v-1d7bc4d0] {
  opacity: 1;
  transition: opacity 0.25s;
}
.h5-toast .fade-enter[data-v-1d7bc4d0],
.h5-toast .fade-leave-to[data-v-1d7bc4d0] {
  opacity: 0;
}
.crumb[data-v-c236a28e] {
  margin: 9px 0 20px;
  display: flex;
}
.crumb ul[data-v-c236a28e] {
  display: flex;
  flex: 1;
}
.crumb ul .crumb-item[data-v-c236a28e] {
  padding: 0 20px;
}
.crumb ul .crumb-item[data-v-c236a28e]:first-child {
  padding-left: 0;
}
.crumb ul .crumb-item:first-child a[data-v-c236a28e] {
  color: #00a1d6;
}
.crumb ul .crumb-item[data-v-c236a28e]:last-child {
  padding-right: 0;
}
.crumb ul .crumb-item a[data-v-c236a28e] {
  line-height: 28px;
  font-size: 14px;
  color: #6d757a;
  width: 100%;
  text-align: center;
}
.crumb ul .crumb-item:hover a[data-v-c236a28e] {
  color: #00a1d6;
}
.crumb .discovery-entry[data-v-c236a28e] {
  display: block;
  width: 98px;
  height: 30px;
  border-radius: 2px;
  border: 1px solid #e5e9ef;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  overflow: hidden;
}
.cinema-home-crumb ul .crumb-item[data-v-c236a28e] {
  border-right: 1px solid #e4e9f0;
}
.cinema-home-crumb ul .crumb-item a[data-v-c236a28e] {
  font-size: 18px;
  font-weight: 700;
  color: #222;
}
.cinema-home-crumb ul .crumb-item[data-v-c236a28e]:last-child {
  border-right: none;
}
.season-cover[data-v-7e8bcfda] {
  position: relative;
}
.season-cover .badge[data-v-7e8bcfda] {
  position: absolute;
  right: 0;
  top: 0;
  background: #fb7299;
  border-radius: 2px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  color: #fff;
  letter-spacing: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.season-cover .badge.pink[data-v-7e8bcfda] {
  background-color: #fb7299;
}
.season-cover .badge.blue[data-v-7e8bcfda] {
  background-color: #00a1d6;
}
.season-cover .badge.yellow[data-v-7e8bcfda] {
  background-color: #ffa726;
}
.season-cover .score[data-v-7e8bcfda] {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 24px;
  font-weight: 700;
  padding: 0 8px;
  color: #e1e1e1;
  height: 38px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
  width: 100%;
  text-align: right;
}
.season-cover .ranking[data-v-7e8bcfda] {
  position: absolute;
  left: 0;
  top: 0;
}
.title[data-v-7e8bcfda] {
  margin: 6px 0;
  color: #e1e1e1;
  font-size: 16px;
}
.desc[data-v-7e8bcfda] {
  color: #727272;
  font-size: 12px;
}
.banner-wrapper[data-v-3cb385e4] {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.banner-wrapper .wide[data-v-3cb385e4] {
  display: block;
}
.banner-wrapper .narrow[data-v-3cb385e4] {
  display: none;
}
.bg-container[data-v-3cb385e4] {
  height: 500px;
  overflow: hidden;
  background: #ccc;
}
.bg-container .bg-item[data-v-3cb385e4] {
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: auto 100%;
  position: absolute;
  width: 100%;
}
.bg-container .bg-item a[data-v-3cb385e4] {
  display: block;
  height: 100%;
  position: relative;
}
.bg-container .bg-item a img[data-v-3cb385e4] {
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.bg-container .bg-item.selected[data-v-3cb385e4] {
  display: block;
}
.side-list-wrp[data-v-3cb385e4] {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 400px;
  bottom: 0;
  box-sizing: border-box;
  z-index: 1;
  overflow: hidden;
  background-image: linear-gradient(
    0deg,
    #121622,
    rgba(8, 10, 15, 0.5) 79%,
    transparent 90%
  );
}
.side-list-wrp .side-blur[data-v-3cb385e4] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.side-list-wrp .side-blur .blur-img-wrp[data-v-3cb385e4] {
  position: absolute;
  right: 0;
  top: 0;
}
.side-list-wrp .side-blur .blur-img-wrp img[data-v-3cb385e4] {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(4px);
}
.side-list-wrp .side-blur div.narrow[data-v-3cb385e4],
.side-list-wrp .side-blur div.wide[data-v-3cb385e4] {
  width: 100%;
  height: 100%;
  filter: blur(4px);
  background-position: 100%;
  background-size: auto;
  background-repeat: no-repeat;
}
.side-list-wrp .side-blur div.narrow.wide[data-v-3cb385e4],
.side-list-wrp .side-blur div.wide.wide[data-v-3cb385e4] {
  display: block;
}
.side-list-wrp .side-blur div.narrow.narrow[data-v-3cb385e4],
.side-list-wrp .side-blur div.wide.narrow[data-v-3cb385e4] {
  display: none;
}
.side-list-wrp .side-blur div.mask[data-v-3cb385e4] {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    #121622,
    rgba(8, 10, 15, 0.5) 81%,
    transparent
  );
  position: absolute;
  top: 0;
}
.side-list[data-v-3cb385e4] {
  position: absolute;
  top: 80px;
  width: 400px;
}
.side-list .side-item a[data-v-3cb385e4] {
  padding: 0 21px 0 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  display: block;
  height: 20px;
  margin-bottom: 24px;
  opacity: 0.6;
}
.side-list .side-item.selected.only-title .title[data-v-3cb385e4] {
  margin-bottom: 0;
}
.side-list .side-item.selected.only-title a[data-v-3cb385e4] {
  padding-top: 26px;
}
.side-list .side-item.selected a[data-v-3cb385e4] {
  padding: 12px 21px 12px 24px;
  height: 78px;
  background: rgba(0, 161, 214, 0.2);
  box-sizing: border-box;
  opacity: 1;
}
.side-list .side-item.selected .title[data-v-3cb385e4] {
  font-size: 20px;
  line-height: 28px;
  display: block;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: font-size 0.2s ease;
}
.side-list .side-item.selected .desc[data-v-3cb385e4] {
  font-size: 14px;
  color: #fff;
  line-height: 20px;
}
.side-list .side-item.last a[data-v-3cb385e4] {
  margin-bottom: 60px;
}
.bg-item[data-v-3cb385e4] {
  transition: opacity 0.3s;
}
.banner-enter[data-v-3cb385e4],
.banner-leave-to[data-v-3cb385e4] {
  opacity: 0;
}
@media screen and (max-width: 1920px) {
  .bg-container[data-v-3cb385e4] {
    height: 480px;
  }
  .side-list-wrp[data-v-3cb385e4],
  .side-list[data-v-3cb385e4] {
    width: 300px;
  }
  .side-list .side-item a[data-v-3cb385e4] {
    margin-bottom: 20px;
  }
  .side-list .side-item.selected a[data-v-3cb385e4] {
    padding: 8px 21px 10px 20px;
    height: 70px;
  }
  .side-list .side-item.selected .title[data-v-3cb385e4] {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  .side-list .side-item.selected.only-title a[data-v-3cb385e4] {
    padding: 20px 21px 20px 23px;
    line-height: 70px;
  }
  .side-list .side-item.last a[data-v-3cb385e4] {
    margin-bottom: 28px;
  }
}
.section-title[data-v-a97035e6] {
  color: #fff;
}
.section-title .main-title[data-v-a97035e6] {
  font-size: 28px;
}
.section-title .subTitle[data-v-a97035e6] {
  color: #fff;
  background: #191b24;
  padding: 4px 15px;
  border-radius: 16px;
  cursor: pointer;
}
.section-title .subTitle.highlight[data-v-a97035e6],
.section-title .subTitle[data-v-a97035e6]:hover {
  background: #20aae2;
}
.notice[data-v-75263a54] {
  display: flex;
}
.notice_content[data-v-75263a54] {
  flex: 1;
  display: flex;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background: #e6f5f4;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.notice_content-line[data-v-75263a54] {
  width: 2px;
  height: 38px;
  background: linear-gradient(
    180deg,
    #fff 6px,
    #e6f5f4 8px,
    #fff 14px,
    #e6f5f4 16px,
    #fff 22px,
    #e6f5f4 24px,
    #fff 30px,
    #e6f5f4 32px,
    #fff 38px
  );
}
.notice_content-left[data-v-75263a54] {
  width: 50px;
  height: 28px;
  line-height: 28px;
  background: url(//i0.hdslb.com/bfs/activity-plat/static/20200715/1b596cf9a3ab4ee28909062b003caf8f/CsJxkgnv3.png)
    no-repeat;
  background-size: 100% 100%;
  color: #fff;
  text-align: center;
  margin: 5px;
}
.notice_content-left-price[data-v-75263a54] {
  font-size: 16px;
}
.notice_content-left-price.mini[data-v-75263a54] {
  font-size: 14px;
}
.notice_content-left-desc[data-v-75263a54] {
  font-size: 10px;
  vertical-align: 1px;
}
.notice_content-txt[data-v-75263a54] {
  font-size: 12px;
  color: #0ba395;
  height: 38px;
  line-height: 38px;
  font-weight: 600;
  width: 180px;
  padding-left: 5px;
}
.notice_btn[data-v-75263a54] {
  width: 55px;
  background: #e6f5f4;
  height: 38px;
  line-height: 38px;
  font-weight: 600;
  text-align: center;
  color: #999;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.notice_btn.canReceive[data-v-75263a54] {
  cursor: pointer;
  color: #0ba395;
}
.fe-ui-icon[data-v-6c1a73ae] {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.b-img {
  background-color: #f1f2f3;
  position: relative;
}
.b-img.sleepy .b-img__inner {
  opacity: 0;
}
.b-img.sleepy:after {
  background-image: url(data:image/png;base64,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);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 34px 33px;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.van-message {
  padding: 10px 16px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  margin-bottom: 10px;
  pointer-events: all;
  transition: opacity 0.3s, transform 0.3s;
}
.van-message-box {
  position: fixed;
  z-index: 1010;
  left: 50%;
  top: 16px;
  transform: translateX(-50%);
  pointer-events: none;
}
.van-message-success {
  background: rgba(82, 196, 26, 0.8);
}
.van-message-error {
  background: rgba(245, 34, 45, 0.8);
}
.van-message-warning {
  background: rgba(250, 173, 20, 0.8);
}
.van-message-info,
.van-message-loading {
  background: rgba(0, 0, 0, 0.8);
}
.van-message-fade-enter,
.van-message-fade-leave-active {
  transform: translateY(50%);
  opacity: 0;
}
.van-popper .popper__arrow,
.van-popper .popper__arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.van-popper .popper__arrow {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
}
.van-popper .popper__arrow:after {
  content: " ";
  border-width: 6px;
}
.van-popper[x-placement^="top"] {
  margin-bottom: 12px;
}
.van-popper[x-placement^="top"] .popper__arrow {
  bottom: -6px;
  left: 50%;
  margin-right: 3px;
  border-top-color: #ebeef5;
  border-bottom-width: 0;
}
.van-popper[x-placement^="top"] .popper__arrow:after {
  bottom: 1px;
  margin-left: -6px;
  border-top-color: #fff;
  border-bottom-width: 0;
}
.van-popper[x-placement^="bottom"] {
  margin-top: 12px;
}
.van-popper[x-placement^="bottom"] .popper__arrow {
  top: -6px;
  left: 50%;
  margin-right: 3px;
  border-top-width: 0;
  border-bottom-color: #ebeef5;
}
.van-popper[x-placement^="bottom"] .popper__arrow:after {
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: #fff;
}
.van-popper[x-placement^="right"] {
  margin-left: 12px;
}
.van-popper[x-placement^="right"] .popper__arrow {
  top: 50%;
  left: -6px;
  margin-bottom: 3px;
  border-right-color: #ebeef5;
  border-left-width: 0;
}
.van-popper[x-placement^="right"] .popper__arrow:after {
  bottom: -6px;
  left: 1px;
  border-right-color: #fff;
  border-left-width: 0;
}
.van-popper[x-placement^="left"] {
  margin-right: 12px;
}
.van-popper[x-placement^="left"] .popper__arrow {
  top: 50%;
  right: -6px;
  margin-bottom: 3px;
  border-right-width: 0;
  border-left-color: #ebeef5;
}
.van-popper[x-placement^="left"] .popper__arrow:after {
  right: 1px;
  bottom: -6px;
  margin-left: -6px;
  border-right-width: 0;
  border-left-color: #fff;
}
.van-popover {
  position: absolute;
  background: #fff;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.van-popover--plain {
  padding: 18px 20px;
}
.van-popover__title {
  color: #303133;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 12px;
}
.van-popover:focus,
.van-popover:focus:active,
.van-popover__reference:focus:hover,
.van-popover__reference:focus:not(.focusing) {
  outline-width: 0;
}
.van-pagination {
  padding: 2px 5px;
  white-space: nowrap;
  color: #2d2f33;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.van-pagination-btn-next,
.van-pagination-btn-prev,
.van-pagination-pager li {
  color: #222;
  -webkit-transition: all 0.2s;
  font-size: 14px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  min-width: 15px;
  text-decoration: none;
  text-align: center;
}
.van-pagination-btn-next,
.van-pagination-btn-prev {
  padding: 0 15px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ddd;
  transition: all 0.2s;
}
.van-pagination-pager li {
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ddd;
  background-image: none;
  transition: all 0.2s;
  margin: 0 2px;
  padding: 0 14px;
}
.van-pagination-pager li:hover {
  color: #00a1d6;
}
.van-pagination-pager .van-pagination-active {
  background: #00a1d6;
  color: #fff !important;
  border: 1px solid #00a1d6;
}
.van-pagination-point {
  display: -ms-flexbox;
  display: flex;
  background-color: #f4f4f4;
  padding: 6px;
  border-radius: 50px;
  -ms-flex-align: center;
  align-items: center;
  transition: all 0.2s;
}
.van-pagination-point .van-pagination-item {
  font-size: 0;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background-color: silver;
  margin: 0 3px;
  transition: all 0.2s;
  cursor: pointer;
}
.van-pagination-point .van-pagination-item:hover {
  background-color: #00a1d6;
}
.van-pagination-point .van-pagination-dian {
  font-size: 12px;
  line-height: 0;
  color: silver;
}
.van-pagination-point .van-pagination-active {
  border-radius: 3px;
  width: 12px;
  background-color: #00a1d6;
}
.van-pagination-point:hover {
  transform: scale(1.4);
}
.van-pagination-point:hover .van-pagination-item {
  transform: scale(1.1);
}
.van-pagination-btn-next-small,
.van-pagination-btn-prev-small {
  padding: 0 15px;
  color: #222;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ddd;
  transition: all 0.2s;
  font-size: 14px;
  min-width: 15px;
  display: inline-block;
  text-decoration: none;
  height: 36px;
  line-height: 36px;
}
.van-pagination-btn-next-small:hover,
.van-pagination-btn-prev-small:hover {
  color: #00a1d6;
}
.van-pagination-pager-small .van-pagination-disabled {
  color: #c0c4cc;
  background-color: #fff;
  cursor: not-allowed;
}
.van-pagination-pager-small-content {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  color: #222;
}
.van-pagination-jumper input {
  padding: 0 5px;
  background: 0 0;
  outline: 0;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 4px;
  width: 40px;
  margin-left: 5px;
  margin-right: 5px;
}
.van-album .album-preview {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.van-album .album-preview,
.van-album .album-preview .album-close {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.van-album .album-preview .album-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: hsla(0, 0%, 41.2%, 0.2);
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
.van-album .album-preview .album-close i {
  transition: transform 0.3s;
}
.van-album .album-preview .album-close:hover i {
  transform: rotate(180deg);
}
.van-album .album-preview .album-loading {
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 40px;
  color: #fff;
}
.van-album .album-preview .album-pic {
  transition: opacity 0.6s;
  max-width: 100%;
  max-height: 100%;
}
.van-album .album-preview .album-pic.alpha0 {
  opacity: 0;
}
.van-album .album-preview .album-pic.alpha1 {
  opacity: 1;
}
.van-rate {
  font-size: 18px;
}
.van-rate .van-rate-star {
  width: 1em;
  height: 1em;
  margin-right: 0.2em;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.van-rate.disabled .van-rate-star {
  cursor: auto;
}
.van-rate .rate-show-text {
  font-size: 12px;
  vertical-align: middle;
  display: inline-block;
  margin-left: 5px;
}
.van-slide {
  position: relative;
  overflow: hidden;
}
.van-slide > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}
.van-qrcode {
  display: inline-block;
}
.van-watchlater {
  position: absolute;
  z-index: 20;
  width: 22px;
  height: 22px;
  right: 8px;
  bottom: 8px;
  cursor: pointer;
  background-size: contain;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABT0lEQVQ4je3VMYrCQBTG8b/DWASLNKJgJ1hY2sloZeF2gkeYW+wZvIVXsLBJY5UdtLJLk17EIghCwChukWRxFzSaaLdfMwm8/EgemTclgOl02gEmwAAoky8RsAA+tdbrUoJ+AVZO8G9CoCeJ39Sq1+sopbBtO5e23+8xxrDdbi1gIog/vxAKYNs2Sqn0diBIenoP9X2fIAgyccv66WZZZBXvdjtc18UYkwlfJxM+n8+/1pfBefMPPw4LEZcEQcBqteJ0Or0GrlartFotLpcLnucxm83YbDbFYSEE/X6f4XBIpVLhcDjgOA6u63I8HvPDaRqNBuPxmHa7DcS7cT6f36yXj8IAUkq63S7NZpPlcomUtx9/Ck5Tq9UYjUZ3a976u0UQz9OiCcMwvYwk8XHyYYxBKXU9+p5Grybg4m1Hk9Bar4Ee4JC0JWeixOhprdffE/1yRW/TLMYAAAAASUVORK5CYII=);
}
.van-watchlater.added {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABiklEQVQ4jbXVzyvDcRzH8efns1+JIRtbOSiKrMRBrZZC5IzcHJYTJyc1J464ubuY5MQ/oLSTNSHfIg5KyEmbzY/5sa++c/hOCtv47rvX8f2pR+/3u0+fjwAgfNoFLAH9gA1jUYEIECLoU0QOjQIVBsHveQECEr1Ts1By1pJEH9/s9EuM77RQbLIMKACG4QaHhYNBL7EBj3lwtU2yFXDT6rRil8Ic2C4F634XnbU24m8aY9F46bAUsNJdR1+9g6f3LKPROBfp99LhxY5aRhorULUs43sJlFQmfxO/FWMDHpQhL+3VXzdxps3JVEsVAJOHSSK3rwWbsP5WtAhorrSy09vAxH6CeoeFOV8NALPHKTZvnovMBoLwafZ7sc4uWfe76HE70HKnUsDy+SNzJ/dFUciziruMxvBunNXLNFLo6Mb1M/N/RCHPKgAyWpbpoyQHdxmaKi0snD3wYzQj8GfWrtL/4L5S1rdCLYOrSvTvxOxEJBBC/07MygsQkgR9ChAAtiltLWrOCBD0KR9smmovo1v+1QAAAABJRU5ErkJggg==);
}
.van-watchlater.black {
  width: 28px;
  height: 28px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAwFBMVEUAAAAGBgavr69EREQUFBQ1NTUODg7t7e3FxcV0dHRbW1sAAAAAAAAAAAD+/v77+/v4+Pj09PTj4+P8/PzV1dWpqamSkpIhISH19fXX19fLy8ulpaWdnZ1kZGRVVVUsLCz6+vrm5uba2tq9vb20tLSsrKyXl5eMjIx+fn54eHhsbGxpaWk+Pj4AAAAAAADv7+/e3t7AwMC3t7ehoaFLS0vo6OjR0dHOzs7CwsKCgoKCgoJiYmLp6enMzMywsLD////DVMIGAAAAP3RSTlOZmtOrnqec8927sopkEf38+ffu/eXPxqH45+DOyrWwpPvv6NnV0cjEv724t6qPAPTr2tbNru/j4tvAv7Tw4dTgAD9iAAABpElEQVRIx+ST13KCUBiEDyCCBRBQsaHGHrvp/Xv/twpDTBgRonjr3u0w38zu8h+xNsolkVGlsrEWxkpcoJUhyuISBVjpIi7Arli9bmE6mb0rUhZI6tZu2KuxK+TO5RYOB2pM8udgShWASlOXa8MnDYDN7DRX6AOVkf/bTemEqe9OdW0DluwdNH7VgKZ3knNUEVN+CGz/K3oLtJJGrJugp3MPFrSSy7wBnVRwAE7aTxuDq6YNCpaaehRN2KV8eoRaNMh8GesBKIlgEewoaAtTPoytw0gIXz4KJYMcORfQ5n/Wy4kuaMKHzzioQTFyhNJ7P27ZMNuSDb4Noxingi3FQSpTab8bWx0+YOMdV6yKIxAGSuCkZ6Dv9sEsJlzNSxKIex/ejgUkXkEdxokgLMJn4gBUpcygyH+BHYyVMWo4w/eMwXFIfOCgAVKiAxMQTgCYAH+S44MkOXRAOJGbYyRyHXU24rIVWgjqCNgbkZWRRYA+JrfoYKaksKK8eKS8QCZcBVBe6VBezRGuWGlalSMaD2KQxsMooCMgu6FLdtOa7MY82d0HAP3jZ1lFdjimAAAAAElFTkSuQmCC);
}
.van-watchlater.black.added {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAANlBMVEUAAAD8/PxpaWlfX1/9/f1ycnIAAAAAAAAAAAAAAAAAAAD09PTr6+vv7+/h4eFjY2NZWVn///+5pCBCAAAAEXRSTlOZ/Lez/bqKZBGPAPfy9ey1sk5dq9MAAACBSURBVEjH7dc7FsQgDENRQSZAAvl4/5udUrVU5vj1t3El4xy9Qaz1cWIcMDoGOqw6mgcbsux7Peuqjqsl4jJdLNOVx3Q1neH2OavjMCN+u+GwglJxeAuldpeNUnGUqqOUHSWdKOlESSdKOknSqZJO673vDVn2jZrJ7Gltj3n7ffgDLGYI2l1NOaQAAAAASUVORK5CYII=);
}
.van-watchlater .wl-tips {
  position: absolute;
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  line-height: 18px;
  padding: 4px 8px;
  background-color: #000;
  background: rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  top: -30px;
}
.van-watchlater-move-enter-active {
  animation: bounce-in 0.26s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
.bili-icon,
.icon {
  display: inline-block;
  background-image: url(//static.hdslb.com/images/base/icons.png);
}
.bili-wrapper {
  margin: 0 auto;
  width: 1160px;
}
@media screen and (max-width: 1400px) {
  .bili-wrapper {
    width: 980px;
  }
}
.bili-wrapper .l-con {
  float: left;
  width: 900px;
}
@media screen and (max-width: 1400px) {
  .bili-wrapper .l-con {
    width: 720px;
  }
}
.bili-wrapper .r-con {
  width: 260px;
  float: right;
}
.elevator-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  top: 0;
  left: 0;
}
.b-loading {
  text-align: center;
  height: 20px;
  color: #99a2aa;
}
.b-loading span {
  vertical-align: middle;
  height: 20px;
  line-height: 20px;
}
.b-loading a,
.b-loading span {
  display: inline-block;
}
.b-loading a {
  width: auto;
}
.b-loading:before {
  content: "";
  width: 20px;
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/loading.gif)
    no-repeat 50%;
  margin-right: 5px;
}
.b-loading:after,
.b-loading:before {
  display: inline-block;
  vertical-align: middle;
  height: 20px;
}
.b-loading:after {
  content: "\6B63\5728\52A0\8F7D...";
  line-height: 25px;
  color: #99a2aa;
}
.b-loading.b-load-fail:before {
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/empty-icon.png)
    center -472px no-repeat;
}
.b-loading.b-load-fail:after {
  display: none;
}
.bi-btn {
  display: inline-block;
  background: #00a1d6;
  color: #fff;
  font-size: 14px;
  padding: 4px 18px;
  border-radius: 4px;
  transition: all 0.3s;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #00a1d6;
  text-align: center;
  cursor: pointer;
}
.bi-btn:hover {
  color: #fff;
  background: #00b5e5;
  border-color: #00b5e5;
}
.bi-btn:active {
  background: #01769c;
  border-color: #01769c;
}
.bi-btn.text-only {
  color: #00a1d6;
  border-color: transparent;
  background-color: #fff;
}
.bi-btn.text-only:active,
.bi-btn.text-only:hover {
  border-color: #e5e9ef;
  color: #00a1d6;
  background-color: #e5e9ef;
}
.bili-msg {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-style: normal;
  margin-top: 10px;
  transition: all 0.3s;
  opacity: 0;
  z-index: 20101;
}
.bili-msg.show {
  margin-top: 0;
  opacity: 1;
}
.bili-msg.error {
  background-color: rgba(228, 12, 12, 0.8);
}
.bili-msg .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}
.watch-later-hint {
  position: absolute;
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  line-height: 18px;
  padding: 4px 8px;
  z-index: 20;
  background-color: #000;
  background: rgba(0, 0, 0, 0.8);
}
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.custom-scrollbar::-webkit-scrollbar-button,
.custom-scrollbar::-webkit-scrollbar-track {
  display: none;
}
.custom-scrollbar::-webkit-scrollbar-track-piece {
  background: #ddd;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e9ef;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.bili-dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10000;
  color: #222;
}
.bili-dialog .con {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  background: #fff;
  width: 360px;
  border-radius: 4px;
}
.bili-dialog .con .btn-close {
  position: absolute;
  width: 16px;
  height: 16px;
  right: 15px;
  top: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
}
.bili-dialog .con .btn-close:before {
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
}
.bili-dialog .con .btn-close:after,
.bili-dialog .con .btn-close:before {
  content: "";
  position: absolute;
  height: 1px;
  width: 100%;
  top: 50%;
  left: 0;
  margin-top: -1px;
  background: #aaa;
}
.bili-dialog .con .btn-close:after {
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}
.bili-dialog .con .btn-close:hover:after,
.bili-dialog .con .btn-close:hover:before {
  background: #666;
}
.bili-dialog .con header {
  text-align: center;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  padding: 15px 20px;
}
.bili-dialog .con .txt {
  padding: 60px 20px 40px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
.bili-dialog .con .btn-box {
  padding: 25px 10px;
  text-align: center;
}
.bili-dialog .con .btn-box .bi-btn {
  margin: 0 10px;
  padding: 6px 25px;
}
.bili-dialog .con .btn-box .btn-cancel {
  background: #fff;
  color: #6d757a;
  border: 1px solid #ccd0d7;
}
.bili-dialog .con .btn-box .btn-cancel:hover {
  color: #00a1d6;
  background: #fff;
  border-color: #00a1d6;
}
.bili-dialog .con .btn-box .btn-cancel:active {
  background: #f1f1f1;
  border-color: #00a1d6;
  color: #00a1d6;
}
.next-button {
  font-size: 12px;
  color: #999;
  line-height: 22px;
  cursor: pointer;
}
.next-button .txt {
  margin-right: 4px;
  vertical-align: middle;
}
.next-button .switch-button {
  margin: 0;
  display: inline-block;
  position: relative;
  width: 30px;
  height: 20px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #ccc;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
  vertical-align: middle;
}
.next-button .switch-button:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  background-color: #fff;
  transition: all 0.2s;
}
.next-button .switch-button.on {
  border: 1px solid #00a1d6;
  background: #00a1d6;
}
.next-button .switch-button.on:after {
  left: 11px;
}
.b-img {
  background-color: #c9ccd0;
}
.video-info .video-title {
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  line-height: 26px;
  height: 26px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.video-info .video-title .activity {
  transition: none;
  display: inline-block;
  vertical-align: text-bottom;
  font-size: 12px;
  margin-right: 10px;
  padding: 0 5px;
  height: 22px;
  line-height: 22px;
  border-radius: 2px;
  color: #fff;
  background-color: #ffafc9;
  vertical-align: middle;
}
.video-info .video-title .tit {
  vertical-align: middle;
}
.video-info .video-title .tr-fix {
  margin-left: -0.5em;
}
.video-info .video-data {
  font-size: 12px;
  height: 16px;
  color: #999;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.video-info .video-data span {
  display: inline-block;
  height: 16px;
}
.video-info .video-data .dm {
  margin-right: 12px;
}
.video-info .video-data .a-crumbs {
  margin-right: 16px;
}
.video-info .video-data .a-crumbs a {
  color: #999;
}
.video-info .video-data .a-crumbs a:hover {
  color: #00a1d6;
}
.video-info .video-data .argue {
  margin-left: 16px;
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
}
.video-info .video-data .argue i {
  font-size: 16px;
  margin-right: 5px;
  color: #fd676f;
  width: 16px;
  vertical-align: top;
}
.video-info .video-data .argue.argue {
  display: inline-block;
  margin-left: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100vw - 860px);
  font-weight: 300px;
  padding: 4px 13px 4px 4px;
  border-radius: 2px;
  color: #e78b1f;
  background: #fff1d3;
}
.video-info .video-data .argue.argue i {
  color: #e78b1f;
}

.ring-progress {
  position: absolute;
}

.svga-container {
  position: absolute;
  z-index: 99999;
}
.svga-container.svga-top {
  width: 120px;
  height: 120px;
}
.svga-container.svga-center {
  width: 92px;
  height: 92px;
}
.svga-container.svga-fireworks {
  width: 120px;
  height: 120px;
}

.video-toolbar {
  line-height: 30px;
  height: 28px;
  font-size: 14px;
  color: #505050;
  border-bottom: 1px solid #e5e9f0;
  padding-bottom: 12px;
}
.video-toolbar .ops {
  float: left;
  position: relative;
  height: 24px;
  -webkit-user-select: none;
  user-select: none;
}
.video-toolbar .ops .long-click-animation {
  position: absolute;
  width: 96px;
  height: 96px;
  left: -32px;
  top: -94px;
  z-index: 100;
  transform-origin: bottom center;
}
.video-toolbar .ops .svga-fireworks {
  position: absolute;
  top: -106px;
  left: -46px;
}
.video-toolbar .ops .long-click-animation.shake {
  animation: shake 1500ms ease-in-out infinite;
}
.video-toolbar .ops .long-click-finish-animation {
  position: absolute;
  width: 96px;
  height: 96px;
  left: -32px;
  top: -100px;
  z-index: 100000;
  transform-origin: bottom center;
}
.video-toolbar .ops .long-click-finish-text {
  display: inline-block;
  position: absolute;
  left: 76px;
  top: -56px;
  padding: 11px 12px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  background: #000000;
  line-height: 22px;
  z-index: 101;
}
.video-toolbar .ops .long-click-finish-text::after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 10px solid #000000;
  border-bottom: 7px solid transparent;
  left: -8px;
  top: 16px;
}
.video-toolbar .ops > span {
  width: 92px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
  white-space: nowrap;
  color: #505050;
  position: relative;
}
.video-toolbar .ops > span i {
  font-size: 28px;
  vertical-align: top;
  margin-right: 6px;
  width: 28px;
  height: 28px;
  color: #757575;
}
.video-toolbar .ops > span:hover,
.video-toolbar .ops > span.on {
  color: #00a1d6;
}
.video-toolbar .ops > span:hover i,
.video-toolbar .ops > span.on i {
  color: #00a1d6;
}
.video-toolbar .ops > span.like i.shake {
  animation: shake 1500ms ease-in-out infinite;
}
.video-toolbar .ops .svga-top {
  left: -45px;
  top: -125px;
}
.video-toolbar .ops .svga-center {
  left: -33px;
  top: -33px;
}
.video-toolbar .ops .share {
  position: relative;
  height: 35px;
  width: 62px;
}
.video-toolbar .ops .share .txt {
  margin-right: 12px;
  cursor: pointer;
  vertical-align: top;
}
.video-toolbar .ops .share .share-box {
  display: none;
}
.video-toolbar .ops .share:hover .share-box {
  display: block;
}
.video-toolbar .ops .share .share-pos {
  position: absolute;
  right: -160px;
  top: 35px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 422px;
  z-index: 30;
  color: #505050;
  background: #fff;
  border: 1px solid #e5e9ef;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 2px;
}
.video-toolbar .ops .share .share-pos .box-a {
  display: flex;
  align-items: center;
}
.video-toolbar .ops .share .share-pos .box-a .share-down {
  margin-bottom: 20px;
}
.video-toolbar .ops .share .share-pos .box-a .share-down span {
  display: inline-block;
  width: 45px;
  white-space: nowrap;
  text-align: center;
}
.video-toolbar .ops .share .share-pos .box-a .share-down span i {
  display: block;
  margin-left: 10px;
}
.video-toolbar .ops .share .share-pos .box-a .share-down .share-btn {
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
  color: #505050;
  transition: all 0.3s;
}
.video-toolbar .ops .share .share-pos .box-a .share-down .share-btn i {
  font-size: 28px;
  vertical-align: sub;
  width: 28px;
  height: 28px;
  color: #757575;
}
.video-toolbar .ops .share .share-pos .box-a .share-down .share-btn:last-child {
  margin-right: 12px;
}
.video-toolbar .ops .share .share-pos .box-a .share-down .share-btn:hover {
  color: #00a1d6;
}
.video-toolbar .ops .share .share-pos .box-a .share-down .share-btn:hover i {
  color: #00a1d6;
}
.video-toolbar .ops .share .share-pos .box-b {
  text-align: center;
  padding: 0 0 0 20px;
  border-left: 1px solid #e5e9ef;
  margin-left: 20px;
}
.video-toolbar .ops .share .share-pos .share-address .t {
  font-size: 18px;
  color: #333;
  line-height: 24px;
  text-align: left;
  margin-bottom: 20px;
}
.video-toolbar .ops .share .share-pos .share-address ul li {
  line-height: 20px;
  margin-bottom: 16px;
}
.video-toolbar .ops .share .share-pos .share-address ul li > span {
  text-align: left;
}
.video-toolbar .ops .share .share-pos .share-address ul li .name {
  display: inline-block;
  width: 62px;
  font-size: 13px;
}
.video-toolbar .ops .share .share-pos .share-address ul li input {
  border: 1px solid #ccd0d7;
  box-shadow: none;
  border-radius: 0;
  margin: 0;
  padding: 0 4px;
  line-height: 18px;
  height: 18px;
  margin-left: 10px;
  width: 160px;
  vertical-align: middle;
  font-size: 12px;
}
.video-toolbar .ops .share .share-pos .share-address ul li .btn {
  display: inline-block;
  margin-left: -1px;
  line-height: 20px;
  width: 40px;
  cursor: pointer;
  background: #00a1d6;
  text-align: center;
  color: #fff;
  font-size: 12px;
}
.video-toolbar .rigth-btn {
  float: right;
  display: flex;
  align-items: center;
}
.video-toolbar .appeal-text {
  float: right;
  cursor: pointer;
  font-size: 12px;
  margin-right: 20px;
  color: #505050;
  transition: color 0.3s;
}
.video-toolbar .appeal-text:hover {
  color: #00a1d6;
}
.video-toolbar .note-tip {
  position: absolute;
  width: 153px;
  top: -47px;
  right: -4px;
  z-index: 999;
}
.video-toolbar .note-btn {
  position: relative;
  margin-right: 25px;
  width: 71px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;
  font-size: 12px;
  line-height: 20px;
}
.video-toolbar .note-btn .iconfont {
  margin-right: 5px;
}
.video-toolbar .note-btn__blue {
  border: 1px solid #00a1d6;
  color: #00a1d6;
  transition: 0.3s;
}
.video-toolbar .note-btn__blue:hover {
  color: #fff;
  background: #00a1d6;
}
.video-toolbar .note-btn__pink {
  border: 1px solid #fb7299;
  color: #fb7299;
  transition: 0.3s;
}
.video-toolbar .note-btn__pink:hover {
  color: #fff;
  background: #fb7299;
}
.video-toolbar .note-btn__gray {
  cursor: default;
  border: 1px solid #d6d6d6;
  color: #d6d6d6;
}
.video-toolbar .note-btn__gray:hover:after {
  flex-wrap: nowrap;
  display: flex;
  position: absolute;
  z-index: 200;
  top: -51px;
  background: #5d5d5d;
  border-radius: 4px;
  padding: 5px 12px;
  line-height: 16px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  content: attr(labelTooltip);
  width: 169px;
}
.video-toolbar .more {
  float: right;
  cursor: pointer;
  color: #757575;
  font-size: 16px;
  display: inline-block;
  transition: all 0.3s;
  position: relative;
  text-align: center;
}
.video-toolbar .more i {
  font-size: 16px;
  vertical-align: baseline;
  color: #757575;
}
.video-toolbar .more:hover .more-ops-list {
  display: block;
}
.video-toolbar:after {
  display: block;
  content: "";
  clear: both;
}
.more-ops-list {
  display: none;
  position: absolute;
  width: 80px;
  left: -65px;
  z-index: 30;
  text-align: center;
  padding: 10px 0;
  background: #ffffff;
  border: 1px solid #e5e9ef;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  font-size: 14px;
  color: #222;
}
.more-ops-list li {
  position: relative;
  height: 34px;
  line-height: 34px;
  cursor: pointer;
  transition: all 0.3s;
}
.more-ops-list li:hover {
  color: #00a1d6;
  background: #e7e7e7;
}
.more-ops-list .ops-watch-later {
  position: absolute;
  width: 100%;
  height: 34px;
  background: none;
  right: 0;
  bottom: 0;
}
.more-ops-list .ops-watch-later .wl-tips {
  display: none;
}
.more-ops-list .ops-watch-later.added {
  background: none;
}
@keyframes shake {
  2% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg);
  }
  4% {
    transform: translate(-0.5px, 2.5px) rotate(0.5deg);
  }
  6% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  8% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }
  10% {
    transform: translate(1.5px, 2.5px) rotate(0.5deg);
  }
  12% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(1.5px, 1.5px) rotate(-0.5deg);
  }
  16% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  18% {
    transform: translate(1.5px, 0.5px) rotate(0.5deg);
  }
  20% {
    transform: translate(1.5px, -1.5px) rotate(-0.5deg);
  }
  22% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  24% {
    transform: translate(-0.5px, -1.5px) rotate(0.5deg);
  }
  26% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  28% {
    transform: translate(2.5px, 1.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  32% {
    transform: translate(1.5px, 2.5px) rotate(1.5deg);
  }
  34% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
  }
  38% {
    transform: translate(1.5px, -1.5px) rotate(1.5deg);
  }
  40% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  42% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  44% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(-0.5px, 2.5px) rotate(-0.5deg);
  }
  48% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  50% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  52% {
    transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }
  54% {
    transform: translate(-0.5px, -1.5px) rotate(-0.5deg);
  }
  56% {
    transform: translate(1.5px, -1.5px) rotate(1.5deg);
  }
  58% {
    transform: translate(0.5px, 1.5px) rotate(1.5deg);
  }
  60% {
    transform: translate(-0.5px, -0.5px) rotate(1.5deg);
  }
  62% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  64% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(2.5px, 0.5px) rotate(1.5deg);
  }
  68% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  70% {
    transform: translate(0.5px, 2.5px) rotate(1.5deg);
  }
  72% {
    transform: translate(1.5px, -0.5px) rotate(0.5deg);
  }
  74% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  78% {
    transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
  }
  80% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
  }
  82% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  86% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }
  88% {
    transform: translate(-0.5px, -0.5px) rotate(1.5deg);
  }
  90% {
    transform: translate(-1.5px, -1.5px) rotate(1.5deg);
  }
  92% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }
  94% {
    transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }
  96% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  98% {
    transform: translate(1.5px, 0.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }
}

.lazy-img {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=)
    center center no-repeat;
  width: 100%;
  height: 100%;
  display: inline-block;
}
.lazy-img img {
  display: block;
  width: 100%;
  height: 100%;
}
.lazy-img img[src=""] {
  opacity: 0;
}

.video-sections[data-v-16341cc4] {
  width: 100%;
  padding-top: 10px;
  margin-bottom: 12px;
  background: #f4f4f4;
  position: relative;
}
.video-sections .video-sections-head_first-line[data-v-16341cc4] {
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.video-sections
  .video-sections-head_first-line
  .first-line-left[data-v-16341cc4] {
  display: flex;
  align-items: center;
}
.video-sections
  .video-sections-head_first-line
  .first-line-title[data-v-16341cc4] {
  display: inline-block;
  max-width: 164px;
  font-family: PingFangSC-Regular;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 8px;
  font-size: 16px;
  color: #212121;
  line-height: 24px;
}
.video-sections
  .video-sections-head_first-line
  .first-line-title[data-v-16341cc4]:hover {
  color: #00a1d6;
}
.video-sections .video-sections-head_first-line .cur-page[data-v-16341cc4] {
  color: #999999;
  font-size: 12px;
  line-height: 16px;
}
.video-sections .video-sections-head_second-line[data-v-16341cc4] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 15px 0;
  color: #999999;
  padding-bottom: 14px;
}
.video-sections
  .video-sections-head_second-line
  .second-line_left[data-v-16341cc4] {
  display: flex;
  align-items: center;
}
.video-sections .video-sections-head_second-line .play-num[data-v-16341cc4] {
  margin-right: 8px;
}
.video-sections .video-sections-head_second-line .abstract[data-v-16341cc4] {
  color: #999999;
  font-size: 12px;
  line-height: 16px;
  margin-left: 3px;
}
.video-sections
  .video-sections-head_second-line
  .second-line_right[data-v-16341cc4] {
  width: 70px;
  height: 24px;
  border: 1px solid #00a1d6;
  line-height: 24px;
  text-align: center;
  color: #00a1d6;
  border-radius: 2px;
  background: #f4f4f4;
  outline: none;
  cursor: pointer;
}
.video-sections .video-sections-head_second-line .already-fav[data-v-16341cc4] {
  background: #e7e7e7;
  color: #999;
  border: none;
}
.video-sections .video-sections-head_desc[data-v-16341cc4] {
  position: absolute;
  box-sizing: border-box;
  top: 73px;
  right: 79px;
  width: 261px;
  padding: 12px 20px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #ffffff;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #505050;
  letter-spacing: 0;
  line-height: 16px;
  z-index: 10;
  visibility: hidden;
}
.video-sections .border-bottom-line[data-v-16341cc4] {
  height: 1px;
  background: #e5e9ef;
  margin: 0 15px;
}
.video-sections .video-sections-content-list[data-v-16341cc4] {
  height: 243px;
  overflow-y: hidden;
}
.video-sections .video-sections-content-list[data-v-16341cc4]:hover {
  overflow-y: scroll;
}
.video-sections
  .video-sections-content-list:hover
  .video-sections-item[data-v-16341cc4] {
  margin: 0px 12px 0 16px;
}
.video-sections-item[data-v-16341cc4] {
  width: 288px;
  margin: 0px 16px;
  border-bottom: 1px solid #e5e9ef;
}
.video-sections .video-section-title[data-v-16341cc4] {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  font-size: 12px;
  color: #212121;
  background: #f4f4f4;
  cursor: pointer;
}
.video-sections .video-section-title > span[data-v-16341cc4] {
  line-height: 18px;
  font-family: PingFangSC-Regular;
  display: inline-block;
  max-width: 280px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.video-sections .video-section-title .iconfont[data-v-16341cc4] {
  font-size: 18px;
  transition: 0.35s;
  transform: rotate(0deg);
}
.video-sections .video-section-title .arrow-unfold[data-v-16341cc4] {
  transform: rotate(180deg);
}
.video-sections .video-section-list[data-v-16341cc4] {
  overflow: hidden;
  height: 0;
}
.video-sections .video-section-list .video-episode-card[data-v-16341cc4] {
  height: 71px;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #fff;
}
.video-sections
  .video-section-list
  .video-episode-card__cover[data-v-16341cc4] {
  flex-shrink: 0;
  width: 106px;
  height: 60px;
  margin-right: 10px;
  position: relative;
}
.video-sections
  .video-section-list
  .video-episode-card__cover
  .cover-link-image[data-v-16341cc4]
  img {
  border-radius: 2px;
}
.video-sections .video-section-list .video-episode-card__info[data-v-16341cc4] {
  width: 172px;
}
.video-sections
  .video-section-list
  .video-episode-card__info-title[data-v-16341cc4] {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #212121;
  max-height: 36px;
  line-height: 18px;
  margin-bottom: 8px;
  transition: 0.3s;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
}
.video-sections
  .video-section-list
  .video-episode-card__info-title
  .cur-play-icon[data-v-16341cc4] {
  width: 14px;
  height: 12px;
}
.video-sections
  .video-section-list
  .video-episode-card__info__number[data-v-16341cc4] {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  line-height: 16px;
}
.video-sections
  .video-section-list
  .video-episode-card__info-title_indent[data-v-16341cc4] {
  text-indent: -0.5rem;
}
.video-sections
  .video-section-list
  .video-episode-card__info-title-playing[data-v-16341cc4] {
  color: #00a1d6;
}
.video-sections
  .video-section-list
  .video-episode-card:hover
  .video-episode-card__info-title[data-v-16341cc4] {
  color: #00a1d6;
}
.video-sections-content-list[data-v-16341cc4]::-webkit-scrollbar {
  width: 4px;
}
.video-sections-content-list[data-v-16341cc4]::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #999999;
}

.base-video-sections[data-v-73b5b2eb] {
  width: 100%;
  padding-top: 10px;
  margin-bottom: 18px;
  background: #f4f4f4;
  position: relative;
  border-radius: 2px;
}
.base-video-sections .video-sections-head_first-line[data-v-73b5b2eb] {
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.base-video-sections
  .video-sections-head_first-line
  .first-line-left[data-v-73b5b2eb] {
  display: flex;
  align-items: center;
}
.base-video-sections
  .video-sections-head_first-line
  .first-line-left
  .first-line-title[data-v-73b5b2eb] {
  display: inline-block;
  max-width: 149px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 4px;
  font-size: 16px;
  color: #212121;
  line-height: 20px;
}
.base-video-sections
  .video-sections-head_first-line
  .first-line-left
  .first-line-title[data-v-73b5b2eb]:hover {
  color: #00a1d6;
}
.base-video-sections
  .video-sections-head_first-line
  .first-line-left
  .cur-page[data-v-73b5b2eb] {
  color: #999999;
  font-size: 12px;
  line-height: 17px;
}
.base-video-sections
  .video-sections-head_first-line
  .first-line-right
  .next-button[data-v-73b5b2eb] {
  font-size: 12px;
  line-height: 16px;
  color: #999999;
}
.base-video-sections
  .video-sections-head_first-line
  .first-line-right
  .next-button
  .switch-button[data-v-73b5b2eb] {
  background-color: #9499a0;
  border: 1px solid #9499a0;
}
.base-video-sections
  .video-sections-head_first-line
  .first-line-right
  .next-button
  .switch-button.on[data-v-73b5b2eb] {
  background-color: #00a1d6;
  border: 1px solid #00a1d6;
}
.base-video-sections .video-sections-head_second-line[data-v-73b5b2eb] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 16px 0;
  color: #9499a0;
  padding-bottom: 12px;
  font-size: 14px;
  line-height: 16px;
}
.base-video-sections
  .video-sections-head_second-line
  .second-line_left[data-v-73b5b2eb] {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.base-video-sections
  .video-sections-head_second-line
  .play-num[data-v-73b5b2eb] {
  margin-right: 8px;
}
.base-video-sections
  .video-sections-head_second-line
  .abstract[data-v-73b5b2eb] {
  color: #9499a0;
  line-height: 16px;
  margin-left: 3px;
}
.base-video-sections
  .video-sections-head_second-line
  .second-line_right[data-v-73b5b2eb] {
  font-size: 12px;
  width: 70px;
  height: 24px;
  border: 1px solid #00a1d6;
  text-align: center;
  color: #00a1d6;
  border-radius: 2px;
  background: #f1f2f3;
   outline: none;
  cursor: pointer;
}
.base-video-sections
  .video-sections-head_second-line
  .already-fav[data-v-73b5b2eb] {
  background: #e3e5e7;
  color: #9499a0;
  border: none;
}
.base-video-sections .video-sections-head_desc[data-v-73b5b2eb] {
  position: absolute;
  box-sizing: border-box;
  top: 73px;
  right: 79px;
  width: 261px;
  padding: 12px 20px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #e3e5e7;
   font-size: 12px;
  color: #9499a0;
   letter-spacing: 0;
  line-height: 16px;
  z-index: 10;
  visibility: hidden;
}
.base-video-sections .border-bottom-line[data-v-73b5b2eb] {
  height: 1px;
  background: #e3e5e7;
   margin: 0 15px;
}
.base-video-sections .video-sections-content-list[data-v-73b5b2eb] {
  max-height: 152px;
  border-radius: 6px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.base-video-sections .video-sections-content-list.has-margin[data-v-73b5b2eb] {
  margin-top: 10px;
}
.base-video-sections .video-sections-content-list[data-v-73b5b2eb]:hover {
  overflow-y: scroll;
}
.base-video-sections .video-sections-item[data-v-73b5b2eb] {
  box-sizing: border-box;
}
.base-video-sections .video-sections-item[data-v-73b5b2eb]:last-child {
  border-bottom: none;
}
.base-video-sections .video-section-title[data-v-73b5b2eb] {
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 6px;
  background: #f1f2f3;
   cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}
.base-video-sections .video-section-title > p[data-v-73b5b2eb] {
  color: #212121;
  line-height: 18px;
}
.base-video-sections .video-section-title .title[data-v-73b5b2eb] {
  padding-left: 10px;
  display: inline-block;
  max-width: 280px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.base-video-sections .video-section-title > img[data-v-73b5b2eb] {
  padding-right: 12px;
}
.base-video-sections .video-section-title .arrow-icon[data-v-73b5b2eb] {
  fill: #61666d;
   transition: transform 0.35s;
  transform: rotate(0deg);
}
.base-video-sections .video-section-title .arrow-unfold[data-v-73b5b2eb] {
  transform: rotate(180deg);
  transform-origin: 25% 50%;
}
.base-video-sections .video-section-list[data-v-73b5b2eb] {
  overflow: hidden;
  height: 0;
}
.base-video-sections .video-section-list .video-episode-card[data-v-73b5b2eb] {
  height: 30px;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  padding: 0 6px;
  margin: 4px 0;
  color: #fff;
}
.base-video-sections
  .video-section-list
  .video-episode-card__info[data-v-73b5b2eb] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  font-size: 14px;
  border-radius: 2px;
  padding: 0 10px;
}
.base-video-sections
  .video-section-list
  .video-episode-card__info-title[data-v-73b5b2eb] {
  width: 240px;
  color: #212121;
  max-height: 36px;
  line-height: 20px;
  transition: 0.3s;
  white-space: nowrap;
  display: inline-block !important;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
}
.base-video-sections
  .video-section-list
  .video-episode-card__info-title
  .cur-play-icon[data-v-73b5b2eb] {
  width: 14px;
  height: 12px;
}
.base-video-sections
  .video-section-list
  .video-episode-card__info-duration[data-v-73b5b2eb] {
  color: #9499a0;
 }
.base-video-sections
  .video-section-list
  .video-episode-card__info-title_indent[data-v-73b5b2eb] {
  text-indent: -0.5rem;
}
.base-video-sections
  .video-section-list
  .video-episode-card__info-playing[data-v-73b5b2eb] {
  color: #00a1d6;
  background-color: #fff;
}
.base-video-sections
  .video-section-list
  .video-episode-card__info-playing
  .video-episode-card__info-title[data-v-73b5b2eb] {
  color: #00a1d6;
}
.base-video-sections
  .video-section-list
  .video-episode-card:hover
  .video-episode-card__info-title[data-v-73b5b2eb] {
  color: #00a1d6;
}
.base-video-sections
  .video-section-list
  .video-episode-card[data-v-73b5b2eb]:nth-child(1) {
  margin-top: 8px;
}

.video-sections ::-webkit-scrollbar {
  width: 4px;
}
.video-sections-content-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #999999;
}

.video-page-card {
  padding: 6px 0;
}
.video-page-card .card-box {
  display: flex;
}
.video-page-card .card-box .pic-box {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 2px;
  background: #f4f5f7;
}
.video-page-card .card-box .pic-box .pic {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  width: 141px;
  height: 80px;
}
.video-page-card .card-box .pic-box .pic img {
  width: 141px;
  height: 80px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
.video-page-card .card-box .pic-box .pic img[src=""] {
  opacity: 0;
}
.video-page-card .card-box .pic-box .mask-video {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;
  pointer-events: none;
}
.video-page-card .card-box .pic-box .duration {
  opacity: 0;
  position: absolute;
  bottom: 2px;
  left: 6px;
  color: #fff;
  height: 12px;
  line-height: 12px;
  padding: 0 5px 1px 0;
  transition: all 0.3s;
  z-index: 5;
}
.video-page-card .card-box .pic-box .watch-later-video {
  transition: opacity 0.3s;
  opacity: 0;
}
.video-page-card .card-box .pic-box:hover .watch-later-video {
  transition-delay: 0.3s;
  opacity: 1;
}
.video-page-card .card-box .pic-box:hover .mask-video {
  opacity: 1;
}
.video-page-card .card-box .pic-box:hover .duration {
  opacity: 1;
}
.video-page-card .card-box .info {
  margin-left: 10px;
  flex: 1;
  font-size: 0;
}
.video-page-card .card-box .info .title {
  display: block;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 18px;
  margin-bottom: 6px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}
.video-page-card .card-box .info .count {
  display: inline-block;
  height: 16px;
  width: 100%;
  color: #999;
  font-size: 12px;
}
.video-page-card .card-box .info .count a {
  color: #999;
}
.video-page-card .card-box .info .count.up {
  width: 160px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.video-page-card .card-box .info .pre-mask {
  background: #f4f5f7;
  border-radius: 2px;
}
.video-page-card .card-box .info .pre-mask i {
  display: none;
}

.video-page-game-card[data-v-7820c02e] {
  padding: 6px 0;
}
.card-box[data-v-7820c02e] {
  display: flex;
  cursor: pointer;
}
.pic-box[data-v-7820c02e] {
  position: relative;
  width: 102px;
  height: 102px;
  border-radius: 2px;
  margin: 0 20px;
  background: #f4f5f7;
}
.pic-box .pic[data-v-7820c02e] {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  width: 102px;
  height: 102px;
}
.pic-box .pic img[data-v-7820c02e] {
  width: 100%;
  height: 100%;
}
.pic-box .pic img[src=""][data-v-7820c02e] {
  opacity: 0;
}
.info[data-v-7820c02e] {
  margin-left: 10px;
  flex: 1;
  font-size: 0;
}
.info .title[data-v-7820c02e] {
  width: 160px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info .book-count[data-v-7820c02e] {
  margin-bottom: 4px;
  display: inline-block;
  height: 16px;
  width: 100%;
  color: #999999;
  font-size: 12px;
}
.info .grade[data-v-7820c02e] {
  display: flex;
  align-items: center;
  height: 16px;
  width: 100%;
  color: #999999;
  font-size: 12px;
}
.info .enter-button[data-v-7820c02e] {
  transition: all 0.3s;
  margin-top: 12px;
  display: inline-block;
  width: 72px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #00a1d6;
  font-size: 12px;
  color: #00a1d6;
}
.info .count[data-v-7820c02e] {
  display: inline-block;
  height: 16px;
  width: 100%;
  color: #999999;
  font-size: 12px;
}
.info .count a[data-v-7820c02e] {
  color: #999999;
}
.info .count.up[data-v-7820c02e] {
  width: 160px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info .pre-mask[data-v-7820c02e] {
  background: #f4f5f7;
  border-radius: 2px;
  border: none;
}
.info .pre-mask i[data-v-7820c02e] {
  display: none;
}

.video-page-game-card .grade .van-rate {
  display: inline-block;
  font-size: 16px;
  height: 16px;
  line-height: 16px;
  margin-right: 4px;
}
.video-page-game-card .grade .van-rate .van-rate-star {
  font-size: 16px;
  margin-right: 1px;
  vertical-align: unset;
}

.video-page-special-card[data-v-91571770] {
  padding: 0 0 6px;
}
.card-box[data-v-91571770] {
  display: flex;
}
.pic-box[data-v-91571770] {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 2px;
  background: #f4f5f7;
}
.pic-box .pic[data-v-91571770] {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  width: 141px;
  height: 80px;
}
.pic-box .pic img[data-v-91571770] {
  width: 100%;
  height: 100%;
}
.pic-box .pic img[src=""][data-v-91571770] {
  opacity: 0;
}
.info[data-v-91571770] {
  margin-left: 10px;
  flex: 1;
  font-size: 0;
}
.info .title[data-v-91571770] {
  cursor: pointer;
  height: 36px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info .desc[data-v-91571770] {
  display: inline-block;
  height: 16px;
  width: 100%;
  color: #999;
  font-size: 12px;
}
.info .pre-mask[data-v-91571770] {
  background: #f4f5f7;
  border-radius: 2px;
}
.info .pre-mask i[data-v-91571770] {
  display: none;
}

.video-page-operator-card[data-v-641607c6] {
  padding: 0 0 6px;
}
.video-page-operator-card .card-box[data-v-641607c6] {
  display: flex;
}
.video-page-operator-card .pic-box[data-v-641607c6] {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 2px;
  background: #f4f5f7;
}
.video-page-operator-card .pic-box .pic[data-v-641607c6] {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  width: 141px;
  height: 80px;
}
.video-page-operator-card .pic-box .pic img[data-v-641607c6] {
  width: 141px;
  height: 80px;
}
.video-page-operator-card .pic-box .pic img[src=""][data-v-641607c6] {
  opacity: 0;
}
.video-page-operator-card .pic-box .mask-video[data-v-641607c6] {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;
  pointer-events: none;
}
.video-page-operator-card .pic-box .duration[data-v-641607c6] {
  opacity: 0;
  position: absolute;
  bottom: 2px;
  left: 6px;
  color: #fff;
  height: 12px;
  line-height: 12px;
  padding: 0 5px 1px 0;
  transition: all 0.3s;
  z-index: 5;
}
.video-page-operator-card .pic-box .watch-later-video[data-v-641607c6] {
  transition: opacity 0.3s;
  opacity: 0;
}
.video-page-operator-card .pic-box:hover .watch-later-video[data-v-641607c6] {
  transition-delay: 0.3s;
  opacity: 1;
}
.video-page-operator-card .pic-box:hover .mask-video[data-v-641607c6] {
  opacity: 1;
}
.video-page-operator-card .pic-box:hover .duration[data-v-641607c6] {
  opacity: 1;
}
.video-page-operator-card .info[data-v-641607c6] {
  margin-left: 10px;
  flex: 1;
  font-size: 0;
}
.video-page-operator-card .info .title[data-v-641607c6] {
  height: 36px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.video-page-operator-card .info .count[data-v-641607c6] {
  display: inline-block;
  height: 16px;
  width: 100%;
  color: #999;
  font-size: 12px;
}
.video-page-operator-card .info .count a[data-v-641607c6] {
  color: #999;
}
.video-page-operator-card .info .count.up[data-v-641607c6] {
  width: 160px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.video-page-operator-card .info .pre-mask[data-v-641607c6] {
  background: #f4f5f7;
  border-radius: 2px;
}
.video-page-operator-card .info .pre-mask i[data-v-641607c6] {
  display: none;
}

.recommend-list .rec-title {
  font-size: 16px;
  color: #222;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.recommend-list .split-line {
  width: 100%;
  height: 1px;
  background: #e5e9ef;
  margin: 6px 0 12px;
}
.recommend-list .rec-footer {
  height: 42px;
  background: #f4f5f7;
  color: #6d7579;
  margin-top: 10px;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
}
.recommend-list .loading-card {
  margin: 12px 0;
  width: 320px;
  height: 80px;
  display: flex;
}
.recommend-list .loading-card .cover {
  width: 141px;
  height: 80px;
  background: #f4f4f4;
  border-radius: 2px;
}
.recommend-list .loading-card .info {
  margin-left: 10px;
}
.recommend-list .loading-card .info .title {
  width: 169px;
  height: 36px;
  background: #f4f4f4;
  border-radius: 2px;
  margin-bottom: 6px;
}
.recommend-list .loading-card .info .up {
  width: 169px;
  height: 16px;
  background: #f4f4f4;
  border-radius: 2px;
  margin-bottom: 4px;
}
.recommend-list .loading-card .info .desc {
  width: 169px;
  height: 16px;
  background: #f4f4f4;
  border-radius: 2px;
}
.startVR {
  display: none;
}
.endVR {
  display: none;
}

.float-nav {
  position: fixed;
  right: 6px;
  bottom: 100px;
}
.float-nav .nav-menu .nav-btn-item {
  background: #f7f9fa;
  border: 1px solid #e5e9ef;
  border-radius: 3px;
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
  transition: all 0.3s;
  cursor: pointer;
  color: #999;
  text-align: center;
}
.float-nav .nav-menu .nav-btn-item:hover {
  background-color: #00a1d6;
  border-color: #00a1d6;
  color: #fff;
}
.float-nav .nav-menu .backup {
  font-size: 28px;
  line-height: 45px;
}
.float-nav .nav-menu .mini {
  line-height: 18px;
}
.float-nav .nav-menu .mini span {
  display: block;
}
.float-nav .nav-menu .mini span:first-child {
  padding-top: 6px;
}
.float-nav .nav-menu .help {
  font-size: 26px;
  line-height: 45px;
}
.float-nav__btn--fixed {
  position: fixed;
  right: 6px;
  bottom: 43px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f7f9fa;
  border: 1px solid #e5e9ef;
  border-radius: 3px;
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
  transition: all 0.3s;
  cursor: pointer;
  color: #999;
  text-align: center;
}
.float-nav__btn--fixed:hover {
  background-color: #00a1d6;
  border-color: #00a1d6;
  color: #fff;
}

.tag-channel-cancel-popup {
  z-index: 12;
  position: absolute;
  background: #fff;
  padding: 20px 10px 10px 10px;
  min-width: 120px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  text-align: center;
  right: 0px;
  top: 35px;
}
.tag-channel-cancel-popup p {
  font-size: 14px;
  color: #222;
  margin-bottom: 20px;
}
.tag-channel-cancel-popup a {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 2px;
}
.tag-channel-cancel-popup a.btn-ok {
  color: #fff;
  background: #00a1d6;
  margin-right: 5px;
}
.tag-channel-cancel-popup a.btn-no {
  color: #222;
  background: #e5e9ef;
  margin-left: 5px;
}

.tag-del-popup {
  z-index: 12;
  position: absolute;
  background: #fff;
  padding: 30px 20px 20px 20px;
  min-width: 120px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  text-align: center;
  right: 0px;
  top: 0px;
}
.tag-del-popup p {
  font-size: 12px;
  color: #222;
  margin-bottom: 20px;
}
.tag-del-popup a {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 2px;
}
.tag-del-popup a.btn-ok {
  color: #fff;
  background: #00a1d6;
  margin-right: 5px;
}
.tag-del-popup a.btn-no {
  color: #222;
  background: #e5e9ef;
  margin-left: 5px;
}

.line-ellipsis[data-v-38c47052] {
  display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
}
.tag-channel-pane[data-v-38c47052] {
  position: absolute;
  z-index: 11;
  background: #fff;
  margin-left: -10px;
  margin-top: 5px;
  width: 206px;
  min-height: 184px;
  box-sizing: content-box;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
.tag-channel-pane .bg-image[data-v-38c47052] {
  width: 100%;
  height: 66px;
  background-position: 50%;
  border-radius: 2px 2px 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
}
.tag-channel-pane .bg-mask[data-v-38c47052] {
  position: absolute;
  width: 100%;
  height: 66px;
  background-position: 50%;
  opacity: 0.6;
  border-radius: 2px 2px 0px 0px;
  top: 0;
}
.tag-channel-pane .channel-cover[data-v-38c47052] {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.05);
  border: 2px solid #ffffff;
  border-radius: 2px;
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translate(-50%, 0);
}
.tag-channel-pane .content[data-v-38c47052] {
  padding: 0 10px;
}
.tag-channel-pane .channel-info[data-v-38c47052] {
  padding: 24px 10px 10px 10px;
}
.tag-channel-pane .channel-title[data-v-38c47052] {
  font-size: 14px;
  color: #212121;
  font-weight: 500;
  line-height: 18px;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tag-channel-pane .channel-title > img[data-v-38c47052] {
  margin-left: 4px;
}
.tag-channel-pane .channel-desc[data-v-38c47052] {
  font-size: 12px;
  color: #999999;
  height: 18px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  width: 190px;
}
.tag-channel-pane .channel-desc > span[data-v-38c47052] {
  margin: 0px 3px 0 3px;
  display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
}
.tag-channel-pane .channel-btns[data-v-38c47052] {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.tag-channel-pane .channel-btns__link[data-v-38c47052] {
  cursor: pointer;
  width: 66px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  border: 1px solid #00a1d6;
  border-radius: 2px;
  font-size: 12px;
  color: #00a1d6;
  transition: 0.3s;
}
.tag-channel-pane .channel-btns__link[data-v-38c47052]:hover {
  background: #00a1d6;
  border-radius: 2px;
  color: #fff;
}
.tag-channel-pane .channel-btns__subs[data-v-38c47052] {
  cursor: pointer;
  width: 108px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  text-align: center;
  margin-left: 8px;
}
.tag-channel-pane .channel-btns__subs .add-icon[data-v-38c47052] {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  vertical-align: sub;
}
.tag-channel-pane .channel-btns .is-subs[data-v-38c47052] {
  background: #e7e7e7;
  color: #999999;
  border: 1px solid #e7e7e7;
  display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
}
.tag-channel-pane .channel-btns .no-subs[data-v-38c47052] {
  color: #ffffff;
  background: #00a1d6;
  border: 1px solid #00a1d6;
  transition: 0.3s;
  border-radius: 2px;
  display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
}
.tag-channel-pane .channel-btns .no-subs[data-v-38c47052]:hover {
  background: #00b5e5;
  border: 1px solid #00b5e5;
}
.tag-channel-pane .channel-btns__subs--delete[data-v-38c47052] {
  margin-top: -6px;
  width: 100%;
  border-top: 1px solid #e7e7e7;
  height: 40px;
  line-height: 40px;
  text-align: right;
  transition: 0.3s;
}
.tag-channel-pane .channel-btns__subs--delete .delete-btn[data-v-38c47052] {
  cursor: pointer;
  display: inline-block;
  width: 36px;
  height: 28px;
  line-height: 28px;
  border-radius: 2px;
  font-size: 12px;
  color: #00a1d6;
  background: #fff;
  text-align: center;
}
.tag-channel-pane
  .channel-btns__subs--delete
  .delete-btn[data-v-38c47052]:hover {
  background: #e7e7e7;
}
.tag-channel-pane .delete-pop[data-v-38c47052] {
  top: 60px;
}

.tag-report-popup {
  position: absolute;
  margin-left: -10px;
  margin-top: 5px;
  z-index: 12;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  text-align: center;
}
.tag-report-popup h3 {
  font-size: 14px;
  color: #222;
  font-weight: bold;
  text-align: left;
}
.tag-report-popup ul {
  padding: 10px 100px 10px 0px;
  cursor: pointer;
  width: 80px;
}
.tag-report-popup ul li {
  line-height: 24px;
  margin: 10px 0;
  text-align: left;
}
.tag-report-popup ul li i {
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid #ccd0d7;
  vertical-align: middle;
  margin-right: 5px;
  position: relative;
}
.tag-report-popup ul li.on i {
  border-color: #00a1d6;
}
.tag-report-popup ul li.on i:before {
  content: "";
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  width: 9px;
  height: 9px;
  background: #00a1d6;
}
.tag-report-popup .btn-close {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 10px;
  height: 10px;
  background: url("//static.hdslb.com/images/base/icons.png") -475px -539px;
}
.tag-report-popup .btn-ok {
  cursor: pointer;
  display: inline-block;
  width: 80px;
  height: 24px;
  line-height: 24px;
  background: #00a1d6;
  color: #fff;
  border-radius: 2px;
}

.s_tag .tag-area > li {
  float: left;
  margin: 0 10px 8px 0;
  background: #f6f7f8;
  border-radius: 100px;
  padding: 0 12px;
  position: relative;
  height: 22px;
  line-height: 22px;
  transition: all 0.3s;
  font-size: 12px;
  border: 1px solid transparent;
}
.s_tag .tag-area > li .tag-link,
.s_tag .tag-area > li .topic-link {
  display: inline-block;
  height: 22px;
  color: #61666d;
  position: relative;
  z-index: 10;
  transition: all 0.3s;
}
.s_tag .tag-area > li .topic-link {
  color: #008ac5;
}
.s_tag .tag-area > li.hot1 {
  border-color: #feb4cc;
}
.s_tag .tag-area > li.hot2 {
  border-color: #f25d8e;
}
.s_tag .tag-area > li:hover {
  border-color: #00a1d6;
}
.s_tag .tag-area > li:hover > a {
  color: #00a1d6;
}
.s_tag .tag-area .tag-icon {
  width: 15px;
  margin-right: 5px;
  vertical-align: sub;
}
.s_tag .tag-area .channel-icon {
  width: 11px;
  height: 10px;
  margin-right: 5px;
  vertical-align: baseline;
}
.s_tag .tag-area .channel-name {
  color: #61666d;
}
.s_tag .nothing {
  float: left;
  color: #99a2aa;
  font-size: 12px;
  line-height: 26px;
  margin-right: 10px;
}
.s_tag .btn-add {
  float: left;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #f4f5f7;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
}
.s_tag .btn-add span {
  position: absolute;
  background: #505050;
  transition: all 0.3s;
}
.s_tag .btn-add .one {
  left: 6px;
  top: 11px;
  width: 12px;
  height: 2px;
}
.s_tag .btn-add .two {
  left: 11px;
  top: 6px;
  width: 2px;
  height: 12px;
}
.s_tag .btn-add:hover {
  border-color: #00a1d6;
}
.s_tag .btn-add:hover span {
  background: #00a1d6;
}
.s_tag .ipt {
  float: left;
  width: 158px;
  height: 23px;
  border-radius: 23px;
  background: #f4f5f7;
  border: 1px solid #00a1d6;
  position: relative;
  opacity: 1;
}
.s_tag .ipt.tag-add-enter-active,
.s_tag .ipt.tag-add-leave-active {
  transition: all 0.5s;
}
.s_tag .ipt.tag-add-enter,
.s_tag .ipt.tag-add-leave-to {
  opacity: 0;
  width: 23px;
}
.s_tag .ipt input {
  height: 23px;
  line-height: 23px;
  width: 120px;
  padding: 0 10px;
  font-size: 12px;
  background: transparent;
  border: none;
  outline: none;
}
.s_tag .ipt.on {
  opacity: 1;
  width: 158px;
}
.s_tag .ipt a {
  position: absolute;
  width: 10px;
  height: 10px;
  background: url("//static.hdslb.com/images/base/icons.png") -539px -539px
    no-repeat;
  left: 138px;
  top: 6px;
}
.s_tag .ipt .tips {
  margin-top: 5px;
  color: #f00;
}
.s_tag .btn-view-tag {
  margin-top: 10px;
  color: #eceff3;
}
.s_tag .btn-view-tag a {
  color: #505050;
}
.s_tag .btn-view-tag a:hover {
  color: #00a1d6;
}
.s_tag .btn-view-tag span {
  margin: 0 10px;
}

.members-info__header[data-v-16c58a26] {
  margin-top: 18px;
  cursor: pointer;
  height: 44px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
.members-info__header .title[data-v-16c58a26] {
  font-size: 16px;
  color: #212121;
}
.members-info__header .btn[data-v-16c58a26] {
  font-size: 12px;
  color: #505050;
}
.members-info .members-info__container[data-v-16c58a26] {
  padding: 16px 0 0 0;
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  transition: max-height 0.3s ease, background 1s;
  overflow: hidden;
}
.members-info .members-info__container .up-card[data-v-16c58a26] {
  width: 60px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5px 5px 20px 0;
}
.members-info .members-info__container .up-card[data-v-16c58a26]:nth-child(5n) {
  margin-right: 0;
}
.members-info .avatar[data-v-16c58a26] {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f4f5f7;
  position: relative;
}
.members-info .avatar img[data-v-16c58a26] {
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.members-info .avatar .tag-sponsor[data-v-16c58a26] {
  white-space: nowrap;
  color: #7e4e00;
  position: absolute;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  background: #ffe1a9;
  padding: 0 3px;
  top: -10px;
  left: 14px;
}
.members-info .avatar .info-sponsor-bling[data-v-16c58a26] {
  position: absolute;
  width: 38px;
  height: 15px;
  top: -10px;
  right: -10px;
  z-index: 1;
}
.members-info .avatar .info-tag[data-v-16c58a26] {
  position: absolute;
  background: #fff;
  border: 1px solid #fb7299;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  color: #fb7299;
  padding: 0 3px;
  top: -10px;
  right: -10px;
  white-space: nowrap;
}
.members-info .avatar .attention[data-v-16c58a26] {
  position: absolute;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fb7299;
  line-height: 14px;
  text-align: center;
  right: -4px;
  bottom: 0;
}
.members-info .avatar .attention i[data-v-16c58a26] {
  transform: scale(0.75);
  color: #fff;
  font-weight: bold;
}
.members-info .avatar-name__container[data-v-16c58a26] {
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.members-info .avatar-name__container .name-text[data-v-16c58a26] {
  font-family: "PingFangSC-Regular", sans-serif;
  line-height: 15px;
  color: #222;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}
.wide-members[data-v-16c58a26] {
  width: 320px;
  height: 90px;
}
.wide-members__title[data-v-16c58a26] {
  height: 24px;
  font-size: 14px;
  color: #212121;
  margin-top: 6px;
  font-weight: 500;
}
.wide-members__title > span[data-v-16c58a26] {
  margin-left: 5px;
  font-size: 14px;
  color: #999999;
  font-weight: 400;
}
.wide-members .avatar-list[data-v-16c58a26] {
  display: flex;
  align-items: center;
  height: 66px;
  position: relative;
  margin-left: -10px;
}
.wide-members .avatar-list .van-icon-general_enter_s[data-v-16c58a26]::after {
  content: "";
  height: 60px;
  width: 6px;
  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  position: absolute;
  left: -6px;
  top: 0;
}
.wide-members .avatar-list .van-icon-general_back_s[data-v-16c58a26] {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.wide-members .avatar-list .van-icon-general_back_s[data-v-16c58a26]::after {
  content: "";
  height: 60px;
  width: 6px;
  background: linear-gradient(-270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  position: absolute;
  right: -6px;
  top: 0;
}
.wide-members .avatar-list .van-icon-general_enter_s[data-v-16c58a26],
.wide-members .avatar-list .van-icon-general_back_s[data-v-16c58a26] {
  position: absolute;
  top: 0;
  height: 60px;
  background: #fff;
  line-height: 60px;
  font-size: 18px;
  color: #848484;
  cursor: pointer;
}
.wide-members .avatar-list .van-icon-general_enter_s[data-v-16c58a26]:hover,
.wide-members .avatar-list .van-icon-general_back_s[data-v-16c58a26]:hover {
  color: #00a1d6;
}
.wide-members .scroll-panel[data-v-16c58a26] {
  display: flex;
  overflow: hidden;
  height: 66px;
  width: 100%;
}
.wide-members .scroll-inside[data-v-16c58a26] {
  width: 100%;
  display: flex;
  height: 66px;
  transition: 1s;
  transform: translateX(0px);
}
.wide-members .avatar[data-v-16c58a26] {
  cursor: pointer;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2px 10px 0px 10px;
  flex-shrink: 0;
  border: 2px solid #ffffff;
  position: relative;
}
.wide-members .avatar img[data-v-16c58a26] {
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.wide-members .avatar .info-tag[data-v-16c58a26] {
  position: absolute;
  background: #fff;
  border: 1px solid #fb7299;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  color: #fb7299;
  padding: 0 3px;
  top: -2px;
  right: -12px;
  white-space: nowrap;
}
.wide-members .avatar .tag-sponsor[data-v-16c58a26] {
  white-space: nowrap;
  color: #7e4e00;
  position: absolute;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  background: #ffe1a9;
  padding: 0 3px;
  top: -2px;
  left: 14px;
}
.wide-members .avatar .up-name[data-v-16c58a26] {
  position: absolute;
  bottom: -18px;
  font-size: 12px;
  color: #222;
  width: 60px;
  vertical-align: middle;
  margin-left: -10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wide-members .avatar .is-vip[data-v-16c58a26] {
  color: #fb7299;
}
.wide-members .avatar .small-vip[data-v-16c58a26] {
  color: #62c076;
}

#member-container::-webkit-scrollbar-track {
  background: rgba(245, 245, 245, 0);
}
#member-container::-webkit-scrollbar {
  width: 6px;
  background: rgba(245, 245, 245, 0);
}
#member-container::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0);
}
#member-container:hover::-webkit-scrollbar-track {
  background: #f5f5f5;
}
#member-container:hover::-webkit-scrollbar {
  background: #f5f5f5;
}
#member-container:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}

/*!
 * @bilibili/userAvatar
 * version: 1.2.0-beta.2. Powered by main-frontend
 * ç”¨æˆ·å¤´åƒå…¬å…±ç»„ä»¶.
 * author: wuxiuran
 */
.bili-avatar {
  display: block;
  position: relative;
  background-image: url(data:image/gif;base64,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);
  background-size: cover;
  border-radius: 50%;
}
.bili-avatar,
.bili-avatar * {
  margin: 0;
  padding: 0;
}
.bili-avatar-face {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.bili-avatar-pendent-dom {
  height: 176.48%;
  width: 176.48%;
  position: absolute;
  top: -38.33%;
  left: -38.33%;
  overflow: hidden;
}
.bili-avatar-pendent-dom img {
  height: 100%;
  min-width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.bili-avatar-img {
  border: none;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
}
.bili-avatar-img-radius {
  border-radius: 50%;
}
.bili-avatar-img:not([src]),
.bili-avatar-img[src=""] {
  opacity: 0;
}
.bili-avatar-icon-big-vip {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/big-vip.svg);
}
.bili-avatar-icon-business {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/business.svg);
}
.bili-avatar-icon-personal {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/personal.svg);
}
.bili-avatar-icon-small-vip {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/small-vip.svg);
}
.bili-avatar-img.bili-avatar-img-error {
  display: none;
}
.bili-avatar-right-icon {
  right: 0;
}
.bili-avatar-nft-icon,
.bili-avatar-right-icon {
  width: 27.5%;
  height: 27.5%;
  position: absolute;
  bottom: -1px;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast;
}
.bili-avatar-nft-icon {
  right: -webkit-calc(27.5% - 1px);
  right: -moz-calc(27.5% - 1px);
  right: calc(27.5% - 1px);
}
.bili-avatar-nft--icon-1 {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/nft-label.gif);
}
.bili-avatar-nft--icon-2 {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/nft-label-oversea.gif);
}
@-webkit-keyframes bili-avatar {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}
@-moz-keyframes bili-avatar {
  0% {
    -moz-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}
@keyframes bili-avatar {
  0% {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);
  }
  to {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}
.bili-avatar .bili-avatar-size-80 {
  width: 22px;
  height: 22px;
  bottom: -1px;
}
.bili-avatar .bili-avatar-size-48,
.bili-avatar .bili-avatar-size-50,
.bili-avatar .bili-avatar-size-60 {
  width: 18px;
  height: 18px;
  bottom: -1px;
}
.bili-avatar .bili-avatar-size-36,
.bili-avatar .bili-avatar-size-40 {
  width: 14px;
  height: 14px;
  bottom: -1px;
}
.bili-avatar .bili-avatar-size-24,
.bili-avatar .bili-avatar-size-30 {
  width: 12px;
  height: 12px;
  bottom: -1px;
}
.bili-avatar .bili-avatar-size-nft-80 {
  width: 22px;
  height: 22px;
  bottom: -1px;
  right: 21px;
}
.bili-avatar .bili-avatar-size-nft-48,
.bili-avatar .bili-avatar-size-nft-50,
.bili-avatar .bili-avatar-size-nft-60 {
  width: 18px;
  height: 18px;
  bottom: -1px;
  right: 17px;
}
.bili-avatar .bili-avatar-size-nft-36,
.bili-avatar .bili-avatar-size-nft-40 {
  width: 14px;
  height: 14px;
  bottom: -1px;
  right: 13px;
}
.bili-avatar .bili-avatar-size-nft-24,
.bili-avatar .bili-avatar-size-nft-30 {
  width: 12px;
  height: 12px;
  bottom: -1px;
  right: 11px;
}
.up-info .u-face {
  float: left;
  width: 48px;
  height: 48px;
  position: relative;
}
.up-info .u-face .up-face {
  background: #f9f9f9;
}
.up-info .u-face .up-face[src=""] {
  opacity: 0;
}
.up-info .u-face.has-pendant {
  position: relative;
  left: -6px;
}
.up-info .u-face.has-pendant .u-face__avatar {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f4f5f7;
}
.up-info .u-face .u-face__avatar {
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f4f5f7;
}
.up-info .u-face .avatar-loaded {
  background-color: transparent;
}
.up-info .u-face .auth {
  position: absolute;
  width: 20px;
  height: 20px;
  right: -2px;
  bottom: -2px;
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/user-auth.png);
  background-repeat: no-repeat;
  z-index: 3;
}
.up-info .u-face .p-auth {
  background-position: -38px -53px;
}
.up-info .u-face .o-auth {
  background-position: -4px -53px;
}
.up-info .u-face .pendant {
  position: absolute;
  overflow: hidden;
  top: -17px;
  left: -17px;
  width: 80px;
  height: 80px;
  z-index: 2;
}
.up-info .u-face .pendant.lazy-img {
  background: none;
}
.up-info .up-info_right {
  width: 256px;
  height: 96px;
  margin-left: 13px;
  float: left;
}
.up-info .up-info_right .name {
  font-size: 14px;
  color: #00a1d6;
}
.up-info .up-info_right .name .live-status {
  display: inline-block;
  text-align: center;
  width: 48px;
  height: 16px;
  line-height: 16px;
  border-radius: 9px;
  color: #fb7299;
  font-size: 12px;
  border: 1px solid #fb7299;
  margin-right: 4px;
  transition: 0.3s;
}
.up-info .up-info_right .name .live-status:hover {
  color: #fff;
  background: #fb7299;
}
.up-info .up-info_right .name .username {
  position: relative;
  font-size: 14px;
  color: #212121;
  font-weight: 500;
  display: inline-block;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: top;
}
.up-info .up-info_right .name .username .mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.15);
}
.up-info .up-info_right .name .username:not(.is_vip, .small-vip):hover {
  color: #00a1d6;
}
.up-info .up-info_right .name .username.is_vip:hover .mask {
  display: block;
}
.up-info .up-info_right .name .username.small-vip:hover .mask {
  display: block;
}
.up-info .up-info_right .name .username.is-live {
  max-width: 128px;
}
.up-info .up-info_right .name .message {
  margin-left: 12px;
  font-size: 12px;
  color: #505050;
  display: inline-block;
  vertical-align: middle;
}
.up-info .up-info_right .name .message i {
  color: #999;
  font-size: 16px;
  margin-right: 4px;
  height: 16px;
  width: 16px;
  vertical-align: text-bottom;
}
.up-info .up-info_right .name .message:hover {
  color: #00a1d6;
}
.up-info .up-info_right .name .message:hover i {
  color: #00a1d6;
}
.up-info .up-info_right .name:hover {
  color: #fb7299;
}
.up-info .up-info_right .desc {
  margin-top: 4px;
  width: 256px;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.up-info .btn-panel {
  clear: both;
  display: flex;
  margin-top: 5px;
  white-space: nowrap;
}
.up-info .btn-panel .default-btn {
  box-sizing: border-box;
  padding: 0;
  line-height: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #f4f4f4;
  position: relative;
}
.up-info .btn-panel .btn-transition {
  transition: 0.3s all;
}
.up-info .btn-panel .video-commonmenu {
  vertical-align: middle;
}
.up-info .btn-panel .old-charge-btn {
  width: 100px;
  flex-shrink: 0;
  margin: 0 auto;
  margin-right: 10px;
}
.up-info .btn-panel .following-charge-btn {
  background: #fb7299;
  color: #fff;
}
.up-info .btn-panel .following-charge-btn:hover {
  background: #ff85ad;
}
.up-info .btn-panel .not-follow-charge-btn {
  border: 1px solid #fb7299;
  background: #fff;
  color: #fb7299;
}
.up-info .btn-panel .not-follow-charge-btn:hover {
  background: #fb7299;
  color: #fff;
}
.up-info .btn-panel .new-charge-btn {
  margin-right: 10px;
  flex-shrink: 0;
  width: 109px;
  color: #ff6699;
}
.up-info .btn-panel .new-charge-btn.charge-btn-loaded {
  background-color: transparent;
  border: 1px solid #ff6699;
}
.up-info .btn-panel .new-charge-btn.charge-btn-loaded:hover {
  background-color: #ffecf1;
}
.up-info .btn-panel .new-charge-btn .charge-btn-icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
  display: flex;
}
.up-info .btn-panel .new-charge-btn .charge-btn-icon img {
  width: 100%;
  height: 100%;
}
.up-info .btn-panel .follow-btn {
  width: 146px;
}
.up-info .btn-panel .van-icon-general_pulldown_s {
  margin-left: 4px;
  font-size: 100%;
}
.up-info .btn-panel .following {
  color: #999999;
  border: 1px solid #e7e7e7;
  background: #e7e7e7;
}
.up-info .btn-panel .not-follow {
  background: #00a1d6;
  color: #fff;
}
.up-info .btn-panel .not-follow span {
  display: inline-flex;
  align-items: center;
}
.up-info .btn-panel .not-follow span i {
  display: flex;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.up-info .btn-panel .not-follow span i.van-icon-general_addto_s {
  font-size: 16px;
}
.up-info .btn-panel .not-follow span i img {
  width: 100%;
  height: 100%;
}
.up-info .btn-panel .not-follow:hover {
  background: #00b5e5;
  border-color: #00b5e5;
}
.van-popover.van-followed {
  box-sizing: border-box;
  position: absolute;
  border-radius: 4px;
  border: 1px solid #e5e9ef;
  min-width: 98px;
  padding: 6px 0px;
}
.van-popover.van-followed .follow_dropdown {
  text-align: center;
}
.van-popover.van-followed .follow_dropdown li {
  padding: 0 20px;
  line-height: 40px;
  transition: all 0.3s;
  cursor: pointer;
}
.van-popover.van-followed .follow_dropdown li:hover {
  color: #00a1d6;
  background-color: #e5e9ef;
}

.video-desc {
  position: relative;
}
.video-desc .tip-info {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.video-desc .tip-info .copyright,
.video-desc .tip-info .argue {
  margin-right: 20px;
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  color: #999;
}
.video-desc .tip-info .copyright i,
.video-desc .tip-info .argue i {
  font-size: 16px;
  margin-right: 5px;
  color: #fd676f;
  width: 16px;
  vertical-align: top;
}
.video-desc .tip-info .copyright.argue,
.video-desc .tip-info .argue.argue {
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100vw - 860px);
  font-weight: 300px;
  padding: 4px 13px 4px 4px;
  border-radius: 2px;
  color: #e78b1f;
  background: #fff1d3;
}
.video-desc .tip-info .copyright.argue i,
.video-desc .tip-info .argue.argue i {
  color: #e78b1f;
}
.video-desc .desc-info {
  transition: all 0.3s;
  white-space: pre-line;
  transition: height 0.3s;
  font-size: 12px;
  color: #212121;
  letter-spacing: 0;
  line-height: 18px;
  height: 63px;
  width: 573px;
  overflow: hidden;
}
.video-desc .desc-info a {
  color: #00a1d6;
}
.video-desc .desc-info a:hover {
  color: #f25d8e;
}
.video-desc .desc-info.open {
  height: auto;
}
.video-desc .desc-info .mention-user {
  color: #178bcf;
}
.video-desc .toggle-btn {
  margin-top: 12px;
  font-size: 12px;
  line-height: 18px;
}
.video-desc .toggle-btn span {
  cursor: pointer;
  color: #505050;
}
.video-desc .toggle-btn span:hover {
  color: #00a1d6;
}
.video-desc .subtitle {
  padding-top: 10px;
  color: #999;
}
.video-desc .subtitle a {
  color: #00a1d6;
}
.video-desc .subtitle a:hover {
  color: #f25d8e;
}
.video-desc .subtitle li {
  line-height: 22px;
}

.activity-m {
  margin-top: 20px;
}
.activity-m .inside-wrp {
  font-size: 14px;
  overflow: hidden;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  box-sizing: border-box;
}
.activity-m .inside-wrp .left {
  float: left;
  margin-right: -320px;
  padding-left: 20px;
  padding-right: 320px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.activity-m .inside-wrp .tip {
  margin-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  color: #505050;
}
.activity-m .inside-wrp .tip.hasbtn {
  margin-top: 10px;
}
.activity-m .inside-wrp .right {
  float: right;
}
.activity-m .inside-wrp .right .inside-bg {
  position: relative;
  display: block;
  width: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.activity-m .inside-wrp .right .inside-bg:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(left, #fff, transparent 30%);
  background-image: -moz-linear-gradient(left, #fff, transparent 30%);
  background-image: linear-gradient(to right, #fff, transparent 30%);
}
.activity-m .inside-wrp .l-inside,
.activity-m .inside-wrp .hinter-msg {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.activity-m.act-now .l-inside .hinter-msg {
  line-height: 20px;
}
.activity-m.act-now .l-inside .b-btn-praise {
  margin-top: 12px;
  width: 100px;
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  background-color: #f25d8e;
  cursor: pointer;
}
.activity-m.act-now .l-inside .b-btn-praise.istip {
  margin-top: 6px;
}
.activity-m.act-now .l-inside .b-btn-praise.voted {
  color: #e5e9ef;
  border: 1px solid;
  background-color: transparent;
  cursor: default;
}
.activity-m.act-now .l-inside .score-wrapper {
  margin-top: 12px;
}
.activity-m.act-now .l-inside .score-wrapper.istip {
  margin-top: 6px;
}
.activity-m.act-now .l-inside .score-wrapper.voted li {
  cursor: default;
  opacity: 1;
}
.activity-m.act-now .l-inside .score-wrapper li {
  float: left;
  margin-right: 10px;
  width: 36px;
  height: 32px;
  background: url("//static.hdslb.com/images/base/icons.png") no-repeat -655px -2126px;
  cursor: pointer;
}
.activity-m.act-now .l-inside .score-wrapper li.hovered {
  background-position: -719px -2126px;
  opacity: 1;
}
.activity-m.act-now .l-inside .score-wrapper li.hovered.opacity {
  opacity: 0.6;
  transition: opacity 0.1s;
}
.activity-m.act-now .inside-bg {
  height: 100px;
}
.activity-m .onlytip {
  line-height: 20px;
  font-size: 14px;
  color: #212121;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.activity-m.act-end .inside-bg {
  height: 100px;
}
.activity-m .b-btn {
  display: inline-block;
  background-color: #f25d8e;
  border: none;
  line-height: 25px;
  padding: 0 15px;
  font-size: 12px;
  margin-top: -1px;
}
.activity-m .b-btn:hover {
  background-color: #ff85ad;
}
.activity-m .b-btn.off {
  cursor: default;
  color: #6d757a;
  background-color: #b8c0cc;
}
.activity-m .b-btn.off:hover {
  color: #6d757a;
  background-color: #b8c0cc;
}

.comment-m .b-btn {
  display: inline;
}
.comment-m .b-head {
  font-size: 18px;
  line-height: 24px;
  color: #222;
  margin: 0 0 20px 0;
}
.comment-m .b-head .del-log {
  float: right;
  font-size: 12px;
  line-height: 24px;
  color: #99a2aa;
}
.comment-m .b-head .results {
  margin-right: 10px;
}

.interact-dialog {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.interact-dialog .bg {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.interact-dialog .con {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  margin-left: -138px;
  margin-top: -138px;
  padding: 16px;
  box-sizing: border-box;
  z-index: 99999;
  background: #ffffff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-align: center;
  width: 274px;
  height: 277px;
}
.interact-dialog .pic {
  width: 242px;
  height: 198px;
}
.interact-dialog .btn {
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  line-height: 32px;
  height: 32px;
  border-radius: 2px;
  width: 156px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background: #00a1d6;
  margin-top: 10px;
}
.interact-dialog .btn:hover {
  background: #00b5e5;
}

.charge-plus-wrap {
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #d8d8d8;
}
.charge-plus-wrap .charge-plus {
  width: 300px;
  height: 412px;
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/chargeplus-bg.png)
    no-repeat center / 300px 412px;
  padding: 17px;
  box-sizing: border-box;
}
.charge-plus-wrap .charge-plus .head {
  text-align: right;
  font-size: 0;
}
.charge-plus-wrap .charge-plus .head .close {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjkyNjcwMSAwLjkzMDI5NEMxLjIxOTU5IDAuNjM3NDAxIDEuNjk0NDcgMC42Mzc0MDEgMS45ODczNiAwLjkzMDI5NEw3Ljk5NzYgNi45NDA1M0wxNC4wMDk1IDAuOTI4NjU0QzE0LjMwMjQgMC42MzU3NjEgMTQuNzc3MiAwLjYzNTc2MSAxNS4wNzAxIDAuOTI4NjU0QzE1LjM2MyAxLjIyMTU1IDE1LjM2MyAxLjY5NjQyIDE1LjA3MDEgMS45ODkzMUw5LjA1ODI2IDguMDAxMTlMMTUuMDY4OCAxNC4wMTE4QzE1LjM2MTcgMTQuMzA0NyAxNS4zNjE3IDE0Ljc3OTUgMTUuMDY4OCAxNS4wNzI0QzE0Ljc3NTkgMTUuMzY1MyAxNC4zMDExIDE1LjM2NTMgMTQuMDA4MiAxNS4wNzI0TDcuOTk3NiA5LjA2MTg1TDEuOTg4NjYgMTUuMDcwOEMxLjY5NTc2IDE1LjM2MzcgMS4yMjA4OSAxNS4zNjM3IDAuOTI3OTk2IDE1LjA3MDhDMC42MzUxMDMgMTQuNzc3OSAwLjYzNTEwMyAxNC4zMDMgMC45Mjc5OTYgMTQuMDEwMUw2LjkzNjk0IDguMDAxMTlMMC45MjY3MDEgMS45OTA5NUMwLjYzMzgwOCAxLjY5ODA2IDAuNjMzODA4IDEuMjIzMTkgMC45MjY3MDEgMC45MzAyOTRaIiBmaWxsPSIjOTQ5OUEwIi8+Cjwvc3ZnPgo=)
    no-repeat center / 14px 14px;
  cursor: pointer;
}
.charge-plus-wrap .charge-plus .main {
  margin-top: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.charge-plus-wrap .charge-plus .main .title {
  font-size: 17px;
}
.charge-plus-wrap .charge-plus .main .qrcode {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 173px;
  height: 173px;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  margin-top: 18px;
  margin: 18px 0 13px;
}
.charge-plus-wrap .charge-plus .main .qrcode .van-qrcode {
  width: 158px;
  height: 158px;
}

.multi-page {
  position: relative;
  background: #f4f4f4;
  z-index: 1;
}
.multi-page .head-con {
  display: flex;
  color: #222;
  padding: 16px;
  padding-top: 10px;
  padding-bottom: 0;
  align-items: center;
  justify-content: space-between;
}
.multi-page .head-con .head-left {
  display: flex;
  align-items: center;
}
.multi-page .head-con .head-left h3 {
  font-size: 16px;
  font-weight: normal;
  margin-right: 8px;
}
.multi-page .head-con .head-left .cur-page {
  font-size: 12px;
  color: #999999;
  line-height: 16px;
}
.multi-page .head-con .head-left .cur-page input {
  border: 1px solid #999;
  width: 30px;
  padding: 0 3px;
}
.multi-page .head-con .head-left .range-box .paging {
  float: right;
  width: 240px;
}
.multi-page .head-con .head-left .range-box .paging ul {
  float: right;
}
.multi-page .head-con .head-left .range-box .paging li {
  float: left;
  line-height: 16px;
  margin: 4px 6px 3px 6px;
  font-size: 14px;
  color: #6d7579;
  transition: all 0.3s;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
}
.multi-page .head-con .head-left .range-box .paging li:hover {
  color: #03a0d6;
}
.multi-page .head-con .head-left .range-box .paging li.on {
  color: #03a0d6;
  border-color: #03a0d6;
}
.multi-page .head-con .head-left .range-box i {
  cursor: pointer;
  line-height: 24px;
  font-size: 16px;
  margin-left: 10px;
  color: #757575;
}
.multi-page .head-con .head-left .range-box i:hover {
  color: #03a0d6;
}
.multi-page .cur-list {
  padding: 4px 0;
  transition: all 0.3s;
}
.multi-page .cur-list .list-box {
  padding: 0 6px;
  max-height: 340px;
  overflow: auto;
}
.multi-page .cur-list .list-box li {
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #6d757a;
  margin: 5px 0;
  transition: all 0.3s;
  border-radius: 3px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
}
.multi-page .cur-list .list-box li:hover {
  color: #00a1d6;
  background: #fff;
}
.multi-page .cur-list .list-box li.watched a {
  color: #757575;
}
.multi-page .cur-list .list-box li.on {
  background: #fff;
  padding: 0 10px 0 6px;
}
.multi-page .cur-list .list-box li.on > a {
  color: #03a0d6;
}
.multi-page .cur-list .list-box li.on img {
  height: 14px;
  width: 14px;
  font-size: 14px;
  margin-right: 5px;
}
.multi-page .cur-list .list-box li a {
  display: block;
  color: #212121;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.multi-page .cur-list .list-box li .clickitem {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
}
.multi-page .cur-list .list-box li .link-content {
  display: flex;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
}
.multi-page .cur-list .list-box li .page-num {
  margin-right: 10px;
}
.multi-page .cur-list .list-box li .part {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
}
.multi-page .cur-list .list-box li .duration {
  font-size: 12px;
  color: #757575;
  justify-self: flex-end;
}
.multi-page .cur-list .module-box {
  max-height: 340px;
  overflow: auto;
  margin-top: 5px;
  padding: 0 8px;
}
.multi-page .cur-list .module-box li {
  background: #fff;
  float: left;
  width: 64px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: #6d7579;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  margin: 0 1px 8px 8px;
  cursor: pointer;
  transition: all 0.3s;
}
.multi-page .cur-list .module-box li a {
  display: inline-block;
  width: 100%;
}
.multi-page .cur-list .module-box li a > span {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.multi-page .cur-list .module-box li.watched a {
  color: #999;
}
.multi-page .cur-list .module-box li:hover {
  color: #03a0d6;
  border-color: #03a0d6;
}
.multi-page .cur-list .module-box li.on {
  color: #fff;
  border-color: #03a0d6;
  background: #03a0d6;
}
.multi-page .cur-list .module-box li.on a {
  color: #fff;
}

#bilibili-player embed {
  width: 100%;
  height: 100%;
}
#bilibili-player .player {
  height: 100%;
}
#bilibili-player-placeholder {
  position: absolute;
  display: flex;
  z-index: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px #f1f2f3;
 }
#bilibili-player-placeholder-top {
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: #000;
}
#bilibili-player-placeholder-bottom {
  position: relative;
  display: flex;
  height: 46px;
  align-items: center;
  padding: 0 12px;
  background: #ffffff;
 }
#bilibili-player-placeholder-bottom-left,
#bilibili-player-placeholder-bottom-right {
  background-color: rgba(0, 0, 0, 0.04);
}
#bilibili-player-placeholder-bottom-left {
  margin-right: 10px;
  width: 176px;
  height: 22px;
}
#bilibili-player-placeholder-bottom-right {
  height: 22px;
  flex-grow: 1;
}
@media screen and (min-width: 1681px) {
  #bilibili-player-placeholder #bilibili-player-placeholder-bottom {
    height: 56px;
  }
}
.hide-player #bilibili-player *,
.hide-player #bilibili-player::after,
.hide-player #bilibili-player::before {
  display: none !important;
}
.player-wrap {
  position: relative;
}
.unpaid-cover {
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: #000;
}
.unpaid-cover .cover-video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: blur(100px);
}
.unpaid-cover .cover-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 22px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}

.cover-preview-module {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
}
.cover-preview-module.show {
  opacity: 1;
}
.cover-preview-module .cover {
  position: absolute;
  left: 0;
  top: 7px;
  height: 98px;
  width: 100%;
  margin-top: 2px;
}
.cover-preview-module .progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 10px;
  border-width: 4px 8px;
  border-style: solid;
  border-color: #000;
  background: #444;
  box-sizing: border-box;
}
.cover-preview-module .progress-bar span {
  display: block;
  background: #fff;
  height: 2px;
}

.danmu-module {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s;
  pointer-events: none;
}
.danmu-module.show {
  opacity: 1;
}
.danmu-module .dm {
  position: absolute;
  color: #fff;
  left: 100%;
  top: 8px;
  white-space: pre;
  text-shadow: 1px 1px 2px #001;
}
.danmu-module .dm.row2 {
  top: 25px;
}

.watch-later-trigger {
  display: none;
  width: 22px;
  height: 22px;
  position: absolute;
  right: 6px;
  bottom: 4px;
  cursor: pointer;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABT0lEQVQ4je3VMYrCQBTG8b/DWASLNKJgJ1hY2sloZeF2gkeYW+wZvIVXsLBJY5UdtLJLk17EIghCwChukWRxFzSaaLdfMwm8/EgemTclgOl02gEmwAAoky8RsAA+tdbrUoJ+AVZO8G9CoCeJ39Sq1+sopbBtO5e23+8xxrDdbi1gIog/vxAKYNs2Sqn0diBIenoP9X2fIAgyccv66WZZZBXvdjtc18UYkwlfJxM+n8+/1pfBefMPPw4LEZcEQcBqteJ0Or0GrlartFotLpcLnucxm83YbDbFYSEE/X6f4XBIpVLhcDjgOA6u63I8HvPDaRqNBuPxmHa7DcS7cT6f36yXj8IAUkq63S7NZpPlcomUtx9/Ck5Tq9UYjUZ3a976u0UQz9OiCcMwvYwk8XHyYYxBKXU9+p5Grybg4m1Hk9Bar4Ee4JC0JWeixOhprdffE/1yRW/TLMYAAAAASUVORK5CYII=);
}
.watch-later-trigger.added {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABiklEQVQ4jbXVzyvDcRzH8efns1+JIRtbOSiKrMRBrZZC5IzcHJYTJyc1J464ubuY5MQ/oLSTNSHfIg5KyEmbzY/5sa++c/hOCtv47rvX8f2pR+/3u0+fjwAgfNoFLAH9gA1jUYEIECLoU0QOjQIVBsHveQECEr1Ts1By1pJEH9/s9EuM77RQbLIMKACG4QaHhYNBL7EBj3lwtU2yFXDT6rRil8Ic2C4F634XnbU24m8aY9F46bAUsNJdR1+9g6f3LKPROBfp99LhxY5aRhorULUs43sJlFQmfxO/FWMDHpQhL+3VXzdxps3JVEsVAJOHSSK3rwWbsP5WtAhorrSy09vAxH6CeoeFOV8NALPHKTZvnovMBoLwafZ7sc4uWfe76HE70HKnUsDy+SNzJ/dFUciziruMxvBunNXLNFLo6Mb1M/N/RCHPKgAyWpbpoyQHdxmaKi0snD3wYzQj8GfWrtL/4L5S1rdCLYOrSvTvxOxEJBBC/07MygsQkgR9ChAAtiltLWrOCBD0KR9smmovo1v+1QAAAABJRU5ErkJggg==);
}
.watch-later-hint {
  position: absolute;
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  line-height: 18px;
  padding: 4px 8px;
  z-index: 99999;
  background-color: #000;
  background: rgba(0, 0, 0, 0.8);
}

.spread-module {
  position: relative;
  width: 160px;
  height: 148px;
  font-size: 12px;
  overflow: hidden;
}
.spread-module a {
  text-decoration: none;
}
.spread-module a:hover .t {
  color: #00a1d6;
}
.spread-module .pic {
  position: relative;
  width: 160px;
  height: 100px;
  display: block;
  overflow: hidden;
  text-align: center;
  border-radius: 4px;
}
.spread-module .pic img {
  margin: 0 auto;
  outline: 0;
}
.spread-module .pic .gg-pic {
  position: absolute;
  right: 0;
  top: 0;
}
.spread-module .pic .dur {
  opacity: 0;
  position: absolute;
  bottom: 2px;
  left: 6px;
  color: #fff;
  height: 12px;
  line-height: 12px;
  padding: 0 5px 1px 0;
  transition: all 0.3s;
}
.spread-module .pic .promote {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  padding: 0 5px 0 5px;
  border-radius: 0 5px 0 0;
  color: white;
  left: 0;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  line-height: 20px;
}
.spread-module .pic .mask-video {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;
}
.spread-module .pic .medal {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 24px;
  pointer-events: none;
}
.spread-module .pic .medal.golden {
  background-position: -849px -148px;
}
.spread-module .pic .medal.silvery {
  background-position: -849px -212px;
}
.spread-module .pic .w-later {
  display: none;
}
.spread-module .pic:hover .w-later {
  display: block;
}
.spread-module .t {
  padding-top: 8px;
  height: 40px;
  line-height: 20px;
  transition: all 0.2s linear;
  color: #222;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-align: left;
}
.spread-module .num {
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 20px;
  line-height: 20px;
  color: #99a2aa;
  background-color: #fff;
  transition: all 0.3s;
}
.spread-module .num .card-play,
.spread-module .num .card-danmu {
  display: inline-flex;
  align-items: center;
  height: 18px;
  width: 50%;
  font-size: 12px;
  line-height: 18px;
  overflow: hidden;
}
.spread-module .num .card-play span,
.spread-module .num .card-danmu span {
  height: auto;
  line-height: 18px;
  white-space: nowrap;
}
.spread-module .num .card-play .icon,
.spread-module .num .card-danmu .icon {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.spread-module .num .card-play .svg-icon-next,
.spread-module .num .card-danmu .svg-icon-next {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: sub;
}
.spread-module:hover .dur {
  opacity: 1;
}
.spread-module:hover .num {
  bottom: -20px;
}
.spread-module:hover .mask-video {
  opacity: 1;
}

.error-related .video-details {
  overflow: hidden;
  padding-left: 140px;
}
.error-related .video-details .like-card {
  margin: 30px 20px 30px 0;
  float: left;
}
.error-related .error {
  width: 100%;
  height: 40px;
}
.error-related .error.details {
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/not_fang.png)
    center no-repeat;
}

.error-body {
  background: #f4f5f7;
  padding: 30px;
}
.error-container {
  width: 980px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
}
.error-container .error-panel {
  padding: 40px 0;
  display: flex;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.error-container .error-panel .error-msg {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}
.error-container .error-panel .error-msg:after {
  content: "";
  height: 100%;
  width: 0;
  display: inline-block;
  vertical-align: middle;
}
.error-container .error-panel .error-msg .error-img {
  width: 160px;
  height: 100px;
  margin: 0 auto;
}
.error-container .error-panel .error-msg .error-prompt {
  padding: 40px 0 0 0;
  text-align: center;
}
.error-container .error-panel .tips-img {
  width: 416px;
  height: 234px;
  margin-left: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-container .error-panel .tips-img img {
  max-width: 100%;
  max-height: 100%;
}
.error-container .msg-text {
  max-width: 350px;
  font-family: PingFangSC-Regular, MicrosoftYaHei;
  font-size: 14px;
  color: #505050;
  line-height: 21px;
}
.error-container .error-text {
  font-size: 26px;
  color: #212121;
  line-height: 26px;
  font-weight: bolder;
  padding: 0 0 12px 0;
}
.error-container .big-btn {
  display: inline-block;
  line-height: 40px;
  vertical-align: middle;
  text-align: center;
  background: #00a1d6;
  color: #fff;
  border-radius: 2px;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
}
.error-container .big-btn:hover {
  background: #00b5e5;
}
.error-container .big-btn.go-home {
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  padding: 3px 10px;
  margin-top: 30px;
}
.error-container .big-btn.go-whatever {
  width: auto;
  margin-top: 10px;
}
.error-container .big-btn.verybig {
  margin-top: 30px;
  padding: 2px 50px;
}
.error-container .error {
  width: 100%;
  height: 40px;
}
.error-container .error.split {
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/have_rest.png)
    center no-repeat;
}
.error-container .error-manga {
  position: relative;
  text-align: center;
  padding: 30px;
}
.error-container .error-manga .img-box {
  width: 698px;
  margin: 0 auto;
}
.error-container .error-manga .img-box img {
  width: 100%;
}
.error-container .go-home-from-404 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  font-family: PingFangSC-Regular, MicrosoftYaHei;
  font-size: 14px;
  color: #505050;
}

.ad-report[data-v-6e67b0e4] {
  min-width: 1px;
  min-height: 1px;
  display: block;
}

.ad-floor[data-v-7da6e2ec] {
  position: relative;
}
.ad-floor img[data-v-7da6e2ec] {
  border-radius: 5px;
}
.ad-floor .lazy-img[data-v-7da6e2ec] {
  background: none;
}
@media screen and (max-width: 1400px) {
  .ad-floor[data-v-7da6e2ec] {
    width: 980px;
    max-height: 80px;
  }
}
.ad-floor .gg-pic[data-v-7da6e2ec] {
  position: absolute;
  left: 0;
  bottom: 4px;
}

.slide-ad[data-v-dc5ae6da] {
  min-height: 1px;
}
.slide-gg[data-v-dc5ae6da] {
  position: relative;
  width: 320px;
  height: 186px;
  overflow: hidden;
  border-radius: 2px;
  background: #f4f5f7;
  margin-bottom: 20px;
}
.slide-gg .gg-pic[data-v-dc5ae6da] {
  position: absolute;
  left: 3px;
  bottom: 3px;
}
.slide-gg .item-box[data-v-dc5ae6da] {
  z-index: 1;
  /* fix van-slide mountedä¹‹å‰å®½é«˜ä¸º0çš„é—®é¢˜ */
  width: 320px !important;
  height: 186px !important;
}
.slide-gg .item-box .item .link[data-v-dc5ae6da] {
  display: inline-block;
  height: 100%;
  width: 100%;
}
.slide-gg .slide-trig[data-v-dc5ae6da] {
  position: absolute;
  right: 10px;
  bottom: 6px;
  z-index: 2;
}
.slide-gg .slide-trig span[data-v-dc5ae6da] {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  margin-right: 6px;
  cursor: pointer;
}
.slide-gg .slide-trig span.on[data-v-dc5ae6da] {
  background: #00a1d6;
}
.slide-gg .close-btn[data-v-dc5ae6da] {
  z-index: 2;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  background: #fff;
  border-radius: 2px;
  cursor: pointer;
}
.slide-gg .close-btn i[data-v-dc5ae6da] {
  color: #999;
  font-size: 12px;
}

.vcd-wrapper[data-v-f972261c] {
  min-height: 1px;
}
.vcd-wrapper > a[data-v-f972261c] {
  display: block;
  min-height: 1px;
}
.vcd[data-v-f972261c] {
  box-sizing: border-box;
  margin-bottom: 20px;
  height: 80px;
  display: flex;
}
.vcd .cover[data-v-f972261c] {
  margin-right: 10px;
  border-radius: 2px;
  width: 141px;
  background: #f4f5f7;
}
.vcd .cover .cover-img[data-v-f972261c] {
  width: 141px;
  height: 80px;
  border-radius: 2px;
}
.vcd .info[data-v-f972261c] {
  height: 80px;
  width: 169px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.vcd .info .title[data-v-f972261c] {
  display: block;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 18px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}
.vcd .info .rest[data-v-f972261c] {
  font-size: 12px;
  color: #999999;
  letter-spacing: 0;
  line-height: 16px;
  height: 17px;
  display: flex;
}
.vcd .info .rest .mark[data-v-f972261c] {
  position: relative;
  display: inline-block;
  width: 28px;
  height: 16px;
  margin-right: 6px;
  vertical-align: middle;
}
.vcd .info .rest .mark > span[data-v-f972261c] {
  position: absolute;
  box-sizing: border-box;
  width: 56px;
  height: 32px;
  font-size: 20px;
  line-height: 20px;
  padding: 4px 7px;
  border: 2px solid #999;
  border-radius: 6px;
  word-break: keep-all;
  transform: scale(0.5) translate(-50%, -50%);
}
.vcd .info .rest .ad-icon[data-v-f972261c] {
  margin-right: 6px;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
}
.vcd .info .rest .desc[data-v-f972261c] {
  display: inline-block;
  align-self: center;
  height: 12px;
  line-height: 12px;
  font-size: 12px;
  word-break: keep-all;
  vertical-align: middle;
}

.video-ad-creative-card {
  padding: 6px 0;
}
.video-ad-creative-card .card-box {
  display: flex;
}
.video-ad-creative-card .card-box .pic-box {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 2px;
  background: #f4f5f7;
}
.video-ad-creative-card .card-box .pic-box .pic {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  width: 141px;
  height: 80px;
}
.video-ad-creative-card .card-box .pic-box .pic > img {
  width: 141px;
  height: 80px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
.video-ad-creative-card .card-box .pic-box .pic > img[src=""] {
  opacity: 0;
}
.video-ad-creative-card .card-box .pic-box .mask-video {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;
  pointer-events: none;
}
.video-ad-creative-card .card-box .pic-box .duration {
  opacity: 0;
  position: absolute;
  bottom: 2px;
  left: 6px;
  color: #fff;
  height: 12px;
  line-height: 12px;
  padding: 0 5px 1px 0;
  transition: all 0.3s;
  z-index: 5;
}
.video-ad-creative-card .card-box .pic-box .watch-later-video {
  transition: opacity 0.3s;
  opacity: 0;
}
.video-ad-creative-card .card-box .pic-box:hover .watch-later-video {
  transition-delay: 0.3s;
  opacity: 1;
}
.video-ad-creative-card .card-box .pic-box:hover .mask-video {
  opacity: 1;
}
.video-ad-creative-card .card-box .pic-box:hover .duration {
  opacity: 1;
}
.video-ad-creative-card .card-box .info {
  margin-left: 10px;
  flex: 1;
  font-size: 0;
}
.video-ad-creative-card .card-box .info .title {
  display: block;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 18px;
  margin-bottom: 6px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}
.video-ad-creative-card .card-box .info .count {
  display: inline-block;
  height: 16px;
  width: 100%;
  color: #999;
  font-size: 12px;
}
.video-ad-creative-card .card-box .info .count a {
  color: #999;
}
.video-ad-creative-card .card-box .info .count .ad-icon {
  vertical-align: text-bottom;
  width: 52px;
  height: 16px;
  display: inline-block;
  margin-right: 6px;
}
.video-ad-creative-card .card-box .info .count.up {
  width: 160px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.video-ad-creative-card .card-box .info .pre-mask {
  background: #f4f5f7;
  border-radius: 2px;
}
.video-ad-creative-card .card-box .info .pre-mask i {
  display: none;
}

#biliMainHeader[data-v-d350f6b6] {
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  position: relative;
  z-index: 1000;
  margin: 0;
  padding: 0;
}
#biliMainHeader > *[data-v-d350f6b6] {
  box-sizing: border-box;
}
.mini-header[data-v-d350f6b6] {
  z-index: 1;
  width: 100%;
  height: 56px;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}
.mini-header__content[data-v-d350f6b6] {
  padding: 10px 24px;
  line-height: 30px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.nav-link .nav-link-ul[data-v-d350f6b6] {
  height: 36px;
  display: flex;
  align-items: center;
}
.nav-link-item[data-v-d350f6b6] {
  margin-right: 12px;
}
.nav-link-item .link[data-v-d350f6b6] {
  font-size: 14px;
  color: #212121;
  text-shadow: none;
  line-height: 32px;
  white-space: nowrap;
  display: flex;
}
.navbar_logo[data-v-d350f6b6] {
  width: 70px;
  height: 32px;
  margin-right: 16px;
}
.navbar_pullup[data-v-d350f6b6] {
  width: 16px;
  height: 16px;
  align-self: center;
  transform: rotate(180deg);
  transition: transform 0.3s;
}
.mini-upload[data-v-d350f6b6] {
  cursor: pointer;
  position: relative;
  color: #fff;
  font-size: 14px;
  display: block;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #fb7299;
  border-radius: 2px;
  margin-left: 14px;
}

.header-v3 {
  background-color: #f6f7f8;
}
.header-v3 #app {
  max-width: 2560px;
  margin: 0 auto;
}
.header-v3 #biliMainHeader {
  z-index: 1002;
  height: 64px !important;
}
.header-v3 #biliMainHeader .mini-header {
  height: 64px !important;
}

.fixed-header .bili-header__bar {
  box-sizing: border-box;
  position: fixed;
  top: 0;
}
.bili-header .bili-header__bar {
  position: absolute;
  top: 0;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 2560px;
  width: 100%;
  height: 64px;
}
.mini-header {
  z-index: 1;
  width: 100%;
  height: 56px;
  position: relative;
  background: #ffffff;
   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}
.bili-header .left-entry {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 40px;
}
.bili-header .left-entry__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  height: 56px;
  font-size: 14px;
  color: #18191c;
 }
@media (min-width: 1100px) and (max-width: 1366px) {
  .bili-header .left-entry__title .mini-header__logo {
    margin-right: 10px !important;
  }
}
.bili-header .left-entry__title .mini-header__logo {
  margin-right: 25px;
  width: 60px;
  cursor: pointer;
  color: #00aeec;
 }
.bili-header .left-entry .default-entry {
  display: inline-block;
  height: 64px;
  line-height: 64px;
  font-size: 14px;
  cursor: pointer;
  color: #18191c;
   margin-right: 20px;
}
@media (min-width: 1701px) and (max-width: 2559px) {
  .bili-header .left-entry .default-entry {
    margin-right: 20px !important;
  }
}
@media (min-width: 1100px) and (max-width: 1366px) {
  .bili-header .left-entry .default-entry {
    margin-right: 10px !important;
  }
}
@media (max-width: 1099px) {
  .bili-header .left-entry .default-entry {
    margin-right: 20px;
  }
}
.right-entry {
  display: flex;
  align-items: center;
  margin-left: 50px;
}
.bili-header .right-entry .right-entry-item {
  display: block;
  flex-shrink: 0;
  margin-right: 4px;
  min-width: 50px;
  text-align: center;
  cursor: pointer;
}
.bili-header .header-upload-entry {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  width: 90px;
  height: 34px;
  border-radius: 8px;
  background: #fb7299;
    text-align: center;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}
@media screen and (max-width: 1279.9px) {
  .bili-header .header-upload-entry {
    width: 34px;
    height: 34px;
  }
  .bili-header .header-upload-entry span {
    display: none;
  }
  .bili-header .header-upload-entry .header-upload-entry__icon {
    margin-right: 0;
  }
}
.bili-header .header-upload-entry__icon {
  margin-right: 5px;
  }
.mini-header__arrow {
  margin-left: 5px;
}

.user-card-m {
  font-size: 12px;
  position: absolute;
  z-index: 2000;
  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 366px;
  background: #fff;
  transition: all 0.3s;
  box-sizing: border-box;
}
.user-card-m a {
  text-decoration: none;
}
.user-card-m p {
  margin: 0;
}
.user-card-m .loading {
  min-height: 230px;
}
.user-card-m .loading .mc1 {
  background: #f9f9f9;
  height: 120px;
}
.user-card-m .loading .mc2 {
  padding: 0 0 0 100px;
  position: relative;
}
.user-card-m .loading .mc3 {
  background: #f9f9f9;
  height: 24px;
  margin-top: 12px;
}
.user-card-m .loading .mc4 {
  position: absolute;
  width: 80px;
  height: 60px;
  background: #f9f9f9;
  top: 0;
  left: 0;
}
.user-card-m .bg {
  width: 100%;
  height: 85px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.user-card-m .user-info-wrapper {
  position: relative;
  display: flex;
  padding: 0 20px 16px 10px;
}
.user-card-m .user-info-wrapper .face {
  position: relative;
  top: 10px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #fff;
  margin-right: 12px;
}
.user-card-m .user-info-wrapper .face img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.user-card-m .user-info-wrapper .face .auth {
  position: absolute;
  width: 14px;
  height: 14px;
  right: 0;
  top: 34px;
}
.user-card-m .user-info-wrapper .info p {
  margin: 0;
  color: #222;
}
.user-card-m .user-info-wrapper .info .sign {
  line-height: 18px;
  color: #99a2aa;
  word-break: break-all;
  word-wrap: break-word;
}
.user-card-m .user-info-wrapper .info .social {
  margin-bottom: 10px;
}
.user-card-m .user-info-wrapper .info .social a {
  color: #222;
  margin-right: 18px;
}
.user-card-m .user-info-wrapper .info .social .tip_text {
  color: #9499a0;
  margin-left: 3px;
}
.user-card-m .user-info-wrapper .info .official-wrapper {
  font-size: 12px;
  color: #9499a0;
  line-height: 18px;
  margin-bottom: 8px;
}
.user-card-m .user-info-wrapper .info .official-wrapper .official-icon {
  width: 14px;
  height: 14px;
  margin-right: 2px;
  vertical-align: sub;
}
.user-card-m .user-info-wrapper .info .user {
  font-size: 14px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.user-card-m .user-info-wrapper .info .user .name {
  color: #222;
  max-width: 160px;
  margin-right: 4px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-card-m .user-info-wrapper .info .user .user-sex {
  margin-right: 5px;
}
.user-card-m .user-info-wrapper .info .user .user-label {
  display: inline-block;
  box-sizing: border-box;
  max-width: 58px;
  height: 16px;
  color: #fff;
  background: #ff6699;
  border-radius: 2px;
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
  overflow: hidden;
  white-space: nowrap;
}
.user-card-m .user-info-wrapper .info .user .user-label .label-size {
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  transform: scale(0.83);
}
.user-card-m .user-info-wrapper .info .level {
  display: inline-block;
  width: 25px;
  height: 14px;
  display: flex;
}
.user-card-m .user-info-wrapper .info .level.senior {
  width: 35px;
  height: 14px;
}
.user-card-m .user-info-wrapper .info .level svg {
  width: 100%;
  height: 100%;
}
.user-card-m .user-info-wrapper .info .btn-box {
  display: flex;
  margin-top: 16px;
}
.user-card-m .user-info-wrapper .info .btn-box a {
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccd0d7;
  margin-right: 8px;
  border-radius: 3px;
  color: #6d757a;
  transition: all 0.3s;
  background-color: #e5e9ef;
  font-size: 14px;
}
.user-card-m .user-info-wrapper .info .btn-box a .plus {
  font-size: 16px;
  margin-right: 2px;
}
.user-card-m .user-info-wrapper .info .btn-box a:hover {
  border-color: #00b5e5;
  color: #00a1d6;
}
.user-card-m .user-info-wrapper .info .btn-box .like {
  color: #fff;
  font-weight: normal;
  border-color: #00a1d6;
  background-color: #00a1d6;
}
.user-card-m .user-info-wrapper .info .btn-box .like:hover {
  border-color: #00b5e5;
  background-color: #00b5e5;
  color: #fff;
}
.user-card-m .user-info-wrapper .info .btn-box .liked {
  background-color: #e5e9ef;
  border-color: #e5e9ef;
  color: #6d757a;
}
.user-card-m .user-info-wrapper .info .btn-box .liked:hover {
  background-color: #e5e9ef;
  border-color: #e5e9ef;
  color: #6d757a;
}
.user-card-m .user-info-wrapper .info .btn-box .message {
  background-color: #fff;
}
.user-card-m .vip-red-name {
  color: #fb7299 !important;
}
.user-card-m .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}

.bili-dialog-m {
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10102;
}
.bili-dialog-m .bili-dialog-bomb {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  box-sizing: border-box;
  margin-bottom: 50px;
}
.bili-dialog-m .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}

.collection-m {
  width: 420px;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
}
.collection-m .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #222;
  border-bottom: 1px solid #e5e9ef;
  text-align: center;
}
.collection-m .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  height: 50px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.collection-m .content {
  padding: 0 36px;
  height: 300px;
  overflow: auto;
}
.collection-m .content .info {
  font-size: 12px;
  color: #99a2aa;
  margin: 14px 0;
}
.collection-m .content .info .uname {
  color: #6d757a;
}
.collection-m .content .group-list {
  max-height: 300px;
  padding-bottom: 14px;
}
.collection-m .content .group-list ul {
  position: relative;
  margin-top: 24px;
  min-height: 210px;
}
.collection-m .content .group-list ul .collection-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
}
.collection-m .content .group-list li {
  padding-bottom: 24px;
  font-size: 14px;
  color: #222;
  cursor: pointer;
}
.collection-m .content .group-list li label {
  cursor: pointer;
  display: block;
}
.collection-m .content .group-list li label .personal {
  color: #999;
}
.collection-m .content .group-list li label.disable {
  color: #ccd0d7;
}
.collection-m .content .group-list li label.disable:hover {
  color: #ccd0d7;
}
.collection-m .content .group-list li label.disable input[type="checkbox"] + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.collection-m
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.collection-m .content .group-list li label .count {
  float: right;
  color: #6d757a;
  font-size: 12px;
}
.collection-m .content .group-list li input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  vertical-align: middle;
  display: none;
}
.collection-m .content .group-list li input[type="checkbox"] + i {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 18px;
  vertical-align: middle;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAMZJREFUOBFjZACCY8cuSP/4+6ebkYHB4T8DgyRIjFgA1PMcqOcABzNLqZWVwVNGkGE///45w8DANIGZ898iOxOT58QaBlJ36MwZyb/fmeIYGP4VsDOzmDDuO3xmGSMD00VHW6NOUgxCV7v/8Lny/wz/9JlA3gS5DF0BqXyQGSCzGIAuBAYBdQDILCbqGIUwZdRARFiQyxoNQ3JDDqFvCIQhqDwDFUEIR5PHApkBMosJVDhCyjPyDILpApkBMov6BSzIBmpWAQCEVFxRmF8CTgAAAABJRU5ErkJggg==);
}
.collection-m .content .group-list li input[type="checkbox"]:hover + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAL5JREFUOBFjZACBVTelGb7/62ZgZHBg+P9fEixGLMHI+JzhP8MBBk6mUoYw9aeMEMP+nmFgYpgANGMRQ6zWc2LNAqtbfA3kgDiGfwwFDJzMJowMC68vY2D6fxFoUCdJBqErXnytnOEfoz4T2Jsgl1EOFkHMWnjtP+VmQU0AmsVENcOgBo0aSHmIjobhyAhDUHkGKYIo8y/IDKBZTODCEVSeUQ7iQGaxgEva78ACdvE1kJEUFrBMwAIWBKhYBQAAjRZDKb7Y9b8AAAAASUVORK5CYII=);
}
.collection-m .content .group-list li input[type="checkbox"]:checked + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.collection-m .content .group-list li input[type="checkbox"]:checked:hover + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.collection-m .content .group-list li .fav-title {
  max-width: 220px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.collection-m .content .group-list li:hover {
  color: #00a1d6;
}
.collection-m .content .group-list .add-group {
  margin-bottom: 5px;
  width: 348px;
}
.collection-m .content .group-list .add-group .add-btn {
  height: 34px;
  line-height: 34px;
  padding: 0 34px;
  border: 1px solid #ccd0d7;
  border-radius: 4px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAC5JREFUKBVjYMABZi5a9R+EcUgzMOGSICQ+EjQy4gs5fAFEduDgNHQ0HhnIT6sAudAOjNLnY/wAAAAASUVORK5CYII=)
    no-repeat 10px center;
  font-size: 12px;
  color: #6d757a;
  cursor: pointer;
}
.collection-m .content .group-list .add-group .add-btn:hover {
  border: 1px solid #00a1d6;
}
.collection-m .content .group-list .add-group .fav-add-tip {
  display: inline-block;
  line-height: 40px;
  height: 40px;
  position: absolute;
  top: -52px;
  padding: 0 10px;
  border-radius: 4px;
  color: #fff;
  background: #00a1d6;
}
.collection-m .content .group-list .add-group .fav-add-tip .blue-arrow {
  position: absolute;
  background-image: url("//static.hdslb.com/images/collection/blue-arrow.png");
  background-repeat: no-repeat;
  left: 60px;
  top: 40px;
  width: 14px;
  height: 6px;
}
.collection-m .content .group-list .add-group .fav-add-tip .icon-close {
  display: inline-block;
  margin-left: 10px;
  line-height: 28px;
  opacity: 0.9 !important;
  filter: alpha(opacity=90) !important;
  cursor: pointer;
  vertical-align: middle;
  background: url("//static.hdslb.com/images/collection/close-white.png") center
    no-repeat;
  width: 24px;
  height: 24px;
}
.collection-m .content .group-list .add-group .input-group {
  height: 34px;
  line-height: 34px;
  border: 1px solid #00a1d6;
  border-radius: 4px;
  position: relative;
}
.collection-m .content .group-list .add-group .input-group input {
  border: none;
  font-size: 12px;
  width: 200px;
  margin-left: 10px;
  padding: 0;
  box-shadow: none;
  height: 100%;
  outline: none;
}
.collection-m .content .group-list .add-group .input-group .submit {
  float: right;
  height: 34px;
  width: 90px;
  background: #d9f1f9;
  border: none;
  border-left: 1px solid #00a1d6;
  border-radius: 0 4px 4px 0;
  font-size: 14px;
  color: #00a1d6;
  cursor: pointer;
}
.collection-m .bottom {
  height: 76px;
  text-align: center;
  margin: 0 36px;
  border-top: 1px solid #e5e9ef;
}
.collection-m .bottom .btn {
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-top: 18px;
  background: #00a1d6;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
.collection-m .bottom .btn:hover {
  background: #00b5e5;
}
.collection-m .bottom .btn.disable {
  background-color: #e5e9ef;
  color: #b8c0cc;
}
.collection-m .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}

.coin-operated-m {
  width: 430px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.coin-operated-m .close {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 16px;
  top: 16px;
  cursor: pointer;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
}
.coin-operated-m .coin-title {
  font-size: 16px;
  margin-top: 20px;
  color: #222;
  text-align: center;
}
.coin-operated-m .coin-title span {
  font-size: 30px;
  color: #00a1d6;
}
.coin-operated-m .mc {
  text-align: center;
}
.coin-operated-m .mc-box {
  position: relative;
  display: inline-block;
  margin-right: 30px;
  margin-top: 35px;
  width: 160px;
  height: 230px;
  border: 2px dashed #ccd0d6;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: center;
}
.coin-operated-m .mc-box.left-con {
  margin-left: 35px;
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/22-gray.png);
}
.coin-operated-m .mc-box.right-con {
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/33-gray.png);
}
.coin-operated-m .mc-box .c-num {
  color: #99a2aa;
  text-align: left;
  font-size: 14px;
  line-height: 40px;
  position: absolute;
  left: 15px;
}
.coin-operated-m .mc-box:hover {
  border-color: #02a0d8;
}
.coin-operated-m .mc-box.on {
  border-style: solid;
  border-color: #02a0d8;
}
.coin-operated-m .mc-box.on .c-num {
  color: #00a1d6;
}
.coin-operated-m .mc-box.on.left-con {
  background-size: 122px;
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/22.gif);
}
.coin-operated-m .mc-box.on.right-con {
  background-size: 118px;
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/33.gif);
}
.coin-operated-m .like-checkbox {
  margin: 12px 0 0 37px;
  font-size: 12px;
  color: #222222;
  line-height: 16px;
}
.coin-operated-m .like-checkbox input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  display: none;
}
.coin-operated-m .like-checkbox input[type="checkbox"] + i {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 5px;
  vertical-align: bottom;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTYgMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2IDE2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0NDRDBENzt9Cjwvc3R5bGU+Cjx0aXRsZT5zZWxlY3QgY29udHJvbF9zcGVjaWFsX2RlZmF1bHQ8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9IlN5bWJvbHMiPgoJPGcgaWQ9InNlbGVjdC1jb250cm9sX3NwZWNpYWxfZGVmYXVsdCI+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIuNSwwLjVoMTFjMS4xLDAsMiwwLjksMiwydjExYzAsMS4xLTAuOSwyLTIsMmgtMTFjLTEuMSwwLTItMC45LTItMnYtMTFDMC41LDEuNCwxLjQsMC41LDIuNSwwLjV6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==);
}
.coin-operated-m .like-checkbox input[type="checkbox"]:checked + i {
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/checkbox_selected.svg);
}
.coin-operated-m .coin-bottom {
  text-align: center;
  padding: 25px 0;
}
.coin-operated-m .coin-bottom .b-btn {
  width: 92px;
  height: 22px;
  line-height: 22px;
}
.coin-operated-m .coin-bottom .tips {
  font-size: 12px;
  color: #99a2aa;
  margin-top: 10px;
}
.coin-operated-m .coin-bottom .bi-btn {
  display: inline-block;
  background: #00a1d6;
  color: #fff;
  font-size: 14px;
  padding: 4px 18px;
  border-radius: 4px;
  transition: all 0.3s;
  user-select: none;
  border: 1px solid #00a1d6;
  text-align: center;
  cursor: pointer;
}
.coin-operated-m .coin-bottom .bi-btn:hover {
  color: #fff;
  background: #00b5e5;
  border-color: #00b5e5;
}
.coin-operated-m .coin-bottom .bi-btn:active {
  background: #01769c;
  border-color: #01769c;
}
.coin-operated-m .coin-bottom .bi-btn.text-only {
  color: #00a1d6;
  border-color: transparent;
  background-color: #fff;
}
.coin-operated-m .coin-bottom .bi-btn.text-only:hover {
  border-color: #e5e9ef;
  color: #00a1d6;
  background-color: #e5e9ef;
}
.coin-operated-m .coin-bottom .bi-btn.text-only:active {
  border-color: #e5e9ef;
  color: #00a1d6;
  background-color: #e5e9ef;
}

.appeal-box {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 600px;
  height: 560px;
}

.app-watch {
  border: 1px solid #e5e9ef;
  color: #222;
  background: #fff;
  width: 420px;
  border-radius: 2px;
  z-index: 20;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
}
.app-watch .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #222;
  border-bottom: 1px solid #e5e9ef;
  text-align: center;
}
.app-watch .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.app-watch .app-look {
  padding: 30px 20px;
}
.app-watch .app-look .i-t {
  display: flex;
}
.app-watch .app-look .i-t .qrcode {
  width: 100px;
  height: 100px;
  flex: none;
  background: #eee;
}
.app-watch .app-look .i-t .v-title {
  font-size: 14px;
  margin-left: 15px;
  line-height: 22px;
  white-space: normal;
}
.app-watch .app-look .foot-txt {
  text-align: center;
  line-height: 20px;
  margin-top: 20px;
  font-size: 14px;
}
.app-watch .app-look .foot-txt a {
  color: #00a1d6;
}

.q1080p {
  position: relative;
  width: 400px;
  height: 348px;
  border-radius: 4px;
  background-color: #fff;
  padding-top: 36px;
}
.q1080p .close {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: -470px -534px;
}
.q1080p .close:hover {
  background-position: -534px -534px;
}
.q1080p .title {
  text-align: center;
  font-size: 20px;
  height: 26px;
  color: #222;
  line-height: 1;
}
.q1080p .sub-title {
  margin-top: 8px;
  color: #757575;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
}
.q1080p .pic {
  margin: 20px auto;
  width: 180px;
  height: 180px;
  overflow: hidden;
}
.q1080p .btns {
  text-align: center;
  font-size: 14px;
}
.q1080p .btns .btn-getvip {
  display: inline-block;
  vertical-align: top;
  width: 124px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #ffb000;
  color: #fff;
  line-height: 40px;
  border-radius: 4px;
  margin: 0 10px;
}

.follow-dialog-wrap {
  width: 420px;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
}
.follow-dialog-wrap .follow-dialog-window {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 420px;
  background: #fff;
  left: 50%;
  margin-left: -210px;
  border-radius: 4px;
}
.follow-dialog-wrap .follow-dialog-window .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #222;
  border-bottom: 1px solid #e5e9ef;
  text-align: center;
}
.follow-dialog-wrap .follow-dialog-window .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  height: 50px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.follow-dialog-wrap .follow-dialog-window .content {
  padding: 0 36px;
}
.follow-dialog-wrap .follow-dialog-window .content .info {
  font-size: 12px;
  color: #99a2aa;
  margin: 14px 0;
}
.follow-dialog-wrap .follow-dialog-window .content .info .uname {
  color: #6d757a;
}
.follow-dialog-wrap .follow-dialog-window .content .group-list {
  max-height: 300px;
  overflow: auto;
}
.follow-dialog-wrap .follow-dialog-window .content .group-list ul {
  position: relative;
  min-height: 185px;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  ul
  .follow-group-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
}
.follow-dialog-wrap .follow-dialog-window .content .group-list li {
  padding-bottom: 24px;
  font-size: 14px;
  color: #222;
  cursor: pointer;
  list-style-type: none;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li.special-group {
  padding-bottom: 16px;
}
.follow-dialog-wrap .follow-dialog-window .content .group-list li label {
  cursor: pointer;
  display: block;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable {
  color: #ccd0d7;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable:hover {
  color: #ccd0d7;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.follow-dialog-wrap .follow-dialog-window .content .group-list li .special-tip {
  padding-left: 40px;
  font-size: 12px;
  color: #99a2aa;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  vertical-align: middle;
  display: none;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]
  + i {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 18px;
  vertical-align: middle;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAMZJREFUOBFjZACCY8cuSP/4+6ebkYHB4T8DgyRIjFgA1PMcqOcABzNLqZWVwVNGkGE///45w8DANIGZ898iOxOT58QaBlJ36MwZyb/fmeIYGP4VsDOzmDDuO3xmGSMD00VHW6NOUgxCV7v/8Lny/wz/9JlA3gS5DF0BqXyQGSCzGIAuBAYBdQDILCbqGIUwZdRARFiQyxoNQ3JDDqFvCIQhqDwDFUEIR5PHApkBMosJVDhCyjPyDILpApkBMov6BSzIBmpWAQCEVFxRmF8CTgAAAABJRU5ErkJggg==);
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAL5JREFUOBFjZACBVTelGb7/62ZgZHBg+P9fEixGLMHI+JzhP8MBBk6mUoYw9aeMEMP+nmFgYpgANGMRQ6zWc2LNAqtbfA3kgDiGfwwFDJzMJowMC68vY2D6fxFoUCdJBqErXnytnOEfoz4T2Jsgl1EOFkHMWnjtP+VmQU0AmsVENcOgBo0aSHmIjobhyAhDUHkGKYIo8y/IDKBZTODCEVSeUQ7iQGaxgEva78ACdvE1kJEUFrBMwAIWBKhYBQAAjRZDKb7Y9b8AAAAASUVORK5CYII=);
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:checked
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:checked:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.follow-dialog-wrap .follow-dialog-window .content .group-list li:last-child {
  padding-bottom: 0;
}
.follow-dialog-wrap .follow-dialog-window .content .group-list li:hover {
  color: #00a1d6;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  li:hover
  .special-tip {
  color: #99a2aa;
}
.follow-dialog-wrap .follow-dialog-window .content .group-list .errmsg {
  color: #fb7299;
  margin: 5px 0 10px 0;
}
.follow-dialog-wrap .follow-dialog-window .content .group-list .add-group {
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 348px;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .add-btn {
  height: 34px;
  line-height: 34px;
  padding: 0 34px;
  border: 1px solid #ccd0d7;
  border-radius: 4px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAC5JREFUKBVjYMABZi5a9R+EcUgzMOGSICQ+EjQy4gs5fAFEduDgNHQ0HhnIT6sAudAOjNLnY/wAAAAASUVORK5CYII=)
    no-repeat 10px center;
  font-size: 12px;
  color: #6d757a;
  cursor: pointer;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .add-btn:hover {
  border: 1px solid #00a1d6;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group {
  height: 34px;
  line-height: 34px;
  border: 1px solid #00a1d6;
  border-radius: 4px;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  input {
  border: none;
  font-size: 12px;
  width: 200px;
  margin-left: 10px;
  padding: 0;
  box-shadow: none;
  height: 100%;
  outline: none;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  .limit {
  float: right;
  margin-right: 10px;
  color: #99a2aa;
}
.follow-dialog-wrap
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  .submitGroup {
  float: right;
  height: 34px;
  width: 90px;
  background: #d9f1f9;
  border: none;
  border-left: 1px solid #00a1d6;
  border-radius: 0 4px 4px 0;
  font-size: 14px;
  color: #00a1d6;
  cursor: pointer;
}
.follow-dialog-wrap .follow-dialog-window .content .group-list .empty-tip {
  font-size: 12px;
  color: #6d757a;
  margin-top: 15px;
  display: none;
}
.follow-dialog-wrap .follow-dialog-window .bottom {
  height: 76px;
  text-align: center;
  margin: 0 36px;
  border-top: 1px solid #e5e9ef;
}
.follow-dialog-wrap .follow-dialog-window .bottom .btn {
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-top: 18px;
  background: #00a1d6;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
.follow-dialog-wrap .follow-dialog-window .bottom .btn:hover {
  background: #00b5e5;
}
.follow-dialog-wrap .follow-dialog-window .bottom .btn:disabled {
  background-color: #f4f5f7;
  color: #ccd0d7;
  transition: all 0.2s;
}
.follow-dialog-wrap .follow-dialog-window .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}

.pop-live[data-v-29d7dff6] {
  padding-left: 10px;
}
.pop-live:hover .pl__mask[data-v-29d7dff6] {
  visibility: visible;
  opacity: 1;
}
.pop-live:hover .pl__mask .pl__live[data-v-29d7dff6] {
  visibility: visible;
  opacity: 1;
}
.pop-live .pl__head[data-v-29d7dff6] {
  font-size: 16px;
  line-height: 1;
}
.pop-live .pl__card[data-v-29d7dff6] {
  position: relative;
  margin-top: 20px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  overflow: hidden;
}
.pop-live .pl__cover[data-v-29d7dff6] {
  display: inline-block;
  width: 318px;
  height: auto;
}
.pop-live .pl__info[data-v-29d7dff6] {
  box-sizing: border-box;
  height: 75px;
  position: relative;
  padding: 12px 12px 12px 72px;
  color: #222;
}
.pop-live .pl__face[data-v-29d7dff6] {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  overflow: hidden;
}
.pop-live .pl__title[data-v-29d7dff6] {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
}
.pop-live .pl__user[data-v-29d7dff6] {
  color: #61666e;
  line-height: 1.2;
  margin-top: 10px;
}
.pop-live .pl__name[data-v-29d7dff6] {
  overflow: hidden;
  width: 80px;
}
.pop-live .pl__online[data-v-29d7dff6] {
  margin-left: 18px;
  color: #61666e;
}
.pop-live .pl__online .online-icon[data-v-29d7dff6] {
  display: inline-block;
  margin-right: 3px;
  width: 15px;
}
.pop-live .pl__icon[data-v-29d7dff6] {
  width: 12px;
  height: 12px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.pop-live .pl__icon--user[data-v-29d7dff6] {
  background: url(//static.hdslb.com/images/base/icons.png) no-repeat -282px -154px;
}
.pop-live .pl__icon--online[data-v-29d7dff6] {
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/live-eye.png)
    no-repeat;
}
.pop-live .pl__user__block[data-v-29d7dff6] {
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 16px;
}
.pop-live .pl__mask[data-v-29d7dff6] {
  position: absolute;
  top: 0;
  left: 0;
  width: 318px;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px 4px 0 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s all linear;
}
.pop-live .pl__mask .pl__live[data-v-29d7dff6] {
  transition: 0.3s all linear;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  margin-left: -35px;
  top: 50%;
  margin-top: -12px;
  z-index: 2;
  width: 70px;
  height: 24px;
  text-align: center;
}
.pop-live .pl__mask .pl__icon--live[data-v-29d7dff6] {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #f25d8e;
  margin-right: 5px;
  vertical-align: middle;
}
.pop-live .pl__mask .pl__live__text[data-v-29d7dff6] {
  position: static;
  background-color: transparent;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  vertical-align: middle;
  color: #fff;
}

.note-list[data-v-ef4a323e] {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
}
.note-list-header[data-v-ef4a323e] {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 54px;
  font-size: 16px;
  border-bottom: 1px solid #e5e9ef;
  color: #222;
}
.note-list-close[data-v-ef4a323e] {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/icon-close.svg)
    no-repeat center / 100%;
  color: #757575;
  transition: color 0.2s;
  cursor: pointer;
}
.note-list-container[data-v-ef4a323e] {
  flex-grow: 1;
  padding: 0 20px;
  overflow: auto;
}
.note-list-card[data-v-ef4a323e] {
  display: flex;
  padding: 12px 0;
}
.note-list-card[data-v-ef4a323e]:not(:last-of-type) {
  border-bottom: 1px solid #e5e9ef;
}
.note-list-avatar[data-v-ef4a323e] {
  flex-shrink: 0;
  margin: 6px 15px 0 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
.note-list-avatar img[data-v-ef4a323e] {
  display: block;
  height: 100%;
  width: 100%;
}
.note-list-nickname[data-v-ef4a323e] {
  margin-top: 3px;
  font-size: 13px;
  line-height: 16px;
}
.note-list-nickname > a[data-v-ef4a323e] {
  color: #757575;
}
.note-list-summary[data-v-ef4a323e] {
  display: -webkit-box;
  margin-top: 7px;
  font-size: 12px;
  line-height: 20px;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  color: #212121;
}
.note-list-info[data-v-ef4a323e] {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 11px;
  line-height: 16px;
}
.note-list-detail[data-v-ef4a323e] {
  color: #00a1d6;
  transition: color 0.2s;
}
.note-list-detail[data-v-ef4a323e]:hover {
  color: #00b5e5;
}
.note-list-time[data-v-ef4a323e] {
  color: #999;
}
.note-list-footer[data-v-ef4a323e] {
  flex-shrink: 0;
  padding: 11px 20px;
}
.note-list-btn[data-v-ef4a323e] {
  text-align: center;
  font-size: 14px;
  line-height: 32px;
  border-radius: 2px;
  background: #00a1d8;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}
.note-list-btn[data-v-ef4a323e]:hover {
  background: #00b5e5;
}
.note-list .level[data-v-ef4a323e] {
  display: inline-block;
  margin-left: 6px;
  width: 22px;
  height: 14px;
  font-size: 0;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.note-list .level.lv0[data-v-ef4a323e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAfCAYAAAC/MX7XAAAACXBIWXMAACE3AAAhNwEzWJ96AAABtElEQVRYw+2Z33GCQBCHPx3fYwfaQUwF2Q5iB5oKQiqIHYR0oB1oBW4JWEG0A6jAPHDOEMJxQGAEZd9k9vb2k9/en2VwPp9po6nqGPCBac2hj4A/or22Bl4aiPsMyLDF4OMGY09GRlZewxNVsWmTwUequgI+aL9FgGdqtKxyVsDjL3BA6IYtRWRbcaEMgO/ksyHdsbDqQBH5oxLbqv5lJpqnJVLADsDWSOytgP8OCEr411PjGc/eRcQ3EvFNUpOC8U7xHyyhGX8EPvOgRWSekKTLPy1h26LsX3IoAx4kJBKaZIqCH1MTBg7/wPE7D9rPUcgcmOWN71KNpy0PzFmeXQb/l/XgPXgP3oP34D14fefr8FbAp6nLQQC8Wnw3l6NxwUNJq8EnqjpLwa8z4DcisrQcNTsrdXXAZ0Kr6pq4H1ZHGUXXAH/IgX/KgV6UbUyYK3AWtLO54uyyiog4Xm9W0hd4MXWerPk6oDG3wNnVpG6pVeubrwO6C9uZFf6a0ACD/X6vqUXlkOyiFFjJigBEpibVbHleBegdccOx9N6flWMWeH9yu3Xw8A65oyHxV4bTPUED3g9uIaILZcxGXgAAAABJRU5ErkJggg==);
}
.note-list .level.lv1[data-v-ef4a323e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAgCAYAAABKHcuvAAAACXBIWXMAACE3AAAhNwEzWJ96AAABvklEQVRYw+2YwXGDMBBFPxnfQwnuwHSQ7wpCByYVhFSQlOBUELuC4Aq8VBAowR1ABeQQMeMwEpYMzkBgb5bl1b7V13olr6oqDNVEJADg9+2XpHhDBReRNwCvN3K/v8NwjTf0vVmo7C4BLAcG7t/S+UJEQgCfmJgtAMQjjf0FQNZQyA7AvS34KKFJbjUFMbJVr6m4nQCkAMorA0sB5JZzSzX/5OA/M4wXtg504DmAgCRVZXWFf+KPBQD2FtBUawUOyYq6SkYHHpMs1B991pJd7U6T3J193l2Yv1VrQK1pW282IpIoafcGPhZ77LLzYwbvXeoz+Aw+g8/gM/gMPnHwX3doktLStpYAksbYcqzgKxFpwkca+LpHb7bDHLPU5QK8Flr13Zsxg69a4N9boD/+8ozbPETEML9/mV49anjWNz0FHxseD1yh92rdQnNPX8PiNcY7Ho8C4OFsbK2Kkq2uAwBfhq9ztcOF4bfXQB9Ihh3j6i51TYG6KPuO8s56iEsLHjlWssj1zHc806Euka5x6aQOAAfLzPoAni0DLpVPXyWji+WaHsApLhP43Ln9Z/BkgtypV1VVXfrDiUBnJJNva5axOcf56QgAAAAASUVORK5CYII=);
}
.note-list .level.lv2[data-v-ef4a323e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAfCAYAAAC/MX7XAAAACXBIWXMAACE3AAAhNwEzWJ96AAABuElEQVRYw+2YwXGCQBSGPx3u0EEYGtAOJAUwGSsQr5xIBykBD/GqVqATG7AEU0Ac0wFWYC6bGQYX2V3BAfGdYFke7xv+93bf9s7nM020+WE7BDbAS8WuT0Dcp7mW1AANYANJk8HrNNuaH7YOsASchgU3rNO5JST11oK/9A34kRekBvViCUyyY33AbYk8YxNogMgLwvxYV3NcCn4CxsArsDLwuRLvjoWvMntXnB9WneMXH4i8YCOud2I9HajmYVZW88M2BNZX5s8iL0gU509ELKmivH1d8LTk/prpvqs7f1Cn1Dub40/wRzarRbGeRGVPuwaeXW06JfX0meNmvX1rpZ6HCTX6jPje4EdRlOyC5/tbch4YNUXqw9y28Qj4BXvwqaRY+W1dx20hwSz8XgI/jbxgmZOuU3Ujcu/itiiBL4LeUc8Zm/E6XpaHowJ4soAC3pEUqX9o3QZEpz6MtMEjL4gVqutCBb5C6NK4ymK8WerXwGSyrwK6ihhl4FqnrQJAK+cNoY1PgWUx9j5/vna5HNBtBhJFgJmAdYV/3T99S5NyEaMM/NmPPzr4sYPcv1ZmA+92BDoFPv4ACkuhDvESidkAAAAASUVORK5CYII=);
}
.note-list .level.lv3[data-v-ef4a323e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAfCAYAAAC/MX7XAAAACXBIWXMAACE3AAAhNwEzWJ96AAABz0lEQVRYw+2YQXaCMBCGf33sZc1GTxC8QXOE9gTaA+TVnqB6ArFcgJ6gegNuUOEEdlHW9AR20diHNiQhBSSP/kteMpmPzEwmGRyPR3RRYZq5AOYA3AbMBw66qwDArCHbt8MOg08atO07PKzmDS/UNXA4YZotATzBDm0A5AbzFgBGZ+AAqCXQj4x4gWGh3AJ4K34bwh7tTScy4v2aWwa+A7ACkBis88nnbjTHJ3z8TjFuWmuOC769MOLNeYgE/E+PK0DT0x8O0+wAYK2Apox4OR8fSY6wdZhmE90cZ8RbVgWPCpNz7rwu+P4irFThuT1BF9aWnd0PFTZVCm5Tjteqf/C+ybHM38SwgbEa/Oe06VuoR33NcbevOR7xW6RuAxNfEzyv0dYIwGuF8YM2Q30iuBzcSyp00GQ/3ib4OEyz6QV8JIA/69ELurW5gYkV8EJofkG5sRl8JIG/k0DP0KKUxY0Rj0peNlwAMQC/BJ4Wb2uMeFuBDV3osvRof8e5E7TKzv9hpxd1QdcS6gpnSuGvEd4q8ICHsJY4gE7O01N6GEIb9+kiHwfPyUcsqKbvAA6abaTf8duZ0Mey4jaG/nNTm/I7k+M2v8As8f062ietvgA+7603WhnaWwAAAABJRU5ErkJggg==);
}
.note-list .level.lv4[data-v-ef4a323e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAgCAYAAABKHcuvAAAACXBIWXMAACE3AAAhNwEzWJ96AAABpElEQVRYw+2Z0W2DQAyGP1Df22zABqEThAHuoRuETNAMUKRKt0AyQekGqcoAZIImm5AJ6MPRNIW7AFJIj4BfQMiy/OHfljmcPM+x1pLIA7wLR80QcudYC55EIfDWUfS1a2+5CTuM/WwzeKd2RxL5QArc9yDfPZABs4b+2+Ja8XeB155AvyOkj5ABsGjgv0DIwOTvAg89UWd8vBMyPqmm3pRP9f4EfJDmGvpogpBOQ0npJOYAkyLWOTsAjy38OwVfImTWWFLlYfIjKxVjWeO/QshdC/9OwQcr9RF8BL/Jza2vphaTseIj+A2Ch0Pt8XnxJZldYgZ0Db4r1tCpYV3dlJ7VfTBNbZX6rPTWMyDQ7OAHIDiuq78W9LfHkyiugddDKxmH/QVXvWiC/zgDnV7zQKRJj8dFUiZbahKek0QgZFiCf9Io5F+OvurBNacXpcQ3wJeh8n/hLYG+jNSrA+q87C2ANoH7LYeZ37rnrwF9mpcmRyf/fEmpHr+uGy8K+h7X2b6A9YpB13WlD8DKlKMJfNzVbxk8HSD3Vv0tVX8mvYFAZ0D8DZyfiSkbuhriAAAAAElFTkSuQmCC);
}
.note-list .level.lv5[data-v-ef4a323e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAfCAYAAAC/MX7XAAAACXBIWXMAACE3AAAhNwEzWJ96AAABzUlEQVRYw+2Z3XGCQBCAPxzeoYPYgXQgqSBjBbGAMDEdmApk5gpQK4jpgA6CHZAKohVcHjwTAip3IBHEfYO53buP2b39wZJS0kgJLA+YAm4N1ic2zZUp8FCT7ajXYHC3RtuOTWC5QAj0Gwbu1WncVtCPNF+2wBjYlNANgUEWvE87ZIyQq5IXpQ98pV/1aI9sSmsKmdPtHXGpEXAPLEtss1a6I2WrSJZq/UuNqXF8KMZPuVSk8ulAc4tPwP/5wrsN306sf0fIcWovgJkmTGhwAQ51wDcVXCzJuFWRblzwXHTrD8s6QZti/KxyA++a2C0++wKIdJsSwLkOcCEXBulsBXx0z9WFjNsc415XY3xGYPW16wohp5cET1TZ6pyp/n42HGT8WzrzMl89AfwjNfsSIcPMO7+tedzJNQS7iyULv0zV6Pub11X9dmsLmHkB/DHoCLhrUgFT1DgMj8D/zbVCxgSWp9z/ELROB7iu1JcbgQs50eh155rwVaDznnJRVz9dQc0PDQFKQO9L1Fpj3GysuwMwi3lz6KoTmNwZLflElInTrZqixJoGdQFe1VpX5VhT6DXp6Y4ZdO6Mh8Bv/fi1gycd5N7a/P6RdDsEHn4D2B6RPSrex/8AAAAASUVORK5CYII=);
}
.note-list .level.lv6[data-v-ef4a323e] {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAgCAYAAABKHcuvAAAACXBIWXMAACE3AAAhNwEzWJ96AAABt0lEQVRYw+2Z0XGDMAyGf+V4DyNkA9gARmgnCJ2gjNARyASlE7Qj0A1gg3YDMoH6gNMWMDZ2IcGF/44XTnb0gYQkh5gZixVRAuAw8a41gJwWC06UAXicaff33XJfN8IZ94488XRDAP7CwGf1hxi4A/AKN3QSOWqqFMC+dYeBggF24EqZGVYXEHb328EdldYrmXtrvQHTSoRU2AsRvc7CSR9AMML+E8CHgb1NhQjHgL+AOfm1oDCAPwOIv58wUQ7gqLCvhH090t62xqf9KOjneNzJD5NvQNFZG2vsnwzs/+IXu5zjk2oDX5s8h30fW96k1cJdcObUoJz1qsU6Qv1Snrcc38BnUz3bzkQFiHjwujK4LxkOHhTtata5d3D1jQcg6sLnEvh2j/6j2OVQLzTwcuhm6Di6DB4o4O8V0M9L69xSzflXJumMLvBtSOa3gfHSBlrnl6a268ZS/bGOrxj/SgZ8xdrEYJSMrY+emt+aeCztf6D0YX+j8NbleGJYTxPjnLeDTqwpJT4SN0dL0cCZ2xhFBi5UolbvLRFM/FL6OAS+taz/GTxbIfep+beU6HDNPvnGqsFcfgH6Shkkl4lXJQAAAABJRU5ErkJggg==);
}

.v-modal-enter {
  animation: v-modal-in 0.2s ease;
}
.v-modal-leave {
  animation: v-modal-out 0.2s ease forwards;
}
@keyframes v-modal-in {
  0% {
    opacity: 0;
  }
}
@keyframes v-modal-out {
  to {
    opacity: 0;
  }
}
.v-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
.van-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 50%;
}
.van-dialog.is-fullscreen {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  height: 100%;
  overflow: auto;
}
.van-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
}
.van-dialog__header {
  padding: 20px 20px 10px;
}
.van-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
}
.van-dialog__headerbtn .van-dialog__close {
  color: #909399;
}
.van-dialog__headerbtn:focus .van-dialog__close,
.van-dialog__headerbtn:hover .van-dialog__close {
  color: #409eff;
}
.van-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.van-dialog__body {
  padding: 30px 20px;
  color: #606266;
  line-height: 24px;
  font-size: 14px;
}
.van-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}
.van-dialog--center {
  text-align: center;
}
.van-dialog--center .van-dialog__body {
  text-align: left;
  text-align: initial;
  padding: 25px 25px 30px;
}
.van-dialog--center .van-dialog__footer {
  text-align: inherit;
}
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.3s;
}
.dialog-fade-leave-active {
  animation: dialog-fade-out 0.3s;
}
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  to {
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
.checkbox[data-v-55ebf259] {
  font-size: 0;
  vertical-align: middle;
  cursor: pointer;
}
.checkbox .box[data-v-55ebf259] {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: #fff;
  box-sizing: border-box;
  vertical-align: middle;
}
.checkbox .box.checked[data-v-55ebf259] {
  border: none;
  background: #26abe2
    url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/icon-check.svg)
    no-repeat center / 9px;
}
.checkbox input[data-v-55ebf259] {
  display: none;
}

.van-dialog__wrapper {
  z-index: 100031 !important;
}
.v-modal {
  z-index: 100030 !important;
}
.protocal-dialog {
  background: #fff;
  border-radius: 4px;
}
.protocal-dialog .van-dialog__header {
  padding: 15px 16px;
  text-align: center;
  border-bottom: 1px solid #f4f4f4;
}
.protocal-dialog .van-dialog__title {
  font-size: 16px;
  font-weight: bold;
  color: #212121;
}
.protocal-dialog .van-dialog__headerbtn {
  right: 16px;
  top: 16px;
}
.protocal-dialog .van-dialog__headerbtn .van-dialog__close {
  font-size: 22px;
  font-weight: bold;
  line-height: 1;
  color: #757575;
}
.protocal-dialog .van-dialog__body {
  padding: 0;
}
.dialog-note-content {
  padding: 24px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  color: #333;
}
.dialog-note-content .checkbox {
  margin-right: 10px;
}
.dialog-note-content p {
  margin-bottom: 14px;
}
.dialog-note-content a {
  color: #00a1d6;
  text-decoration: none;
}
.dialog-note-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.dialog-note-footer .btn {
  width: 130px;
  height: 32px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
}
.dialog-note-footer .btn-cancel {
  line-height: 30px;
  border: 1px solid #e1e1e1;
  color: #000;
}
.dialog-note-footer .btn-confirm {
  line-height: 32px;
  color: #fff;
  background: #20aae2;
}

.van-dialog__wrapper {
  z-index: 100031 !important;
}
.v-modal {
  z-index: 100030 !important;
}
.protocal-dialog.old {
  background: #fff;
  border-radius: 4px;
}
.protocal-dialog.old .van-dialog__header {
  padding: 15px 16px;
  text-align: left;
}
.protocal-dialog.old .van-dialog__title {
  font-size: 16px;
  font-weight: bold;
  color: #212121;
}
.protocal-dialog.old .van-dialog__headerbtn {
  right: 16px;
  top: 16px;
}
.protocal-dialog.old .van-dialog__headerbtn .van-dialog__close {
  font-size: 22px;
  font-weight: bold;
  line-height: 1;
  color: #757575;
}
.protocal-dialog.old .van-dialog__body {
  padding: 0;
}
.protocal-dialog.old .van-dialog__body .dialog-note-content {
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  color: #333;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-explain-container {
  display: flex;
  align-items: center;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain {
  margin-right: 2px;
  font-size: 14px;
  color: #757575;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain-popover {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain-popover:hover
  .explain-popover {
  opacity: 1;
  transform: translate(-50%, -100%);
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain-popover
  .explain-icon {
  vertical-align: text-bottom;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain-popover
  .explain-popover {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 50%;
  width: 210px;
  height: 42px;
  border: 1px solid #e3e5e7;
  font-size: 14px;
  color: #61666d;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -90%);
  transition: 0.2s;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-preview-container {
  width: 100%;
  border: 1px solid #e3e5e7;
  padding: 0 4px;
  border-radius: 10px;
  margin: 12px 0;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-preview-container
  .note-preview-scroll-box {
  max-height: 235px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px 50px 20px 0;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-preview-container
  .note-preview-scroll-box::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 16px;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-preview-container
  .note-preview-scroll-box::-webkit-scrollbar {
  width: 4px;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-preview-container
  .note-preview-scroll-box::-webkit-scrollbar-thumb {
  border-radius: 16px;
  background: #f1f2f3;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-protocol-container {
  margin-bottom: 14px;
  font-size: 12px;
  color: #757575;
}
.protocal-dialog.old
  .van-dialog__body
  .dialog-note-content
  .note-protocol-container
  .note-protocol
  .protocol-item {
  color: #00a1d6;
  text-decoration: none;
}
.protocal-dialog.old .van-dialog__body .dialog-note-footer {
  display: flex;
  justify-content: end;
  margin-top: 24px;
}
.protocal-dialog.old .van-dialog__body .dialog-note-footer .btn {
  width: 130px;
  height: 32px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
}
.protocal-dialog.old .van-dialog__body .dialog-note-footer .btn-cancel {
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  margin-right: 12px;
  color: #000;
  line-height: 30px;
}
.protocal-dialog.old .van-dialog__body .dialog-note-footer .btn-confirm {
  border-radius: 6px;
  line-height: 32px;
  color: #fff;
  background: #20aae2;
}

#header-v3,
#app {
  background-color: #ffffff;
 }
#bilibili-player embed {
  width: 100%;
  height: 100%;
}
#bilibili-player .player {
  height: 100%;
}
#bilibili-player.mode-webscreen {
  position: fixed;
  border-radius: 0;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.v-wrap {
  max-width: 1984px;
  min-width: 988px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: #fff;
}
.v-wrap .video-toolbar {
  position: relative;
  margin-top: 16px;
}
.v-wrap .video-info {
  height: 96px;
  padding-top: 27px;
  box-sizing: border-box;
}
.v-wrap .up-info {
  box-sizing: border-box;
  height: 96px;
  padding-top: 15px;
  padding-bottom: 12px;
  display: flex;
}
.v-wrap .video-desc {
  margin-top: 16px;
}
.v-wrap .s_tag {
  position: relative;
  clear: both;
  margin-top: 16px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e9ef;
}
.v-wrap .activity-m {
  margin-top: 20px;
}
.v-wrap .r-con {
  width: 320px;
  flex: none;
  margin-left: 30px;
}
.v-wrap .danmaku-box {
  margin-bottom: 20px;
}
.v-wrap .danmaku-box.outslide-player {
  margin-bottom: 0;
}
.v-wrap .danmaku-box.outslide-player .danmaku-wrap {
  display: none;
}
.v-wrap .danmaku-wrap {
  min-height: 46px;
  background: #f4f4f4;
}
.v-wrap #comment {
  margin-top: 20px;
  z-index: 0;
  position: relative;
}
.v-wrap #multi_page {
  margin-bottom: 20px;
}
.v-wrap #live_recommand_report {
  margin-top: 25px;
  padding-left: 0;
}
.v-wrap #bannerAd {
  width: 100% !important;
  max-width: 1279px;
  max-height: 106px;
  border-radius: 2px;
}
.v-wrap #bannerAd img {
  border-radius: 2px;
}
.v-wrap #right-bottom-banner {
  margin-top: 25px;
  border-radius: 2px;
  width: 100%;
  height: 160px;
  max-height: 160px;
}
.v-wrap #right-bottom-banner span {
  position: absolute;
  bottom: 3px;
  font-size: 12px;
  left: 10px;
  color: #fff;
  text-shadow: 1px 1px 3px #000;
}
.v-wrap #right-bottom-banner img {
  border-radius: 2px;
}
.v-wrap #right-bottom-banner .gg-pic {
  display: none;
}
body.player-mode-blackmask #heimu {
  z-index: 1002;
}
body.player-mode-blackmask .stardust-video {
  z-index: 129 !important;
}
#comment .bb-comment .no-login .baffle {
  z-index: 10;
}
.stardust-video {
  height: 50px;
  z-index: 200 !important;
}
.stardust-video .bili-wrapper {
  max-width: 1660px;
  min-width: 988px;
  width: auto;
  margin: 0 auto;
}
.webscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
@media (max-width: 1341px), (max-height: 715px) {
  #v_upinfo .u-info .desc {
    max-width: 360px;
  }
}
@media screen and (max-width: 1124px) {
  #app {
    width: fit-content;
  }
  #internationalHeader {
    max-width: 1124px;
  }
}
.note-bar-btn {
  color: #43494c;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  background: #ebebf2;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;
}
.note-bar-btn:hover {
  background: #ccccde;
}
.bili-note {
  z-index: 100001;
}
.bili-note .ql-image-preview .img-preview {
  width: 100%;
  height: 100%;
}
.active-note {
  z-index: 100002;
}
.note-list {
  position: absolute;
  z-index: 100000;
  width: 362px;
}

.honor[data-v-3856b1c4] {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  height: 24px;
  border-radius: 2px;
  padding: 0px 6px;
}
.honor .honor-icon[data-v-3856b1c4] {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.honor .honor-arrow[data-v-3856b1c4] {
  width: 6px;
  height: 10px;
  margin-left: 4px;
}
.honor.honor-rank[data-v-3856b1c4] {
  color: #ff6699;
  background-color: rgba(255, 102, 153, 0.1);
}
.honor.honor-history[data-v-3856b1c4] {
  color: #ff7f24;
  background-color: rgba(255, 127, 36, 0.1);
}
.honor.honor-weekly[data-v-3856b1c4] {
  color: #ffb027;
  background-color: rgba(255, 176, 39, 0.1);
}

.video-info-detail[data-v-b1eaede6] {
  font-size: 13px;
  color: #9499a0;
   display: flex;
  align-items: center;
  height: 24px;
  line-height: 18px;
  position: relative;
  overflow: hidden;
}
.video-info-detail .video-info-detail-list[data-v-b1eaede6] {
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
}
.video-info-detail .video-info-detail-list .item[data-v-b1eaede6] {
  flex-shrink: 0;
  margin-right: 12px;
  overflow: hidden;
}
.video-info-detail .video-info-detail-list .item[data-v-b1eaede6]:last-child {
  margin-right: 0;
}
.video-info-detail .video-info-detail-list .item .item-text[data-v-b1eaede6] {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.video-info-detail .video-info-detail-list .single-ellipsis[data-v-b1eaede6] {
  flex-shrink: initial;
  margin-right: 0;
}
.video-info-detail .video-info-detail-list .interactive[data-v-b1eaede6] {
  display: flex;
  align-items: center;
  height: 24px;
  font-size: 13px;
  color: #61666d;
 }
.video-info-detail
  .video-info-detail-list
  .interactive
  .interactive-icon[data-v-b1eaede6] {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}
.video-info-detail .video-info-detail-list .view[data-v-b1eaede6],
.video-info-detail .video-info-detail-list .dm[data-v-b1eaede6] {
  display: inline-flex;
  align-items: center;
}
.video-info-detail .video-info-detail-list .view .view-icon[data-v-b1eaede6],
.video-info-detail .video-info-detail-list .dm .view-icon[data-v-b1eaede6],
.video-info-detail .video-info-detail-list .view .dm-icon[data-v-b1eaede6],
.video-info-detail .video-info-detail-list .dm .dm-icon[data-v-b1eaede6] {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.video-info-detail .video-info-detail-list .pubdate-ip[data-v-b1eaede6] {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 24px;
  font-size: 0px;
}
.video-info-detail
  .video-info-detail-list
  .pubdate-ip
  .pubdate
  .pubdate-icon[data-v-b1eaede6] {
  margin-right: 4px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.video-info-detail
  .video-info-detail-list
  .pubdate-ip
  .pubdate
  .pubdate-text[data-v-b1eaede6] {
  font-size: 13px;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.video-info-detail .video-info-detail-list .pubdate-ip .ip[data-v-b1eaede6] {
  font-size: 13px;
  margin-left: 4px;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.video-info-detail .video-info-detail-list .copyright[data-v-b1eaede6] {
  display: inline-flex;
  align-items: center;
}
.video-info-detail .video-info-detail-list .copyright i[data-v-b1eaede6] {
  font-size: 16px;
  margin-right: 2px;
  color: #fd676f;
  width: 16px;
}
.video-info-detail .video-info-detail-list .argue[data-v-b1eaede6] {
  font-size: 13px;
  border-radius: 2px;
  color: #e58900;
   padding: 0px 6px;
  height: 24px;
  line-height: 24px;
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.video-info-detail .video-info-detail-list .argue[data-v-b1eaede6]:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px;
   opacity: 0.2;
}
.video-info-detail .video-info-detail-list .argue i[data-v-b1eaede6] {
  color: #e58900;
   font-size: 16px;
  width: 14px;
  margin-right: 4px;
  transform: translateY(1px);
}
.video-info-detail .show-more[data-v-b1eaede6] {
  position: absolute;
  right: 0;
  cursor: pointer;
}
.video-info-detail .show-more .show-more-btn[data-v-b1eaede6] {
  display: flex;
  width: 16px;
  height: 16px;
  transition: all 0.3s;
}
.video-info-detail
  .show-more
  .show-more-btn
  .show-more-btn-icon[data-v-b1eaede6] {
  width: 100%;
  height: 100%;
}
.video-info-detail .show-more-hover[data-v-b1eaede6] {
  background-color: #e3e5e7;
 }
.video-info-detail .show-more-hover .show-more-btn[data-v-b1eaede6] {
  transform: rotate(180deg);
}
.video-info-detail-overflow .video-info-detail-list[data-v-b1eaede6] {
  margin-right: calc(16px + 23px);
}

.van-video-info-detail {
  background: initial;
  border: none;
  padding: initial;
  border-radius: initial;
  box-shadow: initial;
  box-sizing: border-box;
}
.van-video-info-detail .video-info-detail-dropdown {
  background-color: #ffffff;
   border: 1px solid #e3e5e7;
   padding: 10px 16px;
  border-radius: 4px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
  height: auto;
  position: absolute;
  top: -6px;
  left: -11px;
  color: #9499a0;
   font-size: 13px;
}
.van-video-info-detail .video-info-detail-dropdown .video-info-detail-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .item {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 12px;
  overflow: hidden;
  line-height: 32px;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .item:last-child {
  margin-right: 0;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .interactive {
  font-size: 13px;
  color: #61666d;
 }
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .interactive
  .interactive-icon {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .view
  .view-icon,
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .dm
  .view-icon,
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .view
  .dm-icon,
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .dm
  .dm-icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .pubdate-ip
  .pubdate {
  display: inline-flex;
  align-items: center;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .pubdate-ip
  .pubdate
  .pubdate-icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .pubdate-ip
  .pubdate
  .pubdate-text {
  font-size: 13px;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .pubdate-ip
  .ip {
  font-size: 13px;
  margin-left: 4px;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .copyright
  i {
  font-size: 16px;
  margin-right: 2px;
  color: #fd676f;
  width: 16px;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .argue {
  font-size: 13px;
  border-radius: 2px;
  color: #e58900;
   padding: 0px 6px;
  height: 24px;
  line-height: 24px;
  position: relative;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .argue:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px;
   opacity: 0.2;
}
.van-video-info-detail
  .video-info-detail-dropdown
  .video-info-detail-list
  .argue
  i {
  color: #e58900;
   font-size: 16px;
  width: 14px;
  margin-right: 4px;
}

.video-info-container[data-v-4f1c0915] {
  height: 104px;
  box-sizing: border-box;
  padding-top: 22px;
}
.video-info-container .video-title[data-v-4f1c0915] {
  font-size: 20px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
   line-height: 28px;
  margin-bottom: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-info-container .video-title[data-v-4f1c0915] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-info-container .video-title .video-title-href[data-v-4f1c0915] {
  display: inline-block;
  color: #18191c;
   max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.video-info-container .video-title .video-title-href[data-v-4f1c0915]:hover {
  color: #00a1d6;
}
.video-info-container .video-title.rm-space[data-v-4f1c0915] {
  display: flex;
}
@media (min-width: 1681px) {
  .video-info-container[data-v-4f1c0915] {
    height: 108px;
    padding-top: 22px;
  }
  .video-info-container .video-title[data-v-4f1c0915] {
    font-size: 22px;
    line-height: 34px;
  }
}

.svga-container {
  position: absolute;
  z-index: 99999;
}
.svga-container.svga-top {
  width: 120px;
  height: 120px;
}
.svga-container.svga-center {
  width: 92px;
  height: 92px;
}
.svga-container.svga-fireworks {
  width: 120px;
  height: 120px;
}

.selfdef-triple-anime[data-v-2dddfd02] {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 100000;
  transform-origin: bottom center;
}
.selfdef-triple-anime.long-click[data-v-2dddfd02] {
  left: -32px;
  top: -94px;
}
.selfdef-triple-anime.long-click .svga-fireworks[data-v-2dddfd02] {
  position: absolute;
  left: -14px;
  top: -12px;
}
.selfdef-triple-anime.triple-finish[data-v-2dddfd02] {
  left: -32px;
  top: -100px;
}
.selfdef-triple-anime.triple-finish .svga-fireworks[data-v-2dddfd02] {
  position: absolute;
  left: -14px;
  top: -6px;
}
.selfdef-triple-anime.shake-anime[data-v-2dddfd02] {
  animation: shake 1500ms ease-in-out infinite;
}
.selfdef-triple-anime .selfdef-triple-anime-longclick[data-v-2dddfd02],
.selfdef-triple-anime .selfdef-triple-anime-finish[data-v-2dddfd02] {
  width: 96px;
  height: 96px;
}
.selfdef-triple-anime
  .selfdef-triple-anime-longclick.init-scale[data-v-2dddfd02] {
  transform: scale(0.25);
}
.selfdef-triple-anime .selfdef-triple-anime-finish-text[data-v-2dddfd02] {
  position: relative;
  padding: 11px 12px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  background: #000000;
  line-height: 22px;
}
.selfdef-triple-anime
  .selfdef-triple-anime-finish-text[data-v-2dddfd02]::after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 10px solid #000000;
  border-bottom: 7px solid transparent;
  left: -8px;
  top: 16px;
}

.video-like .shake-anime {
  animation: shake 1500ms ease-in-out infinite;
}

.video-share-wrap[data-v-ea5a070a] {
  width: auto;
}
.video-share-wrap .video-share[data-v-ea5a070a] {
  display: flex;
  align-items: center;
}
.video-share-wrap .video-share .video-share-info[data-v-ea5a070a] {
  position: relative;
  width: 90px;
  height: 28px;
  line-height: 28px;
}
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text[data-v-ea5a070a] {
  position: absolute;
}
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.out-share-enter-active[data-v-ea5a070a],
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.over-share-enter-active[data-v-ea5a070a] {
  transition: all 0.5s;
}
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.out-share-leave-active[data-v-ea5a070a],
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.over-share-leave-active[data-v-ea5a070a] {
  transition: all 0.3s;
}
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.out-share-enter[data-v-ea5a070a],
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.out-share-leave-to[data-v-ea5a070a],
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.over-share-enter[data-v-ea5a070a],
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.over-share-leave-to[data-v-ea5a070a] {
  opacity: 0;
}
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.out-share-leave-to[data-v-ea5a070a],
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.over-share-enter[data-v-ea5a070a] {
  transform: translateY(100%);
}
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.out-share-enter[data-v-ea5a070a],
.video-share-wrap
  .video-share
  .video-share-info
  .video-share-info-text.over-share-leave-to[data-v-ea5a070a] {
  transform: translateY(-100%);
}

.video-share-popover {
  padding: 0px;
  z-index: 2000 !important;
  border: 1px solid #f1f2f3;
   box-sizing: border-box;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
}
.video-share-popover .video-share-dropdown {
  display: flex;
  flex-direction: column;
}
.video-share-popover .video-share-dropdown .dropdown-top {
  display: flex;
  padding: 30px 30px 12px 30px;
  background-color: #ffffff;
 }
.video-share-popover .video-share-dropdown .dropdown-top .dropdown-top-left {
  padding-right: 25px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .video-capture {
  position: relative;
  width: 259px;
  height: 145px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #f1f2f3;
   margin-bottom: 10px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .video-capture
  .video-capture-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .video-capture
  .inner-video-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(33, 33, 33, 0.7) 100%
  );
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .video-capture
  .inner-video-title
  .title-text {
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
    line-height: 18px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 8px;
  box-sizing: border-box;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-left {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #61666d;
 }
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-left
  > label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-left
  > label
  #check-timestamp {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid #c9ccd0;
   border-radius: 2px;
  margin-right: 6px;
  background-color: #ffffff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-left
  > label
  #check-timestamp:checked {
  border-width: 0px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-left
  > label
  #check-timestamp:checked::after {
  content: "";
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iIzAwQUVFQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMDAwMDEgMTAuOTk4OUM0LjcwODYzIDExLjAxMTggNC40MTIxMyAxMC45MTIxIDQuMiAxMC43TDIuMyA4LjhDMS45IDguMyAxLjkgNy43IDIuMyA3LjNDMi43IDYuOSAzLjQgNi45IDMuOCA3LjNMNSA4LjVMMTAuMiAzLjNDMTAuNiAyLjkgMTEuMyAyLjkgMTEuNyAzLjNDMTIuMSAzLjcgMTIuMSA0LjQgMTEuNyA0LjhMNS44IDEwLjdDNS41ODc4OCAxMC45MTIxIDUuMjkxMzkgMTEuMDExOCA1LjAwMDAxIDEwLjk5ODlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-left
  > label
  .timestamp {
  padding: 0 3px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-right {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-right
  .copy-link {
  position: relative;
  height: 30px;
  line-height: 30px;
  background-color: #00aeec;
     border-radius: 6px;
  border: 0;
  cursor: pointer;
  font-size: 13px;
  padding: 0px 6px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-left
  .capture-bar
  .bar-right
  .copy-link:hover {
  background-color: #019cd3;
}
.video-share-popover .video-share-dropdown .dropdown-top .dropdown-top-right {
  text-align: center;
  padding-left: 25px;
  box-shadow: -0.5px 0 0 #f1f2f3;
 }
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-right
  .qrcode-box {
  width: 145px;
  height: 145px;
  background: #ffffff;
  border: 1px solid #f1f2f3;
   box-sizing: border-box;
  border-radius: 6px;
  padding: 4px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-right
  .qrcode-box
  .van-qrcode {
  width: 135px;
  height: 135px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-top
  .dropdown-top-right
  .qrcode-tips {
  color: #18191c;
   font-size: 15px;
  line-height: 21px;
  margin-top: 4px;
}
.video-share-popover .video-share-dropdown .dropdown-bottom {
  padding: 20px 18px;
  background-color: #f6f7f8;
   color: #18191c;
 }
.video-share-popover .video-share-dropdown .dropdown-bottom .share-btns {
  display: flex;
  flex-wrap: wrap;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-bottom
  .share-btns
  .share-btn {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 60px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-bottom
  .share-btns
  .share-btn
  .share-btn-icon {
  width: 36px;
  height: 36px;
  margin-bottom: 4px;
}
.video-share-popover
  .video-share-dropdown
  .dropdown-bottom
  .share-btns
  .share-btn
  .share-btn-text {
  font-size: 12px;
  line-height: 20px;
}

.triple-oldfan-entry[data-v-4ef3ea3d] {
  position: relative;
  width: 28px;
  height: 28px;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
}
.triple-oldfan-entry .oldfan-icon[data-v-4ef3ea3d] {
  width: 32px;
  height: 32px;
}
.triple-oldfan-entry .oldfan-hover-panel[data-v-4ef3ea3d] {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 99;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  background-color: #ffffff;
   border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.triple-oldfan-entry .oldfan-hover-panel .panel-main[data-v-4ef3ea3d] {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.triple-oldfan-entry
  .oldfan-hover-panel
  .panel-main
  .oldfan-panel-icon[data-v-4ef3ea3d] {
  width: 32px;
  height: 32px;
}
.triple-oldfan-entry
  .oldfan-hover-panel
  .panel-main
  .panel-info[data-v-4ef3ea3d] {
  display: flex;
  align-items: center;
  margin-left: 9px;
  white-space: nowrap;
}
.triple-oldfan-entry
  .oldfan-hover-panel
  .panel-main
  .panel-info
  .panel-info-txt[data-v-4ef3ea3d] {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.triple-oldfan-entry
  .oldfan-hover-panel
  .panel-main
  .panel-info
  .panel-info-txt
  .txt-at-top[data-v-4ef3ea3d] {
  line-height: 17px;
  font-size: 12px;
  color: #18191c;
 }
.triple-oldfan-entry
  .oldfan-hover-panel
  .panel-main
  .panel-info
  .panel-info-txt
  .txt-at-bottom[data-v-4ef3ea3d] {
  line-height: 14px;
  font-size: 10px;
  color: #9499a0;
 }
.triple-oldfan-entry
  .oldfan-hover-panel
  .panel-main
  .panel-info
  .rightarrow-icon[data-v-4ef3ea3d] {
  margin-left: 12px;
  width: 14px;
  height: 14px;
}
.triple-oldfan-entry .oldfan-hover-panel .split-line[data-v-4ef3ea3d] {
  width: 1px;
  height: 14px;
  background-color: #e3e5e7;
   margin: 0 8px;
}
.triple-oldfan-entry .oldfan-hover-panel .close-panel-btn[data-v-4ef3ea3d] {
  display: flex;
  width: 14px;
  height: 14px;
  padding-right: 6px;
  cursor: pointer;
}
.triple-oldfan-entry
  .oldfan-hover-panel
  .close-panel-btn
  .close-icon[data-v-4ef3ea3d] {
  width: 100%;
  height: 100%;
}
.triple-oldfan-entry
  .oldfan-hover-panel.oldfantrans-enter-active[data-v-4ef3ea3d],
.triple-oldfan-entry
  .oldfan-hover-panel.oldfantrans-leave-active[data-v-4ef3ea3d] {
  transition: all 0.3s;
}
.triple-oldfan-entry .oldfan-hover-panel.oldfantrans-enter[data-v-4ef3ea3d],
.triple-oldfan-entry .oldfan-hover-panel.oldfantrans-leave-to[data-v-4ef3ea3d] {
  max-width: 32px;
}
.triple-oldfan-entry .oldfan-hover-panel.oldfantrans-enter-to[data-v-4ef3ea3d],
.triple-oldfan-entry .oldfan-hover-panel.oldfantrans-leave[data-v-4ef3ea3d] {
  max-width: 279px;
}

.checkbox[data-v-17bd1a54] {
  font-size: 0;
  vertical-align: middle;
  cursor: pointer;
}
.checkbox .box[data-v-17bd1a54] {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: #fff;
  box-sizing: border-box;
  vertical-align: middle;
}
.checkbox .box.checked[data-v-17bd1a54] {
  border: none;
  background: #26abe2
    url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/note_checkbox_checked.svg)
    no-repeat center / 9px;
}
.checkbox input[data-v-17bd1a54] {
  display: none;
}

.van-dialog__wrapper {
  z-index: 100031 !important;
}
.v-modal {
  z-index: 100030 !important;
}
.protocal-dialog.new {
  background: #ffffff;
   border-radius: 4px;
}
.protocal-dialog.new .van-dialog__header {
  padding: 15px 16px;
  text-align: left;
}
.protocal-dialog.new .van-dialog__title {
  font-size: 16px;
  font-weight: bold;
  color: #18191c;
 }
.protocal-dialog.new .van-dialog__headerbtn {
  right: 16px;
  top: 16px;
}
.protocal-dialog.new .van-dialog__headerbtn .van-dialog__close {
  font-size: 22px;
  font-weight: bold;
  line-height: 1;
  color: #61666d;
 }
.protocal-dialog.new .van-dialog__body {
  padding: 0;
}
.protocal-dialog.new .van-dialog__body .dialog-note-content {
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  color: #18191c;
 }
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-explain-container {
  display: flex;
  align-items: center;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain {
  margin-right: 2px;
  font-size: 14px;
  color: #757575;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain-popover {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain-popover:hover
  .explain-popover {
  opacity: 1;
  transform: translate(-50%, -100%);
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain-popover
  .explain-icon {
  vertical-align: text-bottom;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-explain-container
  .note-explain-popover
  .explain-popover {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 50%;
  width: 210px;
  height: 42px;
  border: 1px solid #e3e5e7;
  font-size: 14px;
  color: #61666d;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -90%);
  transition: 0.2s;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-preview-container {
  border: 1px solid #e3e5e7;
   padding: 0 4px;
  border-radius: 10px;
  margin: 12px 0;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-preview-container
  .note-preview-scroll-box {
  max-height: 235px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px 50px 20px 0;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-preview-container
  .note-preview-scroll-box::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 16px;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-preview-container
  .note-preview-scroll-box::-webkit-scrollbar {
  width: 4px;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-preview-container
  .note-preview-scroll-box::-webkit-scrollbar-thumb {
  border-radius: 16px;
  background: #f1f2f3;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-protocol-container {
  margin-bottom: 14px;
  font-size: 12px;
  color: #757575;
}
.protocal-dialog.new
  .van-dialog__body
  .dialog-note-content
  .note-protocol-container
  .note-protocol
  .protocol-item {
  color: #00a1d6;
  text-decoration: none;
}
.protocal-dialog.new .van-dialog__body .dialog-note-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}
.protocal-dialog.new .van-dialog__body .dialog-note-footer .btn {
  width: 130px;
  height: 32px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
}
.protocal-dialog.new .van-dialog__body .dialog-note-footer .btn-cancel {
  margin-right: 12px;
  border: 1px solid #9499a0;
   border-radius: 6px;
  color: #18191c;
   line-height: 30px;
}
.protocal-dialog.new .van-dialog__body .dialog-note-footer .btn-confirm {
  border-radius: 6px;
    line-height: 32px;
  background: #00aeec;
 }

.van-dialog__wrapper {
  z-index: 100031 !important;
}
.v-modal {
  z-index: 100030 !important;
}
.protocal-dialog {
  background: #ffffff;
   border-radius: 4px;
}
.protocal-dialog .van-dialog__header {
  padding: 15px 16px;
  text-align: center;
  border-bottom: 1px solid #e3e5e7;
 }
.protocal-dialog .van-dialog__title {
  font-size: 16px;
  font-weight: bold;
  color: #18191c;
 }
.protocal-dialog .van-dialog__headerbtn {
  right: 16px;
  top: 16px;
}
.protocal-dialog .van-dialog__headerbtn .van-dialog__close {
  font-size: 22px;
  font-weight: bold;
  line-height: 1;
  color: #61666d;
 }
.protocal-dialog .van-dialog__body {
  padding: 0;
}
.dialog-note-content {
  padding: 24px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  color: #18191c;
 }
.dialog-note-content .checkbox {
  margin-right: 10px;
}
.dialog-note-content p {
  margin-bottom: 14px;
}
.dialog-note-content a {
  color: #00aeec;
   text-decoration: none;
}
.dialog-note-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.dialog-note-footer .btn {
  width: 130px;
  height: 32px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
}
.dialog-note-footer .btn-cancel {
  line-height: 30px;
  border: 1px solid #9499a0;
   color: #18191c;
 }
.dialog-note-footer .btn-confirm {
  line-height: 32px;
    background: #00aeec;
 }

.status-bar {
  font-size: 12px;
  color: #909098;
}
.status-bar--content {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
}
.status-bar .bili-note-iconfont {
  display: inline-block;
  margin-right: 3px;
}
.status-bar--error {
  color: #e02020;
}
.status-bar--warning {
  color: #e6a23c;
}
.status-bar--success {
  color: #909098;
}
.status-bar .icon-updating {
  animation: spin 1s linear infinite;
}
.status-bar .text {
  vertical-align: top;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  width: 100%;
}
.status-bar .text .text-msg {
  margin-right: 5px;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
@font-face {
  font-family: bili-note-iconfont;
  src: url(data:application/vnd.ms-fontobject;base64,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bm90ZS1pY29uZm9udFJlZ3VsYXJiaWxpLW5vdGUtaWNvbmZvbnRiaWxpLW5vdGUtaWNvbmZvbnRWZXJzaW9uIDEuMGJpbGktbm90ZS1pY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAAoAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdAAKAGIAaQBsAGkALQBuAG8AdABlAC0AaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAYgBpAGwAaQAtAG4AbwB0AGUALQBpAGMAbwBuAGYAbwBuAHQAYgBpAGwAaQAtAG4AbwB0AGUALQBpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwAGIAaQBsAGkALQBuAG8AdABlAC0AaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgALY2FwdHVyZS1hcHAIa2V5Ym9hcmQEdW5kbwRyZWRvD2ljb25fc2NyZWVuc2hvdAtpY29uX2ZsYWdfTAtpY29uX2ZsYWdfcw1pY29uX25vdGVib29rDGljb25fbG9hZGluZw5pY29uX3dhcm5pbmcwMgtpY29uX3Rvbm90ZRJpY29uZm9udF9pY29uX3N5bmMUaW9uZm9udF9pY29uX3dhcm5pbmcMaWNvbl90dWRkaW5nHWljb25mb250X2ljb25fYmFja2dyb3VuZGNvbG9yGGljb25mb250X2ljb25fZm9udGNvbG9yMRBpY29uX3JlZnJlc2h0aW1lG2ljb25mb250X2ljb25fZm9udGNvbG9yLW1pbhJpY29uZm9udF9pY29uX2JvbGQZaWNvbmZvbnRfaWNvbl9hbGlnbmNlbnRlchRpY29uZm9udF9pY29uX2Fycm93cxNpY29uZm9udF9pY29uX2Nsb3NlDWljb25fYXJyZXN0MDIVaWNvbmZvbnRfaWNvbl9jcm9zc2VkFGljb25mb250X2ljb25faXRhbGljFWljb25mb250X2ljb25fcGljdHVyZRJpY29uZm9udF9pY29uX3NhdmUXaWNvbmZvbnRfaWNvbl9mb250Y29sb3IVaWNvbmZvbnRfaWNvbl9hbGlnbmVkDWljb25fbGFqaXRvbmcdaWNvbmZvbnRfaWNvbl9sZWZ0anVzdGluZnlpbmcSaWNvbmZvbnRfaWNvbl9saW5rF2ljb25mb250X2ljb25fdW5vcmRlcmVkFWljb25mb250X2ljb25fc3VnZ2VzdBdpY29uZm9udF9pY29uX3VuZGVybGluZRRpY29uZm9udF9pY29uX215bm90ZQAAAAAA);
  src: url(data:application/vnd.ms-fontobject;base64,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bm90ZS1pY29uZm9udFJlZ3VsYXJiaWxpLW5vdGUtaWNvbmZvbnRiaWxpLW5vdGUtaWNvbmZvbnRWZXJzaW9uIDEuMGJpbGktbm90ZS1pY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAAoAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdAAKAGIAaQBsAGkALQBuAG8AdABlAC0AaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAYgBpAGwAaQAtAG4AbwB0AGUALQBpAGMAbwBuAGYAbwBuAHQAYgBpAGwAaQAtAG4AbwB0AGUALQBpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwAGIAaQBsAGkALQBuAG8AdABlAC0AaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgALY2FwdHVyZS1hcHAIa2V5Ym9hcmQEdW5kbwRyZWRvD2ljb25fc2NyZWVuc2hvdAtpY29uX2ZsYWdfTAtpY29uX2ZsYWdfcw1pY29uX25vdGVib29rDGljb25fbG9hZGluZw5pY29uX3dhcm5pbmcwMgtpY29uX3Rvbm90ZRJpY29uZm9udF9pY29uX3N5bmMUaW9uZm9udF9pY29uX3dhcm5pbmcMaWNvbl90dWRkaW5nHWljb25mb250X2ljb25fYmFja2dyb3VuZGNvbG9yGGljb25mb250X2ljb25fZm9udGNvbG9yMRBpY29uX3JlZnJlc2h0aW1lG2ljb25mb250X2ljb25fZm9udGNvbG9yLW1pbhJpY29uZm9udF9pY29uX2JvbGQZaWNvbmZvbnRfaWNvbl9hbGlnbmNlbnRlchRpY29uZm9udF9pY29uX2Fycm93cxNpY29uZm9udF9pY29uX2Nsb3NlDWljb25fYXJyZXN0MDIVaWNvbmZvbnRfaWNvbl9jcm9zc2VkFGljb25mb250X2ljb25faXRhbGljFWljb25mb250X2ljb25fcGljdHVyZRJpY29uZm9udF9pY29uX3NhdmUXaWNvbmZvbnRfaWNvbl9mb250Y29sb3IVaWNvbmZvbnRfaWNvbl9hbGlnbmVkDWljb25fbGFqaXRvbmcdaWNvbmZvbnRfaWNvbl9sZWZ0anVzdGluZnlpbmcSaWNvbmZvbnRfaWNvbl9saW5rF2ljb25mb250X2ljb25fdW5vcmRlcmVkFWljb25mb250X2ljb25fc3VnZ2VzdBdpY29uZm9udF9pY29uX3VuZGVybGluZRRpY29uZm9udF9pY29uX215bm90ZQAAAAAA#iefix)
      format("embedded-opentype"),
    url("data:application/x-font-woff2;charset=utf-8;base64,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")
      format("woff2"),
    url(data:font/woff;base64,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)
      format("woff"),
    url(data:font/ttf;base64,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LQBpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgBiAGkAbABpAC0AbgBvAHQAZQAtAGkAYwBvAG4AZgBvAG4AdABiAGkAbABpAC0AbgBvAHQAZQAtAGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAYgBpAGwAaQAtAG4AbwB0AGUALQBpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAAtjYXB0dXJlLWFwcAhrZXlib2FyZAR1bmRvBHJlZG8PaWNvbl9zY3JlZW5zaG90C2ljb25fZmxhZ19MC2ljb25fZmxhZ19zDWljb25fbm90ZWJvb2sMaWNvbl9sb2FkaW5nDmljb25fd2FybmluZzAyC2ljb25fdG9ub3RlEmljb25mb250X2ljb25fc3luYxRpb25mb250X2ljb25fd2FybmluZwxpY29uX3R1ZGRpbmcdaWNvbmZvbnRfaWNvbl9iYWNrZ3JvdW5kY29sb3IYaWNvbmZvbnRfaWNvbl9mb250Y29sb3IxEGljb25fcmVmcmVzaHRpbWUbaWNvbmZvbnRfaWNvbl9mb250Y29sb3ItbWluEmljb25mb250X2ljb25fYm9sZBlpY29uZm9udF9pY29uX2FsaWduY2VudGVyFGljb25mb250X2ljb25fYXJyb3dzE2ljb25mb250X2ljb25fY2xvc2UNaWNvbl9hcnJlc3QwMhVpY29uZm9udF9pY29uX2Nyb3NzZWQUaWNvbmZvbnRfaWNvbl9pdGFsaWMVaWNvbmZvbnRfaWNvbl9waWN0dXJlEmljb25mb250X2ljb25fc2F2ZRdpY29uZm9udF9pY29uX2ZvbnRjb2xvchVpY29uZm9udF9pY29uX2FsaWduZWQNaWNvbl9sYWppdG9uZx1pY29uZm9udF9pY29uX2xlZnRqdXN0aW5meWluZxJpY29uZm9udF9pY29uX2xpbmsXaWNvbmZvbnRfaWNvbl91bm9yZGVyZWQVaWNvbmZvbnRfaWNvbl9zdWdnZXN0F2ljb25mb250X2ljb25fdW5kZXJsaW5lFGljb25mb250X2ljb25fbXlub3RlAAAAAAA=)
      format("truetype"),
    url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/iconfont.164d1555.svg#bili-note-iconfont)
      format("svg");
}
.bili-note-iconfont {
  font-family: bili-note-iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconcapture-app:before {
  content: "\E609";
}
.iconkeyboard:before {
  content: "\E607";
}
.iconundo:before {
  content: "\E606";
}
.iconredo:before {
  content: "\E605";
}
.iconicon_screenshot:before {
  content: "\E620";
}
.iconicon_flag_L:before {
  content: "\E61E";
}
.iconicon_flag_s:before {
  content: "\E61F";
}
.iconicon_notebook:before {
  content: "\E61D";
}
.iconicon_loading:before {
  content: "\E6B8";
}
.iconicon_warning02:before {
  content: "\E6B7";
}
.iconicon_tonote:before {
  content: "\E6B6";
}
.iconiconfont_icon_sync:before {
  content: "\E6B4";
}
.iconionfont_icon_warning:before {
  content: "\E6B5";
}
.iconicon_tudding:before {
  content: "\E6B3";
}
.iconiconfont_icon_backgroundcolor:before {
  content: "\E6B2";
}
.iconiconfont_icon_fontcolor1:before {
  content: "\E6B1";
}
.iconicon_refreshtime:before {
  content: "\E6B0";
}
.iconiconfont_icon_fontcolor-min:before {
  content: "\E6BA";
}
.iconiconfont_icon_bold:before {
  content: "\E69E";
}
.iconiconfont_icon_aligncenter:before {
  content: "\E69F";
}
.iconiconfont_icon_arrows:before {
  content: "\E6A0";
}
.iconiconfont_icon_close:before {
  content: "\E6A1";
}
.iconicon_arrest02:before {
  content: "\E6A2";
}
.iconiconfont_icon_crossed:before {
  content: "\E6A3";
}
.iconiconfont_icon_italic:before {
  content: "\E6A4";
}
.iconiconfont_icon_picture:before {
  content: "\E6A5";
}
.iconiconfont_icon_save:before {
  content: "\E6A6";
}
.iconiconfont_icon_fontcolor:before {
  content: "\E6A7";
}
.iconiconfont_icon_aligned:before {
  content: "\E6A8";
}
.iconicon_lajitong:before {
  content: "\E6A9";
}
.iconiconfont_icon_leftjustinfying:before {
  content: "\E6AA";
}
.iconiconfont_icon_link:before {
  content: "\E6AB";
}
.iconiconfont_icon_unordered:before {
  content: "\E6AC";
}
.iconiconfont_icon_suggest:before {
  content: "\E6AD";
}
.iconiconfont_icon_underline:before {
  content: "\E6AE";
}
.iconiconfont_icon_mynote:before {
  content: "\E6AF";
} /*!* Quill Editor v1.3.6
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com*/
.ql-container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 17px;
  height: 100%;
  margin: 0;
  position: relative;
  background: #fff;
  color: #2f3238;
}
html.night-mode .ql-container {
  background: #141414;
  color: #cdd0d4;
}
.ql-container.ql-disabled .ql-tooltip {
  visibility: hidden;
}
.ql-disabled .ql-editor > * {
  cursor: default !important;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li:before {
  pointer-events: none;
}
.ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
}
.ql-clipboard p {
  margin: 0;
  padding: 0;
}
.ql-editor {
  box-sizing: border-box;
  line-height: 1.58;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 25px 20px 10px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.ql-editor > * {
  cursor: text;
}
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6,
.ql-editor ol,
.ql-editor p,
.ql-editor pre,
.ql-editor ul {
  margin: 10px 0;
  padding: 0;
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor blockquote:first-of-type,
.ql-editor h1:first-of-type,
.ql-editor h2:first-of-type,
.ql-editor h3:first-of-type,
.ql-editor h4:first-of-type,
.ql-editor h5:first-of-type,
.ql-editor h6:first-of-type,
.ql-editor ol:first-of-type,
.ql-editor p:first-of-type,
.ql-editor pre:first-of-type,
.ql-editor ul:first-of-type {
  margin-top: 0;
}
.ql-editor ol > li,
.ql-editor ul > li {
  list-style-type: none;
}
.ql-editor ul > li:before {
  content: "\2022";
}
.ql-editor ul[data-checked="false"],
.ql-editor ul[data-checked="true"] {
  pointer-events: none;
}
.ql-editor ul[data-checked="false"] > li *,
.ql-editor ul[data-checked="true"] > li * {
  pointer-events: all;
}
.ql-editor ul[data-checked="false"] > li:before,
.ql-editor ul[data-checked="true"] > li:before {
  color: #777;
  cursor: pointer;
  pointer-events: all;
}
.ql-editor ul[data-checked="true"] > li:before {
  content: "\2611";
}
.ql-editor ul[data-checked="false"] > li:before {
  content: "\2610";
}
.ql-editor li:before {
  display: inline-block;
  white-space: nowrap;
  width: 1.2em;
}
.ql-editor li:not(.ql-direction-rtl):before {
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
}
.ql-editor li.ql-direction-rtl:before {
  margin-left: 0.3em;
  margin-right: -1.5em;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
  padding-left: 1.5em;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
  padding-right: 1.5em;
}
.ql-editor ol li {
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  counter-increment: list-0;
}
.ql-editor ol li:before {
  content: counter(list-0, decimal) ". ";
}
.ql-editor ol li.ql-indent-1 {
  counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
  content: counter(list-1, lower-alpha) ". ";
}
.ql-editor ol li.ql-indent-1 {
  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
  counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
  content: counter(list-2, lower-roman) ". ";
}
.ql-editor ol li.ql-indent-2 {
  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
  counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
  content: counter(list-3, decimal) ". ";
}
.ql-editor ol li.ql-indent-3 {
  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
  counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
  content: counter(list-4, lower-alpha) ". ";
}
.ql-editor ol li.ql-indent-4 {
  counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
  counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
  content: counter(list-5, lower-roman) ". ";
}
.ql-editor ol li.ql-indent-5 {
  counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
  counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
  content: counter(list-6, decimal) ". ";
}
.ql-editor ol li.ql-indent-6 {
  counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
  counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
  content: counter(list-7, lower-alpha) ". ";
}
.ql-editor ol li.ql-indent-7 {
  counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
  counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
  content: counter(list-8, lower-roman) ". ";
}
.ql-editor ol li.ql-indent-8 {
  counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
  counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
  content: counter(list-9, decimal) ". ";
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.ql-size-small {
  font-size: 0.75em;
}
.ql-size-large {
  font-size: 1.5em;
}
.ql-size-huge {
  font-size: 2.5em;
}
.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
.ql-editor.ql-blank:before {
  color: rgba(0, 0, 0, 0.3);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
  color: #333;
  background: 0 0;
  border: none;
  cursor: pointer;
  display: inline-block;
  height: 24px;
  width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
  float: left;
  height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
  outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type="file"],
.ql-snow .ql-toolbar input.ql-image[type="file"] {
  display: none;
}
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover {
  color: #06c;
}
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill {
  fill: #06c;
}
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter {
  stroke: #06c;
}
@media (pointer: coarse) {
  .ql-snow.ql-toolbar button:hover:not(.ql-active),
  .ql-snow .ql-toolbar button:hover:not(.ql-active) {
    color: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
    fill: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
    stroke: #444;
  }
}
.ql-snow,
.ql-snow * {
  box-sizing: border-box;
}
.ql-snow * {
  outline: none;
}
.ql-snow .ql-hidden {
  display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
  visibility: hidden;
}
.ql-snow .ql-tooltip {
  position: absolute;
  transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
  cursor: pointer;
  text-decoration: none;
}
.ql-snow .ql-formats {
  display: inline-block;
  vertical-align: middle;
  display: -ms-flexbox;
  display: flex;
}
.ql-snow .ql-formats:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow .ql-stroke {
  fill: none;
  stroke: #444;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
  fill: none;
  stroke: #444;
  stroke-miterlimit: 10;
  stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: #444;
}
.ql-snow .ql-empty {
  fill: none;
}
.ql-snow .ql-even {
  fill-rule: evenodd;
}
.ql-snow .ql-stroke.ql-thin,
.ql-snow .ql-thin {
  stroke-width: 1;
}
.ql-snow .ql-transparent {
  opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
  display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
  display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
  display: none;
}
.ql-snow .ql-editor h1,
.ql-snow .ql-editor h2,
.ql-snow .ql-editor h3,
.ql-snow .ql-editor h4,
.ql-snow .ql-editor h5,
.ql-snow .ql-editor h6 {
  font-size: 12px;
}
.ql-snow .ql-editor blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
  background-color: #f0f0f0;
  border-radius: 3px;
}
.ql-snow .ql-editor pre {
  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
}
.ql-snow .ql-editor code {
  font-size: 85%;
  padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
}
.ql-snow .ql-editor img {
  max-width: 100%;
}
.ql-snow .ql-picker {
  color: #333;
  display: inline-block;
  font-size: 17px;
  font-weight: 500;
  position: relative;
  vertical-align: middle;
}
.ql-snow .ql-size .ql-picker-label {
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding-left: 8px;
  padding-right: 2px;
  position: relative;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
}
.ql-snow .ql-picker-label:before {
  display: inline-block;
  line-height: 22px;
}
.ql-snow .ql-picker-options {
  z-index: 999;
  background-color: #fff;
  display: none;
  min-width: 100%;
  padding: 4px 8px;
  position: absolute;
  white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
  cursor: pointer;
  display: block;
  padding-bottom: 5px;
  padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #ccc;
  z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #43494c;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  display: block;
  margin-top: 6px;
  top: 100%;
  z-index: 999;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
  right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
  padding: 4px 0;
}
.ql-snow .ql-icon-picker .ql-picker-item {
  height: 24px;
  width: 24px;
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
  padding: 3px 5px;
  width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
  border: 1px solid transparent;
  float: left;
  height: 16px;
  margin: 2px;
  padding: 0;
  width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
  position: absolute;
  margin-top: -10px;
  right: 0;
  top: 50%;
  width: 18px;
}
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-label]:not([data-label=""]):before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-label]:not([data-label=""]):before,
.ql-snow
  .ql-picker.ql-header
  .ql-picker-item[data-label]:not([data-label=""]):before,
.ql-snow
  .ql-picker.ql-header
  .ql-picker-label[data-label]:not([data-label=""]):before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-item[data-label]:not([data-label=""]):before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-label[data-label]:not([data-label=""]):before {
  content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
  width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-item:before,
.ql-snow .ql-picker.ql-header .ql-picker-label:before {
  content: "\6B63\6587";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before {
  content: "Heading 1";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before {
  content: "Heading 2";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before {
  content: "Heading 3";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before {
  content: "Heading 4";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before {
  content: "Heading 5";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before {
  content: "Heading 6";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before {
  font-size: 2em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before {
  font-size: 1.5em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before {
  font-size: 1.17em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before {
  font-size: 1em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before {
  font-size: 0.83em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before {
  font-size: 0.67em;
}
.ql-snow .ql-picker.ql-font {
  width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-item:before,
.ql-snow .ql-picker.ql-font .ql-picker-label:before {
  content: "Sans Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]:before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]:before {
  content: "Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]:before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]:before {
  content: "Monospace";
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]:before {
  font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]:before {
  font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
  width: 50px;
  padding-top: 1px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item:first-child {
  display: none;
}
.ql-snow .ql-picker.ql-size .ql-picker-item:before,
.ql-snow .ql-picker.ql-size .ql-picker-label:before {
  content: "17";
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]:before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]:before {
  content: "Large";
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]:before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]:before {
  content: "Huge";
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]:before {
  font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]:before {
  font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]:before {
  font-size: 32px;
}
.ql-snow
  .ql-color-picker.ql-background
  .ql-picker-options
  .ql-picker-item:first-child {
  position: relative;
  border: 1px solid #eee;
}
.ql-snow
  .ql-color-picker.ql-background
  .ql-picker-options
  .ql-picker-item:first-child:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 1px;
  width: 18px;
  height: 0;
  border-bottom: 1px solid #ff5151;
  transform-origin: 0 0;
  transform: rotate(45deg);
}
.ql-toolbar.ql-snow {
  border: none;
  box-sizing: border-box;
  font-family: helvetica neue, helvetica, arial, sans-serif;
  padding: 8px;
}
.ql-toolbar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  background: #ededf2;
}
.ql-toolbar.ql-snow .ql-formats {
  margin-right: 5px;
}
.ql-toolbar.ql-snow .ql-picker-options {
  border: 1px solid transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  border-color: none;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: none;
  box-shadow: 0 1px 3px #888;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0;
}
.ql-snow .ql-tooltip {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap;
}
.ql-snow .ql-tooltip:before {
  content: "";
  line-height: 26px;
  margin-right: 8px;
}
.ql-snow .ql-tooltip input[type="text"] {
  display: none;
  border: 1px solid #ccc;
  font-size: 13px;
  height: 26px;
  margin: 0;
  padding: 3px 5px;
  width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
  display: inline-block;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action:after {
  display: none;
  border-right: 1px solid #ccc;
  content: "";
  margin-left: 16px;
  padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove:before {
  font-size: 12px;
  content: "\79FB\9664";
  margin-left: 10px;
}
.ql-snow .ql-tooltip a {
  line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
  display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type="text"] {
  display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action:after {
  border-right: 0;
  content: "Save";
  padding-right: 0;
}
.ql-snow .ql-tooltip[data-mode="link"]:before {
  content: "";
}
.ql-snow .ql-tooltip[data-mode="formula"]:before {
  content: "Enter formula:";
}
.ql-snow .ql-tooltip[data-mode="video"]:before {
  content: "Enter video:";
}
.ql-snow a {
  color: #06c;
}
.ql-container.ql-snow {
  border: 1px solid #f1f3f7;
}
.ql-color-picker .ql-picker-item[data-value="#ffffff"] {
  background-color: #fff;
  border: 1px solid #ccc;
}
.ql-color-picker .ql-picker-item[data-value="#333333"] {
  background-color: #333;
}
.ql-color-picker .ql-picker-item[data-value="#494949"] {
  background-color: #494949;
}
.ql-color-picker .ql-picker-item[data-value="#a5a5a5"] {
  background-color: #a5a5a5;
}
.ql-color-picker .ql-picker-item[data-value="#cccccc"] {
  background-color: #ccc;
}
.ql-color-picker .ql-picker-item[data-value="#89d4ff"] {
  background-color: #89d4ff;
}
.ql-color-picker .ql-picker-item[data-value="#73fdea"] {
  background-color: #73fdea;
}
.ql-color-picker .ql-picker-item[data-value="#89fa4e"] {
  background-color: #89fa4e;
}
.ql-color-picker .ql-picker-item[data-value="#fff359"] {
  background-color: #fff359;
}
.ql-color-picker .ql-picker-item[data-value="#FF968D"] {
  background-color: #ff968d;
}
.ql-color-picker .ql-picker-item[data-value="#ffa0d0"] {
  background-color: #ffa0d0;
}
.ql-color-picker .ql-picker-item[data-value="#0b84ed"] {
  background-color: #0b84ed;
}
.ql-color-picker .ql-picker-item[data-value="#18e7cf"] {
  background-color: #18e7cf;
}
.ql-color-picker .ql-picker-item[data-value="#60d837"] {
  background-color: #60d837;
}
.ql-color-picker .ql-picker-item[data-value="#fbe231"] {
  background-color: #fbe231;
}
.ql-color-picker .ql-picker-item[data-value="#ff654e"] {
  background-color: #ff654e;
}
.ql-color-picker .ql-picker-item[data-value="#ea0077"] {
  background-color: #ea0077;
}
.ql-color-picker .ql-picker-item[data-value="#0176ba"] {
  background-color: #0176ba;
}
.ql-color-picker .ql-picker-item[data-value="#068f86"] {
  background-color: #068f86;
}
.ql-color-picker .ql-picker-item[data-value="#1db100"] {
  background-color: #1db100;
}
.ql-color-picker .ql-picker-item[data-value="#f8ba00"] {
  background-color: #f8ba00;
}
.ql-color-picker .ql-picker-item[data-value="#ee230d"] {
  background-color: #ee230d;
}
.ql-color-picker .ql-picker-item[data-value="#cb297a"] {
  background-color: #cb297a;
}
.ql-color-picker .ql-picker-item[data-value="#004e80"] {
  background-color: #004e80;
}
.ql-color-picker .ql-picker-item[data-value="#017c76"] {
  background-color: #017c76;
}
.ql-color-picker .ql-picker-item[data-value="#017001"] {
  background-color: #017001;
}
.ql-color-picker .ql-picker-item[data-value="#ff9201"] {
  background-color: #ff9201;
}
.ql-color-picker .ql-picker-item[data-value="#b41700"] {
  background-color: #b41700;
}
.ql-color-picker .ql-picker-item[data-value="#99195e"] {
  background-color: #99195e;
}
.ql-editor .ql-size-10px {
  font-size: 10px;
}
.ql-editor .ql-size-12px {
  font-size: 12px;
}
.ql-editor .ql-size-14px {
  font-size: 14px;
}
.ql-editor .ql-size-16px {
  font-size: 16px;
}
.ql-editor .ql-size-17px {
  font-size: 17px;
}
.ql-editor .ql-size-18px {
  font-size: 18px;
}
.ql-editor .ql-size-20px {
  font-size: 20px;
}
.ql-editor .ql-size-22px {
  font-size: 22px;
}
.ql-editor .ql-size-24px {
  font-size: 24px;
}
.ql-editor .ql-color-\#000000 {
  color: #000;
}
html.night-mode .ql-editor .ql-color-\#000000 {
  color: #fff;
}
.ql-editor .ql-color-\#999999 {
  color: #999;
}
html.night-mode .ql-editor .ql-color-\#999999 {
  color: #727272;
}
.ql-editor .ql-color-\#494949 {
  color: #494949;
}
html.night-mode .ql-editor .ql-color-\#494949 {
  color: #bcbcbc;
}
.ql-editor .ql-color-\#a5a5a5 {
  color: #a5a5a5;
}
html.night-mode .ql-editor .ql-color-\#a5a5a5 {
  color: #676767;
}
.ql-editor .ql-color-\#cccccc {
  color: #ccc;
}
html.night-mode .ql-editor .ql-color-\#cccccc {
  color: #434343;
}
.ql-editor .ql-color-\#89d4ff {
  color: #89d4ff;
}
html.night-mode .ql-editor .ql-color-\#89d4ff {
  color: #83c9f1;
}
.ql-editor .ql-color-\#73fdea {
  color: #73fdea;
}
html.night-mode .ql-editor .ql-color-\#73fdea {
  color: #70eddc;
}
.ql-editor .ql-color-\#89fa4e {
  color: #89fa4e;
}
html.night-mode .ql-editor .ql-color-\#89fa4e {
  color: #84e751;
}
.ql-editor .ql-color-\#fff359 {
  color: #fff359;
}
html.night-mode .ql-editor .ql-color-\#fff359 {
  color: #ede25a;
}
.ql-editor .ql-color-\#ff968d {
  color: #ff968d;
}
html.night-mode .ql-editor .ql-color-\#ff968d {
  color: #f28f87;
}
.ql-editor .ql-color-\#ffa0d0 {
  color: #ffa0d0;
}
html.night-mode .ql-editor .ql-color-\#ffa0d0 {
  color: #523744;
}
.ql-editor .ql-color-\#0b84ed {
  color: #0b84ed;
}
html.night-mode .ql-editor .ql-color-\#0b84ed {
  color: #207ccc;
}
.ql-editor .ql-color-\#18e7cf {
  color: #18e7cf;
}
html.night-mode .ql-editor .ql-color-\#18e7cf {
  color: #2ac8b6;
}
.ql-editor .ql-color-\#60d837 {
  color: #60d837;
}
html.night-mode .ql-editor .ql-color-\#60d837 {
  color: #5fc53d;
}
.ql-editor .ql-color-\#fbe231 {
  color: #fbe231;
}
html.night-mode .ql-editor .ql-color-\#fbe231 {
  color: #e5d038;
}
.ql-editor .ql-color-\#ff654e {
  color: #ff654e;
}
html.night-mode .ql-editor .ql-color-\#ff654e {
  color: #ec6551;
}
.ql-editor .ql-color-\#ea0077 {
  color: #ea0077;
}
html.night-mode .ql-editor .ql-color-\#ea0077 {
  color: #c81671;
}
.ql-editor .ql-color-\#0176ba {
  color: #0176ba;
}
html.night-mode .ql-editor .ql-color-\#0176ba {
  color: #136b9f;
}
.ql-editor .ql-color-\#068f86 {
  color: #068f86;
}
html.night-mode .ql-editor .ql-color-\#068f86 {
  color: #137b74;
}
.ql-editor .ql-color-\#1db100 {
  color: #1db100;
}
html.night-mode .ql-editor .ql-color-\#1db100 {
  color: #279711;
}
.ql-editor .ql-color-\#f8ba00 {
  color: #f8ba00;
}
html.night-mode .ql-editor .ql-color-\#f8ba00 {
  color: #d4a518;
}
.ql-editor .ql-color-\#ee230d {
  color: #ee230d;
}
html.night-mode .ql-editor .ql-color-\#ee230d {
  color: #cd3222;
}
.ql-editor .ql-color-\#cb297a {
  color: #cb297a;
}
html.night-mode .ql-editor .ql-color-\#cb297a {
  color: #b13674;
}
.ql-editor .ql-color-\#004e80 {
  color: #004e80;
}
html.night-mode .ql-editor .ql-color-\#004e80 {
  color: #0c476d;
}
.ql-editor .ql-color-\#017c76 {
  color: #017c76;
}
html.night-mode .ql-editor .ql-color-\#017c76 {
  color: #9af3ef;
}
.ql-editor .ql-color-\#017001 {
  color: #017001;
}
html.night-mode .ql-editor .ql-color-\#017001 {
  color: #a4f4a4;
}
.ql-editor .ql-color-\#ff9201 {
  color: #ff9201;
}
html.night-mode .ql-editor .ql-color-\#ff9201 {
  color: #db8718;
}
.ql-editor .ql-color-\#b41700 {
  color: #b41700;
}
html.night-mode .ql-editor .ql-color-\#b41700 {
  color: #9a2311;
}
.ql-editor .ql-color-\#99195e {
  color: #99195e;
}
html.night-mode .ql-editor .ql-color-\#99195e {
  color: #852458;
}
.ql-editor .ql-color-\#ffffff {
  color: #fff;
}
.ql-editor .ql-bg-\#000000 {
  background-color: #000;
}
.ql-editor .ql-bg-\#ffffff {
  background-color: #fff;
}
html.night-mode .ql-editor .ql-bg-\#ffffff {
  background-color: #141414;
}
.ql-editor .ql-bg-\#89fa4e {
  background-color: #89fa4e;
}
html.night-mode .ql-editor .ql-bg-\#89fa4e {
  background-color: #84e751;
}
.ql-editor .ql-bg-\#494949 {
  background: #494949;
}
html.night-mode .ql-editor .ql-bg-\#494949 {
  background: #bcbcbc;
}
.ql-editor .ql-bg-\#a5a5a5 {
  background: #a5a5a5;
}
html.night-mode .ql-editor .ql-bg-\#a5a5a5 {
  background: #676767;
}
.ql-editor .ql-bg-\#cccccc {
  background: #ccc;
}
html.night-mode .ql-editor .ql-bg-\#cccccc {
  background: #434343;
}
.ql-editor .ql-bg-\#89d4ff {
  background: #89d4ff;
}
html.night-mode .ql-editor .ql-bg-\#89d4ff {
  background: #83c9f1;
}
.ql-editor .ql-bg-\#73fdea {
  background: #73fdea;
}
html.night-mode .ql-editor .ql-bg-\#73fdea {
  background: #70eddc;
}
.ql-editor .ql-bg-\#89fa4e {
  background: #89fa4e;
}
html.night-mode .ql-editor .ql-bg-\#89fa4e {
  background: #84e751;
}
.ql-editor .ql-bg-\#fff359 {
  background: #fff359;
}
html.night-mode .ql-editor .ql-bg-\#fff359 {
  background: #ede25a;
}
.ql-editor .ql-bg-\#ff968d {
  background: #ff968d;
}
html.night-mode .ql-editor .ql-bg-\#ff968d {
  background: #f28f87;
}
.ql-editor .ql-bg-\#ffa0d0 {
  background: #ffa0d0;
}
html.night-mode .ql-editor .ql-bg-\#ffa0d0 {
  background: #523744;
}
.ql-editor .ql-bg-\#0b84ed {
  background: #0b84ed;
}
html.night-mode .ql-editor .ql-bg-\#0b84ed {
  background: #207ccc;
}
.ql-editor .ql-bg-\#18e7cf {
  background: #18e7cf;
}
html.night-mode .ql-editor .ql-bg-\#18e7cf {
  background: #2ac8b6;
}
.ql-editor .ql-bg-\#60d837 {
  background: #60d837;
}
html.night-mode .ql-editor .ql-bg-\#60d837 {
  background: #5fc53d;
}
.ql-editor .ql-bg-\#fbe231 {
  background: #fbe231;
}
html.night-mode .ql-editor .ql-bg-\#fbe231 {
  background: #e5d038;
}
.ql-editor .ql-bg-\#ff654e {
  background: #ff654e;
}
html.night-mode .ql-editor .ql-bg-\#ff654e {
  background: #ec6551;
}
.ql-editor .ql-bg-\#ea0077 {
  background: #ea0077;
}
html.night-mode .ql-editor .ql-bg-\#ea0077 {
  background: #c81671;
}
.ql-editor .ql-bg-\#0176ba {
  background: #0176ba;
}
html.night-mode .ql-editor .ql-bg-\#0176ba {
  background: #136b9f;
}
.ql-editor .ql-bg-\#068f86 {
  background: #068f86;
}
html.night-mode .ql-editor .ql-bg-\#068f86 {
  background: #137b74;
}
.ql-editor .ql-bg-\#1db100 {
  background: #1db100;
}
html.night-mode .ql-editor .ql-bg-\#1db100 {
  background: #279711;
}
.ql-editor .ql-bg-\#f8ba00 {
  background: #f8ba00;
}
html.night-mode .ql-editor .ql-bg-\#f8ba00 {
  background: #d4a518;
}
.ql-editor .ql-bg-\#ee230d {
  background: #ee230d;
}
html.night-mode .ql-editor .ql-bg-\#ee230d {
  background: #cd3222;
}
.ql-editor .ql-bg-\#cb297a {
  background: #cb297a;
}
html.night-mode .ql-editor .ql-bg-\#cb297a {
  background: #b13674;
}
.ql-editor .ql-bg-\#004e80 {
  background: #004e80;
}
html.night-mode .ql-editor .ql-bg-\#004e80 {
  background: #0c476d;
}
.ql-editor .ql-bg-\#017c76 {
  background: #017c76;
}
.ql-editor .ql-bg-\#017001 {
  background: #017001;
}
.ql-editor .ql-bg-\#ff9201 {
  background: #ff9201;
}
html.night-mode .ql-editor .ql-bg-\#ff9201 {
  background: #db8718;
}
.ql-editor .ql-bg-\#b41700 {
  background: #b41700;
}
html.night-mode .ql-editor .ql-bg-\#b41700 {
  background: #9a2311;
}
.ql-editor .ql-bg-\#99195e {
  background: #99195e;
}
html.night-mode .ql-editor .ql-bg-\#99195e {
  background: #852458;
}
.ql-size .ql-picker-item[data-value="10px"] {
  font-size: 10px;
}
.ql-size .ql-picker-item[data-value="12px"] {
  font-size: 12px;
}
.ql-size .ql-picker-item[data-value="14px"] {
  font-size: 14px;
}
.ql-size .ql-picker-item[data-value="16px"] {
  font-size: 16px;
}
.ql-size .ql-picker-item[data-value="17px"] {
  font-size: 17px;
}
.ql-size .ql-picker-item[data-value="18px"] {
  font-size: 18px;
}
.ql-size .ql-picker-item[data-value="20px"] {
  font-size: 20px;
}
.ql-size .ql-picker-item[data-value="22px"] {
  font-size: 22px;
}
.ql-size .ql-picker-item[data-value="24px"] {
  font-size: 24px;
}
#web-toolbar {
  position: relative;
  z-index: 1;
}
#web-toolbar .bili-note-iconfont {
  font-size: 20px !important;
}
#web-toolbar .ql-picker-label svg {
  width: 20px;
  height: 20px;
}
#web-toolbar .ql-size {
  width: 50px;
  font-size: 16px;
  line-height: 25px;
}
#web-toolbar .ql-color-picker {
  display: block;
  width: 28px;
  height: 24px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
#web-toolbar .ql-color-picker .ql-picker-label {
  display: block;
}
.ql-toolbar .toolbar-mask,
.readonly-toolbar .toolbar-mask {
  z-index: 1;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.5;
  cursor: not-allowed;
  position: absolute;
}
.note-tooltip[data-v-43668197] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 10px 12px;
  line-height: 20px;
  font-size: 14px;
}
.note-tooltip.info[data-v-43668197] {
  color: #999;
  background: #f9f9f9;
}
.note-tooltip.warning[data-v-43668197] {
  color: #e02020;
  background: #fbf3f3;
}
.note-tooltip-msg[data-v-43668197] {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.note-tooltip .icon-close[data-v-43668197] {
  height: 20px;
  font-size: 16px;
  cursor: pointer;
}
.resizable-component {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute !important;
  box-shadow: 0 3px 25px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background: #ededf2;
}
.resizable-component .note-drag-bar {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 46px;
  background: #dddde7;
  border-radius: 4px 4px 0 0;
  text-align: center;
  cursor: move;
  box-sizing: border-box;
  font-size: 12px;
  color: #909098;
  padding: 0 8px;
}
.resizable-component .note-drag-bar .status-bar {
  width: calc(100% - 147px);
}
.resizable-component .note-drag-bar .status-bar .text {
  text-align: left;
  max-width: 100% !important;
  width: 100% !important;
}
.resizable-component .operation-btns {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.resizable-component .operation-btns > a {
  text-decoration: none;
}
.resizable-component .operation-btns .column-line {
  margin-left: 10px;
  width: 1px;
  height: 13px;
  opacity: 0.2;
  background: #a7a7a7;
  margin-top: 3px;
}
.resizable-component .close-btn {
  color: #2c3133;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  background: #ebebf2;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 10px;
}
.resizable-component .close-btn:hover {
  background: #ccccde;
}
.resizable-component .publish-btn {
  margin-right: 8px;
  padding: 0 10px;
  font-size: 13px;
  line-height: 28px;
  border-radius: 2px;
  color: #fff;
  background: #00a1d6;
  white-space: nowrap;
  cursor: pointer;
}
.resizable-component .custom-btns {
  display: -ms-flexbox;
  display: flex;
}
.resizable-component .custom-btns .ql-capture-btn {
  width: 22px;
  height: 22px;
  display: inline-block;
  text-align: center;
  line-height: 22px;
  background: #f79e00;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 2px;
  text-decoration: none;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.resizable-component .custom-btns .ql-capture-btn .bili-note-iconfont {
  color: #fff;
  font-size: 20px;
}
.resizable-component .custom-btns .ql-tag-btn {
  width: 22px;
  height: 22px;
  display: inline-block;
  text-align: center;
  line-height: 22px;
  background: #2392e5;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 2px;
  text-decoration: none;
}
.resizable-component .custom-btns .ql-tag-btn .bili-note-iconfont {
  color: #fff;
  font-size: 20px;
}
.resizable-component .custom-btns .ql-save-btn {
  position: absolute;
  top: 13px;
  right: 10px;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  border-radius: 2px;
  cursor: pointer;
}
.resizable-component .editor-innter {
  margin: 0 10px 10px;
  background: #fff;
  overflow: hidden;
}
.resizable-component .ql-toolbar {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.resizable-component .ql-toolbar .bili-note-iconfont {
  font-size: 20px;
}
.resizable-component #web-toolbar .ql-size .ql-picker-label {
  padding-top: 2px;
}
.resizable-component #web-toolbar .ql-color-picker {
  padding-top: 8px;
}
.resizable-component
  #web-toolbar
  .ql-picker:not(.ql-color-picker):not(.ql-icon-picker)
  svg {
  margin-top: -9px;
}
.resizable-component .note-tooltip {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0 10px;
  border-radius: 4px 4px 0 0;
}
.resizable-component .note-tooltip + .ql-container {
  border-top: none;
}
.resizable-component .ql-container {
  position: relative;
  box-sizing: border-box;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border: none;
}
.resizable-component .ql-editor::-webkit-scrollbar-track {
  background: #fff;
}
.resizable-component .ql-editor::-webkit-scrollbar {
  width: 5px;
}
.resizable-component .ql-editor::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #dddde7;
}
.resizable-component .ql-bar,
.resizable-component .ql-bar-btn {
  position: relative;
  display: block;
}
.resizable-component .ql-bar-btn:hover:after,
.resizable-component .ql-bar:hover:after {
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  z-index: 200;
  top: 35px;
  left: -7px;
  word-break: keep-all;
  background: #5d5d5d;
  border-radius: 4px;
  padding: 5px 12px;
  line-height: 16px;
  font-size: 12px;
  color: hsla(0, 0%, 100%, 0.85);
  content: attr(labelTooltip);
  min-width: 22px;
}
.resizable-component .ql-bar-btn:hover:before,
.resizable-component .ql-bar:hover:before {
  content: "";
  position: absolute;
  top: 30px;
  left: 15px;
  transform: translateX(-50%);
  border-color: transparent transparent #5d5d5d;
  border-style: solid;
  border-width: 0 6px 6px;
  z-index: 99;
}
.resizable-component .ql-image-preview {
  box-sizing: content-box;
  max-width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.resizable-component .ql-image-preview .img-preview {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 2px;
}
.resizable-component .ql-image-preview .loading-img {
  cursor: progress;
  opacity: 0.5;
}
.resizable-component .ql-image-preview.uploaded .loading-img {
  cursor: default;
  opacity: 1;
}
.resizable-component .ql-tag-blot {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
}
.resizable-component .ql-tag-blot .time-tag-item {
  cursor: pointer;
  transition: 0.2s;
  background: #f6f7f8;
  border-radius: 4px;
  height: auto;
  line-height: 20px;
  display: inline-block;
  padding: 3.5px 10px 3.5px 5px;
  font-size: 14px;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.resizable-component .ql-tag-blot .time-tag-item:hover {
  background-color: #e3e5e7;
}
.resizable-component .ql-tag-blot .bili-note-iconfont {
  font-size: 16px;
}
.resizable-component .ql-tag-blot .time-tag-item__text {
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
  font-weight: 400;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.resizable-component .ql-tag-blot .time-tag-item__text .title {
  max-width: 150px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}
.resizable-component .ql-tag-blot .time-tag-item__desc {
  margin-left: 8px;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #61666d;
}
.resizable-component .blot-disabled .time-tag-item {
  cursor: not-allowed;
  background: #ebebeb;
  color: silver;
  border: none;
}
.resizable-component .blot-disabled > span {
  -ms-flex-align: center;
  align-items: center;
  background: #ebebeb;
  border-radius: 12px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  cursor: not-allowed;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.resizable-component .blot-disabled > span:after {
  content: "";
}
.resizable-component .blot-disabled .time-tag-item:hover {
  border: none;
}
.resizable-component .blot-disabled .time-tag-item__desc,
.resizable-component .blot-disabled .time-tag-item__text {
  color: silver;
}
.resizable-component .blot-disabled .time-tag-error-tip {
  display: inline-block;
  color: #e02020;
  text-indent: 8px;
}
.resizable-component .blot-disabled .bili-note-iconfont {
  color: silver;
}
.resizable-component .tag-dialog-container {
  width: 100%;
  height: calc(100% - 46px);
  bottom: 0;
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 4px 4px;
}
.resizable-component .tag-dialog-container .tag-dialog {
  position: relative;
  width: 320px;
  height: 190px;
  background: #fff;
  border: 1px solid #e3e5e7;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 25% auto;
}
.resizable-component .tag-dialog-container .tag-dialog .tag-dialog__time {
  font-size: 16px;
  line-height: 22px;
  color: #18191c;
  margin-bottom: 24px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.resizable-component .tag-dialog-container .tag-dialog .tag-dialog__time > i {
  font-size: 20px;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__time
  .split-line {
  margin: 0 10px;
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color: #212121;
}
.resizable-component .tag-dialog-container .tag-dialog .tag-dialog__close {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 12px;
  color: #757575;
  font-size: 25px;
}
.resizable-component .tag-dialog-container .tag-dialog .tag-dialog__content {
  width: 272px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
}
.resizable-component .tag-dialog-container .tag-dialog .tag-dialog__input {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input {
  padding: 7px 12px;
  outline: none;
  border-radius: 6px;
  color: #18191c;
  background: #f1f2f3;
  border: 1px solid #f1f2f3;
  width: 100%;
  transition: 0.3s;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input:focus,
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input:hover {
  border: 1px solid #f1f2f3;
  background: #fff;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input:-ms-input-placeholder {
  color: #c9ccd0;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input::placeholder {
  color: #c9ccd0;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  .input-filled {
  border: 1px solid #f1f2f3;
  background: #fff;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__input--count {
  color: #c9ccd0;
  position: absolute;
  right: 7px;
  top: 8px;
}
.resizable-component .tag-dialog-container .tag-dialog .tag-dialog__btn {
  display: -ms-flexbox;
  display: flex;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__btn
  .dialog-btn {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 130px;
  height: 32px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0 6px;
  cursor: pointer;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__btn--cancel {
  color: #000;
  border: 1px solid #e1e1e1;
}
.resizable-component
  .tag-dialog-container
  .tag-dialog
  .tag-dialog__btn--confirm {
  color: #fff;
  border: 1px solid #00aeec;
  background: #00aeec;
}
#app-toolbar .iconredo,
#app-toolbar .iconundo {
  color: #212121;
  font-size: 23px;
}
#app-toolbar .iconiconfont_icon_bold {
  font-size: 20px;
}
#app-toolbar .ql-color-picker svg {
  width: 20px;
}
#app-toolbar .ql-bar {
  width: 22px;
  height: 22px;
  margin-right: 16px;
  border-radius: 2px;
  background: #fff;
}
#app-toolbar .close-keyboead {
  width: 22px;
  height: 22px;
  line-height: 23px;
  border-radius: 2px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  right: 17px;
  font-size: 26px;
  color: #43494c;
}
#app-toolbar .close-keyboead:active {
  background: #ebebeb;
}
#app-toolbar .toolbar-btns {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
#app-toolbar .ql-bar.ql-active,
#app-toolbar .ql-expanded {
  background: #ebebeb;
  border-radius: 2px;
}
#app-toolbar .ql-bar.ql-active .bili-note-iconfont,
#app-toolbar .ql-bar.ql-active .ql-bold,
#app-toolbar .ql-expanded .bili-note-iconfont,
#app-toolbar .ql-expanded .ql-bold {
  color: #212121;
}
#app-toolbar .ql-color {
  width: 22px;
  height: 22px;
  margin-top: 3px;
}
#app-toolbar .ql-color .ql-picker-label {
  padding: 1px !important;
}
#app-toolbar .redo-btn,
#app-toolbar .undo-btn {
  width: 22px;
  height: 22px;
  line-height: 23px;
}
#app-toolbar .redo-btn:active,
#app-toolbar .undo-btn:active {
  background: #ebebeb;
}
#app-toolbar .btn-disable {
  opacity: 0.3;
}
#app-toolbar .column {
  margin-right: 12px;
  width: 1px;
  height: 7px;
  background: #e3e3e3;
}
#app-toolbar .column-right {
  position: absolute;
  right: 46px;
}
#app-toolbar .ql-picker.ql-expanded .ql-picker-options {
  padding: 0 6px;
  box-sizing: border-box;
  margin-top: 0;
  width: 100vw;
  top: 40px;
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  border-top: 1px solid #333;
}
#app-toolbar .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
  border: none;
  box-sizing: border-box;
  width: 10vw;
  height: 10vw;
  margin: 6px;
}
#app-toolbar.ql-toolbar.ql-snow .ql-picker-options {
  border: none !important;
  box-shadow: none !important;
}
.app-note .custom-btns {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 7px;
}
.app-note .custom-btns .column {
  width: 1px;
  height: 7px;
  background: #e3e3e3;
}
.app-note .custom-btns .ql-tag-btn {
  line-height: 22px;
  width: 22px;
  height: 22px;
  margin-right: 16px;
  display: block;
  text-align: center;
  background: #fff;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
}
.app-note .custom-btns .ql-tag-btn .bili-note-iconfont {
  color: #212121;
  font-size: 22px;
}
.app-note .custom-btns .ql-tag-btn:active {
  background: #ebebeb;
}
.app-note .custom-btns .ql-capture-btn {
  margin-right: 12px;
}
.app-note .ql-image-preview {
  box-sizing: content-box;
  max-width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: -10px;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.app-note .ql-image-preview,
.app-note .ql-image-preview .img-preview {
  border-radius: 2px;
  display: block;
}
.app-note .ql-image-preview .loading-img {
  opacity: 0.5;
}
.app-note .ql-image-preview .mask {
  cursor: progress;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.6);
  position: absolute;
  top: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.app-note .ql-image-preview .mask .iconicon_loading {
  color: #666;
  position: relative;
  font-size: 40px;
  animation: loading-rotate 2s linear infinite;
}
.app-note .ql-image-preview.uploaded .loading-img {
  opacity: 1;
}
.app-note .ql-tag-blot {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.app-note .ql-tag-blot .time-tag-item {
  cursor: pointer;
  transition: 0.2s;
  background: #f6f7f8;
  border-radius: 4px;
  height: auto;
  line-height: 20px;
  padding: 3.5px 10px 3.5px 5px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.app-note .ql-tag-blot .time-tag-item:hover {
  background-color: #e3e5e7;
}
.app-note .ql-tag-blot .bili-note-iconfont {
  font-size: 16px;
  color: #18191c;
  line-height: 1;
}
.app-note .ql-tag-blot .time-tag-item__text {
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
  font-weight: 400;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.app-note .ql-tag-blot .time-tag-item__text .title {
  max-width: 150px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}
.app-note .ql-tag-blot .time-tag-item__desc {
  margin-left: 8px;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #61666d;
}
.app-note .blot-disabled .time-tag-item {
  background: #ebebeb;
  color: silver;
}
.app-note .blot-disabled > span {
  -ms-flex-align: center;
  align-items: center;
  background: #ebebeb;
  border-radius: 12px;
  height: 22px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  cursor: not-allowed;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.app-note .blot-disabled > span:after {
  content: "";
}
.app-note .blot-disabled .time-tag-item__desc,
.app-note .blot-disabled .time-tag-item__text {
  color: silver;
}
.app-note .blot-disabled .time-tag-error-tip {
  white-space: nowrap;
  color: silver;
  line-height: 22px;
}
.app-note .blot-disabled .bili-note-iconfont {
  color: #999;
}
.app-note .ql-editor {
  position: relative;
  padding: 20px;
}
.app-note .ql-container.ql-snow {
  border: none;
}
.toolbar-show-enter-active,
.toolbar-show-leave-active {
  transition: all 0.3s ease;
}
.toolbar-show-enter,
.toolbar-show-leave-to {
  opacity: 0;
  transform: translateY(300px);
}
.page-loading {
  width: 100%;
  height: 100%;
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-direction: column;
  flex-direction: column;
}
.page-loading .loading-icon {
  width: 24px;
  height: 27px;
}
.page-loading p {
  font-size: 17px;
  color: #999;
  line-height: 18px;
  margin-top: 4px;
}
@keyframes loading-rotate {
  to {
    transform: rotate(1turn);
  }
}
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease;
}
.page-fade-enter,
.page-fade-leave-to {
  opacity: 0;
}
.manage-note {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0 8px 8px;
  background: #ededf2;
}
.manage-note--header {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: 4px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
}
.manage-note--header .status-bar .text {
  max-width: 220px !important;
  font-size: 13px;
  color: #999;
}
.manage-note--header .tools-btns {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.manage-note--header .tools-btns .edit-btn {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-left: 10px;
  padding: 0 10px;
  height: 28px;
  font-size: 13px;
  border-radius: 2px;
  line-height: 28px;
  color: #fff;
  background-color: #00a1d6;
  cursor: pointer;
  box-sizing: border-box;
}
.manage-note--header .tools-btns .edit-btn--ghost {
  line-height: 26px;
  border: 1px solid #00a1d6;
  color: #00a1d6;
  background-color: transparent;
}
.manage-note #web-toolbar {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0 -8px;
  padding: 8px 16px;
  border-top: 1px solid #e4e9f0;
}
.manage-note #web-toolbar.readonly-toolbar .toolbar-mask {
  opacity: 0;
}
.manage-note #web-toolbar.readonly-toolbar .ql-picker,
.manage-note #web-toolbar.readonly-toolbar button {
  color: #999;
}
.manage-note #web-toolbar.readonly-toolbar .ql-stroke {
  stroke: #999;
}
.manage-note #web-toolbar .ql-color-picker {
  padding-top: 10px;
}
.manage-note .note-tooltip {
  border-radius: 4px 4px 0 0;
}
.manage-note .note-tooltip + .ql-container {
  border-radius: 0;
}
.manage-note .ql-container {
  overflow: scroll;
  border-radius: 4px 4px 0 0;
}
.manage-note .ql-container.ql-snow {
  border: none;
}
.manage-note .ql-editor::-webkit-scrollbar-track {
  background: #fff;
}
.manage-note .ql-editor::-webkit-scrollbar {
  width: 5px;
}
.manage-note .ql-editor::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #dddde7;
}
.manage-note .ql-image-preview {
  box-sizing: content-box;
  max-width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.manage-note .ql-image-preview .img-preview {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 2px;
}
.manage-note .ql-image-preview .loading-img {
  cursor: progress;
  opacity: 0.5;
}
.manage-note .ql-image-preview.uploaded .loading-img {
  cursor: zoom-in;
  opacity: 1;
}
.manage-note .ql-tag-blot {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
}
.manage-note .ql-tag-blot .time-tag-item {
  cursor: pointer;
  transition: 0.2s;
  background: #f6f7f8;
  border-radius: 4px;
  height: auto;
  line-height: 20px;
  display: inline-block;
  padding: 3.5px 10px 3.5px 5px;
  font-size: 14px;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.manage-note .ql-tag-blot .time-tag-item:hover {
  background-color: #e3e5e7;
}
.manage-note .ql-tag-blot .bili-note-iconfont {
  font-size: 16px;
  color: #18191c;
  line-height: 1;
}
.manage-note .ql-tag-blot .time-tag-item__text {
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
  font-weight: 400;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.manage-note .ql-tag-blot .time-tag-item__text .title {
  max-width: 150px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}
.manage-note .ql-tag-blot .time-tag-item__desc {
  margin-left: 8px;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #61666d;
}
.manage-note .blot-disabled .time-tag-item {
  cursor: not-allowed;
  background: #ebebeb;
  color: silver;
}
.manage-note .blot-disabled > span {
  -ms-flex-align: center;
  align-items: center;
  background: #ebebeb;
  border-radius: 12px;
  height: 22px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  cursor: not-allowed;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.manage-note .blot-disabled > span:after {
  content: "";
}
.manage-note .blot-disabled .time-tag-item:hover {
  border: 1px solid #ebebeb;
}
.manage-note .blot-disabled .time-tag-item__desc,
.manage-note .blot-disabled .time-tag-item__text {
  color: silver;
}
.manage-note .blot-disabled .time-tag-error-tip {
  display: inline-block;
  color: #e02020;
  text-indent: 8px;
}
.manage-note .blot-disabled .bili-note-iconfont {
  color: silver;
}
.manage-note .ql-toolbar .bili-note-iconfont {
  font-size: 20px !important;
}
@font-face {
  font-family: read-icon;
  src: url(data:font/woff2;base64,d09GMgABAAAAACKAAAsAAAAARhgAACIxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACLBAruWNpbATYCJAOCEAuBCgAEIAWEcweGPxvOOlVGh40DgGbyFLL/vyaoIVeP+9o2EAgHRhlZHYRTjZix2lSFnfZd+WlLVktEJwuSBQnRalLHR3Qs2e9lmduv+Iwo3RzvrpOQi9MnctuqyS8AqHHXL75/KttXGUoJVUy3f5+EIotEyBgZR2uOQXhkfSxdCIPSPwRz69ZsY8CCyapYw9hGrlkTNUb1KAsTkEdmRGChYtVjg68YjYVfYja8GMU7DGDMTOGBYUDgxYTQ7K67d+qrZP+1uNBn8l+D/d+x5kU62Upknd/57DQAlaEiWIALcHn42e3Z+ahc7jNEfZItSg8IAPyHMYZGaOdt15bJTxwbIWtp8L3JtMpZGB8j/xNheoXbod/sjWkdWh+YSOuJ107Mvm6A1ncrYvmBX+bXgKxUIshu1u2pICdfdwTUmu59CKFI1mZ8KSZHEel9S6RVnQMKuOyoTpmG175d6Ev7adLrKLm7v7GTM6YEakCS6NnEjkGYTugJ1ZVgcrQllsAJ9KH1fzbNdnd1zNUFFPwBbonKZmZWhtnR2l7JtAIDyw6tWQY+ki9AXAGVWsPLKjhr+RIpKAcQq5RERZsUtcpLd1WZoipTV2mbqBtiYw8DxkFj7bSr/86PsZmHsUhjrXOIWIDRLD7ysWAA0AUKelDL9PStChhRJCkqONhe0AC4tLYRRw7Kb+IFcMJiA345SNr7hJv9hgBAc+oZ4Hv4+u3tlAM/gAACxnaL5v6eU90v1v+U994CfCjvn14fGFsAUAKAA0AtWL7SyJWWkGCnhhoMYHAvBxxCuGOcG4uLgkLAiqVRLevQr2vSZonvdf/TPwE0M+Aw3tdl2zAwtTRn3g75/7/CYyQuIVL17cmDR/fuXF30DQyNjE1MzcwtLP1ZWdvY2tk7ODo56+rpaGuqqagrKSrI+hW0pOTkPXvx6s27D59+NKRlfClLMpgGLRdh9Fw9/hsBGxgRBBgT1GmKFH43FoB1CgA+UyDwioKAF4QHXhIBeE5E4BmRgKcUDDwhMnBIw4AjCgGOiQKcEBU4JRpwRnTgnBjABTGBS2IBV8QGrokjV5ObC8AN8YBb4gN3SADcpVDgHgmB+yQCHpAYeEgS4BFJgcckA/ZJDhxQGLBH4cAuKYBtigA2SAmskQrYJDWwQpHAMkUBSxQNzFMM8JVigQFpgB2qBmaoFligRmCRrirScveAAtzXAHhL1xXpum8A8J5uAh/oFvCR3gBfmCCALSZaYJaJBZhj4gY+8f+UbpVMdoGbxHB8H/sHfgLrH+zclPnDw9BAJAks/pAIRoKJoGcIFwiWVcMvSB/DUI3jIpKlmlTES1bBDkZskirLJSFnmsTDWloJBVfaAJ1jbWUTxamlSgsA0Q5dR1aBzSdhD5gsLItQewBF3egG0fHi2YKyBsKgqnVtID4n8twdGCRZHgR0ZX5yVVGshOwTloJe9H4g/ZmdcSLdtAfybZaFiTMQGJxVlk7OfjtNayT7jOfdjgUqR8mEiaqwkJhOL5XkQHd6sV5j0wNbbukhpSnx17Q72Ldb4D4erqivhF834Mt0eRCVwVycrJ1jlHIw2qEXbf8/7v97/hX7t+9/3v/GMXU0g3djouqmIKHVIakRiZaZbeW47CRapEblaGV2EGskit4ABI9G4wovTFID6syisoTHWJs5wgaAIEwilnluT/urpvE3U34amAUxuHS4du0U8R3JTCmUSkqYR8Jy5NKffz41tC2cBD8wxK9inuXqAjBWOmSjqLOsZBFOSH40zezC/xGqsi0HE7h9LJyGwtfiaX0q2uTJfLNkcJ2EEtkXwz4/HSCGiMqLapElG2fkeY0YlOYojPt2VyjH2fb5cPLACtXjsaf/al94kIUk7sjLwo4ciOUadwJL/YVcfNPCc3SEl8z2WNs80V2N7t34RjvSQW5LeHfIHmDs3urK6ySVMNCUIVggdsqQVJLVW4ISCr7WufwPTbRuU8a9yiV9pfyML1MnstFH56rA0V6dqa8FKa81XTl864YLPu2AsSojsa29ygc92rmuxpcn4ob6QwEmhNeDt24PoBGXuHCbo1+UpzX5xsDHunFi5kjNMnivyyRONFYJPTUWIQMN60NS7VfVp55WB1fYDB/1VGyqXtGzCm4Bjr0EhStoBD/uQUOHvUrPqQ1q2tNPacIVtaLHfM3Eml/y7XK3jF4aQzJyvNceItR581D++vX9Kp7A40tjzq69R3a+3jbdwIlKhqte2oGDlmOGKjUEr6I+3GDuFNq9micEb19XSh37aGDMCm8XYzGS68Q77hSFWcViCpiAwJGDC4davjKLjDDi8WK2cEb++ZRum5duhx5lBD0+MTrwZMKglkpgEYCXK8QTSd4giuF2zlzZS2fV6Utr/tQ+0WBEYeLXMxnQRqL1I9ohcypaMgie1v/iV3E+6SRDuxk1fE6TKE6mzQessHZPv8pdeetcXtoFyFay1AA6lKWKPcWbUiCbYk1wosE3+adCQmXoNcFbRqVDJaqGMka+wrSsV48WS/7s1Yvh/Vs5+D/OG1JzY80/MoMvsR/T282oIFmTtaFoHjdoK5okVm61LaqdYdtHMyDsXosrbm19ZkUvq2FXt8iOhHe7Bwm8ybhLNBwSgvJRf+uIbIH73aF6uowrk6V0vVeQkrrFnNtCjAkZK+XMC3ralb9lskZ7g4gBlJfXiat+3AWdeJDOHYkXTC5sWII6HACZrPDOjiBMtSBWnEkB33M0A9PUdfSMkcWoAr1kCkH6qj7OJFC0p5hLtQ6PNMOwhJwAYkwD11N1TL1wBZk6UxyJbskwxd7boGYLpW4iouo6kQZYZ1BOuJCDuNNXxckZrvglavnTvw/tvn6+0anO+tTjsLz2HgsnoRXIQo+pKZckb9AbaADyvHihR7vG1QU2OHdTBCWGjYEcZxHAWGTHyv5A5sb0N9cL2N2u4N7MZFMPF1D57ErdHB3K9f7aHOl3u9Q24+lRDQdJsW5sZn3YnM4aDHMtbzX12bRb7yr1O7fZpaJuonTrtPSGyZW4hLFEhVY7iIXev076F8bGXjoLaxspCaz4xs7XhScnUukax5by7O7eyeMul3NJGy7Ihq000l30IsCIq2+Vz/VAq6ZSRR7ajFIlFUN+ZH4bkDw1MXLx3jr8kuduxMGn755q7ko0uzTWaB6kp4a793l1st06zMhsp8nlcVZ89BEX7qeFwNf3cGXisdbjXXTkynF/9UJ5Ko4+61yXFkw0tLzQJkN9cUya+fG03kVMT0W1l0ylXXupiK2RgFNczfXemkBJJDLDh2SKXjUk7WG5+xJBQ4Aal4Vc6tHQasycLpL6cWQbVsGtBE5rUPIBC4lU5ShGkpKy+uOx3RphGd1mal+KCpW6Ewzhav8HK38qmYLLNUNwqmJM6fBQmGEQmiEQuodMYPn3idPUeG3wwxNZXCBRH5r4HrR5/WRt+fwSLxkApanHRn8dnOg6JXMLyF9U8SEu1hZlEOyp0mxzGVKmfCled+IgQuM/FCguizJqhqz7mXK/lGInRekh0WXSw7cR4+i795pzK3Tt4fO3BHOTmT0DOvJziBWQoND8CzWDE/S6xEecy4NK0Og1aMGFvT9DSonrB/PJ6TVZs1mYLDKVVfvKcDT8meJmQhYhkY88Dfi5BIblmU7Ujfu0B9Pxatz2TzkXQv0HY7DTS2aezho+nXS0686tvSyP5H+EoaJbiWZQhibPK5/pjuRY/xZgsabxWtSyNJbAqhxdiz3erQDhWhbrvSRhHgGGYVkAvsEpHOhhnIhjYhRL3ktdVIJmlJ/61uPIq278QCWbwUGLj0oc8DWE2+wpG7CSCIq3W2r6fN+WX9vMIu3H5oqi9+Nby8zxvx78R/qr1UOkWI58rBgnzKquQiHDEGurAwGMK9Roge75KyxYzBhUehUKIeoCdFG0GWFi3NfNs/STcuWje/dPt6IfIoG6mq/bQuHhKren8t/zl/doj304HDtpfs2N1vaffY987ajE3zxRtbxf7G0cdxEGxcn5Pa+T6IxkqduaX4uSOixbo1d4COtF0PpyrPw1mr2S/75sA437ICBGRCi686TbZx8uhY4cg9aFUL6kNbvV+8x7i5yVZKFXj3PhrmM3Vedvxf6H24VfZAgkc4y3k3Kd9TRj0/kxphyZ09mIwbtK/aQ81wVRZ02mdeaZxkhWcOZF88x8/WgQ71GPL+lJkKYutW9HnZBn+dotj+jNyryshvlei8mO1Xh5nAo3InuPNN+j0CRVEkvj3GmA5T1H45pfoa/6PtYnI0tjsEINSV08WMfizrg1f45mO3PXT2jxQndDSXu5/i7hYDrTV3+WdkzfMQjve4/rpjGGdfMzLAh+utGvtUQcLTEvbqHT6mzja60jjocMvxVd6DGwUu3vFHWv4ApMX3xSrnhNnD1+RtO5hG2OJsVPefP7L+KEX5WfmT76hqX8WS7JxG0WFOCT7mxVvR37EwNu+VFtjGzMWsG6/P087X4pW4+996RaXiTdalwpxz1TpbdW8L15i1sNAGWmB/tv+Pvv/EIcMMTczyScsHLihZhCWHK1BucooCh986yWRpoetr5TyjIMw9HTiJFU7qIcGsv0L1raMxsgZhpmtM6lSY/urbnOMLNlDkGmnJuRW94R2O7c9r1euK51o3771q3y9Ws2K6/f6sLmcgH8bl7vitIdw/qyK6ED4MWNAoFMcXtbt87bvvatFHNL0K94+JTb8255b87thR6Vqs8IBK1GrsyYVoVkus8MAt7GIGnHFkhBxzTH/Be0CQRAciur3BWeC5RbgNHPu7KjMt1Omr3Dc4XULwPnKuyU+GFbMPoMQscsLNjEHi5syY2vSABb1m8paB1aWH3auzov61LmZd7VHqmp87twYRd7V3Pz7gA3a2dZ+e7dO1luFlCkh8YWx0QXj4kuKY4eS56YkjExxcUxC2UJUqkzV5qQIMkR5GjxOxOku3INtTp9rQGNax6JQysj3O4I5WiloYlUV0Vkeqx60feJ99G9hlq9rtYw2qDtanWGviEb5tqPNzYmZtV002LS9EIux1bHQk94uOEi/cLjNpBJ7EebMf2+T7lGcFlre9AQ3RDz3rZq3SzyEouuNVJghdtQk6J/zVBaOJvrMa1Mj6AhU19s3XQmiH4fdmVx4o4rzMs7NRWXYfdp+A7eIAiZNoy85FFa7p6g14q0sPB0RTyfasQbqbycDMLD0yJ6eBYHrYeCW+5/De5hdvszcmKUB1/I8cFf79cFv46awO7qZwGWgMsWSxaJ3xNv8rS0qFS7AhSKwDXrIbUyVIxWi+VygLoCh/nmJXi/YcBhquNMf8AtsZPLSptjLYhHLjqhW/VpVW5Oo0LpH0GzACVhmerEe0WPor+lodXb8AA43p9QyRwSiUOWpxAnOiWyOJnFEjtkpRqhwyEB3318iNxWXar2MQaF4kKCFEH6GfCRrikAarBHYvRmrmSsZk/Ozpjin2TCmVNHTrDMxk0RV+Tve27cai2n0DqEGRssagkVzKFyqa0aTauDbuMcoG4xGne1F2VXEkM5PgOgZZAYgKfjA84Pfmil8ChzRKJK3rB9gA9jXxgc7BEt67liGAozkJkpJczmzyZI8buzFeRzec76EDGHw5+sgK+lukiYH7pgQWi+sOgmkaO46fzQIuFNzKv0j+venT+DVec055Sk21QziDyPwtZZeowb425+vXMvOV2VpEnimXRmahQYUXcApb4Hx7R/vUk/56xqMSTq7+NQ3V8cCSl8oWfXYb+fB3GPNrg44aMYGTxtbIltk+3GxutsmjUyM9IKcxP+g+zg74Dg/wpJU6eFgIoFw7DYD57wxLCEXRkPyFe00vMBix0WwMIN1EXnRGadKW1iNhmaKBnrBnCs2TvF76GiHxfsEIqDK4OHyB65qOeRh+5yski0GkdXlYdUM2f+fKkXBYHhezHRkctuTR6ur9HpavTDh4gcBcqRh2ZRgbKjZm5+/o47M+/sUKu5681FI/bEFdTOPbSBv+GQIEUapci8ThGTWzN7374edczBECOHk+hsbnauJPLsxBQlxPhCHZYslycXFFRyC04hOY2lf2oy/S714Ng7uSvU6OAVjdh/cXZ7XbEpZnTu9zyrU7eyGQdZcWRjTCS/xGB3hcrFiYy+jIw+KZulLuJP1N9A6pR46fekJW5Zchrb9MO8bmq6pdD+N/nvzWPzv04o/3eIHZ+WJHEnLfkeLwVboNAUZOfssKNRVu7mWZi17MrQxlx9uX3nHloVjbKdLGp8ikOl9DeGqZw0GLKe/fspXR8Uz1NVRav9zZ6oIDgX+kY/dqVFbBdZ/EclOrfpJgKAOZxucGjnjscdvpLsFCaZp0zfZpW72ExmSVhu3TbdPCVJ4Ey+crS9KndJRVrKYQCqc9RZSmWWOucmUcnLUubIN2fRkdOM9dU6j0bj0VX3K1Iuj6ZaN1Cl9cRpKnTVn7VVcRUVcTrpvI6PAXgaHwvQkcTKjo7VFC5zOlDCwMiytlsmcTg2Nc6524q7RdkSI6VzN6VbMkFklFoMCQwuw9tZ3E5bZ0AOIwZt8ylwAAwvODgjVGUplBkRsZbCsWe3NzSdBUlWcYHKqBuR5qTNWE0j0GZfGS/Xo19Oxk9+9a/ZIZRapfbtErvYYhc6xXuYgE0osUjs22V2idUprOamJMxBcxev3rFau0U4jrnh8BMKoyclARZnHWcyj5omi8YZ57pO18gEvNW9vC8makHV2JiS6KKi6JKYZ4o8L7ooR342s//bSBe+Cw2DCju3o6+Spv/wuaAuPwRfeBSioLEzwP87v3HvmxvvOM6buhA5+nRXZUT63SkYwcQPMd+J6Gg/OSZ0ytt0U+UjpxwdUvduI4h74pe6fPAJy3Nj1AFO9yigsBycvq/lantb6NPw6+2Ql1dqG8+FANLby3uDQh9vbrvaMqILfvwQpPL6+GNeBUHAmJc+PhQKOXZI6gMgz+vBA4KgQHf6Z9H0wSdsz/XmA+D3kY4CJ3mQus4tbcInQX+Mq3h36Xq48El7W6f3YOySFw1pSwvAhhknVWkrNJoKbdUnIs+r0OTIn2b1jYbqXFVrLFbl3iSBC89V3VQTVk0INNPMgU26+Bx1VA7fX4aDLUmlI2WwoXr+4mgcNI1GQ0Vx2hMIGJk/EfvCRCry3bHWAzpvoIvmCgS9jvYbFx0rV27s3mZaeOXZ2dZhZWcYYNxEFTKJss2+9Wr+VFuboc3a53ctF9G3JSLVZwoB40yZd98Dqms4ve03sycHWj7TQWkbTnX1j6xbQj5sj4o1zDHORiXEXNjWZQiMaTAYQ9Mi0d2hCBf6VCeu/LfFWAOPjCUPyxcLGL1G8AqVa2OnPGONZT9LYbcaMuQ5Oich+SHtC+ZgjUP8R5wjU6iYm58+S024QYUgQAzYmIYmNtoZh7NbPJuDhHrKDs2adchHyA78I3wHErQ8zHZKHWKxQ+rcx69P7HCIndJsirxtWxvhppXPYLVMmGCxSkdWM6qd1oU2NnfGwHIU4PPxNlFt1E22XTuuQZ2tUmVXE3lu9clSVexGrUqONkJmbdgwCxJtPPLdKN/uOKtGjVrFsbaXIvdnG52ZPWufl5U9X9uTiZr92aVITNGWVC2F4K0W7niQuGFssAgx1rHhvgOxl0rY3jGtxzu9Ul5M7eI+/VKKXpJ603bTEvAr/fyUyz5eLK+cPLNnWsd2AqhAdi/Tp89Po9CO9z9FL2XYxBah0Cy2uSyxDZ4sU5Cncv+EnGnr0/1nT3bMtVttn3R9nIgEnCJBgUuIYNko/xtYHNZbeuGk4oPWV4X5BS+tJcu0k7rM6c60xU+a06f7ZLNb5yY77P/peOsmaZeVWF8W5Be+sh8snFRIf5v0uWn4/zWFVxJ9cErp2aAnwLJmplmD7MGn/iE4tp086nqC0jTm778g5ReDV7n21+yvzVgVzF+//NL2Z9bbK0osIBPeMVUxFb90sysZwu69NYgvK12ysfvAo47ezN+ek5ci1hbvotv8OdHV7nnEzs3oKTdeLcgSAeDPShhf/lus/lrCug7AYjsgwuV7E2O3BqYLI5eRlkUK0wO3xibtMbvXrk6GI2Kdm5WAHV8fGE+LD4xCj7RZm54To8pHyHBKGhcn4zOOKCNwXBrXP0K5Tc6XnflwsihVfm5MupbVWO/RlMfGlms8/USOyoV7NP2+9Zmv/wJ5IiWs84tswd7rLOOBmuvWdERtzYd45qLaq3UC5z/jls+mkFHsfEnzqKvDalR4HERFydu1fSLeCMOHQqHpDM5pV3bjCaadD48ngFATmq9L6/EEWvxVDDPDcpJuCdwZmOmjZDAn9bqqzP5mwONlmySZcZZA+0UaEnOoxuh3UmPPFIUPMOW9zAJmr5zpnRmGvyj57xmn3knsJBUQu4jOwLeY+tJVWYxl0M5KZarugNEv5xs1BJ8yoBPEY5enKwobI//lqWANlAtVwGG6Zu1xKsJhPOhYGOL3gCYV8qEMxoX7w7mwTQEl1tMbiHegSmh9S/2VIRzGhTYKnKlTQLnvin8IJW48NAKmhI5xLlkBecakbQlCKOEKBPt26V3AoRA/wBXUd8xPZcESz/gtwqV2/6HwyJSCsGjCXJODKNAYRyqNWerwiKROki1XXCMOXm7yRAtNAqnKkS2uJt7HUtmzJWo+xsglbMVxaFyzmLMwYM5WUusmrcfeJ0N4rzVgHRqM1qco1nkufAiKB3h+JwJP+GH4Ojze7g5Obp3C/vzO9vCIQFL1AxdBDVtp5v/4ymk0aD2x8XArwkpOpNyd2dTQNFutDcfBktN2UiFQGE6hSE8PV8AwgAQwJFjMJCMcAxSB9WH4LIoJanqdwS9DZlEz9Pb6G3M6y2x6yjaPZ6wtTMwYhagmQesRHow91h9PMT9sQLM57rziI6KFEZaHvZQAbWq7sIzRseG1PzsPZwgpA/cKuFS1U/vIk2GBIzf3VJLy1ltK0XkB6Gew87BxHkGOy3z7z5BppQis9wJx6x3zV8QMKrYBaZOjybtMwLcsKUbqEWn6NIQeWcycwzq4PGi4wI8s1hP5QcyHv+rGA3p+HbWdQhvfbL5Te2eyeflP8ck1kpZPHD1+4jjMQlJoui7FOM9JclqZLj0u+p3Cg6WUtN+p8LknU9p38niXE9p9n+AHqO1fSbzpsyoNRuapxDe6BSvSH9sfo/0CeZ+Ue8qor3qenAr+FcT1hh2gkiZdT24/TuTdSWgfiGUOV06fXak3MU8m3tXOV0RH+/n0u1LOSWNYPfK4JER/su7Kb/paTWWVtkb3ncjrtJW62m9QtD5BL+i5NJX62odjy3IEbt6MGTy3IOecILfsfcZ0Nz9HcC5XsPfp0/luQe45QY719BluXq4AtxSL5UZlRXFjY2UX3L17ldGeDwqY/5JbU6ueiMKtm9uYnekXCqp/4Xdn7/+qXclYo8oMJf+57fhI0LCjVJD4rb8rN7cy2JzC/lzCmcwuRrLL2V9Gs6dwij9zyt2WzoKCXXQrY9fChU1LFq9hWBhriosuqbOVymzVbpXdd7ZSPYzCVRIouykEJZcSosJaQtXZWUpJ1uMwbNHf4QjoX9cbp/hxODDlcQbifSZf/IBVls7sapraQ3QSHT1IZIk5yuqe1mS5f8lFP2JI1lxCHaHTUwOOMA7VJzL2FTbMb53WZJW5A3yfuj6vN69vPGC1e+OnlVoaYPYgnODDGrWqzEDf2Moewd65WJaqKlOv+U+Ag9nNjWXLnePhhL+MIaoywZYM73A/5R/BaFUZfg2hLZcI2IJwCHFjdnS2GUKvj62Pscub68TWT5riCydp/SOkKRYZUG16k4Dq8tvj14VS7ZcXj+VhH2KIQf4PsFnYfqzT/yFmGmXgt7GBs1b60SF1FgXFc3MkqgtF8S9D+fNyc1RTvN4pqlIejxGso5lFRVUsc3sWE0mUf7cMudj/MUf8H2Co2PfYI9h+DIgrK2SgEcp23npUpGoU9QoxmBqn9KO+7fnRGWoGwVVla0Krn6b5XTBoOz64JmENkV7ApCFTtYzVTMrfhQokgjIxG7WdGJw4cmIJpGGG4h5Pq62UI7fnOqcd/unvBY9MGHlpiLFXjGJnhQK+lnEepVvhcincyitEjuLCle4rvst8bEX7G2RrxeZBSl0Yqh7JqqPUscj15MvqQcg2bD95ALsN4yP/2h/5svpF9mG2YQfI/ZMG4tLS1lLeGV1NARdGUEe8F46jR9RD7K1f9FD8sGER2Lo7VJVkRkYeddDW8sFzD4KbW4mvHDvW4edm4bMiFJXBgO3Xkbcvvs3U+u5dq3GDuYjIUaCMPvXC+A0z8b0QL8aL7+PdkPj9QN6YvK+tDbUNo8wmtUwtAi3/+7Zz/iN2fX95B5P4+o6Eh1YWNkRO9R8ZSRnVbxEAkK88EOJdvA2fZ9BJNADyGy8/AOh+w2D+y1RQQHb3BklpeJeXKY5/d7sP+g0AQs+cQIftvAHx2O40W1b7zvuXVQzwvwgBSJ9NIEqwW3caS7sBvQ+HdxKX3b3+k7IPyiEaQ37xmBL8pzyt0p9pbGSNq+W+tDfOVBGWnu6R8uJQnXu9XfQLrugnSxctggSyDte/7Kho700N6FBOkwG7Ab8gyVvrcQ1bfK324Hi13VbvqjFODVue+h9ps3M0wbuux72UuytUm+R97XgwknX4RP4oLyOVcXUH5dfWj58mf3j/p5oRwfBf7rY4UPvZD1tsTuSf2b5VF123PARtAP2ZNQN/mCku6Nv/oIYw0F9mqqDp/4PhehTA13dJK3sb9fnSHQyYnd2R/MP7q185OzRqPXRIANA1Twf4e09pz4MqdPcrWN5RtMdlOAVQgO50gAY8sZi+8jLnAFakcwjN6Fwm9ej+VxCJHsh4FqD2/VacEAR/nFABTlEYbvpfCofp/5wIZP+zkZgfUE6MrJB8WKFh9MgIgk5PFjpYSp5UfB5nXG1fY95E4FnWse49ch1Qq4+yQ/+JDzAhJxOjbvNjEa89U6nvp7dlGCPpimmKVrJCpLo+OPA425mlUt3BEBDI0SYWu/0GFkm8KuRSx2DDX0O5RlSHY9IgPvG9zmqDoFunHckc0ogPWKIbUKDwWit3TEzd03Z3RkrafRF1FFED0Sr8aFPIEpkiRqhy7QBF8rQsY6uWPZmpNjjodorvhkCCpNEZTBabw+Xx8cMjICIJRjbMPwQ+06ho6BiYWNg4uHj4BEIJiYhJSMnIhQmnEEFJRS1SlGgxYsXR0NLRMzAqbaxLKw9aAYzGhxiXlEaKOuRp1QdiCxNBkIMnPqHoBhq0OBYELqR81RxisJM10o49WEWwuKow09xwyAsZqpHq8F0asZimWj6O52ieBiLUspe05Yd7jz4+ev7j2Yvnz+49f7tGNE88aJxYJLtkBa4KSjhSA9uIS4IsSKA0tAdgkJNwr3jkojySgR5K3NCpYkgzk4hLiCtuqoZEZZDFqLDUcETafUYEcs64WlVA9JOvFNLYBq1JTTm0QCqbZRFm1GEb3uCQTLGVBZGuhq4vS0xi0KWAfJyfSGwSOnctkHhor0To2JZd6mpJtHr1+cXze0vgfbXMXiZmNkRDwnk94CCT/mYl4ATWKjIzZPab8N4sARGi0cBJjMILyVcLNC7eyfm15Zb++DU11EJct6CHJkrGHVvkvg75kMvG4PqiPXSkI+lYOpFOpTP1vFzb2yV/0UCK9O+aXL6wmLUHbM1NrF5yQWsmYGcjG6SiCUoB)
      format("woff2"),
    url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/iconfont.adc02294.woff)
      format("woff"),
    url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/iconfont.d151a170.ttf)
      format("truetype");
}
.read-icon {
  font-family: read-icon !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.read-icon-share-fill:before {
  content: "\E639";
}
.read-icon-authsign:before {
  content: "\E605";
}
.read-icon-watch-later:before {
  content: "\E600";
}
.read-icon-share-bold:before {
  content: "\E601";
}
.read-icon-save:before {
  content: "\E602";
}
.read-icon-loading:before {
  content: "\EEE3";
}
.read-icon-bilibili-tv:before {
  content: "\E668";
}
.read-icon-replace:before {
  content: "\E73C";
}
.read-icon-arrow-right:before {
  content: "\E744";
}
.read-icon-close:before {
  content: "\E637";
}
.read-icon-sort-up:before {
  content: "\E66A";
}
.read-icon-sort-down:before {
  content: "\E679";
}
.read-icon-list:before {
  content: "\E636";
}
.read-icon-share-WEIXIN_MONMENT:before {
  content: "\E635";
}
.read-icon-info-warning:before {
  content: "\E634";
}
.read-icon-earphone:before {
  content: "\E8BF";
}
.read-icon-circle:before {
  content: "\E632";
}
.read-icon-location:before {
  content: "\E60B";
}
.read-icon-heart:before {
  content: "\E631";
}
.read-icon-share:before {
  content: "\E633";
}
.read-icon-heart-fill:before {
  content: "\E705";
}
.read-icon-time:before {
  content: "\E630";
}
.read-icon-toprank-normal:before {
  content: "\E63B";
}
.read-icon-popularity:before {
  content: "\E62F";
}
.read-icon-auth-p:before {
  content: "\E62E";
}
.read-icon-rate-fill:before {
  content: "\E62C";
}
.read-icon-rate:before {
  content: "\E62D";
}
.read-icon-rate-half:before {
  content: "\E616";
}
.read-icon-coin:before {
  content: "\E617";
}
.read-icon-fav-num:before {
  content: "\E618";
}
.read-icon-danmu:before {
  content: "\E619";
}
.read-icon-like-fill:before {
  content: "\E61A";
}
.read-icon-video-play-num:before {
  content: "\E61B";
}
.read-icon-comment-num:before {
  content: "\E61C";
}
.read-icon-view-num:before {
  content: "\E61D";
}
.read-icon-fav-fill:before {
  content: "\E61E";
}
.read-icon-comment-fill:before {
  content: "\E61F";
}
.read-icon-up:before {
  content: "\E620";
}
.read-icon-up-fill:before {
  content: "\E622";
}
.read-icon-share-QZONE:before {
  content: "\E623";
}
.read-icon-share-QQ:before {
  content: "\E624";
}
.read-icon-coin-fill:before {
  content: "\E625";
}
.read-icon-share-news:before {
  content: "\E626";
}
.read-icon-like:before {
  content: "\E627";
}
.read-icon-share-tieba:before {
  content: "\E628";
}
.read-icon-share-WEIXIN:before {
  content: "\E629";
}
.read-icon-share-SINA:before {
  content: "\E62A";
}
.read-icon-like-num:before {
  content: "\E62B";
}
.read-icon-more:before {
  content: "\E615";
}
.read-icon-line-star:before {
  content: "\E614";
}
.read-icon-star-rated:before {
  content: "\E613";
}
.read-icontixj-oval:before {
  content: "\E612";
}
.read-icon-default-cover:before {
  content: "\E610";
}
.read-icon-tag:before {
  content: "\E611";
}
.read-icon-up-ad:before {
  content: "\E60F";
}
.read-icon-lv0:before {
  content: "\E6CB";
}
.read-icon-lv1:before {
  content: "\E6CC";
}
.read-icon-lv2:before {
  content: "\E6CD";
}
.read-icon-lv3:before {
  content: "\E6CE";
}
.read-icon-lv4:before {
  content: "\E6CF";
}
.read-icon-lv5:before {
  content: "\E6D0";
}
.read-icon-lv6:before {
  content: "\E6D1";
}
.read-icon-auth-c:before {
  content: "\E755";
}
.read-icon-zhuanlan:before {
  content: "\E60E";
}
.read-icon-general-moreactions:before {
  content: "\E6EA";
}
.read-icon-nav-back:before {
  content: "\E638";
}
.read-icon-fanhui:before {
  content: "\E621";
}
.svg-icon {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
.svg-icon svg {
  width: 100%;
  height: 100%;
}
.svg-icon.use-color svg path {
  fill: currentColor;
  color: inherit;
}
.v-toast[data-v-f38b5f5c] {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
}
.v-toast__wrap[data-v-f38b5f5c] {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1006;
  width: 100%;
  height: 100%;
}
.v-toast__mask[data-v-f38b5f5c] {
  pointer-events: none;
}
.v-toast__font[data-v-f38b5f5c] {
  display: block;
  text-align: center;
  font-size: 56px;
}
.v-toast--info[data-v-f38b5f5c] {
  max-width: 240px;
  padding: 10px;
}
.v-toast__text[data-v-f38b5f5c] {
  font-size: 12px;
  display: block;
  text-align: center;
  word-break: break-word !important;
  word-break: break-all;
}
.v-toast__transition-enter-active[data-v-f38b5f5c],
.v-toast__transition-leave-active[data-v-f38b5f5c] {
  transition: opacity 0.25s;
}
.v-toast__transition-enter[data-v-f38b5f5c],
.v-toast__transition-leave-active[data-v-f38b5f5c] {
  opacity: 0;
} /*!
 * @bilibili/userAvatar
 * version: 1.1.8. Powered by main-frontend
 * ç”¨æˆ·å¤´åƒå…¬å…±ç»„ä»¶.
 * author: wuxiuran
 */
.bili-avatar {
  display: block;
  position: relative;
  background-image: url(data:image/gif;base64,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);
  background-size: cover;
  border-radius: 50%;
}
.bili-avatar,
.bili-avatar * {
  margin: 0;
  padding: 0;
}
.bili-avatar-face {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.bili-avatar-pendent-dom {
  height: 176.48%;
  width: 176.48%;
  position: absolute;
  top: -38.33%;
  left: -38.33%;
  overflow: hidden;
}
.bili-avatar-pendent-dom img {
  height: 100%;
  min-width: 100%;
  -ms-user-select: none;
  user-select: none;
}
.bili-avatar-img {
  border: none;
  display: block;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
}
.bili-avatar-img-radius {
  border-radius: 50%;
}
.bili-avatar-img:not([src]),
.bili-avatar-img[src=""] {
  opacity: 0;
}
.bili-avatar-icon-big-vip {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/big-vip.svg);
}
.bili-avatar-icon-business {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/business.svg);
}
.bili-avatar-icon-personal {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/personal.svg);
}
.bili-avatar-icon-small-vip {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/small-vip.svg);
}
.bili-avatar-img.bili-avatar-img-error {
  display: none;
}
.bili-avatar-right-icon {
  right: 0;
}
.bili-avatar-nft-icon,
.bili-avatar-right-icon {
  width: 27.5%;
  height: 27.5%;
  position: absolute;
  bottom: -1px;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast;
}
.bili-avatar-nft-icon {
  right: calc(27.5% - 1px);
}
.bili-avatar-nft--icon-1 {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/nft-label.gif);
}
.bili-avatar-nft--icon-2 {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/short/user-avatar/nft-label-oversea.gif);
}
@keyframes bili-avatar {
  0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-97.5%, 0, 0);
  }
}
.bili-avatar .bili-avatar-size-80 {
  width: 22px;
  height: 22px;
  bottom: -1px;
}
.bili-avatar .bili-avatar-size-48,
.bili-avatar .bili-avatar-size-50,
.bili-avatar .bili-avatar-size-60 {
  width: 18px;
  height: 18px;
  bottom: -1px;
}
.bili-avatar .bili-avatar-size-36,
.bili-avatar .bili-avatar-size-40 {
  width: 14px;
  height: 14px;
  bottom: -1px;
}
.bili-avatar .bili-avatar-size-24,
.bili-avatar .bili-avatar-size-30 {
  width: 12px;
  height: 12px;
  bottom: -1px;
}
.bili-avatar .bili-avatar-size-nft-80 {
  width: 22px;
  height: 22px;
  bottom: -1px;
  right: 21px;
}
.bili-avatar .bili-avatar-size-nft-48,
.bili-avatar .bili-avatar-size-nft-50,
.bili-avatar .bili-avatar-size-nft-60 {
  width: 18px;
  height: 18px;
  bottom: -1px;
  right: 17px;
}
.bili-avatar .bili-avatar-size-nft-36,
.bili-avatar .bili-avatar-size-nft-40 {
  width: 14px;
  height: 14px;
  bottom: -1px;
  right: 13px;
}
.bili-avatar .bili-avatar-size-nft-24,
.bili-avatar .bili-avatar-size-nft-30 {
  width: 12px;
  height: 12px;
  bottom: -1px;
  right: 11px;
}
.note-up {
  padding: 18px 0;
}
.note-up .up-desc-container .desc-top .up-name {
  font-size: 14px;
}
.note-up .attention-btn-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 86px;
  height: 32px;
  border-radius: 6px;
  font-size: 14px;
  color: #fff;
  background-color: #00aeec;
  cursor: pointer;
}
.note-up .attention-btn-container.is-attention {
  color: #9499a0;
  background-color: #e3e5e7;
}
.note-up .attention-btn-container .cross-icon {
  margin-right: 4px;
}
.note-up.h5 .up-desc-container {
  margin-left: 6px;
}
.note-up.h5 .up-desc-container .desc-top .up-name {
  font-size: 13px;
  font-weight: 400;
}
.note-up.h5 .up-desc-container .desc-bottom {
  height: 14px;
}
.note-up.h5 .up-desc-container .desc-bottom .modify-time {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 4px;
}
.note-up.h5 .up-desc-container .desc-bottom .modify-time .modify-time-text {
  position: absolute;
  font-size: 20px;
  transform-origin: center center;
  transform: scale(0.5);
  white-space: nowrap;
}
.note-up.h5 .up-desc-container .desc-bottom .modify-time .modify-time-text,
.note-up.h5 .up-desc-container .desc-bottom .up-fans,
.note-up.h5 .up-desc-container .desc-bottom .up-fans .up-fans-text {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
.note-up.h5 .up-desc-container .desc-bottom .up-fans .up-fans-text {
  position: absolute;
  font-size: 20px;
  transform-origin: center center;
  transform: scale(0.5);
  white-space: nowrap;
}
.note-up.h5 .attention-btn-container {
  width: 66px;
  height: 24px;
  border-radius: 4px;
  font-size: 13px;
  background-color: #f69;
}
.note-up.h5 .attention-btn-container.is-attention {
  color: #9499a0;
  background-color: #e3e5e7;
}
.ring-progress[data-v-0129fa17] {
  position: absolute;
  transform: scale(0.5);
}
.svga-container[data-v-1d9a3bfc] {
  position: absolute;
  z-index: 100003;
}
.svga-container.svga-top[data-v-1d9a3bfc] {
  width: 120px;
  height: 120px;
}
.svga-container.svga-center[data-v-1d9a3bfc] {
  width: 60px;
  height: 60px;
}
html.night-mode .dark-img {
  filter: saturate(85%) brightness(97%);
  will-change: filter;
}
.view-note {
  position: relative;
}
.view-note .page-loading {
  background: #fff;
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-direction: column;
  flex-direction: column;
}
html.night-mode .view-note .page-loading {
  background: #141414;
}
.view-note .page-loading .loading-icon {
  width: 24px;
  height: 27px;
}
.view-note .page-loading p {
  color: #999;
  font-size: 17px;
  line-height: 18px;
  margin-top: 4px;
}
html.night-mode .view-note .page-loading p {
  color: #727272;
}
.view-note .page-fade-enter-active,
.view-note .page-fade-leave-active {
  transition: opacity 0.2s ease;
}
.view-note .page-fade-enter,
.view-note .page-fade-leave-to {
  opacity: 0;
  display: none;
}
.view-note .note-content {
  position: relative;
}
.view-note .note-content .preview-note-up {
  z-index: 2;
  padding: 18px 20px;
}
.view-note .note-content .ql-container {
  padding-bottom: 200px;
}
.view-note .note-content .ql-container.ql-snow {
  border: none;
}
.view-note .note-content .ql-container .ql-editor {
  position: relative;
  padding: 0 20px;
  background: #fff;
  color: #222;
}
html.night-mode .view-note .note-content .ql-container .ql-editor {
  background: #141414;
  color: #e0e0e0;
}
.view-note .note-content .ql-container .ql-editor .time-tag-item {
  background: #ebebeb;
  color: #212121;
}
html.night-mode
  .view-note
  .note-content
  .ql-container
  .ql-editor
  .time-tag-item {
  background: #272727;
  color: #e1e1e1;
}
.view-note .note-content .ql-container .ql-editor .time-tag-item:hover {
  background: #e3e5e7;
}
html.night-mode
  .view-note
  .note-content
  .ql-container
  .ql-editor
  .time-tag-item:hover {
  background: #303132;
}
.view-note .note-content .ql-container .ql-editor .ql-image-preview {
  box-sizing: content-box;
  max-width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: -10px;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  display: block;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .ql-image-preview
  .img-preview {
  display: block;
  border-radius: 2px;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .ql-image-preview
  .loading-img {
  opacity: 0.5;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .ql-image-preview.uploaded
  .loading-img {
  opacity: 1;
}
.view-note .note-content .ql-container .ql-editor .ql-tag-blot {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.view-note .note-content .ql-container .ql-editor .ql-tag-blot .time-tag-item {
  cursor: pointer;
  transition: 0.2s;
  background: #f6f7f8;
  border-radius: 4px;
  height: auto;
  line-height: 20px;
  display: inline-block;
  padding: 3.5px 10px 3.5px 5px;
  font-size: 14px;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item:hover {
  background-color: #e3e5e7;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .ql-tag-blot
  .bili-note-iconfont {
  font-size: 16px;
  color: #18191c;
  line-height: 1;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__text {
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
  font-weight: 400;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__text
  .title {
  max-width: 150px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__desc {
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #61666d;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item {
  background: #ebebeb;
  color: silver;
}
.view-note .note-content .ql-container .ql-editor .blot-disabled > span {
  -ms-flex-align: center;
  align-items: center;
  background: #ebebeb;
  border-radius: 12px;
  height: 22px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  cursor: not-allowed;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.view-note .note-content .ql-container .ql-editor .blot-disabled > span:after {
  content: "";
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item__desc,
.view-note
  .note-content
  .ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item__text {
  color: silver;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .blot-disabled
  .time-tag-error-tip {
  white-space: nowrap;
  color: silver;
  line-height: 21px;
}
.view-note
  .note-content
  .ql-container
  .ql-editor
  .blot-disabled
  .bili-note-iconfont {
  color: #999;
}
.view-note #hidden-toolbar {
  display: none;
}
.view-note .rightbar {
  position: fixed;
  bottom: 33px;
  right: 24px;
}
.view-note .rightbar .sanlian-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  background: #fff;
  border: 0.5px solid #f1f2f3;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06), 0 12px 20px rgba(0, 0, 0, 0.1);
  border-radius: 52px;
  padding: 0 13px;
  transition: all 0.3s;
  list-style: none;
}
.view-note .rightbar .sanlian-box.fold {
  padding: 0 1px;
}
.view-note .rightbar .sanlian-box.fold .fold-action {
  width: 0;
  opacity: 1;
}
.view-note .rightbar .sanlian-box.fold .fold-action .tab-num {
  visibility: hidden;
}
.view-note .rightbar .sanlian-box .tab-action-icon {
  display: inline-block;
  width: 48px;
  height: 50px;
  line-height: 24px;
  text-align: center;
}
.view-note .rightbar .sanlian-box .fold-action {
  transition: width opacity 0.3s 0s 0.15s 0s;
  overflow: hidden;
  opacity: 1;
}
.view-note .rightbar .tab-action-item {
  position: relative;
}
.view-note .rightbar .tab-action-item .tab-action-icon {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
}
.view-note .rightbar .tab-action-item .tab-action-icon .tab-icon {
  line-height: 24px;
  font-size: 24px;
  font-weight: 500;
  color: #aaa;
}
.view-note .rightbar .tab-action-item .tab-action-icon .tab-num {
  margin-top: 4px;
  font-size: 10px;
  font-weight: 500;
  color: #aaa;
  line-height: 10px;
  transform: scale(0.8);
  transform-origin: center top;
}
.view-note .rightbar .tab-action-item.is-active .tab-icon {
  color: #fb7299;
}
.view-note .rightbar .tab-action-item .svga-center {
  top: -12px;
  left: -5px;
}
.view-note .rightbar .tab-action-item .shake {
  animation-name: shake;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes shake {
  2% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg);
  }
  4% {
    transform: translate(-0.5px, 2.5px) rotate(0.5deg);
  }
  6% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  8% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }
  10% {
    transform: translate(1.5px, 2.5px) rotate(0.5deg);
  }
  12% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(1.5px, 1.5px) rotate(-0.5deg);
  }
  16% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  18% {
    transform: translate(1.5px, 0.5px) rotate(0.5deg);
  }
  20% {
    transform: translate(1.5px, -1.5px) rotate(-0.5deg);
  }
  22% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  24% {
    transform: translate(-0.5px, -1.5px) rotate(0.5deg);
  }
  26% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  28% {
    transform: translate(2.5px, 1.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  32% {
    transform: translate(1.5px, 2.5px) rotate(1.5deg);
  }
  34% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
  }
  38% {
    transform: translate(1.5px, -1.5px) rotate(1.5deg);
  }
  40% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  42% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  44% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(-0.5px, 2.5px) rotate(-0.5deg);
  }
  48% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  50% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  52% {
    transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }
  54% {
    transform: translate(-0.5px, -1.5px) rotate(-0.5deg);
  }
  56% {
    transform: translate(1.5px, -1.5px) rotate(1.5deg);
  }
  58% {
    transform: translate(0.5px, 1.5px) rotate(1.5deg);
  }
  60% {
    transform: translate(-0.5px, -0.5px) rotate(1.5deg);
  }
  62% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  64% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(2.5px, 0.5px) rotate(1.5deg);
  }
  68% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  70% {
    transform: translate(0.5px, 2.5px) rotate(1.5deg);
  }
  72% {
    transform: translate(1.5px, -0.5px) rotate(0.5deg);
  }
  74% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  78% {
    transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
  }
  80% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
  }
  82% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  86% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }
  88% {
    transform: translate(-0.5px, -0.5px) rotate(1.5deg);
  }
  90% {
    transform: translate(-1.5px, -1.5px) rotate(1.5deg);
  }
  92% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }
  94% {
    transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }
  96% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  98% {
    transform: translate(1.5px, 0.5px) rotate(-0.5deg);
  }
  0%,
  to {
    transform: translate(0) rotate(0);
  }
}
.bili-view-note {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute !important;
  box-shadow: 0 3px 25px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background: #ededf2;
  transform: translateZ(0);
  max-height: calc(100vh - 147px);
}
.bili-view-note ul li {
  list-style: none;
}
.bili-view-note .note-view-drag-bar {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 26px;
  background: #dddde7;
  border-radius: 4px 4px 0 0;
  text-align: center;
  cursor: move;
  box-sizing: border-box;
  font-size: 12px;
  color: #909098;
  padding: 0 8px;
}
.bili-view-note .operation-btns {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.bili-view-note .close-btn {
  color: #2c3133;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  background: #ebebf2;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 10px;
}
.bili-view-note .close-btn:hover {
  background: #ccccde;
}
.bili-view-note .note-content {
  height: 100%;
  padding: 0 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
  overflow-y: auto;
}
.bili-view-note .note-content::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 4px;
}
.bili-view-note .note-content::-webkit-scrollbar {
  width: 5px;
}
.bili-view-note .note-content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #dddde7;
}
.bili-view-note .note-content .preview-editor {
  overflow: visible;
}
.bili-view-note .note-content .preview-editor.ql-container {
  margin: 0;
  position: relative;
  box-sizing: border-box;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border: none;
  background: #fff;
}
.bili-view-note .note-content .preview-editor.ql-container .ql-editor {
  height: auto;
  padding: 0;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-image-preview {
  box-sizing: content-box;
  max-width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-image-preview
  .img-preview {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 2px;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-image-preview
  .loading-img {
  cursor: progress;
  opacity: 0.5;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-image-preview.uploaded
  .loading-img {
  cursor: default;
  opacity: 1;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-tag-blot {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item {
  cursor: pointer;
  transition: 0.2s;
  background: #f6f7f8;
  border-radius: 4px;
  height: auto;
  line-height: 20px;
  display: inline-block;
  padding: 3.5px 10px 3.5px 5px;
  font-size: 14px;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item:hover {
  background-color: #e3e5e7;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-tag-blot
  .bili-note-iconfont {
  font-size: 16px;
  color: #18191c;
  line-height: 1;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__text {
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
  font-weight: 400;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__text
  .title {
  max-width: 150px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__desc {
  margin-left: 8px;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #61666d;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item {
  cursor: not-allowed;
  background: #ebebeb;
  color: silver;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .blot-disabled
  > span {
  -ms-flex-align: center;
  align-items: center;
  background: #ebebeb;
  border-radius: 12px;
  height: 22px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  cursor: not-allowed;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .blot-disabled
  > span:after {
  content: "";
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item:hover {
  border: 1px solid #ebebeb;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item__desc,
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item__text {
  color: silver;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-error-tip {
  display: inline-block;
  color: #e02020;
  text-indent: 8px;
}
.bili-view-note
  .note-content
  .preview-editor.ql-container
  .ql-editor
  .blot-disabled
  .bili-note-iconfont {
  color: silver;
}
.bili-view-note #hidden-toolbar {
  display: none;
}
.bili-view-note .rightbar {
  position: absolute;
  bottom: 33px;
  right: 24px;
}
.bili-view-note .rightbar .sanlian-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  background: #fff;
  border: 0.5px solid #f1f2f3;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06), 0 12px 20px rgba(0, 0, 0, 0.1);
  border-radius: 52px;
  padding: 0 13px;
  transition: all 0.3s;
}
.bili-view-note .rightbar .sanlian-box.fold {
  padding: 0 1px;
}
.bili-view-note .rightbar .sanlian-box.fold .fold-action {
  width: 0;
  opacity: 1;
}
.bili-view-note .rightbar .sanlian-box.fold .fold-action .tab-num {
  visibility: hidden;
}
.bili-view-note .rightbar .sanlian-box .tab-action-icon {
  display: inline-block;
  width: 48px;
  height: 50px;
  line-height: 24px;
  text-align: center;
}
.bili-view-note .rightbar .sanlian-box .fold-action {
  transition: width opacity 0.3s 0s 0.15s 0s;
  overflow: hidden;
  opacity: 1;
}
.bili-view-note .rightbar .tab-action-item {
  position: relative;
}
.bili-view-note .rightbar .tab-action-item .tab-action-icon {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
}
.bili-view-note .rightbar .tab-action-item .tab-action-icon .tab-icon {
  line-height: 24px;
  font-size: 24px;
  font-weight: 500;
  color: #aaa;
}
.bili-view-note .rightbar .tab-action-item .tab-action-icon .tab-num {
  margin-top: 4px;
  font-size: 10px;
  font-weight: 500;
  color: #aaa;
  line-height: 10px;
  transform: scale(0.8);
  transform-origin: center top;
}
.bili-view-note .rightbar .tab-action-item.is-active .tab-icon {
  color: #fb7299;
}
.bili-view-note .rightbar .tab-action-item .svga-center {
  top: -12px;
  left: -5px;
}
.bili-view-note .rightbar .tab-action-item .shake {
  animation-name: shake;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.view-manage-note {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0 8px 8px;
  background: #ededf2;
}
.view-manage-note--header {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: 4px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
}
.view-manage-note--header .status-bar .text {
  max-width: 220px !important;
  font-size: 13px;
  color: #999;
}
.view-manage-note--header .tools-btns {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.view-manage-note--header .tools-btns .edit-btn {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-left: 10px;
  padding: 0 10px;
  height: 28px;
  font-size: 13px;
  border-radius: 2px;
  line-height: 28px;
  color: #fff;
  background-color: #00a1d6;
  cursor: pointer;
  box-sizing: border-box;
}
.view-manage-note--header .tools-btns .edit-btn--ghost {
  line-height: 26px;
  border: 1px solid #00a1d6;
  color: #00a1d6;
  background-color: #fff;
}
.view-manage-note #bili-view-manage-hidden {
  display: none;
}
.view-manage-note .note-tooltip {
  border-radius: 4px 4px 0 0;
}
.view-manage-note .note-tooltip + .ql-container {
  border-radius: 0;
}
.view-manage-note .ql-container {
  overflow: scroll;
  border-radius: 4px 4px 0 0;
}
.view-manage-note .ql-container.ql-snow {
  border: none;
}
.view-manage-note .ql-editor::-webkit-scrollbar-track {
  background: #fff;
}
.view-manage-note .ql-editor::-webkit-scrollbar {
  width: 5px;
}
.view-manage-note .ql-editor::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #dddde7;
}
.view-manage-note .ql-image-preview {
  box-sizing: content-box;
  max-width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.view-manage-note .ql-image-preview .img-preview {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 2px;
}
.view-manage-note .ql-image-preview .loading-img {
  cursor: progress;
  opacity: 0.5;
}
.view-manage-note .ql-image-preview.uploaded .loading-img {
  cursor: zoom-in;
  opacity: 1;
}
.view-manage-note .ql-tag-blot {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
}
.view-manage-note .ql-tag-blot .time-tag-item {
  cursor: pointer;
  transition: 0.2s;
  background: #f6f7f8;
  border-radius: 4px;
  height: auto;
  line-height: 20px;
  display: inline-block;
  padding: 3.5px 10px 3.5px 5px;
  font-size: 14px;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.view-manage-note .ql-tag-blot .time-tag-item:hover {
  background-color: #e3e5e7;
}
.view-manage-note .ql-tag-blot .bili-note-iconfont {
  font-size: 16px;
  color: #18191c;
  line-height: 1;
}
.view-manage-note .ql-tag-blot .time-tag-item__text {
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
  font-weight: 400;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.view-manage-note .ql-tag-blot .time-tag-item__text .title {
  max-width: 150px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}
.view-manage-note .ql-tag-blot .time-tag-item__desc {
  margin-left: 8px;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #61666d;
}
.view-manage-note .blot-disabled .time-tag-item {
  cursor: not-allowed;
  background: #ebebeb;
  color: silver;
}
.view-manage-note .blot-disabled > span {
  -ms-flex-align: center;
  align-items: center;
  background: #ebebeb;
  border-radius: 12px;
  height: 22px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  cursor: not-allowed;
  font-weight: 700;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.view-manage-note .blot-disabled > span:after {
  content: "";
}
.view-manage-note .blot-disabled .time-tag-item:hover {
  border: 1px solid #ebebeb;
}
.view-manage-note .blot-disabled .time-tag-item__desc,
.view-manage-note .blot-disabled .time-tag-item__text {
  color: silver;
}
.view-manage-note .blot-disabled .time-tag-error-tip {
  display: inline-block;
  color: #e02020;
  text-indent: 8px;
}
.view-manage-note .blot-disabled .bili-note-iconfont {
  color: silver;
}
.view-manage-note .ql-toolbar .bili-note-iconfont {
  font-size: 20px !important;
}
.note-list[data-v-13587840] {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  overflow-x: hidden;
  overflow-y: auto;
}
.note-list[data-v-13587840]::-webkit-scrollbar-track {
  background: transparent;
}
.note-list[data-v-13587840]::-webkit-scrollbar {
  width: 0;
}
.note-list[data-v-13587840]::-webkit-scrollbar-thumb {
  background: transparent;
}
.note-list .list-note-operation[data-v-13587840] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 56px;
  padding: 0 20px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 18px;
  background: #00aeec;
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
}
.note-list .list-note-operation[data-v-13587840]:hover {
  background: #19b6ee;
}
.note-list .list-note-operation .note-icon[data-v-13587840] {
  margin-right: 10px;
}
.note-list .list-note-operation .operation-desc[data-v-13587840] {
  -ms-flex: 1;
  flex: 1;
}
.note-list .part-line[data-v-13587840] {
  border: 0.5px solid #e3e5e7;
  margin: 20px 0;
}
.note-list .note-card-container .note-card[data-v-13587840] {
  position: relative;
  padding: 18px 20px 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: #fff;
  transition: 0.2s;
  cursor: pointer;
}
.note-list .note-card-container .note-card[data-v-13587840]:hover {
  border-color: #c9ccd0;
  transform: scale(1.02);
}
.note-list .note-card-container .note-card .up-mark[data-v-13587840] {
  position: absolute;
  top: 7px;
  right: 20px;
}
.note-list .note-card-container .note-card .user-info[data-v-13587840] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 6px;
}
.note-list
  .note-card-container
  .note-card
  .user-info
  .user-avatar[data-v-13587840] {
  margin-right: 15px;
}
.note-list
  .note-card-container
  .note-card
  .user-info
  .user-name[data-v-13587840] {
  margin-right: 6px;
  font-size: 14px;
  color: #61666d;
}
.note-list .note-card-container .note-card .note-content[data-v-13587840] {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  margin-bottom: 10px;
  font-size: 15px;
  color: #18191c;
  line-height: 25px;
  text-align: justify;
  vertical-align: baseline;
  word-wrap: break-word;
  word-break: break-word;
  overflow: hidden;
}
.note-list .note-card-container .note-card .note-info[data-v-13587840] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  font-size: 13px;
  color: #9499a0;
}
.note-list
  .note-card-container
  .note-card
  .note-info
  .note-like[data-v-13587840] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex: 1;
  flex: 1;
}
.note-list
  .note-card-container
  .note-card
  .note-info
  .note-like
  .like-icon[data-v-13587840] {
  margin-right: 4px;
  color: #ccc;
}
.note-list .empty-note[data-v-13587840] {
  -ms-flex-pack: center;
  justify-content: center;
  height: calc(100% - 76px);
  font-size: 17px;
  color: #9499a0;
}
.note-list .empty-note[data-v-13587840],
.note-up {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.note-up {
  padding: 12px 0;
  margin-bottom: 16px;
}
.note-up .up-avatar-container {
  cursor: pointer;
}
.note-up .up-desc-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex: 1;
  flex: 1;
  margin-left: 12px;
}
.note-up .up-desc-container .desc-top {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 2.5px;
}
.note-up .up-desc-container .desc-top .up-name {
  margin-right: 6px;
  font-size: 16px;
  font-weight: 600;
  color: #212121;
  cursor: pointer;
}
.note-up .up-desc-container .desc-top .up-level {
  width: 22px;
  margin-right: auto;
}
.note-up .up-desc-container .desc-top .up-level.hardcore {
  width: 32px;
}
.note-up .up-desc-container .desc-top .attention-btn-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  color: #fff;
  background: #00aeec;
  transition: 0.2s;
  cursor: pointer;
}
.note-up .up-desc-container .desc-top .attention-btn-container:hover {
  background: #19b6ee;
}
.note-up .up-desc-container .desc-top .attention-btn-container.is-attention {
  color: #9499a0;
  background-color: #e3e5e7;
}
.note-up .up-desc-container .desc-top .attention-btn-container .cross-icon {
  margin-right: 2px;
}
.note-up .up-desc-container .desc-bottom {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  font-size: 13px;
  color: #999;
}
.note-up .up-desc-container .desc-bottom .modify-time {
  margin-right: 12px;
}
.note-detail {
  height: 100%;
  padding: 0 20px;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
}
.note-detail::-webkit-scrollbar-track {
  background: transparent;
}
.note-detail::-webkit-scrollbar {
  width: 0;
}
.note-detail::-webkit-scrollbar-thumb {
  background: transparent;
}
.note-detail #hidden-toolbar {
  display: none;
}
.note-detail .ql-container.preview-editor {
  height: auto;
  margin: 0;
  background-color: transparent;
  cursor: default;
}
.note-detail .ql-container.preview-editor .ql-editor {
  padding: 0 0 80px;
}
.note-detail .ql-container.preview-editor .ql-editor .ql-tag-blot {
  position: relative;
}
.note-detail
  .ql-container.preview-editor
  .ql-editor
  .ql-tag-blot
  .time-tag-error-tip {
  display: none;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 10;
  top: -56px;
  position: absolute;
  width: 244px;
  height: 44px;
  border: 1px solid #e3e5e7;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #61666d;
  background-color: #fff;
}
.note-detail
  .ql-container.preview-editor
  .ql-editor
  .ql-tag-blot
  .time-tag-error-tip.show {
  display: -ms-flexbox;
  display: flex;
}
.note-detail .note-operation {
  position: absolute;
  right: 20px;
  bottom: 27px;
}
.note-detail .note-operation .sanlian-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 13px;
  border-radius: 52px;
  background: #fff;
  list-style: none;
  border: 0.5px solid #f1f2f3;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06), 0 12px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
.note-detail .note-operation .sanlian-box.fold {
  padding: 0 1px;
}
.note-detail .note-operation .sanlian-box.fold .fold-action {
  width: 0;
  opacity: 1;
}
.note-detail .note-operation .sanlian-box.fold .fold-action .tab-num {
  visibility: hidden;
}
.note-detail .note-operation .sanlian-box .tab-action-icon {
  display: inline-block;
  width: 48px;
  height: 50px;
  line-height: 24px;
  text-align: center;
}
.note-detail .note-operation .sanlian-box .fold-action {
  opacity: 1;
  overflow: hidden;
  transition: width opacity 0.3s 0s 0.15s 0s;
}
.note-detail .note-operation .tab-action-item {
  position: relative;
}
.note-detail .note-operation .tab-action-item .tab-action-icon {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
}
.note-detail .note-operation .tab-action-item .tab-action-icon .tab-icon {
  line-height: 24px;
  font-size: 24px;
  font-weight: 500;
  color: #aaa;
}
.note-detail .note-operation .tab-action-item .tab-action-icon .tab-num {
  margin-top: 4px;
  font-size: 10px;
  font-weight: 500;
  color: #aaa;
  line-height: 10px;
  transform: scale(0.8);
  transform-origin: center top;
}
.note-detail .note-operation .tab-action-item.is-active .tab-icon {
  color: #fb7299;
}
.note-detail .note-operation .tab-action-item .svga-center {
  top: -12px;
  left: -5px;
}
.note-detail .note-operation .tab-action-item .shake {
  animation-name: shake;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.tag-dialog-container[data-v-1457d01c] {
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 4px 4px;
}
.tag-dialog-container .tag-dialog[data-v-1457d01c] {
  position: relative;
  width: 320px;
  height: 190px;
  background: #fff;
  border: 1px solid #e3e5e7;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 25% auto;
}
.tag-dialog-container .tag-dialog .tag-dialog__time[data-v-1457d01c] {
  font-size: 16px;
  line-height: 22px;
  color: #18191c;
  margin-bottom: 24px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.tag-dialog-container .tag-dialog .tag-dialog__time > i[data-v-1457d01c] {
  font-size: 20px;
}
.tag-dialog-container
  .tag-dialog
  .tag-dialog__time
  .split-line[data-v-1457d01c] {
  margin: 0 10px;
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color: #212121;
}
.tag-dialog-container .tag-dialog .tag-dialog__close[data-v-1457d01c] {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 12px;
  color: #757575;
  font-size: 25px;
}
.tag-dialog-container .tag-dialog .tag-dialog__content[data-v-1457d01c] {
  width: 272px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
}
.tag-dialog-container .tag-dialog .tag-dialog__input[data-v-1457d01c] {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
  font-size: 12px;
  line-height: 1.5;
}
.tag-dialog-container .tag-dialog .tag-dialog__input > input[data-v-1457d01c] {
  padding: 7px 12px;
  outline: none;
  border-radius: 6px;
  color: #18191c;
  background: #f1f2f3;
  border: 1px solid #f1f2f3;
  width: 100%;
  font-size: 12px;
  line-height: 1.5;
  transition: 0.3s;
}
.tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input[data-v-1457d01c]:focus,
.tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input[data-v-1457d01c]:hover {
  border: 1px solid #f1f2f3;
  background: #fff;
}
.tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input[data-v-1457d01c]:-ms-input-placeholder {
  color: #c9ccd0;
}
.tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  > input[data-v-1457d01c]::placeholder {
  color: #c9ccd0;
}
.tag-dialog-container
  .tag-dialog
  .tag-dialog__input
  .input-filled[data-v-1457d01c] {
  border: 1px solid #f1f2f3;
  background: #fff;
}
.tag-dialog-container .tag-dialog .tag-dialog__input--count[data-v-1457d01c] {
  color: #c9ccd0;
  position: absolute;
  right: 7px;
  top: 8px;
}
.tag-dialog-container .tag-dialog .tag-dialog__btn[data-v-1457d01c] {
  display: -ms-flexbox;
  display: flex;
}
.tag-dialog-container
  .tag-dialog
  .tag-dialog__btn
  .dialog-btn[data-v-1457d01c] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 130px;
  height: 32px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0 6px;
  cursor: pointer;
}
.tag-dialog-container .tag-dialog .tag-dialog__btn--cancel[data-v-1457d01c] {
  color: #000;
  border: 1px solid #e1e1e1;
}
.tag-dialog-container .tag-dialog .tag-dialog__btn--confirm[data-v-1457d01c] {
  color: #fff;
  border: 1px solid #00aeec;
  background: #00aeec;
}
.note-editor {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}
.note-editor .editor-innter.ql-container {
  -ms-flex: 1;
  flex: 1;
  margin: 0 10px;
}
.note-editor .editor-innter.ql-container .ql-editor::-webkit-scrollbar-track {
  background: transparent;
}
.note-editor .editor-innter.ql-container .ql-editor::-webkit-scrollbar {
  width: 0;
}
.note-editor .editor-innter.ql-container .ql-editor::-webkit-scrollbar-thumb {
  background: transparent;
}
.note-editor .editor-innter.ql-container .ql-editor .ql-image-preview {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: content-box;
  max-width: 100%;
  padding: 10px 0;
  border-radius: 2px;
  overflow: hidden;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-image-preview
  .img-preview {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-image-preview
  .loading-img {
  opacity: 0.5;
  cursor: progress;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-image-preview.uploaded
  .loading-img {
  opacity: 1;
  cursor: default;
}
.note-editor .editor-innter.ql-container .ql-editor .blot-disabled,
.note-editor .editor-innter.ql-container .ql-editor .ql-tag-blot {
  position: relative;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item,
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 4px;
  gap: 4px;
  padding: 3.5px 10px 3.5px 5px;
  border-radius: 4px;
  height: auto;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  line-height: 20px;
  background: #f6f7f8;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.2s;
  cursor: pointer;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item:hover,
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item:hover {
  background-color: #e3e5e7;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .blot-disabled
  .bili-note-iconfont,
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-tag-blot
  .bili-note-iconfont {
  font-size: 16px;
  color: #18191c;
  line-height: 1;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item__text,
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__text {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #18191c;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item__text
  .title,
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__text
  .title {
  display: inline-block;
  max-width: 150px;
  margin-right: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-item__desc,
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-item__desc {
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  color: #61666d;
  line-height: 20px;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-error-tip,
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-error-tip {
  display: none;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 10;
  top: -56px;
  position: absolute;
  width: 244px;
  height: 44px;
  border: 1px solid #e3e5e7;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #61666d;
  background-color: #fff;
}
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .blot-disabled
  .time-tag-error-tip.show,
.note-editor
  .editor-innter.ql-container
  .ql-editor
  .ql-tag-blot
  .time-tag-error-tip.show {
  display: -ms-flexbox;
  display: flex;
}
.note-pc.resizable-component {
  border-radius: 8px;
}
.note-pc * {
  box-sizing: border-box;
}
.note-pc .note-container {
  box-sizing: content-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #e3e5e7;
  border-radius: 8px;
  background: #f1f2f3;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}
.note-pc .note-container .note-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 62px;
  padding: 0 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  cursor: move;
}
.note-pc .note-container .note-header .back-note-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  margin-right: 6px;
  transition: 0.2s;
  cursor: pointer;
}
.note-pc .note-container .note-header .back-note-list:hover {
  background-color: #e3e5e7;
}
.note-pc .note-container .note-header .note-message {
  display: -ms-flexbox;
  display: flex;
  max-width: calc(100% - 200px);
  margin-right: auto;
  font-size: 14px;
  color: #9499a0;
}
.note-pc .note-container .note-header .note-title {
  max-width: calc(100% - 200px);
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  color: #18191c;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.note-pc .note-container .note-header .note-title.list {
  margin-left: 8px;
}
.note-pc .note-container .note-header .note-operation {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-width: 80px;
  height: 30px;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  margin-right: 16px;
  font-size: 14px;
  color: #fff;
  background: #00aeec;
  transition: background 0.2s;
  cursor: pointer;
}
.note-pc .note-container .note-header .note-operation:hover {
  background: #19b6ee;
}
.note-pc .note-container .note-header .note-operation.detail {
  background-color: #fff;
  border-color: #00aeec;
  color: #00aeec;
}
.note-pc .note-container .note-header .note-operation.detail:hover {
  border-color: transparent;
  color: #fff;
  background: #19b6ee;
}
.note-pc .note-container .note-header .jump-note-package {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 6px;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;
}
.note-pc .note-container .note-header .jump-note-package:hover {
  background-color: #e3e5e7;
}
.note-pc .note-container .note-header .close-note {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;
}
.note-pc .note-container .note-header .close-note:hover {
  background-color: #e3e5e7;
}
.note-pc .note-container .note-content {
  position: relative;
  height: calc(100% - 62px);
  transform: translateZ(0);
}
.note-operation--transition-leave-active,
.note-operation--transition .note-operation--transition-enter-active {
  transition: opacity 0.25s;
}
.note-operation--transition-enter,
.note-operation--transition-leave-active {
  opacity: 0;
}
.video-note.video-toolbar-right-item[data-v-423a8fa8] {
  color: #61666d;
 }
.video-note .video-note-inner[data-v-423a8fa8] {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.video-note .video-note-inner[data-v-423a8fa8]:hover {
  color: #00aeec;
 }
.video-note .video-note-inner.not-support[data-v-423a8fa8] {
  cursor: default;
  color: #d6d6d6;
  position: relative;
}
.video-note .video-note-inner.not-support[data-v-423a8fa8]:hover {
  color: #d6d6d6;
}
.video-note .video-note-inner.not-support[data-v-423a8fa8]:hover:after {
  flex-wrap: nowrap;
  display: flex;
  position: absolute;
  z-index: 200;
  top: -51px;
  background: #5d5d5d;
  border-radius: 4px;
  padding: 5px 12px;
  line-height: 16px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  content: attr(labelTooltip);
  width: 169px;
}
.video-note .video-note-inner .note-up-guide[data-v-423a8fa8] {
  position: absolute;
  width: 217px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 9;
}

.video-note-fake[data-v-52e66f7d] {
  display: inline-flex;
  align-items: center;
}
.video-note-fake.not-support[data-v-52e66f7d] {
  cursor: default;
  color: #d6d6d6 !important;
  position: relative;
}
.video-note-fake.not-support .video-note-icon[data-v-52e66f7d] {
  color: #d6d6d6 !important;
}
.video-note-fake.not-support[data-v-52e66f7d]:hover {
  color: #d6d6d6;
}
.video-note-fake.not-support[data-v-52e66f7d]:hover:after {
  flex-wrap: nowrap;
  display: flex;
  position: absolute;
  z-index: 200;
  top: -51px;
  background: #5d5d5d;
  border-radius: 4px;
  padding: 5px 12px;
  line-height: 16px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  content: attr(labelTooltip);
  width: 169px;
}

.video-watchlater {
  position: relative;
}
.video-watchlater .ops-watch-later {
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
.video-watchlater .ops-watch-later .wl-tips {
  display: none;
}
.video-watchlater .ops-watch-later.added {
  background: none;
}

.video-tool-more .video-tool-more-reference[data-v-46c3fd44] {
  display: flex;
}
.video-tool-more
  .video-tool-more-reference
  .video-tool-more-icon[data-v-46c3fd44] {
  width: 24px;
  height: 24px;
  margin-right: 0;
}

.video-tool-more-popover {
  min-width: 142px;
  padding: 12px 0;
  box-sizing: border-box;
  background: #ffffff;
   border: 1px solid #f1f2f3;
   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.video-tool-more-popover .video-tool-more-dropdown .dropdown-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 29px;
  color: #18191c;
 }
.video-tool-more-popover .video-tool-more-dropdown .dropdown-item:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  opacity: 0.1;
}
.video-tool-more-popover .video-tool-more-dropdown .dropdown-item:hover {
  background: none;
  color: #18191c;
 }
.video-tool-more-popover .video-tool-more-dropdown .dropdown-item:hover:before {
  background-color: #9499a0;
 }
.video-tool-more-popover .video-tool-more-dropdown .dropdown-item.complaint {
  border-top: 1px solid #e3e5e7;
 }
.video-tool-more-popover
  .video-tool-more-dropdown
  .dropdown-item
  .video-toolbar-item-icon {
  color: #61666d;
 }

.teleport {
  position: absolute;
  width: 0;
  height: 0;
}
.teleport.hidden {
  visibility: hidden;
  display: none;
}

.coin-operated-m-exp {
  width: 430px;
  background: #ffffff;
   border-radius: 4px;
  overflow: hidden;
}
.coin-operated-m-exp .close {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 16px;
  top: 16px;
  cursor: pointer;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
}
.coin-operated-m-exp .coin-title {
  font-size: 16px;
  margin-top: 20px;
  color: #18191c;
   text-align: center;
}
.coin-operated-m-exp .coin-title span {
  font-size: 30px;
  color: #00aeec;
 }
.coin-operated-m-exp .mc {
  text-align: center;
}
.coin-operated-m-exp .mc-box {
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin-right: 30px;
  margin-top: 35px;
  width: 160px;
  height: 230px;
  border: 2px dashed #ccd0d6;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: center;
}
.coin-operated-m-exp .mc-box.left-con {
  margin-left: 35px;
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/22-coin.png);
  background-size: 120px;
}
.coin-operated-m-exp .mc-box.right-con {
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/33-coin.png);
  background-size: 120px;
}
.coin-operated-m-exp .mc-box .c-num {
  color: #9499a0;
   text-align: left;
  font-size: 14px;
  line-height: 40px;
  position: absolute;
  left: 15px;
  top: 0px;
}
.coin-operated-m-exp .mc-box .coin-run-box {
  width: 120px;
  height: 206px;
  overflow: hidden;
  margin: 0 auto;
}
.coin-operated-m-exp .mc-box .coin-run {
  opacity: 0;
  height: 193px;
  margin-top: 19px;
}
.coin-operated-m-exp .mc-box:hover {
  border-color: #02a0d8;
}
.coin-operated-m-exp .mc-box.on {
  border-style: solid;
  border-color: #02a0d8;
  background: transparent;
}
.coin-operated-m-exp .mc-box.on .c-num {
  color: #00aeec;
 }
.coin-operated-m-exp .mc-box.on .coin-run {
  opacity: 1;
  animation: coin-run-animation 2s steps(23) infinite;
}
.coin-operated-m-exp .like-checkbox {
  margin: 12px 0 0 37px;
  font-size: 12px;
  color: #18191c;
   line-height: 16px;
}
.coin-operated-m-exp .like-checkbox input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  display: none;
}
.coin-operated-m-exp .like-checkbox input[type="checkbox"] + i {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 5px;
  vertical-align: bottom;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTYgMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2IDE2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0NDRDBENzt9Cjwvc3R5bGU+Cjx0aXRsZT5zZWxlY3QgY29udHJvbF9zcGVjaWFsX2RlZmF1bHQ8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9IlN5bWJvbHMiPgoJPGcgaWQ9InNlbGVjdC1jb250cm9sX3NwZWNpYWxfZGVmYXVsdCI+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIuNSwwLjVoMTFjMS4xLDAsMiwwLjksMiwydjExYzAsMS4xLTAuOSwyLTIsMmgtMTFjLTEuMSwwLTItMC45LTItMnYtMTFDMC41LDEuNCwxLjQsMC41LDIuNSwwLjV6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==);
}
.coin-operated-m-exp .like-checkbox input[type="checkbox"]:checked + i {
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/checkbox_selected.svg);
}
.coin-operated-m-exp .coin-bottom {
  text-align: center;
  padding: 25px 0;
}
.coin-operated-m-exp .coin-bottom .b-btn {
  width: 92px;
  height: 22px;
  line-height: 22px;
}
.coin-operated-m-exp .coin-bottom .tips {
  font-size: 12px;
  color: #9499a0;
   margin-top: 10px;
}
.coin-operated-m-exp .coin-bottom .bi-btn {
  display: inline-block;
  background: #00aeec;
     font-size: 14px;
  padding: 4px 18px;
  border-radius: 4px;
  transition: all 0.3s;
  user-select: none;
  border: 1px solid #00aeec;
   text-align: center;
  cursor: pointer;
}
.coin-operated-m-exp .coin-bottom .bi-btn:hover {
    background: #00b8f6;
  border-color: #00b8f6;
}
.coin-operated-m-exp .coin-bottom .bi-btn:active {
  background: #01769c;
  border-color: #01769c;
}
@keyframes coin-run-animation {
  0% {
    transform: translate3d(0px, 0, 0);
  }
  100% {
    transform: translate3d(-2767px, 0, 0);
  }
}

.collection-m-exp {
  width: 420px;
  border-radius: 4px;
  background: #ffffff;
   overflow: hidden;
}
.collection-m-exp .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #18191c;
   border-bottom: #e3e5e7;
   text-align: center;
}
.collection-m-exp .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  height: 50px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.collection-m-exp .content {
  padding: 0 36px;
  height: 300px;
  overflow: auto;
}
.collection-m-exp .content .info {
  font-size: 12px;
  color: #9499a0;
   margin: 14px 0;
}
.collection-m-exp .content .info .uname {
  color: #61666d;
 }
.collection-m-exp .content .group-list {
  max-height: 300px;
  padding-bottom: 14px;
}
.collection-m-exp .content .group-list ul {
  position: relative;
  margin-top: 24px;
  min-height: 210px;
}
.collection-m-exp .content .group-list ul .collection-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #ffffff;
 }
.collection-m-exp .content .group-list li {
  padding-bottom: 24px;
  font-size: 14px;
  color: #18191c;
   cursor: pointer;
}
.collection-m-exp .content .group-list li label {
  cursor: pointer;
  display: block;
}
.collection-m-exp .content .group-list li label .personal {
  color: #9499a0;
 }
.collection-m-exp .content .group-list li label.disable {
  color: #9499a0;
 }
.collection-m-exp .content .group-list li label.disable:hover {
  color: #9499a0;
 }
.collection-m-exp
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.collection-m-exp
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.collection-m-exp .content .group-list li label .count {
  float: right;
  color: #61666d;
   font-size: 12px;
}
.collection-m-exp .content .group-list li input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  vertical-align: middle;
  display: none;
}
.collection-m-exp .content .group-list li input[type="checkbox"] + i {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 18px;
  vertical-align: middle;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAMZJREFUOBFjZACCY8cuSP/4+6ebkYHB4T8DgyRIjFgA1PMcqOcABzNLqZWVwVNGkGE///45w8DANIGZ898iOxOT58QaBlJ36MwZyb/fmeIYGP4VsDOzmDDuO3xmGSMD00VHW6NOUgxCV7v/8Lny/wz/9JlA3gS5DF0BqXyQGSCzGIAuBAYBdQDILCbqGIUwZdRARFiQyxoNQ3JDDqFvCIQhqDwDFUEIR5PHApkBMosJVDhCyjPyDILpApkBMov6BSzIBmpWAQCEVFxRmF8CTgAAAABJRU5ErkJggg==);
}
.collection-m-exp .content .group-list li input[type="checkbox"]:hover + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAL5JREFUOBFjZACBVTelGb7/62ZgZHBg+P9fEixGLMHI+JzhP8MBBk6mUoYw9aeMEMP+nmFgYpgANGMRQ6zWc2LNAqtbfA3kgDiGfwwFDJzMJowMC68vY2D6fxFoUCdJBqErXnytnOEfoz4T2Jsgl1EOFkHMWnjtP+VmQU0AmsVENcOgBo0aSHmIjobhyAhDUHkGKYIo8y/IDKBZTODCEVSeUQ7iQGaxgEva78ACdvE1kJEUFrBMwAIWBKhYBQAAjRZDKb7Y9b8AAAAASUVORK5CYII=);
}
.collection-m-exp .content .group-list li input[type="checkbox"]:checked + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.collection-m-exp
  .content
  .group-list
  li
  input[type="checkbox"]:checked:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.collection-m-exp .content .group-list li .fav-title {
  max-width: 220px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.collection-m-exp .content .group-list li:hover {
  color: #00aeec;
 }
.collection-m-exp .content .group-list .add-group {
  margin-bottom: 5px;
  width: 348px;
}
.collection-m-exp .content .group-list .add-group .add-btn {
  height: 34px;
  line-height: 34px;
  padding: 0 34px;
  border: 1px solid #9499a0;
   border-radius: 4px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAC5JREFUKBVjYMABZi5a9R+EcUgzMOGSICQ+EjQy4gs5fAFEduDgNHQ0HhnIT6sAudAOjNLnY/wAAAAASUVORK5CYII=)
    no-repeat 10px center;
  font-size: 12px;
  color: #61666d;
   cursor: pointer;
}
.collection-m-exp .content .group-list .add-group .add-btn:hover {
  border: 1px solid #00aeec;
 }
.collection-m-exp .content .group-list .add-group .fav-add-tip {
  display: inline-block;
  line-height: 40px;
  height: 40px;
  position: absolute;
  top: -52px;
  padding: 0 10px;
  border-radius: 4px;
    background: #00aeec;
 }
.collection-m-exp .content .group-list .add-group .fav-add-tip .blue-arrow {
  position: absolute;
  background-image: url("//static.hdslb.com/images/collection/blue-arrow.png");
  background-repeat: no-repeat;
  left: 60px;
  top: 40px;
  width: 14px;
  height: 6px;
}
.collection-m-exp .content .group-list .add-group .fav-add-tip .icon-close {
  display: inline-block;
  margin-left: 10px;
  line-height: 28px;
  opacity: 0.9 !important;
  filter: alpha(opacity=90) !important;
  cursor: pointer;
  vertical-align: middle;
  background: url("//static.hdslb.com/images/collection/close-white.png") center
    no-repeat;
  width: 24px;
  height: 24px;
}
.collection-m-exp .content .group-list .add-group .input-group {
  height: 34px;
  line-height: 34px;
  border: 1px solid #00aeec;
   border-radius: 4px;
  position: relative;
}
.collection-m-exp .content .group-list .add-group .input-group input {
  border: none;
  font-size: 12px;
  width: 200px;
  margin-left: 10px;
  padding: 0;
  box-shadow: none;
  height: 100%;
  background: transparent;
  color: #18191c;
   outline: none;
}
.collection-m-exp .content .group-list .add-group .input-group .submit {
  float: right;
  height: 34px;
  width: 90px;
  background: #d9f1f9;
  border: none;
  border-left: 1px solid #00aeec;
   border-radius: 0 4px 4px 0;
  font-size: 14px;
  color: #00aeec;
   cursor: pointer;
}
.collection-m-exp .content::-webkit-scrollbar {
  width: 6px;
}
.collection-m-exp .content::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #999999;
}
.collection-m-exp .bottom {
  height: 76px;
  text-align: center;
  margin: 0 36px;
  border-top: 1px solid #e3e5e7;
 }
.collection-m-exp .bottom .btn {
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-top: 18px;
  background: #00aeec;
   border: none;
  border-radius: 4px;
    cursor: pointer;
}
.collection-m-exp .bottom .btn:hover {
  background: #00b8f6;
}
.collection-m-exp .bottom .btn.disable {
  background-color: #e3e5e7;
   color: #9499a0;
 }
.collection-m-exp .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}

.app-watch-exp {
  border: 1px solid #f1f2f3;
   color: #18191c;
   background: #ffffff;
   width: 420px;
  border-radius: 2px;
  z-index: 20;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
}
.app-watch-exp .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #18191c;
   border-bottom: 1px solid #e3e5e7;
   text-align: center;
}
.app-watch-exp .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.app-watch-exp .app-look {
  padding: 30px 20px;
}
.app-watch-exp .app-look .i-t {
  display: flex;
}
.app-watch-exp .app-look .i-t .qrcode {
  width: 100px;
  height: 100px;
  flex: none;
  background: #eee;
}
.app-watch-exp .app-look .i-t .v-title {
  font-size: 14px;
  margin-left: 15px;
  line-height: 22px;
  white-space: normal;
}
.app-watch-exp .app-look .foot-txt {
  text-align: center;
  line-height: 20px;
  margin-top: 20px;
  font-size: 14px;
}
.app-watch-exp .app-look .foot-txt a {
  color: #00aeec;
 }

.appeal-box {
  background: #ffffff;
   border-radius: 10px;
  overflow: hidden;
  width: 600px;
  height: 560px;
}

.oldfan-success-toast {
  z-index: 9999;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  padding: 11px 24px;
  background-color: #ffffff;
   border: 1px solid #e3e5e7;
   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.oldfan-success-toast .toast-icon {
  width: 18px;
  height: 18px;
  display: flex;
  margin-right: 9px;
}
.oldfan-success-toast .toast-icon img {
  width: 100%;
  height: 100%;
}
.oldfan-success-toast .toast-text {
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
 }
.oldfantoast-enter-active,
.oldfantoast-leave-active {
  transition: all 0.3s;
}
.oldfantoast-enter {
  opacity: 0;
  transform: translate(-50%, -20px);
}
.oldfantoast-enter-to {
  opacity: 1;
  transform: translate(-50%, 0px);
}
.oldfantoast-leave {
  opacity: 1;
}
.oldfantoast-leave-to {
  opacity: 0;
}

.oldfan-contract-container[data-v-2cb7c3de] {
  position: relative;
  width: 480px;
  height: 461px;
  border-radius: 6px;
  overflow: hidden;
}
.oldfan-contract-container .layer[data-v-2cb7c3de] {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
 }
.oldfan-contract-container .layer .layer-header[data-v-2cb7c3de] {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  border-bottom: 1px solid #f1f2f3;
   background-color: #ffffff;
 }
.oldfan-contract-container .layer .layer-header .layer-title[data-v-2cb7c3de] {
  font-size: 16px;
  font-weight: 500;
  color: #18191c;
 }
.oldfan-contract-container
  .layer
  .layer-header
  .layer-close-btn[data-v-2cb7c3de] {
  position: absolute;
  top: 13px;
  right: 20px;
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.oldfan-contract-container
  .layer
  .layer-header
  .layer-close-btn
  .close-icon[data-v-2cb7c3de] {
  width: 100%;
  height: 100%;
}
.oldfan-contract-container .layer .layer-content[data-v-2cb7c3de] {
  flex-grow: 1;
  overflow: auto;
  overflow: overlay;
  background-color: #ffffff;
 }
.oldfan-contract-container
  .layer
  .layer-content
  .layer-content-panel[data-v-2cb7c3de] {
  box-sizing: border-box;
  min-height: 100%;
  padding: 20px 40px 24px;
}
.oldfan-contract-container .layer .layer-footer[data-v-2cb7c3de] {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 60px;
  box-shadow: inset 0px 0.5px 0px #e3e5e7;
   background-color: #ffffff;
 }
.oldfan-contract-container .layer .layer-footer .action-btn[data-v-2cb7c3de] {
  width: 140px;
  height: 40px;
  background-color: #00aeec;
     font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.oldfan-contract-container .oldfan-contract[data-v-2cb7c3de] {
  position: relative;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .upinfo[data-v-2cb7c3de] {
  display: flex;
  align-items: center;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .upinfo
  .avatar[data-v-2cb7c3de] {
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .upinfo
  .avatar
  img[data-v-2cb7c3de] {
  width: 100%;
  height: 100%;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .upinfo
  .upinfo-detail
  .up-name[data-v-2cb7c3de] {
  color: #18191c;
   font-size: 14px;
  line-height: 20px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .upinfo
  .upinfo-detail
  .up-data[data-v-2cb7c3de] {
  color: #9499a0;
   font-size: 10px;
  line-height: 14px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .upinfo
  .upinfo-detail
  .up-data
  .fans[data-v-2cb7c3de] {
  margin-right: 6px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-description[data-v-2cb7c3de] {
  margin-top: 12px;
  color: #61666d;
   font-size: 13px;
  line-height: 22px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards[data-v-2cb7c3de] {
  margin-top: 24px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .oldfan-rewards-title[data-v-2cb7c3de] {
  display: flex;
  align-items: center;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .oldfan-rewards-title
  .oldfan-rewards-title-text[data-v-2cb7c3de] {
  margin: 0 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .oldfan-rewards-title[data-v-2cb7c3de]::before,
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .oldfan-rewards-title[data-v-2cb7c3de]::after {
  content: "";
  flex-grow: 1;
  height: 1px;
  background-color: #e3e5e7;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .reward[data-v-2cb7c3de] {
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-top: 12px;
  background-color: #f6f7f8;
   padding: 10px 12px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .reward
  .reward-icon[data-v-2cb7c3de] {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  margin-right: 8px;
  background-color: #ffffff;
   border-radius: 8px;
  overflow: hidden;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .reward
  .reward-icon
  img[data-v-2cb7c3de] {
  width: 100%;
  height: 100%;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .reward
  .reward-detail
  .reward-title[data-v-2cb7c3de] {
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #18191c;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .reward
  .reward-detail
  .reward-desc[data-v-2cb7c3de] {
  margin-top: 4px;
  font-size: 12px;
  line-height: 17px;
  color: #61666d;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-rewards
  .reward
  .reward-detail
  .reward-remark[data-v-2cb7c3de] {
  margin-top: 4px;
  font-size: 10px;
  line-height: 14px;
  color: #9499a0;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules[data-v-2cb7c3de] {
  margin-top: 24px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .oldfan-contract-rules-title[data-v-2cb7c3de] {
  display: flex;
  align-items: center;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .oldfan-contract-rules-title
  .oldfan-contract-rules-text[data-v-2cb7c3de] {
  margin: 0 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .oldfan-contract-rules-title[data-v-2cb7c3de]::before,
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .oldfan-contract-rules-title[data-v-2cb7c3de]::after {
  content: "";
  flex-grow: 1;
  height: 1px;
  background-color: #e3e5e7;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .contract-rules-con[data-v-2cb7c3de] {
  margin-top: 12px;
  padding: 16px 12px;
  border-radius: 8px;
  background-color: #f6f7f8;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .contract-rules-con
  .contract-rule[data-v-2cb7c3de] {
  position: relative;
  display: flex;
  font-size: 12px;
  line-height: 17px;
  color: #61666d;
   margin-bottom: 8px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .contract-rules-con
  .contract-rule[data-v-2cb7c3de]::before {
  content: "";
  width: 4px;
  margin-right: 8px;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .contract-rules-con
  .contract-rule[data-v-2cb7c3de]::after {
  position: absolute;
  top: 6px;
  left: 0px;
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #c9ccd0;
 }
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-content
  .contract-content-panel
  .oldfan-contract-rules
  .contract-rules-con
  .contract-rule[data-v-2cb7c3de]:last-child {
  margin-bottom: 0;
}
.oldfan-contract-container
  .oldfan-contract
  .oldfan-contract-footer
  .three-coin-support.signed[data-v-2cb7c3de] {
  cursor: not-allowed;
  background-color: #f1f2f3;
   color: #c9ccd0;
 }
.oldfan-contract-container .mask-below-leave-message[data-v-2cb7c3de] {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
}
.oldfan-contract-container .leave-message[data-v-2cb7c3de] {
  position: absolute;
  top: 0;
  left: 0;
}
.oldfan-contract-container
  .leave-message
  .leave-message-header
  .layer-back-btn[data-v-2cb7c3de] {
  position: absolute;
  top: 13px;
  left: 20px;
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.oldfan-contract-container
  .leave-message
  .leave-message-header
  .layer-back-btn
  .back-icon[data-v-2cb7c3de] {
  width: 100%;
  height: 100%;
}
.oldfan-contract-container
  .leave-message
  .leave-message-content
  .leave-message-content-panel
  .panel-title[data-v-2cb7c3de] {
  color: #61666d;
   line-height: 18px;
  font-size: 13px;
}
.oldfan-contract-container
  .leave-message
  .leave-message-content
  .leave-message-content-panel
  .panel-input[data-v-2cb7c3de] {
  margin-top: 12px;
}
.oldfan-contract-container
  .leave-message
  .leave-message-content
  .leave-message-content-panel
  .panel-input
  .edit-area[data-v-2cb7c3de] {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 180px;
  box-sizing: border-box;
  padding: 8px 13px;
  border-radius: 4px;
  border: 1px solid #f1f2f3;
   background-color: #ffffff;
   color: #18191c;
   font-size: 14px;
  line-height: 20px;
  resize: none;
  caret-color: #00aeec;
   outline: none;
}
.oldfan-contract-container
  .leave-message
  .leave-message-content
  .leave-message-content-panel
  .panel-input
  .edit-area[data-v-2cb7c3de]::placeholder {
  color: #c9ccd0;
 }
.oldfan-contract-container
  .leave-message
  .leave-message-footer.more-then-onechild[data-v-2cb7c3de] {
  justify-content: space-between;
  padding: 0 40px;
}
.oldfan-contract-container
  .leave-message
  .leave-message-footer
  .add-comment[data-v-2cb7c3de] {
  display: flex;
  align-items: center;
  color: #9499a0;
   font-size: 14px;
  cursor: pointer;
}
.oldfan-contract-container
  .leave-message
  .leave-message-footer
  .add-comment
  .check-cmt[data-v-2cb7c3de] {
  position: relative;
  margin: 0;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid #c9ccd0;
   appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}
.oldfan-contract-container
  .leave-message
  .leave-message-footer
  .add-comment
  .check-cmt[data-v-2cb7c3de]:checked {
  border-width: 0px;
}
.oldfan-contract-container
  .leave-message
  .leave-message-footer
  .add-comment
  .check-cmt[data-v-2cb7c3de]:checked::after {
  content: "";
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/checked.svg)
    center / 100% 100% no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.oldfan-contract-container
  .leave-message.leavemsg-enter-active[data-v-2cb7c3de],
.oldfan-contract-container
  .leave-message.leavemsg-leave-active[data-v-2cb7c3de] {
  transition: left 0.3s;
}
.oldfan-contract-container .leave-message.leavemsg-enter[data-v-2cb7c3de],
.oldfan-contract-container .leave-message.leavemsg-leave-to[data-v-2cb7c3de] {
  left: 100%;
}
.oldfan-contract-container .leave-message.leavemsg-enter-to[data-v-2cb7c3de],
.oldfan-contract-container .leave-message.leavemsg-leave[data-v-2cb7c3de] {
  left: 0%;
}

.ring-progress {
  position: absolute;
}

.video-toolbar-left-item {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 92px;
  white-space: nowrap;
  transition: all 0.3s;
  font-size: 13px;
  color: #61666d;
   font-weight: 500;
  cursor: pointer;
}
.video-toolbar-left-item .video-toolbar-item-icon {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  margin-right: 8px;
}
.video-toolbar-left-item .video-toolbar-item-text {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
}
.video-toolbar-left-item.on,
.video-toolbar-left-item:hover {
  color: #00aeec;
 }
.video-toolbar-left-item.disable {
  cursor: not-allowed;
  color: #61666d;
   opacity: 0.3;
}
.video-toolbar-left-item .svga-top {
  left: -45px;
  top: -125px;
}
.video-toolbar-left-item .svga-center {
  left: -32px;
  top: -32px;
}
@media (min-width: 1681px) {
  .video-toolbar-left-item {
    width: 100px;
    font-size: 14px;
  }
  .video-toolbar-left-item .video-toolbar-item-icon {
    width: 36px;
    height: 36px;
  }
}
.video-toolbar-right-item {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  font-size: 13px;
  color: #61666d;
   transition: all 0.3s;
  cursor: pointer;
}
.video-toolbar-right-item .video-toolbar-item-icon {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-right: 6px;
}
.video-toolbar-right-item:hover {
  color: #00aeec;
 }
@media (min-width: 1681px) {
  .video-toolbar-right-item {
    font-size: 14px;
  }
  .video-toolbar-right-item .video-toolbar-item-icon {
    width: 24px;
    height: 24px;
  }
}
@keyframes shake {
  2% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg);
  }
  4% {
    transform: translate(-0.5px, 2.5px) rotate(0.5deg);
  }
  6% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  8% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }
  10% {
    transform: translate(1.5px, 2.5px) rotate(0.5deg);
  }
  12% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(1.5px, 1.5px) rotate(-0.5deg);
  }
  16% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  18% {
    transform: translate(1.5px, 0.5px) rotate(0.5deg);
  }
  20% {
    transform: translate(1.5px, -1.5px) rotate(-0.5deg);
  }
  22% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  24% {
    transform: translate(-0.5px, -1.5px) rotate(0.5deg);
  }
  26% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  28% {
    transform: translate(2.5px, 1.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  32% {
    transform: translate(1.5px, 2.5px) rotate(1.5deg);
  }
  34% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
  }
  38% {
    transform: translate(1.5px, -1.5px) rotate(1.5deg);
  }
  40% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  42% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  44% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(-0.5px, 2.5px) rotate(-0.5deg);
  }
  48% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  50% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  52% {
    transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }
  54% {
    transform: translate(-0.5px, -1.5px) rotate(-0.5deg);
  }
  56% {
    transform: translate(1.5px, -1.5px) rotate(1.5deg);
  }
  58% {
    transform: translate(0.5px, 1.5px) rotate(1.5deg);
  }
  60% {
    transform: translate(-0.5px, -0.5px) rotate(1.5deg);
  }
  62% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  64% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(2.5px, 0.5px) rotate(1.5deg);
  }
  68% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  70% {
    transform: translate(0.5px, 2.5px) rotate(1.5deg);
  }
  72% {
    transform: translate(1.5px, -0.5px) rotate(0.5deg);
  }
  74% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  78% {
    transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
  }
  80% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
  }
  82% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  86% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }
  88% {
    transform: translate(-0.5px, -0.5px) rotate(1.5deg);
  }
  90% {
    transform: translate(-1.5px, -1.5px) rotate(1.5deg);
  }
  92% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }
  94% {
    transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }
  96% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  98% {
    transform: translate(1.5px, 0.5px) rotate(-0.5deg);
  }
  0%,
  to {
    transform: translate(0) rotate(0);
  }
}
.video-toolbar-container[data-v-c9c871ec] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 12px;
  line-height: 28px;
  border-bottom: 1px solid #e3e5e7;
 }
.video-toolbar-container .video-toolbar-left[data-v-c9c871ec] {
  position: relative;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  user-select: none;
}
.video-toolbar-container
  .video-toolbar-left
  .toolbar-left-item-wrap[data-v-c9c871ec] {
  position: relative;
  margin-right: 8px;
}
.video-toolbar-container
  .video-toolbar-left
  .toolbar-left-item-wrap
  .svga-center[data-v-c9c871ec] {
  left: -32px;
  top: -32px;
}
.video-toolbar-container .video-toolbar-right[data-v-c9c871ec] {
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  user-select: none;
}
.video-toolbar-container
  .video-toolbar-right
  .toolbar-right-complaint[data-v-c9c871ec] {
  margin-right: 18px;
}
.video-toolbar-container
  .video-toolbar-right
  .toolbar-right-note[data-v-c9c871ec] {
  margin-right: 12px;
}
@media (min-width: 1681px) {
  .video-toolbar-container[data-v-c9c871ec] {
    padding-top: 18px;
  }
  .video-toolbar-container
    .video-toolbar-left
    .toolbar-left-item-wrap[data-v-c9c871ec] {
    margin-right: 18px;
  }
  .video-toolbar-container
    .video-toolbar-left
    .toolbar-left-item-wrap
    .svga-center[data-v-c9c871ec] {
    left: -28px;
    top: -28px;
  }
  .video-toolbar-container
    .video-toolbar-right
    .toolbar-right-complaint[data-v-c9c871ec] {
    margin-right: 24px;
  }
  .video-toolbar-container
    .video-toolbar-right
    .toolbar-right-note[data-v-c9c871ec] {
    margin-right: 20px;
  }
}

.user-card-m-exp {
  font-size: 12px;
  border-radius: 8px;
  width: 366px;
  box-sizing: border-box;
  cursor: default;
}
.user-card-m-exp a {
  text-decoration: none;
}
.user-card-m-exp p {
  margin: 0;
}
.user-card-m-exp .loading {
  min-height: 230px;
}
.user-card-m-exp .loading .mc1 {
  background: #c9ccd0;
   height: 120px;
  border-radius: 8px 8px 0 0;
}
.user-card-m-exp .loading .mc2 {
  padding: 0 0 0 100px;
  position: relative;
}
.user-card-m-exp .loading .mc3 {
  background: #c9ccd0;
   height: 24px;
  margin-top: 12px;
}
.user-card-m-exp .loading .mc4 {
  position: absolute;
  width: 80px;
  height: 60px;
  background: #c9ccd0;
   top: 0;
  left: 0;
}
.user-card-m-exp .bg {
  width: 100%;
  height: 85px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.user-card-m-exp .user-info-wrapper {
  position: relative;
  display: flex;
  padding: 0 20px 16px 10px;
}
.user-card-m-exp .user-info-wrapper .face {
  position: relative;
  top: 10px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #c9ccd0;
   margin-right: 12px;
}
.user-card-m-exp .user-info-wrapper .face img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.user-card-m-exp .user-info-wrapper .face .auth {
  position: absolute;
  width: 14px;
  height: 14px;
  right: 0;
  top: 34px;
}
.user-card-m-exp .user-info-wrapper .info p {
  margin: 0;
  color: #18191c;
 }
.user-card-m-exp .user-info-wrapper .info .sign {
  line-height: 17px;
  color: #9499a0;
   display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
}
.user-card-m-exp .user-info-wrapper .info .social {
  margin-bottom: 10px;
}
.user-card-m-exp .user-info-wrapper .info .social a {
  color: #18191c;
   margin-right: 18px;
}
.user-card-m-exp .user-info-wrapper .info .social .tip_text {
  color: #9499a0;
   margin-left: 3px;
}
.user-card-m-exp .user-info-wrapper .info .official-wrapper {
  font-size: 12px;
  color: #9499a0;
   line-height: 17px;
  margin-bottom: 8px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
}
.user-card-m-exp .user-info-wrapper .info .official-wrapper .official-icon {
  width: 14px;
  height: 14px;
  margin-right: 2px;
  vertical-align: sub;
}
.user-card-m-exp .user-info-wrapper .info .user {
  margin-top: 12px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.user-card-m-exp .user-info-wrapper .info .user .name {
  color: #18191c;
   max-width: 158px;
  margin-right: 4px;
  font-size: 16px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .user-card-m-exp .user-info-wrapper .info .user .name {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.user-card-m-exp .user-info-wrapper .info .user .user-sex {
  margin-right: 5px;
}
.user-card-m-exp .user-info-wrapper .info .user .user-label {
  display: inline-block;
  box-sizing: border-box;
  max-width: 58px;
  height: 16px;
    background: #ff6699;
   border-radius: 2px;
  line-height: 16px;
  font-size: 12px;
  margin-left: 5px;
  overflow: hidden;
  white-space: nowrap;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .user-card-m-exp .user-info-wrapper .info .user .user-label {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.user-card-m-exp .user-info-wrapper .info .user .user-label .label-size {
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  transform: scale(0.83);
}
.user-card-m-exp .user-info-wrapper .info .level {
  display: inline-block;
  width: 25px;
  height: 14px;
}
.user-card-m-exp .user-info-wrapper .info .level.senior {
  width: 35px;
  height: 14px;
}
.user-card-m-exp .user-info-wrapper .info .level svg {
  width: 100%;
  height: 100%;
}
.user-card-m-exp .user-info-wrapper .info .btn-box {
  display: flex;
  margin-top: 16px;
}
.user-card-m-exp .user-info-wrapper .info .btn-box a {
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  border-radius: 4px;
  transition: all 0.3s;
  font-size: 14px;
}
.user-card-m-exp .user-info-wrapper .info .btn-box a .plus {
    margin-right: 4px;
  font-size: 16px;
}
.user-card-m-exp .user-info-wrapper .info .btn-box .like {
    border-color: #00aeec;
   background-color: #00aeec;
 }
.user-card-m-exp .user-info-wrapper .info .btn-box .like:hover {
  border-color: #00b8f6;
  background-color: #00b8f6;
}
.user-card-m-exp .user-info-wrapper .info .btn-box .liked {
  background-color: #e3e5e7;
   color: #9499a0;
 }
.user-card-m-exp .user-info-wrapper .info .btn-box .liked:hover {
  background-color: #f1f2f3;
 }
.user-card-m-exp .user-info-wrapper .info .btn-box .message {
  border: 1px solid #9499a0;
   color: #61666d;
   background-color: transparent;
}
.user-card-m-exp .user-info-wrapper .info .btn-box .message:hover {
  color: #00aeec;
   border-color: #00aeec;
 }
.user-card-m-exp .vip-red-name {
  color: #fb7299 !important;
}
.user-card-m-exp .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}
.user-card-m-exp.top-transform {
  transform: translateY(-100%);
}
.card-loaded {
  cursor: default;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  background: #ffffff;
   border: 0.5px solid #f1f2f3;
 }

.usercard-wrap[data-v-87f72260] {
  position: absolute;
  z-index: 999;
  transition: left, top 0.3s;
}

.video-desc-container[data-v-1d530b8d] {
  margin: 16px 0;
}
.video-desc-container .basic-desc-info[data-v-1d530b8d] {
  white-space: pre-line;
  letter-spacing: 0;
  color: #18191c;
   font-size: 15px;
  line-height: 24px;
  overflow: hidden;
}
.video-desc-container .basic-desc-info a[data-v-1d530b8d] {
  color: #00aeec;
 }
.video-desc-container .basic-desc-info a[data-v-1d530b8d]:hover {
  color: #008ac5;
 }
.video-desc-container .subtitle-maker-list[data-v-1d530b8d] {
  padding-top: 6px;
  color: #18191c;
   font-size: 15px;
  line-height: 21px;
}
.video-desc-container
  .subtitle-maker-list
  .subtitle-maker
  .subtitle-maker-name[data-v-1d530b8d] {
  color: #008ac5;
   transition: color 0.3s;
}
.video-desc-container
  .subtitle-maker-list
  .subtitle-maker
  .subtitle-maker-name[data-v-1d530b8d]:hover {
  color: #00aeec;
 }
.video-desc-container .toggle-btn[data-v-1d530b8d] {
  margin-top: 10px;
  font-size: 13px;
  line-height: 18px;
}
.video-desc-container .toggle-btn-text[data-v-1d530b8d] {
  cursor: pointer;
  color: #61666d;
 }
.video-desc-container .toggle-btn-text[data-v-1d530b8d]:hover {
  color: #00aeec;
 }
@media (min-width: 1681px) {
  .video-desc-container[data-v-1d530b8d] {
    margin: 18px 0;
  }
  .video-desc-container .basic-desc-info[data-v-1d530b8d] {
    font-size: 16px;
    line-height: 26px;
  }
  .video-desc-container .subtitle-maker-list[data-v-1d530b8d] {
    font-size: 16px;
    line-height: 22px;
  }
  .video-desc-container .toggle-btn[data-v-1d530b8d] {
    font-size: 14px;
    line-height: 20px;
  }
}

.video-desc-container .basic-desc-info .desc-info-text a {
  color: #00aeec;
 }
.video-desc-container .basic-desc-info .desc-info-text a:hover {
  color: #008ac5;
 }

.bgm-tag .tag-link.bgm-link[data-v-f2465946] {
  max-width: 307px;
}
.bgm-tag .tag-link.bgm-link .bgm-tag-icon[data-v-f2465946] {
  flex-shrink: 0;
  color: #00aeec;
 }
.bgm-tag .tag-link.bgm-link .tag-txt[data-v-f2465946] {
  margin: 0 6px 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bgm-tag .tag-link.bgm-link .tag-arrow-icon[data-v-f2465946] {
  flex-shrink: 0;
}
.bgm-tag .tag-link.bgm-link[data-v-f2465946]:hover {
  color: #00aeec;
 }

.topic-tag .tag-link.topic-link[data-v-fe7390d0] {
  max-width: 307px;
}
.topic-tag .tag-link.topic-link .topic-tag-icon[data-v-fe7390d0] {
  flex-shrink: 0;
  color: #00aeec;
   width: 15px;
  height: 15px;
}
.topic-tag .tag-link.topic-link .tag-txt[data-v-fe7390d0] {
  margin: 0 6px 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.topic-tag .tag-link.topic-link .tag-arrow-icon[data-v-fe7390d0] {
  flex-shrink: 0;
}
.topic-tag .tag-link.topic-link[data-v-fe7390d0]:hover {
  color: #00aeec;
 }

.channel-cancel-pop[data-v-06b74fb6] {
  z-index: 12;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(100% + 10px);
  background: #ffffff;
   padding: 20px 10px 10px 10px;
  min-width: 120px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  text-align: center;
}
.channel-cancel-pop p[data-v-06b74fb6] {
  font-size: 14px;
  color: #18191c;
   margin-bottom: 20px;
}
.channel-cancel-pop span[data-v-06b74fb6] {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 2px;
}
.channel-cancel-pop span.btn-ok[data-v-06b74fb6] {
    background: #00aeec;
   margin-right: 5px;
}
.channel-cancel-pop span.btn-no[data-v-06b74fb6] {
  color: #18191c;
   background: #e3e5e7;
   margin-left: 5px;
}

.toggle-sub-btn[data-v-751c11d8] {
  position: relative;
  cursor: pointer;
  width: 108px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  text-align: center;
  margin-left: 8px;
}
.toggle-sub-btn.is-subs[data-v-751c11d8] {
  background: #e3e5e7;
   color: #9499a0;
   border: 1px solid #e3e5e7;
 }
.toggle-sub-btn.no-subs[data-v-751c11d8] {
    background: #00aeec;
   border: 1px solid #00aeec;
   transition: 0.3s;
  border-radius: 2px;
}
.toggle-sub-btn.no-subs[data-v-751c11d8]:hover {
  background: #00b8f6;
  border: 1px solid #00b8f6;
}
.toggle-sub-btn .add-icon[data-v-751c11d8] {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  vertical-align: sub;
}

.detail-channel-popup[data-v-3c0c02e1] {
  background: #ffffff;
   width: 206px;
  min-height: 184px;
  box-sizing: content-box;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
.detail-channel-popup-top[data-v-3c0c02e1] {
  position: relative;
  display: block;
}
.detail-channel-popup-top .bg-image[data-v-3c0c02e1] {
  width: 100%;
  height: 66px;
  background-position: 50%;
  border-radius: 2px 2px 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
}
.detail-channel-popup-top .bg-mask[data-v-3c0c02e1] {
  position: absolute;
  width: 100%;
  height: 66px;
  background-position: 50%;
  opacity: 0.6;
  border-radius: 2px 2px 0px 0px;
  top: 0;
}
.detail-channel-popup-top .channel-cover[data-v-3c0c02e1] {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.05);
   border-radius: 2px;
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translate(-50%, 0);
}
.detail-channel-popup-top .channel-info[data-v-3c0c02e1] {
  padding: 24px 10px 10px 10px;
}
.detail-channel-popup-top .channel-info .channel-title[data-v-3c0c02e1] {
  font-size: 14px;
  color: #18191c;
   line-height: 18px;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .detail-channel-popup-top .channel-info .channel-title[data-v-3c0c02e1] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.detail-channel-popup-top .channel-info .channel-title > img[data-v-3c0c02e1] {
  margin-left: 4px;
}
.detail-channel-popup-top .channel-info .channel-desc[data-v-3c0c02e1] {
  font-size: 12px;
  color: #9499a0;
   height: 18px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  width: 190px;
}
.detail-channel-popup-top .channel-info .channel-desc > span[data-v-3c0c02e1] {
  margin: 0px 3px 0 3px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.detail-channel-popup-bottom[data-v-3c0c02e1] {
  padding: 0 10px;
}
.detail-channel-popup-bottom .btn-panel[data-v-3c0c02e1] {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.detail-channel-popup-bottom .btn-panel .channel-entry-btn[data-v-3c0c02e1] {
  cursor: pointer;
  width: 66px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  border: 1px solid #00aeec;
   border-radius: 2px;
  font-size: 12px;
  color: #00aeec;
   transition: 0.3s;
}
.detail-channel-popup-bottom
  .btn-panel
  .channel-entry-btn[data-v-3c0c02e1]:hover {
  background: #00aeec;
   border-radius: 2px;
  }
.detail-channel-popup-bottom .tag-del[data-v-3c0c02e1] {
  margin-top: -6px;
  width: 100%;
  border-top: 1px solid #e3e5e7;
   height: 40px;
  line-height: 40px;
  text-align: right;
}
.detail-channel-popup-bottom .delete-pop[data-v-3c0c02e1] {
  top: 60px;
}

.newchannel-tag
  .tag-link.newchannel-link
  .newchannel-tag-icon[data-v-606abc4e] {
  margin-right: 4px;
}
.newchannel-tag .popover-reference[data-v-606abc4e] {
  display: block;
}

.newchannel-tag-popover {
  background: initial;
  border: none;
  padding: initial;
  border-radius: initial;
  box-shadow: initial;
  box-sizing: border-box;
}

.video-tag-container .tag-panel .tag-link {
  color: #61666d;
   background: #f1f2f3;
   height: 28px;
  line-height: 28px;
  border-radius: 14px;
  font-size: 13px;
  padding: 0 12px;
  box-sizing: border-box;
  transition: all 0.3s;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.video-tag-container .tag-panel .tag-link .tag-icon {
  width: 15px;
  height: 15px;
}
@media (min-width: 1681px) {
  .video-tag-container .tag-panel .tag-link {
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
    font-size: 14px;
  }
  .video-tag-container .tag-panel .tag-link .tag-icon {
    width: 17px;
    height: 17px;
  }
}
#bgm-entry {
  z-index: 99;
  position: absolute;
  width: 372px;
  left: calc(100% + 22px);
}
#bgm-entry.hide-bgm {
  display: none;
}
#bgm-entry.pos-in-wide {
  width: 350px;
  left: calc(100% + 30px);
}
@media (min-width: 1681px) {
  #bgm-entry {
    width: 433px;
  }
  #bgm-entry.pos-in-wide {
    width: 411px;
  }
}
.video-tag-container[data-v-934a50f8] {
  padding-bottom: 6px;
  margin: 16px 0 20px 0;
  border-bottom: 1px solid #e3e5e7;
 }
.video-tag-container .tag-panel[data-v-934a50f8] {
  transition: height 0.3s;
  overflow: hidden;
}
.video-tag-container .tag-panel .tag[data-v-934a50f8] {
  float: left;
  margin: 0 12px 8px 0;
}
.video-tag-container .tag-panel .tag .show-more-btn[data-v-934a50f8] {
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 50%;
  background: #f1f2f3;
   text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  color: #61666d;
 }
.video-tag-container .tag-panel .tag .show-more-btn.unfold[data-v-934a50f8] {
  transform: rotate(180deg);
}
.video-tag-container .tag-panel .tag .show-more-btn[data-v-934a50f8]:hover {
  color: #00aeec;
 }
.video-tag-container .tag-panel .tag .add-tag-btn[data-v-934a50f8] {
  margin-top: 3px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #f1f2f3;
   position: relative;
  transition: all 0.3s;
  cursor: pointer;
}
.video-tag-container .tag-panel .tag .add-tag-btn[data-v-934a50f8]::before,
.video-tag-container .tag-panel .tag .add-tag-btn[data-v-934a50f8]::after {
  content: "";
  position: absolute;
  background: #61666d;
   transition: all 0.3s;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.video-tag-container .tag-panel .tag .add-tag-btn[data-v-934a50f8]::before {
  width: 12px;
  height: 2px;
}
.video-tag-container .tag-panel .tag .add-tag-btn[data-v-934a50f8]::after {
  width: 2px;
  height: 12px;
}
.video-tag-container
  .tag-panel
  .tag
  .add-tag-btn[data-v-934a50f8]:hover::before,
.video-tag-container
  .tag-panel
  .tag
  .add-tag-btn[data-v-934a50f8]:hover::after {
  background: #00aeec;
 }
@media (min-width: 1681px) {
  .video-tag-container[data-v-934a50f8] {
    margin-top: 18px;
    padding-bottom: 10px;
  }
  .video-tag-container .tag-panel .tag .show-more-btn[data-v-934a50f8] {
    width: 32px;
    height: 32px;
    line-height: 32px;
  }
}

.activity-m-v1 {
  margin: 24px 0;
  background-color: #ffffff;
 }
.activity-m-v1 .inside-wrp {
  font-size: 14px;
  overflow: hidden;
  border: 1px solid #e3e5e7;
   border-radius: 6px;
  box-sizing: border-box;
}
.activity-m-v1 .inside-wrp .left {
  float: left;
  margin-right: -320px;
  padding-left: 20px;
  padding-right: 320px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #18191c;
 }
.activity-m-v1 .inside-wrp .tip {
  margin-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  color: #61666d;
 }
.activity-m-v1 .inside-wrp .tip.hasbtn {
  margin-top: 10px;
}
.activity-m-v1 .inside-wrp .right {
  float: right;
}
.activity-m-v1 .inside-wrp .right .inside-bg {
  position: relative;
  display: block;
  width: 320px;
}
.activity-m-v1 .inside-wrp .right .inside-bg .b-img {
  width: 100%;
  height: 100%;
}
.activity-m-v1 .inside-wrp .right .inside-bg.clickable {
  cursor: pointer;
}
.activity-m-v1 .inside-wrp .right .inside-bg:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(left, #ffffff, transparent 30%);
   background-image: -moz-linear-gradient(left, #ffffff, transparent 30%);
   background-image: linear-gradient(to right, #ffffff, transparent 30%);
 }
.activity-m-v1 .inside-wrp .l-inside,
.activity-m-v1 .inside-wrp .hinter-msg {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.activity-m-v1.act-now .l-inside .hinter-msg {
  line-height: 20px;
}
.activity-m-v1.act-now .l-inside .b-btn-praise {
  margin-top: 12px;
  width: 100px;
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  text-align: center;
    background-color: #ff6699;
   cursor: pointer;
}
.activity-m-v1.act-now .l-inside .b-btn-praise.istip {
  margin-top: 6px;
}
.activity-m-v1.act-now .l-inside .b-btn-praise.voted {
  color: #e3e5e7;
   border: 1px solid;
  background-color: transparent;
  cursor: default;
}
.activity-m-v1.act-now .l-inside .score-wrapper {
  margin-top: 12px;
}
.activity-m-v1.act-now .l-inside .score-wrapper.istip {
  margin-top: 6px;
}
.activity-m-v1.act-now .l-inside .score-wrapper.voted li {
  cursor: default;
  opacity: 1;
}
.activity-m-v1.act-now .l-inside .score-wrapper li {
  float: left;
  margin-right: 10px;
  width: 36px;
  height: 32px;
  background: url("//static.hdslb.com/images/base/icons.png") no-repeat -655px -2126px;
  cursor: pointer;
}
.activity-m-v1.act-now .l-inside .score-wrapper li.hovered {
  background-position: -719px -2126px;
  opacity: 1;
}
.activity-m-v1.act-now .l-inside .score-wrapper li.hovered.opacity {
  opacity: 0.6;
  transition: opacity 0.1s;
}
.activity-m-v1.act-now .inside-bg {
  height: 100px;
}
.activity-m-v1 .onlytip {
  line-height: 20px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.activity-m-v1.act-end .inside-bg {
  height: 100px;
}

.high-level-fake-comment[data-v-c8b3c5a4] {
  padding-bottom: 373px;
}
.high-level-fake-comment .comment-title[data-v-c8b3c5a4] {
  color: #18191c;
   font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
.high-level-fake-comment .main[data-v-c8b3c5a4] {
  display: flex;
  align-items: center;
}
.high-level-fake-comment .main .avatar-wrap[data-v-c8b3c5a4] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
}
.high-level-fake-comment .main .avatar-wrap .avatar[data-v-c8b3c5a4] {
  width: 48px;
  height: 48px;
}
.high-level-fake-comment .main .fake-input[data-v-c8b3c5a4] {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 6px;
  height: 40px;
  background: #f1f2f3;
   border-radius: 6px;
  cursor: pointer;
}
.high-level-fake-comment .main .fake-input .charge-btn[data-v-c8b3c5a4] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 24px;
  margin: 0 6px;
  border-radius: 4px;
  background: #ff6699;
   }
.high-level-fake-comment .main .fake-publish[data-v-c8b3c5a4] {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  border-radius: 6px;
  background: #00aeec;
     opacity: 0.5;
}

.membersinfo-upcard[data-v-551213e6] {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}
.membersinfo-upcard .avatar[data-v-551213e6] {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c9ccd0;
   box-sizing: border-box;
  border: 1px solid #f1f2f3;
   position: relative;
}
.membersinfo-upcard .avatar .avatar-down-img[data-v-551213e6] {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}
.membersinfo-upcard .avatar .add-follow-btn[data-v-551213e6] {
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #00aeec;
   line-height: 18px;
  text-align: center;
  bottom: -8px;
  left: 12px;
  font-size: 14px;
    cursor: pointer;
}
.membersinfo-upcard .staff-info[data-v-551213e6] {
  margin-top: 8px;
  text-align: center;
  padding: 0 4px;
}
.membersinfo-upcard .staff-info .staff-name[data-v-551213e6] {
  line-height: 18px;
  font-size: 13px;
  color: #18191c;
   cursor: pointer;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.membersinfo-upcard .staff-info .staff-name.is-vip[data-v-551213e6] {
  color: #ff6699;
 }
.membersinfo-upcard .staff-info .staff-name.small-vip[data-v-551213e6] {
  color: #62c076;
}
.membersinfo-upcard .staff-info .tag-sponsor[data-v-551213e6] {
  color: #d2920a;
}
.membersinfo-upcard .staff-info .info-tag[data-v-551213e6] {
  color: #9499a0;
 }

.membersinfo-upcard .b-img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.membersinfo-upcard .b-img__inner img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}

.membersinfo-normal .header[data-v-42892ec8] {
  height: 44px;
  line-height: 44px;
  border-radius: 6px;
  background-color: #f1f2f3;
   padding: 0 16px;
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
   transition: background-color 0.3s;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .membersinfo-normal .header[data-v-42892ec8] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.membersinfo-normal .header[data-v-42892ec8]:hover {
  background-color: #e3e5e7;
 }
.membersinfo-normal .header.can-pointer[data-v-42892ec8] {
  cursor: pointer;
}
.membersinfo-normal .header .staff-amt[data-v-42892ec8] {
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  margin-left: 6px;
  font-size: 13px;
  color: #61666d;
 }
@media (-webkit-max-device-pixel-ratio: 1) {
  .membersinfo-normal .header .staff-amt[data-v-42892ec8] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.membersinfo-normal .header .fold-btn[data-v-42892ec8] {
  display: inline-flex;
  height: 100%;
  align-items: center;
  float: right;
  transform: rotate(180deg);
  transition: transform 0.3s;
}
.membersinfo-normal .header .fold-btn.unfold[data-v-42892ec8] {
  transform: rotate(0deg);
}
.membersinfo-normal .container[data-v-42892ec8] {
  padding-top: 12px;
  display: flex;
  flex-wrap: wrap;
  transition: max-height 0.3s ease, background-color 1s;
  overflow: hidden;
}
.membersinfo-normal .container.init-no-wrap[data-v-42892ec8] {
  flex-wrap: nowrap !important;
}
.membersinfo-normal .container .membersinfo-upcard-wrap[data-v-42892ec8] {
  flex-shrink: 0;
  width: 87px;
  padding-bottom: 18px;
}
@media (min-width: 1681px) {
  .membersinfo-normal .header[data-v-42892ec8] {
    font-size: 16px;
  }
  .membersinfo-normal .header .person[data-v-42892ec8] {
    font-size: 14px;
  }
  .membersinfo-normal .container .membersinfo-upcard-wrap[data-v-42892ec8] {
    width: 82px;
    padding-bottom: 20px;
  }
  .membersinfo-normal
    .container
    .membersinfo-upcard-wrap
    .upinfo
    .upname[data-v-42892ec8] {
    font-size: 14px;
    line-height: 20px;
  }
}

.membersinfo-wide .header[data-v-20a04cd4] {
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  height: 20px;
  line-height: 20px;
  color: #18191c;
   margin-bottom: 8px;
  display: inline-flex;
  align-items: center;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .membersinfo-wide .header[data-v-20a04cd4] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.membersinfo-wide .header .staff-amt[data-v-20a04cd4] {
  margin-left: 6px;
  font-size: 13px;
  color: #61666d;
 }
.membersinfo-wide .container[data-v-20a04cd4] {
  display: flex;
  align-items: center;
  position: relative;
}
.membersinfo-wide .container .membersinfo-upcard-wrap[data-v-20a04cd4] {
  flex-shrink: 0;
  width: 87px;
  padding-bottom: 18px;
}
.membersinfo-wide .container .scroll-panel[data-v-20a04cd4] {
  display: flex;
  overflow: hidden;
}
.membersinfo-wide .container .scroll-panel .scroll-inside[data-v-20a04cd4] {
  display: flex;
  transition: 1s;
  transform: translateX(0);
}
.membersinfo-wide .container .van-icon-general_back_s[data-v-20a04cd4],
.membersinfo-wide .container .van-icon-general_enter_s[data-v-20a04cd4] {
  position: absolute;
  top: 28px;
  background: transparent;
  font-size: 20px;
  color: #61666d;
   cursor: pointer;
}
.membersinfo-wide .container .van-icon-general_back_s[data-v-20a04cd4]:hover,
.membersinfo-wide .container .van-icon-general_enter_s[data-v-20a04cd4]:hover {
  color: #00aeec;
 }
.membersinfo-wide .container .van-icon-general_enter_s[data-v-20a04cd4] {
  right: 6px;
}
.membersinfo-wide .container .van-icon-general_back_s[data-v-20a04cd4] {
  left: 6px;
  z-index: 1;
}
.membersinfo-wide .container .general-mask-left[data-v-20a04cd4],
.membersinfo-wide .container .general-mask-right[data-v-20a04cd4] {
  height: 100%;
  width: 30%;
  position: absolute;
  top: 0;
  pointer-events: none;
}
.membersinfo-wide .container .general-mask-left[data-v-20a04cd4] {
  left: 0px;
  background: linear-gradient(-270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(
    -270deg,
     rgba(255, 255, 255, 0) 100%
  );
}
.membersinfo-wide .container .general-mask-right[data-v-20a04cd4] {
  right: 0;
  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(
    270deg,
     rgba(255, 255, 255, 0) 100%
  );
}
@media (min-width: 1681px) {
  .membersinfo-wide .header[data-v-20a04cd4] {
    font-size: 16px;
  }
  .membersinfo-wide .header .person[data-v-20a04cd4] {
    font-size: 14px;
  }
  .membersinfo-wide .container .membersinfo-upcard-wrap[data-v-20a04cd4] {
    width: 82px;
    padding-bottom: 20px;
  }
  .membersinfo-wide
    .container
    .membersinfo-upcard-wrap
    .upinfo
    .upname[data-v-20a04cd4] {
    font-size: 14px;
    line-height: 20px;
  }
}

.members-info-container[data-v-86d360d2] {
  padding-top: 18px;
}

.up-avatar-wrap[data-v-1a81d392] {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.up-avatar-wrap .up-avatar[data-v-1a81d392] {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #c9ccd0;
 }
.up-avatar-wrap .up-avatar.avatar-loaded[data-v-1a81d392] {
  background-color: transparent;
}
.up-avatar-wrap.is-nft[data-v-1a81d392],
.up-avatar-wrap.has-pendant[data-v-1a81d392] {
  width: 80px;
  height: 80px;
}
.up-avatar-wrap.is-nft .up-avatar[data-v-1a81d392],
.up-avatar-wrap.has-pendant .up-avatar[data-v-1a81d392] {
  width: 47px;
  height: 47px;
}

.up-detail .up-detail-top[data-v-079d0296] {
  display: flex;
  align-items: center;
}
.up-detail .up-detail-top .live-status[data-v-079d0296] {
  padding: 0 6px 0 7px;
  height: 16px;
  line-height: 16px;
  border-radius: 9px;
  color: #ff6699;
   font-size: 12px;
  border: 1px solid #ff6699;
   margin-right: 4px;
  transition: background-color 0.3s, color 0.3s;
  flex-shrink: 0;
}
.up-detail .up-detail-top .live-status[data-v-079d0296]:hover {
    background: #fb7299;
}
.up-detail .up-detail-top .up-name[data-v-079d0296] {
  font-size: 15px;
  color: #18191c;
   font-weight: 500;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 12px;
  max-width: calc(100% - 12px - 56px);
}
@media (min-width: 1681px) {
  .up-detail .up-detail-top .up-name[data-v-079d0296] {
    font-size: 16px;
    max-width: calc(100% - 12px - 60px);
  }
}
.up-detail .up-detail-top .up-name .mask[data-v-079d0296] {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.15);
}
.up-detail .up-detail-top .up-name[data-v-079d0296]:hover {
  color: #00aeec;
 }
.up-detail .up-detail-top .up-name.is_vip[data-v-079d0296]:hover,
.up-detail .up-detail-top .up-name.small-vip[data-v-079d0296]:hover {
  color: #fb7299;
}
.up-detail .up-detail-top .up-name.is_vip:hover .mask[data-v-079d0296],
.up-detail .up-detail-top .up-name.small-vip:hover .mask[data-v-079d0296] {
  display: block;
}
.up-detail .up-detail-top .send-msg[data-v-079d0296] {
  color: #61666d;
   font-size: 13px;
  transition: color 0.3s;
  flex-shrink: 0;
}
@media (min-width: 1680px) {
  .up-detail .up-detail-top .send-msg[data-v-079d0296] {
    font-size: 14px;
  }
}
.up-detail .up-detail-top .send-msg[data-v-079d0296]:hover {
  color: #00aeec;
 }
.up-detail .up-detail-top .send-msg:hover i[data-v-079d0296] {
  color: #00aeec;
 }
.up-detail .up-detail-top .send-msg i[data-v-079d0296] {
  color: #61666d;
   transition: color 0.3s;
}
.up-detail .up-description[data-v-079d0296] {
  margin-top: 2px;
  font-size: 13px;
  line-height: 16px;
  height: 16px;
  color: #9499a0;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media (min-width: 1681px) {
  .up-detail .up-description[data-v-079d0296] {
    font-size: 14px;
  }
}

.upinfo-btn-panel[data-v-1e89c9b3] {
  clear: both;
  display: flex;
  margin-top: 5px;
  white-space: nowrap;
}
.upinfo-btn-panel .default-btn[data-v-1e89c9b3] {
  box-sizing: border-box;
  padding: 0;
  line-height: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #c9ccd0;
   position: relative;
  transition: 0.3s all;
}
.upinfo-btn-panel .old-charge-btn[data-v-1e89c9b3] {
  margin-right: 12px;
  flex-shrink: 0;
  width: 78px;
}
.upinfo-btn-panel .following-charge-btn[data-v-1e89c9b3] {
  background: #00aeec;
   }
.upinfo-btn-panel .following-charge-btn[data-v-1e89c9b3]:hover {
  background: #00b8f6;
}
.upinfo-btn-panel .not-follow-charge-btn[data-v-1e89c9b3] {
  border: 1px solid #00aeec;
   background: #ffffff;
   color: #00aeec;
 }
.upinfo-btn-panel .not-follow-charge-btn[data-v-1e89c9b3]:hover {
  border-color: #00b8f6;
  color: #00b8f6;
}
.upinfo-btn-panel .new-charge-btn[data-v-1e89c9b3] {
  margin-right: 12px;
  flex-shrink: 0;
  width: 109px;
  color: #ff6699;
 }
.upinfo-btn-panel .new-charge-btn.charge-btn-loaded[data-v-1e89c9b3] {
  background-color: transparent;
  border: 1px solid #ff6699;
 }
.upinfo-btn-panel .new-charge-btn.charge-btn-loaded[data-v-1e89c9b3]:hover {
  background-color: #ffecf1;
 }
.upinfo-btn-panel .new-charge-btn .charge-btn-icon[data-v-1e89c9b3] {
  width: 20px;
  height: 20px;
  margin-right: 4px;
  display: flex;
}
.upinfo-btn-panel .new-charge-btn .charge-btn-icon img[data-v-1e89c9b3] {
  width: 100%;
  height: 100%;
}
.upinfo-btn-panel .follow-btn[data-v-1e89c9b3] {
  flex: 1 1 auto;
  max-width: 200px;
}
.upinfo-btn-panel .follow-btn .follow-btn-inner[data-v-1e89c9b3] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.upinfo-btn-panel
  .follow-btn
  .follow-btn-inner
  .follow-btn-icon[data-v-1e89c9b3] {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.upinfo-btn-panel .follow-btn.following[data-v-1e89c9b3] {
  color: #9499a0;
   background-color: #e3e5e7;
 }
.upinfo-btn-panel .follow-btn.following[data-v-1e89c9b3]:hover {
  background-color: #f1f2f3;
 }
.upinfo-btn-panel .follow-btn.not-follow[data-v-1e89c9b3] {
  background: #00aeec;
   }
.upinfo-btn-panel .follow-btn.not-follow[data-v-1e89c9b3]:hover {
  background: #00b8f6;
}
.upinfo-btn-panel .follow-btn .already-btn[data-v-1e89c9b3] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
@media (min-width: 1681px) {
  .upinfo-btn-panel .charge-btn[data-v-1e89c9b3] {
    width: 138px;
  }
  .upinfo-btn-panel .follow-btn[data-v-1e89c9b3] {
    max-width: 230px;
  }
}

.van-popover.van-followed {
  box-sizing: border-box;
  position: absolute;
  border-radius: 4px;
  min-width: 98px;
  padding: 6px 0px;
  background: #ffffff;
   border: 1px solid #f1f2f3;
   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}
.van-popover.van-followed .follow_dropdown {
  text-align: center;
}
.van-popover.van-followed .follow_dropdown li {
  padding: 0 20px;
  line-height: 40px;
  transition: all 0.3s;
  cursor: pointer;
  color: #18191c;
   position: relative;
}
.van-popover.van-followed .follow_dropdown li:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0.1;
}
.van-popover.van-followed .follow_dropdown li:hover {
  background: none;
  color: #00aeec;
 }
.van-popover.van-followed .follow_dropdown li:hover:before {
  background-color: #9499a0;
 }

.up-info-container[data-v-13b082da] {
  box-sizing: border-box;
  height: 104px;
  display: flex;
  align-items: center;
}
.up-info-container.up-info-no-desc .up-info--left[data-v-13b082da] {
  align-self: center;
}
.up-info-container .up-info--right[data-v-13b082da] {
  margin-left: 12px;
  flex: 1;
  overflow: auto;
}
.up-info-container .up-info--right .up-info__detail[data-v-13b082da] {
  margin-bottom: 5px;
}
@media (min-width: 1681px) {
  .up-info-container[data-v-13b082da] {
    height: 108px;
  }
}

.follow-dialog-wrap-exp {
  width: 420px;
  border-radius: 4px;
  background: #ffffff;
   overflow: hidden;
}
.follow-dialog-wrap-exp .follow-dialog-window {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 420px;
  background: #ffffff;
   left: 50%;
  margin-left: -210px;
  border-radius: 4px;
}
.follow-dialog-wrap-exp .follow-dialog-window .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #18191c;
   border-bottom: 1px solid #e3e5e7;
   text-align: center;
}
.follow-dialog-wrap-exp .follow-dialog-window .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  height: 50px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.follow-dialog-wrap-exp .follow-dialog-window .content {
  padding: 0 36px;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .info {
  font-size: 12px;
  color: #9499a0;
   margin: 14px 0;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .info .uname {
  color: #61666d;
 }
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list {
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list ul {
  position: relative;
  min-height: 185px;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  ul
  .follow-group-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #ffffff;
 }
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list li {
  padding-bottom: 24px;
  font-size: 14px;
  color: #18191c;
   cursor: pointer;
  list-style-type: none;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li.special-group {
  padding-bottom: 16px;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list li label {
  cursor: pointer;
  display: block;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable {
  color: #9499a0;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable:hover {
  color: #9499a0;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  .special-tip {
  padding-left: 40px;
  font-size: 12px;
  color: #9499a0;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  vertical-align: middle;
  display: none;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]
  + i {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 18px;
  vertical-align: middle;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAMZJREFUOBFjZACCY8cuSP/4+6ebkYHB4T8DgyRIjFgA1PMcqOcABzNLqZWVwVNGkGE///45w8DANIGZ898iOxOT58QaBlJ36MwZyb/fmeIYGP4VsDOzmDDuO3xmGSMD00VHW6NOUgxCV7v/8Lny/wz/9JlA3gS5DF0BqXyQGSCzGIAuBAYBdQDILCbqGIUwZdRARFiQyxoNQ3JDDqFvCIQhqDwDFUEIR5PHApkBMosJVDhCyjPyDILpApkBMov6BSzIBmpWAQCEVFxRmF8CTgAAAABJRU5ErkJggg==);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAL5JREFUOBFjZACBVTelGb7/62ZgZHBg+P9fEixGLMHI+JzhP8MBBk6mUoYw9aeMEMP+nmFgYpgANGMRQ6zWc2LNAqtbfA3kgDiGfwwFDJzMJowMC68vY2D6fxFoUCdJBqErXnytnOEfoz4T2Jsgl1EOFkHMWnjtP+VmQU0AmsVENcOgBo0aSHmIjobhyAhDUHkGKYIo8y/IDKBZTODCEVSeUQ7iQGaxgEva78ACdvE1kJEUFrBMwAIWBKhYBQAAjRZDKb7Y9b8AAAAASUVORK5CYII=);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:checked
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:checked:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li:last-child {
  padding-bottom: 0;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list li:hover {
  color: #00aeec;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li:hover
  .special-tip {
  color: #61666d;
 }
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list .errmsg {
  color: #ff6699;
   margin: 5px 0 10px 0;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list .add-group {
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .add-btn {
  height: 34px;
  line-height: 34px;
  padding: 0 34px;
  border: 1px solid #9499a0;
   border-radius: 4px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAC5JREFUKBVjYMABZi5a9R+EcUgzMOGSICQ+EjQy4gs5fAFEduDgNHQ0HhnIT6sAudAOjNLnY/wAAAAASUVORK5CYII=)
    no-repeat 10px center;
  font-size: 12px;
  color: #61666d;
   cursor: pointer;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .add-btn:hover {
  border: 1px solid #00aeec;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group {
  height: 34px;
  line-height: 34px;
  border: 1px solid #00aeec;
   border-radius: 4px;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  input {
  border: none;
  font-size: 12px;
  width: 200px;
  margin-left: 10px;
  padding: 0;
  box-shadow: none;
  height: 100%;
  outline: none;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  .limit {
  float: right;
  margin-right: 10px;
  color: #9499a0;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  .submitGroup {
  float: right;
  height: 34px;
  width: 90px;
  background: #d9f1f9;
  border: none;
  border-left: 1px solid #00aeec;
   border-radius: 0 4px 4px 0;
  font-size: 14px;
  color: #00aeec;
   cursor: pointer;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list .empty-tip {
  font-size: 12px;
  color: #61666d;
   margin-top: 15px;
  display: none;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list::-webkit-scrollbar {
  width: 6px;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #999999;
}
.follow-dialog-wrap-exp .follow-dialog-window .bottom {
  height: 76px;
  text-align: center;
  margin: 0 36px;
  border-top: 1px solid #e3e5e7;
 }
.follow-dialog-wrap-exp .follow-dialog-window .bottom .btn {
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-top: 18px;
  background: #00aeec;
   border: none;
  border-radius: 4px;
    cursor: pointer;
}
.follow-dialog-wrap-exp .follow-dialog-window .bottom .btn:hover {
  background: #00aeec;
 }
.follow-dialog-wrap-exp .follow-dialog-window .bottom .btn:disabled {
  background-color: #e3e5e7;
   color: #9499a0;
   transition: all 0.2s;
}
.follow-dialog-wrap-exp .follow-dialog-window .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}

.high-level-fake-danmuku[data-v-104d01dc] {
  width: 100%;
  height: 100%;
  min-height: 44px;
  background: #ffffff;
   cursor: not-allowed;
}
.high-level-fake-danmuku .inner[data-v-104d01dc] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 44px;
  background: #f1f2f3;
   opacity: 0.3;
  border-radius: 6px;
}
.high-level-fake-danmuku .inner .right[data-v-104d01dc] {
  display: flex;
  align-items: center;
}
.high-level-fake-danmuku .inner .right .title[data-v-104d01dc] {
  font-size: 15px;
  font-weight: 500;
  color: #18191c;
 }
.high-level-fake-danmuku .inner .right .three-dots[data-v-104d01dc] {
  margin-left: 12px;
  width: 16px;
  height: 16px;
  color: #61666d;
 }
.high-level-fake-danmuku .inner .expand[data-v-104d01dc] {
  width: 16px;
  height: 16px;
  color: #61666d;
 }

.multi-page-v1 {
  position: relative;
  background: #f1f2f3;
   z-index: 1;
  border-radius: 6px;
  margin-bottom: 18px;
}
.multi-page-v1 .head-con {
  display: flex;
  padding: 14px 16px 0;
  align-items: center;
  justify-content: space-between;
}
.multi-page-v1 .head-con .head-left {
  display: flex;
  align-items: center;
}
.multi-page-v1 .head-con .head-left h3 {
  font-size: 15px;
  line-height: 20px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  margin-right: 4px;
  color: #18191c;
 }
@media (-webkit-max-device-pixel-ratio: 1) {
  .multi-page-v1 .head-con .head-left h3 {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.multi-page-v1 .head-con .head-left .cur-page {
  font-size: 12px;
  color: #9499a0;
   line-height: 16px;
}
.multi-page-v1 .head-con .head-left .range-box i {
  cursor: pointer;
  line-height: 24px;
  font-size: 16px;
  margin-left: 10px;
  color: #757575;
}
.multi-page-v1 .head-con .head-left .range-box i:hover {
  color: #00aeec;
 }
.multi-page-v1 .head-con .head-right .next-button {
  font-size: 14px;
  line-height: 16px;
  color: #9499a0;
 }
.multi-page-v1 .head-con .head-right .next-button .switch-button {
  background-color: #9499a0;
   border: 1px solid #9499a0;
 }
.multi-page-v1 .head-con .head-right .next-button .switch-button.on {
  background-color: #00aeec;
   border: 1px solid #00aeec;
 }
.multi-page-v1 .cur-list {
  padding: 4px 0;
  transition: all 0.3s;
  max-height: 340px;
  overflow: hidden;
}
.multi-page-v1 .cur-list:hover {
  overflow-y: auto;
}
.multi-page-v1 .cur-list .list-box {
  padding: 0 6px;
}
.multi-page-v1 .cur-list .list-box li {
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #18191c;
   margin: 5px 0;
  transition: all 0.3s;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  font-size: 13px;
  width: 308px;
  box-sizing: border-box;
}
.multi-page-v1 .cur-list .list-box li:hover {
  color: #00aeec;
   background: #ffffff;
 }
.multi-page-v1 .cur-list .list-box li.watched a {
  color: #9499a0;
 }
.multi-page-v1 .cur-list .list-box li.on {
  background: #ffffff;
   padding: 0 10px 0 6px;
}
.multi-page-v1 .cur-list .list-box li.on > a {
  color: #00aeec;
 }
.multi-page-v1 .cur-list .list-box li.on img {
  height: 14px;
  width: 14px;
  font-size: 14px;
  margin-right: 5px;
}
.multi-page-v1 .cur-list .list-box li a {
  color: #18191c;
   display: flex;
  justify-content: space-between;
  overflow: hidden;
  line-height: inherit;
}
.multi-page-v1 .cur-list .list-box li .clickitem {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
}
.multi-page-v1 .cur-list .list-box li .link-content {
  display: flex;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
}
.multi-page-v1 .cur-list .list-box li .page-num {
  margin-right: 10px;
}
.multi-page-v1 .cur-list .list-box li .part {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
}
.multi-page-v1 .cur-list .list-box li .duration {
  color: #9499a0;
   justify-self: flex-end;
}
.multi-page-v1 .cur-list .module-box {
  margin-top: 8px;
  margin-left: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.multi-page-v1 .cur-list .module-box li {
  background: #f1f2f3;
   float: left;
  width: 66px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: #18191c;
   border: 1px solid #e3e5e7;
   border-radius: 4px;
  margin: 0 7px 8px 0px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 13px;
  box-sizing: border-box;
}
.multi-page-v1 .cur-list .module-box li:nth-of-type(4n) {
  margin-right: 0px;
}
.multi-page-v1 .cur-list .module-box li a {
  display: inline-block;
  width: 100%;
  color: #18191c;
 }
.multi-page-v1 .cur-list .module-box li a > span {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.multi-page-v1 .cur-list .module-box li.watched a {
  color: #9499a0;
 }
.multi-page-v1 .cur-list .module-box li:hover {
  color: #00aeec;
   border-color: #00aeec;
 }
.multi-page-v1 .cur-list .module-box li:hover a {
  color: #00aeec;
 }
.multi-page-v1 .cur-list .module-box li.on {
    border-color: #00aeec;
   background: #00aeec;
 }
.multi-page-v1 .cur-list .module-box li.on a {
  }
.multi-page-v1.small-mode .cur-list .list-box li {
  width: 338px;
}
.multi-page-v1.small-mode .cur-list .module-box li {
  width: 75px;
}
@media (min-width: 1681px) {
  .multi-page-v1 {
    margin-bottom: 20px;
  }
  .multi-page-v1 .head-con .head-left h3 {
    font-size: 16px;
  }
  .multi-page-v1 .cur-list .list-box li,
  .multi-page-v1 .cur-list .module-box li {
    font-size: 14px;
  }
  .multi-page-v1 .cur-list .list-box li {
    width: 348px;
  }
  .multi-page-v1 .cur-list .module-box li {
    width: 75px;
  }
  .multi-page-v1.small-mode .cur-list .list-box li {
    width: 399px;
  }
  .multi-page-v1.small-mode .cur-list .module-box li {
    width: 70px;
  }
  .multi-page-v1.small-mode .cur-list .module-box li:nth-of-type(4n) {
    margin-right: 7px;
  }
  .multi-page-v1.small-mode .cur-list .module-box li:nth-of-type(5n) {
    margin-right: 0px;
  }
}
.cur-list::-webkit-scrollbar {
  width: 4px;
}
.cur-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #999;
}

.video-sections-v1[data-v-24025765] {
  width: 100%;
  padding-top: 10px;
  margin-bottom: 18px;
  background: #f1f2f3;
   position: relative;
  border-radius: 6px;
}
.video-sections-v1 .video-sections-head_first-line[data-v-24025765] {
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.video-sections-v1
  .video-sections-head_first-line
  .first-line-left[data-v-24025765] {
  display: flex;
  align-items: center;
}
.video-sections-v1
  .video-sections-head_first-line
  .first-line-left
  .first-line-title[data-v-24025765] {
  display: inline-block;
  max-width: 164px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 4px;
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
   line-height: 20px;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-sections-v1
    .video-sections-head_first-line
    .first-line-left
    .first-line-title[data-v-24025765] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-sections-v1
  .video-sections-head_first-line
  .first-line-left
  .first-line-title[data-v-24025765]:hover {
  color: #00a1d6;
}
.video-sections-v1
  .video-sections-head_first-line
  .first-line-left
  .cur-page[data-v-24025765] {
  color: #9499a0;
   font-size: 13px;
  line-height: 16px;
}
.video-sections-v1
  .video-sections-head_first-line
  .first-line-right
  .next-button[data-v-24025765] {
  font-size: 13px;
  line-height: 16px;
  color: #9499a0;
 }
.video-sections-v1
  .video-sections-head_first-line
  .first-line-right
  .next-button
  .switch-button[data-v-24025765] {
  background-color: #9499a0;
   border: 1px solid #9499a0;
 }
.video-sections-v1
  .video-sections-head_first-line
  .first-line-right
  .next-button
  .switch-button.on[data-v-24025765] {
  background-color: #00aeec;
   border: 1px solid #00aeec;
 }
.video-sections-v1 .video-sections-head_second-line[data-v-24025765] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 16px 0;
  color: #9499a0;
   padding-bottom: 12px;
  font-size: 13px;
  line-height: 16px;
}
.video-sections-v1
  .video-sections-head_second-line
  .second-line_left[data-v-24025765] {
  display: flex;
  align-items: center;
}
.video-sections-v1 .video-sections-head_second-line .play-num[data-v-24025765] {
  margin-right: 8px;
}
.video-sections-v1 .video-sections-head_second-line .abstract[data-v-24025765] {
  color: #9499a0;
   line-height: 16px;
  margin-left: 3px;
}
.video-sections-v1
  .video-sections-head_second-line
  .second-line_right[data-v-24025765] {
  width: 70px;
  height: 24px;
  border: 1px solid #00aeec;
   text-align: center;
  color: #00aeec;
   border-radius: 2px;
  background: #f1f2f3;
   outline: none;
  cursor: pointer;
}
.video-sections-v1
  .video-sections-head_second-line
  .already-fav[data-v-24025765] {
  background: #e3e5e7;
   color: #9499a0;
   border: none;
}
.video-sections-v1 .video-sections-head_desc[data-v-24025765] {
  position: absolute;
  box-sizing: border-box;
  top: 73px;
  right: 79px;
  width: 261px;
  padding: 12px 20px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #e3e5e7;
   font-size: 12px;
  color: #9499a0;
   letter-spacing: 0;
  line-height: 16px;
  z-index: 10;
  visibility: hidden;
}
.video-sections-v1 .border-bottom-line[data-v-24025765] {
  height: 1px;
  background: #e3e5e7;
   margin: 0 15px;
}
.video-sections-v1 .video-sections-content-list[data-v-24025765] {
  height: 243px;
  overflow-y: hidden;
  overflow-x: hidden;
}
.video-sections-v1 .video-sections-content-list.has-margin[data-v-24025765] {
  margin-top: 10px;
}
.video-sections-v1 .video-sections-content-list[data-v-24025765]:hover {
  overflow-y: scroll;
}
.video-sections-v1
  .video-sections-content-list:hover
  .video-sections-item[data-v-24025765] {
  margin: 0px 12px 0 16px;
}
.video-sections-v1 .video-sections-item[data-v-24025765] {
  width: 288px;
  margin: 0px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e5e7;
 }
.video-sections-v1 .video-sections-item.small-mode[data-v-24025765] {
  width: 310px;
}
.video-sections-v1 .video-sections-item[data-v-24025765]:last-child {
  border-bottom: none;
}
.video-sections-v1 .video-section-title[data-v-24025765] {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  background: #f1f2f3;
   cursor: pointer;
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-sections-v1 .video-section-title[data-v-24025765] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-sections-v1 .video-section-title > p[data-v-24025765] {
  color: #18191c;
   line-height: 18px;
  display: inline-block;
  max-width: 280px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.video-sections-v1 .video-section-title .arrow-icon[data-v-24025765] {
  fill: #61666d;
   transition: transform 0.35s;
  transform: rotate(0deg);
}
.video-sections-v1 .video-section-title .arrow-fold[data-v-24025765] {
  transform: rotate(180deg);
}
.video-sections-v1 .video-section-list[data-v-24025765] {
  overflow: hidden;
  height: 0;
}
.video-sections-v1 .video-section-list .video-episode-card[data-v-24025765] {
  height: 71px;
  position: relative;
  cursor: pointer;
  line-height: 16px;
  display: flex;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__cover[data-v-24025765] {
  width: 106px;
  height: 60px;
  margin-right: 10px;
  position: relative;
  flex: 0 0 auto;
  background: #c9ccd0;
   border-radius: 4px;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__cover
  .cover-link-image[data-v-24025765] {
  background: inherit;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__cover
  .cover-link-image[data-v-24025765]
  img {
  border-radius: 4px;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__info[data-v-24025765] {
  flex: 1 1 auto;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__info-title[data-v-24025765] {
  font-size: 14px;
  color: #18191c;
   line-height: 19px;
  margin-bottom: 4px;
  transition: 0.3s;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-sections-v1
    .video-section-list
    .video-episode-card__info-title[data-v-24025765] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-sections-v1
  .video-section-list
  .video-episode-card__info-title
  .cur-play-icon[data-v-24025765] {
  width: 14px;
  height: 12px;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__info__number[data-v-24025765] {
  font-size: 13px;
  color: #9499a0;
   fill: #61666d;
   line-height: 18px;
  display: inline-flex;
  align-items: center;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__info__number
  svg[data-v-24025765] {
  margin-right: 4px;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__info__number
  svg.dm[data-v-24025765] {
  margin-left: 10px;
}
.video-sections-v1
  .video-section-list
  .video-episode-card__info-title-playing[data-v-24025765] {
  color: #00aeec;
   text-indent: 0 !important;
}
.video-sections-v1
  .video-section-list
  .video-episode-card:hover
  .video-episode-card__info-title[data-v-24025765] {
  color: #00aeec;
 }
@media (min-width: 1681px) {
  .video-sections-v1[data-v-24025765] {
    margin-bottom: 20px;
  }
  .video-sections-v1
    .video-sections-head_first-line
    .first-line-left
    .first-line-title[data-v-24025765] {
    font-size: 16px;
  }
  .video-sections-v1
    .video-sections-head_first-line
    .first-line-left
    .cur-page[data-v-24025765] {
    font-size: 14px;
  }
  .video-sections-v1
    .video-sections-head_first-line
    .first-line-right
    .next-button[data-v-24025765] {
    font-size: 14px;
  }
  .video-sections-v1 .video-sections-head_second-line[data-v-24025765] {
    font-size: 14px;
  }
  .video-sections-v1
    .video-section-list
    .video-episode-card__info-title[data-v-24025765] {
    font-size: 15px;
    line-height: 20px;
  }
  .video-sections-v1
    .video-section-list
    .video-episode-card__info__number[data-v-24025765] {
    font-size: 14px;
    line-height: 20px;
  }
  .video-sections-v1
    .video-section-list
    .video-episode-card__info__number
    svg[data-v-24025765] {
    width: 20px;
    height: 20px;
  }
  .video-sections-v1 .video-sections-item[data-v-24025765] {
    width: 328px;
  }
  .video-sections-v1 .video-sections-item.small-mode[data-v-24025765] {
    width: 370px;
  }
}

.video-sections-content-list::-webkit-scrollbar {
  width: 4px;
}
.video-sections-content-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #999999;
}

.base-video-sections-v1[data-v-561fc3b4] {
  width: 100%;
  padding-top: 10px;
  margin-bottom: 18px;
  background: #f1f2f3;
   position: relative;
  border-radius: 6px;
}
.base-video-sections-v1 .video-sections-head_first-line[data-v-561fc3b4] {
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.base-video-sections-v1
  .video-sections-head_first-line
  .first-line-left[data-v-561fc3b4] {
  display: flex;
  align-items: center;
}
.base-video-sections-v1
  .video-sections-head_first-line
  .first-line-left
  .first-line-title[data-v-561fc3b4] {
  display: inline-block;
  max-width: 164px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 4px;
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
   line-height: 20px;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .base-video-sections-v1
    .video-sections-head_first-line
    .first-line-left
    .first-line-title[data-v-561fc3b4] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.base-video-sections-v1
  .video-sections-head_first-line
  .first-line-left
  .first-line-title[data-v-561fc3b4]:hover {
  color: #00aeec;
 }
.base-video-sections-v1
  .video-sections-head_first-line
  .first-line-left
  .cur-page[data-v-561fc3b4] {
  color: #9499a0;
   font-size: 13px;
  line-height: 16px;
}
.base-video-sections-v1
  .video-sections-head_first-line
  .first-line-right
  .next-button[data-v-561fc3b4] {
  font-size: 13px;
  line-height: 16px;
  color: #9499a0;
 }
.base-video-sections-v1
  .video-sections-head_first-line
  .first-line-right
  .next-button
  .switch-button[data-v-561fc3b4] {
  background-color: #9499a0;
   border: 1px solid #9499a0;
 }
.base-video-sections-v1
  .video-sections-head_first-line
  .first-line-right
  .next-button
  .switch-button.on[data-v-561fc3b4] {
  background-color: #00aeec;
   border: 1px solid #00aeec;
 }
.base-video-sections-v1 .video-sections-head_second-line[data-v-561fc3b4] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 16px 0;
  color: #9499a0;
   padding-bottom: 12px;
  font-size: 14px;
  line-height: 16px;
}
.base-video-sections-v1
  .video-sections-head_second-line
  .second-line_left[data-v-561fc3b4] {
  display: flex;
  align-items: center;
}
.base-video-sections-v1
  .video-sections-head_second-line
  .play-num[data-v-561fc3b4] {
  margin-right: 8px;
}
.base-video-sections-v1
  .video-sections-head_second-line
  .abstract[data-v-561fc3b4] {
  color: #9499a0;
   line-height: 16px;
  margin-left: 3px;
}
.base-video-sections-v1
  .video-sections-head_second-line
  .second-line_right[data-v-561fc3b4] {
  width: 70px;
  height: 24px;
  border: 1px solid #00aeec;
   text-align: center;
  color: #00aeec;
   border-radius: 2px;
  background: #f1f2f3;
   outline: none;
  cursor: pointer;
}
.base-video-sections-v1
  .video-sections-head_second-line
  .already-fav[data-v-561fc3b4] {
  background: #e3e5e7;
   color: #9499a0;
   border: none;
}
.base-video-sections-v1 .video-sections-head_desc[data-v-561fc3b4] {
  position: absolute;
  box-sizing: border-box;
  top: 73px;
  right: 79px;
  width: 261px;
  padding: 12px 20px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #e3e5e7;
   font-size: 12px;
  color: #9499a0;
   letter-spacing: 0;
  line-height: 16px;
  z-index: 10;
  visibility: hidden;
}
.base-video-sections-v1 .border-bottom-line[data-v-561fc3b4] {
  height: 1px;
  background: #e3e5e7;
   margin: 0 15px;
}
.base-video-sections-v1 .video-sections-content-list[data-v-561fc3b4] {
  max-height: 152px;
  border-radius: 6px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.base-video-sections-v1
  .video-sections-content-list.has-margin[data-v-561fc3b4] {
  margin-top: 10px;
}
.base-video-sections-v1 .video-sections-content-list[data-v-561fc3b4]:hover {
  overflow-y: scroll;
}
.base-video-sections-v1 .video-sections-item[data-v-561fc3b4] {
  box-sizing: border-box;
}
.base-video-sections-v1 .video-sections-item[data-v-561fc3b4]:last-child {
  border-bottom: none;
}
.base-video-sections-v1 .video-section-title[data-v-561fc3b4] {
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 6px;
  background: #f1f2f3;
   cursor: pointer;
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .base-video-sections-v1 .video-section-title[data-v-561fc3b4] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.base-video-sections-v1 .video-section-title > p[data-v-561fc3b4] {
  color: #18191c;
   line-height: 18px;
}
.base-video-sections-v1 .video-section-title .title[data-v-561fc3b4] {
  padding-left: 10px;
  display: inline-block;
  max-width: 280px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #18191c;
 }
.base-video-sections-v1 .video-section-title > img[data-v-561fc3b4] {
  padding-right: 12px;
}
.base-video-sections-v1 .video-section-title .arrow-icon[data-v-561fc3b4] {
  fill: #61666d;
   transition: transform 0.35s;
  transform: rotate(0deg);
}
.base-video-sections-v1 .video-section-title .arrow-unfold[data-v-561fc3b4] {
  transform: rotate(180deg);
  transform-origin: 25% 50%;
}
.base-video-sections-v1 .video-section-list[data-v-561fc3b4] {
  overflow: hidden;
  height: 0;
}
.base-video-sections-v1
  .video-section-list
  .video-episode-card[data-v-561fc3b4] {
  height: 30px;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  padding: 0 6px;
  margin: 4px 0;
  color: #fff;
}
.base-video-sections-v1
  .video-section-list
  .video-episode-card__info[data-v-561fc3b4] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  font-size: 14px;
  border-radius: 2px;
  padding: 0 10px;
}
.base-video-sections-v1
  .video-section-list
  .video-episode-card__info-title[data-v-561fc3b4] {
  width: 259px;
  color: #18191c;
   max-height: 36px;
  line-height: 20px;
  transition: 0.3s;
  white-space: nowrap;
  display: inline-block !important;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
}
.base-video-sections-v1
  .video-section-list
  .video-episode-card__info-title
  .cur-play-icon[data-v-561fc3b4] {
  width: 14px;
  height: 12px;
}
.base-video-sections-v1
  .video-section-list
  .video-episode-card__info-duration[data-v-561fc3b4] {
  color: #9499a0;
 }
.base-video-sections-v1
  .video-section-list
  .video-episode-card__info-title_indent[data-v-561fc3b4] {
  text-indent: -0.5rem;
}
.base-video-sections-v1
  .video-section-list
  .video-episode-card__info-playing[data-v-561fc3b4] {
  color: #00aeec;
   background-color: #ffffff;
 }
.base-video-sections-v1
  .video-section-list
  .video-episode-card__info-playing
  .video-episode-card__info-title[data-v-561fc3b4] {
  color: #00aeec;
 }
.base-video-sections-v1
  .video-section-list
  .video-episode-card:hover
  .video-episode-card__info-title[data-v-561fc3b4] {
  color: #00aeec;
 }
.base-video-sections-v1
  .video-section-list
  .video-episode-card[data-v-561fc3b4]:nth-child(1) {
  margin-top: 8px;
}
@media (min-width: 1681px) {
  .base-video-sections-v1[data-v-561fc3b4] {
    margin-bottom: 20px;
  }
  .base-video-sections-v1
    .video-sections-head_first-line
    .first-line-left
    .first-line-title[data-v-561fc3b4] {
    font-size: 16px;
  }
  .base-video-sections-v1
    .video-sections-head_first-line
    .first-line-left
    .cur-page[data-v-561fc3b4] {
    font-size: 14px;
  }
  .base-video-sections-v1
    .video-sections-head_first-line
    .first-line-right
    .next-button[data-v-561fc3b4] {
    font-size: 14px;
  }
  .base-video-sections-v1 .video-sections-head_second-line[data-v-561fc3b4] {
    font-size: 14px;
  }
  .base-video-sections-v1
    .video-section-list
    .video-episode-card__info-title[data-v-561fc3b4] {
    font-size: 15px;
    line-height: 20px;
  }
  .base-video-sections-v1
    .video-section-list
    .video-episode-card__info__number[data-v-561fc3b4] {
    font-size: 14px;
    line-height: 20px;
  }
  .base-video-sections-v1
    .video-section-list
    .video-episode-card__info__number
    svg[data-v-561fc3b4] {
    width: 20px;
    height: 20px;
  }
  .base-video-sections-v1 .video-sections-item.small-mode[data-v-561fc3b4] {
    width: 370px;
  }
}

.video-sections ::-webkit-scrollbar {
  width: 4px;
}
.video-sections-content-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #999999;
}

.ad-report[data-v-5ad785bd]:not(:empty) {
  min-width: 1px;
  min-height: 1px;
  display: block;
}

.video-card-ad-small[data-v-eba1a9e8] {
  color: #18191c;
   transition: color 0.3s;
}
.video-card-ad-small .vcd[data-v-eba1a9e8] {
  margin: 18px 0;
  box-sizing: border-box;
  display: flex;
}
.video-card-ad-small .vcd .cover[data-v-eba1a9e8] {
  margin-right: 10px;
  border-radius: 6px;
  width: 141px;
  height: 80px;
  background: #c9ccd0;
   flex: 0 0 auto;
}
.video-card-ad-small .vcd .cover .b-img[data-v-eba1a9e8],
.video-card-ad-small .vcd .cover img[data-v-eba1a9e8] {
  width: 100%;
  height: 100%;
  border-radius: 6px !important;
  overflow: hidden;
}
.video-card-ad-small .vcd .info[data-v-eba1a9e8] {
  font-size: 13px;
  flex: 1;
}
.video-card-ad-small .vcd .info .title[data-v-eba1a9e8] {
  display: block;
  font-size: 15px;
  line-height: 19px;
  margin-bottom: 6px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-card-ad-small .vcd .info .title[data-v-eba1a9e8] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-card-ad-small .vcd .info .desc[data-v-eba1a9e8] {
  color: #9499a0;
   letter-spacing: 0;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
  line-height: 16px;
  display: flex;
  align-items: center;
}
.video-card-ad-small .vcd .info .desc .ad-icon[data-v-eba1a9e8] {
  width: 32px;
  height: 16px;
  margin-right: 6px;
  vertical-align: top;
}
.video-card-ad-small .vcd .info .desc .creative-ad-icon[data-v-eba1a9e8] {
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-right: 2px;
}
.video-card-ad-small[data-v-eba1a9e8]:hover {
  color: #00aeec;
 }
@media (min-width: 1681px) {
  .is-in-large-ab .video-card-ad-small .vcd[data-v-eba1a9e8] {
    margin: 20px 0;
  }
  .is-in-large-ab .video-card-ad-small .vcd .cover[data-v-eba1a9e8] {
    width: 189px;
    height: 107px;
  }
  .is-in-large-ab .video-card-ad-small .vcd .info[data-v-eba1a9e8] {
    font-size: 14px;
    line-height: 16px;
  }
  .is-in-large-ab .video-card-ad-small .vcd .info .title[data-v-eba1a9e8] {
    font-size: 16px;
    line-height: 20px;
  }
}

.video-page-card-small {
  margin-bottom: 12px;
}
.video-page-card-small .card-box {
  display: flex;
}
.video-page-card-small .card-box .pic-box {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 6px;
  background: #c9ccd0;
   flex: 0 0 auto;
}
.video-page-card-small .card-box .pic-box .bpx-docker-major {
  width: 142px;
  height: 80px;
}
.video-page-card-small .card-box .pic-box .pic {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  height: 100%;
}
.video-page-card-small .card-box .pic-box .pic.loaded:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 28px;
  width: 100%;
  padding: 6px 8px;
  box-sizing: border-box;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border-radius: 0 0 6px 6px;
}
.video-page-card-small .card-box .pic-box .pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
.video-page-card-small .card-box .pic-box .pic img[src=""] {
  opacity: 0;
}
.video-page-card-small .card-box .pic-box .pic .mask-video {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.07);
  transition: opacity 0.3s;
  pointer-events: none;
}
.video-page-card-small .card-box .pic-box .pic .duration {
  position: absolute;
  bottom: 6px;
  right: 6px;
    height: 20px;
  line-height: 20px;
  transition: opacity 0.3s;
  z-index: 5;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  padding: 0 4px;
}
.video-page-card-small .card-box .pic-box .pic .duration-by-hover {
  opacity: 0;
  position: absolute;
  bottom: 12px;
  right: 8px;
    line-height: 15px;
  transition: opacity 0.5s;
  z-index: 5;
  font-size: 13px;
}
.video-page-card-small .card-box .pic-box .framepreview-box {
  height: calc(100% + 10px);
  position: absolute;
  width: 100%;
  bottom: 0;
}
.video-page-card-small .card-box .pic-box .framepreview-box .video-awesome-img {
  display: block;
  position: absolute;
  top: 10px;
  width: 141px;
  height: 80px;
}
.video-page-card-small .card-box .pic-box .van-framepreview .van-fpbar-box {
  top: calc(100% - 10px);
}
.video-page-card-small .card-box .pic-box .watch-later-video {
  transition: opacity 0.3s;
  opacity: 0;
  border-radius: 6px;
  top: 6px;
  right: 6px;
}
.video-page-card-small .card-box .pic-box .watch-later-video .wl-tips {
  top: 32px;
}
.video-page-card-small .card-box .pic-box:hover .watch-later-video {
  transition-delay: 0.3s;
  opacity: 1;
}
.video-page-card-small .card-box .pic-box:hover .mask-video {
  opacity: 1;
}
.video-page-card-small .card-box .pic-box:hover .duration {
  opacity: 0;
}
.video-page-card-small .card-box .pic-box:hover .duration-by-hover {
  opacity: 1;
}
.video-page-card-small .card-box .info {
  margin-left: 10px;
  flex: 1;
  font-size: 13px;
  line-height: 15px;
  width: calc(100%-151px);
}
.video-page-card-small .card-box .info .title {
  color: #18191c;
   display: block;
  font-size: 15px;
  line-height: 19px;
  transition: color 0.3s;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-page-card-small .card-box .info .title {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-page-card-small .card-box .info .title:hover {
  color: #00aeec;
 }
.video-page-card-small .card-box .info .upname {
  cursor: pointer;
  margin: 2px 0;
  height: 20px;
}
.video-page-card-small .card-box .info .upname a {
  color: #9499a0;
   transition: color 0.3s;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.video-page-card-small .card-box .info .upname a svg {
  margin-right: 4px;
  fill: #9499a0;
   transition: fill 0.3s;
  transform: translateY(0.5px);
}
.video-page-card-small .card-box .info .upname a .name {
  width: calc(100%-24px);
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.video-page-card-small .card-box .info .upname a:hover {
  color: #00aeec;
 }
.video-page-card-small .card-box .info .upname a:hover svg {
  fill: #00aeec;
 }
.video-page-card-small .card-box .info .playinfo {
  color: #9499a0;
   display: inline-flex;
  align-items: center;
}
.video-page-card-small .card-box .info .playinfo .play,
.video-page-card-small .card-box .info .playinfo .dm {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.video-page-card-small .card-box .info .playinfo .dm {
  margin-left: 8px;
}
.video-page-card-small .card-box .info .pre-mask {
  height: 15px;
  background: #c9ccd0;
   border-radius: 6px;
}
@media (min-width: 1681px) {
  .is-in-large-ab .video-page-card-small {
    margin-bottom: 16px;
  }
  .is-in-large-ab .video-page-card-small .card-box .pic-box {
    width: 189px;
    height: 107px;
  }
  .is-in-large-ab
    .video-page-card-small
    .card-box
    .pic-box
    .framepreview-box
    .video-awesome-img {
    width: 189px;
    height: 107px;
  }
  .is-in-large-ab .video-page-card-small .card-box .pic-box .pic .duration {
    font-size: 14px;
    line-height: 21px;
    height: 21px;
  }
  .is-in-large-ab .video-page-card-small .card-box .pic-box .bpx-docker-major {
    width: 190px;
    height: 107px;
  }
  .is-in-large-ab .video-page-card-small .card-box .info {
    font-size: 14px;
    line-height: 16px;
    width: calc(100%-199px);
  }
  .is-in-large-ab .video-page-card-small .card-box .info .title {
    font-size: 16px;
    line-height: 20px;
  }
  .is-in-large-ab .video-page-card-small .card-box .info .upname {
    margin: 4px 0;
  }
}
.video-awesome-img .b-img {
  width: 100%;
  height: 100%;
}
.video-awesome-img .b-img.sleepy {
  background: #c9ccd0;
 }
.video-awesome-img .b-img.sleepy::after {
  content: unset;
}

.video-page-special-card-small[data-v-819a3252] {
  margin-bottom: 12px;
}
.video-page-special-card-small .card-box[data-v-819a3252] {
  display: flex;
}
.video-page-special-card-small .card-box .pic-box[data-v-819a3252] {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 6px;
  background: #c9ccd0;
 }
.video-page-special-card-small .card-box .pic-box .pic[data-v-819a3252] {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  height: 100%;
}
.video-page-special-card-small .card-box .pic-box .pic .b-img[data-v-819a3252] {
  width: 100%;
  height: 100%;
}
.video-page-special-card-small .card-box .pic-box .pic img[data-v-819a3252] {
  width: 100%;
  height: 100%;
}
.video-page-special-card-small
  .card-box
  .pic-box
  .pic
  img[src=""][data-v-819a3252] {
  opacity: 0;
}
.video-page-special-card-small .card-box .info[data-v-819a3252] {
  margin-left: 10px;
  flex: 1;
}
.video-page-special-card-small .card-box .info .title[data-v-819a3252] {
  color: #18191c;
   cursor: pointer;
  line-height: 19px;
  font-size: 15px;
  margin-bottom: 6px;
  transition: color 0.3s;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-page-special-card-small .card-box .info .title[data-v-819a3252] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-page-special-card-small .card-box .info .title[data-v-819a3252]:hover {
  color: #00aeec;
 }
.video-page-special-card-small .card-box .info .desc[data-v-819a3252] {
  display: inline-block;
  line-height: 15px;
  width: 100%;
  color: #9499a0;
   font-size: 13px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.video-page-special-card-small .card-box .info .pre-mask[data-v-819a3252] {
  background: #c9ccd0;
   border-radius: 6px;
  height: 16px;
}
@media (min-width: 1681px) {
  .is-in-large-ab .video-page-special-card-small[data-v-819a3252] {
    margin-bottom: 16px;
  }
  .is-in-large-ab
    .video-page-special-card-small
    .card-box
    .pic-box[data-v-819a3252] {
    width: 189px;
    height: 107px;
  }
  .is-in-large-ab
    .video-page-special-card-small
    .card-box
    .info
    .title[data-v-819a3252] {
    font-size: 16px;
    line-height: 20px;
  }
  .is-in-large-ab
    .video-page-special-card-small
    .card-box
    .info
    .desc[data-v-819a3252] {
    font-size: 14px;
    line-height: 16px;
  }
}

.video-page-operator-card-small {
  margin-bottom: 12px;
}
.video-page-operator-card-small .card-box {
  display: flex;
}
.video-page-operator-card-small .card-box .pic-box {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 6px;
  background: #c9ccd0;
   flex: 0 0 auto;
}
.video-page-operator-card-small .card-box .pic-box .bpx-docker-major {
  width: 142px;
  height: 80px;
}
.video-page-operator-card-small .card-box .pic-box .pic {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  height: 100%;
}
.video-page-operator-card-small .card-box .pic-box .pic.loaded:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 28px;
  width: 100%;
  padding: 6px 8px;
  box-sizing: border-box;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border-radius: 0 0 6px 6px;
}
.video-page-operator-card-small .card-box .pic-box .pic .b-img {
  width: 100%;
  height: 100%;
}
.video-page-operator-card-small .card-box .pic-box .pic .b-img.sleepy {
  background: #c9ccd0;
 }
.video-page-operator-card-small .card-box .pic-box .pic .b-img.sleepy::after {
  content: unset;
}
.video-page-operator-card-small .card-box .pic-box .pic img {
  width: 100%;
  height: 100%;
}
.video-page-operator-card-small .card-box .pic-box .pic img[src=""] {
  opacity: 0;
}
.video-page-operator-card-small .card-box .pic-box .pic .mask-video {
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.07);
  transition: opacity 0.3s;
  pointer-events: none;
}
.video-page-operator-card-small .card-box .pic-box .pic .duration {
  position: absolute;
  bottom: 6px;
  right: 6px;
    height: 20px;
  line-height: 20px;
  transition: opacity 0.3s;
  z-index: 5;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  padding: 0 4px;
}
.video-page-operator-card-small .card-box .pic-box .pic .framepreview-box {
  height: calc(100% + 10px);
  position: absolute;
  width: 100%;
  bottom: 0;
}
.video-page-operator-card-small
  .card-box
  .pic-box
  .pic
  .framepreview-box
  .box-a {
  display: block;
  position: absolute;
  top: 10px;
}
.video-page-operator-card-small
  .card-box
  .pic-box
  .pic
  .van-framepreview
  .van-fpbar-box {
  top: calc(100% - 10px);
}
.video-page-operator-card-small .card-box .pic-box .watch-later-video {
  transition: opacity 0.3s;
  opacity: 0;
  border-radius: 6px;
  top: 6px;
  right: 6px;
}
.video-page-operator-card-small .card-box .pic-box .watch-later-video .wl-tips {
  top: 32px;
}
.video-page-operator-card-small .card-box .pic-box:hover .watch-later-video {
  transition-delay: 0.3s;
  opacity: 1;
}
.video-page-operator-card-small .card-box .pic-box:hover .mask-video {
  opacity: 1;
}
.video-page-operator-card-small .card-box .pic-box:hover .duration {
  opacity: 0;
}
.video-page-operator-card-small .card-box .info {
  margin-left: 10px;
  flex: 1;
  font-size: 13px;
  line-height: 15px;
  width: calc(100%-151px);
}
.video-page-operator-card-small .card-box .info .title {
  color: #18191c;
   line-height: 19px;
  font-size: 15px;
  transition: color 0.3s;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-page-operator-card-small .card-box .info .title {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-page-operator-card-small .card-box .info .title:hover {
  color: #00aeec;
 }
.video-page-operator-card-small .card-box .info .upname {
  cursor: pointer;
  margin: 2px 0;
  color: #9499a0;
   height: 20px;
}
.video-page-operator-card-small .card-box .info .upname a {
  width: 100%;
  height: 100%;
  color: #9499a0;
   transition: color 0.3s;
  display: inline-flex;
  align-items: center;
}
.video-page-operator-card-small .card-box .info .upname a svg {
  margin-right: 4px;
  fill: #9499a0;
   transition: fill 0.3s;
  transform: translateY(0.5px);
}
.video-page-operator-card-small .card-box .info .upname a .name {
  width: calc(100%-24px);
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.video-page-operator-card-small .card-box .info .upname a:hover {
  color: #00aeec;
 }
.video-page-operator-card-small .card-box .info .upname a:hover svg {
  fill: #00aeec;
 }
.video-page-operator-card-small .card-box .info .playinfo {
  color: #9499a0;
   display: inline-flex;
  align-items: center;
}
.video-page-operator-card-small .card-box .info .playinfo .play,
.video-page-operator-card-small .card-box .info .playinfo .dm {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.video-page-operator-card-small .card-box .info .playinfo .dm {
  margin-left: 8px;
}
.video-page-operator-card-small .card-box .info .pre-mask {
  height: 16px;
  background: #c9ccd0;
   border-radius: 6px;
}
@media (min-width: 1681px) {
  .is-in-large-ab .video-page-operator-card-small {
    margin-bottom: 16px;
  }
  .is-in-large-ab .video-page-operator-card-small .card-box .pic-box {
    width: 189px;
    height: 107px;
  }
  .is-in-large-ab
    .video-page-operator-card-small
    .card-box
    .pic-box
    .pic
    .duration {
    font-size: 14px;
    line-height: 21px;
    height: 21px;
  }
  .is-in-large-ab
    .video-page-operator-card-small
    .card-box
    .pic-box
    .bpx-docker-major {
    width: 190px;
    height: 107px;
  }
  .is-in-large-ab .video-page-operator-card-small .card-box .info {
    font-size: 14px;
    line-height: 16px;
    width: calc(100%-199px);
  }
  .is-in-large-ab .video-page-operator-card-small .card-box .info .title {
    font-size: 16px;
    line-height: 20px;
  }
  .is-in-large-ab .video-page-operator-card-small .card-box .info .upname {
    margin: 4px 0;
  }
}

.video-page-game-card-small[data-v-7daad372] {
  margin-bottom: 20px;
}
.video-page-game-card-small .pre-mask[data-v-7daad372] {
  background: #c9ccd0;
   border-radius: 2px;
  border: none;
}
.video-page-game-card-small .pre-mask i[data-v-7daad372] {
  display: none;
}
.video-page-game-card-small .card-box[data-v-7daad372] {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.video-page-game-card-small .card-box img[src=""][data-v-7daad372],
.video-page-game-card-small .card-box img[data-v-7daad372]:not([src]) {
  opacity: 0;
}
.video-page-game-card-small .card-box .cover[data-v-7daad372] {
  margin-right: 10px;
  width: 107px;
  height: 107px;
  border-radius: 14px;
  background: #c9ccd0;
 }
.video-page-game-card-small .card-box .cover .game-cover[data-v-7daad372] {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  object-fit: cover;
}
.video-page-game-card-small
  .card-box
  .cover
  .game-cover.b-img[data-v-7daad372] {
  background: inherit;
}
.video-page-game-card-small
  .card-box
  .cover
  .game-cover.b-img.sleepy[data-v-7daad372]::after {
  content: unset;
}
.video-page-game-card-small .card-box .cover .game-cover img[data-v-7daad372] {
  object-fit: inherit;
}
.video-page-game-card-small .card-box .cover-mask[data-v-7daad372] {
  background-color: #c9ccd0;
   border-radius: 14px;
}
.video-page-game-card-small .card-box .info[data-v-7daad372] {
  color: #9499a0;
   flex: 1;
  margin-right: 10px;
  min-width: 30px;
}
.video-page-game-card-small .card-box .info .van-rate[data-v-7daad372] {
  display: inline-block;
  margin-top: -3px;
}
.video-page-game-card-small .card-box .info .title[data-v-7daad372] {
  font-size: 16px;
  color: #18191c;
   line-height: 20px;
  margin-bottom: 6px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-page-game-card-small .card-box .info .title[data-v-7daad372] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-page-game-card-small .card-box .info .game-tags[data-v-7daad372] {
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 16px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.video-page-game-card-small .card-box .info .notice-text[data-v-7daad372] {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding-left: 34px;
  line-height: 16px;
}
.video-page-game-card-small
  .card-box
  .info
  .notice-text[data-v-7daad372]::before {
  display: block;
  position: absolute;
  content: "\516C\544A";
  font-size: 12px;
  color: #e58900;
   width: 34px;
  height: 19px;
  line-height: 19px;
  text-align: center;
  border-radius: 2px;
  background-color: #fff6e4;
  left: -2px;
  top: -2px;
  transform: scale(0.83);
  transform-origin: center center;
}
.video-page-game-card-small .card-box .info .order[data-v-7daad372] {
  display: flex;
  align-items: center;
  margin: 0 0 6px;
  font-size: 14px;
  line-height: 16px;
}
.video-page-game-card-small .card-box .info .order .van-rate[data-v-7daad372] {
  font-size: 13.5px !important;
}
.video-page-game-card-small
  .card-box
  .info
  .order
  .grade-text[data-v-7daad372] {
  color: #ffa726;
  line-height: 16px;
  margin: 0 10px 0 2px;
}
.video-page-game-card-small
  .card-box
  .info
  .order
  .book-count[data-v-7daad372] {
  line-height: 15px;
  max-width: 156px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.video-page-game-card-small .card-box .btn[data-v-7daad372] {
  min-width: 60px;
}
.video-page-game-card-small .card-box .btn .enter-button[data-v-7daad372] {
  display: inline-block;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 6px;
  background-color: #00aeec;
   font-size: 14px;
    box-sizing: border-box;
}
.video-page-game-card-small .card-box .btn--left[data-v-7daad372] {
  margin-top: 12px;
}
@media (max-width: 1681px) {
  .is-in-large-ab .video-page-game-card-small[data-v-7daad372] {
    margin-bottom: 18px;
  }
  .is-in-large-ab
    .video-page-game-card-small
    .card-box
    .cover[data-v-7daad372] {
    width: 80px;
    height: 80px;
  }
  .is-in-large-ab
    .video-page-game-card-small
    .card-box
    .title[data-v-7daad372] {
    margin-bottom: 5px;
    line-height: 19px;
    font-size: 15px;
  }
  .is-in-large-ab
    .video-page-game-card-small
    .card-box
    .info
    .game-tags[data-v-7daad372],
  .is-in-large-ab
    .video-page-game-card-small
    .card-box
    .info
    .order[data-v-7daad372] {
    margin-bottom: 5px;
    line-height: 15px;
    font-size: 13px;
  }
  .is-in-large-ab
    .video-page-game-card-small
    .card-box
    .info
    .van-rate[data-v-7daad372] {
    font-size: 12.5px !important;
    margin-top: -2px;
  }
  .is-in-large-ab
    .video-page-game-card-small
    .card-box
    .info
    .grade-text[data-v-7daad372] {
    line-height: 15px;
    margin: 0 8px 0 2px;
  }
  .is-in-large-ab
    .video-page-game-card-small
    .card-box
    .info
    .notice-text[data-v-7daad372] {
    font-size: 13px;
    line-height: 15px;
  }
  .is-in-large-ab
    .video-page-game-card-small
    .card-box
    .info
    .book-count[data-v-7daad372] {
    max-width: 125px;
  }
}

.video-page-game-card-small .van-rate .van-rate-star {
  width: 16px;
  margin-right: 2px;
}
@media (max-width: 1681px) {
  .is-in-large-ab .video-page-game-card-small .van-rate .van-rate-star {
    width: 15px;
    margin-right: 2px;
  }
}

.recommend-list-v1[data-v-39ee0c7c] {
  margin-top: 18px;
}
.recommend-list-v1 .rec-title[data-v-39ee0c7c] {
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
   display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  line-height: 20px;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .recommend-list-v1 .rec-title[data-v-39ee0c7c] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.recommend-list-v1 .rec-title .next-button[data-v-39ee0c7c] {
  color: #9499a0;
   font-size: 13px;
  line-height: 16px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .recommend-list-v1 .rec-title .next-button[data-v-39ee0c7c] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.recommend-list-v1 .rec-title .next-button .switch-button[data-v-39ee0c7c] {
  background: #9499a0;
   border: 1px solid #9499a0;
 }
.recommend-list-v1 .rec-title .next-button .switch-button.on[data-v-39ee0c7c] {
  background: #00aeec;
   border: 1px solid #00aeec;
 }
.recommend-list-v1 .split-line[data-v-39ee0c7c] {
  width: 100%;
  height: 1px;
  background: #e3e5e7;
 }
.recommend-list-v1 .rec-list[data-v-39ee0c7c] {
  margin-top: 18px;
}
.recommend-list-v1 .rec-footer[data-v-39ee0c7c] {
  height: 42px;
  background: #f1f2f3;
   color: #18191c;
   margin-top: 10px;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  border-radius: 6px;
  user-select: none;
  transition: background-color 0.3s;
}
.recommend-list-v1 .rec-footer[data-v-39ee0c7c]:hover {
  background: #e3e5e7;
 }
@media (min-width: 1681px) {
  .recommend-list-v1[data-v-39ee0c7c] {
    margin-top: 20px;
  }
  .recommend-list-v1 .rec-title[data-v-39ee0c7c] {
    font-size: 16px;
  }
  .recommend-list-v1 .rec-title .next-button[data-v-39ee0c7c] {
    font-size: 14px;
  }
  .recommend-list-v1 .rec-list[data-v-39ee0c7c] {
    margin-top: 20px;
  }
}

.pop-live-small-mode[data-v-53132405] {
  margin: 18px 0;
}
.pop-live-small-mode:hover .pl__mask[data-v-53132405] {
  visibility: visible;
  opacity: 1;
}
.pop-live-small-mode:hover .pl__mask .pl__live[data-v-53132405] {
  visibility: visible;
  opacity: 1;
}
.pop-live-small-mode .pl__head[data-v-53132405] {
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 12px;
  color: #18191c;
   font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .pop-live-small-mode .pl__head[data-v-53132405] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.pop-live-small-mode .pl__card[data-v-53132405] {
  position: relative;
  overflow: hidden;
}
.pop-live-small-mode .pl__card__inner[data-v-53132405] {
  border-radius: 6px;
}
.pop-live-small-mode .pl__cover[data-v-53132405] {
  display: inline-block;
  width: 100%;
  height: 197px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #c9ccd0;
   background-image: none;
}
.pop-live-small-mode .pl__info[data-v-53132405] {
  display: flex;
  align-items: center;
  margin-top: 6px;
}
.pop-live-small-mode .pl__face[data-v-53132405] {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  overflow: hidden;
  flex: none;
  margin-right: 10px;
  background-color: #c9ccd0;
   background-image: none;
}
.pop-live-small-mode .pl__title[data-v-53132405] {
  font-size: 15px;
  line-height: 19px;
  color: #18191c;
   margin-bottom: 6px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .pop-live-small-mode .pl__title[data-v-53132405] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.pop-live-small-mode .pl__user[data-v-53132405] {
  height: 20px;
  line-height: 16px;
  color: #9499a0;
   fill: #9499a0;
   font-size: 13px;
  transition: all 0.3s;
}
.pop-live-small-mode .pl__name__text[data-v-53132405] {
  max-width: 180px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.pop-live-small-mode .pl__online[data-v-53132405] {
  margin-left: 6px;
}
.pop-live-small-mode .pl__online .icon[data-v-53132405] {
  width: 16px;
  margin-right: 4px;
  transform: translateY(-1px);
}
.pop-live-small-mode .pl__online span[data-v-53132405] {
  transform: translateY(-1.5px);
}
.pop-live-small-mode .pl__icon[data-v-53132405] {
  margin-right: 4px;
  transform: translateY(0.5px);
}
.pop-live-small-mode .pl__user__block[data-v-53132405] {
  display: inline-flex;
  align-items: center;
}
.pop-live-small-mode .pl__mask[data-v-53132405] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 197px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px 4px 0 0;
  opacity: 0;
  z-index: 1;
  visibility: hidden;
  transition: 0.2s all linear;
}
.pop-live-small-mode .pl__mask .pl__live[data-v-53132405] {
  transition: 0.3s all linear;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  margin-left: -35px;
  top: 50%;
  margin-top: -12px;
  z-index: 2;
  width: 70px;
  height: 24px;
  text-align: center;
}
.pop-live-small-mode .pl__mask .pl__icon--live[data-v-53132405] {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #ff6699;
   margin-right: 5px;
  vertical-align: middle;
}
.pop-live-small-mode .pl__mask .pl__live__text[data-v-53132405] {
  position: static;
  background-color: transparent;
  display: inline-block;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  font-size: 20px;
  line-height: 24px;
  vertical-align: middle;
  }
@media (-webkit-max-device-pixel-ratio: 1) {
  .pop-live-small-mode .pl__mask .pl__live__text[data-v-53132405] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
@media (min-width: 1681px) {
  .pop-live-small-mode[data-v-53132405] {
    margin: 20px 0;
  }
  .pop-live-small-mode .pl__head[data-v-53132405] {
    font-size: 16px;
  }
  .pop-live-small-mode .pl__cover[data-v-53132405],
  .pop-live-small-mode .pl__mask[data-v-53132405] {
    height: 231px;
  }
  .pop-live-small-mode .pl__title[data-v-53132405] {
    font-size: 16px;
    line-height: 20px;
  }
  .pop-live-small-mode .pl__user[data-v-53132405] {
    font-size: 14px;
  }
}

.pr-video-guide[data-v-67cd73d2] {
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  border-radius: 8px;
  background: #f1f2f3;
   display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding: 0 16px;
}
.pr-video-guide .pr-header-icon[data-v-67cd73d2] {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 28px;
  background-color: #ffecf1;
  margin-right: 8px;
  margin-top: 1px;
}
.pr-video-guide .pr-header-icon[data-v-67cd73d2]::after {
  content: "";
  width: 8px;
  height: 8px;
  background-color: #fb6699;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.pr-video-guide .playing-icon[data-v-67cd73d2] {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  animation: breath-animation-data-v-67cd73d2 2.5s 1.5s infinite;
}
.pr-video-guide .pr-header-title[data-v-67cd73d2] {
  color: #ff6699;
   font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
.pr-video-guide__status[data-v-67cd73d2] {
  display: flex;
  align-items: center;
}
.pr-video-guide__btn[data-v-67cd73d2] {
  font-weight: 500;
  font-size: 12px;
  color: #61666d;
   display: flex;
  align-items: center;
}
.pr-video-guide__btn--text[data-v-67cd73d2] {
  margin-right: 2px;
}
@keyframes breath-animation-data-v-67cd73d2 {
  0% {
    transform: scale(1);
    background-color: #fb6699;
  }
  100% {
    transform: scale(2.5);
    background-color: #ffecf1;
  }
}

.high-level-video-cover[data-v-0893b835] {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 8px #f1f2f3;
 }
.high-level-video-cover .cover-top[data-v-0893b835] {
  flex: 1;
  position: relative;
}
.high-level-video-cover .cover-top .video-cover[data-v-0893b835] {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.high-level-video-cover .cover-top .tips-toast[data-v-0893b835] {
  position: absolute;
  left: 12px;
  bottom: 12px;
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(33, 33, 33, 0.9);
    border-radius: 6px;
}
.high-level-video-cover .cover-top .tips-toast .tips[data-v-0893b835] {
  display: flex;
  flex-direction: column;
}
.high-level-video-cover
  .cover-top
  .tips-toast
  .tips
  .belongs-to[data-v-0893b835] {
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
}
.high-level-video-cover .cover-top .tips-toast .tips .level[data-v-0893b835] {
  margin-top: 3px;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
}
.high-level-video-cover .cover-top .tips-toast .charge-btn[data-v-0893b835] {
  cursor: pointer;
  margin-left: 47px;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0px 11px 0px 6px;
  border-radius: 4px;
  background-color: #ff6699;
 }
.high-level-video-cover
  .cover-top
  .tips-toast
  .charge-btn
  .elec-icon[data-v-0893b835] {
  margin-right: 2px;
  width: 18px;
  height: 18px;
}
.high-level-video-cover
  .cover-top
  .tips-toast
  .charge-btn
  .elec-text[data-v-0893b835] {
  font-weight: 500;
  font-size: 14px;
}
.high-level-video-cover .cover-bottom[data-v-0893b835] {
  flex: 0 0 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  background: #ffffff;
 }
.high-level-video-cover .cover-bottom .cover-bottom-left[data-v-0893b835] {
  font-size: 13px;
  color: #61666d;
   margin-right: 24px;
}
.high-level-video-cover .cover-bottom .cover-bottom-right[data-v-0893b835] {
  flex: 1;
  display: flex;
  align-items: center;
}
.high-level-video-cover
  .cover-bottom
  .cover-bottom-right
  .danmuku-switch[data-v-0893b835],
.high-level-video-cover
  .cover-bottom
  .cover-bottom-right
  .danmuku-settings[data-v-0893b835] {
  cursor: not-allowed;
  width: 24px;
  height: 24px;
  margin-right: 18px;
}
.high-level-video-cover
  .cover-bottom
  .cover-bottom-right
  .danmuku-input[data-v-0893b835] {
  flex: 1;
  cursor: not-allowed;
  height: 32px;
  background: #f1f2f3;
   border-radius: 6px;
  font-size: 13px;
  color: #9499a0;
   display: flex;
  align-items: center;
}
.high-level-video-cover
  .cover-bottom
  .cover-bottom-right
  .danmuku-input
  .danmuku-font-size[data-v-0893b835] {
  width: 24px;
  height: 24px;
}
.high-level-video-cover
  .cover-bottom
  .cover-bottom-right
  .danmuku-input
  .danmuku-input-area[data-v-0893b835] {
  flex: 1;
  padding: 0 6px;
}
.high-level-video-cover
  .cover-bottom
  .cover-bottom-right
  .danmuku-input
  .danmuku-hint[data-v-0893b835] {
  display: flex;
  align-items: center;
}
.high-level-video-cover
  .cover-bottom
  .cover-bottom-right
  .danmuku-input
  .danmuku-hint
  .danmuku-hint-icon[data-v-0893b835] {
  width: 16px;
  height: 16px;
}
.high-level-video-cover
  .cover-bottom
  .cover-bottom-right
  .danmuku-input
  .danmuku-send-btn[data-v-0893b835] {
  width: 62px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 6px 6px 0;
  background: #00aeec;
   opacity: 0.5;
  }

.archive-appeal-cover[data-v-66eb4ce2] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(45px);
}
.archive-appeal-cover .archive-appeal-cover-inner[data-v-66eb4ce2] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.archive-appeal-cover
  .archive-appeal-cover-inner
  .archive-appeal-icon[data-v-66eb4ce2] {
  width: 32px;
  height: 32px;
  margin-bottom: 10px;
  color: #c9ccd0;
}
.archive-appeal-cover
  .archive-appeal-cover-inner
  .archive-appeal-tips[data-v-66eb4ce2] {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  line-height: 28px;
  color: #c9ccd0;
}
.archive-appeal-cover
  .archive-appeal-cover-inner
  .archive-appeal-ops[data-v-66eb4ce2] {
  margin-top: 26px;
  display: flex;
  align-items: center;
}
.archive-appeal-cover
  .archive-appeal-cover-inner
  .archive-appeal-ops
  button[data-v-66eb4ce2] {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 32px;
  font-size: 14px;
  border-radius: 6px;
  background-color: transparent;
  border: none;
}
.archive-appeal-cover
  .archive-appeal-cover-inner
  .archive-appeal-ops
  .display-archive[data-v-66eb4ce2] {
  color: #ff6699;
  border: 1px solid #ff6699;
}
.archive-appeal-cover
  .archive-appeal-cover-inner
  .archive-appeal-ops
  .play-next[data-v-66eb4ce2] {
  margin-left: 32px;
    background-color: #ff6699;
}
@media (min-width: 1681px) {
  .archive-appeal-cover
    .archive-appeal-cover-inner
    .archive-appeal-icon[data-v-66eb4ce2] {
    width: 40px;
    height: 40px;
    margin-bottom: 16px;
  }
  .archive-appeal-cover
    .archive-appeal-cover-inner
    .archive-appeal-tips[data-v-66eb4ce2] {
    font-size: 20px;
    line-height: 34px;
  }
  .archive-appeal-cover
    .archive-appeal-cover-inner
    .archive-appeal-ops[data-v-66eb4ce2] {
    margin-top: 31px;
  }
  .archive-appeal-cover
    .archive-appeal-cover-inner
    .archive-appeal-ops
    button[data-v-66eb4ce2] {
    width: 190px;
    height: 40px;
    font-size: 16px;
  }
  .archive-appeal-cover
    .archive-appeal-cover-inner
    .archive-appeal-ops
    .play-next[data-v-66eb4ce2] {
    margin-left: 40px;
  }
}

#bilibili-player embed {
  width: 100%;
  height: 100%;
}
#bilibili-player .player {
  height: 100%;
}
#bilibili-player-placeholder {
  position: absolute;
  display: flex;
  z-index: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px #f1f2f3;
 }
#bilibili-player-placeholder-top {
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: #000;
}
#bilibili-player-placeholder-bottom {
  position: relative;
  display: flex;
  height: 46px;
  align-items: center;
  padding: 0 12px;
  background: #ffffff;
 }
#bilibili-player-placeholder-bottom-left,
#bilibili-player-placeholder-bottom-right {
  background-color: rgba(0, 0, 0, 0.04);
}
#bilibili-player-placeholder-bottom-left {
  margin-right: 10px;
  width: 176px;
  height: 22px;
}
#bilibili-player-placeholder-bottom-right {
  height: 22px;
  flex-grow: 1;
}
@media screen and (min-width: 1681px) {
  #bilibili-player-placeholder #bilibili-player-placeholder-bottom {
    height: 56px;
  }
}
.hide-player #bilibili-player *,
.hide-player #bilibili-player::after,
.hide-player #bilibili-player::before {
  display: none !important;
}
.player-wrap {
  position: relative;
}
.unpaid-cover {
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: #000;
}
.unpaid-cover .cover-video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: blur(100px);
}
.unpaid-cover .cover-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 22px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}
.not-charge-high-level-cover {
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.archive-appeal-success-cover {
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.ad-floor-exp {
  position: relative;
}
.ad-floor-exp .lazy-img {
  background: transparent;
}
.ad-floor-exp .lazy-img img {
  border-radius: 6px;
}
.ad-floor-exp .ad-floor-cover {
  width: 100%;
  height: 100%;
}
.ad-floor-exp .gg-pic {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 38px;
  height: 22px;
}

.slide-ad-exp[data-v-650d46ab]:not(:empty) {
  min-height: 1px;
}
.slide-ad-exp .slide-gg[data-v-650d46ab] {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 6px;
  background: #c9ccd0;
   margin-bottom: 18px;
}
.slide-ad-exp .slide-gg .gg-pic[data-v-650d46ab] {
  position: absolute;
  width: 38px;
  height: 22px;
  left: 3px;
  bottom: 3px;
}
.slide-ad-exp .slide-gg .item-box[data-v-650d46ab] {
  z-index: 1;
  /* fix van-slide mountedä¹‹å‰å®½é«˜ä¸º0çš„é—®é¢˜ */
  width: 100% !important;
  height: 100% !important;
}
.slide-ad-exp .slide-gg .item-box .item .link[data-v-650d46ab] {
  display: inline-block;
  height: 100%;
  width: 100%;
}
.slide-ad-exp .slide-gg .item-box .item .link img[data-v-650d46ab] {
  width: 100%;
  height: 100%;
}
.slide-ad-exp .slide-gg .slide-trig[data-v-650d46ab] {
  position: absolute;
  right: 10px;
  bottom: 6px;
  z-index: 2;
}
.slide-ad-exp .slide-gg .slide-trig span[data-v-650d46ab] {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffffff;
   margin-right: 6px;
  cursor: pointer;
}
.slide-ad-exp .slide-gg .slide-trig span.on[data-v-650d46ab] {
  background: #00aeec;
 }
.slide-ad-exp .slide-gg .close-btn[data-v-650d46ab] {
  z-index: 2;
  position: absolute;
  top: 4px;
  right: 4px;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  background: #ffffff;
   border-radius: 2px;
  cursor: pointer;
}
.slide-ad-exp .slide-gg .close-btn i[data-v-650d46ab] {
  color: #c9ccd0;
   font-size: 12px;
}
@media (min-width: 1681px) {
  .is-in-large-ab .slide-ad-exp .slide-gg[data-v-650d46ab] {
    height: 235px;
    margin-bottom: 20px;
  }
}

.fixed-sidenav-storage[data-v-5d529e3e] {
  position: fixed;
  right: 6px;
  bottom: 50px;
  z-index: 6;
}
.fixed-sidenav-storage .fixed-sidenav-storage-item[data-v-5d529e3e] {
  cursor: pointer;
  background: #ffffff;
   border: 1px solid #e3e5e7;
   border-radius: 8px;
  box-sizing: border-box;
  padding: 6px;
  margin-bottom: 6px;
  color: #18191c;
   line-height: 14px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
}
.fixed-sidenav-storage .fixed-sidenav-storage-item[data-v-5d529e3e]:hover {
  background: #e3e5e7;
 }
.fixed-sidenav-storage
  .fixed-sidenav-storage-item
  .fixed-sidenav-storage-item-icon[data-v-5d529e3e] {
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
}
.fixed-sidenav-storage
  .fixed-sidenav-storage-item.back-to-top
  .back-to-top-icon[data-v-5d529e3e] {
  width: 12px;
  height: 12px;
}
.fixed-sidenav-storage
  .fixed-sidenav-storage-item.mini-player-window.on[data-v-5d529e3e] {
  color: #00aeec;
 }
.fixed-sidenav-storage .back-to-top[data-v-5d529e3e] {
  visibility: hidden;
}
.fixed-sidenav-storage .back-to-top.visible[data-v-5d529e3e] {
  visibility: visible;
}
.fixed-sidenav-storage .storage-box[data-v-5d529e3e] {
  position: relative;
  overflow: hidden;
  min-height: 46px;
  margin-bottom: 6px;
  border-radius: 6px;
}
.fixed-sidenav-storage
  .storage-box
  .storable-items.storableitems-enter-active[data-v-5d529e3e],
.fixed-sidenav-storage
  .storage-box
  .storable-items.storableitems-leave-active[data-v-5d529e3e] {
  transition: all 0.3s;
}
.fixed-sidenav-storage
  .storage-box
  .storable-items.storableitems-enter[data-v-5d529e3e],
.fixed-sidenav-storage
  .storage-box
  .storable-items.storableitems-leave-to[data-v-5d529e3e] {
  max-height: 46px;
}
.fixed-sidenav-storage
  .storage-box
  .storable-items.storableitems-enter-to[data-v-5d529e3e],
.fixed-sidenav-storage
  .storage-box
  .storable-items.storableitems-leave[data-v-5d529e3e] {
  max-height: 200px;
}
.fixed-sidenav-storage .storage-box .storage-three-dots[data-v-5d529e3e] {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 0;
}
.fixed-sidenav-storage
  .storage-box
  .storage-three-dots.threedots-enter-active[data-v-5d529e3e],
.fixed-sidenav-storage
  .storage-box
  .storage-three-dots.threedots-leave-active[data-v-5d529e3e] {
  transition: all 0.3s;
}
.fixed-sidenav-storage
  .storage-box
  .storage-three-dots.threedots-enter[data-v-5d529e3e],
.fixed-sidenav-storage
  .storage-box
  .storage-three-dots.threedots-leave-to[data-v-5d529e3e] {
  opacity: 0;
}
.fixed-sidenav-storage
  .storage-box
  .storage-three-dots.threedots-enter-to[data-v-5d529e3e],
.fixed-sidenav-storage
  .storage-box
  .storage-three-dots.threedots-leave[data-v-5d529e3e] {
  opacity: 1;
}

.wechat-open-guide[data-v-11295944] {
  width: 210px;
  height: 127px;
  position: fixed;
  right: 36px;
  top: 10px;
  z-index: 9999999;
  background: linear-gradient(91.07deg, #42cdff 2.68%, #00aeec 89.54%);
  border-radius: 8px;
    padding: 16px 0 16px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
}
.wechat-open-guide .close-icon[data-v-11295944] {
  cursor: pointer;
  width: 12px;
  height: 12px;
  position: absolute;
  right: 8px;
  top: 8px;
}
.wechat-open-guide .tv-icon[data-v-11295944] {
  width: 45px;
  position: absolute;
  left: -5px;
  top: 22px;
}
.wechat-open-guide .chrome-icon[data-v-11295944] {
  width: 28px;
  margin-bottom: 11px;
}
.wechat-open-guide .browser-icon[data-v-11295944] {
  width: 28px;
  margin-bottom: 11px;
  margin-right: 5px;
}
.wechat-open-guide .icons[data-v-11295944] {
  display: flex;
}
.wechat-open-guide .guide-title[data-v-11295944] {
  text-align: center;
  width: 180px;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 5px;
}
.wechat-open-guide--win[data-v-11295944] {
  left: 145px;
}

.q1080p-exp {
  position: relative;
  width: 400px;
  height: 348px;
  border-radius: 4px;
  background-color: #ffffff;
   padding-top: 36px;
}
.q1080p-exp .close {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: #61666d;
 }
.q1080p-exp .close:hover {
  color: #00aeec;
 }
.q1080p-exp .title {
  text-align: center;
  font-size: 20px;
  height: 26px;
  color: #18191c;
   line-height: 1;
}
.q1080p-exp .sub-title {
  margin-top: 8px;
  color: #61666d;
   font-size: 12px;
  line-height: 1.3;
  text-align: center;
}
.q1080p-exp .pic {
  margin: 20px auto;
  width: 180px;
  height: 180px;
  overflow: hidden;
}
.q1080p-exp .btns {
  text-align: center;
  font-size: 14px;
}
.q1080p-exp .btns .btn-getvip {
  display: inline-block;
  vertical-align: top;
  width: 124px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #ffb000;
    line-height: 40px;
  border-radius: 4px;
  margin: 0 10px;
}

.interact-dialog-exp {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.interact-dialog-exp .bg {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.interact-dialog-exp .con {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  margin-left: -138px;
  margin-top: -138px;
  padding: 16px;
  box-sizing: border-box;
  z-index: 99999;
  background: #ffffff;
   box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-align: center;
  width: 274px;
  height: 277px;
}
.interact-dialog-exp .pic {
  width: 242px;
  height: 198px;
}
.interact-dialog-exp .btn {
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  line-height: 32px;
  height: 32px;
  border-radius: 2px;
  width: 156px;
  text-align: center;
  font-size: 14px;
    background: #00aeec;
   margin-top: 10px;
}
.interact-dialog-exp .btn:hover {
  background: #00b8f6;
}
.interact-dialog__text {
  margin-top: -77px;
  color: #18191c;
   font-weight: 500;
  font-size: 12px;
}
.interact-dialog__text--title {
  font-size: 18px;
}
.interact-dialog__text--desc {
  font-size: 12px;
  transform: scale(0.85);
}

.follow-oldfan-entry[data-v-c9d2b34c] {
  padding: 8px;
  margin-bottom: 18px;
  background-color: #f1f2f3;
   border-radius: 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
}
.follow-oldfan-entry[data-v-c9d2b34c]:hover {
  background-color: #e3e5e7;
 }
.follow-oldfan-entry .entry-main[data-v-c9d2b34c] {
  flex-grow: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.follow-oldfan-entry .entry-main .oldfan-icon[data-v-c9d2b34c] {
  width: 40px;
  height: 40px;
}
.follow-oldfan-entry .entry-main .oldfan-info[data-v-c9d2b34c] {
  margin-left: 8px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.follow-oldfan-entry .entry-main .oldfan-info .info-txt[data-v-c9d2b34c] {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.follow-oldfan-entry
  .entry-main
  .oldfan-info
  .info-txt
  .txt-at-top[data-v-c9d2b34c] {
  line-height: 20px;
  font-size: 14px;
  color: #18191c;
 }
.follow-oldfan-entry
  .entry-main
  .oldfan-info
  .info-txt
  .txt-at-bottom[data-v-c9d2b34c] {
  line-height: 17px;
  font-size: 12px;
  color: #9499a0;
 }
.follow-oldfan-entry
  .entry-main
  .oldfan-info
  .rightarrow-icon[data-v-c9d2b34c] {
  width: 16px;
  height: 16px;
}
.follow-oldfan-entry .split-line[data-v-c9d2b34c] {
  width: 1px;
  height: 16px;
  background-color: #e3e5e7;
   margin: 0 8px;
}
.follow-oldfan-entry .close-btn[data-v-c9d2b34c] {
  display: flex;
  width: 16px;
  height: 16px;
  padding-right: 6px;
  cursor: pointer;
}
.follow-oldfan-entry .close-btn .close-icon[data-v-c9d2b34c] {
  width: 100%;
  height: 100%;
}

.app-v1 p[title^="ã€Œ"],
.app-v1 p[title^="ã€Ž"],
.app-v1 p[title^="ã€"],
.app-v1 h1[title^="ã€Œ"],
.app-v1 h1[title^="ã€Ž"],
.app-v1 h1[title^="ã€"],
.app-v1 h3[title^="ã€Œ"],
.app-v1 h3[title^="ã€Ž"],
.app-v1 h3[title^="ã€"] {
  text-indent: -0.6em;
}
.mac .app-v1 p[title^="ï½ž"],
.mac .app-v1 h3[title^="ï½ž"] {
  text-indent: -0.1em;
}
.mac .app-v1 p[title^="ã€Š"],
.mac .app-v1 h3[title^="ã€Š"] {
  text-indent: -0.4em;
}
.mac .app-v1 .roll-btn {
  transform: translateZ(0);
}
.win .app-v1 p[title^="â€œ"],
.win .app-v1 h3[title^="â€œ"] {
  text-indent: -0.1em;
}
.win .app-v1 p[title^="ï½ž"],
.win .app-v1 h3[title^="ï½ž"] {
  text-indent: -0.25em;
}
.win .app-v1 p[title^="ã€Š"],
.win .app-v1 h3[title^="ã€Š"] {
  text-indent: -0.5em;
}
.harmony-font {
  background-color: #f1f2f3;
   font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .harmony-font {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.app-v1 {
  max-width: 2560px;
  margin: 0 auto;
  background-color: #ffffff;
 }
.bili-mini-mask {
  z-index: 999999 !important;
}

#bilibili-player embed[data-v-66bd1e0b] {
  width: 100%;
  height: 100%;
}
#bilibili-player .player[data-v-66bd1e0b] {
  height: 100%;
}
.video-container-v1[data-v-66bd1e0b] {
  max-width: 2540px;
  min-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  position: relative;
}
.video-container-v1 .left-container[data-v-66bd1e0b] {
  position: relative;
}
.video-container-v1 .left-container.scroll-sticky[data-v-66bd1e0b] {
  position: sticky;
  height: fit-content;
  z-index: 1;
}
.video-container-v1 .right-container[data-v-66bd1e0b] {
  width: 350px;
  flex: none;
  margin-left: 30px;
  position: relative;
  pointer-events: none;
}
.video-container-v1 .right-container #right-bottom-banner[data-v-66bd1e0b] {
  height: 175px;
}
.video-container-v1 .right-container .right-container-inner[data-v-66bd1e0b] {
  padding-bottom: 250px;
}
.video-container-v1
  .right-container
  .right-container-inner.scroll-sticky[data-v-66bd1e0b] {
  position: sticky;
}
.video-container-v1 .right-container .right-container-inner *[data-v-66bd1e0b] {
  pointer-events: all;
}
.video-container-v1 .danmaku-box[data-v-66bd1e0b] {
  margin-bottom: 18px;
  position: relative;
}
.video-container-v1 .danmaku-box .danmaku-wrap[data-v-66bd1e0b] {
  min-height: 44px;
  background: #f1f2f3;
   border-radius: 6px;
}
.video-container-v1 .danmaku-box .danmaku-wrap.hidden[data-v-66bd1e0b] {
  height: 0;
  min-height: 0;
  overflow: hidden;
}
.video-container-v1 .danmaku-box.outslide-player[data-v-66bd1e0b] {
  margin-bottom: 0;
}
.video-container-v1
  .danmaku-box.outslide-player
  .danmaku-wrap[data-v-66bd1e0b] {
  display: none;
}
.video-container-v1 #comment[data-v-66bd1e0b] {
  margin-top: 24px;
  z-index: 0;
  position: relative;
}
.video-container-v1 #live_recommand_report[data-v-66bd1e0b] {
  padding-left: 0;
}
.video-container-v1 #bannerAd[data-v-66bd1e0b] {
  font-size: 0;
  border-radius: 6px;
  margin: 24px 0;
}
.video-container-v1 #bannerAd img[data-v-66bd1e0b] {
  border-radius: 6px;
}
.video-container-v1 #right-bottom-banner[data-v-66bd1e0b] {
  margin-top: 18px;
  border-radius: 6px;
  width: 100%;
  height: 160px;
  overflow: hidden;
}
.video-container-v1 #right-bottom-banner span[data-v-66bd1e0b] {
  position: absolute;
  bottom: 3px;
  font-size: 15px;
  left: 10px;
    text-shadow: 1px 1px 3px #000;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-container-v1 #right-bottom-banner span[data-v-66bd1e0b] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
@media (min-width: 1681px) {
  .video-container-v1 .right-container[data-v-66bd1e0b] {
    width: 411px;
  }
  .video-container-v1 .right-container #right-bottom-banner[data-v-66bd1e0b] {
    height: 205px;
  }
  .video-container-v1
    .right-container
    #right-bottom-banner
    span[data-v-66bd1e0b] {
    font-size: 16px;
  }
  .video-container-v1 .danmaku-box[data-v-66bd1e0b] {
    margin-bottom: 20px;
  }
  .video-container-v1 #right-bottom-banner[data-v-66bd1e0b] {
    margin-top: 20px;
    height: 180px;
  }
  .video-container-v1 #right-bottom-banner span[data-v-66bd1e0b] {
    font-size: 18px;
    line-height: 24px;
  }
}
body.player-mode-blackmask #heimu[data-v-66bd1e0b] {
  z-index: 1002;
}
#comment .bb-comment .no-login .baffle[data-v-66bd1e0b] {
  z-index: 10;
}
.ie-browser-tips[data-v-66bd1e0b] {
  top: 54px;
}

iframe[name="dynmic-share"] {
  height: 500px;
}
.share-video-panel .share-pos {
  display: flex;
  justify-content: space-between;
}
.share-video-panel .share-pos .box-left {
  width: 300px;
}
.share-video-panel .share-pos .box-left .share-panel {
  display: flex;
  flex-wrap: wrap;
}
.share-video-panel .share-pos .box-left .share-panel .share-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
.share-video-panel .share-pos .box-left .share-panel .share-btn > input {
  height: 0;
  border: none;
}
.share-video-panel .share-pos .box-left .share-panel .share-btn-icon {
  width: 40px;
  height: 40px;
}
.share-video-panel .share-pos .box-left .share-panel .share-btn-text {
  line-height: 20px;
}
.share-video-panel .share-pos .box-left .share-link {
  height: 28px;
  background-color: #f6f7f8;
   border-radius: 6px;
  line-height: 28px;
  display: inline-flex;
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  justify-content: space-between;
  margin-top: 7px;
}
.share-video-panel .share-pos .box-left .share-link input {
  border: none;
  background-color: #f6f7f8;
   flex: 1 1 auto;
  color: #61666d;
 }
.share-video-panel .share-pos .box-left .share-link .btn {
  color: #00aeec;
   margin-left: 10px;
  cursor: pointer;
}
.share-video-panel .share-pos .box-right {
  text-align: center;
  padding: 0 0 0 20px;
  border-left: 1px solid #e3e5e7;
   margin-left: 10px;
}
.share-video-panel .share-pos .box-right .qrcode-box {
  width: 145px;
  height: 145px;
  background: #ffffff;
  border: 1px solid #e3e5e7;
   box-sizing: border-box;
  border-radius: 6px;
  padding: 4px;
}
.share-video-panel .share-pos .box-right .qrcode-box .van-qrcode {
  width: 135px;
  height: 135px;
}
.share-video-panel .share-pos .box-right p {
  font-size: 15px;
  line-height: 21px;
  margin-top: 4px;
}

.video-toolbar-pr {
  border-bottom: 1px solid #e3e5e7;
   padding-top: 16px;
  padding-bottom: 12px;
  height: 28px;
  line-height: 28px;
}
.video-toolbar-pr .toolbar-left {
  float: left;
  position: relative;
  user-select: none;
  font-size: 13px;
  color: #61666d;
   font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
  height: 100%;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-toolbar-pr .toolbar-left {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-toolbar-pr .toolbar-left .toolbar-item {
  width: 92px;
  position: relative;
}
.video-toolbar-pr
  .toolbar-left
  .toolbar-item
  .toolbar-loading__popover--content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-toolbar-pr .toolbar-left .long-click-animation {
  position: absolute;
  width: 96px;
  height: 96px;
  left: -32px;
  top: -94px;
  z-index: 100;
  transform-origin: bottom center;
}
.video-toolbar-pr .toolbar-left .svga-fireworks {
  position: absolute;
  top: -106px;
  left: -46px;
}
.video-toolbar-pr .toolbar-left .long-click-animation.shake {
  animation: shake 1500ms ease-in-out infinite;
}
.video-toolbar-pr .toolbar-left .long-click-finish-animation {
  position: absolute;
  width: 96px;
  height: 96px;
  left: -32px;
  top: -100px;
  z-index: 100000;
  transform-origin: bottom center;
}
.video-toolbar-pr .toolbar-left .long-click-finish-text {
  display: inline-block;
  position: absolute;
  left: 76px;
  top: -56px;
  padding: 11px 12px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  background: #000000;
  line-height: 22px;
  z-index: 101;
}
.video-toolbar-pr .toolbar-left .long-click-finish-text::after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 10px solid #000000;
  border-bottom: 7px solid transparent;
  left: -8px;
  top: 16px;
}
.video-toolbar-pr .toolbar-left > span {
  width: 92px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  position: relative;
  display: inline-flex;
  align-items: center;
  fill: #61666d;
 }
.video-toolbar-pr .toolbar-left > span .icon {
  width: 28px;
  height: 28px;
  margin-right: 8px;
  flex: none;
}
.video-toolbar-pr .toolbar-left > span .info-text {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
}
.video-toolbar-pr .toolbar-left .svga-top {
  left: -45px;
  top: -125px;
}
.video-toolbar-pr .toolbar-left .svga-center {
  left: -32px;
  top: -32px;
}
.video-toolbar-pr .toolbar-left .share {
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  height: 100%;
}
.video-toolbar-pr .toolbar-left-playing > span:hover,
.video-toolbar-pr .toolbar-left-playing > span.on {
  color: #00aeec;
   fill: #00aeec;
 }
.video-toolbar-pr .toolbar-left-playing > span.like .icon.shake {
  animation: shake 1500ms ease-in-out infinite;
}
.video-toolbar-pr .toolbar-left-disabled .like,
.video-toolbar-pr .toolbar-left-disabled .coin,
.video-toolbar-pr .toolbar-left-disabled .collect {
  color: #b0b3b6;
  fill: #b0b3b6;
  cursor: not-allowed;
}
.video-toolbar-pr:after {
  display: block;
  content: "";
  clear: both;
}
@media (min-width: 1681px) {
  .video-toolbar-pr {
    padding-top: 18px;
    height: 36px;
    line-height: 36px;
  }
  .video-toolbar-pr .toolbar-left {
    font-size: 14px;
  }
  .video-toolbar-pr .toolbar-left .toolbar-item {
    width: 100px;
  }
  .video-toolbar-pr .toolbar-left > span {
    width: 100px;
    line-height: 36px;
    margin-right: 18px;
  }
  .video-toolbar-pr .toolbar-left > span .icon {
    width: 36px;
    height: 36px;
  }
  .video-toolbar-pr .toolbar-left .svga-center {
    left: -28px;
    top: -28px;
  }
}
@keyframes shake {
  2% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg);
  }
  4% {
    transform: translate(-0.5px, 2.5px) rotate(0.5deg);
  }
  6% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  8% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }
  10% {
    transform: translate(1.5px, 2.5px) rotate(0.5deg);
  }
  12% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(1.5px, 1.5px) rotate(-0.5deg);
  }
  16% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  18% {
    transform: translate(1.5px, 0.5px) rotate(0.5deg);
  }
  20% {
    transform: translate(1.5px, -1.5px) rotate(-0.5deg);
  }
  22% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  24% {
    transform: translate(-0.5px, -1.5px) rotate(0.5deg);
  }
  26% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  28% {
    transform: translate(2.5px, 1.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  32% {
    transform: translate(1.5px, 2.5px) rotate(1.5deg);
  }
  34% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
  }
  38% {
    transform: translate(1.5px, -1.5px) rotate(1.5deg);
  }
  40% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  42% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  44% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(-0.5px, 2.5px) rotate(-0.5deg);
  }
  48% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  50% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  52% {
    transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }
  54% {
    transform: translate(-0.5px, -1.5px) rotate(-0.5deg);
  }
  56% {
    transform: translate(1.5px, -1.5px) rotate(1.5deg);
  }
  58% {
    transform: translate(0.5px, 1.5px) rotate(1.5deg);
  }
  60% {
    transform: translate(-0.5px, -0.5px) rotate(1.5deg);
  }
  62% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  64% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(2.5px, 0.5px) rotate(1.5deg);
  }
  68% {
    transform: translate(1.5px, -0.5px) rotate(1.5deg);
  }
  70% {
    transform: translate(0.5px, 2.5px) rotate(1.5deg);
  }
  72% {
    transform: translate(1.5px, -0.5px) rotate(0.5deg);
  }
  74% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  78% {
    transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
  }
  80% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
  }
  82% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg);
  }
  86% {
    transform: translate(-1.5px, 1.5px) rotate(0.5deg);
  }
  88% {
    transform: translate(-0.5px, -0.5px) rotate(1.5deg);
  }
  90% {
    transform: translate(-1.5px, -1.5px) rotate(1.5deg);
  }
  92% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }
  94% {
    transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }
  96% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  98% {
    transform: translate(1.5px, 0.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }
}
.van-popover.van-share {
  position: absolute;
  padding: 30px;
  z-index: 30;
  color: #18191c;
   background: #ffffff;
   border: 1px solid #f1f2f3;
   box-sizing: border-box;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  font-size: 12px;
}
.toolbar-loading__popover {
  background: #ffffff;
  border: 1px solid #f1f2f3;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
   padding: 12px 20px;
}

.video-info-pr {
  height: 108px;
  box-sizing: border-box;
  padding-top: 24px;
}
.video-info-pr .video-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.video-info-pr .video-title {
  display: inline-block;
  font-size: 20px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
   line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-info-pr .video-title {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-info-pr .pr-header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 8px;
}
.video-info-pr .pr-header .pr-header-icon {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 28px;
  background-color: #ffecf1;
  margin-right: 4px;
  margin-top: 1px;
}
.video-info-pr .pr-header .pr-header-icon::after {
  content: "";
  width: 8px;
  height: 8px;
  background-color: #fb6699;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.video-info-pr .pr-header .playing-icon {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  animation: breath-animation 2.5s 1.5s infinite;
}
.video-info-pr .pr-header .pr-header-title {
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  font-size: 18px;
  line-height: 26px;
  color: #fb7299;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-info-pr .pr-header .pr-header-title {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.video-info-pr .video-data {
  font-size: 13px;
  color: #9499a0;
   text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 24px;
  line-height: 18px;
}
.video-info-pr .video-data > span {
  display: inline-block;
}
.video-info-pr .video-data .interactive {
  height: 24px;
  line-height: 24px;
  font-size: 13px;
  color: #61666d;
   display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}
.video-info-pr .video-data .interactive svg {
  fill: #9499a0;
   margin-right: 2px;
}
.video-info-pr .video-data .view,
.video-info-pr .video-data .dm,
.video-info-pr .video-data .pudate {
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
}
.video-info-pr .video-data .view svg,
.video-info-pr .video-data .dm svg,
.video-info-pr .video-data .pudate svg {
  margin-right: 4px;
  width: 20px;
  height: 20px;
}
.video-info-pr .video-data .copyright i {
  font-size: 16px;
  margin-right: 2px;
  color: #fd676f;
  width: 16px;
  transform: translateY(1px);
}
.video-info-pr .video-data .argue {
  font-size: 13px;
  margin-right: 12px;
  border-radius: 2px;
  color: #e58900;
   padding: 0px 6px;
  height: 24px;
  line-height: 24px;
  position: relative;
}
.video-info-pr .video-data .argue:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px;
   opacity: 0.2;
}
.video-info-pr .video-data .argue i {
  color: #e58900;
   font-size: 16px;
  width: 14px;
  margin-right: 4px;
  transform: translateY(1px);
}
.video-info-pr .video-data .honor {
  float: left;
  font-size: 13px;
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  padding: 0px 6px;
  margin-right: 12px;
  position: relative;
}
.video-info-pr .video-data .honor-icon {
  margin-right: 4px;
}
.video-info-pr .video-data .honor-icon svg {
  vertical-align: text-bottom;
}
.video-info-pr .video-data .honor-arrow {
  margin-left: 4px;
}
.video-info-pr .video-data .honor:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  opacity: 0.1;
}
.video-info-pr .video-data .honor.honor-rank {
  color: #ff6699;
   fill: #ff6699;
 }
.video-info-pr .video-data .honor.honor-rank:before {
  background-color: #ff6699;
 }
.video-info-pr .video-data .honor.honor-history {
  }
.video-info-pr .video-data .honor.honor-history:before {
 }
.video-info-pr .video-data .honor.honor-weekly {
  }
.video-info-pr .video-data .honor.honor-weekly:before {
 }
.video-info-pr .video-data .item:last-child {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
@media (min-width: 1681px) {
  .video-info-pr {
    padding-top: 22px;
  }
  .video-info-pr .video-title {
    font-size: 22px;
    line-height: 29px;
  }
  .video-info-pr .video-data {
    font-size: 14px;
    line-height: 20px;
  }
}
@keyframes breath-animation {
  0% {
    transform: scale(1);
    background-color: #fb6699;
  }
  100% {
    transform: scale(2.5);
    background-color: #ffecf1;
  }
}

.pr-video-card {
  margin-bottom: 12px;
}
.pr-video-card .card-box {
  display: flex;
}
.pr-video-card .card-box .pic-box {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 6px;
  background: #c9ccd0;
   flex: 0 0 auto;
}
.pr-video-card .card-box .pic-box .pic {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  height: 100%;
}
.pr-video-card .card-box .pic-box .pic.loaded:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 28px;
  width: 100%;
  padding: 6px 8px;
  box-sizing: border-box;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border-radius: 0 0 6px 6px;
}
.pr-video-card .card-box .pic-box .pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 0;
}
.pr-video-card .card-box .pic-box .pic img[src=""] {
  opacity: 0;
}
.pr-video-card .card-box .pic-box .pic .mask-video {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.07);
  transition: opacity 0.3s;
  pointer-events: none;
}
.pr-video-card .card-box .pic-box .pic .duration {
  position: absolute;
  bottom: 6px;
  right: 8px;
    line-height: 15px;
  transition: opacity 0.3s;
  z-index: 5;
  font-size: 13px;
}
.pr-video-card .card-box .pic-box .watch-later-video {
  transition: opacity 0.3s;
  opacity: 0;
  border-radius: 6px;
  top: 6px;
  right: 6px;
}
.pr-video-card .card-box .pic-box .watch-later-video .wl-tips {
  top: 32px;
}
.pr-video-card .card-box .pic-box:hover .watch-later-video {
  transition-delay: 0.3s;
  opacity: 1;
}
.pr-video-card .card-box .pic-box:hover .mask-video {
  opacity: 1;
}
.pr-video-card .card-box .pic-box:hover .duration {
  opacity: 0;
}
.pr-video-card .card-box .framepreview-box {
  height: calc(100% + 10px);
  position: absolute;
  width: 100%;
  bottom: 0;
}
.pr-video-card .card-box .van-framepreview .van-fpbar-box {
  top: calc(100% - 10px);
}
.pr-video-card .card-box .info {
  margin-left: 10px;
  flex: 1;
  font-size: 13px;
  line-height: 15px;
  width: calc(100%-151px);
}
.pr-video-card .card-box .info .title {
  color: #18191c;
   display: block;
  font-size: 15px;
  line-height: 19px;
  transition: color 0.3s;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .pr-video-card .card-box .info .title {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.pr-video-card .card-box .info .title:hover {
  color: #00aeec;
 }
.pr-video-card .card-box .info .upname {
  cursor: pointer;
  margin: 2px 0;
  height: 20px;
}
.pr-video-card .card-box .info .upname a {
  color: #9499a0;
   transition: color 0.3s;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.pr-video-card .card-box .info .upname a svg {
  margin-right: 4px;
  fill: #9499a0;
   transition: fill 0.3s;
  transform: translateY(0.5px);
}
.pr-video-card .card-box .info .upname a .name {
  width: calc(100%-24px);
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.pr-video-card .card-box .info .upname a:hover {
  color: #00aeec;
 }
.pr-video-card .card-box .info .upname a:hover svg {
  fill: #00aeec;
 }
.pr-video-card .card-box .info .playinfo {
  color: #9499a0;
   display: inline-flex;
  align-items: center;
}
.pr-video-card .card-box .info .playinfo .play,
.pr-video-card .card-box .info .playinfo .dm {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.pr-video-card .card-box .info .playinfo .dm {
  margin-left: 8px;
}
.pr-video-card .card-box .info .pre-mask {
  height: 15px;
  background: #c9ccd0;
   border-radius: 6px;
}
.pr-video-card .video-link {
  cursor: pointer;
}
@media (min-width: 1681px) {
  .pr-video-card {
    margin-bottom: 16px;
  }
  .pr-video-card .card-box .pic-box {
    width: 189px;
    height: 107px;
  }
  .pr-video-card .card-box .pic-box .pic .duration {
    font-size: 14px;
    line-height: 16px;
  }
  .pr-video-card .card-box .info {
    font-size: 14px;
    line-height: 16px;
    width: calc(100%-199px);
  }
  .pr-video-card .card-box .info .title {
    font-size: 16px;
    line-height: 20px;
  }
  .pr-video-card .card-box .info .upname {
    margin: 4px 0;
  }
}

.pr-video-operator-card {
  margin-bottom: 12px;
}
.pr-video-operator-card .card-box {
  display: flex;
}
.pr-video-operator-card .card-box .pic-box {
  position: relative;
  width: 141px;
  height: 80px;
  border-radius: 6px;
  background: #c9ccd0;
   flex: 0 0 auto;
}
.pr-video-operator-card .card-box .pic-box .pic {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  height: 100%;
}
.pr-video-operator-card .card-box .pic-box .pic.loaded:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 28px;
  width: 100%;
  padding: 6px 8px;
  box-sizing: border-box;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border-radius: 0 0 6px 6px;
}
.pr-video-operator-card .card-box .pic-box .pic img {
  width: 100%;
  height: 100%;
}
.pr-video-operator-card .card-box .pic-box .pic img[src=""] {
  opacity: 0;
}
.pr-video-operator-card .card-box .pic-box .pic .mask-video {
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.07);
  transition: opacity 0.3s;
  pointer-events: none;
}
.pr-video-operator-card .card-box .pic-box .pic .duration {
  position: absolute;
  bottom: 6px;
  right: 8px;
    line-height: 15px;
  transition: opacity 0.3s;
  z-index: 5;
  font-size: 13px;
}
.pr-video-operator-card .card-box .pic-box .pic .framepreview-box {
  height: calc(100% + 10px);
  position: absolute;
  width: 100%;
  bottom: 0;
}
.pr-video-operator-card
  .card-box
  .pic-box
  .pic
  .van-framepreview
  .van-fpbar-box {
  top: calc(100% - 10px);
}
.pr-video-operator-card .card-box .pic-box .watch-later-video {
  transition: opacity 0.3s;
  opacity: 0;
  border-radius: 6px;
  top: 6px;
  right: 6px;
}
.pr-video-operator-card .card-box .pic-box .watch-later-video .wl-tips {
  top: 32px;
}
.pr-video-operator-card .card-box .pic-box:hover .watch-later-video {
  transition-delay: 0.3s;
  opacity: 1;
}
.pr-video-operator-card .card-box .pic-box:hover .mask-video {
  opacity: 1;
}
.pr-video-operator-card .card-box .pic-box:hover .duration {
  opacity: 0;
}
.pr-video-operator-card .card-box .info {
  margin-left: 10px;
  flex: 1;
  font-size: 13px;
  line-height: 15px;
  width: calc(100%-151px);
}
.pr-video-operator-card .card-box .info .title {
  color: #18191c;
   line-height: 19px;
  font-size: 15px;
  transition: color 0.3s;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .pr-video-operator-card .card-box .info .title {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.pr-video-operator-card .card-box .info .title:hover {
  color: #00aeec;
 }
.pr-video-operator-card .card-box .info .upname {
  cursor: pointer;
  margin: 2px 0;
  color: #9499a0;
   height: 20px;
}
.pr-video-operator-card .card-box .info .upname a {
  width: 100%;
  height: 100%;
  color: #9499a0;
   transition: color 0.3s;
  display: inline-flex;
  align-items: center;
}
.pr-video-operator-card .card-box .info .upname a svg {
  margin-right: 4px;
  fill: #9499a0;
   transition: fill 0.3s;
  transform: translateY(0.5px);
}
.pr-video-operator-card .card-box .info .upname a .name {
  width: calc(100%-24px);
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.pr-video-operator-card .card-box .info .upname a:hover {
  color: #00aeec;
 }
.pr-video-operator-card .card-box .info .upname a:hover svg {
  fill: #00aeec;
 }
.pr-video-operator-card .card-box .info .playinfo {
  color: #9499a0;
   display: inline-flex;
  align-items: center;
}
.pr-video-operator-card .card-box .info .playinfo .play,
.pr-video-operator-card .card-box .info .playinfo .dm {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.pr-video-operator-card .card-box .info .playinfo .dm {
  margin-left: 8px;
}
.pr-video-operator-card .card-box .info .pre-mask {
  height: 16px;
  background: #c9ccd0;
   border-radius: 6px;
}
@media (min-width: 1681px) {
  .pr-video-operator-card {
    margin-bottom: 16px;
  }
  .pr-video-operator-card .card-box .pic-box {
    width: 189px;
    height: 107px;
  }
  .pr-video-operator-card .card-box .pic-box .pic .duration {
    font-size: 14px;
    line-height: 16px;
  }
  .pr-video-operator-card .card-box .info {
    font-size: 14px;
    line-height: 16px;
    width: calc(100%-199px);
  }
  .pr-video-operator-card .card-box .info .title {
    font-size: 16px;
    line-height: 20px;
  }
  .pr-video-operator-card .card-box .info .upname {
    margin: 4px 0;
  }
}
.pr-video-operator-card .video-link {
  cursor: pointer;
}

.recommend-list-pr[data-v-7abf92b4] {
  margin-top: 18px;
}
.recommend-list-pr .rec-title[data-v-7abf92b4] {
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
   display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  line-height: 20px;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .recommend-list-pr .rec-title[data-v-7abf92b4] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.recommend-list-pr .rec-title .next-button[data-v-7abf92b4] {
  color: #9499a0;
   font-size: 13px;
  line-height: 16px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .recommend-list-pr .rec-title .next-button[data-v-7abf92b4] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.recommend-list-pr .rec-title .next-button .switch-button[data-v-7abf92b4] {
  background: #9499a0;
   border: 1px solid #9499a0;
 }
.recommend-list-pr .rec-title .next-button .switch-button.on[data-v-7abf92b4] {
  background: #00aeec;
   border: 1px solid #00aeec;
 }
.recommend-list-pr .split-line[data-v-7abf92b4] {
  width: 100%;
  height: 1px;
  background: #e3e5e7;
 }
.recommend-list-pr .rec-list[data-v-7abf92b4] {
  margin-top: 18px;
}
.recommend-list-pr .rec-footer[data-v-7abf92b4] {
  height: 42px;
  background: #f1f2f3;
   color: #18191c;
   margin-top: 10px;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  border-radius: 6px;
}
@media (min-width: 1681px) {
  .recommend-list-pr[data-v-7abf92b4] {
    margin-top: 20px;
  }
  .recommend-list-pr .rec-title[data-v-7abf92b4] {
    font-size: 16px;
  }
  .recommend-list-pr .rec-title .next-button[data-v-7abf92b4] {
    font-size: 14px;
  }
  .recommend-list-pr .rec-list[data-v-7abf92b4] {
    margin-top: 20px;
  }
}

.counting-panel {
  position: absolute;
  z-index: 10;
  bottom: 75px;
  left: 30px;
  box-sizing: border-box;
  width: 416px;
  background-color: #ffffff;
   box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 14px;
  display: flex;
  align-items: center;
}
.counting-panel .counting-panel__cover {
  background-color: #c4c4c4;
  width: 172px;
  height: 97px;
  border-radius: 8px;
  display: inline-block;
  margin-right: 20px;
}
.counting-panel .counting-panel__cover .counting-panel__img {
  width: 172px;
  height: 97px;
  border-radius: 8px;
}
.counting-panel .counting-panel__info {
  cursor: default;
  display: flex;
  flex-direction: column;
}
.counting-panel .counting-panel__info .info-title {
  padding-top: 2px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.counting-panel .counting-panel__info .info-title .info-title__text {
  color: #61666d;
   font-size: 14px;
  line-height: 20px;
  margin-right: 8px;
  font-weight: 500;
}
.counting-panel .counting-panel__info .info-title .info-title__counting {
  font-family: Avenir;
  font-weight: 800;
  font-size: 20px;
  line-height: 22px;
  color: #18191c;
 }
.counting-panel .counting-panel__info .info-time {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #61666d;
   margin-bottom: 18px;
  display: flex;
  align-items: center;
}
.counting-panel .counting-panel__info .info-time .question-block {
  display: flex;
  align-items: center;
  width: 40px;
  height: 16px;
  margin-left: 4px;
}
.counting-panel .counting-panel__info .info-time .question-icon {
  display: inline-block;
  width: 12px;
}
.counting-panel .counting-panel__info .info-btn {
  width: 188px;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  border: 1px solid transparent;
}
.counting-panel .counting-panel__info .default-info-btn {
  border: 1px solid #00aeec;
   background: #00aeec;
   color: #fff;
  transition: 0.3s;
}
.counting-panel .counting-panel__info .default-info-btn:hover {
  background: #00b5e5;
  border: 1px solid #00b5e5;
}
.counting-panel .counting-panel__info .plain-info-btn {
  border: 1px solid #00aeec;
   background-color: #ffffff;
   color: #00aeec;
 }
@media (min-width: 1316px) {
  .counting-panel {
    padding: 16px;
    width: 494px;
  }
  .counting-panel .counting-panel__cover {
    width: 198px;
    height: 112px;
    margin-right: 24px;
  }
  .counting-panel .counting-panel__cover .counting-panel__img {
    width: 198px;
    height: 112px;
  }
  .counting-panel .counting-panel__info .info-title .info-title__text {
    line-height: 25px;
    font-size: 18px;
    margin-right: 10px;
  }
  .counting-panel .counting-panel__info .info-title .info-title__counting {
    font-size: 24px;
    line-height: 26px;
  }
  .counting-panel .counting-panel__info .info-time {
    font-size: 16px;
    line-height: 22px;
  }
  .counting-panel .counting-panel__info .info-time .question-block {
    width: 45px;
    height: 18px;
  }
  .counting-panel .counting-panel__info .info-time .question-icon {
    width: 14px;
  }
  .counting-panel .counting-panel__info .info-btn {
    width: 230px;
    height: 34px;
    font-size: 16px;
  }
}
.premiere-info-time__popover {
  padding: 20px;
  width: 240px;
  font-size: 13px;
  line-height: 20px;
  color: #18191c;
   border-radius: 8px;
  margin: -100px 0 0 0;
}

#bilibili-player embed {
  width: 100%;
  height: 100%;
}
#bilibili-player .player {
  height: 100%;
}

.pr-loading-cover {
  background-color: #333;
  top: 0;
  width: 100%;
  position: absolute;
  height: 100%;
  border-radius: 2px;
}
.pr-loading-cover__bar {
  cursor: not-allowed;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 12px;
  height: 46px;
  background-color: #fff;
  box-shadow: 0 0 8px #f1f2f3;
   display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.pr-loading-cover__bar .left-icon {
  padding: 0 0 0 9px;
}
.pr-loading-cover__bar .left-icon > img {
  width: 24px;
  margin: 0 9px;
}
.pr-loading-cover__bar .inner-bar {
  position: relative;
  width: calc(100% - 102px);
  height: 32px;
  border-radius: 8px;
  line-height: 18px;
  background: #f1f2f3;
  padding: 0 12px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
}
.pr-loading-cover__bar .inner-bar .inner-bar__text {
  font-size: 12px;
  line-height: 20px;
  color: #9499a0;
}
.pr-loading-cover__bar .inner-bar .inner-bar__btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 62px;
  height: 32px;
  background: #e3e5e7;
  font-size: 13px;
  line-height: 20px;
  color: #9499a0;
  border-radius: 0 8px 8px 0;
}
.pr-loading-cover__cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 46px);
}
.pr-loading-cover__mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 46px);
}
.loading-cover__popover {
  border: 1px solid #f1f2f3;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  line-height: 20px;
  color: #18191c;
   margin-top: -10px;
}

.pr-video-container {
  position: relative;
  background-color: #000;
}
.pr-video-container .mock {
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 1000;
}

.pr-chat-inner {
  position: relative;
  height: 100%;
}
.pr-chat-inner .pr-chat-header {
  padding: 12px;
  font-size: 14px;
  background-color: #f6f7f8;
  border: 1px solid #e3e5e7;
   border-radius: 4px 4px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pr-chat-inner .pr-chat-header__left,
.pr-chat-inner .pr-chat-header__right {
  display: flex;
  align-items: center;
}
.pr-chat-inner .pr-chat-header__title {
  color: #18191c;
   font-weight: 700;
  margin-right: 6px;
}
.pr-chat-inner .pr-chat-header__info {
  display: flex;
  align-items: center;
}
.pr-chat-inner .pr-chat-header__count {
  color: #9499a0;
   margin-right: 4px;
  font-size: 12px;
  display: inline-block;
  transform: scale(0.92);
  margin-left: 2px;
}
.pr-chat-inner .pr-chat-header__guide {
  margin-right: 16px;
  cursor: default;
  font-size: 12px;
}
.pr-chat-inner .pr-chat-header__guide,
.pr-chat-inner .pr-chat-header__exit {
  display: flex;
  align-items: center;
  color: #61666d;
   font-size: 12px;
  line-height: 16px;
  transition: color 0.3s;
}
.pr-chat-inner .pr-chat-header__guide .exit-icon,
.pr-chat-inner .pr-chat-header__exit .exit-icon {
  margin-right: 3px;
}
.pr-chat-inner .pr-chat-header .pr-chat-header__exit:hover {
  color: #00aeec;
 }
.full-premiere-container .pr-chat-inner .pr-chat-header {
  background-color: #11111d;
  border-color: #11111d;
  border-bottom: 1px solid rgba(205, 218, 255, 0.1);
}
.full-premiere-container .pr-chat-inner .pr-chat-header__title {
  color: #ffffff;
}
.full-premiere-container .pr-chat-inner .pr-chat-header__exit:hover {
  color: #0087bd;
}
.pr-chat-header__guide--popover {
  border-radius: 8px;
  padding-top: 0px;
  padding: 0;
  border: none;
}
.pr-video-intro {
  border: 1px solid #e3e5e7;
   box-shadow: 0px 0px 30px rgb(0 0 0%);
  cursor: default;
  width: 284px;
  height: 298px;
  padding: 16px 24px 8px 24px;
  box-sizing: border-box;
  border-radius: 8px;
}
.pr-video-intro__title {
  text-align: center;
  color: #18191c;
   font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 16px;
}
.pr-video-intro__item {
  display: flex;
  align-items: center;
  margin: 16px 0;
}
.pr-video-intro .intro-icon {
  padding: 9px 0;
  margin-right: 16px;
  width: 59px;
}
.pr-video-intro .intro-panel {
  display: flex;
  flex-direction: column;
}
.pr-video-intro .intro-title {
  color: #18191c;
   font-size: 14px;
  line-height: 20px;
  margin-bottom: 2px;
  font-weight: 400;
}
.pr-video-intro .intro-desc {
  color: #61666d;
   font-size: 12px;
  line-height: 17px;
}
.pr-video-intro--dark {
  background: #20212f;
  border: 1px solid #27282e;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
}
.pr-video-intro--dark .pr-video-intro__title,
.pr-video-intro--dark .intro-title {
  color: #e7e9eb;
}
.pr-video-intro--dark .intro-desc {
  color: #757a81;
}

.pr-comment-loading {
  width: 100%;
  margin-bottom: 50px;
  -webkit-font-smoothing: antialiased;
}
.pr-comment-loading .pr-loading-header {
  font-size: 20px;
  margin: 0 0 22px 0;
  display: block !important;
  height: 34px;
  margin-right: 6px;
  line-height: 34px;
  color: #18191c;
   pointer-events: none;
  font-weight: 500;
}
.pr-comment-loading .pr-loading-send {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.pr-comment-loading .pr-loading-send .face {
  padding-left: 12px;
}
.pr-comment-loading .pr-loading-send .face .face-img {
  width: 40px;
  height: 40px;
  border-radius: 40px;
}
.pr-comment-loading .pr-loading-send .textarea {
  height: 50px;
  width: calc(100% - 65px - 80px);
  font-size: 12px;
  border-radius: 4px;
  text-align: center;
  color: #9499a0;
   background-color: #f1f2f3;
   overflow: hidden;
  line-height: 50px;
}
.pr-comment-loading .pr-loading-send .send-button {
  border-radius: 4px;
  flex-shrink: 0;
  font-size: 16px;
  width: 70px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #9499a0;
   background-color: #f1f2f3;
   border-color: #f1f2f3;
 }
@media screen and (min-width: 1681px) {
  .pr-comment-loading .pr-loading-header {
    font-size: 24px;
  }
  .pr-comment-loading .pr-loading-send .face .face-img {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }
  .pr-comment-loading .pr-loading-send .textarea {
    width: calc(100% - 67px - 80px);
  }
}

.video-desc-v1 {
  margin: 16px 0;
  position: relative;
}
.video-desc-v1 .desc-info {
  transition: all 0.3s;
  white-space: pre-line;
  word-break: break-all;
  transition: height 0.3s;
  font-size: 15px;
  color: #18191c;
   letter-spacing: 0;
  line-height: 24px;
  overflow: hidden;
}
.video-desc-v1 .desc-info a {
  color: #008ac5;
   transition: color 0.3s;
}
.video-desc-v1 .desc-info a:hover {
  color: #00aeec;
 }
.video-desc-v1 .desc-info .mention-user {
  color: #178bcf;
}
.video-desc-v1 .toggle-btn {
  margin-top: 10px;
  font-size: 13px;
  line-height: 18px;
}
.video-desc-v1 .toggle-btn span {
  cursor: pointer;
  color: #61666d;
 }
.video-desc-v1 .toggle-btn span:hover {
  color: #00aeec;
 }
.video-desc-v1 .subtitle {
  padding-top: 6px;
  color: #18191c;
   font-size: 15px;
  line-height: 21px;
}
.video-desc-v1 .subtitle a {
  color: #008ac5;
   transition: color 0.3s;
}
.video-desc-v1 .subtitle a:hover {
  color: #00aeec;
 }
@media (min-width: 1681px) {
  .video-desc-v1 {
    margin: 18px 0;
  }
  .video-desc-v1 .desc-info {
    font-size: 16px;
    line-height: 26px;
  }
  .video-desc-v1 .toggle-btn {
    font-size: 14px;
    line-height: 20px;
  }
  .video-desc-v1 .subtitle li {
    font-size: 16px;
    line-height: 22px;
  }
}

.tag-channel-cancel-popup-exp {
  z-index: 12;
  position: absolute;
  background: #ffffff;
   padding: 20px 10px 10px 10px;
  min-width: 120px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  text-align: center;
  right: 0px;
  top: 35px;
}
.tag-channel-cancel-popup-exp p {
  font-size: 14px;
  color: #18191c;
   margin-bottom: 20px;
}
.tag-channel-cancel-popup-exp a {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 2px;
}
.tag-channel-cancel-popup-exp a.btn-ok {
    background: #00aeec;
   margin-right: 5px;
}
.tag-channel-cancel-popup-exp a.btn-no {
  color: #18191c;
   background: #e3e5e7;
   margin-left: 5px;
}

.tag-del-popup-exp {
  z-index: 12;
  position: absolute;
  background: #ffffff;
   padding: 30px 20px 20px 20px;
  min-width: 120px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  text-align: center;
  right: 0px;
  top: 0px;
}
.tag-del-popup-exp p {
  font-size: 12px;
  color: #18191c;
   margin-bottom: 20px;
}
.tag-del-popup-exp a {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 2px;
}
.tag-del-popup-exp a.btn-ok {
    background: #00aeec;
   margin-right: 5px;
}
.tag-del-popup-exp a.btn-no {
  color: #18191c;
   background: #e3e5e7;
   margin-left: 5px;
}

.line-ellipsis[data-v-48c95578] {
  display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.tag-channel-pane-exp[data-v-48c95578] {
  position: absolute;
  z-index: 11;
  background: #ffffff;
   margin-left: -10px;
  margin-top: 5px;
  width: 206px;
  min-height: 184px;
  box-sizing: content-box;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
.tag-channel-pane-exp .bg-image[data-v-48c95578] {
  width: 100%;
  height: 66px;
  background-position: 50%;
  border-radius: 2px 2px 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
}
.tag-channel-pane-exp .bg-mask[data-v-48c95578] {
  position: absolute;
  width: 100%;
  height: 66px;
  background-position: 50%;
  opacity: 0.6;
  border-radius: 2px 2px 0px 0px;
  top: 0;
}
.tag-channel-pane-exp .channel-cover[data-v-48c95578] {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.05);
  border: 2px solid #ffffff;
  border-radius: 2px;
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translate(-50%, 0);
}
.tag-channel-pane-exp .content[data-v-48c95578] {
  padding: 0 10px;
}
.tag-channel-pane-exp .channel-info[data-v-48c95578] {
  padding: 24px 10px 10px 10px;
}
.tag-channel-pane-exp .channel-title[data-v-48c95578] {
  font-size: 14px;
  color: #18191c;
   line-height: 18px;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .tag-channel-pane-exp .channel-title[data-v-48c95578] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.tag-channel-pane-exp .channel-title > img[data-v-48c95578] {
  margin-left: 4px;
}
.tag-channel-pane-exp .channel-desc[data-v-48c95578] {
  font-size: 12px;
  color: #9499a0;
   height: 18px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  width: 190px;
}
.tag-channel-pane-exp .channel-desc > span[data-v-48c95578] {
  margin: 0px 3px 0 3px;
  display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.tag-channel-pane-exp .channel-btns[data-v-48c95578] {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.tag-channel-pane-exp .channel-btns__link[data-v-48c95578] {
  cursor: pointer;
  width: 66px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  border: 1px solid #00aeec;
   border-radius: 2px;
  font-size: 12px;
  color: #00aeec;
   transition: 0.3s;
}
.tag-channel-pane-exp .channel-btns__link[data-v-48c95578]:hover {
  background: #00aeec;
   border-radius: 2px;
  }
.tag-channel-pane-exp .channel-btns__subs[data-v-48c95578] {
  cursor: pointer;
  width: 108px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  text-align: center;
  margin-left: 8px;
}
.tag-channel-pane-exp .channel-btns__subs .add-icon[data-v-48c95578] {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  vertical-align: sub;
}
.tag-channel-pane-exp .channel-btns .is-subs[data-v-48c95578] {
  background: #e3e5e7;
   color: #9499a0;
   border: 1px solid #e3e5e7;
   display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.tag-channel-pane-exp .channel-btns .no-subs[data-v-48c95578] {
    background: #00aeec;
   border: 1px solid #00aeec;
   transition: 0.3s;
  border-radius: 2px;
  display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.tag-channel-pane-exp .channel-btns .no-subs[data-v-48c95578]:hover {
  background: #00b8f6;
  border: 1px solid #00b8f6;
}
.tag-channel-pane-exp .channel-btns__subs--delete[data-v-48c95578] {
  margin-top: -6px;
  width: 100%;
  border-top: 1px solid #e3e5e7;
   height: 40px;
  line-height: 40px;
  text-align: right;
  transition: 0.3s;
}
.tag-channel-pane-exp .channel-btns__subs--delete .delete-btn[data-v-48c95578] {
  cursor: pointer;
  display: inline-block;
  width: 36px;
  height: 28px;
  line-height: 28px;
  border-radius: 2px;
  font-size: 12px;
  color: #00aeec;
   text-align: center;
}
.tag-channel-pane-exp
  .channel-btns__subs--delete
  .delete-btn[data-v-48c95578]:hover {
  background: #e3e5e7;
 }
.tag-channel-pane-exp .delete-pop[data-v-48c95578] {
  top: 60px;
}

.tag-report-popup-exp {
  position: absolute;
  margin-left: -10px;
  margin-top: 5px;
  z-index: 12;
  background: #ffffff;
   padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  text-align: center;
  color: #18191c;
 }
.tag-report-popup-exp h3 {
  font-size: 14px;
  color: #18191c;
   font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  text-align: left;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .tag-report-popup-exp h3 {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.tag-report-popup-exp ul {
  padding: 10px 100px 10px 0px;
  cursor: pointer;
  width: 80px;
}
.tag-report-popup-exp ul li {
  line-height: 24px;
  margin: 10px 0;
  text-align: left;
}
.tag-report-popup-exp ul li i {
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid #e3e5e7;
   vertical-align: middle;
  margin-right: 5px;
  position: relative;
}
.tag-report-popup-exp ul li.on i {
  border-color: #00aeec;
 }
.tag-report-popup-exp ul li.on i:before {
  content: "";
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  width: 9px;
  height: 9px;
  background: #00aeec;
 }
.tag-report-popup-exp .btn-close {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 10px;
  height: 10px;
  background: url("//static.hdslb.com/images/base/icons.png") -475px -539px;
}
.tag-report-popup-exp .btn-ok {
  cursor: pointer;
  display: inline-block;
  width: 80px;
  height: 24px;
  line-height: 24px;
  background: #00aeec;
     border-radius: 2px;
}

.s_tag-v1 {
  padding-bottom: 6px;
  margin: 16px 0 20px 0;
  border-bottom: 1px solid #e3e5e7;
 }
.s_tag-v1 .tag-wrap {
  transition: height 0.3s;
}
.s_tag-v1 .tag-wrap .tag-area {
  position: relative;
}
.s_tag-v1 .tag-wrap .tag-area > li {
  float: left;
  margin: 0 12px 8px 0;
  position: relative;
}
.s_tag-v1 .tag-wrap .tag-area > li .tag-link {
  color: #61666d;
   z-index: 10;
  height: 28px;
  line-height: 28px;
  display: inline-block;
  font-size: 13px;
  padding: 0 12px;
  box-sizing: border-box;
  background: #f1f2f3;
   border-radius: 100px;
  transition: all 0.3s;
}
.s_tag-v1 .tag-wrap .tag-area > li .tag-link > svg {
  width: 16px;
  margin-right: 4px;
  fill: #61666d;
   transform: translateY(0.5px);
  vertical-align: inherit;
}
.s_tag-v1 .tag-wrap .tag-area > li .tag-link.topic-link,
.s_tag-v1 .tag-wrap .tag-area > li .tag-link.bgm-link {
  max-width: 307px;
  display: flex;
  align-items: center;
  fill: #61666d;
  cursor: pointer;
}
.s_tag-v1 .tag-wrap .tag-area > li .tag-link.topic-link .tag-txt,
.s_tag-v1 .tag-wrap .tag-area > li .tag-link.bgm-link .tag-txt {
  margin: 0 6px 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.s_tag-v1 .tag-wrap .tag-area > li .tag-link.topic-link .tag-icon,
.s_tag-v1 .tag-wrap .tag-area > li .tag-link.bgm-link .tag-icon {
  width: 15px;
}
.s_tag-v1 .tag-wrap .tag-area > li .tag-link.topic-link:hover,
.s_tag-v1 .tag-wrap .tag-area > li .tag-link.bgm-link:hover {
  color: #00aeec;
  fill: #00aeec;
}
.s_tag-v1 .tag-wrap .tag-more {
  float: left;
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 50%;
  background: #f1f2f3;
   text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  fill: #61666d;
 }
.s_tag-v1 .tag-wrap .tag-more.fold {
  transform: rotate(180deg);
}
.s_tag-v1 .tag-wrap .tag-more:hover {
  fill: #00aeec;
 }
.s_tag-v1 .tag-wrap .nothing {
  float: left;
   font-size: 12px;
  line-height: 28px;
  margin-right: 10px;
}
.s_tag-v1 .tag-wrap .btn-add {
  float: left;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #f1f2f3;
   position: relative;
  transition: all 0.3s;
  cursor: pointer;
  margin-top: 3px;
}
.s_tag-v1 .tag-wrap .btn-add span {
  position: absolute;
  background: #61666d;
   transition: all 0.3s;
}
.s_tag-v1 .tag-wrap .btn-add .one {
  left: 6px;
  top: 11px;
  width: 12px;
  height: 2px;
}
.s_tag-v1 .tag-wrap .btn-add .two {
  left: 11px;
  top: 6px;
  width: 2px;
  height: 12px;
}
.s_tag-v1 .tag-wrap .btn-add:hover {
  border-color: #00aeec;
 }
.s_tag-v1 .tag-wrap .btn-add:hover span {
  background: #00aeec;
}
.s_tag-v1 .tag-wrap .ipt {
  float: left;
  width: 158px;
  height: 23px;
  border-radius: 23px;
  border: 1px solid #00aeec;
  position: relative;
  opacity: 1;
  margin-top: 1px;
}
.s_tag-v1 .tag-wrap .ipt.tag-add-enter-active,
.s_tag-v1 .tag-wrap .ipt.tag-add-leave-active {
  transition: all 0.5s;
}
.s_tag-v1 .tag-wrap .ipt.tag-add-enter,
.s_tag-v1 .tag-wrap .ipt.tag-add-leave-to {
  opacity: 0;
  width: 23px;
}
.s_tag-v1 .tag-wrap .ipt input {
  height: 23px;
  line-height: 23px;
  width: 120px;
  padding: 0 10px;
  font-size: 12px;
  background: transparent;
  border: none;
  outline: none;
}
.s_tag-v1 .tag-wrap .ipt.on {
  opacity: 1;
  width: 158px;
}
.s_tag-v1 .tag-wrap .ipt a {
  position: absolute;
  width: 10px;
  height: 10px;
  background: url("//static.hdslb.com/images/base/icons.png") -539px -539px
    no-repeat;
  left: 138px;
  top: 7px;
}
.s_tag-v1 .tag-wrap .ipt .tips {
  margin-top: 5px;
  color: #f00;
}
@media (min-width: 1681px) {
  .s_tag-v1 {
    margin-top: 18px;
    padding-bottom: 10px;
  }
  .s_tag-v1 .tag-wrap .tag-area > li .tag-link {
    height: 32px;
    line-height: 32px;
    font-size: 14px;
  }
  .s_tag-v1 .tag-wrap .tag-area > li .tag-link.topic-link .tag-icon,
  .s_tag-v1 .tag-wrap .tag-area > li .tag-link.bgm-link .tag-icon {
    width: 17px;
  }
  .s_tag-v1 .tag-wrap .tag-more {
    width: 32px;
    height: 32px;
    line-height: 32px;
  }
  .s_tag-v1 .tag-wrap .nothing {
    line-height: 32px;
  }
  .s_tag-v1 .tag-wrap .btn-add {
    margin-top: 5px;
  }
  .s_tag-v1 .tag-wrap .ipt {
    margin-top: 3px;
  }
}

.up-info-v1 {
  box-sizing: border-box;
  min-height: 58px;
  margin: 0 0 18px 0;
  display: flex;
  align-items: center;
}
.up-info-v1 .u-face {
  width: 48px;
  height: 48px;
  position: relative;
  flex-shrink: 0;
}
.up-info-v1 .u-face .u-face__avatar {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #c9ccd0;
 }
.up-info-v1 .u-face.has-pendant {
  width: 80px;
  height: 80px;
}
.up-info-v1 .u-face.has-pendant .u-face__avatar {
  position: absolute;
  width: 47px;
  height: 47px;
  top: 18px;
  left: 18px;
}
.up-info-v1 .u-face.is-nft {
  width: 80px;
  height: 80px;
}
.up-info-v1 .u-face.is-nft .u-face__avatar {
  position: absolute;
  width: 55px;
  height: 55px;
  top: 18px;
  left: 18px;
}
.up-info-v1 .u-face.is-nft .u-face__avatar,
.up-info-v1 .u-face.has-pendant .u-face__avatar {
  width: 47px;
  height: 47px;
}
.up-info-v1 .u-face .avatar-loaded {
  background-color: transparent;
}
.up-info-v1 .up-info_right {
  margin-left: 12px;
  flex: 1;
  overflow: auto;
}
.up-info-v1 .up-info_right .name {
  height: 22px;
  line-height: 22px;
  font-size: 15px;
  color: #18191c;
   display: flex;
  align-items: center;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .up-info-v1 .up-info_right .name {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.up-info-v1 .up-info_right .name .username {
  color: #18191c;
   position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 12px;
  max-width: calc(100% - 12px - 56px);
}
@media (min-width: 1681px) {
  .up-info-v1 .up-info_right .name .username {
    max-width: calc(100% - 12px - 60px);
  }
}
.up-info-v1 .up-info_right .name .username .mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.15);
}
.up-info-v1 .up-info_right .name .username:hover {
  color: #00aeec;
 }
.up-info-v1 .up-info_right .name .username.is_vip:hover,
.up-info-v1 .up-info_right .name .username.small-vip:hover {
  color: #fb7299;
}
.up-info-v1 .up-info_right .name .username.is_vip:hover .mask,
.up-info-v1 .up-info_right .name .username.small-vip:hover .mask {
  display: block;
}
.up-info-v1 .up-info_right .name .live-status {
  display: inline-block;
  text-align: center;
  padding: 0 6px 0 7px;
  height: 16px;
  line-height: 16px;
  border-radius: 9px;
  color: #ff6699;
   font-size: 12px;
  border: 1px solid #ff6699;
   margin-right: 4px;
  transition: background 0.3s, color 0.3s;
  flex-shrink: 0;
}
.up-info-v1 .up-info_right .name .live-status:hover {
  color: #fff;
  background: #fb7299;
}
.up-info-v1 .up-info_right .name .up-info_right_message {
  color: #61666d;
   font-size: 13px;
  transition: color 0.3s;
  flex-shrink: 0;
}
@media (min-width: 1680px) {
  .up-info-v1 .up-info_right .name .up-info_right_message {
    font-size: 14px;
  }
}
.up-info-v1 .up-info_right .name .up-info_right_message:hover {
  color: #00aeec;
 }
.up-info-v1 .up-info_right .name .up-info_right_message:hover i {
  color: #00aeec;
 }
.up-info-v1 .up-info_right .name .up-info_right_message i {
  color: #61666d;
   transition: color 0.3s;
}
.up-info-v1 .up-info_right .desc {
  margin: 2px 0 10px 0;
  font-size: 13px;
  line-height: 16px;
  height: 16px;
  color: #9499a0;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media (min-width: 1680px) {
  .up-info-v1 .up-info_right .desc {
    font-size: 14px;
  }
}
.up-info-v1 .btn-panel {
  clear: both;
  display: flex;
  margin-top: 5px;
  white-space: nowrap;
}
.up-info-v1 .btn-panel .default-btn {
  box-sizing: border-box;
  padding: 0;
  line-height: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #c9ccd0;
   position: relative;
}
.up-info-v1 .btn-panel .btn-transition {
  transition: 0.3s all;
}
.up-info-v1 .btn-panel .video-commonmenu {
  vertical-align: middle;
}
.up-info-v1 .btn-panel .old-charge-btn {
  margin-right: 12px;
  flex-shrink: 0;
  width: 78px;
}
.up-info-v1 .btn-panel .following-charge-btn {
  background: #00aeec;
   }
.up-info-v1 .btn-panel .following-charge-btn:hover {
  background: #00b8f6;
}
.up-info-v1 .btn-panel .not-follow-charge-btn {
  border: 1px solid #00aeec;
   background: #ffffff;
   color: #00aeec;
 }
.up-info-v1 .btn-panel .not-follow-charge-btn:hover {
  border-color: #00b8f6;
  color: #00b8f6;
}
.up-info-v1 .btn-panel .new-charge-btn {
  margin-right: 12px;
  flex-shrink: 0;
  width: 109px;
  color: #ff6699;
}
.up-info-v1 .btn-panel .new-charge-btn.charge-btn-loaded {
  background-color: transparent;
  border: 1px solid #ff6699;
 }
.up-info-v1 .btn-panel .new-charge-btn.charge-btn-loaded:hover {
  background-color: #ffecf1;
 }
.up-info-v1 .btn-panel .new-charge-btn .charge-btn-icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
  display: flex;
}
.up-info-v1 .btn-panel .new-charge-btn .charge-btn-icon img {
  width: 100%;
  height: 100%;
}
.up-info-v1 .btn-panel .follow-btn {
  flex: 1 1 auto;
  max-width: 200px;
}
.up-info-v1 .btn-panel .follow-btn > span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
@media (min-width: 1681px) {
  .up-info-v1 .btn-panel .charge-btn {
    width: 138px;
  }
  .up-info-v1 .btn-panel .follow-btn {
    max-width: 230px;
  }
}
.up-info-v1 .btn-panel .van-icon-general_pulldown_s {
  margin-left: 4px;
  font-size: 100%;
}
.up-info-v1 .btn-panel .following {
  color: #9499a0;
   background-color: #e3e5e7;
 }
.up-info-v1 .btn-panel .following:hover {
  background-color: #f1f2f3;
 }
.up-info-v1 .btn-panel .following > span {
  height: 100%;
}
.up-info-v1 .btn-panel .not-follow {
  background: #00aeec;
   }
.up-info-v1 .btn-panel .not-follow i {
  display: flex;
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.up-info-v1 .btn-panel .not-follow i img {
  width: 100%;
  height: 100%;
}
.up-info-v1 .btn-panel .not-follow:hover {
  background: #00b8f6;
}
.up-info-v1 .btn-panel .has-charge {
  display: inline-flex;
  align-items: center;
}
.up-info-v1 .btn-panel .has-charge svg {
  margin-right: 4px;
}
.up-info-v1 .btn-panel .already-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.up-info-v1 .btn-panel .already-btn svg {
  margin-right: 4px;
}
.up-info-v1.has-pendant .u-face {
  width: 84px;
  height: 84px;
}
.up-info-v1.has-pendant .u-face .fa {
  position: absolute;
  top: 18px;
  left: 18px;
}
.up-info-v1.has-pendant .u-face .bili-avatar-pendent {
  width: 175%;
  height: 175%;
}
.up-info-v1.has-pendant .up-info_right {
  width: calc(100% - 96px);
}
@media (min-width: 1681px) {
  .up-info-v1 .up-info_right .name {
    font-size: 16px;
  }
}
.up-info-v1-ab {
  margin: 0 0 10px 0;
}
.up-info-v1-ab .u-face {
  align-self: flex-start;
}
.up-info-no-desc {
  height: 80px;
}
.up-info-no-desc .u-face {
  align-self: center;
}
.van-popover.van-followed {
  box-sizing: border-box;
  position: absolute;
  border-radius: 4px;
  min-width: 98px;
  padding: 6px 0px;
  background: #ffffff;
   border: 1px solid #f1f2f3;
   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}
.van-popover.van-followed .follow_dropdown {
  text-align: center;
}
.van-popover.van-followed .follow_dropdown li {
  padding: 0 20px;
  line-height: 40px;
  transition: all 0.3s;
  cursor: pointer;
  color: #18191c;
   position: relative;
}
.van-popover.van-followed .follow_dropdown li:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0.1;
}
.van-popover.van-followed .follow_dropdown li:hover {
  background: none;
  color: #00aeec;
 }
.van-popover.van-followed .follow_dropdown li:hover:before {
  background-color: #9499a0;
 }

.members-info-v1[data-v-5b44ffe8] {
  padding-top: 18px;
}
.members-info-v1 .normal-members-header[data-v-5b44ffe8] {
  height: 44px;
  line-height: 44px;
  border-radius: 6px;
  background-color: #f1f2f3;
   padding: 0 16px;
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
 }
@media (-webkit-max-device-pixel-ratio: 1) {
  .members-info-v1 .normal-members-header[data-v-5b44ffe8] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.members-info-v1 .normal-members-header.can-pointer[data-v-5b44ffe8] {
  cursor: pointer;
}
.members-info-v1 .normal-members-header .person[data-v-5b44ffe8] {
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  margin-left: 6px;
  font-size: 13px;
  color: #61666d;
 }
@media (-webkit-max-device-pixel-ratio: 1) {
  .members-info-v1 .normal-members-header .person[data-v-5b44ffe8] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.members-info-v1 .normal-members-header .btn[data-v-5b44ffe8] {
  display: inline-flex;
  height: 100%;
  align-items: center;
  float: right;
  transform: rotate(180deg);
  transition: transform 0.3s;
}
.members-info-v1 .normal-members-header .btn.unfold[data-v-5b44ffe8] {
  transform: rotate(0deg);
}
.members-info-v1 .normal-members-container[data-v-5b44ffe8] {
  padding-top: 12px;
  display: flex;
  flex-wrap: wrap;
  transition: max-height 0.3s ease, background 1s;
  overflow: hidden;
  max-height: 96px;
}
.members-info-v1 .normal-members-container .up-card[data-v-5b44ffe8] {
  width: 87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 18px;
  cursor: default;
}
.members-info-v1 .normal-members-container .up-card .avatar[data-v-5b44ffe8] {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c9ccd0;
   box-sizing: border-box;
  border: 1px solid #f1f2f3;
   position: relative;
}
.members-info-v1
  .normal-members-container
  .up-card
  .avatar
  img[data-v-5b44ffe8] {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}
.members-info-v1
  .normal-members-container
  .up-card
  .avatar
  .attention[data-v-5b44ffe8] {
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #00aeec;
   line-height: 18px;
  text-align: center;
  bottom: -8px;
  left: 12px;
  font-size: 14px;
    cursor: pointer;
}
.members-info-v1 .normal-members-container .up-card .upinfo[data-v-5b44ffe8] {
  margin-top: 8px;
  text-align: center;
  padding: 0 4px;
}
.members-info-v1
  .normal-members-container
  .up-card
  .upinfo
  .upname[data-v-5b44ffe8] {
  line-height: 18px;
  font-size: 13px;
  color: #18191c;
   cursor: pointer;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
}
.members-info-v1
  .normal-members-container
  .up-card
  .upinfo
  .upname.is-vip[data-v-5b44ffe8] {
  color: #ff6699;
 }
.members-info-v1
  .normal-members-container
  .up-card
  .upinfo
  .upname.small-vip[data-v-5b44ffe8] {
  color: #62c076;
}
.members-info-v1
  .normal-members-container
  .up-card
  .upinfo
  .tag-sponsor[data-v-5b44ffe8] {
  color: #d2920a;
}
.members-info-v1
  .normal-members-container
  .up-card
  .upinfo
  .info-tag[data-v-5b44ffe8] {
  color: #9499a0;
 }
.members-info-v1 .wide-members-header[data-v-5b44ffe8] {
  font-size: 15px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  height: 20px;
  line-height: 20px;
  color: #18191c;
   margin-bottom: 8px;
  display: inline-flex;
  align-items: center;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .members-info-v1 .wide-members-header[data-v-5b44ffe8] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.members-info-v1 .wide-members-header .person[data-v-5b44ffe8] {
  font-size: 13px;
  color: #61666d;
   margin-left: 6px;
}
.members-info-v1 .wide-members-container[data-v-5b44ffe8] {
  display: flex;
  align-items: center;
  position: relative;
}
.members-info-v1 .wide-members-container .scroll-panel[data-v-5b44ffe8] {
  display: flex;
  overflow: hidden;
}
.members-info-v1
  .wide-members-container
  .scroll-panel
  .scroll-inside[data-v-5b44ffe8] {
  display: flex;
  transition: 1s;
  transform: translateX(0);
}
.members-info-v1 .wide-members-container .up-card[data-v-5b44ffe8] {
  width: 87px;
  position: relative;
  text-align: center;
  padding-bottom: 18px;
  cursor: default;
}
.members-info-v1 .wide-members-container .up-card img[data-v-5b44ffe8] {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.members-info-v1 .wide-members-container .up-card .attention[data-v-5b44ffe8] {
  position: absolute;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: #00aeec;
   line-height: 18px;
  left: 31px;
  font-size: 14px;
  text-align: center;
    top: 28px;
  cursor: pointer;
}
.members-info-v1 .wide-members-container .up-card .upname[data-v-5b44ffe8] {
  line-height: 18px;
  font-size: 13px;
  color: #18191c;
   vertical-align: middle;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  padding: 0 4px;
}
.members-info-v1
  .wide-members-container
  .up-card
  .upname.is-vip[data-v-5b44ffe8] {
  color: #ff6699;
 }
.members-info-v1
  .wide-members-container
  .up-card
  .upname.small-vip[data-v-5b44ffe8] {
  color: #62c076;
}
.members-info-v1
  .wide-members-container
  .up-card
  .tag-sponsor[data-v-5b44ffe8] {
  color: #d2920a;
}
.members-info-v1 .wide-members-container .up-card .info-tag[data-v-5b44ffe8] {
  color: #9499a0;
 }
.members-info-v1
  .wide-members-container
  .van-icon-general_back_s[data-v-5b44ffe8],
.members-info-v1
  .wide-members-container
  .van-icon-general_enter_s[data-v-5b44ffe8] {
  position: absolute;
  top: 28px;
  background: transparent;
  font-size: 20px;
  color: #61666d;
   cursor: pointer;
}
.members-info-v1
  .wide-members-container
  .van-icon-general_back_s[data-v-5b44ffe8]:hover,
.members-info-v1
  .wide-members-container
  .van-icon-general_enter_s[data-v-5b44ffe8]:hover {
  color: #00aeec;
 }
.members-info-v1
  .wide-members-container
  .van-icon-general_enter_s[data-v-5b44ffe8] {
  right: 6px;
}
.members-info-v1
  .wide-members-container
  .van-icon-general_back_s[data-v-5b44ffe8] {
  left: 6px;
  z-index: 1;
}
.members-info-v1 .wide-members-container .general-mask-left[data-v-5b44ffe8],
.members-info-v1 .wide-members-container .general-mask-right[data-v-5b44ffe8] {
  height: 100%;
  width: 30%;
  position: absolute;
  top: 0;
  pointer-events: none;
}
.members-info-v1 .wide-members-container .general-mask-left[data-v-5b44ffe8] {
  left: 0px;
  background: linear-gradient(-270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(
    -270deg,
     rgba(255, 255, 255, 0) 100%
  );
}
.members-info-v1 .wide-members-container .general-mask-right[data-v-5b44ffe8] {
  right: 0;
  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(
    270deg,
     rgba(255, 255, 255, 0) 100%
  );
}
.members-info-v1 #member-container[data-v-5b44ffe8]::-webkit-scrollbar-track {
  background: rgba(245, 245, 245, 0);
}
.members-info-v1 #member-container[data-v-5b44ffe8]::-webkit-scrollbar {
  width: 6px;
  background: rgba(245, 245, 245, 0);
}
.members-info-v1 #member-container[data-v-5b44ffe8]::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0);
}
.members-info-v1
  #member-container[data-v-5b44ffe8]:hover::-webkit-scrollbar-track {
  background: #f5f5f5;
}
.members-info-v1 #member-container[data-v-5b44ffe8]:hover::-webkit-scrollbar {
  background: #f5f5f5;
}
.members-info-v1
  #member-container[data-v-5b44ffe8]:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}
@media (min-width: 1681px) {
  .members-info-v1 .normal-members-header[data-v-5b44ffe8],
  .members-info-v1 .wide-members-header[data-v-5b44ffe8] {
    font-size: 16px;
  }
  .members-info-v1 .normal-members-header .person[data-v-5b44ffe8],
  .members-info-v1 .wide-members-header .person[data-v-5b44ffe8] {
    font-size: 14px;
  }
  .members-info-v1 .normal-members-container .up-card[data-v-5b44ffe8],
  .members-info-v1 .wide-members-container .up-card[data-v-5b44ffe8] {
    width: 82px;
    padding-bottom: 20px;
  }
  .members-info-v1
    .normal-members-container
    .up-card
    .upinfo
    .upname[data-v-5b44ffe8],
  .members-info-v1
    .wide-members-container
    .up-card
    .upinfo
    .upname[data-v-5b44ffe8] {
    font-size: 14px;
    line-height: 20px;
  }
  .members-info-v1 .normal-members-container[data-v-5b44ffe8] {
    max-height: 102px;
  }
}

.user-card-m-exp {
  font-size: 12px;
  position: absolute;
  z-index: 10099;
  border-radius: 8px;
  width: 366px;
  box-sizing: border-box;
  cursor: default;
  transition: left 0.3s, top 0.3s;
}
.user-card-m-exp a {
  text-decoration: none;
}
.user-card-m-exp p {
  margin: 0;
}
.user-card-m-exp .loading {
  min-height: 230px;
}
.user-card-m-exp .loading .mc1 {
  background: #c9ccd0;
   height: 120px;
  border-radius: 8px 8px 0 0;
}
.user-card-m-exp .loading .mc2 {
  padding: 0 0 0 100px;
  position: relative;
}
.user-card-m-exp .loading .mc3 {
  background: #c9ccd0;
   height: 24px;
  margin-top: 12px;
}
.user-card-m-exp .loading .mc4 {
  position: absolute;
  width: 80px;
  height: 60px;
  background: #c9ccd0;
   top: 0;
  left: 0;
}
.user-card-m-exp .bg {
  width: 100%;
  height: 85px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.user-card-m-exp .user-info-wrapper {
  position: relative;
  display: flex;
  padding: 0 20px 16px 10px;
}
.user-card-m-exp .user-info-wrapper .face {
  position: relative;
  top: 10px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #c9ccd0;
   margin-right: 12px;
}
.user-card-m-exp .user-info-wrapper .face img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.user-card-m-exp .user-info-wrapper .face .auth {
  position: absolute;
  width: 14px;
  height: 14px;
  right: 0;
  top: 34px;
}
.user-card-m-exp .user-info-wrapper .info p {
  margin: 0;
  color: #18191c;
 }
.user-card-m-exp .user-info-wrapper .info .sign {
  line-height: 17px;
  color: #9499a0;
   display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
}
.user-card-m-exp .user-info-wrapper .info .social {
  margin-bottom: 10px;
}
.user-card-m-exp .user-info-wrapper .info .social a {
  color: #18191c;
   margin-right: 18px;
}
.user-card-m-exp .user-info-wrapper .info .social .tip_text {
  color: #9499a0;
   margin-left: 3px;
}
.user-card-m-exp .user-info-wrapper .info .official-wrapper {
  font-size: 12px;
  color: #9499a0;
   line-height: 17px;
  margin-bottom: 8px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 2;
}
.user-card-m-exp .user-info-wrapper .info .official-wrapper .official-icon {
  width: 14px;
  height: 14px;
  margin-right: 2px;
  vertical-align: sub;
}
.user-card-m-exp .user-info-wrapper .info .user {
  margin-top: 12px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.user-card-m-exp .user-info-wrapper .info .user .name {
  color: #18191c;
   max-width: 158px;
  margin-right: 4px;
  font-size: 16px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .user-card-m-exp .user-info-wrapper .info .user .name {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.user-card-m-exp .user-info-wrapper .info .user .user-sex {
  margin-right: 5px;
}
.user-card-m-exp .user-info-wrapper .info .user .user-label {
  display: inline-block;
  box-sizing: border-box;
  max-width: 58px;
  height: 16px;
    background: #ff6699;
   border-radius: 2px;
  line-height: 16px;
  font-size: 12px;
  margin-left: 5px;
  overflow: hidden;
  white-space: nowrap;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .user-card-m-exp .user-info-wrapper .info .user .user-label {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.user-card-m-exp .user-info-wrapper .info .user .user-label .label-size {
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  transform: scale(0.83);
}
.user-card-m-exp .user-info-wrapper .info .level {
  display: inline-block;
  width: 25px;
  height: 14px;
}
.user-card-m-exp .user-info-wrapper .info .level.senior {
  width: 35px;
  height: 14px;
}
.user-card-m-exp .user-info-wrapper .info .level svg {
  width: 100%;
  height: 100%;
}
.user-card-m-exp .user-info-wrapper .info .btn-box {
  display: flex;
  margin-top: 16px;
}
.user-card-m-exp .user-info-wrapper .info .btn-box a {
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  border-radius: 4px;
  transition: all 0.3s;
  font-size: 14px;
}
.user-card-m-exp .user-info-wrapper .info .btn-box a .plus {
    margin-right: 4px;
  font-size: 16px;
}
.user-card-m-exp .user-info-wrapper .info .btn-box .like {
    border-color: #00aeec;
   background-color: #00aeec;
 }
.user-card-m-exp .user-info-wrapper .info .btn-box .like:hover {
  border-color: #00b8f6;
  background-color: #00b8f6;
}
.user-card-m-exp .user-info-wrapper .info .btn-box .liked {
  background-color: #e3e5e7;
   color: #9499a0;
 }
.user-card-m-exp .user-info-wrapper .info .btn-box .liked:hover {
  background-color: #f1f2f3;
 }
.user-card-m-exp .user-info-wrapper .info .btn-box .message {
  border: 1px solid #9499a0;
   color: #61666d;
   background-color: transparent;
}
.user-card-m-exp .user-info-wrapper .info .btn-box .message:hover {
  color: #00aeec;
   border-color: #00aeec;
 }
.user-card-m-exp .vip-red-name {
  color: #fb7299 !important;
}
.user-card-m-exp .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}
.user-card-m-exp.top-transform {
  transform: translateY(-100%);
}
.card-loaded {
  cursor: default;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  background: #ffffff;
   border: 0.5px solid #f1f2f3;
 }

.float-nav-exp {
  position: fixed;
  right: 6px;
  bottom: 50px;
  z-index: 6;
}
.float-nav-exp .nav-menu .item {
  border: 1px solid #f1f2f3;
   box-sizing: border-box;
  border-radius: 6px;
  width: 40px;
  margin-bottom: 12px;
  transition: all 0.3s;
  cursor: pointer;
  color: #18191c;
   fill: #18191c;
   text-align: center;
  padding: 8px 0 4px 0;
  background-color: #ffffff;
 }
.float-nav-exp .nav-menu .item.issue,
.float-nav-exp .nav-menu .item.goback {
  padding: 8px 4px 4px;
  line-height: 14px;
}
.float-nav-exp .nav-menu .item.mini.on {
  color: #00aeec;
   fill: #00aeec;
 }
.float-nav-exp .nav-menu .item.mini.on:hover {
  color: #fff;
  fill: #fff;
}
.float-nav-exp .nav-menu .item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 2px;
}
.float-nav-exp .nav-menu .item-text {
  line-height: 14px;
}
.float-nav-exp .nav-menu .item:hover {
  background-color: #00aeec;
   color: #fff;
  fill: #fff;
}
.float-nav-exp .nav-menu .item.backup {
  padding: 8px 0;
  margin-bottom: 0;
}
.float-nav-exp .nav-menu .item.backup .item-icon {
  height: 8px;
}
.float-nav-exp .nav-menu .item.backold {
  padding: 8px 0;
  margin-top: 10px;
}

.collection-m-exp {
  width: 420px;
  border-radius: 4px;
  background: #ffffff;
   overflow: hidden;
}
.collection-m-exp .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #18191c;
   border-bottom: #e3e5e7;
   text-align: center;
}
.collection-m-exp .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  height: 50px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.collection-m-exp .content {
  padding: 0 36px;
  height: 300px;
  overflow: auto;
}
.collection-m-exp .content .info {
  font-size: 12px;
  color: #9499a0;
   margin: 14px 0;
}
.collection-m-exp .content .info .uname {
  color: #61666d;
 }
.collection-m-exp .content .group-list {
  max-height: 300px;
  padding-bottom: 14px;
}
.collection-m-exp .content .group-list ul {
  position: relative;
  margin-top: 24px;
  min-height: 210px;
}
.collection-m-exp .content .group-list ul .collection-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #ffffff;
 }
.collection-m-exp .content .group-list li {
  padding-bottom: 24px;
  font-size: 14px;
  color: #18191c;
   cursor: pointer;
}
.collection-m-exp .content .group-list li label {
  cursor: pointer;
  display: block;
}
.collection-m-exp .content .group-list li label .personal {
  color: #9499a0;
 }
.collection-m-exp .content .group-list li label.disable {
  color: #9499a0;
 }
.collection-m-exp .content .group-list li label.disable:hover {
  color: #9499a0;
 }
.collection-m-exp
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.collection-m-exp
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.collection-m-exp .content .group-list li label .count {
  float: right;
  color: #61666d;
   font-size: 12px;
}
.collection-m-exp .content .group-list li input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  vertical-align: middle;
  display: none;
}
.collection-m-exp .content .group-list li input[type="checkbox"] + i {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 18px;
  vertical-align: middle;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAMZJREFUOBFjZACCY8cuSP/4+6ebkYHB4T8DgyRIjFgA1PMcqOcABzNLqZWVwVNGkGE///45w8DANIGZ898iOxOT58QaBlJ36MwZyb/fmeIYGP4VsDOzmDDuO3xmGSMD00VHW6NOUgxCV7v/8Lny/wz/9JlA3gS5DF0BqXyQGSCzGIAuBAYBdQDILCbqGIUwZdRARFiQyxoNQ3JDDqFvCIQhqDwDFUEIR5PHApkBMosJVDhCyjPyDILpApkBMov6BSzIBmpWAQCEVFxRmF8CTgAAAABJRU5ErkJggg==);
}
.collection-m-exp .content .group-list li input[type="checkbox"]:hover + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAL5JREFUOBFjZACBVTelGb7/62ZgZHBg+P9fEixGLMHI+JzhP8MBBk6mUoYw9aeMEMP+nmFgYpgANGMRQ6zWc2LNAqtbfA3kgDiGfwwFDJzMJowMC68vY2D6fxFoUCdJBqErXnytnOEfoz4T2Jsgl1EOFkHMWnjtP+VmQU0AmsVENcOgBo0aSHmIjobhyAhDUHkGKYIo8y/IDKBZTODCEVSeUQ7iQGaxgEva78ACdvE1kJEUFrBMwAIWBKhYBQAAjRZDKb7Y9b8AAAAASUVORK5CYII=);
}
.collection-m-exp .content .group-list li input[type="checkbox"]:checked + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.collection-m-exp
  .content
  .group-list
  li
  input[type="checkbox"]:checked:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.collection-m-exp .content .group-list li .fav-title {
  max-width: 220px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.collection-m-exp .content .group-list li:hover {
  color: #00aeec;
 }
.collection-m-exp .content .group-list .add-group {
  margin-bottom: 5px;
  width: 348px;
}
.collection-m-exp .content .group-list .add-group .add-btn {
  height: 34px;
  line-height: 34px;
  padding: 0 34px;
  border: 1px solid #9499a0;
   border-radius: 4px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAC5JREFUKBVjYMABZi5a9R+EcUgzMOGSICQ+EjQy4gs5fAFEduDgNHQ0HhnIT6sAudAOjNLnY/wAAAAASUVORK5CYII=)
    no-repeat 10px center;
  font-size: 12px;
  color: #61666d;
   cursor: pointer;
}
.collection-m-exp .content .group-list .add-group .add-btn:hover {
  border: 1px solid #00aeec;
 }
.collection-m-exp .content .group-list .add-group .fav-add-tip {
  display: inline-block;
  line-height: 40px;
  height: 40px;
  position: absolute;
  top: -52px;
  padding: 0 10px;
  border-radius: 4px;
    background: #00aeec;
 }
.collection-m-exp .content .group-list .add-group .fav-add-tip .blue-arrow {
  position: absolute;
  background-image: url("//static.hdslb.com/images/collection/blue-arrow.png");
  background-repeat: no-repeat;
  left: 60px;
  top: 40px;
  width: 14px;
  height: 6px;
}
.collection-m-exp .content .group-list .add-group .fav-add-tip .icon-close {
  display: inline-block;
  margin-left: 10px;
  line-height: 28px;
  opacity: 0.9 !important;
  filter: alpha(opacity=90) !important;
  cursor: pointer;
  vertical-align: middle;
  background: url("//static.hdslb.com/images/collection/close-white.png") center
    no-repeat;
  width: 24px;
  height: 24px;
}
.collection-m-exp .content .group-list .add-group .input-group {
  height: 34px;
  line-height: 34px;
  border: 1px solid #00aeec;
   border-radius: 4px;
  position: relative;
}
.collection-m-exp .content .group-list .add-group .input-group input {
  border: none;
  font-size: 12px;
  width: 200px;
  margin-left: 10px;
  padding: 0;
  box-shadow: none;
  height: 100%;
  background: transparent;
  color: #18191c;
   outline: none;
}
.collection-m-exp .content .group-list .add-group .input-group .submit {
  float: right;
  height: 34px;
  width: 90px;
  background: #d9f1f9;
  border: none;
  border-left: 1px solid #00aeec;
   border-radius: 0 4px 4px 0;
  font-size: 14px;
  color: #00aeec;
   cursor: pointer;
}
.collection-m-exp .content::-webkit-scrollbar {
  width: 6px;
}
.collection-m-exp .content::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #999999;
}
.collection-m-exp .bottom {
  height: 76px;
  text-align: center;
  margin: 0 36px;
  border-top: 1px solid #e3e5e7;
 }
.collection-m-exp .bottom .btn {
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-top: 18px;
  background: #00aeec;
   border: none;
  border-radius: 4px;
    cursor: pointer;
}
.collection-m-exp .bottom .btn:hover {
  background: #00b8f6;
}
.collection-m-exp .bottom .btn.disable {
  background-color: #e3e5e7;
   color: #9499a0;
 }
.collection-m-exp .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}

.coin-operated-m-exp {
  width: 430px;
  background: #ffffff;
   border-radius: 4px;
  overflow: hidden;
}
.coin-operated-m-exp .close {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 16px;
  top: 16px;
  cursor: pointer;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
}
.coin-operated-m-exp .coin-title {
  font-size: 16px;
  margin-top: 20px;
  color: #18191c;
   text-align: center;
}
.coin-operated-m-exp .coin-title span {
  font-size: 30px;
  color: #00aeec;
 }
.coin-operated-m-exp .mc {
  text-align: center;
}
.coin-operated-m-exp .mc-box {
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin-right: 30px;
  margin-top: 35px;
  width: 160px;
  height: 230px;
  border: 2px dashed #ccd0d6;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: center;
}
.coin-operated-m-exp .mc-box.left-con {
  margin-left: 35px;
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/22-coin.png);
  background-size: 120px;
}
.coin-operated-m-exp .mc-box.right-con {
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/33-coin.png);
  background-size: 120px;
}
.coin-operated-m-exp .mc-box .c-num {
  color: #9499a0;
   text-align: left;
  font-size: 14px;
  line-height: 40px;
  position: absolute;
  left: 15px;
  top: 0px;
}
.coin-operated-m-exp .mc-box .coin-run-box {
  width: 120px;
  height: 206px;
  overflow: hidden;
  margin: 0 auto;
}
.coin-operated-m-exp .mc-box .coin-run {
  opacity: 0;
  height: 193px;
  margin-top: 19px;
}
.coin-operated-m-exp .mc-box:hover {
  border-color: #02a0d8;
}
.coin-operated-m-exp .mc-box.on {
  border-style: solid;
  border-color: #02a0d8;
  background: transparent;
}
.coin-operated-m-exp .mc-box.on .c-num {
  color: #00aeec;
 }
.coin-operated-m-exp .mc-box.on .coin-run {
  opacity: 1;
  animation: coin-run-animation 2s steps(23) infinite;
}
.coin-operated-m-exp .like-checkbox {
  margin: 12px 0 0 37px;
  font-size: 12px;
  color: #18191c;
   line-height: 16px;
}
.coin-operated-m-exp .like-checkbox input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  display: none;
}
.coin-operated-m-exp .like-checkbox input[type="checkbox"] + i {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 5px;
  vertical-align: bottom;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTYgMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2IDE2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0NDRDBENzt9Cjwvc3R5bGU+Cjx0aXRsZT5zZWxlY3QgY29udHJvbF9zcGVjaWFsX2RlZmF1bHQ8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9IlN5bWJvbHMiPgoJPGcgaWQ9InNlbGVjdC1jb250cm9sX3NwZWNpYWxfZGVmYXVsdCI+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIuNSwwLjVoMTFjMS4xLDAsMiwwLjksMiwydjExYzAsMS4xLTAuOSwyLTIsMmgtMTFjLTEuMSwwLTItMC45LTItMnYtMTFDMC41LDEuNCwxLjQsMC41LDIuNSwwLjV6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==);
}
.coin-operated-m-exp .like-checkbox input[type="checkbox"]:checked + i {
  background: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/checkbox_selected.svg);
}
.coin-operated-m-exp .coin-bottom {
  text-align: center;
  padding: 25px 0;
}
.coin-operated-m-exp .coin-bottom .b-btn {
  width: 92px;
  height: 22px;
  line-height: 22px;
}
.coin-operated-m-exp .coin-bottom .tips {
  font-size: 12px;
  color: #9499a0;
   margin-top: 10px;
}
.coin-operated-m-exp .coin-bottom .bi-btn {
  display: inline-block;
  background: #00aeec;
     font-size: 14px;
  padding: 4px 18px;
  border-radius: 4px;
  transition: all 0.3s;
  user-select: none;
  border: 1px solid #00aeec;
   text-align: center;
  cursor: pointer;
}
.coin-operated-m-exp .coin-bottom .bi-btn:hover {
    background: #00b8f6;
  border-color: #00b8f6;
}
.coin-operated-m-exp .coin-bottom .bi-btn:active {
  background: #01769c;
  border-color: #01769c;
}
@keyframes coin-run-animation {
  0% {
    transform: translate3d(0px, 0, 0);
  }
  100% {
    transform: translate3d(-2767px, 0, 0);
  }
}

.app-watch-exp {
  border: 1px solid #f1f2f3;
   color: #18191c;
   background: #ffffff;
   width: 420px;
  border-radius: 2px;
  z-index: 20;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
}
.app-watch-exp .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #18191c;
   border-bottom: 1px solid #e3e5e7;
   text-align: center;
}
.app-watch-exp .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.app-watch-exp .app-look {
  padding: 30px 20px;
}
.app-watch-exp .app-look .i-t {
  display: flex;
}
.app-watch-exp .app-look .i-t .qrcode {
  width: 100px;
  height: 100px;
  flex: none;
  background: #eee;
}
.app-watch-exp .app-look .i-t .v-title {
  font-size: 14px;
  margin-left: 15px;
  line-height: 22px;
  white-space: normal;
}
.app-watch-exp .app-look .foot-txt {
  text-align: center;
  line-height: 20px;
  margin-top: 20px;
  font-size: 14px;
}
.app-watch-exp .app-look .foot-txt a {
  color: #00aeec;
 }

.q1080p-exp {
  position: relative;
  width: 400px;
  height: 348px;
  border-radius: 4px;
  background-color: #ffffff;
   padding-top: 36px;
}
.q1080p-exp .close {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: -470px -534px;
}
.q1080p-exp .close:hover {
  background-position: -534px -534px;
}
.q1080p-exp .title {
  text-align: center;
  font-size: 20px;
  height: 26px;
  color: #18191c;
   line-height: 1;
}
.q1080p-exp .sub-title {
  margin-top: 8px;
  color: #61666d;
   font-size: 12px;
  line-height: 1.3;
  text-align: center;
}
.q1080p-exp .pic {
  margin: 20px auto;
  width: 180px;
  height: 180px;
  overflow: hidden;
}
.q1080p-exp .btns {
  text-align: center;
  font-size: 14px;
}
.q1080p-exp .btns .btn-getvip {
  display: inline-block;
  vertical-align: top;
  width: 124px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #ffb000;
    line-height: 40px;
  border-radius: 4px;
  margin: 0 10px;
}

.follow-dialog-wrap-exp {
  width: 420px;
  border-radius: 4px;
  background: #ffffff;
   overflow: hidden;
}
.follow-dialog-wrap-exp .follow-dialog-window {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 420px;
  background: #ffffff;
   left: 50%;
  margin-left: -210px;
  border-radius: 4px;
}
.follow-dialog-wrap-exp .follow-dialog-window .title {
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #18191c;
   border-bottom: 1px solid #e3e5e7;
   text-align: center;
}
.follow-dialog-wrap-exp .follow-dialog-window .title .close {
  position: absolute;
  right: 20px;
  line-height: 50px;
  width: 12px;
  height: 50px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAN1JREFUKBWdkjEOwjAMRe30QlyBMyBlAbFVlRBHQLCAOAFDK8FSugTYWRAn4EiNiVNcNSVlwIubH7/Y+SnAv1GU5pFXt/EvvqjMKC/Ni4hQcSGpZAu2NkMgA2DhrhD2iEgop3vAgaASnU0nT9EFQIRlOtNX1luIF30wBnxBXdCNsQGidbcD73MEnRoJoDhfFmTp4C68S+d6Jbpkb4QsOPuRXAcGLEIWMyeAgjtwB2dKzNV2vAD4uMSd++aw5qEhgAs4+qAfjywcYy41CIB/Nx61rk/8R3i9/ZCqgSx1bzXyhJUvBN//AAAAAElFTkSuQmCC)
    no-repeat center;
  cursor: pointer;
}
.follow-dialog-wrap-exp .follow-dialog-window .content {
  padding: 0 36px;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .info {
  font-size: 12px;
  color: #9499a0;
   margin: 14px 0;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .info .uname {
  color: #61666d;
 }
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list {
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list ul {
  position: relative;
  min-height: 185px;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  ul
  .follow-group-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #ffffff;
 }
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list li {
  padding-bottom: 24px;
  font-size: 14px;
  color: #18191c;
   cursor: pointer;
  list-style-type: none;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li.special-group {
  padding-bottom: 16px;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list li label {
  cursor: pointer;
  display: block;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable {
  color: #9499a0;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable:hover {
  color: #9499a0;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  label.disable
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALtJREFUOBHtlTEKwzAMRSXFsaHgoZCtZ+gteqGeJBfqLXqGboEOhUKV1K6/aSBjUmdrtMgI6SH94ZspRdc9D33QNlA8UaQ9arOD6S7El1rsuWl2NwZMo15dbbytxLDwbBYaY4ik7zC8+uFh2R4NNnPWeFdXZhHp24wFnORZr6qt4Exs9gtsOgMGWALNlp45BY3vzEgsGQtr5Q1YruSm4X9omPwMFlQamQFvhDnCz0qBYIC1usFme17zC/gAQnNdSvJ01qkAAAAASUVORK5CYII=);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  .special-tip {
  padding-left: 40px;
  font-size: 12px;
  color: #9499a0;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"] {
  font-size: 18px;
  width: 0;
  height: 0;
  cursor: pointer;
  vertical-align: middle;
  display: none;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]
  + i {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 18px;
  vertical-align: middle;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAMZJREFUOBFjZACCY8cuSP/4+6ebkYHB4T8DgyRIjFgA1PMcqOcABzNLqZWVwVNGkGE///45w8DANIGZ898iOxOT58QaBlJ36MwZyb/fmeIYGP4VsDOzmDDuO3xmGSMD00VHW6NOUgxCV7v/8Lny/wz/9JlA3gS5DF0BqXyQGSCzGIAuBAYBdQDILCbqGIUwZdRARFiQyxoNQ3JDDqFvCIQhqDwDFUEIR5PHApkBMosJVDhCyjPyDILpApkBMov6BSzIBmpWAQCEVFxRmF8CTgAAAABJRU5ErkJggg==);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAL5JREFUOBFjZACBVTelGb7/62ZgZHBg+P9fEixGLMHI+JzhP8MBBk6mUoYw9aeMEMP+nmFgYpgANGMRQ6zWc2LNAqtbfA3kgDiGfwwFDJzMJowMC68vY2D6fxFoUCdJBqErXnytnOEfoz4T2Jsgl1EOFkHMWnjtP+VmQU0AmsVENcOgBo0aSHmIjobhyAhDUHkGKYIo8y/IDKBZTODCEVSeUQ7iQGaxgEva78ACdvE1kJEUFrBMwAIWBKhYBQAAjRZDKb7Y9b8AAAAASUVORK5CYII=);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:checked
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li
  input[type="checkbox"]:checked:hover
  + i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeJJREFUOBGtlEsvA1EUx/932ppqGtUKiVdFRaQSsbITQYsFiS9g5RvYdG/rWxCJWEpIvFmIjYV0UxKPaIkmNFUqqi/j3Dud1nikU9xF5/bO/f/OOf879zDwsXjWgnxuDgyDUJRGsWb0h7EoFOzDZA5gqvOGqbBskPQuo4wf9sVhsvRKIrO/w3gMF2dJoswfQla8TJZJFXtWiNJTK2PG60K9bCrFJf/NpX/GZ/5GG1aHWyGbJPQ4ZUwfRotiqTgzOOlvqMbKkArjkng6r1NWBOyrs2KNMrOZVdlRLIXZYOx3wF4qbcPvRk2V6lkw/oqx7QiSubfKgV5HFbZG3HAWDuAkkcbIVgQPGT2Mk3Uld5PwdNKDdV9r8fQ67BZsE6zeqp7fRTIDP8HuP3mnpakDjrfY0eWQMdZsFxnxMndG29Bks4j9kecsfJth3KZymv7Lk2E+pGirHsrmeKK96JOiKGCMidfRlywGNsI4T2a17d8+dRleUgbju9d4KRitwWKvOVFmORiPoAPyhYO7FCb3rpHOq4YnMnlxAKHHDH9dduhK/ribX60J8nT56gk8c6ODYeHk9rf3+UsQ6o3UHKg5/tcgliQ6LV3Jf2BSgzUHJN62eacF2BJ9I6W2YTSC0JCWM4j1DpU/mpmyFApZAAAAAElFTkSuQmCC);
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li:last-child {
  padding-bottom: 0;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list li:hover {
  color: #00aeec;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  li:hover
  .special-tip {
  color: #61666d;
 }
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list .errmsg {
  color: #ff6699;
   margin: 5px 0 10px 0;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list .add-group {
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .add-btn {
  height: 34px;
  line-height: 34px;
  padding: 0 34px;
  border: 1px solid #9499a0;
   border-radius: 4px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAC5JREFUKBVjYMABZi5a9R+EcUgzMOGSICQ+EjQy4gs5fAFEduDgNHQ0HhnIT6sAudAOjNLnY/wAAAAASUVORK5CYII=)
    no-repeat 10px center;
  font-size: 12px;
  color: #61666d;
   cursor: pointer;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .add-btn:hover {
  border: 1px solid #00aeec;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group {
  height: 34px;
  line-height: 34px;
  border: 1px solid #00aeec;
   border-radius: 4px;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  input {
  border: none;
  font-size: 12px;
  width: 200px;
  margin-left: 10px;
  padding: 0;
  box-shadow: none;
  height: 100%;
  outline: none;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  .limit {
  float: right;
  margin-right: 10px;
  color: #9499a0;
 }
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list
  .add-group
  .input-group
  .submitGroup {
  float: right;
  height: 34px;
  width: 90px;
  background: #d9f1f9;
  border: none;
  border-left: 1px solid #00aeec;
   border-radius: 0 4px 4px 0;
  font-size: 14px;
  color: #00aeec;
   cursor: pointer;
}
.follow-dialog-wrap-exp .follow-dialog-window .content .group-list .empty-tip {
  font-size: 12px;
  color: #61666d;
   margin-top: 15px;
  display: none;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list::-webkit-scrollbar {
  width: 6px;
}
.follow-dialog-wrap-exp
  .follow-dialog-window
  .content
  .group-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #999999;
}
.follow-dialog-wrap-exp .follow-dialog-window .bottom {
  height: 76px;
  text-align: center;
  margin: 0 36px;
  border-top: 1px solid #e3e5e7;
 }
.follow-dialog-wrap-exp .follow-dialog-window .bottom .btn {
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-top: 18px;
  background: #00aeec;
   border: none;
  border-radius: 4px;
    cursor: pointer;
}
.follow-dialog-wrap-exp .follow-dialog-window .bottom .btn:hover {
  background: #00aeec;
 }
.follow-dialog-wrap-exp .follow-dialog-window .bottom .btn:disabled {
  background-color: #e3e5e7;
   color: #9499a0;
   transition: all 0.2s;
}
.follow-dialog-wrap-exp .follow-dialog-window .layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1;
  outline: none;
}

.app-v1 p[title^="ã€Œ"],
.app-v1 p[title^="ã€Ž"],
.app-v1 p[title^="ã€"],
.app-v1 h1[title^="ã€Œ"],
.app-v1 h1[title^="ã€Ž"],
.app-v1 h1[title^="ã€"],
.app-v1 h3[title^="ã€Œ"],
.app-v1 h3[title^="ã€Ž"],
.app-v1 h3[title^="ã€"] {
  text-indent: -0.6em;
}
.mac .app-v1 p[title^="ï½ž"],
.mac .app-v1 h3[title^="ï½ž"] {
  text-indent: -0.1em;
}
.mac .app-v1 p[title^="ã€Š"],
.mac .app-v1 h3[title^="ã€Š"] {
  text-indent: -0.4em;
}
.mac .app-v1 .roll-btn {
  transform: translateZ(0);
}
.win .app-v1 p[title^="â€œ"],
.win .app-v1 h3[title^="â€œ"] {
  text-indent: -0.1em;
}
.win .app-v1 p[title^="ï½ž"],
.win .app-v1 h3[title^="ï½ž"] {
  text-indent: -0.25em;
}
.win .app-v1 p[title^="ã€Š"],
.win .app-v1 h3[title^="ã€Š"] {
  text-indent: -0.5em;
}
.harmony-font {
  background-color: #f1f2f3;
   font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .harmony-font {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
.app-v1 {
  max-width: 2560px;
  margin: 0 auto;
  background-color: #ffffff;
 }
.pr-chat-room {
  position: relative;
  height: 100%;
  width: 350px;
  min-height: 400px;
  border-radius: 14px;
  margin-bottom: 24px;
}
.pr-chat-room .chat-container {
  height: calc(100% - 46px);
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  border: 1px solid #e3e5e7;
   border-top: none;
}
.player-full-class #playerWrap {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 99999;
}
.player-full-class #playerWrap #bilibili-player {
  height: 100vh;
  width: 100vw;
}
.has-chat-app .player-full-class #playerWrap {
  width: calc(100vw - 350px) !important;
}
.has-chat-app .player-full-class #playerWrap #bilibili-player {
  width: calc(100vw - 350px) !important;
}
.player-full-chat {
  background: #11111d;
  position: fixed;
  height: 100vh !important;
  top: 0;
  right: 0;
  z-index: 100;
  border-radius: 0;
}
.player-full-chat .chat-container {
  border-radius: 0px;
  border: 1px solid transparent;
}
@media (min-width: 1681px) {
  .pr-chat-room {
    width: 412px;
  }
  .has-chat-app .player-full-class #playerWrap #bilibili-player {
    width: calc(100vw - 412px) !important;
  }
}

#bilibili-player embed[data-v-50eca6a8] {
  width: 100%;
  height: 100%;
}
#bilibili-player .player[data-v-50eca6a8] {
  height: 100%;
}
.video-container-v1[data-v-50eca6a8] {
  max-width: 2540px;
  min-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
}
.video-container-v1 .right-container[data-v-50eca6a8] {
  width: 320px;
  flex: none;
  margin-left: 30px;
  padding-bottom: 20px;
}
.video-container-v1 .right-container.small-mode[data-v-50eca6a8] {
  width: 350px;
}
.video-container-v1
  .right-container.small-mode
  #right-bottom-banner[data-v-50eca6a8] {
  height: 175px;
}
.video-container-v1 #comment[data-v-50eca6a8] {
  margin-top: 24px;
  z-index: 0;
  position: relative;
}
.video-container-v1 #live_recommand_report[data-v-50eca6a8] {
  padding-left: 0;
}
.video-container-v1 #bannerAd[data-v-50eca6a8] {
  max-height: 106px;
  border-radius: 6px;
  margin: 24px 0;
}
.video-container-v1 #bannerAd img[data-v-50eca6a8] {
  border-radius: 6px;
}
.video-container-v1 #right-bottom-banner[data-v-50eca6a8] {
  margin-top: 18px;
  border-radius: 6px;
  width: 100%;
  height: 160px;
  overflow: hidden;
}
.video-container-v1 #right-bottom-banner span[data-v-50eca6a8] {
  position: absolute;
  bottom: 3px;
  font-size: 15px;
  left: 10px;
    text-shadow: 1px 1px 3px #000;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-line-clamp: 1;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  .video-container-v1 #right-bottom-banner span[data-v-50eca6a8] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
}
@media (min-width: 1681px) {
  .video-container-v1 .right-container[data-v-50eca6a8] {
    width: 360px;
  }
  .video-container-v1 .right-container.small-mode[data-v-50eca6a8] {
    width: 411px;
  }
  .video-container-v1
    .right-container.small-mode
    #right-bottom-banner[data-v-50eca6a8] {
    height: 205px;
  }
  .video-container-v1
    .right-container.small-mode
    #right-bottom-banner
    span[data-v-50eca6a8] {
    font-size: 16px;
  }
  .video-container-v1 #right-bottom-banner[data-v-50eca6a8] {
    margin-top: 20px;
    height: 180px;
  }
  .video-container-v1 #right-bottom-banner span[data-v-50eca6a8] {
    font-size: 18px;
    line-height: 24px;
  }
}
.full-premiere-container[data-v-50eca6a8] {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1111;
}
body.player-mode-blackmask #heimu[data-v-50eca6a8] {
  z-index: 1002;
}
#comment .bb-comment .no-login .baffle[data-v-50eca6a8] {
  z-index: 10;
}

.v-recommend-inline-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: inherit;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.2s linear;
}
.v-recommend-inline-player.visible {
  opacity: 1;
}
</style>