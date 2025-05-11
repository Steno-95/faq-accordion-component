function AccordionBlock({ title, content, index }) {
  return (
    <div className="group not-last:border-b-2 not-last:border-b-(--purple-light) h-fit not-last:pb-2">
      <label
        className="flex text-[1rem] tracking-tight pt-4  justify-between items-center hover:text-purple-400 focus-within:text-purple-700 hover:cursor-pointer "
        htmlFor={`check-${index}`}
      >
        <h2 className="font-semibold max-w-[15rem] md:max-w-fit ">{title}</h2>
        <span className="button-accordion ">
          <input
            type="checkbox"
            className="appearance-none absolute top-1/2 left-1/2 -translate-1/2"
            id={`check-${index}`}
            name={`acc-${index}`}
          />
        </span>
      </label>
      <p className="content-accordion group-has-[input:checked]:h-fit my-1.5">
        {content}
      </p>
    </div>
  );
}

export default AccordionBlock;
