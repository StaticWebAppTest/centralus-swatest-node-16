module.exports = async function (context, req) {
  const date = "2024-04-27T19:06:43.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

