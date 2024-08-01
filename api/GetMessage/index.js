module.exports = async function (context, req) {
  const date = "2024-08-01T10:12:16.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

