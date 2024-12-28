module.exports = async function (context, req) {
  const date = "2024-12-28T00:55:54.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

