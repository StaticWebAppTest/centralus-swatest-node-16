module.exports = async function (context, req) {
  const date = "2024-08-28T19:08:59.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

