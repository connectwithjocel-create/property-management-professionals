// Approved legal content, copied from the live site (last updated Oct 8, 2026).
// Do not edit wording here without approval. Blocks: string = paragraph, string[] = list.

export type LegalSection = { title: string; body: (string | string[])[] };
export type LegalDoc = { eyebrow: string; title: string; intro: string; updated: string; preface: string; sections: LegalSection[] };

const contact = [
  "Property Management Professionals",
  "A DBA of Property Investment Professionals LLC",
  "Phone: (612) 210-8424",
  "Email: info@propertymanagementprofessionals.net",
  "Website: propertymanagementprofessionals.com",
];

export const privacy: LegalDoc = {
  eyebrow: "Your information & privacy",
  title: "Privacy Policy",
  intro: "This Privacy Policy explains how Property Management Professionals may collect, use and protect information when you visit our website, send a rental inquiry, submit a direct booking inquiry, request a management quote, or communicate with us.",
  updated: "October 8, 2026",
  preface: "Property Management Professionals is a DBA of Property Investment Professionals LLC. This policy applies to information collected through propertymanagementprofessionals.com and through forms, communications and services connected with our rental, vacation-stay and property management operations.",
  sections: [
    { title: "Who We Are", body: [
      "Property Management Professionals provides information about residential rental properties and vacation stays in East Central Minnesota, and offers property management services to property owners.",
      "Visitors may use our website to explore properties, submit a Rental Inquiry, submit a Direct Booking Inquiry, request a Management Quote, or contact our team with questions." ] },
    { title: "Information We May Collect", body: [
      "The information we collect depends on how you interact with our website and services.",
      "Information you provide directly",
      ["Your name.", "Email address.", "Phone number.", "Property or unit you are interested in.", "Rental-related information submitted through a Rental Inquiry.",
        "Preferred property, travel dates, guest count, and other information submitted through a Direct Booking Inquiry.",
        "Property details submitted through a Management Quote request, such as property address, property type, number of units and rental goals.",
        "Questions, messages, or other information you voluntarily send to our team."],
      "Information collected automatically",
      "When you visit our website, certain technical information may be collected automatically by our website platform or connected service providers, including information such as browser type, device type, IP address, pages visited, referring pages, and general website usage information." ] },
    { title: "How We May Use Your Information", body: [
      "We may use information collected through our website and communications to:",
      ["Respond to rental inquiries.", "Respond to direct booking inquiries.", "Respond to property management quote requests from property owners.",
        "Provide information about property availability and next steps.", "Communicate regarding a rental, booking, stay, property, management service, or service request.",
        "Maintain contact and inquiry records.", "Provide customer service and operational support.", "Send follow-up communications when appropriate.",
        "Improve our website, forms, communications, and services.", "Protect our website, properties, customers, team members, and business operations.",
        "Comply with applicable legal or regulatory obligations."] ] },
    { title: "Email and Text Message Communications", body: [
      "If you provide an email address or phone number, we may use that information to respond to your inquiry and communicate with you regarding the property, rental, booking, management quote, or other request that you submitted.",
      "Where you separately consent to receive marketing communications, we may also send promotional, informational, or follow-up messages.",
      "You may opt out of marketing emails by using the unsubscribe option provided in the message. You may opt out of text messages at any time by replying STOP, and reply HELP for help. Message frequency varies. Message and data rates may apply depending on your mobile carrier and service plan.",
      "We do not sell, rent or share mobile phone numbers or text-message consent with third parties or affiliates for their marketing or promotional purposes.",
      "Opting out of marketing messages does not prevent us from sending necessary service-related communications concerning an active rental inquiry, reservation, stay, management service, or other transaction." ] },
    { title: "Cookies and Website Data", body: [
      "Our website and connected technology providers may use cookies, pixels, local storage, or similar technologies to help the website function, understand website usage, remember preferences, improve performance, and support analytics or marketing activities.",
      "Most web browsers allow you to control or disable cookies through browser settings. Disabling certain cookies may affect how some portions of the website function." ] },
    { title: "How Information May Be Shared", body: [
      "We may share information when reasonably necessary to operate our business and provide the services requested by you.",
      "Information may be shared with service providers that assist with functions such as:",
      ["Website hosting and website forms.", "Customer relationship management.", "Email and text message communications.", "Rental, booking and property management operations.",
        "Payment or transaction processing when applicable.", "Analytics, security, and technical support."],
      "The restriction on sharing mobile phone numbers and text-message consent described in Section 4 applies to all of these providers.",
      "We may also disclose information when required by law, legal process, court order, or a valid government request, or when reasonably necessary to protect rights, property, safety, or prevent fraud or abuse." ] },
    { title: "Data Retention and Security", body: [
      "We may retain information for as long as reasonably necessary to respond to inquiries, maintain business and transaction records, support rental, booking or management operations, comply with legal obligations, resolve disputes, and protect our legitimate business interests.",
      "We use reasonable administrative and technical safeguards intended to protect information under our control. However, no website, electronic transmission, database, or storage system can be guaranteed to be completely secure." ] },
    { title: "Third-Party Websites and Services", body: [
      "Our website may contain links to third-party websites, booking platforms, social media pages, or other external services.",
      "When you leave our website and interact with another company or platform, that company's privacy practices and terms apply. We encourage you to review the privacy policies of third-party services before providing personal information to them." ] },
    { title: "Children's Privacy", body: [
      "Our website and inquiry forms are intended for adults who are seeking rental housing, vacation accommodations, property management services, or related information. They are not designed to knowingly collect personal information directly from children." ] },
    { title: "Your Privacy Choices", body: [
      "You may contact us if you have questions about personal information you previously submitted, want to update inaccurate contact information, or want to request that we stop sending optional marketing communications.",
      "Certain information may need to be retained when required for legitimate business, legal, accounting, security, rental, booking, or management purposes." ] },
    { title: "Changes to This Privacy Policy", body: [
      "We may update this Privacy Policy from time to time as our website, services, technology, or legal requirements change.",
      "When the policy is updated, the revised version may be posted on this page with a new \"Last Updated\" date. We encourage visitors to review this page periodically." ] },
    { title: "Contact Us", body: [
      "If you have questions about this Privacy Policy or information you submitted through our website, please contact Property Management Professionals.", contact ] },
  ],
};

