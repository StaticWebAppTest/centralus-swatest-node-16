module.exports = async function (context, req) {
  const date = "2023-07-20T00:53:06.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

