module.exports = async function (context, req) {
  const date = "2025-01-27T09:13:14.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

