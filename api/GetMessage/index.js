module.exports = async function (context, req) {
  const date = "2023-01-05T04:11:52.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

