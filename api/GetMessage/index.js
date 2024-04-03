module.exports = async function (context, req) {
  const date = "2024-04-03T01:42:58.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

