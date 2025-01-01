module.exports = async function (context, req) {
  const date = "2025-01-01T09:12:14.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

