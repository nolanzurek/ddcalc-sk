// https://www.reddit.com/r/youtubedl/comments/13izxi0/ytdlp_playlist_to_json/

// does it have to be json? you start by saying you want video id's.

// yt-dlp -s --flat-playlist --print-to-file id,title fileTitle.json "Playlsit URL"
// after loading the playlist pages (each page has 30 videos), it's blazingly fast because the --flat-playlist option means it's not checking each video for extra metadata.

// we just paste the string from the yt-dlp output here
// yeah, this is not scalable. But the script is just for me
let rawData = `H4IPYyojIQg
PAPADATOS Ioannis (GRE)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
ax2HEzWIGtM
BOSMANS Lore (BEL)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
3sl-AwoTPsU
SHEVELAN Ruth (GBR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
W_yuqYVdpHk
NEL Kayla (AUS)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
adtvPtywb0I
WAY Kirsty (GBR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
hG5sJ2PNEn8
KAKOGIANNIS Stefanos (GRE)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
p5ExiU9Glp8
DOBLER Simon (GER)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
84RyCGiGrXc
KOTZE Lenita (RSA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
x3IQ0h6RLf8
MARTINEZ Andres (ESP)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
HAHKxqigD58
PETERSEN Leolin (RSA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
4t7MWFxXaHA
AIKEREMIOKHA Omo (GBR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
cG_xLWA9GDM
DOBLER Simon (GER)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
0CNNseJSUYA
HEINRICH Anastasia (GER)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
LYKQayQ-3eA
PAPADATOS Apostolos (GRE)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
1gTzH0LQxio
PETERSEN Leolin (RSA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
3X00K3mTNFQ
NEL Kayla (AUS)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
GfERHPXTebA
DEKLERCK Brent (BEL)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
LrEAPnX7VnM
ROMERIL Melissa (NZL)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
W8_UOUQdz2U
WAY Kirsty (GBR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
WvgHV_csKN4
ANTHEUNIS Kobe (BEL)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
0ui30JD46rY
DEKLERCK Brent (BEL)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
stjTN5pS-ds
FROST Marshall (GBR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
p2bpSH2VoNU
SHEVELAN Ruth (GBR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
XuekCqX5GWk
KONDO Kaoru (JPN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
NuO9NlqCAcM
DIBB Bronwyn (NZL)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
OgULFhXoNfo
ANTHEUNIS Kobe (BEL)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
z56lhLAhbVo
GOSLING Lewis (GBR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
XSVvXYYo3yo
KALEGKA Aikaterini Tsampika (GRE)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
iEec2YMkA3w
de WOLFF Guitho (NED)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
YtcGWbSNsLg
FRENCH Matthew (AUS)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
3Iwy4iHyKVU
STJAERNBORG Tuva (SWE)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
DhdOTb6d_ck
GOSLING Lewis (GBR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
WOOQlDXKj1g
STJAERNBORG Tuva (SWE)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
AmsSKn0lYgo
ANAKA Ashley (CAN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
u1fW5A2FQWU
DOORAKKERS Lise (BEL)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
zpoJlFs-YW0
CURY Federico (ARG)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
-pmiH8eew8o
BOSMANS Lore (BEL)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
oMx6Xg_x0Gk
AIKEREMIOKHA Omo (GBR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
YtOpxZHQwk8
DOORAKKERS Lise (BEL)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
L_WCmnXHOAg
PAPADATOS Ioannis (GRE)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
SvIlt7OAd6o
RODRIGUEZ Melania (ESP)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
JAB8fxmyCXs
PADILLA Ruben (USA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
t0gY2VrmEas
TIDD Cameron (AUS)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
3pZ4bNNthp0
KOTZE Lenita (RSA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
UBHB2KM4l5E
PADILLA Ruben (USA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
kOtr5_MMnMo
KLINE Dylan (USA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
NDt5JTAxaXc
HEINRICH Anastasia (GER)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
W6_THY35fvI
MINC Tomas (USA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
ugbeCqgPzcQ
ZUREK Nolan (CAN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
V9YPq2qrBdo
FRENCH Amber (AUS)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
VxtM9a0MCmo
MINC Tomas (USA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
hkZmjIwAKJ8
GUIDO Sara (POR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
GEc5bmk7gA0
SMITH Simon (USA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
V8eCLtCOskw
KONDO Kaoru (JPN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
QFhgKOmUAUc
BROWN Benjamin (AUS)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
3L5eVHnmLEY
KOENIG Hannes (GER)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
73hQ6QKVRbA
KENT Jacqueline (USA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
u-Wn4ir1eLQ
HARDER Grace (USA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
rKIVJ8-dA2Y
BROWN Benjamin (AUS)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
9Exl62rDu5E
PACHECO Matias (ARG)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
6bCG4Xqqqeo
SAMPAIO ROMAO Tiago (POR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
P7_KdEyp3Jw
ROUX Jean-Claude (RSA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
UEyelafT7KE
LOPEZ Marta (ESP)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
t8w510MuCOc
SCHMIDT Daniel (GER)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
hDSYhuap5SI
KAKOGIANNIS Stefanos (GRE)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
Cw0PNgG3-H0
SCHMIDT Daniel (GER)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
yJCQr3R6dks
SITKOWSKI Troy (AUS)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
ulDbA0EOCYQ
PACHECO Matias (ARG)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
8plivvUhqdU
de WOLFF Guitho (NED)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
SGcdVzf-v70
TIDD Cameron (AUS)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
pFrMvtKfdt0
McKENNA Molly (GBR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
XKtHqPr07QU
ROUX Jean-Claude (RSA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
xK8-4iZqTl4
TORIBIO Nicolas (ESP)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
2AyVsn5JEc0
PAPADATOS Nektarios (GRE)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
qiLF82fyWKM
MARTINEZ Andres (ESP)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
DBvmvIOXjAM
RAGA Aliah (USA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
MlWGm__gxJY
WILLIAMSON Bethany (GBR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
BG81avs0Gmg
SAPRAUTZKI Imani (GER)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
r7hViaqeIGY
CABRAL Diogo (POR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
D-yyd7fMLQ8
TORIBIO Nicolas (ESP)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
1va11s56nno
SOTO Veronica (MEX)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
xZun_N6ddsA
FERNANDES Diogo (POR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
DiTbR2U2n7s
RAGA Aliah (USA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
P0gCR465Qd0
GARCIA Alexandra (POR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
_OFVP2u7Oj8
GUIDO Sara (POR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
L94lXyii4A4
NOBUHARA Shelby (USA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
o91d_PJTlEU
SOTO Veronica (MEX)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
iP1PKVI4y2c
ABRANTES Rita (POR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
iGexh6dvxnI
BOOYSEN Jordan (RSA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
9DNJfTafW50
del SER Carlos (ESP)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
EjBuhc2SgjQ
ABRANTES Rita (POR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
ejcFApK2jvg
FRENCH Matthew (AUS)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
u-FEJMFzZDA
SAMPAIO ROMAO Tiago (POR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
un6rUS7hhQA
GARCIA Alexandra (POR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
FsoR8rAqiQc
CABRAL Diogo (POR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
oVgaG4v8zd8
FERNANDES Diogo (POR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
KbbUtBdccbc
GONZALEZ Santiago (MEX)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
kYdPN-r6dZc
PHANEUF Zoe (CAN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
1aKTRd4JN1Y
SATO Ayumi (JPN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
4C2ZA8E44qI
RODRIGUEZ Melania (ESP)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
eRNWmPdxAlo
TROYAN Artur (UKR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
IFX2WpkLjSA
GONZALEZ Santiago (MEX)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
Kbvg5qwkbmg
HARDER Grace (USA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
uN0G7UqWApg
SOEHN Kalena (CAN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
Ek6C9H5t040
del SER Carlos (ESP)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
yDk9DGLyFTk
ANAKA Ashley (CAN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
UytxWF9U12E
GAGO Diana (POR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
x1euhACb5Go
ZARZUELA Carmen (ESP)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
71rQ1fc_518
TAVAST Aaro (FIN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
i3FRz-fF1OA
DODD Gavin (CAN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
lv7YvGHVZZw
BOSCH Matthew (RSA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
1ExaErm0xVA
SATO Ayumi (JPN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
0fLMqcCeR3c
DOMINGUES Jose (POR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
jiJ_nvPe9d0
DOMINGUES Jose (POR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
wM_rGsv1QAs
ZUREK Nolan (CAN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
196fgawE7Tg
ZERMENO Ian (MEX)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
NvPhZUHpEB8
FRANCO David (ESP)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
D5MILfca430
McKENNA Molly (GBR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
wj3amc-kbAM
PAPADATOS Nektarios (GRE)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
o0ZBUg9ADUs
FROST Marshall (GBR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
xWgSPSRNtdM
SAPRAUTZKI Imani (GER)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
_1pFf_5_OZ4
KELLER Sara (GER)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
0eRyEt-DDTQ
SMITH Simon (USA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
QW_8j2jtdOk
METHERAL Hannah (CAN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
8fuzQxNGmIc
KELLER Sara (GER)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
t0kfslpZamM
DIBB Bronwyn (NZL)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
FV_hKd1ekPM
KOENIG Hannes (GER)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
tXRXjah04Zk
METHERAL Hannah (CAN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
BQ5CqULxSx4
ROMERIL Melissa (NZL)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
80er8jdLZi4
ROBINSON Cheyanna (AUS)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
0tnIDFE3enw
TAVAST Aaro (FIN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
xJ2ptzuwJZ0
ROBINSON Cheyanna (AUS)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
OD9jXNFCPbc
SOEHN Kalena (CAN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
yGQFtuelzjg
SITKOWSKI Troy (AUS)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
NdjCfkNGHt8
BERRIDGE Daniel (GBR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
eqJPPkRp5f4
KALEGKA Aikaterini Tsampika (GRE)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
rSoWKIwZICM
KENT Jacqueline (USA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
vTLgkmRqGjs
BERRIDGE Daniel (GBR)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
lPG7BzMRFe4
FRENCH Amber (AUS)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
iy0JHkCIsHQ
BRANA Alejandra (ESP)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
_z1_ep_OZjU
BRANA Alejandra (ESP)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
_JIQsyoFpwc
THOMAS Braida (AUS)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
qmC-KRjxOYc
BOSCH Matthew (RSA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
_XtBMt6fHt0
ARMSTRONG Mark (CAN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
3f0TsJ05q60
LOPEZ Marta (ESP)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
qCQWZIToZso
NOBUHARA Shelby (USA)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
ZhXfrAkJ6o0
THOMAS Braida (AUS)_W_2023 Trampoline Worlds_Qualification_Double Mini_R1
kK3ii5sXQdY
BRAIG Moritz (GER)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
LM7D08GQjp0
ARMSTRONG Mark (CAN)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
aEm8qNudErM
PAPADATOS Apostolos (GRE)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
cuInYoyAVeg
KLINE Dylan (USA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
ewktA5A6ZvE
BOOYSEN Jordan (RSA)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
KGvjnvjRE-E
WILLIAMSON Bethany (GBR)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
rqnWbl0IcOU
ZARZUELA Carmen (ESP)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
AUuq-6L3yZE
BRAIG Moritz (GER)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
HIHXZzRQ9v8
PHANEUF Zoe (CAN)_W_2023 Trampoline Worlds_Qualification_Double Mini_R2
W_LBb-Ovm_U
ROBERTSON Campbell (NZL)_M_2023 Trampoline Worlds_Qualification_Double Mini_R2
D2x5PC1l5e0
FRANCO David (ESP)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
JZD99igUVV8
ROBERTSON Campbell (NZL)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1
upda4C-ehVw
ZERMENO Ian (MEX)_M_2023 Trampoline Worlds_Qualification_Double Mini_R1`;

const lines = rawData.split("\n");

let data = [];

for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i];
  i++;
  const titleData = lines[i].split(" ");
  data.push({
    id: line,
    last_name: titleData[0],
    first_name: titleData[1],
    country: titleData[2].substring(1, 4),
    gender: titleData[2].substring(6, 7),
    // this gets updated manually
    event: "2023 Trampoline Worlds",
    round:
      titleData[5] === "Mini_R1"
        ? "Qualification Exercise 1"
        : "Qualification Exercise 2",
  });
}

console.log(JSON.stringify(data));
