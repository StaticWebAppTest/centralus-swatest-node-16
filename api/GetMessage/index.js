module.exports = async function (context, req) {
  const date = "2024-02-20T01:39:56.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

