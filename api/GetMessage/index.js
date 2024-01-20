module.exports = async function (context, req) {
  const date = "2024-01-20T07:08:18.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

