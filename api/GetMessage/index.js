module.exports = async function (context, req) {
  const date = "2024-04-07T04:12:56.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

