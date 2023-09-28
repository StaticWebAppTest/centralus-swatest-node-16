module.exports = async function (context, req) {
  const date = "2023-09-28T22:08:21.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

