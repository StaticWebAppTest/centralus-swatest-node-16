module.exports = async function (context, req) {
  const date = "2022-06-06T06:13:52.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

