module.exports = async function (context, req) {
  const date = "2024-01-25T23:09:41.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

