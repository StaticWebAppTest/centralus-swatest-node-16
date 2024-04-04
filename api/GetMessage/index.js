module.exports = async function (context, req) {
  const date = "2024-04-04T16:11:36.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

