module.exports = async function (context, req) {
  const date = "2025-11-28T09:14:58.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

