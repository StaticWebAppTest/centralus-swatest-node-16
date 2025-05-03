module.exports = async function (context, req) {
  const date = "2025-05-03T20:12:56.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

