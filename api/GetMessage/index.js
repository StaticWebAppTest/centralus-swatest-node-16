module.exports = async function (context, req) {
  const date = "2023-08-19T01:36:15.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

