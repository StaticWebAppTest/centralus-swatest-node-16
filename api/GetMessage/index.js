module.exports = async function (context, req) {
  const date = "2023-07-05T01:01:29.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

