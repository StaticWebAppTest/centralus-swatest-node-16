module.exports = async function (context, req) {
  const date = "2025-09-28T16:13:18.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

