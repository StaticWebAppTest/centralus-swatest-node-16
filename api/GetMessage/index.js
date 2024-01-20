module.exports = async function (context, req) {
  const date = "2024-01-20T12:15:44.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

