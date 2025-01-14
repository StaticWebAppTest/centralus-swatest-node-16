module.exports = async function (context, req) {
  const date = "2025-01-14T00:54:50.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

