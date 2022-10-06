module.exports = async function (context, req) {
  const date = "2022-10-06T23:15:29.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

