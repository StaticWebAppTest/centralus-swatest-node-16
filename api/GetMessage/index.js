module.exports = async function (context, req) {
  const date = "2024-04-07T02:20:04.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

