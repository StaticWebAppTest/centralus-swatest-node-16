module.exports = async function (context, req) {
  const date = "2023-07-05T19:08:11.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

