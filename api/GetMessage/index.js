module.exports = async function (context, req) {
  const date = "2024-02-21T00:41:28.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

