module.exports = async function (context, req) {
  const date = "2022-03-16T14:09:26.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

