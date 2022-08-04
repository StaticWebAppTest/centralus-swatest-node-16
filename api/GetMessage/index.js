module.exports = async function (context, req) {
  const date = "2022-08-04T12:21:23.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

