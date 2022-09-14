module.exports = async function (context, req) {
  const date = "2022-09-14T21:10:24.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

