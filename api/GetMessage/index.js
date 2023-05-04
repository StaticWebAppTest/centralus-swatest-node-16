module.exports = async function (context, req) {
  const date = "2023-05-04T05:08:38.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

