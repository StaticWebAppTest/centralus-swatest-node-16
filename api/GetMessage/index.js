module.exports = async function (context, req) {
  const date = "2024-06-03T01:56:16.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

