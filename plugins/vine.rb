# A Liquid tag for Jekyll sites that allows embedding vines
# by: Brandon Tilly
# Source URL: https://gist.github.com/1027674
# Post http://brandontilley.com/2011/01/31/gist-tag-for-jekyll.html
#
# Example usage: {% vine MmxpprQ1Wlg %}

require 'cgi'
require 'digest/md5'
require 'net/https'
require 'uri'

module Jekyll
  class VineTag < Liquid::Tag
    def initialize(tag_name, text, token)
      super
      @text = text
    end

    def render(context)
      if parts = @text.match(/([\w\/]*) (.*)/)
        vine_id = parts[1].strip
        html_output_for vine_id
      else
        ""
      end
    end

    def html_output_for(vine_id)

"<iframe class='vine-embed' src='https://vine.co/v/#{vine_id}/embed/simple' width='600' height='600' frameborder='0'></iframe><script async src='//platform.vine.co/static/scripts/embed.js' charset='utf-8'></script>"
    end

  end
end

Liquid::Template.register_tag('vine', Jekyll::VineTag)
