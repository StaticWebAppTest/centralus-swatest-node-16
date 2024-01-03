module.exports = async function (context, req) {
  const date = "2024-01-03T04:11:26.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

