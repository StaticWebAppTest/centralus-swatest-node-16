module.exports = async function (context, req) {
  const date = "2025-04-27T23:12:14.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

