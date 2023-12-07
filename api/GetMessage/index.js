module.exports = async function (context, req) {
  const date = "2023-12-07T02:23:37.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

