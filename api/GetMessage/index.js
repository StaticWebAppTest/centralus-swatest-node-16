module.exports = async function (context, req) {
  const date = "2024-05-24T20:10:23.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

