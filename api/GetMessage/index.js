module.exports = async function (context, req) {
  const date = "2025-01-15T09:12:03.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

