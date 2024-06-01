module.exports = async function (context, req) {
  const date = "2024-06-01T00:49:57.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

