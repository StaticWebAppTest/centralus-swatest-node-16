module.exports = async function (context, req) {
  const date = "2022-05-06T03:35:01.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

