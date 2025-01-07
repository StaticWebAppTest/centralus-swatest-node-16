module.exports = async function (context, req) {
  const date = "2025-01-07T15:19:40.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

