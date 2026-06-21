AUTHOR = 'Christofer Saputra'
SITENAME = 'Christofer'
SITEURL = ''

RELATIVE_URLS = True

PATH = 'content'

STATIC_PATHS = ['images', 'extra']
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

ARTICLE_PATHS = ['articles']
ARTICLE_URL = 'blog/{slug}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'
PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'

THEME = 'themes/custom'

TIMEZONE = 'Asia/Jakarta'
DEFAULT_LANG = 'en'

DEFAULT_METADATA = {
    'description': '',
}

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

EMAIL = "christofersaputra29@gmail.com"

SOCIALS = [
    ("Github", "github", "https://www.github.com/chromium7/"),
    ("LinkedIn", "linkedin-in", "https://www.linkedin.com/in/christofer-saputra-722b1b186/"),
]

DEFAULT_PAGINATION = 3
