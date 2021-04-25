module.exports = {
    name: "Image Downloader Extension",
    verbose: true,
    rootDir: "./src",
    preset: "ts-jest",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    setupFilesAfterEnv: ["<rootDir>/../tests/setupTest.ts"],
}