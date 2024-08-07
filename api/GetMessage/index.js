module.exports = async function (context, req) {
  const date = "2024-08-07T20:11:28.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

