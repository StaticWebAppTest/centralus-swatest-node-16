module.exports = async function (context, req) {
  const date = "2025-01-27T14:11:13.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

