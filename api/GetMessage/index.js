module.exports = async function (context, req) {
  const date = "2025-02-20T18:16:13.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

