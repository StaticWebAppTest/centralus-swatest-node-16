module.exports = async function (context, req) {
  const date = "2025-09-11T16:16:02.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

