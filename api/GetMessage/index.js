module.exports = async function (context, req) {
  const date = "2024-09-05T00:53:42.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

