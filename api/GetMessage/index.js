module.exports = async function (context, req) {
  const date = "2024-07-10T02:34:16.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

