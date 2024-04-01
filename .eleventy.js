module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("style.css");
	eleventyConfig.addPassthroughCopy("formstyle.css");
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("favicon.png");
};
