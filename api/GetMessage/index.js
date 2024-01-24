module.exports = async function (context, req) {
  const date = "2024-01-24T20:10:16.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

