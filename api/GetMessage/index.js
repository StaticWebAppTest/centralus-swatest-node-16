module.exports = async function (context, req) {
  const date = "2024-04-21T01:51:52.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

