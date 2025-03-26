module.exports = async function (context, req) {
  const date = "2025-03-26T21:11:42.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

