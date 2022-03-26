module.exports = async function (context, req) {
  const date = "2022-03-26T02:16:32.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

