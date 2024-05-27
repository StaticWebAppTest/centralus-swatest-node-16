module.exports = async function (context, req) {
  const date = "2024-05-27T22:08:57.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

