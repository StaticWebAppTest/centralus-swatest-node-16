module.exports = async function (context, req) {
  const date = "2025-02-03T12:22:11.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

