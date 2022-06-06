module.exports = async function (context, req) {
  const date = "2022-06-06T21:09:15.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

