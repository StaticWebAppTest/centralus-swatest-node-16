module.exports = async function (context, req) {
  const date = "2023-11-21T22:08:47.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

