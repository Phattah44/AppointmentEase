/// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom'
declare module '*.wav' {
    const value: string;
    export default value;
  }
  
  declare module '*.mp3' {
    const value: string;
    export default value;
  }
  