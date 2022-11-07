module.exports = async function (context, req) {
  const date = "2022-11-07T03:22:57.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

