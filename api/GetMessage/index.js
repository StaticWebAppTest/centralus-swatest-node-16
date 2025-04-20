module.exports = async function (context, req) {
  const date = "2025-04-20T10:12:04.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

