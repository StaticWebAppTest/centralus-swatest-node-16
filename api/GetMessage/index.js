module.exports = async function (context, req) {
  const date = "2024-05-19T01:56:00.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

