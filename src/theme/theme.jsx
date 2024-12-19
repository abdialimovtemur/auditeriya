import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiBox: {
            styleOverrides: {
                root: {
                    '&.background': {
                        backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/18f6/0071/a458d1b65fd57b9af219c67851928e99?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dL9l85ZEsyw50NjUPULOXSu92iUETtaHDgusn4XkZv~fkNuuu6goGP~hu1OdcQVTnvFtwpq9qBC61GZi0yXRcEaxhZ0G1yss5YK7BndXDu6-t385eMrRxRH4F5yyrG3b-wpb4Qtu-tYH-wC5wLXsc1-CGuDnOSzc-6T~XxxYGkvGx3~Cr6Bcg2TCtA71Oit37F~BN4FBsQr9-w2~zMOFdaFzcI4k5puHTe~Qc09nj9k3v1C9nHWbg0ddjMqcfcgfCJV~AtMm1s4vl9LH24XWzhlRf1a1NvEyndoxAVR8N1Jnt1eYpoDrXgSqON1Q161JIG0vJGuaABBVsKcSEMLjDw__)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'rotate(-10deg)',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
              buttonHeader: {
                color: "white",
                backgroundColor: "transparent",
                border: "2px solid white",
                borderRadius: "50px",
                fontSize: "15px",
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "400",
                lineHeight: "19.36px",
                textTransform: "none", 
              },
              buttonHeader2: {
                color: "white",
                backgroundColor: "rgba(236, 143, 50, 1)",
                border: "none",
                borderRadius: "50px",
                fontSize: "15px",
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "400",
                lineHeight: "19.36px",
                textTransform: "none", 
              },
            },
          },
    },
    palette: {
        custom: {
            buttonHeader: {
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "10px",
            },
        },
    },
    typography: {
        fontFamily: 'Ubuntu, sans-serif',
        heroTitle: {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeightBold: 700,
            fontSize: '62px',
            lineHeight: '60px',
            background: 'linear-gradient(45deg,rgba(255, 255, 255, 0.4) 20%,rgb(255, 255, 255) 80%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
        },
        heroDesc: {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '27.58px',
            color: 'white',
        },
        cardTitle: {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '24.13px',
            color: 'rgba(173, 173, 173, 1)',
        },
        cardDesc: {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: 500,
            fontSize: '21px',
            lineHeight: '24.13px',
            color: 'white',
        },
    },
})
 