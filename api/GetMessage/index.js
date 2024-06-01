module.exports = async function (context, req) {
  const date = "2024-06-01T10:10:20.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

