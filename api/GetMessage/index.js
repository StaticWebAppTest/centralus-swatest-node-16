module.exports = async function (context, req) {
  const date = "2025-12-28T16:16:45.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

