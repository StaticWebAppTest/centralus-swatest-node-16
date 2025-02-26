module.exports = async function (context, req) {
  const date = "2025-02-26T12:23:47.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

