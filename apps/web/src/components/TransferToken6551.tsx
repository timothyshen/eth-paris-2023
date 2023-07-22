

const transferToken6551 = (props) => {
    const { write, isLoading, writeResult } = useContractWrite(
        Account__factory,
        'executeCall',
        {
            address: selectedToken?.accountAddress,
            reckless: true,
            onSuccess: () => {
                onClose();
                setTimeout(() => {
                    queryClient.invalidateQueries(['stats', selectedToken.profileId]);

                    statsQuery.refetch();
                }, 1500);
            },
            onError: (e) => {
                console.error(e);
                notify('Failed posting', 'error');
            },
        }
}