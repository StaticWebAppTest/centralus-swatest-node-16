module.exports = async function (context, req) {
  const date = "2024-02-16T01:40:51.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

