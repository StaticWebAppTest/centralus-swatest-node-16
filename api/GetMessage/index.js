module.exports = async function (context, req) {
  const date = "2025-02-20T21:10:13.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

