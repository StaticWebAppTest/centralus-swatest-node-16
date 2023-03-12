module.exports = async function (context, req) {
  const date = "2023-03-12T22:08:38.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

