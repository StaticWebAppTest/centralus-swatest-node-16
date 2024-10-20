module.exports = async function (context, req) {
  const date = "2024-10-20T12:21:28.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

