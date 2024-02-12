# Delete Sitemap Script

This script allows users to delete sitemap files associated with a specific domain using Google Webmasters API. It provides a simple web interface where users can input the domain and a list of sitemap paths (one per line), and then delete the sitemaps with the click of a button.

## Prerequisites

- Google Developer Console Account
- OAuth 2.0 Client ID and API Key
- Webmasters API enabled
- JavaScript knowledge

## Getting Started

1. Clone this repository to your local machine.
2. Replace `'YOUR_CLIENT_ID'` and `'YOUR_API_KEY'` in `index.html` and `script.js` with your OAuth 2.0 Client ID and API Key obtained from Google Developer Console.
3. Open `index.html` in a web browser.

## Usage

1. Enter the domain in the "Domain" textarea (e.g., http://www.example.com).
2. Enter the paths of sitemap files to be deleted (one per line) in the "Sitemap Paths" textarea.
3. Click the "Delete Sitemaps" button.
4. The script will authenticate using OAuth 2.0 and then proceed to delete the specified sitemap files.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
