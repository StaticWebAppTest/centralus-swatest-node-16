module.exports = async function (context, req) {
  const date = "2023-11-21T01:55:19.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

