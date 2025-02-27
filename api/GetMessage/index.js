module.exports = async function (context, req) {
  const date = "2025-02-27T03:19:51.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

