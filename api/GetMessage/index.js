module.exports = async function (context, req) {
  const date = "2025-03-28T08:16:56.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

