module.exports = async function (context, req) {
  const date = "2025-01-30T12:22:11.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

