<template>
	<view>
		<view class="form-container">
			<view class="title-box flex align-items_center">产品明细</view>
			<form-comp :searches="orderProduct" ref="orderProduct" />
		</view>

		<view class="form-container">
			<view class="title-box flex align-items_center">
				<view class="title-box_content flex align-items_center justify-content_between">
					<view>赠送配件明细</view>
					<button type="primary" size="mini" @click="selectParts" class="btn-class">选择配件</button>
				</view>
			</view>
			<view class="list-box" v-if="partsList.length">
				<view class="list-item_class" v-for="(item, index) in partsList" :key="index">
					<view class="list-item_column flex align-items_center justify-content_between">
						<text>配件名称</text> {{item.partName}}
					</view>
					<view class="list-item_column flex align-items_center justify-content_between">
						<text>配件编码</text>{{item.partCode}}
					</view>
					<view class="list-item_column flex align-items_center justify-content_between">
						<text>销售价格</text>{{item.partPrice}}
					</view>
					<view class="list-item_column flex align-items_center justify-content_between">
						<text>数量</text>
						<uni-easyinput class="easyinput-class text-align_right" type="number" v-model="item.number"
							placeholder="请输入" :inputBorder="false" />
					</view>
					<view class="list-item_column flex align-items_center justify-content_between">
						<text>金额</text>{{item.partPrice * item.number}}
					</view>
					<view class="list-item_column flex align-items_center justify-content_center color-text"
						@click="deleteParts(index)">
						<uni-icons type="trash" size="20" color="red" class="icon-class" />删除信息
					</view>
				</view>
			</view>
			<view v-else class="no-data_class flex justify-content_center align-items_center">暂无添加数据</view>
		</view>
	</view>
</template>

<script>
	import {uniEasyinput, uniIcons} from '@dcloudio/uni-ui'
	import formComp from '@/components/form.vue'
	export default {
		props: {
			selectedParts: {
				type: Array,
				default: () => ([])
			}
		},
		components: {
			uniEasyinput,
			uniIcons,
			formComp
		},
		data() {
			return {
				// loadingText: '加载中...',
				// 产品明细
				orderProduct: [
					// 订单机型编码
					{
						prop: '21',
						label: '订单机型编码',
						compName: 'easyinput',
						placeholder: '请输入'
					},
					// 标记编码
					{
						prop: 'sadasd',
						label: '标记编码',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 产品名称
					{
						prop: 'sadasd',
						label: '产品名称',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 含税单价
					{
						prop: 'sadasd',
						label: '含税单价',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 数量
					{
						prop: 'sadasd',
						label: '数量',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 金额
					{
						prop: 'sadasd',
						label: '金额',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 合同交期
					{
						prop: 'sadasd',
						label: '合同交期',
						compName: 'text',
						placeholder: '自动带出'
					},
					// PMC回复交期
					{
						prop: '21',
						label: 'PMC回复交期',
						compName: 'easyinput',
						placeholder: '请输入'
					},
					// 订单类型
					{
						prop: 'sadasd',
						label: '订单类型',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 定金金额
					{
						prop: 'sadasd',
						label: '定金金额',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 赠送移机次数
					{
						prop: 'sadasd',
						label: '赠送移机次数',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 机床延保（年）
					{
						prop: 'sadasd',
						label: '床延保（年）',
						compName: 'text',
						placeholder: '自动带出'
					},
					// 激光器延保（年）
					{
						prop: 'sadasd',
						label: '激光器延保（年）',
						compName: 'text',
						placeholder: '自动带出'
					},
				],
				// 业绩占比分配数据， 业务员名称：name  业绩占比：businessRate   核算占比: accountingRate   说明: desc
				partsList: []
			}
		},
		watch: {
			selectedParts(data) {
				const list = data.map(v => {
					return {
						partName: v.partName,
						partCode: v.partCode,
						partPrice: v.partPrice,
						id: v.id,
						number: 1
					}
				})
				this.partsList = [...list, ...this.partsList]
			}
		},
		methods: {
			// 选择配件
			selectParts() {
				uni.navigateTo({
					url: '/pages/saleOrder/parts/list'
				});
			},
			// 删除配件
			deleteParts(index) {
				this.partsList.splice(index, 1)
			},
			submit(cb) {
				this.$refs.orderProduct.submit(data => {
					if (data) {
						cb({
							...data,
							partsList: this.partsList
						})
					} else {
						cb(data)
					}
				})
			},
			// 获取表单数据
			getData() {
				const params = {
					...this.$refs.orderProduct.formData,
					partsList: this.partsList
				}
				return params
			}
		}
	}
</script>

<style lang="scss" scoped>
	.no-data_class {
		height: 80px;
		width: 100%;
		font-size: 14px;
		color: #ccc;
	}

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

	.list-box {
		padding: 10px;
		box-sizing: border-box;
		font-size: 14px;
		color: #333;

		.list-item_class {
			padding: 10px;
			box-sizing: border-box;
			border: 1px solid #F1F1F1;
			box-shadow: 0 0 5px 0 #ccc;
			border-radius: 10px;
			margin-bottom: 10px;

			.color-text {
				color: red;
			}

			.list-item_column {
				height: 36px;

				>text:not(.icon-class) {
					width: 80px;
				}

				.easyinput-class {
					flex: 1;
					height: 36px;
					font-size: 14px !important;

					/deep/ .uni-easyinput__content-input {
						padding: 0 10px;

						.uni-easyinput__placeholder-class {
							font-size: 14px;
						}
					}
				}
			}
		}
	}
</style>
