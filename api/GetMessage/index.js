module.exports = async function (context, req) {
  const date = "2023-05-05T02:25:37.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

