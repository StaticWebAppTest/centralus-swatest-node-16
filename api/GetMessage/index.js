module.exports = async function (context, req) {
  const date = "2024-08-17T18:13:21.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

