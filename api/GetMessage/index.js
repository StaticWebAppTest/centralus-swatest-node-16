module.exports = async function (context, req) {
  const date = "2022-08-18T10:13:41.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

