module.exports = async function (context, req) {
  const date = "2025-02-02T18:14:16.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

