module.exports = async function (context, req) {
  const date = "2025-04-27T06:17:15.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

