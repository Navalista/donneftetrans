import nodemailer from 'nodemailer'

export default async function handler(req, res) {
   if (req.method === 'POST') {
      let transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
         },
         tls: {
            rejectUnauthorized: false
         }
      })

      const { name, mail, theme, comment } = req.body
      let mailOptions = {
         from: process.env.MAIL_USER,
         to: 'vreal.idea@gmail.com',
         subject: `Message from ${name}`,
         text: `${theme}\n${comment}\nFrom: ${mail}`
      }

      try {
         let info = await transporter.sendMail(mailOptions)
         console.log('Email sent: ' + info.response)
         res.status(200).json({ success: true })
      } catch (error) {
         console.log(error)
         res.status(500).send(error)
      }
   } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
   }
}
