module.exports = async function (context, req) {
  const date = "2024-11-23T04:14:33.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

