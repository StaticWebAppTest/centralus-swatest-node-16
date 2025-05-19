module.exports = async function (context, req) {
  const date = "2025-05-19T14:13:38.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

