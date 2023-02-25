const otpService = require("../../services/otp-service");
const hashService = require("../../services/hash-service");
const userService = require("../../services/user-service");
const tokenService = require("../../services/token-service");
class AuthController {
  async sendOtp(req, res) {
    // logic
    const { phone } = req.body;

    if (!phone) {
      res.status(400).json({ message: "Phone field is required" });
    }

    // generate random otp

    const otp = await otpService.generateOTP();

    // hash otp
    const ttl = 1000 * 60 * 2; // time to live
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hashedOtp = hashService.hashOtp(data);

    try {
      await otpService.sendBySMS(phone, otp);
      return res
        .status(200)
        .json({ hash: `${hashedOtp}.${expires}`, phone: phone });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "message sending failed" });
    }
  }

  async verifyOtp(req, res) {
    // logic
    const { otp, phone, hash } = req.body;
    if (!otp || !phone || !hash) {
      res.status(400).json({ message: "All fields are required" });
    }

    const [hashedOtp, expires] = hash.split(".");
    // if (Date.now() > +expires) {
    //   res.status(400).json({ message: "OTP expired" });
    // }
    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verifyOTP(hashedOtp, data);

    if (!isValid) {
      res.status(400).json({ message: "Invalid OTP" });
    }

    let user;

    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "DB error" });
    }

    const { accessToken, refreshToken } = tokenService.generateTokens({
      _id: user._id,
      activated: false,
    });

    res.cookie("refreshtoken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30, // valid for 30 days
      httpOnly: true,
    });

    res.json({ accessToken });
  }
}

module.exports = new AuthController();
// singleton pattern
// when ever i require this class it will give same object and will not create new object everytime
