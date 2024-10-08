var input = ["tables", "forward counting", "backward counting"];
var userInput = prompt(`What you want?
    tables
    forward counting
    backward counting `).toLowerCase()

if (userInput === input[0]) {
    var tables = +prompt("which table?")
    for (var i = 1; i < 11; i++) {
        document.write(tables + "  X  " + i + " = " + (tables * i) + "</br>")
    }
}

else if (userInput === input[1]) {
    document.write(`<h1 style="text-align: center; margin-top: 20px">FORWARD COUNTING </h1>
    <h1 style="text-align: center; margin-top: 20px"> 1	2	3	4	5	6	7	8	9	10</h1>
<h1 style="text-align: center;">11	12	13	14	15	16	17	18	19	20</h1>
<h1 style="text-align: center;">21	22	23	24	25	26	27	28	29	30</h1>
<h1 style="text-align: center;">31	32	33	34	35	36	37	38	39	40</h1>
<h1 style="text-align: center;">41	42	43	44	45	46	47	48	49	50</h1>
<h1 style="text-align: center;">51	52	53	54	55	56	57	58	59	60</h1>
<h1 style="text-align: center;">61	62	63	64	65	66	67	68	69	70</h1>
<h1 style="text-align: center;">71	72	73	74	75	76	77	78	79	80</h1>
<h1 style="text-align: center;">81	82	83	84	85	86	87	88	89	90</h1>
<h1 style="text-align: center;">91	92	93	94	95	96	97	98	99	100 </h1>`)
} else if (userInput === input[2])
    document.write(`<h1 style="text-align: center; margin-top: 20px">BACKWARD COUNTING </h1>
        <h1 style="text-align: center;">100	99	98	97	96	95	94	93	92	91</h1>
<h1 style="text-align: center;"> 90	89	88	87	86	85	84	83	82	81</h1>
<h1 style="text-align: center;"> 80	79	78	77	76	75	74	73	72	71</h1>
<h1 style="text-align: center;"> 70	69	68	67	66	65	64	63	62	61</h1>
<h1 style="text-align: center;"> 60	59	58	57	56	55	54	53	52	51</h1>
<h1 style="text-align: center;"> 50	49	48	47	46	45	44	43	42	41</h1>
<h1 style="text-align: center;"> 40	39	38	37	36	35	34	33	32	31</h1>
<h1 style="text-align: center;"> 30	29	28	27	26	25	24	23	22	21</h1>
<h1 style="text-align: center;"> 20	19	18	17	16	15	14	13	12	</h1>
<h1 style="text-align: center;"> 10	9	8	7	6	5	4	3	2	1 </h1>`)
else {
    document.write("<h1> invalid number </h1>")
}

