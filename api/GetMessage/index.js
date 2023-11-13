module.exports = async function (context, req) {
  const date = "2023-11-13T11:07:44.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

