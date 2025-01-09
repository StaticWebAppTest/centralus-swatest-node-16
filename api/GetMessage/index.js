module.exports = async function (context, req) {
  const date = "2025-01-09T18:16:27.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

