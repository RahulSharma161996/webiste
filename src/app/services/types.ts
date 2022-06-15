export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
      "--background-default": "#fff",
        "--header-background": "#141B1F",
        "--fadeGrayfont": "#fff",
        "--color-homepage-light": "hsl(204deg, 67%, 85%)",
        "--color-homepage-dark": "hsl(202deg, 71%, 90%)",
        "--color-text": "hsl(222deg, 22%, 5%)",
        "--color-background": "hsl(0deg, 0%, 100%)",
        "--color-blurred-background": "hsla(0deg, 0%, 100%, 0.85)",
        "--color-primary": "hsl(245deg, 100%, 60%)",
        "--color-secondary": "hsl(333deg, 100%, 45%)",
        "--color-tertiary": "hsl(255deg, 85%, 30%)",
        "--color-decorative": "hsl(200deg, 75%, 65%)",
        "--color-muted": "hsl(210deg, 55%, 92%)",
        "--color-muted-background": "hsla(210deg, 55%, 92%, 0.85)",
        "--color-info": "hsl(245deg, 100%, 60%)",
        "--color-success": "hsl(160deg, 100%, 40%)",
        "--color-success-background": "hsla(160deg, 100%, 40%, 0.1)",
        "--color-sun": "#F1BC33"


    
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
      "--background-default": "hsl(210deg, 30%, 8%)",
      "--fadeGrayfont": "#B3B3B3",
    "--color-text": "hsl(0deg, 0%, 100%)",
    "--color-background": "hsl(210deg, 30%, 8%)",
    "--color-blurred-background": "hsla(210deg, 30%, 8%, 0.85)",
    "--color-primary": "hsl(230deg, 100%, 67%)",
    "--color-secondary": "hsl(333deg, 100%, 52%)",
    "--color-tertiary": "hsl(53deg, 100%, 50%)",
    "--color-decorative": "hsl(200deg, 50%, 60%)",
    "--color-muted": "hsl(210deg, 38%, 15%)",
    "--color-muted-background": "hsla(210deg, 38%, 15%, 0.85)",
    "--color-info": "hsl(230deg, 100%, 67%)",
    "--color-success": "hsl(160deg, 100%, 40%)",
    "--color-success-background": "hsla(160deg, 100%, 40%, 0.1)",
    "--color-error": "hsl(340deg, 95%, 60%)",
    "--color-error-background": "hsla(340deg, 95%, 43%, 0.1)",
    "--color-alert": "hsl(30deg, 100%, 50%)",
    "--color-homepage-light": "hsla(212deg,32%,8%,0.85)",
    "--color-homepage-dark": "hsla(205deg,24%,15%,0.85)",
    "--color-homepage-bg": "hsl(210deg, 30%, 8%)"
    }
  };