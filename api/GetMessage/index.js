module.exports = async function (context, req) {
  const date = "2023-01-15T22:08:38.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

