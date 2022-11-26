module.exports = async function (context, req) {
  const date = "2022-11-26T02:20:32.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

