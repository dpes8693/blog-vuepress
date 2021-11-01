# 紀錄我常用的windows語法

## Run 執行

```sh
#查詢剩餘的激活天數
slmgr.vbs -xpr 

#顯卡相關 direcrX(Direct eXtension)
dxdiag

#事件管理者
eventvwr

#註冊檔案
regedit

#系統資訊
msinfo32

#命令字元
cmd
```

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