module.exports = async function (context, req) {
  const date = "2024-12-07T12:21:56.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

