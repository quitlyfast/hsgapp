<template>
	<view class="box">
		<view class="fixed-top_box">
			<uni-nav-bar statusBar shadow leftIcon="arrowleft" rightIcon="plusempty" title="标题" @clickRight="submit" @clickLeft="goBack"/>
			<view class="tab-box flex align-items_center">
				<text class="tab-item_class flex align-items_center justify-content_center"
					:class="{'active-class': activeIndex === index}" v-for="(item, index) in tabList" :key="index"
					@click="changeTab(index)">{{item}}</text>
			</view>
			<uni-search-bar @confirm="searchConfirm" v-model="searchValue" class="search-bar_class"></uni-search-bar>
		</view>
		<view class="container">
			<block>
				<view v-for="(item, index) in (list.length ? list : 12)" :key="index" class="list-box">
					<view class="list-item flex align-items_center justify-content_between">
						<text class="name-class">公司名</text>
						<text class="status-class">状态</text>
					</view>
					<view class="list-item_content">
						<view class="list-item_msg flex align-items_center">
							<text class="text-align_justify">订单总额</text>
							<text class="dash-class">:</text>
							123
						</view>
						<view class="list-item_msg flex align-items_center">
							<text class="text-align_justify">负责人</text>
							<text class="dash-class">:</text>
							123
						</view>
						<view class="list-item_msg flex align-items_center">
							<text class="text-align_justify">合同日期</text>
							<text class="dash-class">:</text>
							123
						</view>
						<view class="list-item_msg flex align-items_center">
							<text class="text-align_justify">订单编号</text>
							<text class="dash-class">:</text>
							123
						</view>
						<view class="list-item_msg flex align-items_center">
							<text class="text-align_justify">报价单号</text>
							<text class="dash-class">:</text>
							123
						</view>
					</view>
				</view>
			</block>
		</view>
		<!-- <view class="loading">{{loadingText}}</view> -->
	</view>
</template>
<script>
	import {login_touken} from '@/config/api';
	import {uniNavBar,uniSearchBar} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniNavBar,
			uniSearchBar
		},
		data() {
			return {
				// 搜索的关键字
				searchValue: null,
				// 列表数据
				list: [],
				// tab切换下标
				activeIndex: 0,
				// tab的三个值，没有意义的
				tabList: ['审核中', '审核通过', '审核不通过'],
				// loadingText: '加载中...',
			}
		},
		
		// 下拉刷新
		onPullDownRefresh() {
			// 刷新，请求成功后执行 uni.stopPullDownRefresh()，现在只是模拟请求而已
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 2000)
		},

		// 上拉加载， 执行请求进行分页数据查询
		onReachBottom() {
			// this.list = 24
		},
		mounted(){
			let that = this;
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			that.$http(`${login_touken}`, {
				username: "陈海涛",
				companyName: '宏石'
			}).then(res => {
			
				let stat = res.objx
				console.log(res.objx.token)
				uni.setStorage({
					key: 'token',
					data: res.objx.token
				});
				if (res.type == "success") {
					// uni.setStorage({
					// 	key: 'token',
					// 	data: yaya.token
					// });
					setTimeout(function() {
						uni.hideLoading();
					}, 1000);
			
				} else {
					uni.hideLoading();
					uni.showToast({
						title: res.content,
						icon: 'none',
						duration: 2000
					})
				}
			}).catch(res => {
				console.log("error", res)
			})
		},
		methods: {
			// 返回上一页
			goBack () {
				uni.navigateBack({
				    delta: 1
				});
			},
			// 搜索
			searchConfirm (data) {
				const {value} = data
				// 根据value请求接口
				console.log(value)
			},
			
			// 添加订单
			submit() {
				uni.navigateTo({
					url: '/pages/saleOrder/createOrder/index'
				});
			},
			// 切换tab
			changeTab(index) {
				this.activeIndex = index
			}
		}
	}
</script>
<style lang="scss" scoped>
	.search-bar_class {
		background: #f8f8f8;
		/deep/ .uni-searchbar__box {
			background: #fff !important;
		}
	}
	.container {
		height: auto;
		overflow-y: unset;
	}

	.tab-box {
		height: 50px;

		.tab-item_class {
			flex: 1;
			height: 100%;
			font-size: 14px;
			position: relative;
			color: #ccc;
		}

		.active-class {
			color: #2979ff;

			&::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				background: #2979ff;
				bottom: 0;
			}
		}
	}

	.list-box {
		background: #fff;
		margin-bottom: 10px;
		padding: 0 10px;
		box-sizing: border-box;

		.list-item {
			height: 40px;
			border-bottom: 1px solid #F1F1F1;

			>text {
				font-size: 16px;
			}

			.name-class {
				color: #333;
			}

			.status-class {
				color: #F0AD4E;
			}
		}

		.list-item_content {
			font-size: 14px;

			.list-item_msg {
				height: 30px;
				color: #333;

				>text {
					color: #ccc;
					display: inline-block;
					width: 60px;
				}

				.dash-class {
					margin: 0 15px 0 5px;
					width: auto;
				}
			}
		}
	}

	.loading {
		text-align: center;
		line-height: 30px;
	}
</style>
