import React, { useEffect } from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  console.log("hhi")
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ecb518" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <div id="fb-customer-chat" className="fb-customerchat">
          <MessengerChat
            pageId='104681471710130'
            language='en_US'
            themeColor={'#F2F3G2'}
            height={24}
            loggedInGreeting='Hello logged in user!'
            loggedOutGreeting='Hello stranger!'
            autoExpand={true}
            debugMode={false}
            onMessengerShow={() => { console.log('onMessengerShow') }}
            onMessengerHide={() => { console.log('onMessengerHide') }}
            onMessengerDialogShow={() => { console.log('onMessengerDialogShow') }}
            onMessengerDialogHide={() => { console.log('onMessengerDialogHide') }}
          />
        </div>
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}


const MessengerChat = () => {
  console.log("hi")
  useEffect(() => {
    setTimeout(() => {

      var chatbox = document.getElementById('fb-customer-chat')
      chatbox.setAttribute("page_id", "104681471710130")
      chatbox.setAttribute("attribution", "biz_inbox")

      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v11.0'
        })
      }

      fb(document, 'script', 'facebook-jssdk')

      const fb = (d, s, id) => {
        var js, fjs = d.getElementsByTagName(s)[0]
        console.log("hi")
        if (d.getElementById(id)) return
        js = d.createElement(s); js.id = id
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      }
    }, 2000)
  })

  return (
    <>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat">
      </div>
    </>
  )
}
