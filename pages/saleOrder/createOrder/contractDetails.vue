<template>
	<view>
		<view class="form-container">
			<view class="title-box flex align-items_center">合同明细</view>
			<form-comp :searches="contractDetails" ref="contractDetails"/>
		</view>
	</view>
</template>

<script>
import formComp from '@/components/form.vue'
	export default {
    components: { formComp},
		data()  {
			return {
				// loadingText: '加载中...',
				// 基础信息
				contractDetails: [
					// 对外发文编号
					{prop: 'sadasd', label: '对外发文编号', compName: 'text',placeholder: '自动带出'},
					// 纸质合同编号
					{prop: 'sadasd', label: '纸质合同编号', compName: 'text',placeholder: '自动带出'},
					// 合同金额
					{prop: 'sadasd', label: '合同金额', compName: 'text',placeholder: '自动带出'},
					// 用章名称
					{prop: 'sadasd', label: '用章名称', compName: 'text',placeholder: '自动带出'},
					// 盖章先后
					{prop: 'sadasd', label: '盖章先后', compName: 'text',placeholder: '自动带出'},
					// 收件人
					{prop: 'sadasd', label: '收件人', compName: 'text',placeholder: '自动带出'},
					// 收件人联系方式
					{prop: 'sadasd', label: '收件人联系方式', compName: 'text',placeholder: '自动带出'},
					// 收件地址
					{prop: 'sadasd', label: '收件地址', compName: 'text',placeholder: '自动带出'},
					// 备注
					{prop: 'common', label: '备注', compName: 'textarea',placeholder: '请输入', labelPosition: 'top', inputBorder: true},
				],
			}
		},
		methods: {
			submit(cb) {
				this.$refs.contractDetails.submit(data => {
					cb(data)
				})
			},
			// 获取表单数据
			getData () {				
				const params = {...this.$refs.contractDetails.formData}
				return params
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form-container {
		margin-bottom: 15px;
		background: #fff;
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
			.btn-class {
				margin: 0;
			}
		}
	}
</style>
