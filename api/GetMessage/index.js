module.exports = async function (context, req) {
  const date = "2022-08-04T03:21:25.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