export const terms: LegalDoc = {
  eyebrow: "Website terms",
  title: "Terms of Service",
  intro: "These Terms of Service explain the rules that apply when you use the Property Management Professionals website, view property information, submit a Rental Inquiry or Direct Booking Inquiry, request a Management Quote, or use links and services available through this website.",
  updated: "October 8, 2026",
  preface: "These Terms of Service apply to the Property Management Professionals website and website-based inquiries. They do not replace the terms of a signed lease, rental agreement, reservation agreement, management agreement, payment agreement, house rules, or the terms of a third-party booking platform.",
  sections: [
    { title: "Acceptance of Terms", body: [
      "By accessing or using this website, you agree to these Terms of Service. If you do not agree with these terms, you should not use the website or submit information through its forms.",
      "These terms apply to visitors who browse property information, submit inquiries or quote requests, communicate with our team through the website, or otherwise use website features provided by Property Management Professionals." ] },
    { title: "About Our Website", body: [
      "Property Management Professionals is a DBA of Property Investment Professionals LLC.",
      "This website provides information about residential rental properties, vacation stays and property management services in East Central Minnesota, and provides ways for visitors to contact our team.",
      "Our website may include residential property information, vacation rental information, Rental Inquiry forms, Direct Booking Inquiry forms, Management Quote forms, contact information, external booking links, and other related content." ] },
    { title: "Property Information", body: [
      "We make reasonable efforts to provide useful and accurate information about properties displayed on this website. However, property details may change over time.",
      "Information such as availability, property features, bedroom and bathroom counts, occupancy limits, amenities, photographs, descriptions, policies, and other property details should be confirmed before entering into a rental or reservation.",
      "Property photographs are intended to provide a general representation of the property. Furnishings, decor, landscaping, fixtures, equipment, and other details may change.",
      "Property listings are not a live vacancy guarantee.",
      "A property shown on our website may already be occupied, reserved, unavailable, or subject to changing availability." ] },
    { title: "Rental Inquiries", body: [
      "Our Rental Inquiry form allows prospective renters to express interest in a residential rental property or unit.",
      "Submitting a Rental Inquiry:",
      ["Does not reserve a property or unit.", "Does not guarantee that a property is available.", "Does not guarantee approval for a rental.", "Does not create a landlord-tenant relationship.", "Does not create or replace a lease or rental agreement."],
      "Additional information, screening, documentation, approvals, deposits, agreements, or other requirements may apply before a rental can be completed." ] },
    { title: "Direct Booking Inquiries", body: [
      "Our Direct Booking Inquiry form allows prospective vacation guests to contact us about a preferred vacation property, travel dates, and guest count.",
      "A Direct Booking Inquiry is not a reservation.",
      "Submitting an inquiry does not reserve the property or charge you. Availability, final pricing, payment, and reservation terms must be confirmed before the booking is complete.",
      "A reservation becomes confirmed only after the required booking process has been completed and confirmation has been provided through the applicable reservation process." ] },
    { title: "Management Quote Requests", body: [
      "Our Management Quote form allows property owners to tell us about a property they would like us to manage.",
      "A Management Quote request is not a management agreement.",
      "Submitting a request does not create a management relationship or obligate either party. Services, fees and responsibilities apply only after both parties agree on terms and sign a written management agreement.",
      "Any quote or estimate we provide is based on the information available at the time and may change after we review the property in more detail." ] },
    { title: "Availability, Pricing and Property Terms", body: [
      "Property availability, rental terms, nightly rates, fees, deposits, taxes, occupancy limits, minimum stays, cancellation terms, and other requirements may change and are subject to confirmation.",
      "Information displayed on this website should not be considered a final offer or guarantee unless it has been confirmed through the applicable rental or reservation process.",
      "If information displayed on this website differs from a final signed lease, rental agreement, reservation agreement, management agreement, booking confirmation, or applicable third-party platform terms, the finalized agreement or confirmation will control." ] },
    { title: "Leases, Rental Agreements and Reservations", body: [
      "Residential rentals may require a separate application, screening process, lease, deposit, payment, and other documentation before occupancy.",
      "Vacation stays may be subject to separate reservation terms, payment requirements, cancellation policies, property rules, occupancy requirements, and other booking conditions.",
      "Those separate agreements apply specifically to the rental or stay and may contain additional terms not stated on this website.",
      "If these website Terms of Service conflict with a valid signed lease, rental agreement, reservation agreement, management agreement, or confirmed booking terms applicable to a specific transaction, the specific agreement will govern that transaction." ] },
    { title: "Email, Phone and Text Communications", body: [
      "When you provide contact information through our website, you authorize us to use that information to respond to your inquiry and communicate with you regarding the property, rental, booking, stay, management quote, or other request you submitted.",
      "If you separately consent to marketing communications, we may send promotional or follow-up communications according to that consent.",
      "You may unsubscribe from optional marketing emails using the unsubscribe option contained in those messages. You may opt out of text messages at any time by replying STOP, and reply HELP for help. Message and data rates may apply.",
      "Transactional or service-related messages concerning an active inquiry, rental, reservation, stay, or management service may still be sent when reasonably necessary." ] },
    { title: "Third-Party Websites and Booking Platforms", body: [
      "Our website may contain links to third-party websites, including vacation booking platforms, social media services, related businesses, or other external services.",
      "Third-party websites are operated independently from Property Management Professionals. Their own terms, policies, fees, booking rules, privacy practices, and other requirements apply when you use those services.",
      "We are not responsible for the content, availability, policies, security, or operation of websites or services controlled by third parties." ] },
    { title: "Website Content and Intellectual Property", body: [
      "Unless otherwise indicated, the website's branding, written content, design elements, graphics, photographs, property presentation, and other original materials are owned by, licensed to, or used with permission by Property Management Professionals or its related parties.",
      "You may view and use this website for personal, non-commercial purposes related to learning about our properties and services.",
      "You may not reproduce, republish, distribute, modify, sell, or commercially exploit website materials without appropriate permission, except where otherwise permitted by law." ] },
    { title: "Acceptable Use", body: [
      "You agree not to misuse this website or its forms. Prohibited activity includes attempting to:",
      ["Submit knowingly false or misleading information.", "Interfere with website operation or security.", "Attempt unauthorized access to systems or data.",
        "Introduce malicious code, automated abuse, or harmful content.", "Use website information or forms for unlawful, fraudulent, or abusive purposes."] ] },
    { title: "Website Disclaimer", body: [
      "This website is provided for general informational and inquiry purposes. We make reasonable efforts to maintain useful and accurate content, but we do not guarantee that every page, description, property detail, photograph, link, or other item will always be complete, current, error-free, or continuously available.",
      "To the extent permitted by applicable law, the website and its content are provided without warranties of uninterrupted operation or absolute accuracy.",
      "Nothing on this website should be interpreted as legal, financial, tax, insurance, or other professional advice." ] },
    { title: "Limitation of Liability", body: [
      "To the extent permitted by applicable law, Property Management Professionals and Property Investment Professionals LLC will not be liable for indirect, incidental, special, consequential, or similar damages arising solely from use of, inability to use, or reliance upon this website or website content.",
      "This section does not limit rights or remedies that cannot legally be excluded or limited under applicable law." ] },
    { title: "Indemnification", body: [
      "To the extent permitted by applicable law, you agree to be responsible for losses or claims resulting from your unlawful misuse of this website, violation of these Terms of Service, or infringement of the rights of another person through your use of the website." ] },
    { title: "Governing Law", body: [
      "These website Terms of Service are intended to be governed by applicable laws of the State of Minnesota and applicable federal law, without limiting any rights that cannot legally be waived or restricted.",
      "A specific lease, rental agreement, reservation, management agreement, or other transaction may contain its own governing-law, venue, dispute-resolution, or related provisions. Those specific agreement terms will apply to that transaction." ] },
    { title: "Changes to These Terms", body: [
      "We may revise these Terms of Service from time to time as our website, services, business operations, or legal requirements change.",
      "Updated terms may be posted on this page with a revised \"Last Updated\" date. Continued use of the website after updated terms are posted is subject to the version then in effect." ] },
    { title: "Contact Us", body: [
      "If you have questions about these Terms of Service or about information provided on this website, please contact us.", contact ] },
  ],
};
