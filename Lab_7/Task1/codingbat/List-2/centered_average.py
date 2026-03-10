def centered_average(nums):
    nums.sort()
    total = sum(nums[1:-1])
    return total // (len(nums) - 2)