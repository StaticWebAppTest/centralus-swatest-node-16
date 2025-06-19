module.exports = async function (context, req) {
  const date = "2025-06-19T03:13:19.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

