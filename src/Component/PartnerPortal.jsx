import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import DisplayJson from "./DisplayJson";
import "../style.css";
function PartnerPortal(props) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    fields: Variants,
    append: VariantsAppend,
    remove: VariantsRemove,
  } = useFieldArray({ control, name: "variants" });
  const {
    fields: Features,
    append: FeaturesAppend,
    remove: FeaturesRemove,
  } = useFieldArray({ control, name: "features" });
  const {
    fields: KeyFeatures,
    append: KeyFeaturesAppend,
    remove: KeyFeaturesRemove,
  } = useFieldArray({ control, name: "keyFeatureIds" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [datas, setDatas] = useState();
  function displayResult(data) {
    <DisplayJson data={data} />;
    setIsSubmitted(true);
    return (
      <div>
        {console.log(data)}
        {setDatas(data)}
        <h1>Submitted</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <DisplayJson data={data} />
      </div>
    );
  }

  const Input = ({ label, registerName, required, placeholder }) => (
    <>
      <label>{label}</label>
      <input
        {...register(registerName, { required })}
        placeholder={placeholder}
      />
    </>
  );

  return (
    <>
      <form onSubmit={handleSubmit((data) => displayResult(data))}>
        <Input
          label="Name of the Product"
          registerName={"name"}
          required
          placeholder="Enter Name of the Product"
        />
        <br />
        <Input
          label="Code"
          registerName={"name"}
          required
          placeholder="Enter Code of the Product"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <Input
          label="Enter Partner Code"
          registerName={"partnerCode"}
          required
          placeholder="Enter Partner Code of the Product"
        />
        <br />
        <Input
          label="Enter Category of product"
          registerName={"categoryCode"}
          required
          placeholder="Enter categoryCode of the Product"
        />
        <br />
        <Input
          label="Enter subCategoryCode of product"
          registerName={"subCategoryCode"}
          required
          placeholder="Enter subCategoryCode of the Product"
        />
        <br />
        <Input
          label="Enter producType"
          registerName={"producType"}
          required
          placeholder="Enter Type of the Product"
        />
        <br />
        <div>
          <ul>
            {Variants.map((variants, index) => (
              <li key={variants.id}>
                <input
                  {...register(`variants.${index}.code`)}
                  defaultValue={variants.code}
                  placeholder="Variant Code"
                />
                <input
                  {...register(`variants.${index}.name`)}
                  defaultValue={variants.name}
                  placeholder="Variant Name"
                />
                <input
                  {...register(`variants.${index}.mainFeatureTemplate`)}
                  defaultValue={variants.mainFeatureTemplate}
                  placeholder="Variant mainFeatureTemplate"
                />
                <input
                  {...register(`variants.${index}.productOffering.label`)}
                  defaultValue={variants.productOffering}
                  placeholder="Variant mainFeatureTemplate Label"
                />
                <input
                  {...register(`variants.${index}.productOffering.value`)}
                  defaultValue={variants.productOffering}
                  placeholder="Variant mainFeatureTemplate Value"
                />
                <input
                  {...register(`variants.planoffers.${index}.label`)}
                  defaultValue={variants.planoffers}
                  placeholder="Plan Offers Label"
                />
                <input
                  {...register(`variants.planoffers.${index}.value`)}
                  defaultValue={variants.planoffers}
                  placeholder="Plan Offers Value"
                />
                <input
                  {...register(`variants.${index}.info`)}
                  defaultValue={variants.info}
                  placeholder="Info"
                />
                <button type="button" onClick={() => VariantsRemove(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <button type="button" onClick={() => VariantsAppend({})}>
            Add Variant
          </button>
        </div>
        <br />
        <Input
          label="Are there any member benefits?"
          registerName={"memberBenefit"}
          placeholder="Enter true or false (Boolean)"
        />
        <br />
        <Input
          label="Mention Status ACTIVE or INACTIVE"
          registerName={"status"}
          placeholder="Enter status"
        />
        <br />
        <Input
          label="Enter mainFeatureId"
          registerName={"mainFeatureId"}
          placeholder="Enter mainFeatureId"
        />
        <br />
        <Input label="Enter tag" registerName={"tag"} placeholder="Enter tag" />
        <br />
        <Input
          label="Is StandingInstruction Enabled?"
          registerName={"isStandingInstructionEnabled"}
          placeholder="Enter true or false (Boolean)"
        />
        <br />
        <ul>
          {Features.map((features, index) => (
            <li key={features.id}>
              <input
                {...register(`features.${index}.featureId`)}
                defaultValue={features.featureId}
                placeholder="Enter Feature ID"
              />

              <input
                {...register(`features.${index}.label`)}
                defaultValue={features.name}
                placeholder="Enter Feature Name label"
              />
              <input
                {...register(`features.${index}.value`)}
                defaultValue={features.mainFeatureTemplate}
                placeholder="Enter mainFeatureTemplate"
              />
              <input
                {...register(`features.${index}.icon`)}
                defaultValue={features.icon}
                placeholder="Enter Feature Icon"
              />
              <input
                {...register(`features.description.${index}`)}
                defaultValue={features.description}
                placeholder="Enter Feature Description"
              />

              <button type="button" onClick={() => FeaturesRemove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => FeaturesAppend({})}>
          Add Feature
        </button>
        <ul>
          {KeyFeatures.map((keyFeatureIds, index) => (
            <li key={keyFeatureIds.id}>
              <input
                {...register(`keyFeatureIds.${index}`)}
                placeholder="Enter Key Feature IDs"
              />

              <button type="button" onClick={() => KeyFeaturesRemove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => KeyFeaturesAppend({})}>
          Add keyFeatureIds
        </button>
        <input type="submit" />
        {console.log(isSubmitted)}
        {isSubmitted === true && <DisplayJson data={datas} />}
      </form>
    </>
  );
}
export default PartnerPortal;
