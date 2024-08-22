module.exports = async function (context, req) {
  const date = "2024-08-22T22:10:58.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

