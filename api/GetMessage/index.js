module.exports = async function (context, req) {
  const date = "2023-11-05T01:51:28.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

