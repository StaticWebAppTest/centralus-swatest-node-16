module.exports = async function (context, req) {
  const date = "2025-03-06T14:11:45.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

