module.exports = async function (context, req) {
  const date = "2024-08-29T22:10:03.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

