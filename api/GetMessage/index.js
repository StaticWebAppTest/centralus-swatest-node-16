module.exports = async function (context, req) {
  const date = "2025-03-21T18:16:55.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

