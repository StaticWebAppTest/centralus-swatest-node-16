module.exports = async function (context, req) {
  const date = "2024-02-09T01:40:00.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

