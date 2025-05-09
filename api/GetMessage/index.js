module.exports = async function (context, req) {
  const date = "2025-05-09T10:13:59.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

