module.exports = async function (context, req) {
  const date = "2024-04-28T12:16:41.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

