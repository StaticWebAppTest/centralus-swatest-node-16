module.exports = async function (context, req) {
  const date = "2025-05-15T10:14:32.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

