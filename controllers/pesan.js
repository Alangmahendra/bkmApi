const sgMail = require('@sendgrid/mail');
require('dotenv').config()

class Pesan{
    static send(req,res){
        const rows = req.body
        sgMail.setApiKey(process.env.SENDGRID_KEY);
            const msg = {
                to: 'info@berliankaryamandiri.com',
                from: 'form@berliankaryamandiri.com',
                subject: `[KONTAK] - ${rows.nama} mengirim pesan`,
                text: 'pesan masuk dari form berliankaryamandiri.com',
                html: `div>
                <table border>
                    <thead>
                        <tr>
                            <th colspan="2">PESAN</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td>Nama</td>
                        <td>${rows.nama}</td>
                    </tr>
                <tbody>
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>${rows.email}</td>
                    </tr>
                <tbody>
                <tbody>
                    <tr>
                        <td>pesan</td>
                        <td>${rows.pesan}</td>
                    </tr>
                <tbody>
                </table>
                </div>`,
                };
                sgMail.send(msg).then((rows) => {
                    res.status(200).json({ message: "email terkirim"})
                }).catch((error) => {
                    console.log(error)
                    res.status(500).json({ message: error })
                })
    }
}
module.exports = Pesan