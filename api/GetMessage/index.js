module.exports = async function (context, req) {
  const date = "2024-08-21T04:13:58.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

