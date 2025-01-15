module.exports = async function (context, req) {
  const date = "2025-01-15T10:12:19.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

