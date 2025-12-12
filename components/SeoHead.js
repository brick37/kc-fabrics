"use client";
import Head from "next/head";

export default function SeoHead({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title} | KC Fabrics` : "KC Fabrics"}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}