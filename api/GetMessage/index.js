module.exports = async function (context, req) {
  const date = "2024-01-17T09:09:59.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

