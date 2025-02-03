import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    // Setelah 3 detik, tampilkan halaman utama
    const timer = setTimeout(() => {
      setShowMainPage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const splashHTML = `
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>CSS3 Spinning Preloader</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #202040
        }

        .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150px;
            height: 150px;
            background: transparent;
            border: 3px solid #2e2e50;
            border-radius: 50%;
            text-align: center;
            line-height: 150px;
            font-family: sans-serif;
            font-size: 17px;
            color: #64ffda;
            letter-spacing: 4px;
            text-shadow: 0 0 10px #64ffda;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center
        }

        .loader::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            width: 100%;
            height: 100%;
            border: 3px solid transparent;
            border-top: 3px solid #64ffda;
            border-right: 3px solid #64ffda;
            border-radius: 50%;
            animation: animateCircle 2s linear infinite
        }

        .loader span {
            display: block;
            position: absolute;
            top: calc(50% - 2px);
            left: 50%;
            width: 50%;
            height: 4px;
            background: transparent;
            transform-origin: left;
            animation: animate 2s linear infinite
        }

        .loader span::before {
            content: '';
            position: absolute;
            top: -6px;
            right: -8px;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            background: #64ffda;
            box-shadow: 0 0 10px #64ffda
        }

        @keyframes animateCircle {
            0% {
                transform: rotate(0deg)
            }

            100% {
                transform: rotate(360deg)
            }
        }

        @keyframes animate {
            0% {
                transform: rotate(45deg)
            }

            100% {
                transform: rotate(405deg)
            }
        }

        footer {
            position: fixed;
            bottom: 10px;
            width: 100%;
            text-align: center;
            font-family: sans-serif;
            font-size: 13px;
            color: #64ffda
        }
    </style>
</head>

<body>
    <div class="loader">Loading...<span></span></div>
    <footer>© 2024 All rights reserved | notYoursupportSystem™</footer>
</body>

</html>
  `;

  return (
    <WebView
      style={styles.container}
      source={showMainPage ? { uri: 'https://xdtools-v-11.vercel.app/' } : { html: splashHTML }}
      userAgent="YourAppWebView"
      scalesPageToFit={false} // Mencegah zoom in dan out
      bounces={false} // Mencegah efek bouncing saat di-scroll
      injectedJavaScript={`
        const meta = document.createElement('meta'); 
        meta.name = 'viewport'; 
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
        true;
      `}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
