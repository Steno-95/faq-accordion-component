function AccordionBlock({ title, content, index }) {
  return (
    <div className="group not-last:border-b-2 not-last:border-b-(--purple-light) h-fit">
      <label
        className="flex text-[1rem] tracking-tight py-2 justify-between items-center
            "
        htmlFor={`check-${index}`}
      >
        <h2 className="font-semibold w-fit">{title}</h2>
        <span className="button-accordion">
          <input
            type="checkbox"
            className="appearance-none absolute top-1/2 left-1/2 -translate-1/2"
            id={`check-${index}`}
            name={`acc-${index}`}
          />
        </span>
      </label>
      <p className="content-accordion group-has-[input:checked]:h-fit">
        {content}
      </p>
    </div>
  );
}

export default AccordionBlock;
