module.exports = async function (context, req) {
  const date = "2025-02-20T09:12:46.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

