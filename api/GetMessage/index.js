module.exports = async function (context, req) {
  const date = "2022-09-07T10:13:06.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

