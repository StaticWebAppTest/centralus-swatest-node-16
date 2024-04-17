module.exports = async function (context, req) {
  const date = "2024-04-17T01:43:10.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

