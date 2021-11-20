# Zadanie_nr1

Informacje wstępne:

Aby uzyskać minimalny rozmiar obrazu skorzystałem z gotowego skompresowanego obrazu Nodej.js dostępnego na repozytorium pod linkiem: https://github.com/astefanutti/scratch-node

Ostatecznie mój obraz wyniósł: 47.9 MB

Wykonanie zadań

3. Należy podać polecenia niezbędne do:

  a. zbudowania opracowanego obrazu kontenera

   Odp. 
    
    "docker build -t zadanie_nr1 -f Dockerfile_zad1 ."

  (Efekt polecenia)

   ![image](https://user-images.githubusercontent.com/74615234/142735302-c152a4a7-afe3-4eec-aed0-98e7e65d0ee8.png)

  (Potwierdzenie utworzenia obrazu)

   ![image](https://user-images.githubusercontent.com/74615234/142735386-0a966be2-bc5c-4377-9ec1-61d6df7f4c7c.png)
  
  b. uruchomienia kontenera na podstawie zbudowanego obrazu:
  
   Odp. 
    
    "docker run -it --name zadanie_nr1 -p 8080:8080 zadanie_nr1"
    
  (Efekt polecenia - w terminalu)
    
   ![image](https://user-images.githubusercontent.com/74615234/142735495-790f8cd6-3777-40b5-860c-19e9143f28a3.png)

  (Efekt polecenia - na stronie)
  
   ![image](https://user-images.githubusercontent.com/74615234/142738849-bd2689ef-7e94-48f3-a050-61a1a531d07e.png)

  c.  sposobu uzyskania informacji, które wygenerował serwer w trakcie uruchamiana kontenera
  
   Odp. 
    
    "docker logs zadanie_nr1"
    
  (Efekt polecenia)
   
   ![image](https://user-images.githubusercontent.com/74615234/142735718-e1425498-e1a3-4347-8625-820a8e3ad953.png)
    
  d.  sprawdzenia, ile warstw posiada zbudowany obraz
  
   Odp. 
   
    "docker image inspect zadanie_nr1 | jq '.[].RootFS.Layers'"
    
  (Efekt polecenia)
   
   ![image](https://user-images.githubusercontent.com/74615234/142735773-84e25616-1d32-45e6-bac4-76b409a7837e.png)

4. Proszę odpowiedzieć na pytanie czy a jeśli tak to w jaki sposób można
zbudować obraz wykorzystując bezpośrednio link do Dockerfile umieszczonego na GitHub oraz jak
przenieść stworzony obraz na swoje konto na DockerHub

   Odp. Aby zbudować obraz wykorzystując bezpośredni link do Dockerfile umieszczonego na platformie Github, należy skorzystać z polecenia:
    
    "docker build 'link do repozytorium' -f 'nazwa pliku z rozszerzeniem dockerfile'"

   Dla mojego repozytorium polecenie to będzie wyglądało następująco:
    
    "docker build https://github.com/karolnowak98/zadanie_nr1.git#main: -f Dockerfile_zad1"
    
  (Efekt polecenia)
   
   ![image](https://user-images.githubusercontent.com/74615234/142740527-d000ecca-d5b3-4e5a-96cb-7d9a453e6d2e.png)

   Aby przenieść stworzony obraz na swoje konto na Docker hub, należy wpierw się zalogować za pomocą polecenia docker login, a następnie należy skorzystać z polecenia:

    "docker image push 'nazwa uzytkownika na dockerhub'/'nazwa repozytorium'/:'tag'"
    
   Dla mojego konta i repozytorium na dockerhub oraz tagu polecenie to będzie wyglądało następująco:
    
    "docker image push karolnowak98/zadanie_nr1"
    
  (Efekt polecenia)
   
   ![image](https://user-images.githubusercontent.com/74615234/142739839-95f9b48a-cec9-4b26-a92c-d752c143ce0b.png)

   Link do dockerhuba: https://hub.docker.com/r/karolnowak98/zadanie_nr1
   
