module.exports = async function (context, req) {
  const date = "2025-05-28T14:14:15.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

