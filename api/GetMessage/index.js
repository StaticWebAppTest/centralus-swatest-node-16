module.exports = async function (context, req) {
  const date = "2024-04-19T01:44:10.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

