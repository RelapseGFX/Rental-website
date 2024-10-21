module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/app.js');
    eleventyConfig.addPassthroughCopy('./src/videojs-matrix.css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}