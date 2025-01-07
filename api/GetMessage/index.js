module.exports = async function (context, req) {
  const date = "2025-01-07T19:09:18.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

