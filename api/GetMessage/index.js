module.exports = async function (context, req) {
  const date = "2025-01-11T20:11:46.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

