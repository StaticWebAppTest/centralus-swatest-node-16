module.exports = async function (context, req) {
  const date = "2023-12-15T22:08:34.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

