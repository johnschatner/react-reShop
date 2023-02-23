function NewProduct() {
  // This component is currently only used for converting the products array
  // into a JSON string. If a backend is implemented a whole UI solution for
  // adding, editing, deleting proucts would be possible.

  // Products
  const products = [
    {
      id: 1,
      name: "Leather Desk Pad (Small / Black)",
      price: 110,
      thumbnail: `./images/1-front`,
      secondaryThumbnail: `./images/1-back`,
      headline: "Set Your Workspace Apart",
      description:
        "The leather desk pad brings visual structure and organization to your workspace. The premium, vegetable-tanned leather is buttery soft to the touch and dynamic, with distinguished character that will age and develop as you use it.",
    },
    {
      id: 2,
      name: "Wool Felt Desk Pad (Small / Dark)",
      price: 50,
      thumbnail: `./images/2-front`,
      secondaryThumbnail: `./images/2-back`,
      headline: "Set Your Workspace Apart",
      description:
        "The desk pad brings visual structure and organization to your workspace, with premium 3mm thick virgin Merino Wool Felt. The natural material provides warmth and softness. It accents any desktop, from natural wood grain to white or laminate.",
    },
    {
      id: 3,
      name: "Matte Desk Pad (Small / Black)",
      price: 50,
      thumbnail: `./images/3-front`,
      secondaryThumbnail: `./images/3-back`,
      headline: "Define Your Space",
      description:
        "The matte desk pad brings visual structure and organization to your workspace. The soft, smooth texture is perfect as a writing surface. It accents any desktop, from natural wood grain to white or laminate.",
    },
    {
      id: 4,
      name: "Dark Wool Felt Mouse Pad (Large)",
      price: 45,
      thumbnail: `./images/4-front`,
      secondaryThumbnail: ``,
      headline: "Soft Touch",
      description:
        "The wool felt mouse pad brings a smooth surface for your mouse, with premium 3mm thick virgin merino wool felt and a natural cork lining to keep things in place. The wool provides warmth and softness, and accents any desktop, from natural wood grain to white or laminate.",
    },
    {
      id: 5,
      name: "Black Pen",
      price: 80,
      thumbnail: `./images/5-front`,
      secondaryThumbnail: `./images/5-back`,
      headline: "Mighty Smooth",
      description:
        "Precision machined from solid aluminum, the Grovemade Black Pen has a single piece body built to last a lifetime. A durable ceramic coating gives it a matte black finish.",
    },
    {
      id: 6,
      name: "Brass Pen",
      price: 90,
      thumbnail: `./images/6-front`,
      secondaryThumbnail: `./images/6-back`,
      headline: "Mighty Smooth",
      description:
        "Precision machined from solid brass, the Grovemade Brass Pen has a single piece body built to last a lifetime. We highlight the metal by preserving the raw machining marks—it’s more difficult than bead blasting or tumbling, but it’s worth it to create a truly unique finish. The pen is hand polished and will develop a distinctive patina over time. Manufactured entirely in the Portland area to ensure the highest quality.",
    },
    {
      id: 7,
      name: "Titanium Pen",
      price: 130,
      thumbnail: `./images/7-front`,
      secondaryThumbnail: `./images/7-back`,
      headline: "Super Metal",
      description:
        "Precision machined from solid titanium, the Grovemade Titanium Pen has a single piece body built to last a lifetime. Titanium is a magnificent, lustrous metal. It’s almost as light as aluminum, and harder than stainless steel, while being highly corrosion resistant. The weight of the Titanium pen just feels right in your hand. Each pen is stamped with the elemental symbol, Ti, to denote its value. Manufactured entirely in the Portland area to ensure the highest quality.",
    },
    {
      id: 8,
      name: "Black Notepad",
      price: 80,
      thumbnail: `./images/8-front`,
      secondaryThumbnail: ``,
      headline: "Well Noted",
      description: `Our refillable notepad is there when you need to jot a note or doodle, with a narrow profile that fits into the spaces at your desk. A solid, ceramic-coated, machined aluminum base anchors your note taking. 70# paper with a subtle dot grid on both sides is reversible and clean—flip pages without leaving a torn stub.

        Refillable for a lifetime of note taking. Notepad comes with 70 sheets of paper.
        Drag
        Profile view of black metal desk notepad on black leather desk pad.`,
    },
    {
      id: 9,
      name: "Brass Notepad",
      price: 185,
      thumbnail: `./images/9-front`,
      secondaryThumbnail: ``,
      headline: "Well Noted",
      description: `Our refillable notepad is there when you need to jot a note or doodle, with a narrow profile that fits into the spaces at your desk. A solid, machined brass base anchors your note taking. 70# paper with a subtle dot grid on both sides is reversible and clean—flip pages without leaving a torn stub.

      Refillable for a lifetime of note taking. Notepad comes with 70 sheets of paper.`,
    },
    {
      id: 10,
      name: "Silver Notepad",
      price: 80,
      thumbnail: `./images/10-front`,
      secondaryThumbnail: ``,
      headline: "Well Noted",
      description: `Our refillable notepad is there when you need to jot a note or doodle, with a narrow profile that fits into the spaces at your desk. A solid, ceramic-coated, machined aluminum base anchors your note taking. 70# paper with a subtle dot grid on both sides is reversible and clean—flip pages without leaving a torn stub.

      Refillable for a lifetime of note taking. Notepad comes with 70 sheets of paper.
      Drag
      Profile view of aluminum metal desk notepad on natural leather desk pad.`,
    },
  ];

  // Convert products obj to JSON string
  let json = JSON.stringify(products);

  // Generate a new product
  const addProduct = (product) => {
    products.push(product);
  };

  // Form submission
  const preventDefault = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={preventDefault}>
      <span>Add a new product!</span>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Price</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Headline</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Description</label>
        <textarea className="form-control" type="text" />
      </div>
      <button>Add</button>
    </form>
  );
}

export default NewProduct;
