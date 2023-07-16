module.exports = async function (context, req) {
  const date = "2023-07-16T14:08:11.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

