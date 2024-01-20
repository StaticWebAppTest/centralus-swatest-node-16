module.exports = async function (context, req) {
  const date = "2024-01-20T10:08:52.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

