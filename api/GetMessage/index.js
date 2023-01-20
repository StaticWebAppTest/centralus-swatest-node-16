module.exports = async function (context, req) {
  const date = "2023-01-20T10:10:36.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

