exports.ForgotMail = (username, token) => {
    return `
    < html >
        <body style="font-family: sans-serif;">
            <center style="width: 100%">
                <table align="center" cellspacing="0" cellpadding="0">
                    <tbody style="font-size: 18px;">
                        <tr>
                            <h1>Hi ${username.username},</h1>
                        </tr>
                        <tr>
                            <p>We received a request to reset the password on your account.</p>
                        </tr>
                        <tr>
                            <p>Click the button below so it will redirects to the password reset page.</p>
                        </tr>
                        <tr style="height: 50px;"></tr>
                        <tr>
                            <td>
                                <table cellspacing="0" cellpadding="0" align="center">
                                    <tr>
                                        <a style="color: black; text-decoration: none;" class="link" href="" target="_blank">Your Token: ${token}</a>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </body>

</html >
`
}