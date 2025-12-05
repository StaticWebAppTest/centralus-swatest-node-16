module.exports = async function (context, req) {
  const date = "2025-12-05T01:08:27.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

