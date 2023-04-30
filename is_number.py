
def solution(nums: list):
    if isinstance(nums, list):
        return sorted(nums)
    else:
        return []


print(solution([1, 2, 3, 10, 5]))
