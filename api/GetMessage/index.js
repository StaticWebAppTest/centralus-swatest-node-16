module.exports = async function (context, req) {
  const date = "2025-02-21T19:09:12.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

