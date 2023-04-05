module.exports = async function (context, req) {
  const date = "2023-04-05T19:08:00.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

