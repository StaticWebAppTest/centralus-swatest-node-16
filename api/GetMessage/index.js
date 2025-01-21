module.exports = async function (context, req) {
  const date = "2025-01-21T02:10:03.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

