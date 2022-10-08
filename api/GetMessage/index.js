module.exports = async function (context, req) {
  const date = "2022-10-08T15:12:37.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

