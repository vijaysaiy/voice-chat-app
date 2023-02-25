const crypto = require("crypto");
const hashService = require("./hash-service");
const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const smsFromNumber = process.env.SMS_FROM_NUMBER;

const twilio = require("twilio")(smsSid, smsAuthToken, {
  lazyLoading: true,
});

class OtpService {
  async generateOTP() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  async sendBySMS(phone, otp) {
    return await twilio.messages.create({
      to: phone,
      from: smsFromNumber,
      body: `Your codershouse otp is ${otp}`,
    });
  }

  sendByEmail() {}

  verifyOTP(hashedOtp, data) {
    const computedHash = hashService.hashOtp(data);
    return computedHash === hashedOtp;
  }
}

module.exports = new OtpService();
