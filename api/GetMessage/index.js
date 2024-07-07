module.exports = async function (context, req) {
  const date = "2024-07-07T04:11:52.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

