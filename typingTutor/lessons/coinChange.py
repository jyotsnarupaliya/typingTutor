def change_count(coins, money):
	if money == 0:
		return 1
	elif money < 0:
		return 0
	elif money >= 1 and len(coins) <= 0:
		return 0
	else:
		return change_count(coins, money-coins[-1]) + change_count(coins[0:-1], money)


print (change_count([8,1,2,3], 3))