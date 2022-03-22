module.exports = async function (context, req) {
  const date = "2022-03-22T08:12:55.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

