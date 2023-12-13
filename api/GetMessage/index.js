module.exports = async function (context, req) {
  const date = "2023-12-13T20:10:07.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

