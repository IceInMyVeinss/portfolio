"use client";

import React from 'react';

export function MenuItems({item}: any) {
  return (
    <div>
      <a className="px-4 py-2" href="{item[0].link}">
        {item[0].label}
      </a>
      <a className="px-4 py-2" href="{item[1].link}">
        {item[1].label}
      </a>
      <a className="px-4 py-2" href="{item[2].link}">
        {item[2].label}
      </a>
    </div>
  );
}
