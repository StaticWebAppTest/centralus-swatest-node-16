module.exports = async function (context, req) {
  const date = "2024-02-11T23:08:24.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

