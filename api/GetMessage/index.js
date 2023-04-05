module.exports = async function (context, req) {
  const date = "2023-04-05T01:43:50.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

