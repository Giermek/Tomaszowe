# Tomaszowe

Wrzuciłem tylko katalog src. Reszta utoworzona w ten sposób:

ng new nazwa_aplikacji

(Odpalanie:

cd nazwa_aplikacji

ng serve
)

Żeby korzystać z bootstrapa zrobiłem tak:

  W katalogu mojej aplikacji:

  npm install ng2-bootstrap bootstrap --save
  
  Natomiast w pliku angular-cli.json dodałem ścieżkę do bootstrap.min.css:
  
  "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ]
      
  Po czym w katalogu aplikacji:
  
  ng build
  
  (Tego ostatniego nie kumam, ale inaczej bootstrap za cholerę nie chciał działać)
