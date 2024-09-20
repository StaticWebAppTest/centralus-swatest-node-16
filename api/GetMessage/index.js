module.exports = async function (context, req) {
  const date = "2024-09-20T12:21:27.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

