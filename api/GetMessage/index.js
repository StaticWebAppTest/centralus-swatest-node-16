module.exports = async function (context, req) {
  const date = "2025-04-07T19:10:15.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

