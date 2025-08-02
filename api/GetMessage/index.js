module.exports = async function (context, req) {
  const date = "2025-08-02T21:12:34.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

