import { createTheme } from '@mui/material/styles';

// dark
// {
//     "secondary_bg_color":"#1c1c1d",
//     "button_color":"#3e88f7",
//     "section_bg_color":"#2c2c2e",
//     "hint_color":"#98989e",
//     "link_color":"#3e88f7",
//     "section_separator_color":"#545458",
//     "section_header_text_color":"#8d8e93",
//     "bg_color":"#000000",
//     "header_bg_color":"#1a1a1a",
//     "subtitle_text_color":"#98989e",
//     "text_color":"#ffffff",
//     "destructive_text_color":"#eb5545",
//     "button_text_color":"#ffffff",
//     "accent_text_color":"#3e88f7"
// }

// light
// {
//    "secondary_bg_color":"#efeff4",
//    "button_color":"#007aff",
//    "section_bg_color":"#ffffff",
//    "hint_color":"#8e8e93",
//    "link_color":"#007aff",
//    "section_separator_color":"#c8c7cc",
//    "section_header_text_color":"#6d6d72",
//    "bg_color":"#ffffff",
//    "header_bg_color":"#f8f8f8",
//    "subtitle_text_color":"#8e8e93",
//    "text_color":"#000000",
//    "destructive_text_color":"#ff3b30",
//    "button_text_color":"#ffffff"
//    "accent_text_color":"#007aff",
//}

export const createMUITheme = (themeParams: ThemeParams, isDarkMode: boolean) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#000000', // bg_color
        paper: '#1c1c1d',   // secondary_bg_color
      },
      primary: {
        main: '#3e88f7',    // button_color, link_color, accent_text_color
      },
      secondary: {
        main: '#8d8e93',    // section_header_text_color
      },
      text: {
        primary: '#ffffff', // text_color
        secondary: '#98989e', // subtitle_text_color, hint_color
        disabled: '#545458', // section_separator_color
      },
      error: {
        main: '#eb5545',    // destructive_text_color
      },
      action: {
        active: '#3e88f7',   // accent_text_color
      },
    },
  });

  // Light theme
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#ffffff', // bg_color
        paper: '#efeff4',   // secondary_bg_color
      },
      primary: {
        main: '#007aff',    // button_color, link_color, accent_text_color
      },
      secondary: {
        main: '#6d6d72',    // section_header_text_color
      },
      text: {
        primary: '#000000', // text_color
        secondary: '#8e8e93', // subtitle_text_color, hint_color
        disabled: '#c8c7cc', // section_separator_color
      },
      error: {
        main: '#ff3b30',    // destructive_text_color
      },
      action: {
        active: '#007aff',   // accent_text_color
      },
    },
  });

  return isDarkMode ? darkTheme : lightTheme;
};
