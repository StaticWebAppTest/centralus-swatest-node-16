module.exports = async function (context, req) {
  const date = "2023-05-21T13:09:08.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

