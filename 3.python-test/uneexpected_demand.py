def filledOrders(order, k):
    # Write your code here
    max_orders = 0

    # order.sort(reverse=True)
    order.sort()
    print(order)

    for x in range(0, len(order)):
        k = k - order[x]

        if k>=0:
            max_orders = max_orders+1
        else:
            break

    return max_orders


order = [10, 50, 20, 90, 30]
k = 40

print(filledOrders(order, k))