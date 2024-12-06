module.exports = async function (context, req) {
  const date = "2024-12-06T23:11:51.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

