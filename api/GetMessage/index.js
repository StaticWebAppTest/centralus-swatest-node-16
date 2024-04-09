module.exports = async function (context, req) {
  const date = "2024-04-09T02:17:16.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

