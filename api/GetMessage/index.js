module.exports = async function (context, req) {
  const date = "2023-06-28T19:08:00.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

