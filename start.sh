sudo rm -r .oardocker/
sudo oardocker init
sudo oardocker build
sudo oardocker install http://oar-ftp.imag.fr/oar/2.5/sources/testing/oar-2.5.4+rc4.tar.gz
sudo oardocker start -n 3
npm start