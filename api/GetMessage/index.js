module.exports = async function (context, req) {
  const date = "2024-02-20T03:09:55.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

