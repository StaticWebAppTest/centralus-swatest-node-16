module.exports = async function (context, req) {
  const date = "2024-03-24T01:50:59.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

