function EndOfList() {
  return (
    <div className="flex items-center justify-center my-12 gap-3">
      <hr className="border-t-2 border-t-primary w-full max-w-12" />
      <p className="text-primary-500 text-sm whitespace-nowrap">
        We've run out of cats to show
        <br />
        They've all gone for a catnap.
      </p>
      <hr className="border-t-2 border-t-primary w-full max-w-12" />
    </div>
  )
}

export default EndOfList
