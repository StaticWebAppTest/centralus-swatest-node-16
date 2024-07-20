module.exports = async function (context, req) {
  const date = "2024-07-20T01:56:37.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

