import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';



const Main = (props) => {
    const storedCap = localStorage.getItem("lastCaption");
    const [userText, setUserText] = useState(storedCap);

    const changeInputText = (event) => {
        setUserText(event.target.value);
        
    }

    useEffect(() => {
        localStorage.setItem("lastCaption", userText);
    }, [userText]);

    const removeStoredCap = () => {
        localStorage.removeItem('lastCaption');
        setUserText("");
    };

    const copyTextClipboard = () => {
        navigator.clipboard.writeText(userText);
        userText !== '' ? props.showAlert('Your text has been copied to Clipboard', 'success') : props.showAlert('Please enter some text', 'warning');
    }

    const makeItBold = () => {
        // obtain the object reference for the <textarea>
        var txtarea = document.getElementById("textInp");
        // obtain the index of the first selected character

        // obtain the index of the last selected character

        // obtain the selected text

        let cursorStart = txtarea.selectionStart;
        let cursorEnd = txtarea.selectionEnd;
        let selText = userText.substring(cursorStart, cursorEnd);

        const chText = userText.split(selText);



        //do something with the selected content

        var selectionLength = cursorEnd - cursorStart;
        if (selectionLength <= 0) {
            props.showAlert('Nothing to Bold', 'warning');
        } else {
            //convert to standard number then
            // then if standard, covert to bold
            // or if bold, convert to standard
            // then covert 'bold replacement' to bold
            selText = selText.replace(/𝚊/g, "a");
            selText = selText.replace(/𝘢/g, "a");
            selText = selText.replace(/a/g, "{boldReplacementKey-a}");
            selText = selText.replace(/𝐚/g, "a");
            selText = selText.replace(/{boldReplacementKey-a}/g, "𝐚");

            selText = selText.replace(/𝚋/g, "b");
            selText = selText.replace(/𝘣/g, "b");
            selText = selText.replace(/b/g, "{boldReplacementKey-b}");
            selText = selText.replace(/𝐛/g, "b");
            selText = selText.replace(/{boldReplacementKey-b}/g, "𝐛");

            selText = selText.replace(/𝚌/g, "c");
            selText = selText.replace(/𝘤/g, "c");
            selText = selText.replace(/c/g, "{boldReplacementKey-c}");
            selText = selText.replace(/𝐜/g, "c");
            selText = selText.replace(/{boldReplacementKey-c}/g, "𝐜");

            selText = selText.replace(/𝚍/g, "d");
            selText = selText.replace(/𝘥/g, "d");
            selText = selText.replace(/d/g, "{boldReplacementKey-d}");
            selText = selText.replace(/𝐝/g, "d");
            selText = selText.replace(/{boldReplacementKey-d}/g, "𝐝");

            selText = selText.replace(/𝚎/g, "e");
            selText = selText.replace(/𝘦/g, "e");
            selText = selText.replace(/e/g, "{boldReplacementKey-e}");
            selText = selText.replace(/𝐞/g, "e");
            selText = selText.replace(/{boldReplacementKey-e}/g, "𝐞");

            selText = selText.replace(/𝚏/g, "f");
            selText = selText.replace(/𝘧/g, "f");
            selText = selText.replace(/f/g, "{boldReplacementKey-f}");
            selText = selText.replace(/𝐟/g, "f");
            selText = selText.replace(/{boldReplacementKey-f}/g, "𝐟");

            selText = selText.replace(/𝚐/g, "g");
            selText = selText.replace(/𝘨/g, "g");
            selText = selText.replace(/g/g, "{boldReplacementKey-g}");
            selText = selText.replace(/𝐠/g, "g");
            selText = selText.replace(/{boldReplacementKey-g}/g, "𝐠");

            selText = selText.replace(/𝚑/g, "h");
            selText = selText.replace(/𝘩/g, "h");
            selText = selText.replace(/h/g, "{boldReplacementKey-h}");
            selText = selText.replace(/𝐡/g, "h");
            selText = selText.replace(/{boldReplacementKey-h}/g, "𝐡");

            selText = selText.replace(/𝚒/g, "i");
            selText = selText.replace(/𝘪/g, "i");
            selText = selText.replace(/i/g, "{boldReplacementKey-i}");
            selText = selText.replace(/𝐢/g, "i");
            selText = selText.replace(/{boldReplacementKey-i}/g, "𝐢");

            selText = selText.replace(/𝚓/g, "j");
            selText = selText.replace(/𝘫/g, "j");
            selText = selText.replace(/j/g, "{boldReplacementKey-j}");
            selText = selText.replace(/𝐣/g, "j");
            selText = selText.replace(/{boldReplacementKey-j}/g, "𝐣");

            selText = selText.replace(/𝚔/g, "k");
            selText = selText.replace(/𝘬/g, "k");
            selText = selText.replace(/k/g, "{boldReplacementKey-k}");
            selText = selText.replace(/𝐤/g, "k");
            selText = selText.replace(/{boldReplacementKey-k}/g, "𝐤");

            selText = selText.replace(/𝚕/g, "l");
            selText = selText.replace(/𝘭/g, "l");
            selText = selText.replace(/l/g, "{boldReplacementKey-l}");
            selText = selText.replace(/𝐥/g, "l");
            selText = selText.replace(/{boldReplacementKey-l}/g, "𝐥");

            selText = selText.replace(/𝚖/g, "m");
            selText = selText.replace(/𝘮/g, "m");
            selText = selText.replace(/m/g, "{boldReplacementKey-m}");
            selText = selText.replace(/𝐦/g, "m");
            selText = selText.replace(/{boldReplacementKey-m}/g, "𝐦");

            selText = selText.replace(/𝚗/g, "n");
            selText = selText.replace(/𝘯/g, "n");
            selText = selText.replace(/n/g, "{boldReplacementKey-n}");
            selText = selText.replace(/𝐧/g, "n");
            selText = selText.replace(/{boldReplacementKey-n}/g, "𝐧");

            selText = selText.replace(/𝚘/g, "o");
            selText = selText.replace(/𝘰/g, "o");
            selText = selText.replace(/o/g, "{boldReplacementKey-o}");
            selText = selText.replace(/𝐨/g, "o");
            selText = selText.replace(/{boldReplacementKey-o}/g, "𝐨");

            selText = selText.replace(/𝚙/g, "p");
            selText = selText.replace(/𝘱/g, "p");
            selText = selText.replace(/p/g, "{boldReplacementKey-p}");
            selText = selText.replace(/𝐩/g, "p");
            selText = selText.replace(/{boldReplacementKey-p}/g, "𝐩");

            selText = selText.replace(/𝚚/g, "q");
            selText = selText.replace(/𝘲/g, "q");
            selText = selText.replace(/q/g, "{boldReplacementKey-q}");
            selText = selText.replace(/𝐪/g, "q");
            selText = selText.replace(/{boldReplacementKey-q}/g, "𝐪");

            selText = selText.replace(/𝚛/g, "r");
            selText = selText.replace(/𝘳/g, "r");
            selText = selText.replace(/r/g, "{boldReplacementKey-r}");
            selText = selText.replace(/𝐫/g, "r");
            selText = selText.replace(/{boldReplacementKey-r}/g, "𝐫");

            selText = selText.replace(/𝚜/g, "s");
            selText = selText.replace(/𝘴/g, "s");
            selText = selText.replace(/s/g, "{boldReplacementKey-s}");
            selText = selText.replace(/𝐬/g, "s");
            selText = selText.replace(/{boldReplacementKey-s}/g, "𝐬");

            selText = selText.replace(/𝚝/g, "t");
            selText = selText.replace(/𝘵/g, "t");
            selText = selText.replace(/t/g, "{boldReplacementKey-t}");
            selText = selText.replace(/𝐭/g, "t");
            selText = selText.replace(/{boldReplacementKey-t}/g, "𝐭");

            selText = selText.replace(/𝚞/g, "u");
            selText = selText.replace(/𝘶/g, "u");
            selText = selText.replace(/u/g, "{boldReplacementKey-u}");
            selText = selText.replace(/𝐮/g, "u");
            selText = selText.replace(/{boldReplacementKey-u}/g, "𝐮");

            selText = selText.replace(/𝚟/g, "v");
            selText = selText.replace(/𝘷/g, "v");
            selText = selText.replace(/v/g, "{boldReplacementKey-v}");
            selText = selText.replace(/𝐯/g, "v");
            selText = selText.replace(/{boldReplacementKey-v}/g, "𝐯");

            selText = selText.replace(/𝚠/g, "w");
            selText = selText.replace(/𝘸/g, "w");
            selText = selText.replace(/w/g, "{boldReplacementKey-w}");
            selText = selText.replace(/𝐰/g, "w");
            selText = selText.replace(/{boldReplacementKey-w}/g, "𝐰");

            selText = selText.replace(/𝚡/g, "x");
            selText = selText.replace(/𝘹/g, "x");
            selText = selText.replace(/x/g, "{boldReplacementKey-x}");
            selText = selText.replace(/𝐱/g, "x");
            selText = selText.replace(/{boldReplacementKey-x}/g, "𝐱");

            selText = selText.replace(/𝚢/g, "y");
            selText = selText.replace(/𝘺/g, "y");
            selText = selText.replace(/y/g, "{boldReplacementKey-y}");
            selText = selText.replace(/𝐲/g, "y");
            selText = selText.replace(/{boldReplacementKey-y}/g, "𝐲");

            selText = selText.replace(/𝚣/g, "z");
            selText = selText.replace(/𝘻/g, "z");
            selText = selText.replace(/z/g, "{boldReplacementKey-z}");
            selText = selText.replace(/𝐳/g, "z");
            selText = selText.replace(/{boldReplacementKey-z}/g, "𝐳");

            selText = selText.replace(/𝙰/g, "A");
            selText = selText.replace(/𝘈/g, "A");
            selText = selText.replace(/A/g, "{boldReplacementKey-A}");
            selText = selText.replace(/𝐀/g, "A");
            selText = selText.replace(/{boldReplacementKey-A}/g, "𝐀");

            selText = selText.replace(/𝙱/g, "B");
            selText = selText.replace(/𝘉/g, "B");
            selText = selText.replace(/B/g, "{boldReplacementKey-B}");
            selText = selText.replace(/𝐁/g, "B");
            selText = selText.replace(/{boldReplacementKey-B}/g, "𝐁");

            selText = selText.replace(/𝙲/g, "C");
            selText = selText.replace(/𝘊/g, "C");
            selText = selText.replace(/C/g, "{boldReplacementKey-C}");
            selText = selText.replace(/𝐂/g, "C");
            selText = selText.replace(/{boldReplacementKey-C}/g, "𝐂");

            selText = selText.replace(/𝙳/g, "D");
            selText = selText.replace(/𝘋/g, "D");
            selText = selText.replace(/D/g, "{boldReplacementKey-D}");
            selText = selText.replace(/𝐃/g, "D");
            selText = selText.replace(/{boldReplacementKey-D}/g, "𝐃");

            selText = selText.replace(/𝙴/g, "E");
            selText = selText.replace(/𝘌/g, "E");
            selText = selText.replace(/E/g, "{boldReplacementKey-E}");
            selText = selText.replace(/𝐄/g, "E");
            selText = selText.replace(/{boldReplacementKey-E}/g, "𝐄");

            selText = selText.replace(/𝙵/g, "F");
            selText = selText.replace(/𝘍/g, "F");
            selText = selText.replace(/F/g, "{boldReplacementKey-F}");
            selText = selText.replace(/𝐅/g, "F");
            selText = selText.replace(/{boldReplacementKey-F}/g, "𝐅");

            selText = selText.replace(/𝙶/g, "G");
            selText = selText.replace(/𝘎/g, "G");
            selText = selText.replace(/G/g, "{boldReplacementKey-G}");
            selText = selText.replace(/𝐆/g, "G");
            selText = selText.replace(/{boldReplacementKey-G}/g, "𝐆");

            selText = selText.replace(/𝙷/g, "H");
            selText = selText.replace(/𝘏/g, "H");
            selText = selText.replace(/H/g, "{boldReplacementKey-H}");
            selText = selText.replace(/𝐇/g, "H");
            selText = selText.replace(/{boldReplacementKey-H}/g, "𝐇");

            selText = selText.replace(/𝙸/g, "I");
            selText = selText.replace(/𝘐/g, "I");
            selText = selText.replace(/I/g, "{boldReplacementKey-I}");
            selText = selText.replace(/𝐈/g, "I");
            selText = selText.replace(/{boldReplacementKey-I}/g, "𝐈");

            selText = selText.replace(/𝙹/g, "J");
            selText = selText.replace(/𝘑/g, "J");
            selText = selText.replace(/J/g, "{boldReplacementKey-J}");
            selText = selText.replace(/𝐉/g, "J");
            selText = selText.replace(/{boldReplacementKey-J}/g, "𝐉");

            selText = selText.replace(/𝙺/g, "K");
            selText = selText.replace(/𝘒/g, "K");
            selText = selText.replace(/K/g, "{boldReplacementKey-K}");
            selText = selText.replace(/𝐊/g, "K");
            selText = selText.replace(/{boldReplacementKey-K}/g, "𝐊");

            selText = selText.replace(/𝙻/g, "L");
            selText = selText.replace(/𝘓/g, "L");
            selText = selText.replace(/L/g, "{boldReplacementKey-L}");
            selText = selText.replace(/𝐋/g, "L");
            selText = selText.replace(/{boldReplacementKey-L}/g, "𝐋");

            selText = selText.replace(/𝙼/g, "M");
            selText = selText.replace(/𝘔/g, "M");
            selText = selText.replace(/M/g, "{boldReplacementKey-M}");
            selText = selText.replace(/𝐌/g, "M");
            selText = selText.replace(/{boldReplacementKey-M}/g, "𝐌");

            selText = selText.replace(/𝙽/g, "N");
            selText = selText.replace(/𝘕/g, "N");
            selText = selText.replace(/N/g, "{boldReplacementKey-N}");
            selText = selText.replace(/𝐍/g, "N");
            selText = selText.replace(/{boldReplacementKey-N}/g, "𝐍");

            selText = selText.replace(/𝙾/g, "O");
            selText = selText.replace(/𝘖/g, "O");
            selText = selText.replace(/O/g, "{boldReplacementKey-O}");
            selText = selText.replace(/𝐎/g, "O");
            selText = selText.replace(/{boldReplacementKey-O}/g, "𝐎");

            selText = selText.replace(/𝙿/g, "P");
            selText = selText.replace(/𝘗/g, "P");
            selText = selText.replace(/P/g, "{boldReplacementKey-P}");
            selText = selText.replace(/𝐏/g, "P");
            selText = selText.replace(/{boldReplacementKey-P}/g, "𝐏");

            selText = selText.replace(/𝚀/g, "Q");
            selText = selText.replace(/𝘘/g, "Q");
            selText = selText.replace(/Q/g, "{boldReplacementKey-Q}");
            selText = selText.replace(/𝐐/g, "Q");
            selText = selText.replace(/{boldReplacementKey-Q}/g, "𝐐");

            selText = selText.replace(/𝚁/g, "R");
            selText = selText.replace(/𝘙/g, "R");
            selText = selText.replace(/R/g, "{boldReplacementKey-R}");
            selText = selText.replace(/𝐑/g, "R");
            selText = selText.replace(/{boldReplacementKey-R}/g, "𝐑");

            selText = selText.replace(/𝚂/g, "S");
            selText = selText.replace(/𝘚/g, "S");
            selText = selText.replace(/S/g, "{boldReplacementKey-S}");
            selText = selText.replace(/𝐒/g, "S");
            selText = selText.replace(/{boldReplacementKey-S}/g, "𝐒");

            selText = selText.replace(/𝚃/g, "T");
            selText = selText.replace(/𝘛/g, "T");
            selText = selText.replace(/T/g, "{boldReplacementKey-T}");
            selText = selText.replace(/𝐓/g, "T");
            selText = selText.replace(/{boldReplacementKey-T}/g, "𝐓");

            selText = selText.replace(/𝚄/g, "U");
            selText = selText.replace(/𝘜/g, "U");
            selText = selText.replace(/U/g, "{boldReplacementKey-U}");
            selText = selText.replace(/𝐔/g, "U");
            selText = selText.replace(/{boldReplacementKey-U}/g, "𝐔");

            selText = selText.replace(/𝚅/g, "V");
            selText = selText.replace(/𝘝/g, "V");
            selText = selText.replace(/V/g, "{boldReplacementKey-V}");
            selText = selText.replace(/𝐕/g, "V");
            selText = selText.replace(/{boldReplacementKey-V}/g, "𝐕");

            selText = selText.replace(/𝚆/g, "W");
            selText = selText.replace(/𝘞/g, "W");
            selText = selText.replace(/W/g, "{boldReplacementKey-W}");
            selText = selText.replace(/𝗪/g, "W");
            selText = selText.replace(/{boldReplacementKey-W}/g, "𝗪");

            selText = selText.replace(/𝚇/g, "X");
            selText = selText.replace(/𝘟/g, "X");
            selText = selText.replace(/X/g, "{boldReplacementKey-X}");
            selText = selText.replace(/𝐗/g, "X");
            selText = selText.replace(/{boldReplacementKey-X}/g, "𝐗");

            selText = selText.replace(/𝚈/g, "Y");
            selText = selText.replace(/𝘠/g, "Y");
            selText = selText.replace(/Y/g, "{boldReplacementKey-Y}");
            selText = selText.replace(/𝐘/g, "Y");
            selText = selText.replace(/{boldReplacementKey-Y}/g, "𝐘");

            selText = selText.replace(/𝚉/g, "Z");
            selText = selText.replace(/𝘡/g, "Z");
            selText = selText.replace(/Z/g, "{boldReplacementKey-Z}");
            selText = selText.replace(/𝐙/g, "Z");
            selText = selText.replace(/{boldReplacementKey-Z}/g, "𝐙");

            selText = selText.replace(/𝟶/g, "0");
            selText = selText.replace(/𝟶/g, "0");
            selText = selText.replace(/0/g, "{boldReplacementKey-0}");
            selText = selText.replace(/𝟎/g, "0");
            selText = selText.replace(/{boldReplacementKey-0}/g, "𝟎");

            selText = selText.replace(/𝟷/g, "1");
            selText = selText.replace(/𝟷/g, "1");
            selText = selText.replace(/1/g, "{boldReplacementKey-1}");
            selText = selText.replace(/𝟏/g, "1");
            selText = selText.replace(/{boldReplacementKey-1}/g, "𝟏");

            selText = selText.replace(/𝟸/g, "2");
            selText = selText.replace(/𝟸/g, "2");
            selText = selText.replace(/2/g, "{boldReplacementKey-2}");
            selText = selText.replace(/𝟐/g, "2");
            selText = selText.replace(/{boldReplacementKey-2}/g, "𝟐");

            selText = selText.replace(/𝟹/g, "3");
            selText = selText.replace(/𝟹/g, "3");
            selText = selText.replace(/3/g, "{boldReplacementKey-3}");
            selText = selText.replace(/𝟑/g, "3");
            selText = selText.replace(/{boldReplacementKey-3}/g, "𝟑");

            selText = selText.replace(/𝟺/g, "4");
            selText = selText.replace(/𝟺/g, "4");
            selText = selText.replace(/4/g, "{boldReplacementKey-4}");
            selText = selText.replace(/𝟒/g, "4");
            selText = selText.replace(/{boldReplacementKey-4}/g, "𝟒");

            selText = selText.replace(/𝟻/g, "5");
            selText = selText.replace(/𝟻/g, "5");
            selText = selText.replace(/5/g, "{boldReplacementKey-5}");
            selText = selText.replace(/𝟓/g, "5");
            selText = selText.replace(/{boldReplacementKey-5}/g, "𝟓");

            selText = selText.replace(/𝟼/g, "6");
            selText = selText.replace(/𝟼/g, "6");
            selText = selText.replace(/6/g, "{boldReplacementKey-6}");
            selText = selText.replace(/𝟔/g, "6");
            selText = selText.replace(/{boldReplacementKey-6}/g, "𝟔");

            selText = selText.replace(/𝟽/g, "7");
            selText = selText.replace(/𝟽/g, "7");
            selText = selText.replace(/7/g, "{boldReplacementKey-7}");
            selText = selText.replace(/𝟕/g, "7");
            selText = selText.replace(/{boldReplacementKey-7}/g, "𝟕");

            selText = selText.replace(/𝟾/g, "8");
            selText = selText.replace(/𝟾/g, "8");
            selText = selText.replace(/8/g, "{boldReplacementKey-8}");
            selText = selText.replace(/𝟖/g, "8");
            selText = selText.replace(/{boldReplacementKey-8}/g, "𝟖");

            selText = selText.replace(/𝟿/g, "9");
            selText = selText.replace(/𝟿/g, "9");
            selText = selText.replace(/9/g, "{boldReplacementKey-9}");
            selText = selText.replace(/𝟗/g, "9");
            selText = selText.replace(/{boldReplacementKey-9}/g, "𝟗");

            let upText = chText.join(selText);
            setUserText(upText);
            console.log(upText);
        }
    }

    const makeItalic = () => {
        // obtain the object reference for the <textarea>
        var txtarea = document.getElementById("textInp");
        // obtain the index of the first selected character

        // obtain the index of the last selected character

        // obtain the selected text

        let cursorStart = txtarea.selectionStart;
        let cursorEnd = txtarea.selectionEnd;
        let selText = userText.substring(cursorStart, cursorEnd);

        const chText = userText.split(selText);



        //do something with the selected content

        var selectionLength = cursorEnd - cursorStart;
        if (selectionLength <= 0) {
            props.showAlert('Select some text to change', 'warning');
        } else {
            //convert to standard number then
            // then if standard, covert to bold
            // or if bold, convert to standard
            // then covert 'bold replacement' to bold
            selText = selText.replace(/𝐚/g, "a");
            selText = selText.replace(/𝐛/g, "b");
            selText = selText.replace(/𝐜/g, "c");
            selText = selText.replace(/𝐝/g, "d");
            selText = selText.replace(/𝐞/g, "e");
            selText = selText.replace(/𝐟/g, "f");
            selText = selText.replace(/𝐠/g, "g");
            selText = selText.replace(/𝐡/g, "h");
            selText = selText.replace(/𝐢/g, "i");
            selText = selText.replace(/𝐣/g, "j");
            selText = selText.replace(/𝐤/g, "k");
            selText = selText.replace(/𝐥/g, "l");
            selText = selText.replace(/𝐦/g, "m");
            selText = selText.replace(/𝐧/g, "n");
            selText = selText.replace(/𝐨/g, "o");
            selText = selText.replace(/𝐩/g, "p");
            selText = selText.replace(/𝐪/g, "q");
            selText = selText.replace(/𝐫/g, "r");
            selText = selText.replace(/𝐬/g, "s");
            selText = selText.replace(/𝐭/g, "t");
            selText = selText.replace(/𝐮/g, "u");
            selText = selText.replace(/𝐯/g, "v");
            selText = selText.replace(/𝐰/g, "w");
            selText = selText.replace(/𝐱/g, "x");
            selText = selText.replace(/𝐲/g, "y");
            selText = selText.replace(/𝐳/g, "z");
            selText = selText.replace(/𝐀/g, "A");
            selText = selText.replace(/𝐁/g, "B");
            selText = selText.replace(/𝐂/g, "C");
            selText = selText.replace(/𝐃/g, "D");
            selText = selText.replace(/𝐄/g, "E");
            selText = selText.replace(/𝐅/g, "F");
            selText = selText.replace(/𝐆/g, "G");
            selText = selText.replace(/𝐇/g, "H");
            selText = selText.replace(/𝐈/g, "I");
            selText = selText.replace(/𝐉/g, "J");
            selText = selText.replace(/𝐊/g, "K");
            selText = selText.replace(/𝐋/g, "L");
            selText = selText.replace(/𝐌/g, "M");
            selText = selText.replace(/𝐍/g, "N");
            selText = selText.replace(/𝐎/g, "O");
            selText = selText.replace(/𝐏/g, "P");
            selText = selText.replace(/𝐐/g, "Q");
            selText = selText.replace(/𝐑/g, "R");
            selText = selText.replace(/𝐒/g, "S");
            selText = selText.replace(/𝐓/g, "T");
            selText = selText.replace(/𝐔/g, "U");
            selText = selText.replace(/𝐕/g, "V");
            selText = selText.replace(/𝗪/g, "W");
            selText = selText.replace(/𝐗/g, "X");
            selText = selText.replace(/𝐘/g, "Y");
            selText = selText.replace(/𝐙/g, "Z");
            selText = selText.replace(/𝟎/g, "0");
            selText = selText.replace(/𝟏/g, "1");
            selText = selText.replace(/𝟐/g, "2");
            selText = selText.replace(/𝟑/g, "3");
            selText = selText.replace(/𝟒/g, "4");
            selText = selText.replace(/𝟓/g, "5");
            selText = selText.replace(/𝟔/g, "6");
            selText = selText.replace(/𝟕/g, "7");
            selText = selText.replace(/𝟖/g, "8");
            selText = selText.replace(/𝟗/g, "9");

            selText = selText.replace(/a/g, "{italicReplacementKey-a}");
            selText = selText.replace(/𝘢/g, "a");
            selText = selText.replace(/{italicReplacementKey-a}/g, "𝘢");

            selText = selText.replace(/b/g, "{italicReplacementKey-b}");
            selText = selText.replace(/𝘣/g, "b");
            selText = selText.replace(/{italicReplacementKey-b}/g, "𝘣");

            selText = selText.replace(/c/g, "{italicReplacementKey-c}");
            selText = selText.replace(/𝘤/g, "c");
            selText = selText.replace(/{italicReplacementKey-c}/g, "𝘤");

            selText = selText.replace(/d/g, "{italicReplacementKey-d}");
            selText = selText.replace(/𝘥/g, "d");
            selText = selText.replace(/{italicReplacementKey-d}/g, "𝘥");

            selText = selText.replace(/e/g, "{italicReplacementKey-e}");
            selText = selText.replace(/𝘦/g, "e");
            selText = selText.replace(/{italicReplacementKey-e}/g, "𝘦");

            selText = selText.replace(/f/g, "{italicReplacementKey-f}");
            selText = selText.replace(/𝘧/g, "f");
            selText = selText.replace(/{italicReplacementKey-f}/g, "𝘧");

            selText = selText.replace(/g/g, "{italicReplacementKey-g}");
            selText = selText.replace(/𝘨/g, "g");
            selText = selText.replace(/{italicReplacementKey-g}/g, "𝘨");

            selText = selText.replace(/h/g, "{italicReplacementKey-h}");
            selText = selText.replace(/𝘩/g, "h");
            selText = selText.replace(/{italicReplacementKey-h}/g, "𝘩");

            selText = selText.replace(/i/g, "{italicReplacementKey-i}");
            selText = selText.replace(/𝘪/g, "i");
            selText = selText.replace(/{italicReplacementKey-i}/g, "𝘪");

            selText = selText.replace(/j/g, "{italicReplacementKey-j}");
            selText = selText.replace(/𝘫/g, "j");
            selText = selText.replace(/{italicReplacementKey-j}/g, "𝘫");

            selText = selText.replace(/k/g, "{italicReplacementKey-k}");
            selText = selText.replace(/𝘬/g, "k");
            selText = selText.replace(/{italicReplacementKey-k}/g, "𝘬");

            selText = selText.replace(/l/g, "{italicReplacementKey-l}");
            selText = selText.replace(/𝘭/g, "l");
            selText = selText.replace(/{italicReplacementKey-l}/g, "𝘭");

            selText = selText.replace(/m/g, "{italicReplacementKey-m}");
            selText = selText.replace(/𝘮/g, "m");
            selText = selText.replace(/{italicReplacementKey-m}/g, "𝘮");

            selText = selText.replace(/n/g, "{italicReplacementKey-n}");
            selText = selText.replace(/𝘯/g, "n");
            selText = selText.replace(/{italicReplacementKey-n}/g, "𝘯");

            selText = selText.replace(/o/g, "{italicReplacementKey-o}");
            selText = selText.replace(/𝘰/g, "o");
            selText = selText.replace(/{italicReplacementKey-o}/g, "𝘰");

            selText = selText.replace(/p/g, "{italicReplacementKey-p}");
            selText = selText.replace(/𝘱/g, "p");
            selText = selText.replace(/{italicReplacementKey-p}/g, "𝘱");

            selText = selText.replace(/q/g, "{italicReplacementKey-q}");
            selText = selText.replace(/𝘲/g, "q");
            selText = selText.replace(/{italicReplacementKey-q}/g, "𝘲");

            selText = selText.replace(/r/g, "{italicReplacementKey-r}");
            selText = selText.replace(/𝘳/g, "r");
            selText = selText.replace(/{italicReplacementKey-r}/g, "𝘳");

            selText = selText.replace(/s/g, "{italicReplacementKey-s}");
            selText = selText.replace(/𝘴/g, "s");
            selText = selText.replace(/{italicReplacementKey-s}/g, "𝘴");

            selText = selText.replace(/t/g, "{italicReplacementKey-t}");
            selText = selText.replace(/𝘵/g, "t");
            selText = selText.replace(/{italicReplacementKey-t}/g, "𝘵");

            selText = selText.replace(/u/g, "{italicReplacementKey-u}");
            selText = selText.replace(/𝘶/g, "u");
            selText = selText.replace(/{italicReplacementKey-u}/g, "𝘶");

            selText = selText.replace(/v/g, "{italicReplacementKey-v}");
            selText = selText.replace(/𝘷/g, "v");
            selText = selText.replace(/{italicReplacementKey-v}/g, "𝘷");

            selText = selText.replace(/w/g, "{italicReplacementKey-w}");
            selText = selText.replace(/𝘸/g, "w");
            selText = selText.replace(/{italicReplacementKey-w}/g, "𝘸");

            selText = selText.replace(/x/g, "{italicReplacementKey-x}");
            selText = selText.replace(/𝘹/g, "x");
            selText = selText.replace(/{italicReplacementKey-x}/g, "𝘹");

            selText = selText.replace(/y/g, "{italicReplacementKey-y}");
            selText = selText.replace(/𝘺/g, "y");
            selText = selText.replace(/{italicReplacementKey-y}/g, "𝘺");

            selText = selText.replace(/z/g, "{italicReplacementKey-z}");
            selText = selText.replace(/𝘻/g, "z");
            selText = selText.replace(/{italicReplacementKey-z}/g, "𝘻");

            selText = selText.replace(/A/g, "{italicReplacementKey-A}");
            selText = selText.replace(/𝘈/g, "A");
            selText = selText.replace(/{italicReplacementKey-A}/g, "𝘈");

            selText = selText.replace(/B/g, "{italicReplacementKey-B}");
            selText = selText.replace(/𝘉/g, "B");
            selText = selText.replace(/{italicReplacementKey-B}/g, "𝘉");

            selText = selText.replace(/C/g, "{italicReplacementKey-C}");
            selText = selText.replace(/𝘊/g, "C");
            selText = selText.replace(/{italicReplacementKey-C}/g, "𝘊");

            selText = selText.replace(/D/g, "{italicReplacementKey-D}");
            selText = selText.replace(/𝘋/g, "D");
            selText = selText.replace(/{italicReplacementKey-D}/g, "𝘋");

            selText = selText.replace(/E/g, "{italicReplacementKey-E}");
            selText = selText.replace(/𝘌/g, "E");
            selText = selText.replace(/{italicReplacementKey-E}/g, "𝘌");

            selText = selText.replace(/F/g, "{italicReplacementKey-F}");
            selText = selText.replace(/𝘍/g, "F");
            selText = selText.replace(/{italicReplacementKey-F}/g, "𝘍");

            selText = selText.replace(/G/g, "{italicReplacementKey-G}");
            selText = selText.replace(/𝘎/g, "G");
            selText = selText.replace(/{italicReplacementKey-G}/g, "𝘎");

            selText = selText.replace(/H/g, "{italicReplacementKey-H}");
            selText = selText.replace(/𝘏/g, "H");
            selText = selText.replace(/{italicReplacementKey-H}/g, "𝘏");

            selText = selText.replace(/I/g, "{italicReplacementKey-I}");
            selText = selText.replace(/𝘐/g, "I");
            selText = selText.replace(/{italicReplacementKey-I}/g, "𝘐");

            selText = selText.replace(/J/g, "{italicReplacementKey-J}");
            selText = selText.replace(/𝘑/g, "J");
            selText = selText.replace(/{italicReplacementKey-J}/g, "𝘑");

            selText = selText.replace(/K/g, "{italicReplacementKey-K}");
            selText = selText.replace(/𝘒/g, "K");
            selText = selText.replace(/{italicReplacementKey-K}/g, "𝘒");

            selText = selText.replace(/L/g, "{italicReplacementKey-L}");
            selText = selText.replace(/𝘓/g, "L");
            selText = selText.replace(/{italicReplacementKey-L}/g, "𝘓");

            selText = selText.replace(/M/g, "{italicReplacementKey-M}");
            selText = selText.replace(/𝘔/g, "M");
            selText = selText.replace(/{italicReplacementKey-M}/g, "𝘔");

            selText = selText.replace(/N/g, "{italicReplacementKey-N}");
            selText = selText.replace(/𝘕/g, "N");
            selText = selText.replace(/{italicReplacementKey-N}/g, "𝘕");

            selText = selText.replace(/O/g, "{italicReplacementKey-O}");
            selText = selText.replace(/𝘖/g, "O");
            selText = selText.replace(/{italicReplacementKey-O}/g, "𝘖");

            selText = selText.replace(/P/g, "{italicReplacementKey-P}");
            selText = selText.replace(/𝘗/g, "P");
            selText = selText.replace(/{italicReplacementKey-P}/g, "𝘗");

            selText = selText.replace(/Q/g, "{italicReplacementKey-Q}");
            selText = selText.replace(/𝘘/g, "Q");
            selText = selText.replace(/{italicReplacementKey-Q}/g, "𝘘");

            selText = selText.replace(/R/g, "{italicReplacementKey-R}");
            selText = selText.replace(/𝘙/g, "R");
            selText = selText.replace(/{italicReplacementKey-R}/g, "𝘙");

            selText = selText.replace(/S/g, "{italicReplacementKey-S}");
            selText = selText.replace(/𝘚/g, "S");
            selText = selText.replace(/{italicReplacementKey-S}/g, "𝘚");

            selText = selText.replace(/T/g, "{italicReplacementKey-T}");
            selText = selText.replace(/𝘛/g, "T");
            selText = selText.replace(/{italicReplacementKey-T}/g, "𝘛");

            selText = selText.replace(/U/g, "{italicReplacementKey-U}");
            selText = selText.replace(/𝘜/g, "U");
            selText = selText.replace(/{italicReplacementKey-U}/g, "𝘜");

            selText = selText.replace(/V/g, "{italicReplacementKey-V}");
            selText = selText.replace(/𝘝/g, "V");
            selText = selText.replace(/{italicReplacementKey-V}/g, "𝘝");

            selText = selText.replace(/W/g, "{italicReplacementKey-W}");
            selText = selText.replace(/𝘞/g, "W");
            selText = selText.replace(/{italicReplacementKey-W}/g, "𝘞");

            selText = selText.replace(/X/g, "{italicReplacementKey-X}");
            selText = selText.replace(/𝘟/g, "X");
            selText = selText.replace(/{italicReplacementKey-X}/g, "𝘟");

            selText = selText.replace(/Y/g, "{italicReplacementKey-Y}");
            selText = selText.replace(/𝘠/g, "Y");
            selText = selText.replace(/{italicReplacementKey-Y}/g, "𝘠");

            selText = selText.replace(/Z/g, "{italicReplacementKey-Z}");
            selText = selText.replace(/𝘡/g, "Z");
            selText = selText.replace(/{italicReplacementKey-Z}/g, "𝘡");

            selText = selText.replace(/0/g, "{italicReplacementKey-0}");
            selText = selText.replace(/𝟶/g, "0");
            selText = selText.replace(/{italicReplacementKey-0}/g, "𝟶");

            selText = selText.replace(/1/g, "{italicReplacementKey-1}");
            selText = selText.replace(/𝟷/g, "1");
            selText = selText.replace(/{italicReplacementKey-1}/g, "𝟷");

            selText = selText.replace(/2/g, "{italicReplacementKey-2}");
            selText = selText.replace(/𝟸/g, "2");
            selText = selText.replace(/{italicReplacementKey-2}/g, "𝟸");

            selText = selText.replace(/3/g, "{italicReplacementKey-3}");
            selText = selText.replace(/𝟹/g, "3");
            selText = selText.replace(/{italicReplacementKey-3}/g, "𝟹");

            selText = selText.replace(/4/g, "{italicReplacementKey-4}");
            selText = selText.replace(/𝟺/g, "4");
            selText = selText.replace(/{italicReplacementKey-4}/g, "𝟺");

            selText = selText.replace(/5/g, "{italicReplacementKey-5}");
            selText = selText.replace(/𝟻/g, "5");
            selText = selText.replace(/{italicReplacementKey-5}/g, "𝟻");

            selText = selText.replace(/6/g, "{italicReplacementKey-6}");
            selText = selText.replace(/𝟼/g, "6");
            selText = selText.replace(/{italicReplacementKey-6}/g, "𝟼");

            selText = selText.replace(/7/g, "{italicReplacementKey-7}");
            selText = selText.replace(/𝟽/g, "7");
            selText = selText.replace(/{italicReplacementKey-7}/g, "𝟽");

            selText = selText.replace(/8/g, "{italicReplacementKey-8}");
            selText = selText.replace(/𝟾/g, "8");
            selText = selText.replace(/{italicReplacementKey-8}/g, "𝟾");

            selText = selText.replace(/9/g, "{italicReplacementKey-9}");
            selText = selText.replace(/𝟿/g, "9");
            selText = selText.replace(/{italicReplacementKey-9}/g, "𝟿");

            let upText = chText.join(selText);
            setUserText(upText);
            console.log(upText);
        }
    }

    const makeTypewriter = () => {
        // obtain the object reference for the <textarea>
        var txtarea = document.getElementById("textInp");
        // obtain the index of the first selected character

        // obtain the index of the last selected character

        // obtain the selected text

        let cursorStart = txtarea.selectionStart;
        let cursorEnd = txtarea.selectionEnd;
        let selText = userText.substring(cursorStart, cursorEnd);

        const chText = userText.split(selText);



        //do something with the selected content

        var selectionLength = cursorEnd - cursorStart;
        if (selectionLength <= 0) {
            props.showAlert('Select some text to change', 'warning');
        } else {
            //convert to standard number then
            // then if standard, covert to bold
            // or if bold, convert to standard
            // then covert 'bold replacement' to bold
            selText = selText.replace(/𝐚/g, "a");
      selText = selText.replace(/𝘢/g, "a");
      selText = selText.replace(/a/g, "{typewriterReplacementKey-a}");
      selText = selText.replace(/𝚊/g, "a");
      selText = selText.replace(/{typewriterReplacementKey-a}/g, "𝚊");

      selText = selText.replace(/𝐛/g, "b");
      selText = selText.replace(/𝘣/g, "b");
      selText = selText.replace(/b/g, "{typewriterReplacementKey-b}");
      selText = selText.replace(/𝚋/g, "b");
      selText = selText.replace(/{typewriterReplacementKey-b}/g, "𝚋");

      selText = selText.replace(/𝐜/g, "c");
      selText = selText.replace(/𝘤/g, "c");
      selText = selText.replace(/c/g, "{typewriterReplacementKey-c}");
      selText = selText.replace(/𝚌/g, "c");
      selText = selText.replace(/{typewriterReplacementKey-c}/g, "𝚌");

      selText = selText.replace(/𝐝/g, "d");
      selText = selText.replace(/𝘥/g, "d");
      selText = selText.replace(/d/g, "{typewriterReplacementKey-d}");
      selText = selText.replace(/𝚍/g, "d");
      selText = selText.replace(/{typewriterReplacementKey-d}/g, "𝚍");

      selText = selText.replace(/𝐞/g, "e");
      selText = selText.replace(/𝘦/g, "e");
      selText = selText.replace(/e/g, "{typewriterReplacementKey-e}");
      selText = selText.replace(/𝚎/g, "e");
      selText = selText.replace(/{typewriterReplacementKey-e}/g, "𝚎");

      selText = selText.replace(/𝐟/g, "f");
      selText = selText.replace(/𝘧/g, "f");
      selText = selText.replace(/f/g, "{typewriterReplacementKey-f}");
      selText = selText.replace(/𝚏/g, "f");
      selText = selText.replace(/{typewriterReplacementKey-f}/g, "𝚏");

      selText = selText.replace(/𝐠/g, "g");
      selText = selText.replace(/𝘨/g, "g");
      selText = selText.replace(/g/g, "{typewriterReplacementKey-g}");
      selText = selText.replace(/𝚐/g, "g");
      selText = selText.replace(/{typewriterReplacementKey-g}/g, "𝚐");

      selText = selText.replace(/𝐡/g, "h");
      selText = selText.replace(/𝘩/g, "h");
      selText = selText.replace(/h/g, "{typewriterReplacementKey-h}");
      selText = selText.replace(/𝚑/g, "h");
      selText = selText.replace(/{typewriterReplacementKey-h}/g, "𝚑");

      selText = selText.replace(/𝐢/g, "i");
      selText = selText.replace(/𝘪/g, "i");
      selText = selText.replace(/i/g, "{typewriterReplacementKey-i}");
      selText = selText.replace(/𝚒/g, "i");
      selText = selText.replace(/{typewriterReplacementKey-i}/g, "𝚒");

      selText = selText.replace(/𝐣/g, "j");
      selText = selText.replace(/𝘫/g, "j");
      selText = selText.replace(/j/g, "{typewriterReplacementKey-j}");
      selText = selText.replace(/𝚓/g, "j");
      selText = selText.replace(/{typewriterReplacementKey-j}/g, "𝚓");

      selText = selText.replace(/𝐤/g, "k");
      selText = selText.replace(/𝘬/g, "k");
      selText = selText.replace(/k/g, "{typewriterReplacementKey-k}");
      selText = selText.replace(/𝚔/g, "k");
      selText = selText.replace(/{typewriterReplacementKey-k}/g, "𝚔");

      selText = selText.replace(/𝐥/g, "l");
      selText = selText.replace(/𝘭/g, "l");
      selText = selText.replace(/l/g, "{typewriterReplacementKey-l}");
      selText = selText.replace(/𝚕/g, "l");
      selText = selText.replace(/{typewriterReplacementKey-l}/g, "𝚕");

      selText = selText.replace(/𝐦/g, "m");
      selText = selText.replace(/𝘮/g, "m");
      selText = selText.replace(/m/g, "{typewriterReplacementKey-m}");
      selText = selText.replace(/𝚖/g, "m");
      selText = selText.replace(/{typewriterReplacementKey-m}/g, "𝚖");

      selText = selText.replace(/𝐧/g, "n");
      selText = selText.replace(/𝘯/g, "n");
      selText = selText.replace(/n/g, "{typewriterReplacementKey-n}");
      selText = selText.replace(/𝚗/g, "n");
      selText = selText.replace(/{typewriterReplacementKey-n}/g, "𝚗");

      selText = selText.replace(/𝚘/g, "o");
      selText = selText.replace(/𝘰/g, "o");
      selText = selText.replace(/o/g, "{typewriterReplacementKey-o}");
      selText = selText.replace(/𝐨/g, "o");
      selText = selText.replace(/{typewriterReplacementKey-o}/g, "𝐨");

      selText = selText.replace(/𝐩/g, "p");
      selText = selText.replace(/𝘱/g, "p");
      selText = selText.replace(/p/g, "{typewriterReplacementKey-p}");
      selText = selText.replace(/𝚙/g, "p");
      selText = selText.replace(/{typewriterReplacementKey-p}/g, "𝚙");

      selText = selText.replace(/𝐪/g, "q");
      selText = selText.replace(/𝘲/g, "q");
      selText = selText.replace(/q/g, "{typewriterReplacementKey-q}");
      selText = selText.replace(/𝚚/g, "q");
      selText = selText.replace(/{typewriterReplacementKey-q}/g, "𝚚");

      selText = selText.replace(/𝐫/g, "r");
      selText = selText.replace(/𝘳/g, "r");
      selText = selText.replace(/r/g, "{typewriterReplacementKey-r}");
      selText = selText.replace(/𝚛/g, "r");
      selText = selText.replace(/{typewriterReplacementKey-r}/g, "𝚛");

      selText = selText.replace(/𝐬/g, "s");
      selText = selText.replace(/𝘴/g, "s");
      selText = selText.replace(/s/g, "{typewriterReplacementKey-s}");
      selText = selText.replace(/𝚜/g, "s");
      selText = selText.replace(/{typewriterReplacementKey-s}/g, "𝚜");

      selText = selText.replace(/𝐭/g, "t");
      selText = selText.replace(/𝘵/g, "t");
      selText = selText.replace(/t/g, "{typewriterReplacementKey-t}");
      selText = selText.replace(/𝚝/g, "t");
      selText = selText.replace(/{typewriterReplacementKey-t}/g, "𝚝");

      selText = selText.replace(/𝐮/g, "u");
      selText = selText.replace(/𝘶/g, "u");
      selText = selText.replace(/u/g, "{typewriterReplacementKey-u}");
      selText = selText.replace(/𝚞/g, "u");
      selText = selText.replace(/{typewriterReplacementKey-u}/g, "𝚞");

      selText = selText.replace(/𝐯/g, "v");
      selText = selText.replace(/𝘷/g, "v");
      selText = selText.replace(/v/g, "{typewriterReplacementKey-v}");
      selText = selText.replace(/𝚟/g, "v");
      selText = selText.replace(/{typewriterReplacementKey-v}/g, "𝚟");

      selText = selText.replace(/𝐰/g, "w");
      selText = selText.replace(/𝘸/g, "w");
      selText = selText.replace(/w/g, "{typewriterReplacementKey-w}");
      selText = selText.replace(/𝚠/g, "w");
      selText = selText.replace(/{typewriterReplacementKey-w}/g, "𝚠");

      selText = selText.replace(/𝐱/g, "x");
      selText = selText.replace(/𝘹/g, "x");
      selText = selText.replace(/x/g, "{typewriterReplacementKey-x}");
      selText = selText.replace(/𝚡/g, "x");
      selText = selText.replace(/{typewriterReplacementKey-x}/g, "𝚡");

      selText = selText.replace(/𝐲/g, "y");
      selText = selText.replace(/𝘺/g, "y");
      selText = selText.replace(/y/g, "{typewriterReplacementKey-y}");
      selText = selText.replace(/𝚢/g, "y");
      selText = selText.replace(/{typewriterReplacementKey-y}/g, "𝚢");

      selText = selText.replace(/𝐳/g, "z");
      selText = selText.replace(/𝘻/g, "z");
      selText = selText.replace(/z/g, "{typewriterReplacementKey-z}");
      selText = selText.replace(/𝚣/g, "z");
      selText = selText.replace(/{typewriterReplacementKey-z}/g, "𝚣");

      selText = selText.replace(/𝐀/g, "A");
      selText = selText.replace(/𝘈/g, "A");
      selText = selText.replace(/A/g, "{typewriterReplacementKey-A}");
      selText = selText.replace(/𝙰/g, "A");
      selText = selText.replace(/{typewriterReplacementKey-A}/g, "𝙰");

      selText = selText.replace(/𝐁/g, "B");
      selText = selText.replace(/𝘉/g, "B");
      selText = selText.replace(/B/g, "{typewriterReplacementKey-B}");
      selText = selText.replace(/𝙱/g, "B");
      selText = selText.replace(/{typewriterReplacementKey-B}/g, "𝙱");

      selText = selText.replace(/𝐂/g, "C");
      selText = selText.replace(/𝘊/g, "C");
      selText = selText.replace(/C/g, "{typewriterReplacementKey-C}");
      selText = selText.replace(/𝙲/g, "C");
      selText = selText.replace(/{typewriterReplacementKey-C}/g, "𝙲");

      selText = selText.replace(/𝐃/g, "D");
      selText = selText.replace(/𝘋/g, "D");
      selText = selText.replace(/D/g, "{typewriterReplacementKey-D}");
      selText = selText.replace(/𝙳/g, "D");
      selText = selText.replace(/{typewriterReplacementKey-D}/g, "𝐃");

      selText = selText.replace(/𝐄/g, "E");
      selText = selText.replace(/𝘌/g, "E");
      selText = selText.replace(/E/g, "{typewriterReplacementKey-E}");
      selText = selText.replace(/𝙴/g, "E");
      selText = selText.replace(/{typewriterReplacementKey-E}/g, "𝙴");

      selText = selText.replace(/𝐅/g, "F");
      selText = selText.replace(/𝘍/g, "F");
      selText = selText.replace(/F/g, "{typewriterReplacementKey-F}");
      selText = selText.replace(/𝙵/g, "F");
      selText = selText.replace(/{typewriterReplacementKey-F}/g, "𝙵");

      selText = selText.replace(/𝐆/g, "G");
      selText = selText.replace(/𝘎/g, "G");
      selText = selText.replace(/G/g, "{typewriterReplacementKey-G}");
      selText = selText.replace(/𝙶/g, "G");
      selText = selText.replace(/{typewriterReplacementKey-G}/g, "𝙶");

      selText = selText.replace(/𝐇/g, "H");
      selText = selText.replace(/𝘏/g, "H");
      selText = selText.replace(/H/g, "{typewriterReplacementKey-H}");
      selText = selText.replace(/𝙷/g, "H");
      selText = selText.replace(/{typewriterReplacementKey-H}/g, "𝙷");

      selText = selText.replace(/𝐈/g, "I");
      selText = selText.replace(/𝘐/g, "I");
      selText = selText.replace(/I/g, "{typewriterReplacementKey-I}");
      selText = selText.replace(/𝙸/g, "I");
      selText = selText.replace(/{typewriterReplacementKey-I}/g, "𝙸");

      selText = selText.replace(/𝐉/g, "J");
      selText = selText.replace(/𝘑/g, "J");
      selText = selText.replace(/J/g, "{typewriterReplacementKey-J}");
      selText = selText.replace(/𝙹/g, "J");
      selText = selText.replace(/{typewriterReplacementKey-J}/g, "𝙹");

      selText = selText.replace(/𝐊/g, "K");
      selText = selText.replace(/𝘒/g, "K");
      selText = selText.replace(/K/g, "{typewriterReplacementKey-K}");
      selText = selText.replace(/𝙺/g, "K");
      selText = selText.replace(/{typewriterReplacementKey-K}/g, "𝙺");

      selText = selText.replace(/𝐋/g, "L");
      selText = selText.replace(/𝘓/g, "L");
      selText = selText.replace(/L/g, "{typewriterReplacementKey-L}");
      selText = selText.replace(/𝙻/g, "L");
      selText = selText.replace(/{typewriterReplacementKey-L}/g, "𝙻");

      selText = selText.replace(/𝐌/g, "M");
      selText = selText.replace(/𝘔/g, "M");
      selText = selText.replace(/M/g, "{typewriterReplacementKey-M}");
      selText = selText.replace(/𝙼/g, "M");
      selText = selText.replace(/{typewriterReplacementKey-M}/g, "𝙼");

      selText = selText.replace(/𝐍/g, "N");
      selText = selText.replace(/𝘕/g, "N");
      selText = selText.replace(/N/g, "{typewriterReplacementKey-N}");
      selText = selText.replace(/𝙽/g, "N");
      selText = selText.replace(/{typewriterReplacementKey-N}/g, "𝙽");

      selText = selText.replace(/𝐎/g, "O");
      selText = selText.replace(/𝘖/g, "O");
      selText = selText.replace(/O/g, "{typewriterReplacementKey-O}");
      selText = selText.replace(/𝙾/g, "O");
      selText = selText.replace(/{typewriterReplacementKey-O}/g, "𝙾");

      selText = selText.replace(/𝐏/g, "P");
      selText = selText.replace(/𝘗/g, "P");
      selText = selText.replace(/P/g, "{typewriterReplacementKey-P}");
      selText = selText.replace(/𝙿/g, "P");
      selText = selText.replace(/{typewriterReplacementKey-P}/g, "𝙿");

      selText = selText.replace(/𝐐/g, "Q");
      selText = selText.replace(/𝘘/g, "Q");
      selText = selText.replace(/Q/g, "{typewriterReplacementKey-Q}");
      selText = selText.replace(/𝚀/g, "Q");
      selText = selText.replace(/{typewriterReplacementKey-Q}/g, "𝚀");

      selText = selText.replace(/𝐑/g, "R");
      selText = selText.replace(/𝘙/g, "R");
      selText = selText.replace(/R/g, "{typewriterReplacementKey-R}");
      selText = selText.replace(/𝚁/g, "R");
      selText = selText.replace(/{typewriterReplacementKey-R}/g, "𝚁");

      selText = selText.replace(/𝐒/g, "S");
      selText = selText.replace(/𝘚/g, "S");
      selText = selText.replace(/S/g, "{typewriterReplacementKey-S}");
      selText = selText.replace(/𝚂/g, "S");
      selText = selText.replace(/{typewriterReplacementKey-S}/g, "𝚂");

      selText = selText.replace(/𝚃/g, "T");
      selText = selText.replace(/𝘛/g, "T");
      selText = selText.replace(/T/g, "{typewriterReplacementKey-T}");
      selText = selText.replace(/𝐓/g, "T");
      selText = selText.replace(/{typewriterReplacementKey-T}/g, "𝐓");

      selText = selText.replace(/𝚄/g, "U");
      selText = selText.replace(/𝘜/g, "U");
      selText = selText.replace(/U/g, "{typewriterReplacementKey-U}");
      selText = selText.replace(/𝐔/g, "U");
      selText = selText.replace(/{typewriterReplacementKey-U}/g, "𝐔");

      selText = selText.replace(/𝐕/g, "V");
      selText = selText.replace(/𝘝/g, "V");
      selText = selText.replace(/V/g, "{typewriterReplacementKey-V}");
      selText = selText.replace(/𝚅/g, "V");
      selText = selText.replace(/{typewriterReplacementKey-V}/g, "𝚅");

      selText = selText.replace(/𝗪/g, "W");
      selText = selText.replace(/𝘞/g, "W");
      selText = selText.replace(/W/g, "{typewriterReplacementKey-W}");
      selText = selText.replace(/𝚆/g, "W");
      selText = selText.replace(/{typewriterReplacementKey-W}/g, "𝚆");

      selText = selText.replace(/𝐗/g, "X");
      selText = selText.replace(/𝘟/g, "X");
      selText = selText.replace(/X/g, "{typewriterReplacementKey-X}");
      selText = selText.replace(/𝚇/g, "X");
      selText = selText.replace(/{typewriterReplacementKey-X}/g, "𝚇");

      selText = selText.replace(/𝐘/g, "Y");
      selText = selText.replace(/𝘠/g, "Y");
      selText = selText.replace(/Y/g, "{typewriterReplacementKey-Y}");
      selText = selText.replace(/𝚈/g, "Y");
      selText = selText.replace(/{typewriterReplacementKey-Y}/g, "𝚈");

      selText = selText.replace(/𝐙/g, "Z");
      selText = selText.replace(/𝘡/g, "Z");
      selText = selText.replace(/Z/g, "{typewriterReplacementKey-Z}");
      selText = selText.replace(/𝚉/g, "Z");
      selText = selText.replace(/{typewriterReplacementKey-Z}/g, "𝚉");

      selText = selText.replace(/𝟎/g, "0");
      selText = selText.replace(/0/g, "{typewriterReplacementKey-0}");
      selText = selText.replace(/𝟶/g, "0");
      selText = selText.replace(/{typewriterReplacementKey-0}/g, "𝟶");

      selText = selText.replace(/𝟏/g, "1");
      selText = selText.replace(/1/g, "{typewriterReplacementKey-1}");
      selText = selText.replace(/𝟷/g, "1");
      selText = selText.replace(/{typewriterReplacementKey-1}/g, "𝟷");

      selText = selText.replace(/𝟐/g, "2");
      selText = selText.replace(/2/g, "{typewriterReplacementKey-2}");
      selText = selText.replace(/𝟸/g, "2");
      selText = selText.replace(/{typewriterReplacementKey-2}/g, "𝟸");

      selText = selText.replace(/𝟑/g, "3");
      selText = selText.replace(/3/g, "{typewriterReplacementKey-3}");
      selText = selText.replace(/𝟹/g, "3");
      selText = selText.replace(/{typewriterReplacementKey-3}/g, "𝟹");

      selText = selText.replace(/𝟒/g, "4");
      selText = selText.replace(/4/g, "{typewriterReplacementKey-4}");
      selText = selText.replace(/𝟺/g, "4");
      selText = selText.replace(/{typewriterReplacementKey-4}/g, "𝟺");

      selText = selText.replace(/𝟓/g, "5");
      selText = selText.replace(/5/g, "{typewriterReplacementKey-5}");
      selText = selText.replace(/𝟻/g, "5");
      selText = selText.replace(/{typewriterReplacementKey-5}/g, "𝟻");

      selText = selText.replace(/𝟔/g, "6");
      selText = selText.replace(/6/g, "{typewriterReplacementKey-6}");
      selText = selText.replace(/𝟼/g, "6");
      selText = selText.replace(/{typewriterReplacementKey-6}/g, "𝟼");

      selText = selText.replace(/𝟕/g, "7");
      selText = selText.replace(/7/g, "{typewriterReplacementKey-7}");
      selText = selText.replace(/𝟽/g, "7");
      selText = selText.replace(/{typewriterReplacementKey-7}/g, "𝟽");

      selText = selText.replace(/𝟖/g, "8");
      selText = selText.replace(/8/g, "{typewriterReplacementKey-8}");
      selText = selText.replace(/𝟾/g, "8");
      selText = selText.replace(/{typewriterReplacementKey-8}/g, "𝟾");

      selText = selText.replace(/𝟗/g, "9");
      selText = selText.replace(/9/g, "{typewriterReplacementKey-9}");
      selText = selText.replace(/𝟿/g, "9");
      selText = selText.replace(/{typewriterReplacementKey-9}/g, "𝟿");

            let upText = chText.join(selText);
            setUserText(upText);
            console.log(upText);
        }
    }



    return (
        <>
            <header className="mainHeader sticky-top border-bottom bg-white">
                <div className="container-fluid px-2 px-md-5">
                    <div className="row px-2 px-md-5">
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <div className="brandLogo py-2">
                                <a href="/">
                                    <img src={props.logo} className="rounded" alt="" width="75px" />
                                </a>
                            </div>
                            <div className="actionBar ms-2">
                                <button type="button" className="btn btn-sm btn-light me-2" onClick={removeStoredCap}><i className="bi bi-trash3"></i> Delete</button>
                                <button type="button" className="btn btn-sm btn-light me-2" onClick={makeItBold}><i className="bi bi-type-bold"></i> Bold</button>
                                <button type="button" className="btn btn-sm btn-light me-2" onClick={makeItalic}><i className="bi bi-type-italic"></i> Italics</button>
                                <button type="button" className="btn btn-sm btn-light me-2" onClick={makeTypewriter}><i className="bi bi-fonts"></i> Typewriter</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center">
                        <div className="statsBar">
                                <div className="wordsStat me-2">
                                    <CircularProgressbar
                                        value={userText.length}
                                        maxValue={2200}
                                        className="progressCircleCopy"
                                        text={userText.length}
                                        strokeWidth={12}
                                        styles={buildStyles({
                                            strokeLinecap: "round",
                                            textSize: "20px",
                                            fontWeight: "bold",
                                            pathColor: "#F77737",
                                            textColor: "#F77737",
                                            trailColor: "#EAEAEA",
                                            backgroundColor: "#F77737",
                                        })}
                                    />
                                    <p className='text-end'>{userText.length} of 2200
                                        <small className='d-block'>Characters</small>
                                    </p>
                                </div>
                                <div className="hashtagStat">
                                    <CircularProgressbar
                                        value={(userText.match(/(^|\W)(#[a-z\d][\w-]*)/gi) || []).length}
                                        maxValue={30}
                                        className="progressCircleCopy"
                                        text={(userText.match(/(^|\W)(#[a-z\d][\w-]*)/gi) || []).length}
                                        strokeWidth={12}
                                        styles={buildStyles({
                                            strokeLinecap: "round",
                                            textSize: "20px",
                                            fontWeight: "bold",
                                            pathColor: "#F77737",
                                            textColor: "#F77737",
                                            trailColor: "#EAEAEA",
                                            backgroundColor: "#F77737",
                                        })}
                                    />
                                    <p className='text-end'>{(userText.match(/(^|\W)(#[a-z\d][\w-]*)/gi) || []).length} of 30
                                        <small className='d-block'>Hashtags</small>
                                    </p>
                                </div>
                            </div>
                            <div className="actionsBtn">
                                <button className="cbtn cbtn-secondary float-right" onClick={copyTextClipboard}><i className="bi bi-clipboard mr-2"></i> Copy</button>
                            </div>


                        </div>
                    </div>

                    <div className="row px-2 px-md-5 mt-3">
                        <div className="col-12 col-md-6">
                            {/* <div className="actionBar">
                                <button type="button" className="btn btn-sm btn-light me-2" onClick={removeStoredCap}><i className="bi bi-trash3"></i> Delete</button>
                                <button type="button" className="btn btn-sm btn-light me-2" onClick={makeItBold}><i className="bi bi-type-bold"></i> Bold</button>
                                <button type="button" className="btn btn-sm btn-light me-2" onClick={makeItalic}><i className="bi bi-type-italic"></i> Italics</button>
                                <button type="button" className="btn btn-sm btn-light me-2"><i className="bi bi-fonts"></i> Text</button>
                            </div> */}
                        </div>
                        <div className="col-12 col-md-6">
                            {/* <div className="statsBar">
                                <div className="wordsStat me-2">
                                    <CircularProgressbar
                                        value={userText.length}
                                        maxValue={2200}
                                        className="progressCircleCopy"
                                        text={userText.length}
                                        strokeWidth={12}
                                        styles={buildStyles({
                                            strokeLinecap: "round",
                                            textSize: "20px",
                                            fontWeight: "bold",
                                            pathColor: "#F77737",
                                            textColor: "#F77737",
                                            trailColor: "#EAEAEA",
                                            backgroundColor: "#F77737",
                                        })}
                                    />
                                    <p className='text-end'>{userText.length} of 2200
                                        <small className='d-block'>Characters</small>
                                    </p>
                                </div>
                                <div className="hashtagStat">
                                    <CircularProgressbar
                                        value={(userText.match(/(^|\W)(#[a-z\d][\w-]*)/gi) || []).length}
                                        maxValue={30}
                                        className="progressCircleCopy"
                                        text={(userText.match(/(^|\W)(#[a-z\d][\w-]*)/gi) || []).length}
                                        strokeWidth={12}
                                        styles={buildStyles({
                                            strokeLinecap: "round",
                                            textSize: "20px",
                                            fontWeight: "bold",
                                            pathColor: "#F77737",
                                            textColor: "#F77737",
                                            trailColor: "#EAEAEA",
                                            backgroundColor: "#F77737",
                                        })}
                                    />
                                    <p className='text-end'>{(userText.match(/(^|\W)(#[a-z\d][\w-]*)/gi) || []).length} of 30
                                        <small className='d-block'>Hashtags</small>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>

            <section id="inputArea" className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 m-auto">
                            <textarea className="form-control userCaptionArea bg-light" placeholder='Type or paste your content here' id="textInp" rows="6" maxLength="2200" value={userText} onChange={changeInputText}></textarea>
                            <p className='text-secondary'><small>Instagram post max length: 2200 characters | Instagram hashtag limit: 30 hashtags</small></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main