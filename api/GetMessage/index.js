module.exports = async function (context, req) {
  const date = "2025-01-11T14:09:37.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

