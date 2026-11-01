# GoHighLevel (GHL) CRM Integration & Onboarding Guide
### Garage Doors Service Team Queens

This guide details the step-by-step procedures to connect this website to your GoHighLevel (GHL) sub-account, configure automated workflows, embed the live chat widget, connect the service booking calendar, and update verified business information.

---

## 1. Updating Verified Business Information

All business details are centralized in:
`src/config/business.js`

When the business owner confirms the official US phone number, business email, physical address, and hours:

1. Open `src/config/business.js`.
2. Update the `verification` object:
   ```javascript
   verification: {
     isPhoneVerified: true,
     isEmailVerified: true,
     isAddressVerified: true,
     isHoursVerified: true,
     isWhatsAppVerified: true,
     isLogoVerified: true,
   }
   ```
3. Enter the verified values in `contact`:
   ```javascript
   contact: {
     phone: "(718) 555-0199",
     phoneFormatted: "(718) 555-0199",
     phoneRaw: "+17185550199",
     email: "service@garagedoorsserviceteamqueens.com",
     address: "Queens, NY 11375",
     hours: "Monday – Saturday: 8:00 AM – 6:00 PM",
     whatsAppNumber: "17185550199",
     whatsAppPrefillMessage: "Hello, I need help with my garage door. Can you please provide more information about your services?",
   }
   ```
4. Rebuild the site (`npm run build`). The header, footer, hero, contact pages, and WhatsApp button will automatically display the verified details.

---

## 2. Inbound Webhook (Form Leads to GHL CRM)

The website's **Contact Form** (`/contact`) and **Booking Request Form** (`/book-service`) are wired to send submissions directly to a GHL Inbound Webhook.

### Steps in GoHighLevel:
1. Log in to your GHL Sub-Account.
2. Go to **Automation** > **Workflows** > **Create Workflow** (Start from Scratch).
3. Set the Workflow Trigger:
   - Select **Inbound Webhook**.
   - Copy the generated Webhook URL (e.g., `https://services.leadconnectorhq.com/hooks/YOUR_UNIQUE_KEY`).
4. In this project, open `src/config/integrations.js` and paste your URL:
   ```javascript
   export const integrationsConfig = {
     ghl: {
       webhookUrl: "https://services.leadconnectorhq.com/hooks/YOUR_UNIQUE_KEY",
       ...
     }
   }
   ```
5. In GHL, submit a test form on the website to map the payload keys:
   - `fullName` -> GHL Contact First & Last Name
   - `phone` -> GHL Contact Phone
   - `email` -> GHL Contact Email
   - `zipCode` -> GHL Contact Postal Code
   - `serviceNeeded` or `serviceType` -> Tag: `service-[service-id]`
   - `preferredDate` & `preferredTime` -> Custom Fields: Preferred Appointment Date/Time
   - `issueDescription` or `description` -> Notes / Custom Field: Door Issue Details
   - `source` -> Opportunity Source ("Website Contact Form" or "Dedicated Booking Page")

---

## 3. Recommended GHL Pipeline & Stages

Create a pipeline in **Opportunities** named **"Garage Door Services"** with the following stages:

1. **New Website Inquiry** (Lead captured via contact form or booking request)
2. **Contacted / In Discussion** (Technician or dispatcher connected with homeowner)
3. **Appointment Scheduled** (Arrival window locked into dispatch calendar)
4. **Technician En Route / On Site** (Service visit in progress)
5. **Estimate Sent / Work Approved** (Repair, spring replacement, or new door authorized)
6. **Job Completed** (Repairs finalized, safety reversal checked, invoice settled)
7. **Review Requested** (Automated follow-up requesting a review on Google Business Profile)
8. **Lost / Cancelled**

---

## 4. GHL Live Chat Widget Integration

The marketing audit revealed the absence of an active website chat widget. This website has a dedicated insertion point.

### Steps in GoHighLevel:
1. In GHL, go to **Sites** > **Chat Widget**.
2. Customize your chat widget appearance (Colors: Primary Navy `#14243A`, Accent Orange `#F28C28`).
3. Set greeting:
   > *"Hello! Welcome to Garage Doors Service Team Queens. How can we help you today?"*
4. Click **Get Code** and copy the embed script snippet.
5. In `src/config/integrations.js`:
   ```javascript
   ghl: {
     chatWidgetEmbedScript: `<script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="YOUR_GHL_WIDGET_ID"></script>`,
     isChatWidgetActive: true,
   }
   ```
6. Rebuild the site. The real GHL chat will now load seamlessly on all pages.

---

## 5. GHL Calendar Embed (Online Booking Page)

### Steps in GoHighLevel:
1. In GHL, go to **Calendars** > **Calendar Settings** > **Create Calendar**.
2. Name: **"Queens Garage Door Service Dispatch"**.
3. Set appointment slot duration (e.g. 60 or 90 minutes).
4. Configure working hours and buffer times.
5. Grab the **Share / Embed Link** (e.g. `https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID`).
6. In `src/config/integrations.js`:
   ```javascript
   ghl: {
     calendarEmbedUrl: "https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID",
     isCalendarActive: true,
   }
   ```
7. Rebuild the site. The dedicated `/book-service` page will instantly display the live interactive GHL Calendar.

---

## 6. Missed Call Text-Back Workflow

The marketing audit identified an SMS-capable business number. In GHL:
1. Go to **Settings** > **Phone Numbers**.
2. Enable **Missed Call Text Back**.
3. Suggested SMS template:
   > *"Hi, this is Garage Doors Service Team Queens. Sorry we missed your call! How can we assist with your garage door today?"*
