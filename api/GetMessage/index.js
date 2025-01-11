module.exports = async function (context, req) {
  const date = "2025-01-11T15:10:26.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

