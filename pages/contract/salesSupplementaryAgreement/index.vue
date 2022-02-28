<template>
	<view class="box">
		<uni-nav-bar shadow leftIcon="arrowleft" right-text="提交" title="标题" @clickRight="submit" />
		<view class="container">
			<view class="form-container">
				<view class="title-box flex align-items_center">基础信息</view>
				<form-comp :searches="baseInfo" ref="baseInfo"/>
			</view>
			
			<view class="form-container">
				<view class="title-box flex align-items_center">收件人信息</view>
				<form-comp :searches="consigneeInfo" ref="consigneeInfo"/>
			</view>
			
			<view class="form-container">
				<view class="title-box flex align-items_center">
					<view class="title-box_content flex align-items_center justify-content_between">
						<view>
							附件上传 
							<text class="text-mini_class">(合同协议/委托付款协议)</text>
						</view>
						<!-- <text class="click-slot_text" @click="addFiles">添加</text> -->
						<upload-comp @select="selectFiles">
							<text slot="clickSlot" class="click-slot_text">添加</text>
						</upload-comp>
					</view>
				</view>
				<view class="select-list_box" v-if="selectList.length">
					<view class="select-list_item flex" v-for="(item, index) in selectList" :key="index">
						<image :src="item.url" class="flex-shrink" />
						<view class="content flex align-items_center justify-content_between">
							<view class="text-desc_box flex flex-f-d-c justify-content_between">
								<text class="name">{{item.name}}</text>
								<text class="desc"> {{item.selectedTime}}</text>
							</view>
							<uni-icons type="close" size="20" color="red" @click="deleteFiles(index)"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {uniNavBar,uniIcons} from '@dcloudio/uni-ui'
import formComp from '@/components/form.vue'
import uploadComp from '@/components/upload.vue'

export default {
    components: {uniNavBar, uniIcons, formComp, uploadComp},
	data () {
		return {
			/*
			* 表单输入框： {prop: 'name', label: '姓名', compName: 'easyinput',placeholder: '请输入'},
			* 自动带出：   {prop: 'a', label: '姓名', compName: 'text',placeholder: '自动带出'},
			* 下拉框选择   {prop: 'b', label: '姓名', compName: 'select',placeholder: '请选择', comboxList: [{value: 1, label: 2},{value: 1, label: 2},{value: 1, label: 2},{value: 1, label: 2}]},
			* 跳转链接     {prop: 'name', label: '姓名', compName: 'text',placeholder: '自动带出', link:""},
			* {prop: 'a', label: '姓名', compName: 'text',placeholder: '自动带出'},
			* */
			// 基础信息
			baseInfo: [
				// 客户名称
				{prop: 'sadasd', label: '客户名称', compName: 'text',placeholder: '自动带出'},
				// 等级
				{prop: '12', label: '等级', compName: 'text',placeholder: '自动带出'},
				// 负责人
				{prop: '21', label: '负责人', compName: 'text',placeholder: '自动带出'},
				// 业务联系方式
				{prop: '23', label: '业务联系方式', compName: 'text',placeholder: '自动带出'},
				// 合同编号
				{prop: 'sadas2321dasd', label: '合同编号', compName: 'text',placeholder: '自动带出'},
				// 最终使用客户
				{prop: 'dc', label: '最终使用客户', compName: 'select',placeholder: '请选择', comboxList: [{value: 1, label: 2}]},
				// 用章名称
				{prop: 'ds', label: '用章名称', compName: 'select',placeholder: '请选择', comboxList: [{value: 1, label: 2}]},
				// 盖章先后
				{prop: 'da', label: '盖章先后', compName: 'select',placeholder: '请选择', comboxList: [{value: 1, label: 2}]},
				// 纸质合同编号
				{prop: 'name', label: '纸质合同编号', compName: 'easyinput',placeholder: '请输入'},
				// 合同金额
				{prop: 'a', label: '合同金额', compName: 'text',placeholder: '自动带出'},
				// 补充协议内容（多选）
				{prop: 'as213d', label: '补充协议内容（多选）', compName: 'select',placeholder: '请选择', comboxList: [{value: 1, label: 2}]},
				// 原销售订单合同关联
				{prop: 'dsa21321d', label: '原销售订单合同关联', compName: 'select',placeholder: '请选择', comboxList: [{value: 1, label: 2}]},
			],
			
			// 收件人信息
			consigneeInfo: [
				// 收件人
				{prop: 'consignee', label: '收件人', compName: 'easyinput',placeholder: '请输入'},
				// 收件人联系方式
				{prop: 'mobile', label: '收件人联系方式', compName: 'easyinput',placeholder: '请输入'},
				// 收件地址
				{prop: 'district', label: '收件地址', compName: 'easyinput',placeholder: '请输入'}
			],
			// 上传附件列表
			selectList: []
		}
	},
	methods: {
		selectFiles (data) {
			data.tempFiles.forEach(v => {
				v.selectedTime = this.formatTime(new Date())
				this.selectList.push(v)
			})
		},
		addFiles () {
			
		},
		// 删除附件
		deleteFiles (index) {
			uni.showModal({
			    title: '提示',
			    content: '确定删除？',
			    success: (res) => {
			        if (res.confirm) {
						this.selectList.splice(index, 1)
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
		},
		
		// 提交
		submit () {
			const params = {...this.$refs.baseInfo.submit(), ...this.$refs.consigneeInfo.submit()}
			// 请求接口
			
		},
		
		formatTime (date) {
		  const year = date.getFullYear()
		  const month = date.getMonth() + 1
		  const day = date.getDate()
		  const hour = date.getHours()
		  const minute = date.getMinutes()
		  // const second = date.getSeconds()
		
		  return [year, month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute].map(this.formatNumber).join(':')
		},
		
		formatNumber (n) {
		  n = n.toString()
		  return n[1] ? n : '0' + n
		}
	}
}
</script>

<style lang="scss" scoped>
	.flex{
		display: flex;
	}
	.align-items_center {
		align-items: center;
	}
	.justify-content_between {
		justify-content: space-between;
	}
	.flex-f-d-c  {
		flex-direction: column;
	}
	.flex-shrink {
		flex-shrink: 0;
	}
	.container {
		height: calc(100vh - 40px);
		overflow-y: auto;
		padding-bottom: 20px;
		box-sizing: border-box;
		.form-container {
			margin-bottom: 15px;
			.title-box {
				padding: 0 10px;
				box-sizing: border-box;
				line-height: 40px;
				font-size: 14px;
				&::before {
					content: '';
					display: inline-block;
					height: 12px;
					background-color: #2979ff;
					border-radius: 10px;
					width: 4px;
					margin-right: 10px;
				}
				.title-box_content {
					flex: 1;
				}
				.text-mini_class {
					color: #ccc;
					font-size: 12px;
					margin-left: 10px;
				}
				.click-slot_text {
					color: blue;
					font-size: 14px;
				}
			}
		}
		.select-list_box {
			padding: 0 10px;
			box-sizing: border-box;
			.select-list_item {
				padding: 10px 0;
				box-sizing: border-box;
				border-bottom: 1px solid #F1F1F1;
				> image {
					width: 40px;
					height: 40px;
				}
				.content {
					flex: 1;
					.text-desc_box {
						margin-left: 15px;
						.name {
							font-size: 16px;
							color: #333;
						}
						.desc {
							font-size: 12px;
							color: #ccc;
						}
					}
				}
			}
		}
	}
</style>
