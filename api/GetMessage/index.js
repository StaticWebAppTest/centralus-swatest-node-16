module.exports = async function (context, req) {
  const date = "2024-03-05T22:08:18.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

