# 紀錄我常用的windows語法

## Run 執行

```sh
#查詢剩餘的激活天數
slmgr.vbs -xpr 

#顯卡相關 direcrX(Direct eXtension)
dxdiag

## MS Console(.msc)：
#事件檢視器
eventvwr.msc
#電腦管理
compmgmt.msc
#本機 群組原則編輯器
gpedit.msc
#裝置管理員
devmgmt.msc
#磁碟管理
diskmgmt.msc

#註冊檔案
regedit
#系統資訊
msinfo32
#命令字元
cmd

```

![稽核原則追蹤](https://drive.google.com/uc?export=download&id=1Qas3DIHzRj1tPMKV2Z7Rt77b8p6779rp)

## cmd 命令

```sh
cmd:{
	nslookup
	ipconfig
	arp -all {
		查詢目標設備的MAC地址
	}
	nbtstat -n
	tracert 192.xxx.xxx.xxx 
	ping 192.xxx.xxx.xxx {
		(Time To Live)
		TCP/IP工具
	}
}

```