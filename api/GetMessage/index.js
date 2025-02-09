module.exports = async function (context, req) {
  const date = "2025-02-09T15:11:20.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

