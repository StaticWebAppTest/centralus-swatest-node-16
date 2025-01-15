module.exports = async function (context, req) {
  const date = "2025-01-15T07:10:56.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

