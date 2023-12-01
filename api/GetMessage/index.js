module.exports = async function (context, req) {
  const date = "2023-12-01T00:48:30.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

