module.exports = async function (context, req) {
  const date = "2022-11-07T19:09:22.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

