var plugin = require('./index');
var PluginApi = require('gardr-core-plugin').PluginApi;

describe('plugin', function () {
	var pluginApi, spy;
	
	beforeEach(function () {
		pluginApi = new PluginApi();
		spy = sinon.spy(pluginApi, 'on');
	});
	
	it('should listen to banner:rendered event', function () {
		plugin(pluginApi, {});
		expect(spy).to.have.been.calledOnce;
		expect(spy).to.have.been.calledWith('banner:rendered');
	});
	
	it('should inject wallpapercolor if wallpapercolor exists on window', function () {
		var color = '#333';
		window.gardr_wallpapercolor = color;
		
		plugin(pluginApi, {});
		
		var options = {};		
		pluginApi.trigger('banner:rendered', options);
		
		expect(options.wallpapercolor).to.equal(color);		
	});
	
	it('should inject wallpaperimage if wallpaperimage exists on window', function (){
		var image = 'http://test.image.com/image.jpg';
		window.gardr_wallpaperimage = image;
		
		plugin(pluginApi, {});
		
		var options = {};
		pluginApi.trigger('banner:rendered', options);
		
		expect(options.wallpaperimage).to.equal(image);
	});
	
});