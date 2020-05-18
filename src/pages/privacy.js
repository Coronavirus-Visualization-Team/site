/** @jsx jsx */
import React from "react"
import { Box, jsx, Text } from "theme-ui"
import { Helmet } from "react-helmet"

const PrivacyPage = props => {
  return (
    <Box
      sx={{
        position: "relative",

        display: "flex",
        flexDirection: "column"
      }}
    >
      <Helmet title="CVT | Privacy" />
      <Text
        sx={{
          fontSize: [3, 4],
          maxWidth: ["100%", "65%"]
        }}
      >
        Privacy Policy
      </Text>

      <Text
        sx={{
          fontSize: [1, 2],
          maxWidth: ["100%", "65%"]
        }}
      >
        Your privacy is important. Read how your data is collected and handled below.
      </Text>

      <Box
        sx={{
          width: "100%",
          mt: 7,
          lineHeight: "2.5em"
        }}
      >
        {/** PRIVACY POLICY CONTENT BELOW */}
        <Text
          sx={{
            fontSize: [3, 4],
            width: "100%",
            color: "darker"
          }}
        >
          Overview
        </Text>
        <Text
          sx={{
            fontSize: [0, 1],
            fontWeight: "400",
            width: "100%",
            color: "slate"
          }}
        >
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit and interact with CVT and/or the site https://cvt-site.netlify.app (the “Site” or the "Service").
        </Text>

        <Text
          sx={{
            fontSize: [2, 3],
            width: "100%",
            color: "darker",
            mt: 5
          }}
        >
          Personal Information We Collect
        </Text>
        <Text
          sx={{
            fontSize: [0, 1],
            fontWeight: "400",
            width: "100%",
            color: "slate"
          }}
        >
          <ol>
            <li>Cookies - Cookies are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>

            <li>Full Name - Your full name may be collected, such as when you sign up for the mailing list.</li>

            <li>Email Address - Your email address may be collected, such as when you sign up for the mailing list.</li>
          </ol>
        </Text>

        <Text
          sx={{
            fontSize: [2, 3],
            width: "100%",
            color: "darker",
            mt: 5
          }}
        >
          Use of Personal Information
        </Text>
        <Text
          sx={{
            fontSize: [0, 1],
            fontWeight: "400",
            width: "100%",
            color: "slate"
          }}
        >We use your information, such as your email address, to send emails and communication to you. Your information may also be used to improve and operate the Site and Service.</Text>

        <Text
          sx={{
            fontSize: [2, 3],
            width: "100%",
            color: "darker",
            mt: 5
          }}
        >
          Sharing of Personal Information
        </Text>
        <Text
          sx={{
            fontSize: [0, 1],
            fontWeight: "400",
            width: "100%",
            color: "slate"
          }}
        >Your personal information, such as cookies and email addresses, may be shared with third parties to operate the Site and the Service. These third parties include Netlify (used for providing the Site) and MailChimp (used for email communication).<br /><br />Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</Text>

        <Text
          sx={{
            fontSize: [2, 3],
            width: "100%",
            color: "darker",
            mt: 5
          }}
        >
          Marketing
        </Text>
        <Text
          sx={{
            fontSize: [0, 1],
            fontWeight: "400",
            width: "100%",
            color: "slate"
          }}
        >As described above, we use your Personal Information to provide you with marketing communications we believe may be of interest to you. To opt out of these communications, click the "Unsubscribe" link at the bottom of the marketing emails.</Text>

        <Text
          sx={{
            fontSize: [2, 3],
            width: "100%",
            color: "darker",
            mt: 5
          }}
        >
          Minors
        </Text>
        <Text
          sx={{
            fontSize: [0, 1],
            fontWeight: "400",
            width: "100%",
            color: "slate"
          }}
        >The Site and the Service are not intended to be used by children under the age of 13.</Text>

        <Text
          sx={{
            fontSize: [2, 3],
            width: "100%",
            color: "darker",
            mt: 5
          }}
        >
          EU Rights
        </Text>
        <Text
          sx={{
            fontSize: [0, 1],
            fontWeight: "400",
            width: "100%",
            color: "slate"
          }}
        >If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.

        Additionally, if you are a European resident note that we are processing your information in order to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to the United States.</Text>

        <Text
          sx={{
            fontSize: [2, 3],
            width: "100%",
            color: "darker",
            mt: 5
          }}
        >
          Contact
        </Text>
        <Text
          sx={{
            fontSize: [0, 1],
            fontWeight: "400",
            width: "100%",
            color: "slate"
          }}
        >For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at coronavirusvisualizationteam@gmail.com.</Text>

      </Box>
    </Box>
  )
}
export default PrivacyPage;