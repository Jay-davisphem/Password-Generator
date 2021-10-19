count = 0
for i in range(ord('!'), ord('~')+1):
 print(end=' ')
 print(chr(i), end=' '*5)
 count += 1
 if count%10 == 0:
   print()
