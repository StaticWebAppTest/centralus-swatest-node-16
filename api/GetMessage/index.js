module.exports = async function (context, req) {
  const date = "2022-03-05T11:08:48.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

