for (ham = 0; 20 > ham; ham++) 7 > ham && (hampers[ham] = new Hamper(basehamX, basehamY - 11 * ham, 2)),
ham >= 7 && 10 > ham && (hampers[ham] = new Hamper(basehamX + 18 * (ham - 6), basehamY - 55, 2)),
ham >= 10 && 13 > ham && (hampers[ham] = new Hamper(basehamX + 18 * (ham - 9), basehamY - 66, 2)),
ham >= 13 && (hampers[ham] = new Hamper(basehamX + 72, basehamY - 11 * (ham - 13), 1));

for (var ha1 = 0; ha1 < 10; ha1++) {
    hampers[20 + ha1] = new Hamper(30 + (ha1 * 18), 50, 1)
}
for (var ha2 = 0; ha2 < 10; ha2++) {
    hampers[30 + ha2] = new Hamper(30 + (ha2 * 18), 61, 1)
}
for (var ha3 = 0; ha3 < 10; ha3++) {
    hampers[40 + ha3] = new Hamper(200 + (ha3 * 18), 180, 2)
}
for (var ha4 = 0; ha4 < 10; ha4++) {
    hampers[50 + ha4] = new Hamper(370 + (ha4 * 18), 50, 1)
}
for (var ha5 = 0; ha5 < 10; ha5++) {
    hampers[60 + ha5] = new Hamper(370 + (ha5 * 18), 61, 1)
}
for (var ha6 = 0; ha6 < 10; ha6++) {
    hampers[70 + ha6] = new Hamper(370 + (ha6 * 18), 72, 1)
}
for (var ha7 = 0; ha7 < 10; ha7++) {
    hampers[80 + ha7] = new Hamper(370 + (ha7 * 18), 83, 1)
}
for (var ha8 = 0; ha8 < 9; ha8++) {
    hampers[90 + ha8] = new Hamper(370 + (ha8 * 18), 94, 1)
}
for (var ha9 = 0; ha9 < 15; ha9++) {
    hampers[99 + ha9] = new Hamper(90, 490 - (11 * ha9), 1)
}
for (var ha10 = 0; ha10 < 15; ha10++) {
    hampers[114 + ha10] = new Hamper(108, 490 - (11 * ha10), 1)
}
for (var ha11 = 0; ha11 < 15; ha11++) {
    hampers[129 + ha11] = new Hamper(330 + (ha11 * 18), 280, 1)
}
for (var ha12 = 0; ha12 < 15; ha12++) {
    hampers[144 + ha12] = new Hamper(330 + (ha12 * 18), 291, 1)
}
hampers[159] = new Hamper(582, 302, 2);
hampers[160] = new Hamper(564, 302, 2);
hampers[161] = new Hamper(582, 320, 2);
hampers[162] = new Hamper(564, 320, 2);
hampers[163] = new Hamper(1, 302, 2);
hampers[164] = new Hamper(19, 302, 2);
hampers[165] = new Hamper(1, 320, 2);
hampers[166] = new Hamper(19, 320, 2);