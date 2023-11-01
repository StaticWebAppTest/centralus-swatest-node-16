module.exports = async function (context, req) {
  const date = "2023-11-01T00:43:47.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

