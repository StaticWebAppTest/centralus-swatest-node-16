module.exports = async function (context, req) {
  const date = "2025-01-01T23:11:13.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

