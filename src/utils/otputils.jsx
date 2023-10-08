import speakeasy from "speakeasy";

// Generate OTP Secret
export const generateOTPSecret = () => {
  return speakeasy.generateSecret();
};

// Generate OTP Code
export const generateOTPCode = (secret) => {
  return speakeasy.totp({
    secret: secret.base32,
    encoding: "base32",
  });
};

// Verify OTP Code
export const verifyOTPCode = (secret, code) => {
  return speakeasy.totp.verify({
    secret: secret.base32,
    encoding: "base32",
    token: code,
  });
};
