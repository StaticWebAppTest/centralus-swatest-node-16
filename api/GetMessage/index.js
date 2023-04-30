module.exports = async function (context, req) {
  const date = "2023-04-30T22:07:38.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

