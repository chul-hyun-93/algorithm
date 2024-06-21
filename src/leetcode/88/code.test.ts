/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let read1 = m - 1;
  let read2 = n - 1;
  let write = m + n - 1;

  while(read1 >= 0 && read2 >= 0){
    if(nums1[read1] > nums2[read2]){
      nums1[write] = nums1[read1];
      read1--;
    } else {
      nums1[write] = nums2[read2];
      read2--;
    }
    write--;
  }

  while(read2 >= 0){
    nums1[write] = nums2[read2];
    read2--;
    write--;
  }
};
