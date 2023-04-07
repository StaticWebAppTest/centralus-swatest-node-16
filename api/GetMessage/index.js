module.exports = async function (context, req) {
  const date = "2023-04-07T19:06:48.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

