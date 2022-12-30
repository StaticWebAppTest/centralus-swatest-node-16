module.exports = async function (context, req) {
  const date = "2022-12-30T05:08:36.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

