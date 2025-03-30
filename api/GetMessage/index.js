module.exports = async function (context, req) {
  const date = "2025-03-30T10:11:52.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

