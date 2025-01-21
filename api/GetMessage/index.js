module.exports = async function (context, req) {
  const date = "2025-01-21T18:16:02.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

