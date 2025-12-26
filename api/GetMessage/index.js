module.exports = async function (context, req) {
  const date = "2025-12-26T10:15:59.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

