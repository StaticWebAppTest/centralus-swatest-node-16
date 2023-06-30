module.exports = async function (context, req) {
  const date = "2023-06-30T20:09:49.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

