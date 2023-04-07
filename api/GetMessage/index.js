module.exports = async function (context, req) {
  const date = "2023-04-07T02:25:28.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

