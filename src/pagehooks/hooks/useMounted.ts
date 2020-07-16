import React, { useState, useEffect, useRef } from 'react';

export default function useMounted (callback: Function) {
  useEffect(() => {
    callback()
  }, [])
}