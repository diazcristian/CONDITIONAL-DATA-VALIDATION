# Performance Notification Email Script

This is a Google Apps Script written in JavaScript that sends performance notification emails based on certain conditions. The script reads data from a Google Sheets spreadsheet, evaluates specific criteria, and sends emails to users when conditions are met.

## How to Use

1. **Google Sheets Setup**: Ensure you have a Google Sheets document with the following structure in a sheet named "db-ldap":

   | ldap  | closed_week | TRT_Email | TRT_Chat |
   |-------|-------------|-----------|----------|
   | User1 | yyyy-mm-dd  | 0.85      | 0.75     |
   | User2 | yyyy-mm-dd  | 0.90      | 0.80     |
   | ...   | ...         | ...       | ...      |

2. **Google Apps Script Setup**:
   - Open your Google Sheets document.
   - From the menu, select Extensions > Apps Script.
   - Copy and paste the provided script into the Apps Script editor.
   - Save the script.

3. **Configuration**:
   - Uncomment the line `//MailApp.sendEmail(ldap, subject, messageBody)` and configure it to send actual emails. Be sure to adhere to Google's email sending policies.
   
4. **Execution**:
   - Run the `sendEmails` function from the Apps Script editor.
   - The script will iterate through the rows, evaluate the conditions, and send emails if the criteria are met.

## Requirements

- A Google Sheets document containing user data as described in the "How to Use" section.
- Google Apps Script environment.

## Configuration

- Modify the subject, message body, and email template within the script as needed.
- Uncomment the `MailApp.sendEmail` line and provide valid email sending credentials.

## Author

This script was created by Cristian Diaz.
