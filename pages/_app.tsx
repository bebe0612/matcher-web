import type { AppProps } from 'next/app'
import "./globals.css";
import axios from "axios";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    axios.defaults.baseURL = "http://ec2-13-125-198-121.ap-northeast-2.compute.amazonaws.com";
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("gatherschool-token")}`;
  }
  return <Component {...pageProps} />;
}