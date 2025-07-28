module.exports = async function (context, req) {
  const date = "2025-07-28T10:16:30.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

