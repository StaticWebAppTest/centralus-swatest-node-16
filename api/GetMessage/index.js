module.exports = async function (context, req) {
  const date = "2024-04-09T14:08:41.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

