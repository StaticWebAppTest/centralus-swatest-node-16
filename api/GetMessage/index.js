module.exports = async function (context, req) {
  const date = "2024-07-07T05:12:20.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

