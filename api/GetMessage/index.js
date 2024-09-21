module.exports = async function (context, req) {
  const date = "2024-09-21T10:10:40.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

