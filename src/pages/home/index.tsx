import { Product } from "../../components/product";
import { SHome } from "./styles";

export const Home = () => {
  return (
    <SHome>
      <h1>Home</h1>
      <Product
        title="Produto não sei o que não sei que lá"
        price={50}
        category="Produtos"
        assessment={4.5}
        imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9Twd5DvdxKv91AvNxNwN31+/3w+fzm9fr5/f6a2Ore8vjr9/tUwt6g2uuJ0udnx+GC0ObU7vbM6/Su3+5zy+O+5fG14u9hxeDX7/Z6zeSR1ejG6POd2eup3e2H0ebNshM5AAASj0lEQVR4nO1d67aqug6W1qKIICoIAhPf/y0PoE3TC9CisNcZg+/HHns5uTRtmqS5sdtt2LBhw4YNGzZs2LBhw4YNGzZs2PD/gWOdxqdLdUrr8EdPDG75qUyKIsku6e1Hz5yN8BTtKQchSfz1iI5NQgilzGvB2mfS1/0XA52JuiDUk0AJq74g8pBqT/QYKerfDdkJYUI8Aygp8mDeAy8aeW+Q5FcbwAnx3jiaN5Gng/PzbtkAfT2N6QIUTCAZHs6bRrd1DDPCxh5IXgvRMQS/GCWwp9Fh2g+Xcfq655XLUWNCMTWgbkyRrYRIqT5fjDL5HXTVVSzxiDqR7kVsT6hKNsnOFg8LVX5glHjZtbqUkbQz19yLORKilFX3Xqz4z/xKFWHBLEYVE+UW+qq5nDrnBforWU2iHsRbafSQ/nRTBT5NxpcxjKTr6f6qKPgH4ozi15QM4QqDIpX2Rz+Vx8zow/AIjkZaQEZeR+2SIBOvG3vUDxGCItznxgsenkQjeQ0pDj+TLtyXOn0dXnBV9CMSJnDlbEPMBO5U4Ug98wZ6SleR5Dn0OJgIuor9BruQ6iwK8CuJ/YwCJ8WX0DEODGAmkq+Hb4GUv26cZWQdQK7aBS8i/d0fe1jNryVmPv4tEj7rU9teUgM0kS1VH1t9bJL74KXNV2O3wgHkzOSlkiZgFG+zEBssNBtdwA41f9IKbPqgDrMp7Ua00+4SB8cWT+ITsp+cjK9RUZcd8SAmUvCvjFid4flr6fIn/uIzMkv74og5lVz637Can7J5OGoX1vkKwYddxlSFfAO20vsjEGbdD83T4DqK6UL5xzh/3jQpSQWwM4Am/hVRvLc/LjjyznzcPhS62PkPRCLDR6y9g4lScuaZ5wOyBxelxMURE5odAtTlNPTHX2y3b+eDWzTU6a5zpNPIPKex5pzCpQ+J8SwKd4HmuKKFG7vVa6kLrpeczzFXmUSaOd7PjYTFjxezKYQ73yzqLPSf7kJ8HmCc7rdGeAmdPcbh2hQy5zsl/5znuAtb44hTOHjs/hFO8yQNdkW8Z8iVxPBfp7DSZKmjqFltH4K2cDvFxHqYiroJG5ClS1OYzjItclMcjp5cHlGvpS0ec0yLO3IhIweik5s+X0vj32e8KEQEXjHDEof1aPjUDvocf4Snu0g7iFXrxcsJraI9J1RrWd5wPrTeRIGIxNG3HwkpDmat+eH05B5ddoP/eRGzDliKjQc6EP9k+xh+Ap5hTDmCv8h2aIgnxfSjZbXVGdTxvfORfQZH7GwS5FZDm873xK92riVutNnzzmxUTupCxKm8PZa+Z2r+fRAgw52U6CykLrZFgNZKVn5YRdrIDnjt0mbpbnfjr7JxJ2Ziv6mXCzPHStpc+OZYPtGNqwubLS+kjMHOFra4zWRxUbq4OtyJCMK07V0LTowMcimBBd5PcrwPMdJ5g3YCCNMp8+mMxKgpyIEEKp0KgoDh5+remQPuuKRTdrNQegPiEgnaKZbPXXb/t+DHmClnEtpnzS5o4fuHw/l8PJ8PB9/vfoCDSnvJRPzistbpsAMw37irBm1Cr4giSsmeCOwJpV5UiEsmEklA0KySNOSNvc0P73l8yaKRTEozKInKKn7cQ5MAg8Dz4lGLHjzbRFa+fviIr0nUZTBTLcHNDuydSh0V1/gRSqSsGeTeCfOCb8TDLb0kPd/NI8xIKiFeGdfHD53g//pbhUJxZN8d7k3pdcv2I9I0OllR5e1y8m24TsaQOMh4XZ7+r9ZtCH0JAP+HU0zvC5RLUzWIdbbhoc5mjI0xRjEYmzNNyX1xWRo2iYseaDmMsigqkiwrr5eqOv3Fcfx3qqrLtcyypNWTrLvE5YFZumDi1zPW6z0UMGlj0tvx0FovI49sLZ3D8UbxAybWtp2SolmEyFulpjhrtBFaZFVewRCtE16Fq4NVzTVhZELztNbBr4k8/nnD5L1pezUf7SXGYe9SEZG3PvJ6eD7iVzSqhShJ8p8lgAWPZD/4Krr3yuaOJlQY3Mx+BL7wBQg/jB/mVTKySylRc8Ln4Xwa0+fZXTlz34DhXFz2yE5XrN0gfJSDb2ckSr9dyGc5vHwdtHMdhLIdg2cikUF75HV8S1bf+DXuialYp9Vm4GFSD+/xHB7t4OPTpIQAuQpM8oeaEvwt6SsMUb9WjFW1LwxFeTjHeTzaQchTxdkEx2SyO+alSfpQcpmzjmGm0deqoqR5bxMe61J4CpxLM1zT2cC93EZkfd1TUFcGsd7yqut+DCqNP1tzIgfDF84XkmBA6+BuIotKHCmnVpQGAFeEJ6YRSSfdRjIeevWron6ATZGXXRQNDFdijCAV70S/ch+UfLx/VkxdAlrYeziCq1JsRemfupmBTZG3BlQhm3cGALcNjfUfNV/VXas5JbYxjRuTi61IZpAa4I8SLIXEzDzhFhoeILaD7s4/x/JI22W0kjiNVN/byinz4vNTKYPCRxAVs30NEAUQwuYPmNR4x6OQmJXZiHCJQyk5Dc0K7A/y2Z/IfThwS5hesqIosks6tGMEw3HOAAKHZu0my/z9VGmDlAfKSDUsEn2QcR8hBtaMeR6Pp4jrstZSj05GRhaz9Ml9BCfbCOPfpKr5qdx4TCDJRrcTGFNvlQiSkJlCC4erWnlJrqbZE5zeyP8elV0PvB/HzUWUzsPYxOkObOw+RBOMipnccEKgJpUipFVfHAP/nPLm4wqHsZJolAZCpmuR4IkdX4CmMIWhrwbzzzMWtCHJ0sVgQPRMZg080TIOlxmhWhabhCxQia0BgzSFPpbB5gTUwHvCajgKxrAIOWElPlTlcBRqwqoWSdhTjXAwGuLs5RCBRjcAWH6txhBGt425gtLJBsIbibjAzv4BWROJc68eCDwNE2jkaeH+fcL/2tlIIjXA7EBBZrOlgXfTt5e++LfhBiEd9pqp8oQbxGna0qWVm413DrEBrI92KP73hsEgHaWvg3aH7lK3TioXB3BDULkeE4YDyFUG1GP72iUq9I17VlnDoSJPOB/0RRSpL9aPww6G91zr7B95k9DuUXPCHQ6bIP30GDxMnFMAS5Eie03Z382aUBq/Ntu+fNNUjF9Co5rLAJE04PA4haEMQ9FS9HUYdF0j3eUUu4fZ0SYO6mxtyo4FXlgqGPKVNFlkgEEoSCciN5cPxOBVQnjEzDFvLMT1ofpiBOOq4o29rp5TfABwGxFnRm0jggxy9FklaCi6QAint6GZC9GfHT0i8EqVNfik7d2eh0SJScs8rSg0pI8JJeMauoeNqCrRuRSiY7nBG2CwegwUGthQuO0ci3N2O0i9UX6f27NArJJJL89eQyFNXQvw/aGuFnw/uaZVIRPLYNAfrSg09BXCksZtQLAP1f3Lxb5jahwmwaRorCjUb4sRhY55zyBLVeXcDAnZcUga3bCINmkbul9HsQadRgT6UD3Dw45xqkk5yDaNLk0bC5tG32iyMejEVjAibbsFM44WGgG6RrTYiPo2PCg3uRSRgJ9HL8UGfnPJFVfjN7phmngTMBwpX+rZwj5cLw4QugcZ7C+HsMpDOx+6Hy704WuGkINlCgFM0zrBH+1zqbUFMowlG4vCG/3H+h3WkR7YwEa3sNDOtrWd4g6RJKTZJ+qmUgevbV2x6jCBtnOO/DTGrSbY35JEcXRCo9KuqsfOFwbPJhy4SHgB2WCVsId8beYzIDIkrJpT+WhXC/+ILtqbYRINHXjA5m45HmSDldYX/tLBOqM7cglbKP4USV8hHQxxvsGOw6ZQGPZ5C9lgoTCQz3tYHSC3Po0mdzdnp168iLiFIdBXG/PwjH3ohKzo9h5w/+QxOETdKMfq/bAmmkpuADnTy3t/dJOf9dQVc4NaFP/oDzncVTdlTP6h5w905PxAasw1ntwAYuBtN6Zo/xhwl7P/6D4xTrQaP8TRn2HccI/Gqe5aUhhlLA9HmHkfu1LEgAeqnKqI8Pb0UWWePC0GLKI/w+MOS8wg03VwUiNASpohOf1QrTxtdDrO9zxt0lzNZxQQc8tn6Tola47XveTvs7DwUjkXgzbmdeT8JJhScJibR1IAzGZh6dwGzwo9Qjl6biEf+4eq+TSm/EZDMtZxwqKYBHqAIAeGYbBrHkruJCktU/mDUpZ8lJSaKwUEC9J/J30JnCAsY3SCE8lXyuiPJ621tsNBMleSxhgpUlmYQctUNLWBME/nlAmKACZ2FhiSr1r4uZ7zVTplCx5KVYFRkj3Ei4GhJEeZEDbOPkCcQysHMGHDg0r0H6WWS0s955zvWktVZZRe+buBd2S5KYSNexP86wCPg9B+u3IPj1IvVaBWhrSGRk+CYe2WfHTMABmD8pNFLMquUwKCMIqV0yDEPlqZFqat4aBZgJRcZlZ8+bEh0adPFBbJWIoMR44btwol0X1B0zVCJRpLdmbmQH9wUOXV56FyAQiGyBF1q7pGbkn1T3fTEAR9g7mFlghSb+SQrh8kwnl8KjI2tFPEUfMGARjxBuwRN9RjJTPRNZWNsGoWn4rEEuSuC8LHX6andMOl++xnXbHCkaquvuopqfLb4UOQGIG9+xzV7n9oq5tXMVbgRYlnTuCci6D7cMWI16yrZWVJGef3Yy30mq3eF5FkeqqbrtZ9vHitlXaXBXqcBPV1quq3KxPFi01Df5JTuwJEaaqmXtK+4bJYwXNQG2tWhtGte5EkWXl9VdVf3DRNmrb/aeJTdXmVWVIU/erbP7Alr1q4Ujaoq8i5gpepVcBzK4FpvM6nZv67Wm66dMO9D4TgW7wa3+vFypSn99cApR7dm2u3M1x2phP6LhnX9BaA0v8v+mJ0XTGKrinGL9ezb4xBei3bv/K8bm8T6GCI/JLHe1plBf2isQmnrFOsRfmX3yRLiV+wTn+aofrRVtAe73lclUXXY8eVdel+HyWXv7wOD4Z1ehlmdTGIGoiRiw5H/JWOiHXiQukxxLyoENmnEzIE+kS5ZGLOhW2fKNSsLd71baK0PlFHYOipwDOEENb4MJl1ry/Uj818BgjEEk6lAYOH3bIh5Vew79eG4pHGU6qIIEwnz6/ZCsu+5x7KUjAxl0h8svAHQIbv8u3MXPomIhr0gFQ9Tr8CEDXLd4qCRqJWvS8FiWoiEsolskm14PGLFTq0OjUSxf1L5euRlLFy6EDHtuWFKfSgtTLz0UrJ9T9ode34jl+uhi9+D0hEtXNy1WZmRI4ZyygOpNov3sAUuMvy+j+hM4T0xZ8+tFyTixPvfAEeP7EPoBn6eSM1Yq3fuDd98aZ00JPd2qWNe7K/pwWl5tmH4R4uEu4bcKnt0GgD99XvbFls69if2UFLLX3Mr2fYFvjbCK/dwZMJdnzI4l1o4fsWLh5Z3Ly7SqwPFBL49mBLf54bPjPh5FJH3yjBJ2MX1cZ5fXGjZuYH3k4Gr6/bJAXOQnwmoFeqY1RLL0R0PQfxOVqaQjDaXI0ntSrfOQy+lkMRKHS+U/4Gt3s+yr9PoVQ/49i3qsPaFLq7ZgNMoVaVNI1/XdLsznLIyvn7hyBLl/6YLHdMuDZkO6qxNJq4cQFPFVzcY5rO0vimYlIWOU0SfB1wabuUu7LdKqyN311jzGWW7qufLVykPbZocODGoWRrve+uuX+zqxWiuOY1xfUADt90vszbHu6AHFJrWXjExnZXKSB9l9v6LATVHat5omwVovz9+J7FJKbN7J4Djujlo8Anp/0QXKTU/4+xjQUPjawscNiGy3/RCg75NnoJ1+q0/wsnLind0KoVKDeIVvg6gvhcyLRV00gLiPlRMgAsUuxFC8yfNfEeBmzEKdUbFtJKyTLFx03cKJtieZ5Fu0LYAhfljdsk8rFeZ8WXVMszLlNFIeIa3woSrZjG5vMulaUYxUkq8TAb22Ai83jVL+mMNOVQGklT80a7SYkpxmq9N6BMbgVJ2kFkgw5U+oWlVGw1/BHHg3TuZ+Rk5ntRXLjGd+U6iA7xJpPkVsoFN9QbUXjyt54pNZRYBeJ1q3yTrAPq8EUjefscm0gpKNqPM5akMbu8obKWOfoeoaDAKruwA7ZJSBE/3y8+1iftU100mgyGKa5URuml5tb1Oced75072X8ByTXYf2YrMX1wg032Le7wjJT7GCUsu1bXTO4vvxqP9ihs0vMmGhELmGtzVLfHGp8+FPDVeddBI4eWJAN9ePHj1kktFQgGW+d+BuS5eRueyTiNK69gj2q4GQQjkbt1Zf5cyAfzqu++hVQFj6eblPN8KU+16TfQ5/DZg98i1z6mwbpPMc3//Nsh1T8NOYshfof7hX4KeN4JzN9/M+wZF/Apxb6m6jefPPpqSPmpTJIku8SPH/HS4ZZWZVEU7TPTlQosNmzYsGHDhg0bNmzYsGHDhg0bNmz4Gv8DLHXDmv1dE6QAAAAASUVORK5CYII="
      />
    </SHome>
  );
};
