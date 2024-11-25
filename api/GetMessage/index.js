module.exports = async function (context, req) {
  const date = "2024-11-25T08:17:25.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

