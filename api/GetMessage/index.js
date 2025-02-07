module.exports = async function (context, req) {
  const date = "2025-02-07T16:14:13.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

