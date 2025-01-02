# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

deployment
sign up to aws
ec2
launch instance
create a key download it in downloads
use server as ubuntu
chmod the key
let instance configure and initialez
get connection command for the machine
ssh -i "payMate-secret.pem" ubuntu@ec2-16-171-23-227.eu-north-1.compute.amazonaws.com
installed node
and nvm check on which version
cloned respositories -> frontend backend
run build commands
sudo apt update => to update ubuntu
sudo apt nginx
how to start nginx => sudo systemctl start ngnix
sudo system enable ngnix
cd /var/www/html/ iske andar debian file milegi use replace krna rehta hai hamare dist file se jo build hua h
cd krke ab wps folder m jao or scp-r (copy command run kro) scp -r dist/_ isse permission denied aayega to aage sudo laga do
sudo scp -r dist/_ /var/www/html/
ek baar jaake check kro => cd /var/www/html/
ls isme dekhlo aagyi files to thik kia
fr enable kro port 80 on instance
security m jao instance ki inbound rule m 80
deploy frontend first

DEploy backend
installed pm2
give instance of ur server port to security wizards
npm start
pm2 logs => to check if application is running
pm2 stop application name to stop it
pm2 start npm --name "payMate-backend" -- start
frontend=>http://16.171.23.227/
backend=>http://16.171.23.227/3000

DNS naming => domain name mapping
any request goes to ngnix first as it can also work as load balancer so i want to config nginx when someone says /api it should go to nginx
domain name => http://16.171.23.227/=>Ip
server_name 16.171.23.227;
mapped correctly
