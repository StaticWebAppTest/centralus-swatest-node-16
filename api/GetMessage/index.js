module.exports = async function (context, req) {
  const date = "2025-03-21T16:15:32.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

