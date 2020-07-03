Search.setIndex({docnames:["apps/account/forms","apps/account/index","apps/account/managers","apps/account/models","apps/account/tests","apps/account/views","apps/index","apps/main/index","apps/main/models","apps/main/tests","apps/main/utils","apps/main/views","devguide","index","permissions"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["apps/account/forms.rst","apps/account/index.rst","apps/account/managers.rst","apps/account/models.rst","apps/account/tests.rst","apps/account/views.rst","apps/index.rst","apps/main/index.rst","apps/main/models.rst","apps/main/tests.rst","apps/main/utils.rst","apps/main/views.rst","devguide.rst","index.rst","permissions.rst"],objects:{"account.forms":{ProfileChangeForm:[0,2,1,""],UserChangeForm:[0,2,1,""],UserCreationForm:[0,2,1,""],UserLoginForm:[0,2,1,""]},"account.forms.ProfileChangeForm":{Meta:[0,2,1,""]},"account.forms.ProfileChangeForm.Meta":{fields:[0,0,1,""],model:[0,0,1,""]},"account.forms.UserChangeForm":{Meta:[0,2,1,""],clean_password2:[0,3,1,""],password1:[0,0,1,""]},"account.forms.UserChangeForm.Meta":{fields:[0,0,1,""],model:[0,0,1,""]},"account.forms.UserCreationForm":{Meta:[0,2,1,""],clean_password2:[0,3,1,""],email:[0,0,1,""],save:[0,3,1,""]},"account.forms.UserCreationForm.Meta":{fields:[0,0,1,""],model:[0,0,1,""]},"account.forms.UserLoginForm":{Meta:[0,2,1,""],email:[0,0,1,""],password:[0,0,1,""]},"account.forms.UserLoginForm.Meta":{fields:[0,0,1,""],model:[0,0,1,""]},"account.managers":{UserManager:[2,2,1,""]},"account.managers.UserManager":{create_superuser:[2,3,1,""],create_user:[2,3,1,""]},"account.models":{AWSRequest:[3,2,1,""],AnaGroup:[3,2,1,""],Base:[3,2,1,""],IAM:[3,2,1,""],User:[3,2,1,""]},"account.models.AWSRequest":{status:[3,0,1,""],user:[3,0,1,""]},"account.models.AnaGroup":{name:[3,0,1,""]},"account.models.Base":{created_on:[3,0,1,""],save:[3,3,1,""],updated_on:[3,0,1,""]},"account.models.IAM":{aws_access_key:[3,0,1,""],aws_secret_access_key:[3,0,1,""],aws_user:[3,0,1,""],group:[3,0,1,""],save:[3,3,1,""],user:[3,0,1,""]},"account.models.User":{data_transfer_permission:[3,0,1,""],date_added:[3,0,1,""],date_updated:[3,0,1,""],email:[3,0,1,""],first_name:[3,0,1,""],get_full_name:[3,3,1,""],get_short_name:[3,3,1,""],has_module_perms:[3,3,1,""],has_perm:[3,3,1,""],is_admin:[3,0,1,""],is_staff:[3,3,1,""],last_name:[3,0,1,""]},"account.tests":{ProfileViewTest:[4,2,1,""],UserLoginViewTest:[4,2,1,""],UserSignUpViewTest:[4,2,1,""],UserTestCase:[4,2,1,""]},"account.tests.ProfileViewTest":{setUp:[4,3,1,""],test_profile_view_with_get_request:[4,3,1,""],test_profile_view_with_post_request:[4,3,1,""]},"account.tests.UserLoginViewTest":{setUp:[4,3,1,""],test_login_view_with_iam:[4,3,1,""]},"account.tests.UserSignUpViewTest":{setUp:[4,3,1,""],test_sign_up_view_with_post_request:[4,3,1,""]},"account.tests.UserTestCase":{setUp:[4,3,1,""],test_get_full_name_with_user:[4,3,1,""],test_get_short_name_with_user:[4,3,1,""]},"account.views":{AWSCredRequestView:[5,2,1,""],AdminMixin:[5,2,1,""],ChangePWD2:[5,2,1,""],IamCreateView:[5,2,1,""],LoginView:[5,2,1,""],ProfileView:[5,2,1,""],SignUpView:[5,2,1,""]},"main.models":{Analysis:[8,2,1,""]},"main.models.Analysis":{analysis_name:[8,0,1,""],bash_link:[8,0,1,""],bucket_name:[8,0,1,""],check_iam:[8,3,1,""],custom:[8,0,1,""],demo_link:[8,0,1,""],git_link:[8,0,1,""],groups:[8,0,1,""],long_description:[8,0,1,""],paper_link:[8,0,1,""],result_prefix:[8,0,1,""],short_description:[8,0,1,""],signature:[8,0,1,""]},"main.tests":{AnalysisIntroViewTest:[9,2,1,""],AnalysisListViewTest:[9,2,1,""],AnalysisTestCase:[9,2,1,""],JobListViewTest:[9,2,1,""]},"main.tests.AnalysisIntroViewTest":{setUp:[9,3,1,""],test_with_intro_view:[9,3,1,""]},"main.tests.AnalysisListViewTest":{setUp:[9,3,1,""],test_analysis_list_view:[9,3,1,""]},"main.tests.AnalysisTestCase":{setUp:[9,3,1,""],test_check_iam_with_analysis:[9,3,1,""]},"main.tests.JobListViewTest":{setUp:[9,3,1,""],test_job_list_view:[9,3,1,""]},"main.utils":{convert_size:[10,4,1,""],create_submit_json:[10,4,1,""],delete_file_from_bucket:[10,4,1,""],delete_folder_from_bucket:[10,4,1,""],download_directory_from_s3:[10,4,1,""],download_file_from_s3:[10,4,1,""],generate_folder:[10,4,1,""],get_current_analysis:[10,4,1,""],get_current_iam:[10,4,1,""],get_current_user:[10,4,1,""],get_data_set_logs:[10,4,1,""],get_file_content:[10,4,1,""],get_files_detail_list:[10,4,1,""],get_job_list:[10,4,1,""],get_last_modified_timestamp:[10,4,1,""],get_list_keys:[10,4,1,""],get_name_only:[10,4,1,""],mkdir:[10,4,1,""]},"main.views":{AnalysisIntroView:[11,2,1,""],AnalysisListView:[11,2,1,""],FilesView:[11,2,1,""],HomeView:[11,2,1,""],IntroView:[11,2,1,""],JobDetailView:[11,2,1,""],JobListView:[11,2,1,""],PermissionView:[11,2,1,""],ProcessView:[11,2,1,""],QAView:[11,2,1,""],ResultView:[11,2,1,""],TestView:[11,2,1,""],UserFilesView:[11,2,1,""]},"main.views.FilesView":{"delete":[11,3,1,""],get:[11,3,1,""],post:[11,3,1,""]},"main.views.ProcessView":{post:[11,3,1,""]},"main.views.ResultView":{get:[11,3,1,""],post:[11,3,1,""]},"main.views.UserFilesView":{get:[11,3,1,""]},account:{forms:[0,1,0,"-"],managers:[2,1,0,"-"],models:[3,1,0,"-"],tests:[4,1,0,"-"],views:[5,1,0,"-"]},main:{models:[8,1,0,"-"],tests:[9,1,0,"-"],utils:[10,1,0,"-"],views:[11,1,0,"-"]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","module","Python module"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:attribute","1":"py:module","2":"py:class","3":"py:method","4":"py:function"},terms:{"abstract":0,"boolean":3,"byte":10,"case":0,"class":[0,2,3,4,5,8,9,11],"function":[0,3,10,12],"import":[1,7],"long":8,"new":[0,3,5,10,11],"return":[0,3,4,9,10,11],"short":8,"static":12,"true":[0,3,10],"while":6,AWS:[0,3,4,5,13,14],The:[0,3,12,13],There:12,Useful:11,about:[3,13],access:[0,1,3,7,8,12,13,14],access_log:12,account:[6,12,13],accur:4,activ:12,add:[0,12,14],added:3,addit:[12,13],addition:12,address:[0,3,5],admin:[1,2,3,5,6,14],adminmixin:5,after:[0,12],alia:[0,2,3,4,5,8,9,10,11,12],all:[3,11,12],allow:12,allowedhead:12,allowedmethod:12,allowedorigin:12,also:14,amazonaw:12,ana_id:[10,11],anagroup:3,analys:[7,9,11,13,14],analysi:[6,8,9,10,11,13],analysis_nam:8,analysisintroview:11,analysisintroviewtest:9,analysislistview:11,analysislistviewtest:9,analysistestcas:9,analyz:13,ani:13,app:[1,7,12,13],app_label:3,applic:12,appropri:10,approv:[3,14],apt:12,arg:[2,3,8],assist:12,associ:[0,3,4,9,14],auth:12,automat:[13,14],avail:[11,12,13],aws:[0,12],aws_access_kei:[0,3],aws_secret_access_kei:[0,3],aws_us:3,awscredrequestview:5,awsrequest:3,base:[3,12],bash:8,bash_link:8,basic:[3,4,14],being:0,belong:3,below:[1,7,13],bin:12,bind:12,birth:2,blueprint:13,box:12,browser:12,bucket:[8,10,12],bucket_nam:8,build:12,call:[0,13],can:[0,3,11,12,13],cert:10,certif:[10,11],chang:[0,3,5],changepwd2:5,check:[0,3,4,5,8,9,11,13],check_iam:8,clean_password2:0,cloud:13,com:12,come:14,command:12,commit:0,complet:[3,14],concern:14,config:[11,12],configur:[12,13],connect:9,contact:12,contain:[3,8,10,12,13],content:[1,6,7,10,11,12,13],contrib:12,contribut:12,convert:10,convert_s:10,core:[6,12],correctli:9,corsconfigur:12,corsrul:12,creat:[0,2,3,4,5,10,12,14],create_submit_json:10,create_superus:2,create_us:2,created_on:3,credenti:[0,4,5,14],cron:12,crontab:12,curl:12,current:[9,10,12,13,14],custom:[8,11],daemon:12,daili:12,data:[3,10,12,13],data_transfer_permiss:3,databas:13,dataset:13,date:[2,3],date_ad:3,date_upd:3,deactiv:12,deal:6,delet:[10,11,12],delete_file_from_bucket:10,delete_folder_from_bucket:10,demand:13,demo:[8,13],demo_link:8,deni:[3,14],depend:[3,13],deploi:13,deploy:13,descript:[8,11,12,13],design:14,detail:[8,9,10,11,14],determin:[11,14],dev:12,develop:13,diagram:12,directli:12,directori:10,displai:[4,9],django:[1,5,7,12,13],djangoproject:12,doc:[0,12],document:[1,7,12,13],doe:13,done:[11,12],download:[10,11,12],download_directory_from_s3:10,download_file_from_s3:10,drag:12,drop:12,each:[3,10,11,13],edit:12,element:[1,7],email:[0,2,3,4,5,14],enabl:12,encod:12,end:11,essenti:12,etag:12,etc:[3,12],everi:[3,12],execstart:12,exposehead:12,far:11,favicon:12,field:0,file:[5,10,11,13],file_upload:12,filenam:11,filesview:11,fileupload:12,filter:10,find:13,finish:11,first:3,first_nam:[0,3],flag:10,folder:[8,10,11,12],follow:12,form:[1,6,13],format:10,from:[0,3,10,11],full:[4,10,12],fulli:13,gener:10,generate_fold:10,get:[10,11,12],get_current_analysi:10,get_current_iam:10,get_current_us:10,get_data_set_log:10,get_file_cont:10,get_files_detail_list:10,get_full_nam:3,get_job_list:10,get_last_modified_timestamp:10,get_list_kei:10,get_name_onli:10,get_short_nam:3,git_link:8,github:[8,13],given:[0,2,5],gmail:12,group:[3,4,8,9,12,14],guid:13,guidanc:12,gunicorn:12,handl:[1,6,7,12],hardwar:13,has:[8,12],has_module_perm:3,has_perm:3,hash:12,have:3,histori:9,hold:3,home:[4,12],homeview:11,htm:12,html:12,http:12,iam:[0,3,4,5,8,9,10,14],iamcreateview:5,ico:12,identifi:[0,3],includ:12,index:[11,12,13],individu:3,inform:[0,3,4,13],inherit:[0,3],input:11,insid:12,instal:[12,13],instanc:0,intend:13,interfac:13,intro:[9,11],introview:11,is_admin:3,is_staff:3,its:10,javascript:12,jflag:0,job:[9,10,11,12],jobdetailview:11,joblistview:11,joblistviewtest:9,json:[5,10],json_data:10,kei:[0,3,10],kwarg:[2,3,5,8,11],larg:12,last:3,last_modifi:10,last_nam:[0,3],later:0,learn:13,libpq:12,line:12,link:[8,10,11,12,13],list:[9,10,11],listen:12,locat:[10,12],log:[4,10,11,12],log_not_found:12,logfil:12,login:[0,4,5,9,11,14],loginview:5,long_descript:8,mai:14,main:[6,12,13],manag:[1,6,11,12,13],manual:0,match:0,maxagesecond:12,meet:5,meta:0,method:0,methodnam:[4,9],migrat:12,min:12,mixin:5,mkdir:10,model:[0,1,6,7,13],modern:13,modul:13,more:[12,13],multi:12,multipart:12,multipl:12,must:14,name:[0,3,4,8,10,12,14],nano:12,navig:13,ncap:12,need:12,network:12,neurocaa:[6,11,12],nginx:12,none:[3,4,10],obj:3,object:[0,5,10],off:12,old:[5,12],onli:[10,13],open:13,option:[8,14],org:12,other:3,otherwis:0,our:13,out:13,overriden:3,packag:[12,13],page:[4,8,11,13],paper:[8,13],paper_link:8,param:10,paramet:13,part:13,pass:[0,12],password1:0,password:[0,2,5,12],path:[10,11],pend:[3,14],perform:[12,14],perm:3,permiss:[1,3,6,8,11,12,13],permissionview:11,pip3:12,pip:12,pleas:12,plugin:12,portabl:13,post:[11,12],postgresql:12,power:13,prefix:[8,10],process:[8,11,12,14],processview:11,profil:[4,5],profilechangeform:0,profileview:5,profileviewtest:4,project:[6,13],proper:[3,9],properli:9,provid:0,proxi:12,proxy_param:12,proxy_pass:12,purchas:13,put:12,python3:12,python:12,qaview:11,record:3,redirect:[4,11],refer:12,reflect:3,regist:14,reload:12,remov:12,repet:0,repo:13,repositori:13,request:[5,9,10,11,14],requir:[5,12,13],resourc:13,respons:13,restart:12,result:[8,10,11],result_prefix:8,resultview:11,retriev:[10,11],right:3,root:12,run:[12,13],runtest:[4,9],same:9,save:[0,2,3,12],save_m2m:0,scientif:13,script:[8,12],sdk:12,search:13,secret:[0,3],section:[12,14],see:12,self:0,server:13,server_nam:12,servic:12,session:10,set:[10,12],setup:[4,9],short_descript:8,show:11,sign:[3,4],signatur:8,signup:[4,5],signupview:5,site:[12,14],size:10,sock:12,socket:12,someon:3,soon:14,sourc:[12,13],specif:8,sqlite:12,start:[11,12],statu:[3,5,14],store:[10,12],structur:13,submit:[10,14],success:4,successfulli:4,sudo:12,superus:2,system:12,systemctl:12,systemd:12,target:12,test:[1,6,7,13],test_analysis_list_view:9,test_check_iam_with_analysi:9,test_get_full_name_with_us:4,test_get_short_name_with_us:4,test_job_list_view:9,test_login_view_with_iam:4,test_profile_view_with_get_request:4,test_profile_view_with_post_request:4,test_sign_up_view_with_post_request:4,test_with_intro_view:9,testview:11,them:[11,14],thi:[0,1,3,6,7,8,12,13,14],thing:13,through:[3,12,14],time:[0,3,10],timestamp:[3,10],topic:12,transfer:3,two:[0,6,9,12,13],txt:[10,11,12],ubuntu:13,ufw:12,un_cert:10,unabl:14,under:13,unit:12,unix:12,updat:[3,4,5,11,12],updated_on:3,upload:[5,11,13],use:[8,14],used:[0,12],user:[0,1,2,3,4,5,6,8,9,10,11,12,13],userchangeform:0,usercreationform:0,userfilesview:11,userloginform:0,userloginviewtest:4,usermanag:2,usernam:[3,4],usersignupviewtest:4,usertestcas:4,uses:13,using:[0,3,12,14],usr:12,utf:12,util:[6,7,12,13],valu:3,venv:12,version:12,via:12,view:[1,4,6,7,9,13,14],virtualenv:12,visit:9,wantedbi:12,web:[12,13],websit:[3,14],when:[3,9],which:[0,1,3,7,9,13,14],work:13,worker:12,workingdirectori:12,wsgi:12,www:12,xml:12,xmln:12,you:13,your:13,zip:11},titles:["Account Forms","Account","Account Managers","Account Models","Account Tests","Account Views","Django Apps","Main","Main Models","Main Tests","Main Utils","Main Views","Developer Guide","Welcome to the NeuroCAAS Website docs!","Accounts and Permissions"],titleterms:{AWS:12,account:[0,1,2,3,4,5,14],addit:14,app:6,databas:12,deploy:12,develop:12,django:6,doc:13,file:12,form:0,guid:12,indic:13,inform:12,main:[7,8,9,10,11],manag:2,model:[3,8],neurocaa:13,permiss:14,project:12,server:12,structur:12,tabl:13,test:[4,9],ubuntu:12,upload:12,user:14,util:10,view:[5,11],websit:13,welcom:13}})