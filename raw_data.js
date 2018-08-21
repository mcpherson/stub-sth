let rawData = [
[
{"game-date":"<2018-04-09 Mon>","price":"101.92","sale-price":"27.00","delta":"-74.92","running-delta":"-74.92"},
{"game-date":"<2018-04-11 Wed>","price":"28.00","sale-price":"9.00","delta":"-19.00","running-delta":"-93.92"},
{"game-date":"<2018-04-12 Thu>","price":"28.00","sale-price":"7.20","delta":"-20.80","running-delta":"-114.72"},
{"game-date":"<2018-04-13 Fri>","price":"49.28","sale-price":"31.50","delta":"-17.78","running-delta":"-132.50"},
{"game-date":"<2018-04-14 Sat>","price":"63.84","sale-price":"18.00","delta":"-45.84","running-delta":"-178.34"},
{"game-date":"<2018-04-15 Sun>","price":"49.28","sale-price":"7.20","delta":"-42.08","running-delta":"-220.42"},
{"game-date":"<2018-04-16 Mon>","price":"-49.28","sale-price":"0.00","delta":"49.28","running-delta":"-171.14"},
{"game-date":"<2018-04-17 Tue>","price":"49.28","sale-price":"9.00","delta":"-40.28","running-delta":"-211.42"},
{"game-date":"<2018-04-18 Wed>","price":"49.28","sale-price":"8.10","delta":"-41.18","running-delta":"-252.60"},
{"game-date":"<2018-04-26 Thu>","price":"28.00","sale-price":"9.00","delta":"-19.00","running-delta":"-271.60"},
{"game-date":"<2018-04-27 Fri>","price":"49.28","sale-price":"13.50","delta":"-35.78","running-delta":"-307.38"},
{"game-date":"<2018-04-28 Sat>","price":"63.84","sale-price":"22.50","delta":"-41.34","running-delta":"-348.72"},
{"game-date":"<2018-04-29 Sun>","price":"49.28","sale-price":"27.00","delta":"-22.28","running-delta":"-371.00"},
{"game-date":"<2018-04-30 Mon>","price":"28.00","sale-price":"0.00","delta":"-28.00","running-delta":"-399.00"},
{"game-date":"<2018-05-01 Tue>","price":"28.00","sale-price":"13.50","delta":"-14.50","running-delta":"-413.50"},
{"game-date":"<2018-05-02 Wed>","price":"28.00","sale-price":"9.00","delta":"-19.00","running-delta":"-432.50"},
{"game-date":"<2018-05-07 Mon>","price":"28.00","sale-price":"13.50","delta":"-14.50","running-delta":"-447.00"},
{"game-date":"<2018-05-08 Tue>","price":"28.00","sale-price":"13.50","delta":"-14.50","running-delta":"-461.50"},
{"game-date":"<2018-05-09 Wed>","price":"28.00","sale-price":"0.00","delta":"-28.00","running-delta":"-489.50"},
{"game-date":"<2018-05-11 Fri>","price":"94.08","sale-price":"72.00","delta":"-22.08","running-delta":"-511.58"},
{"game-date":"<2018-05-12 Sat>","price":"94.08","sale-price":"67.50","delta":"-26.58","running-delta":"-538.16"},
{"game-date":"<2018-05-13 Sun>","price":"94.08","sale-price":"0.00","delta":"-94.08","running-delta":"-632.24"},
{"game-date":"<2018-05-22 Tue>","price":"63.84","sale-price":"31.50","delta":"-32.34","running-delta":"-664.58"},
{"game-date":"<2018-05-23 Wed>","price":"63.84","sale-price":"45.00","delta":"-18.84","running-delta":"-683.42"},
{"game-date":"<2018-05-25 Fri>","price":"63.84","sale-price":"49.50","delta":"-14.34","running-delta":"-697.76"},
{"game-date":"<2018-05-26 Sat>","price":"77.28","sale-price":"58.50","delta":"-18.78","running-delta":"-716.54"},
{"game-date":"<2018-05-27 Sun>","price":"63.84","sale-price":"54.00","delta":"-9.84","running-delta":"-726.38"},
{"game-date":"<2018-06-05 Tue>","price":"49.28","sale-price":"31.50","delta":"-17.78","running-delta":"-744.16"},
{"game-date":"<2018-06-06 Wed>","price":"49.28","sale-price":"40.50","delta":"-8.78","running-delta":"-752.94"},
{"game-date":"<2018-06-07 Thu>","price":"49.28","sale-price":"18.00","delta":"-31.28","running-delta":"-784.22"},
{"game-date":"<2018-06-08 Fri>","price":"77.28","sale-price":"27.00","delta":"-50.28","running-delta":"-834.50"},
{"game-date":"<2018-06-09 Sat>","price":"94.08","sale-price":"63.00","delta":"-31.08","running-delta":"-865.58"},
{"game-date":"<2018-06-10 Sun>","price":"77.28","sale-price":"49.50","delta":"-27.78","running-delta":"-893.36"},
{"game-date":"<2018-06-18 Mon>","price":"63.84","sale-price":"54.00","delta":"-9.84","running-delta":"-903.20"},
{"game-date":"<2018-06-19 Tue>","price":"63.84","sale-price":"45.00","delta":"-18.84","running-delta":"-922.04"},
{"game-date":"<2018-06-20 Wed>","price":"77.28","sale-price":"54.00","delta":"-23.28","running-delta":"-945.32"},
{"game-date":"<2018-06-29 Fri>","price":"94.08","sale-price":"81.00","delta":"-13.08","running-delta":"-958.40"},
{"game-date":"<2018-06-30 Sat>","price":"101.92","sale-price":"117.00","delta":"15.08","running-delta":"-943.32"},
{"game-date":"<2018-07-01 Sun>","price":"94.08","sale-price":"81.00","delta":"-13.08","running-delta":"-956.40"},
{"game-date":"<2018-07-03 Tue>","price":"94.08","sale-price":"0.00","delta":"-94.08","running-delta":"-1050.48"},
{"game-date":"<2018-07-04 Wed>","price":"101.92","sale-price":"67.50","delta":"-34.42","running-delta":"-1084.90"},
{"game-date":"<2018-07-06 Fri>","price":"94.08","sale-price":"67.50","delta":"-26.58","running-delta":"-1111.48"},
{"game-date":"<2018-07-07 Sat>","price":"94.08","sale-price":"67.50","delta":"-26.58","running-delta":"-1138.06"},
{"game-date":"<2018-07-08 Sun>","price":"94.08","sale-price":"58.50","delta":"-35.58","running-delta":"-1173.64"},
{"game-date":"<2018-07-19 Thu>","price":"-94.08","sale-price":"0.00","delta":"94.08","running-delta":"-1079.56"},
{"game-date":"<2018-07-20 Fri>","price":"-94.08","sale-price":"0.00","delta":"94.08","running-delta":"-985.48"},
{"game-date":"<2018-07-21 Sat>","price":"101.92","sale-price":"0.00","delta":"-101.92","running-delta":"-1087.40"},
{"game-date":"<2018-07-22 Sun>","price":"94.08","sale-price":"0.00","delta":"-94.08","running-delta":"-1181.48"},
{"game-date":"<2018-07-23 Mon>","price":"77.28","sale-price":"0.00","delta":"-77.28","running-delta":"-1258.76"},
{"game-date":"<2018-07-24 Tue>","price":"77.28","sale-price":"0.00","delta":"-77.28","running-delta":"-1336.04"},
{"game-date":"<2018-07-25 Wed>","price":"77.28","sale-price":"0.00","delta":"-77.28","running-delta":"-1413.32"},
{"game-date":"<2018-07-26 Thu>","price":"77.28","sale-price":"36.00","delta":"-41.28","running-delta":"-1454.60"},
{"game-date":"<2018-08-02 Thu>","price":"63.84","sale-price":"36.00","delta":"-27.84","running-delta":"-1482.44"},
{"game-date":"<2018-08-03 Fri>","price":"77.28","sale-price":"58.50","delta":"-18.78","running-delta":"-1501.22"},
{"game-date":"<2018-08-04 Sat>","price":"94.08","sale-price":"72.00","delta":"-22.08","running-delta":"-1523.30"},
{"game-date":"<2018-08-05 Sun>","price":"77.28","sale-price":"45.00","delta":"-32.28","running-delta":"-1555.58"},
{"game-date":"<2018-08-10 Fri>","price":"94.08","sale-price":"45.00","delta":"-49.08","running-delta":"-1604.66"},
{"game-date":"<2018-08-11 Sat>","price":"94.08","sale-price":"72.00","delta":"-22.08","running-delta":"-1626.74"},
{"game-date":"<2018-08-12 Sun>","price":"94.08","sale-price":"40.50","delta":"-53.58","running-delta":"-1680.32"},
{"game-date":"<2018-08-14 Tue>","price":"63.84","sale-price":"40.50","delta":"-23.34","running-delta":"-1703.66"},
{"game-date":"<2018-08-15 Wed>","price":"63.84","sale-price":"40.50","delta":"-23.34","running-delta":"-1727.00"},
{"game-date":"<2018-08-23 Thu>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-1776.28"},
{"game-date":"<2018-08-24 Fri>","price":"63.84","sale-price":"0.00","delta":"-63.84","running-delta":"-1840.12"},
{"game-date":"<2018-08-25 Sat>","price":"77.28","sale-price":"0.00","delta":"-77.28","running-delta":"-1917.40"},
{"game-date":"<2018-08-26 Sun>","price":"63.84","sale-price":"0.00","delta":"-63.84","running-delta":"-1981.24"},
{"game-date":"<2018-08-27 Mon>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2030.52"},
{"game-date":"<2018-08-28 Tue>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2079.80"},
{"game-date":"<2018-08-29 Wed>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2129.08"},
{"game-date":"<2018-09-10 Mon>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2178.36"},
{"game-date":"<2018-09-11 Tue>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2227.64"},
{"game-date":"<2018-09-12 Wed>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2276.92"},
{"game-date":"<2018-09-14 Fri>","price":"63.84","sale-price":"0.00","delta":"-63.84","running-delta":"-2340.76"},
{"game-date":"<2018-09-15 Sat>","price":"77.28","sale-price":"0.00","delta":"-77.28","running-delta":"-2418.04"},
{"game-date":"<2018-09-16 Sun>","price":"63.84","sale-price":"0.00","delta":"-63.84","running-delta":"-2481.88"},
{"game-date":"<2018-09-24 Mon>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2531.16"},
{"game-date":"<2018-09-25 Tue>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2580.44"},
{"game-date":"<2018-09-26 Wed>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2629.72"},
{"game-date":"<2018-09-27 Thu>","price":"49.28","sale-price":"0.00","delta":"-49.28","running-delta":"-2679.00"},
{"game-date":"<2018-09-28 Fri>","price":"77.28","sale-price":"0.00","delta":"-77.28","running-delta":"-2756.28"},
{"game-date":"<2018-09-29 Sat>","price":"94.08","sale-price":"0.00","delta":"-94.08","running-delta":"-2850.36"},
{"game-date":"<2018-09-30 Sun>","price":"94.08","sale-price":"0.00","delta":"-94.08","running-delta":"-2944.44"}
]
;