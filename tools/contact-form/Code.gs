/**
 * Roel Boutique B&B — contact form backend (Google Apps Script)
 *
 * Receives POSTs from site/contact.html and emails each enquiry to the
 * reservations inbox from your Google Workspace account. Optionally logs
 * every enquiry to a Google Sheet for a permanent record.
 *
 * ── Setup ────────────────────────────────────────────────────────────
 * 1. Go to https://script.google.com  → New project.
 * 2. Paste this file's contents into Code.gs (replace the default code).
 * 3. (Optional) To log enquiries to a Sheet: create a Google Sheet,
 *    copy its ID from the URL, and paste it into SHEET_ID below.
 *    Leave SHEET_ID = '' to skip logging (email only).
 * 4. Deploy → New deployment → type "Web app".
 *      • Execute as:  Me (your @roelboutique.com address)
 *      • Who has access:  Anyone
 *    Click Deploy, authorise when prompted, and copy the
 *    "Web app URL" (ends in /exec).
 * 5. Paste that /exec URL into site/contact.html (the form `action`)
 *    where the FORM_ENDPOINT placeholder is marked.
 *
 * Re-deploy (Manage deployments → edit → new version) whenever you
 * change this code.
 * ─────────────────────────────────────────────────────────────────────
 */

var MAIL_TO   = 'reservations@roelboutique.com'; // where enquiries are sent
var SHEET_ID  = '18TjrOZO3JbTEIIojy93dQ0lwH_bt3pnc73FrTx6wjzc'; // Google Sheet log of enquiries
var SITE_NAME = 'Roel Boutique B&B';

function doPost(e) {
  try {
    var p = (e && e.parameter) ? e.parameter : {};

    var name    = (p.name    || '').trim();
    var email   = (p.email   || '').trim();
    var phone   = (p.phone   || '').trim();
    var subject = (p.subject || '').trim();
    var message = (p.message || '').trim();

    // Minimal guard against empty/bot submissions.
    if (!name || !email || !message) {
      return ContentService.createTextOutput('Missing required fields.');
    }

    var body =
      'New enquiry from the ' + SITE_NAME + ' website\n\n' +
      'Name:    ' + name + '\n' +
      'Email:   ' + email + '\n' +
      'Phone:   ' + (phone || '—') + '\n' +
      'Subject: ' + (subject || '—') + '\n\n' +
      'Message:\n' + message + '\n';

    MailApp.sendEmail({
      to: MAIL_TO,
      replyTo: email,
      subject: 'Website enquiry: ' + (subject || 'No subject') + ' — ' + name,
      body: body
    });

    if (SHEET_ID) {
      // Sheets reads a leading + = - @ as a formula; prefix with ' to force text.
      var asText = function (v) { return /^[=+\-@]/.test(v) ? "'" + v : v; };
      var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Date', 'Name', 'Email', 'Phone', 'Subject', 'Message']);
      }
      sheet.appendRow([new Date(), asText(name), asText(email), asText(phone), asText(subject), asText(message)]);
    }

    return ContentService.createTextOutput('OK');
  } catch (err) {
    return ContentService.createTextOutput('Error: ' + err.message);
  }
}
