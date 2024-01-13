module.exports = async function (context, req) {
  const date = "2024-01-13T01:51:33.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

