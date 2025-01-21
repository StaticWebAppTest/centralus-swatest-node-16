module.exports = async function (context, req) {
  const date = "2025-01-21T16:14:02.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

