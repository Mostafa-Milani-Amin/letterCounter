const letterCounter = str => str.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"()*+,\-.\/:;<=>?\[\]_`{|}]|(?![*#0-9]+)[\p{Emoji}\p{Emoji_Modifier}\p{Emoji_Component}\p{Emoji_Modifier_Base}\p{Emoji_Presentation}]|Ⓐ|☭|✯|✙|ᛋ|卐|卍|࿕|࿖|࿗|࿘|ꖦ|☫|☤|❥|웃|유|☏|♚|▲|⚤|☒|♛|▼|♫|⌘|¡|♡|ღ|ツ|☼|❅|✎|✪|➳|✞|✿|✄|✫|★|\s+/gu, '').length;
