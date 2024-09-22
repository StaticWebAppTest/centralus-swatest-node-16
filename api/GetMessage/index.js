module.exports = async function (context, req) {
  const date = "2024-09-22T19:08:18.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

