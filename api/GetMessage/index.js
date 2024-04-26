module.exports = async function (context, req) {
  const date = "2024-04-26T01:45:54.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

