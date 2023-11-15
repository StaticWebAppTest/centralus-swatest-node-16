module.exports = async function (context, req) {
  const date = "2023-11-15T22:08:31.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

