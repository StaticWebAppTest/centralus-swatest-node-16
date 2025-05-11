module.exports = async function (context, req) {
  const date = "2025-05-11T05:12:32.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

