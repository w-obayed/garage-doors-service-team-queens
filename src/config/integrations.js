/**
 * GoHighLevel (GHL) and Third-Party Integrations Configuration
 * 
 * Instructions for Administrator:
 * 1. Webhook: In GHL, create an Automation Workflow with trigger "Inbound Webhook", copy the Webhook URL,
 *    and paste it into `ghl.webhookUrl` below.
 * 2. Live Chat Widget: In GHL Settings > Chat Widget, copy your Chat Widget embed script and paste it into
 *    `ghl.chatWidgetEmbedScript`, then set `ghl.isChatWidgetActive = true`.
 * 3. Calendar: In GHL Calendars, grab your dedicated Service Calendar link or iframe embed URL,
 *    paste it into `ghl.calendarEmbedUrl`, then set `ghl.isCalendarActive = true`.
 */

export const integrationsConfig = {
  ghl: {
    // 1. Webhook URL to capture contact form & booking requests directly into GHL CRM
    webhookUrl: "", // e.g. "https://services.leadconnectorhq.com/hooks/..."
    
    // 2. Chat Widget Embed Script
    chatWidgetEmbedScript: "", 
    isChatWidgetActive: false, // Set to true once embed code is added
    
    // 3. Calendar Embed URL
    calendarEmbedUrl: "", 
    isCalendarActive: false, // Set to true once calendar is configured
    
    // Default GHL Pipeline & Tag Settings
    defaultLeadTag: "website-lead",
    defaultSource: "Queens Garage Door Website",
    serviceTags: {
      "garage-door-repair": "service-repair",
      "spring-service": "service-spring",
      "garage-door-installation": "service-installation",
      "opener-service": "service-opener",
      "garage-door-maintenance": "service-maintenance",
      "other": "service-general"
    }
  },

  // Analytics placeholders
  analytics: {
    gaMeasurementId: "", // e.g. "G-XXXXXXXXXX"
    gtmContainerId: ""   // e.g. "GTM-XXXXXXX"
  }
};
