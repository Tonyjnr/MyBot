require("dotenv").config(); // Load environment variables

module.exports = {
  prefix: process.env.PREFIX || "", // Command prefix

  ownerName: process.env.OWNER_NAME || "W乇乃のｱ丂ｷの尺ム乇", // Owner name

  ownerNumber: process.env.OWNER_NUMBER || "2349153232038", // Your WhatsApp number

  mode: process.env.MODE || "private", // Bot mode: 'public' or 'private'

  region: process.env.REGION || "Nigeria", // Region

  botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

  exifPack: process.env.EXIF_PACK || "TONY STOLE IT", // Sticker pack name

  exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

  timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

  presenceStatus: process.env.PRESENCE_STATUS || "recording", // Bot presence status

  autoRead: process.env.AUTO_READ === "false", // Auto-read messages (true or false)

  autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

  autoReact: process.env.AUTO_REACT === "false", // Auto-react (true or false)

  sessionId:
    process.env.SESSION_ID ||
    "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU05Z3JCY1R4QkszbGhScEpJRkMybjRSL2FqU2gwRUJ2cW1wOExwL0hVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmlFOWVPS0ZISVI5aTd3TFZPMW9JNEo4WkUycmhlN25GUndFaDlNRUhnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSC9Idzc3anlqVHJQbkNIWEhzdVF6cWJjKzhiRVRrKzlNYURjbkJMTkdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZblJocGZGMUQvcVFqWmZra2VyMVB4b1dlUVJJanRtVkorL3kwbnEvOVdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJTmYyVUoxSm91MldMbFY3TFhhNXBvNWhaamljbUMxNTFmcVlUY3UzMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA0UzV3dEtlVnJWTnB0UWxuVFVWekwvRFkweDN5enNScTZqaWZvLzRUMkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT004TWlFaVRxSDYycDVkVXlxdlA4VVJ2SVprN3ZwcTYxOVQ0Y2h1MkVrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWVSRUUyZU5qanQ0YlpMY21lZk83bFY4ckdpK094MGJXcVhialFZYWcxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgrWkpIWCtRTEN4UjZqT2VzZm85Skoxdi9kb3BZWXpEVFQ1ZDRJMlpDS1ZnVWptRmxBOGtwNVFWZW1wQ3VsdW0yazZSSkpFczRFNndwcG1od0hzTUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJUTWhDY3NqSVJ4WWVjWVBlcS9IWXdkR2FKTXFzenhLeWNQRnFNdittYzNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI2TjNOUE5UViIsIm1lIjp7ImlkIjoiMjM0OTE1MzIzMjAzODo0NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjQ2NzUxMTcyMDE0MTkzOjQ1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlhOdCswR0VOaTkrN3NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSzlHRU5qT2VYYWkxQWJDQjJ2bW1yODRLT0tWbmJyNWRVTFpzYmpkMTB5ST0iLCJhY2NvdW50U2lnbmF0dXJlIjoidmpEMitJejFBNzRndE5zWkY4TThFUGltYUVZSVFNMCt5ZGhPdktodHhYVDlCZW9JS2VuRmFkMnpVRGsxTDYydXpaMHk4YUtGcGdrSkRzWHV2aGFrRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImJ4WVpCT2VGK251blhqS3FROXh0d09WeXpzdGw4dUdDQ1lvWW0wQUppaXlDMkNyTk5ESEdmb2paejNwTFZlSTVISEhZdWRNQUlUWkZBNm8xSUEyZURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE1MzIzMjAzODo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTdlJoRFl6bmwyb3RRR3dnZHI1cHEvT0NqaWxaMjYrWFZDMmJHNDNkZE1pIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYzNjc4NDcsImxhc3RQcm9wSGFzaCI6IklYb0RwIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNMXkifQ==", // Add Your Session ID here

  autoRejectEnabled: process.env.AUTO_REJECT_ENABLED === "false", // Auto-reject calls feature (true or false)
};
