module.exports = async function (context, req) {
  const date = "2025-06-28T10:13:21.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

