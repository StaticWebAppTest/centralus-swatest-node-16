module.exports = async function (context, req) {
  const date = "2024-01-27T22:08:26.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

