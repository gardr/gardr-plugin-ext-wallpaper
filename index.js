function onBannerRendered (opts) {
	if (window.gardr_wallpaperimage) {
		opts.wallpaperimage = window.gardr_wallpaperimage;
	}
	if (window.gardr_wallpapertiling) {
		opts.wallpapertiling = window.gardr_wallpapertiling;
	}	
	if (window.gardr_wallpapercolor) {
		opts.wallpapercolor = window.gardr_wallpapercolor;
	}	

	if (window.gardr_wallpaperclick) {
		opts.wallpaperclick = window.gardr_wallpaperclick;
	}	
}

function wallpaperPlugin (gardrPluginApi, options) {
	gardrPluginApi.on('banner:rendered', onBannerRendered);
}

module.exports = wallpaperPlugin;