module.exports = async function (context, req) {
  const date = "2025-12-24T21:12:56.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

