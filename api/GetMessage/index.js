module.exports = async function (context, req) {
  const date = "2025-05-01T22:12:21.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

