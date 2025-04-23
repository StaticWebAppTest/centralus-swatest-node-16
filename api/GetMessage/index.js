module.exports = async function (context, req) {
  const date = "2025-04-23T19:10:29.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

