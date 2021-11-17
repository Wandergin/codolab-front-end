import React, { useEffect } from "react"
import PropTypes from "prop-types";
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <MessengerCustomerChat
          pageId="104681471710130"
          appId="712198986421392"
        // htmlRef="<REF_STRING>"
        />
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

      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "104681471710130");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v11.0'
        })
      };

      fb(document, 'script', 'facebook-jssdk')

      const fb = (d, s, id) => {
        var js, fjs = d.getElementsByTagName(s)[0];
        console.log("hi")
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
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
