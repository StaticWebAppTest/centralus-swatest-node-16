module.exports = async function (context, req) {
  const date = "2025-12-05T14:14:33.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

