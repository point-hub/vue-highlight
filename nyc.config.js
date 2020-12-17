module.exports = {
  "check-coverage": false,
  "per-file": true,
  "skip-full": true,
  all: true,
  include: ["src/**/*.{js,vue}"],
  reporter: ["lcov", "text", "text-summary", "html"],
  extension: [".js", ".vue"]
};
