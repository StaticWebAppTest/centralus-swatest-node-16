module.exports = async function (context, req) {
  const date = "2022-12-01T20:09:58.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

