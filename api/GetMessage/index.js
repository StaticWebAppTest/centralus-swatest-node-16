module.exports = async function (context, req) {
  const date = "2025-05-25T04:20:16.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

