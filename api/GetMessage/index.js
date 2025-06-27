module.exports = async function (context, req) {
  const date = "2025-06-27T05:14:51.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

