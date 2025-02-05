module.exports = async function (context, req) {
  const date = "2025-02-05T15:11:58.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

