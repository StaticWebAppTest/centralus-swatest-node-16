module.exports = async function (context, req) {
  const date = "2022-09-04T05:29:50.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

