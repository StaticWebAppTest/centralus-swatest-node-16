module.exports = async function (context, req) {
  const date = "2023-03-24T22:08:47.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

