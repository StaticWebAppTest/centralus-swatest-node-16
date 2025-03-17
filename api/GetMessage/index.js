module.exports = async function (context, req) {
  const date = "2025-03-17T10:14:05.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

