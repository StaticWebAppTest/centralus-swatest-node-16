module.exports = async function (context, req) {
  const date = "2025-01-30T15:11:44.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

