"use client";

import React from "react";
import Error from "next/error";

export default function page() {
  return (
    <html>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
