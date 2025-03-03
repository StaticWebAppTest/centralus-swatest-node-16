module.exports = async function (context, req) {
  const date = "2025-03-03T03:22:14.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

