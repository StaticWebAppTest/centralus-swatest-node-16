module.exports = async function (context, req) {
  const date = "2025-05-28T17:12:11.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

