module.exports = async function (context, req) {
  const date = "2023-02-02T18:11:54.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

