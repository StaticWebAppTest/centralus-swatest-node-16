module.exports = async function (context, req) {
  const date = "2025-01-01T11:09:23.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

